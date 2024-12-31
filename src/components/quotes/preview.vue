<script setup>
const props = defineProps({
    quote: {
        type: Object,
        required: true,
    }
});
defineEmits(['open-quote']);
</script>

<template>
    <article class="quote" @click="$emit('open-quote', quote)">
        <q class="text-gray-700 line-clamp-3 lg:text-lg">{{ quote.text }}</q>
        <p class="text-gray-500 mt-2 line-clamp-1 flex items-center gap-2">
            <NuxtImg src="https://img.icons8.com/?size=100&id=ABBSjQJK83zf&format=png&color=229c52" class="rounded-lg border-2 border-green-600" /> 
            <span class="flex-grow truncate text-green-700 pr-2">{{ quote.author }}</span>
        </p>
    </article>
</template>

<style scoped>
.quote {
    @apply bg-white p-4 rounded-lg shadow border-2 border-green-600 flex flex-col justify-between cursor-pointer;
}
.quote p img {
    @apply h-4 w-4;
}
</style>