<script>
export default {
  data() {
    return {
      home: true,
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
    words(chosen,payload) {
      this.chosen = payload;
      console.log('Received', chosen, payload, this.chosen);
      console.log(this.home);
    }
  }
}
</script>

<template>
  <nav-bar @some-event="words"></nav-bar>
  <div id="page-size">
    <section v-if="home">
    <jumbotron></jumbotron>
    <share-social id="middle-section"></share-social>
    <gallery-preview class="parts"></gallery-preview>
    <about-preview class="parts"></about-preview>
  </section>
  </div>
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
