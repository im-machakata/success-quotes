<script lang="ts" setup>
const route = useRoute();
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
const isHome = route.fullPath == "/";
</script>

<template>
    <div class="quote" :class="{
        'select-all': !isHome,
        'cursor-pointer': isHome
    }">
        <p class="text-gray-700">
            <q class="line-clamp-3 lg:line-clamp-4">{{ text }}</q>
        </p>
        <p class="text-gray-500 text-sm mt-2 line-clamp-1">&ndash; {{ author }}</p>
    </div>
</template>

<style>
.quote {
    @apply bg-white p-4 rounded-lg shadow border-2 border-green-600 flex flex-col justify-between;
}
</style>