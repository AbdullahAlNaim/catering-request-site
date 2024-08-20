<script>
export default {
  data() {
    return {

    }
  },
  methods: {
    noReload(event) {
      event.preventDefault();
      console.log('response')
    }
  }
}
</script>

<template>
  <nav id="navo">
    <ul class="top-lists">
      <li><a @click.prevent="onReload" href="">HOME</a></li>
      <li><a href="">GALLARY</a></li>
      <li><a href="">MENU</a></li>
      <li><a href="">ABOUT</a></li>
    </ul>

    <h1 id="page-title"><a href="">SWEET CHILLI</a></h1>

    <ul class="top-lists">
      <li><a href="">CONTACT</a></li>
      <li><a href="">FACTS</a></li>
      <li><a href="">PRICING</a></li>
      <li><a href="">ORDER NOW</a></li>
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
}

.top-lists li {
  padding: 10px;
  list-style: none;
}

.top-lists li a, #page-title a {
  color: white;
  text-decoration: none;
}

.top-lists li :hover {
  color: green;
}

</style>