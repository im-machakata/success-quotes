<script lang="ts" setup>
const route = useRoute();
const props = defineProps({
    quote: {
        type: Object,
        required: true,
    }
});
const isHome = route.fullPath == "/";
</script>

<template>
    <NuxtLink :href="(isHome ?'/quote/' + quote.$id : '')" class="quote" :class="{
        'select-all': !isHome,
    }" >
        <q class="text-gray-700 line-clamp-3 lg:text-lg">{{ quote.text }}</q>
        <p class="text-gray-500 mt-2 line-clamp-1">&ndash; {{ quote.author }}</p>
    </NuxtLink>
</template>

<style scoped>
.quote {
    @apply bg-white p-4 rounded-lg shadow border-2 border-green-600 flex flex-col justify-between;
}
</style>