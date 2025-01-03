<script setup>
useHead({
  meta: [
    { name: 'author', content: 'Isaac Machakata' },
    { name: 'keywords', content: 'success quotes, motivational quotes, business quotes'},
    { name: "google-adsense-account", content: "ca-pub-6238806291448360" }
  ],
  link: [
    { rel: 'icon', href: 'https://img.icons8.com/?size=100&id=61893&format=png&color=239d53', type: 'image/png' }
  ],
})
</script>
<template>
  <main>
    <nav-bar />
    <nuxt-page />
  </main>
</template>
<style>
* {
  @apply font-[Nunito];
}

body {
  @apply bg-gray-50;
}
</style>