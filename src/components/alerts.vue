<script setup>
const props = defineProps({
    message: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: false,
        default: 'success'
    },
});
</script>

<template>
    <div class="alert" :class="{
        'alert-error': type.includes('error'),
        'alert-success': type.includes('success'),
    }">
        <NuxtImg src="https://img.icons8.com/?size=100&id=59757&format=png&color=ffffff" />
        <span class="alert-text flex-grow">{{ message }}</span>
    </div>
</template>

<style scoped>
.alert {
    @apply bottom-10 right-10 fixed p-4 rounded-lg shadow flex gap-2 items-center lg:w-1/5 z-10 transition duration-200;
}
.alert img {
    @apply h-6 w-6;
}
.alert-success {
    @apply bg-green-600 text-white;
}
.alert-danger {
    @apply bg-red-600 text-white;
}
</style>