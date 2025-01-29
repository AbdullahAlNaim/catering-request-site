<template>
    <div>
        <h1>Dashboard</h1>
        <hr>
        <main>
            <h2>Edit Sections</h2>
            <section>
                <article>
                    <button @click="jumbotron">Jumbotron</button>
                </article>
                <article>
                    <button @click="galleryPreview">Gallery Preview</button>
                </article>
                <article>
                    <button @click="aboutMe">About Me</button>
                </article>
                <article>
                    <button @click="galleryPage">Gallery Page</button>
                </article>
            </section>
        </main>
    </div>
</template>

<script>
import router from '../router'
    export default {
        methods: {
            jumbotron () {
                router.replace('/api/edit-jumbotron')
            },
            galleryPreview () {
                router.replace('/api/edit-gallery-preview')
            },
            aboutMe () {
                router.replace('/api/aboutme')
            },
            galleryPage () {
                router.replace('/api/edit-gallery')
            }
        }
    }
</script>

<style scoped>
article {
    display: flex;
    justify-content: center;
    margin: 10px;
}

button {
    padding: 20px;
    border-radius: 10px;
    border: solid 0px;
    font-size: 15px;
}

button:hover {
    background-color: rgb(118, 176, 228);
    color: white;
}
</style>