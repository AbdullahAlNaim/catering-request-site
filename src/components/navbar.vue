<script>
export default {
  data() {
    return {
      
    }
  },
  methods: {
  }
}
</script>

<template>
  <nav id="navo">
    <ul id="left-list" class="top-lists nav-list">
      <li><router-link class="nav-button" to="/"><strong>HOME</strong></router-link></li>
      <li><router-link class="nav-button" to="/gallery"><strong>GALLERY</strong></router-link></li>
      <li><router-link class="nav-button" to="/Menu"><strong>MENU</strong></router-link></li>
      <li><router-link class="nav-button" to="/About"><strong>ABOUT</strong></router-link></li>
    </ul>

    <h1 id="page-title"><a href="">SWEETCHILLI</a></h1>

    <ul id="right-list" class="top-lists nav-list">
      <li><router-link class="nav-button"  to="/Contact"><strong>CONTACT</strong></router-link></li>
      <li><router-link class="nav-button"  to="/Facts"><strong>FACTS</strong></router-link></li>
      <!-- <li><router-link class="nav-button"  to="/Pricing"><strong>PRICING</strong></router-link></li> -->
      <li><router-link class="nav-button"  to="/Order"><strong>ORDER NOW</strong></router-link></li>
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


#navo ul li {
  margin: 0;
}

.nav-button {
  height: 100%;
}


#right-list {
  /* background-color: orange; */
}

.nav-button {
  padding: 25px;
  color: white;
  height: 100%;
  width: 100%;
  margin: 0;
}

.nav-button:hover {
  background-color: white;
  color: rgb(78, 155, 185);
}

.top-lists li {
  margin-right: 5px;
  list-style: none;
  height: 100%;
  top: 0;
  margin-top: 0;
}

.top-lists li a, #page-title a {
  color: white;
  text-decoration: none;
}

/* .top-lists {
  margin: 0;
} */
</style>