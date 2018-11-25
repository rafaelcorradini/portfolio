<template>
  <header id="about">
    <nav class="navbar">
      <div class="container">
        <a href="#about" id="logo">
          <img src="@/assets/images/logo.png" alt="Logo">
        </a>
        <button class="menu-button" v-on:click="openMenu()"><i class="fas fa-bars"></i></button>
        <ul>
          <li><a href="#about" v-lang.nav.about v-scroll-to="'#about'" class="active">Sobre</a></li>
          <li><a href="#portfolio" v-lang.nav.portfolio v-scroll-to="'#portfolio'">Portfólio</a></li>
          <li><a href="#services" v-lang.nav.services  v-scroll-to="'#services'">Serviços</a></li>
          <li><a href="#resume" v-lang.nav.resume  v-scroll-to="'#resume'">Resumo</a></li>
          <li><a href="#contact" v-lang.nav.contact v-scroll-to="'#contact'">Contato</a></li>
        </ul>
      </div>
    </nav>
    <section id="hello">
      <div id="hello-avatar">
        <img src="@/assets/images/avatar.png" alt="Avatar">
      </div>
      <div id="hello-text">
        <h2 v-lang.about.hi>Olá, sou Rafael Corradini da Cunha,</h2>
        <h1 v-lang.about.subtitle>Desenvolvedor Web</h1>
        <p v-lang.about.text>Venho criando soluções para web há 6 anos. Sou desenvolvedor Web e graduando da USP (Universidade de São Paulo) em Ciências de Computação. Continue pelo site e conheça um pouco do meu trabalho.</p>
      </div>
    </section>
    <ul id="about-media-header" class="about-media">
      <li><a href="https://www.facebook.com/rafacorradini"><i aria-hidden title="Facebook" class="fab fa-facebook-f"></i></a></li>
      <li><a href="https://api.whatsapp.com/send?phone=5516981168414"><i aria-hidden title="Whatsapp" class="fab fa-whatsapp"></i></a></li>
      <li><a href="https://www.linkedin.com/in/rafael-corradini-da-cunha-91ba0b99/"><i aria-hidden title="Linkedin" class="fab fa-linkedin-in"></i></a></li>
      <li><a href="https://github.com/rafaelcorradini"><i aria-hidden title="Github" class="fab fa-github"></i></a></li>
      <li><a href="mailto:rafacunhadini@gmail.com"><i aria-hidden title="E-mail" class="fas fa-envelope"></i></a></li>
    </ul>
    <section id="hello-button" class="next-button">
      <a href="#portfolio" class="button" v-scroll-to="'#portfolio'" v-lang.about.button>Conheça meu trabalho</a>
      <i class="fas fa-chevron-down white"></i>
      <i class="fas fa-chevron-down"></i>
    </section>
  </header>
</template>

<script>
export default {
  name: 'About',
  methods: {
    openMenu: function () {
      this.$emit('click', true)
    },
    changeLanguage: function () {
      if (this.language === 'en') this.language = 'pt'
      else this.language = 'en'
    }
  }
}
</script>

<style lang="scss" scoped>
#about {
  position: relative;
  min-height: 450px;
  height: 100%;
  max-height: 1200px;
  background-color: $primary;
  background-image: url('../assets/images/bg-header.jpg');
}

#hello {
  position: absolute;
  bottom: 40%;
  display: flex;
  justify-content: center;
  width: 100%;
  #hello-avatar {
    margin-right: 20px;
    @media screen and (max-width: 760px) {
      display: none;
    }
  }
  #hello-text {
    max-width: 682px;
    color: #fff;
    margin-top: 15px;
    @media screen and (max-width: 760px) {
      text-align: center;
    }
    h2 {
      font-size: 24px;
      font-weight: 700;
      @media screen and (max-width: 760px) {
        font-size: 18px;
      }
    }
    h1 {
      font-size: 60px;
      font-weight: 700;
      padding: 10px 0;
      @media screen and (max-width: 760px) {
        font-size: 30px;
      }
    }
    p {
      line-height: 1.5*16px;
    }
  }
}

#about-media-header {
  position: absolute;
  bottom: 23%;
  overflow: hidden;
}

@media screen and (max-height: 500px) {
  #about-media-header {
    bottom: 25%;
  }
}
</style>
