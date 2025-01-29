<script>
import { useGalleryPreviewStore } from '../stores/content/galleryPreviewStore';
export default {
  setup () {
    const galleryPreviewStore = useGalleryPreviewStore();
    return { galleryPreviewStore }
  },
  data() {
    return {
      gallery: false,
      home: true,
    }
  },
  methods: {
    onGallery() {
      this.$emit('gallery-event', !this.gallery);
    }
  },
  mounted () {
    this.galleryPreviewStore.fetchGalleryPreview();
  }
}
</script>

<template>
  <main>
    <section id="gallery-link">
      <h1>{{ galleryPreviewStore.galleryPreviewTitle }}</h1>
      <p>{{ galleryPreviewStore.galleryPreviewText }}</p>
      <button id="view-gallery">VIEW GALLERY</button>
    </section>
    <section id="gallery-mini">
      <img class="front-show" src="../assets/wedding-pink.jpg" alt="">
      <img class="front-show" src="../assets/wedding-pink.jpg" alt="">
    </section>
  </main>

</template>

<style scoped>
body {
  background-color: aliceblue;
}

main {
  display: flex;
  /* background-color: rgb(207, 215, 221); */
  background-color: rgb(120, 186, 212);
  color: white;
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

#gallery-mini .front-show {
  width: 50%;
}
</style>