<script setup>
defineProps({
  navigationTree: {
    type: Array,
    default: () => []
  }
})

// how do I access the navigation tree in define props??
// if I can access navigation tree I can extract the clickbale links and list them in my blog page 
// how do I link my blog posts in my content folder? without displaying the parent folder??

</script>

<template>
  <ul class="navigation">
    <li v-for="(item, index) in navigationTree" :key="index">
      <NuxtLink :to="item._path">
        {{ item.title }}
      </NuxtLink>
      <AppNavigation v-if="item.children" :navigation-tree="item.children" class="sub-navigation" />
    </li>
  </ul>
</template>

<style scoped>
.navigation li {
  list-style-type: '_ ';
}

.navigation ul {
  margin-left: .8rem;
}
</style>
