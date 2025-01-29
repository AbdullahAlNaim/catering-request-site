<template>
  <main id="gallery-section">
    
    <h1>Gallery Page</h1>
    <hr>

    <section id="gallery-img-grid" v-for="cake in galleryStore.gallery">
      <img class="gallery-img" :src="cake.cake_image" alt="">
    </section>

  </main>
</template>

<script>
import { useGalleryStore } from '../stores/content/galleryStore';

export default {
  setup () {
    const galleryStore = useGalleryStore();
    const loadGallery = () => {
      console.log('requesting gallery...');
      galleryStore.galleryView();
      console.log('successfully loaded')
    }

    return { galleryStore, loadGallery }
  },
  mounted (){
    this.galleryStore.galleryView();
  }
}
</script>

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