<script setup>
const quotes = ref([
    { id: 1, text: 'The only way to do great work is to love what you do.', author: 'Steve Jobs' },
    { id: 2, text: 'The only thing that stands between you and your dream is the will to try and the belief that it is actually possible.', author: 'Joel Brown' },
    // Add more quotes here
]);
</script>

<template>
    <div class="container mx-auto p-4">
        <h1 class="text-3xl font-bold mb-4">Success Quotes</h1>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <div v-for="quote in quotes" :key="quote.id" class="bg-white p-4 rounded-lg shadow-md">
                <p class="text-gray-700">"{{ quote.text }}"</p>
                <p class="text-gray-500 text-sm mt-2">- {{ quote.author }}</p>
            </div>
        </div>
    </div>
</template>