<script></script>

<template>
  <main>
    <section id="gallery-link">
      <h1>CAKE GALLERY</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime tempore, reprehenderit nobis pariatur quas aliquam ad!</p>
      <button id="view-gallery">VIEW GALLERY</button>
    </section>
    <section id="gallery-mini">
      <img class="front-show" src="../assets/wedding-pink.jpg" alt="">
      <img class="front-show" id="matching" src="../assets/wedding-short.jpg" alt="">
    </section>
  </main>

</template>

<style scoped>
body {
  background-color: aliceblue;
}

main {
  display: flex;
  background-color: rgb(207, 215, 221);
  padding: 60px 20px 60px 20px;
}

.front-show {
  width: 300px;

}

#matching {
  height: 168px;
}

#gallery-link {
  width: 50%;
}

#gallery-link button {
  padding: 10px;
  border-radius: 20px;
  border: 0;
}

#view-gallery:hover {
  background-color: rgb(176, 207, 235);
  color: white;
}

#gallery-mini {
  width: 50%;
  text-align: center;
}
</style>