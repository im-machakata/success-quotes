<script setup>
const runtimeConfig = useRuntimeConfig();
const { database, Query } = useAppwrite();
const quotes = ref([]);

const dbConnection = database.listDocuments(
    runtimeConfig.public.database,
    runtimeConfig.public.quotesTable, 
    [ 
        Query.orderAsc('text'),
    ]
);

onMounted(() => {
    dbConnection.then(function (response) {
        quotes.value = response.documents;
    }, function (error) {
        console.log(error);
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
            <loading-spinner v-if="!quotes.length" class="col-span-5" />
            <lazy-quote-preview :author="quote.author" :text="quote.text" :quoteId="quote.id" v-for="quote in quotes"
                :key="quote.id" />
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
    @apply bg-green-400 hover:bg-green-500;
}
</style>