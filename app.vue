<script setup>

// i have a clickable link
// add a component in blogs md page
// for each children.item in 
// I can maybe create
const { data: navigation } = await useAsyncData('navigation', () => {
  return fetchContentNavigation(queryContent('/posts/').where({title: { $regex: ' ' }}))
})
</script>

<template>
  <div class="sm:py-10">
    <Html lang="en" />
    <Meta property="og:image" content="/cover.jpg" />
    <Meta name="twitter:card" content="summary_large_image" />
    <Navbar />
    <NuxtPage />
      <pre>    {{ navigation }}  </pre>
        <nav>
        <AppNavigation :navigation-tree="navigation" />
      </nav>
  </div>

</template>

<style lang="postcss">
body {
  @apply bg-gray-50 dark:bg-gray-900;
}
</style>
