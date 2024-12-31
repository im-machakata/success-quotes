<script setup>
const { isHome } = useHome(); 
</script>
<template>
    <nav class="sticky top-0 shadow-md">
        <div class="bg-green-600 p-4 ">
            <div class="container mx-auto flex justify-between items-center">
                <div>
                    <img src="https://img.icons8.com/?size=100&id=83218&format=png&color=ffffff" alt="icon1"
                        class="h-5 w-5 cursor-pointer" />
                </div>
                <NuxtLink href="/">
                    <h1 class="text-white text-xl font-semibold">Success Quotes</h1>
                </NuxtLink>
                <div>
                    <img src="https://img.icons8.com/?size=100&id=nW13R0mG31QB&format=png&color=ffffff" alt="icon2"
                        class="h-5 w-5 cursor-pointer" />
                </div>
            </div>
        </div>
    </nav>
</template>
