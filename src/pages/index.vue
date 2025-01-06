<script setup>
const quote = ref({});
const quotes = ref([]);
const toastMessage = ref('');
const quoteToggled = ref(false);
const loadingQuotes = ref(true);
const hideToastOnPhone = ref(false);
const runtimeConfig = useRuntimeConfig();
const { database, Query } = useAppwrite();

const openQuote = (quoteItem) => {
    quote.value = quoteItem;
    quoteToggled.value = true
};

const closeQuote = e => {
    quoteToggled.value = false;
}

const showCopiedMessage = e => {
    hideToastOnPhone.value = true;
    toastMessage.value = 'Copied to clipboard!';
    setTimeout(() => {
        hideToastOnPhone.value = false;
        toastMessage.value = '';
    }, 5000);
}

const toastComingSoon = () => {
    toastMessage.value = 'Coming soon!';
    setTimeout(() => {
        toastMessage.value = '';
    }, 5000);
}

const loadQuotes = lastId => {
    const filter = [
        Query.orderAsc('text'),
        Query.limit(24),
    ];
    if (lastId) filter.push(Query.offset(lastId));
    return database.listDocuments(
        runtimeConfig.public.database,
        runtimeConfig.public.quotesTable,
        filter
    );
}

const loadMore = () => {
    loadingQuotes.value = true;
    loadQuotes(quotes.value.length).then(function (response) {
        if (response.documents.length === 0) {
            toastMessage.value = 'No new quotes available.';
            setTimeout(() => {
                toastMessage.value = '';
            }, 5000);
            loadingQuotes.value = false;
            return;
        } else {
            quotes.value = [...quotes.value, ...response.documents];
        }

        loadingQuotes.value = false;
    }, function (error) {
        console.log(error);
        loadingQuotes.value = false;
    });
}

onMounted(() => {
    loadQuotes().then(function (response) {
        quotes.value = response.documents;
        loadingQuotes.value = false;
    }, function (error) {
        console.log(error);
        loadingQuotes.value = false;
    });
});

useSeoMeta({
    title: "Success Quotes",
    description: "Browse through our motivational list of quotes by many inspiring successful people."
});
</script>

<template>
    <div class="quotes-container mx-auto p-4">
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 py-4">
            <spinners-loading v-show="loadingQuotes" class="col-span-5" />
            <lazy-quotes-preview v-show="!loadingQuotes" :quote="quote_item" v-for="quote_item in quotes"      
                :key="quote_item.$id" @open-quote="openQuote" />
        </div>
        <lazy-quotes-view v-show="quoteToggled" @close-quote="closeQuote" @share-quote="toastComingSoon" @author-quotes="toastComingSoon" :quote="quote"
            @quote-copied="showCopiedMessage" />
        <lazy-alerts v-show="toastMessage" :message="toastMessage" />
        <div class="flex items-center justify-center">
            <NuxtLink v-show="!loadingQuotes"
                class="border-2 border-green-600 bg-white p-2 rounded-lg mb-4 px-4 cursor-pointer text-sm"
                @click.prevent="loadMore">More Quotes</NuxtLink>
        </div>
    </div>
</template>

<style>
.quotes-container {
    @apply max-w-[1200px];
}

::-webkit-scrollbar {
    @apply w-2;
}

::-webkit-scrollbar-track {
    @apply bg-green-50;
}

::-webkit-scrollbar-thumb {
    @apply bg-green-400 hover:bg-green-500 rounded;
}
</style>