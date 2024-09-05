<template>
  <nav-bar></nav-bar>
  <main id="gallery-section">
    <h1>Gallery Page</h1>
    <hr>
    <section id="gallery-img-grid">
      <img class="gallery-img" src="../assets/light-green-pink-cake.jpg" alt="">
      <img class="gallery-img" src="../assets/light-green-pink-cake.jpg" alt="">
      <img class="gallery-img" src="../assets/light-green-pink-cake.jpg" alt="">

      <img class="gallery-img" src="../assets/light-green-pink-cake.jpg" alt="">
      <img class="gallery-img" src="../assets/light-green-pink-cake.jpg" alt="">
      <img class="gallery-img" src="../assets/light-green-pink-cake.jpg" alt="">

      <img class="gallery-img" src="../assets/light-green-pink-cake.jpg" alt="">
      <img class="gallery-img" src="../assets/light-green-pink-cake.jpg" alt="">
      <img class="gallery-img" src="../assets/light-green-pink-cake.jpg" alt="">
    </section>
  </main>
  

  <footing id="bottom-section"></footing>
</template>

<style scoped>


#gallery-section {
  width: 80%;
  margin: auto;
  padding: 20px 0 20px 0;
}



#gallery-img-grid {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap; 
}

.gallery-img {
  width: 31%;
  padding: 10px;
  margin: auto;
}
</style>