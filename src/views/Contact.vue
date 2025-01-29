<script>
import { useContactStore } from '../stores/contact/contactStore';
export default {
  setup () {
    const contactStore = useContactStore();
    return {contactStore}
  }
}
</script>

<template>
  <main id="contact-section">
    <h1>Contact Page</h1>
    <hr>
    <section>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, ea. Impedit et, inventore a vitae dolorem aliquam placeat, consequuntur officiis voluptatem officia aperiam fugit cumque ex dolor quidem. Enim, illum?</p>

      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, ea. Impedit et, inventore a vitae dolorem aliquam placeat, consequuntur officiis voluptatem officia aperiam fugit cumque ex dolor quidem. Enim, illum?</p>
    </section>
    <section id="contact-form">
      <form @submit.prevent="contactStore.sendEmail()">
        <div id="contact-top">
          <div class="contact-top-halfs">
            <label for="Name">Name</label>
            <br>
            <input v-model="contactStore.customer_name" type="text">
          </div>
          <div class="contact-top-halfs">
            <label for="email">email</label>
            <br> 
            <input v-model="contactStore.customer_email" type="email">
          </div>
        </div>
        <br>
        <label for="message">Message</label>
        <br>
        <input v-model="contactStore.customer_message" id="contact-msg-box" type="textbox">
        <br>
        <br>
        <input type="submit" value="Send">
      </form>
    </section>
  </main>
  <br>
</template>

<style scoped>
#contact-section {
  width: 80%;
  margin: auto;
}


#contact-form {
  display: flex;
  justify-content: center;
  margin: auto;
}

#contact-top {
  display: flex;
  justify-content: space-between;
  margin: auto;
}

.contact-top-halfs  {
  width: 100%;
}

.contact-top-halfs input {
  width: 90%;
}

#contact-msg-box {
  width: 500px;
  height: 100px;
}
</style>