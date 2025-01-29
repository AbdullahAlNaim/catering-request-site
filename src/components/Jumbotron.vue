<script>
import { useJumbotronStore } from '../stores/content/jumbotronStore';
export default {
  setup () {
    const jumboStore = useJumbotronStore();
    return { jumboStore }
  },
  mounted () {
    this.jumboStore.fetchJumbotron();
  }
}
</script>

<template>
  <main id="main-jumbo">
    <section id="jumbo-section">
      <img id="jumbo-img" :src="jumboStore.jumbotronImage" alt="">
    </section>
    <section id="jumbo-link">
      <!-- <div class="jumbo-aligner">

      </div>
      <div class="jumbo-aligner">
        <div> -->
          <h1>{{ jumboStore.jumbotronTitle }}</h1>
          <p>{{ jumboStore.jumbotronText }}</p>
          <button id="jumbo-button">ORDER NOW</button>
        <!-- </div>
      </div>
      <div class="jumbo-aligner">

      </div> -->
      
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
  top: 30%;
  left: 33%;
  right: 33%;
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

/* #jumbo-link .jumbo-aligner {
  width: 33%;
  height: 50px;
  background-color: green;
} */


</style>