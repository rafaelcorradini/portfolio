<template>
  <section id="contact">
    <div class="container">
      <h1 class="section-title" v-lang.contact.title>Vamos conversar</h1>
      <h2 class="section-subtitle" v-lang.contact.subtitle>Preencha o formulário e retornarei o mais breve possível.</h2>
      <form v-on:submit="submit" id="contact-form">
        <input type="text" v-model="nameInput" required :placeholder="name" id="name">
        <input type="email" v-model="emailInput" required placeholder="Email*" id="email">
        <textarea type="text" v-model="messageInput" :placeholder="message" id="message"></textarea>
        <button type="submit" class="button" v-lang.contact.button>Enviar</button>
      </form>
      <ul id="about-media-bottom" class="about-media">
        <li><a href="https://www.facebook.com/rafacorradini"><i aria-hidden title="Facebook" class="fab fa-facebook-f"></i></a></li>
        <li><a href="https://api.whatsapp.com/send?phone=5516981168414"><i aria-hidden title="Whatsapp" class="fab fa-whatsapp"></i></a></li>
        <li><a href="https://www.linkedin.com/in/rafael-corradini-da-cunha-91ba0b99/"><i aria-hidden title="Linkedin" class="fab fa-linkedin-in"></i></a></li>
        <li><a href="https://github.com/rafaelcorradini"><i aria-hidden title="Github" class="fab fa-github"></i></a></li>
        <li><a href="mailto:rafacunhadini@gmail.com"><i aria-hidden title="E-mail" class="fas fa-envelope"></i></a></li>
      </ul>
    </div>
  </section>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Contact',
  data () {
    return {
      nameInput: '',
      emailInput: '',
      messageInput: ''
    }
  },
  computed: {
    name () {
      return this.translate('name')
    },
    message () {
      return this.translate('message')
    }
  },
  methods: {
    submit: function (event) {
      event.preventDefault()
      axios.post('/message', {
        name: this.nameInput,
        email: this.emailInput,
        body: this.messageInput
      }).then(response => {
        this.$snotify.success('Retornarei o mais breve possível.', 'Enviado!', {
          timeout: 4000,
          showProgressBar: false,
          closeOnClick: true
        })
        this.$scrollTo('#about')
        document.getElementById('contact-form').reset()
      }).catch(error => {
        this.$snotify.error('Tente novamente, por favor.', 'Algo deu errado!', {
          timeout: 4000,
          showProgressBar: false,
          closeOnClick: true
        })
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
#contact {
  position: relative;
  display: flex;
  justify-content: center;
  background: #4F4F4F;
  color: #fff;
  .container {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
  p {
    width: 100%;
    text-align: center;
    margin: 0.5em;
  }
}

#contact-form {
  position: relative;
  width: 533px;
  margin-bottom: 1em;
  @media screen and (max-width: 760px) {
    width: 100%;
  }
  textarea {
    height: 150px;
  }
  button {
    width: 100%;
    cursor: pointer;
    @include border-radius(3px);
  }
}

#about-media-bottom {
  margin: 2em 0;
}
</style>
