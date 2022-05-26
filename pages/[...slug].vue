<script setup lang="ts">
let input = ref("")
let checkInput = (input) => {
  if (input == "whois") {
    
  }
}
</script>

<template>
  <main>
    <input type="text" v-model="input" @click="checkInput" >

    <ContentDoc />

  </main>
</template>
