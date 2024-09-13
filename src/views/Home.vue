<script>
  
</script>

<template>
  <div id="page-size">
    <section>
      <jumbotron></jumbotron>
      <share-social id="middle-section"></share-social>
      <gallery-preview class="parts"></gallery-preview>
      <about-preview class="parts"></about-preview>
    </section>
  </div>
  
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