<script>
</script>

<template>
  <main id="bottom-arrange">
    <section>
      <!-- <img id="logo-show" src="logo-one.png" alt=""> -->
    </section>
    <section class="bottom-list">
      <ul>
        <li><router-link to="/"><strong>HOME</strong></router-link></li>
        <li><router-link to="/gallery"><strong>GALLERY</strong></router-link></li>
        <li><router-link to="/Menu"><strong>MENU</strong></router-link></li>
        <li><router-link to="/About"><strong>ABOUT</strong></router-link></li>
        <li><router-link to="/Contact"><strong>CONTACT</strong></router-link></li>
        <li><router-link to="/Facts"><strong>FACTS</strong></router-link></li>
        <!-- <li><router-link to="/Pricing"><strong>PRICING</strong></router-link></li> -->
        <li><router-link to="/Order"><strong>ORDER NOW</strong></router-link></li>
      </ul>
    </section>
  </main>
</template>

<style scoped>
#bottom-arrange {
  display: flex;
  justify-content: space-between;
  background-color: orange;
}

.bottom-list ul li {
  list-style: none;
}

.bottom-list ul li a:hover {
  color: black;
}

#logo-show {
  width: 50px;
  height: 50px;
}
</style>
