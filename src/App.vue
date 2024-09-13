<script setup>
</script>

<template>
  <nav-bar></nav-bar>
  <router-view></router-view>
  <footing id="bottom-section"></footing>
</template>

<style scoped>
#bottom-section {
  padding: 1rem;
  display: flex;
  flex-direction: column-reverse;
  position: relative;
}
</style>
