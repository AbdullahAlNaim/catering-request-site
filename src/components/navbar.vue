<script>
export default {
  data() {
    return {
      home: true,
      gallery: false,
      menu: false,
      about: false,
      contact: false,
      facts: false,
      pricing: false,
      order:false,
    }
  },
  methods: {
    toggle(pickedPage) {
      this.home = false;
      this.gallery = false;
      this.menu= false;
      this.about= false;
      this.contact= false;
      this.facts= false;
      this.pricing= false;
      this.order= false;

      this.pickedPage = !this.pickedPage
      return this.pickedPage;
    },
    onHome() {
      // event.preventDefault();
      
      this.$emit('some-event', 'home', this.toggle('home'));
    },
    onGallery() {

      this.$emit('some-event','gallery', this.toggle('gallery'));
    },
    onMenu() {
      this.$emit('some-event', this.menu);
    },
    onAbout() {
      this.$emit('some-event', this.about);
    },
    onContact() {
      this.$emit('some-event', this.contact);
    },
    onFacts() {
      this.$emit('some-event', this.facts);
    },
    onPricing() {
      this.$emit('some-event', this.pricing);
    },
    onOrderNow() {
      this.$emit('some-event', this.order);
    }
  },
}
</script>

<template>
  <nav id="navo">
    <ul id="left-list" class="top-lists">
      <li><button class="nav-button" @click.prevent="onHome" href=""><strong>HOME</strong></button></li>
      <li><button class="nav-button" @click.prevent="onGallery" href=""><strong>GALLARY</strong></button></li>
      <li><button class="nav-button" @click.prevent="onMenu" href=""><strong>MENU</strong></button></li>
      <li><button class="nav-button" @click.prevent="onAbout" href=""><strong>ABOUT</strong></button></li>
    </ul>

    <h1 id="page-title"><a href="">SWEET CHILLI</a></h1>

    <ul id="right-list" class="top-lists">
      <li><button class="nav-button"  @click.prevent="on" href=""><strong>CONTACT</strong></button></li>
      <li><button class="nav-button"  @click.prevent="on" href=""><strong>FACTS</strong></button></li>
      <li><button class="nav-button"  @click.prevent="on" href=""><strong>PRICING</strong></button></li>
      <li><button class="nav-button"  @click.prevent="on" href=""><strong>ORDER NOW</strong></button></li>
    </ul>
  </nav>
</template>

<style scoped>
#navo {
  background-color: rgb(78, 155, 185);
  display: flex;
  justify-content: space-between;
  width: 100%;
  color: white;
} 

#navo .top-lists {
  display: flex;
  color: rgb(78, 155, 185);
}

.top-lists {
  width: 33%;
}

#page-title {
  width: 33%;
  text-align: center;
}

#left-list {
  padding-left: 5px;
}

.top-list #right_list{
  padding-left: 200px;
  background-color: orange;
}

.top-lists button {
  width: 100%;
  height: 100%;
  border: 0;
  background-color: (78, 155, 185);
  padding: 0 20px;
}

.nav-button {
  background-color: rgb(78, 155, 185);
  color: white;
}

.nav-button:hover {
  background-color: white;
  color: rgb(78, 155, 185);
}

.top-lists li {
  margin-right: 5px;
  list-style: none;
}

.top-lists li a, #page-title a {
  color: white;
  text-decoration: none;
}
.top-lists {
  margin: 0;
}

.top-lists li {
  height: 100%;
  top: 0;
  margin-top: 0;
}

.top-lists li a {
  height: 100%;
  width: 20px;
}
</style>