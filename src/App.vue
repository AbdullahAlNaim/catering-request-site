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
  <router-view></router-view>
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
