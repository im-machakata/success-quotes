<script lang="ts" setup>
const props = defineProps({
    quote: {
        type: Object,
        required: true,
    },
});
const toastMessage = ref("");
const quoteCopied = ref(false);
const emit = defineEmits([
    'close-quote',
    'quote-copied'
]);
const copyQuote = () => {
    const {text, author} = props.quote;
    navigator.clipboard.writeText(`"${text}" - ${author}`);
    emit('close-quote');
    emit('quote-copied');
}
</script>

<template>
    <section class="container-full transition duration-700 ease-in-out">
        <div class="w-3/4 lg:w-1/3">
            <div class="close-btn flex flex-col items-center justify-center mb-4">
                <LazyNuxtImg src="https://img.icons8.com/?size=100&id=AqDEb8mCIrk9&format=png&color=239d53" class="h-12 w-12 lg:h-16 lg:w-16 cursor-pointer shadow rounded-full bg-white/60 mb-2" @click="$emit('close-quote')"/>
            </div>
            <div class="quote single select-none">
                <q class="text-gray-700 lg:text-lg">{{ quote.text }}</q>
                <p class="text-gray-700 font-bold text-md">&ndash; {{ quote.author }}</p>
            </div>

            <div class="quote-icons">
                <quotes-icon url="https://img.icons8.com/?size=100&id=cMQQAnQp9rQR&format=png&color=000000" @click="copyQuote" class="cursor-pointer" id="copy" />
                <quotes-icon url="https://img.icons8.com/?size=100&id=98959&format=png&color=000000" id="share" />
                <quotes-icon url="https://img.icons8.com/?size=100&id=98957&format=png&color=000000" id="author" />
            </div>
        </div>
    </section>
</template>

<style scoped>
.container-full {
    @apply bg-white/40 fixed top-0 left-0 right-0 w-screen h-full flex flex-col justify-center place-items-center mx-auto backdrop-blur-sm;
}
.quote {
    @apply bg-white/90 p-4 rounded-lg shadow border-2 border-green-600 flex flex-col gap-2 justify-between text-lg
}

.quote-icons {
    @apply flex justify-end gap-2 mt-2;
}

</style>