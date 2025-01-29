<template>
    <div class="jumbo-edit" v-if="userStore.userAuthenticated">
        <h2>Jumbotron Edit</h2>
        <form @submit.prevent="jumbotronStore.updateJumbo">
            <input type="text" v-model="jumbotronStore.jumbotronTitle"><br>
            <input type="textbox" v-model="jumbotronStore.jumbotronText"><br>
            <input type="file" id="image" name="image" accept="/image" @change="onFileChange"><br>
            <button type="submit">update</button><br>
            <img :src="jumbotronStore.jumbotronImage" alt="cake big image"><br>
        </form>
    </div>
    <div v-else>
        <p>Invalid Access</p>
    </div>
</template>

<script>
import { useUserStore } from '../stores/user/userStore';
import { useJumbotronStore } from '../stores/content/jumbotronStore';
    export default {
        setup () {
            const userStore = useUserStore();
            const jumbotronStore = useJumbotronStore();

            const onFileChange = (event) => {
                const file = event.target.files[0];
                console.log('attempt jumbo img file: ', file);
                if (file) {
                    jumbotronStore.jumbotronImage = file;
                    jumbotronStore.fileUploaded = true;
                    console.log('jumbo img is now this: ', jumbotronStore.jumbotronImage);
                }
            }

            return { userStore, jumbotronStore, onFileChange }
        },
        methods: {
        },
        mounted () {
            this.jumbotronStore.fetchJumbotron();
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