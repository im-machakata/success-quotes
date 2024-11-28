<script setup>
const quotes = ref([
    { id: 1, text: 'The only way to do great work is to love what you do.', author: 'Steve Jobs' },
    { id: 2, text: 'The only thing that stands between you and your dream is the will to try and the belief that it is actually possible.', author: 'Joel Brown' },
    // Add more quotes here
]);
useSeoMeta({
    title: "Success Quotes",
    description: "Browse through our motivational list of quotes by many inspiring successful people."
});
</script>

<template>
    <div class="container mx-auto p-4">
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            <quote-preview :author="quote.author" :text="quote.text" :quoteId="quote.id" v-for="quote in quotes" :key="quote.id" />
        </div>
    </div>
</template>

<style>
.quote {
    @apply bg-white p-4 rounded-lg shadow border-2 border-green-800;
}
</style>