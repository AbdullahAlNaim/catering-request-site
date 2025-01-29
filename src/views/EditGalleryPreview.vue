<template>
    <div class="jumbo-edit" v-if="userStore.userAuthenticated">
        <h2>Gallery Preview Edit</h2>
        <form @submit.prevent="galleryPreviewStore.updateGalleryPreview">
            <input type="text" v-model="galleryPreviewStore.galleryPreviewTitle"><br>
            <input type="textbox" v-model="galleryPreviewStore.galleryPreviewText"><br>
            <input type="file" id="image" name="image" accept="/image" @change="onFileChange"><br>
            <button type="submit">update</button><br>
            <!-- <img :src="jumbotronStore.jumbotronImage" alt="cake big image"><br> -->
        </form>
    </div>
    <div v-else>
        <p>Invalid Access</p>
    </div>
</template>

<script>
import { useUserStore } from '../stores/user/userStore';
import { useGalleryPreviewStore } from '../stores/content/galleryPreviewStore';
    export default {
        setup () {
            const userStore = useUserStore();
            const galleryPreviewStore = useGalleryPreviewStore();

            const onFileChange = (event) => {
                const file = event.target.files[0];
                console.log('attempt jumbo img file: ', file);
                if (file) {
                    jumbotronStore.jumbotronImage = file;
                    jumbotronStore.fileUploaded = true;
                    console.log('gallery img is now this: ', jumbotronStore.jumbotronImage);
                }
            }

            return { userStore, galleryPreviewStore, onFileChange }
        },
        methods: {
        },
        mounted () {
            this.galleryPreviewStore.fetchGalleryPreview();
        }
    }
</script>

<style scoped>
.jumbo-edit {
    width: 500px;
    margin: 20px auto;
    background-color: rgb(108, 162, 199);
    text-align: center;
    padding: 10px;
    border-radius: 5px;
}

button {
    border-radius: 2px;
}

.jumbo-edit img {
    max-height: 300px;
    /* max-width: 400px; */
    padding: 5px;
}
</style>