import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Navbar from './components/navbar.vue'
import Jumbotron from './components/Jumbotron.vue'
import Footing from './components/Footing.vue'

const app = createApp(App);

app.component('nav-bar', Navbar);
app.component('jumbotron', Jumbotron);
app.component('footing', Footing);

app.mount('#app')

