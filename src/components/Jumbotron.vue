<script></script>

<template>
  <main id="main-jumbo">
    <section id="jumbo-section">
      <img id="jumbo-img" src="../assets/wedding-short.jpg" alt="">
    </section>
    <section id="jumbo-link">
      <h1>DINOIR CAKES</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
      <button id="jumbo-button">ORDER NOW</button>
    </section>
    
  </main>
</template>

<style scoped>
#jumbo-img {
  width: 100%;
}

#main-jumbo {
  position: relative;
}

#jumbo-link {
  position: absolute;
  top: 50%;
  left: 45%;
  transform: (-100%, -100%);
  background-color: rgb(97, 174, 204, 0.8);
  padding: 20px;
  border-radius: 20px;
  color: white;
  text-align: center;
}

#jumbo-link button {
  border: 0;
  padding: 10px;
  border-radius: 20px;
}

#jumbo-button:hover {
  background-color: rgb(212, 212, 212);
}


</style>