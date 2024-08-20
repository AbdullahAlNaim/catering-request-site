<script>
export default {
  data() {
    return {
      gallery: false,
      menu: false,
      about: false,
      contact: false,
      facts: false,
      pricing: false,
      order:false,
    }
  },
  methods: {
    words() {
      console.log('hi')
    }
  }
}
</script>

<template>
  <nav-bar></nav-bar>
  <jumbotron></jumbotron>
  <share-social id="middle-section"></share-social>
  <gallery-preview class="parts"></gallery-preview>
  <gallery-preview class="parts"></gallery-preview>
  <footing id="bottom-section"></footing>

</template>

<style scoped>
body {
  height: 800px;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.parts {
  margin-bottom: 75px;
}

#bottom-section {
  padding: 1rem;
  display: flex;
  flex-direction: column-reverse;
  position: relative;
}
</style>
