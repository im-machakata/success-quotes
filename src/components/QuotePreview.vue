<script lang="ts" setup>
const props = defineProps({
    author: {
        type: String,
        required: true,
    },
    text: {
        type: String,
        required: true,
    },
    quoteId: {
        type: Number,
        required: false,
    },
});
</script>

<template>
    <div class="quote">
        <p class="text-gray-700">
            <q class="line-clamp-4">{{ text }}</q>
        </p>
        <p class="text-gray-500 text-sm mt-2">&ndash; {{ author }}</p>
    </div>
</template>

<style>
.quote {
    @apply bg-white p-4 rounded-lg shadow border-2 border-green-800 flex flex-col justify-between select-all;
}
</style>