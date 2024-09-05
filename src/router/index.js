import { createRouter, createWebHistory } from 'vue-router'
import.meta.env.BASE_UR

import Home from '../views/Home.vue'
import Gallery from '../views/Gallery.vue'
import About from '../views/About.vue'
import Menu from '../views/Menu.vue'
import Order from '../views/Order.vue'
import Contact from '../views/Contact.vue'
import Facts from '../views/Facts.vue'
// import Pricing from '../views/Pricing.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/gallery',
    name: 'Gallery',
    component: Gallery
  },
  {
    path: '/About',
    name: 'About',
    component: About
  },
  {
    path: '/Menu',
    name: 'Menu',
    component: Menu
  },
  {
    path: '/Contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/Facts',
    name: 'Facts',
    component: Facts
  },
  // {
  //   path: '/Pricing',
  //   name: 'Pricing',
  //   component: Pricing
  // },
  {
    path: '/Order',
    name: 'Order',
    component: Order
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})


export default router