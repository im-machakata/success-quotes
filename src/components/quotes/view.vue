<script lang="ts" setup>
const props = defineProps({
    quote: {
        type: Object,
        required: true,
    },
});
defineEmits(['close-quote'])
</script>

<template>
    <section class="container-full transition">
        <div class="w-3/4 lg:w-1/3">
            <div class="close-btn flex flex-col items-center justify-center mb-4">
                <LazyNuxtImg src="https://img.icons8.com/?size=100&id=AqDEb8mCIrk9&format=png&color=000000" class="h-12 w-12 lg:h-20 lg:w-20 cursor-pointer" @click="$emit('close-quote')"/>
            </div>
            <div class="quote single select-all">
                <q class="text-gray-700 line-clamp-3 lg:line-clamp-4">{{ quote.text }}</q>
                <p class="text-gray-500 text-sm mt-2 line-clamp-1">&ndash; {{ quote.author }}</p>
            </div>

            <div class="quote-icons">
                <quotes-icon url="https://img.icons8.com/?size=100&id=cMQQAnQp9rQR&format=png&color=000000" />
                <quotes-icon url="https://img.icons8.com/?size=100&id=98959&format=png&color=000000" />
                <quotes-icon url="https://img.icons8.com/?size=100&id=98957&format=png&color=000000" />
            </div>
        </div>
    </section>
</template>

<style scoped>
.container-full {
    @apply bg-white/80 fixed top-0 left-0 right-0 w-screen h-full flex flex-col justify-center place-items-center mx-auto;
}
.quote {
    @apply bg-white p-4 rounded-lg shadow border-2 border-green-600 flex flex-col justify-between text-lg
}

.quote-icons {
    @apply flex justify-end gap-2 mt-2;
}

</style>