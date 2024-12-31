<script setup>
defineEmits(['search'])
</script>
<template>
    <section>
        <div class="search-bar">
        <input type="text" name="q" id="query" placeholder="Search quotes here...">
        </div>
    </section>
</template>
<style scoped>
section {
    @apply bg-white py-1;
}
.search-bar {
    @apply container mx-auto flex;
}
.search-bar input {
    @apply w-full p-2 hover:outline-none active:outline-none focus:outline-none placeholder:text-gray-500 lg:text-lg;
}
</style>