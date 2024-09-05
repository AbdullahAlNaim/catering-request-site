<script>
export default {
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: '',
      }
    }
  },
  methods: {
    submitForm() {
      fetch('http://localhost:3000/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(this.form),
      })
      .then(response => response.text())
      .then(data => {
        console.log(data);
        alert('Email sent successfully to ' + this.form.email)
      })
      .catch(error => {
        console.error(error);
        alert('Failed to send email');
      })
    }
  }
}
</script>

<template>
  <nav-bar></nav-bar>
  <main id="contact-section">
    <h1>Contact Page</h1>
    <hr>
    <section>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, ea. Impedit et, inventore a vitae dolorem aliquam placeat, consequuntur officiis voluptatem officia aperiam fugit cumque ex dolor quidem. Enim, illum?</p>

      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, ea. Impedit et, inventore a vitae dolorem aliquam placeat, consequuntur officiis voluptatem officia aperiam fugit cumque ex dolor quidem. Enim, illum?</p>

    </section>
    <section id="contact-form">
      <form @submit.prevent="submitForm">
        <div id="contact-top">
          <div class="contact-top-halfs">
            <label for="Name">Name</label>
            <br>
            <input v-model="form.name" type="text">
          </div>
          <div class="contact-top-halfs">
            <label for="email">email</label>
            <br> 
            <input v-model="form.email" type="email">
          </div>
        </div>
        <br>
        <label for="message">Message</label>
        <br>
        <input v-model="form.message" id="contact-msg-box" type="text">
        <br>
        <br>
        <input type="submit" value="Send">
      </form>
    </section>
  </main>
  <br>
  <footing id="bottom-section"></footing>
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