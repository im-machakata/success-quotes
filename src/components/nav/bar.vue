<script setup>
const { isHome } = useHome();
const searchToggled = ref(false);

const toggleSearch = () => {
    searchToggled.value = !searchToggled.value
}
</script>
<template>
    <nav class="sticky top-0 shadow-md">
        <div class="bg-green-600 p-4">
            <div class="container mx-auto flex justify-between items-center">
                <NuxtLink href="#search" @click.prevent="toggleSearch">
                    <img src="https://img.icons8.com/?size=100&id=83218&format=png&color=ffffff" alt="open search"
                        class="h-5 w-5 cursor-pointer" v-show="!searchToggled"/>
                    <img src="https://img.icons8.com/?size=100&id=82764&format=png&color=ffffff" alt="close search"
                        class="h-5 w-5 cursor-pointer" v-show="searchToggled"/>
                </NuxtLink>
                <NuxtLink href="/">
                    <h1 class="text-white text-xl font-semibold">Success Quotes</h1>
                </NuxtLink>
                <div>
                    <img src="https://img.icons8.com/?size=100&id=nW13R0mG31QB&format=png&color=ffffff" alt="icon2"
                        class="h-5 w-5 cursor-pointer" />
                </div>
            </div>
        </div>
        <nav-search v-show="searchToggled"/>
    </nav>
</template>
