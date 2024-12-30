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
    <NuxtLink :href="(isHome ?'/quote/' + quoteId : '')" class="quote" :class="{
        'select-all': !isHome,
    }" >
        <q class="text-gray-700 line-clamp-3 lg:text-lg">{{ text }}</q>
        <p class="text-gray-500 mt-2 line-clamp-1">&ndash; {{ author }}</p>
    </NuxtLink>
</template>

<style scoped>
.quote {
    @apply bg-white p-4 rounded-lg shadow border-2 border-green-600 flex flex-col justify-between;
}
</style>