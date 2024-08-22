import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Navbar from './components/navbar.vue'
import Jumbotron from './components/Jumbotron.vue'
import Footing from './components/Footing.vue'
import ShareSocial from './components/ShareSocial.vue'
import GalleryPreview from './components/GalleryPreview.vue'
import AboutPreview from './components/AboutPreview.vue'

const app = createApp(App);

app.component('nav-bar', Navbar);
app.component('jumbotron', Jumbotron);
app.component('footing', Footing);
app.component('share-social', ShareSocial);
app.component('gallery-preview', GalleryPreview);
app.component('about-preview', AboutPreview);

app.mount('#app')

