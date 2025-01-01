<script lang="ts" setup>
const props = defineProps({
    url: {
        type: String,
        required: true
    }
})
</script>

<template>
    <div class="quote-icon">
        <LazyNuxtImg :src="props.url" height="50" width="50" :alt="url"/>
    </div>
</template>

<style scoped>
.quote-icon {
    @apply bg-white/90 rounded-lg shadow border-2 border-green-600 flex flex-col justify-center p-2;
}
img {
    @apply h-6 w-6
}
</style>