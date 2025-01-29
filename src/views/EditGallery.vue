<template>
    <div v-if="userStore.userAuthenticated">
        <h1>Edit Gallery</h1>
        <form @submit.prevent="galleryStore.uploadCakeImage()">
            <input type="file" id="image" name="image" accept="image/" @change="onFileChange"><br>
            <button type="submit">Upload</button>
        </form>
        <br>
        <hr>
        <div v-for="cake in galleryStore.gallery">
            <img :src="cake.cake_image" alt="">
            <input type="file" id="image" name="image" accept="image/" @change="onFileChange">
            <button @click="galleryStore.updateCakeImage(cake.id)">Update</button>
            <button @click="galleryStore.deleteCakeImage(cake.id)">Delete</button>
        </div>
    </div>
    <div v-else>
        <p>Invalid Access</p>
    </div>
</template>


<script>
import { useUserStore } from '../stores/user/userStore';
import { useGalleryStore } from '../stores/content/galleryStore';
export default {
    setup () {
        const userStore = useUserStore();
        const galleryStore = useGalleryStore();
        const onFileChange = (event) => {
            const file = event.target.files[0];
            console.log('attempt upload this file: ',file)
            if (file) {
                galleryStore.cakeImg = file;
                console.log('cakeImg var is now assigned this: ', galleryStore.cakeImg);
            }
        };
        return { userStore, galleryStore, onFileChange }
    },
    mounted () {
        this.galleryStore.galleryView();
    }
}
</script>