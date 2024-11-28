<script setup>
const runtimeConfig = useRuntimeConfig();
const { database } = useAppwrite();
const quotes = ref([]);

const dbConnection = database.listDocuments(
    runtimeConfig.public.database,
    runtimeConfig.public.quotesTable,
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
    <div class="container mx-auto p-4">
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            <quote-preview :author="quote.author" :text="quote.text" :quoteId="quote.id" v-for="quote in quotes"
                :key="quote.id" />
        </div>
    </div>
</template>

<style>
.quote {
    @apply bg-white p-4 rounded-lg shadow border-2 border-green-800;
}
</style>