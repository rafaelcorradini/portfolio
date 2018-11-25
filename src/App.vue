<template>
  <div id="app">
    <vue-snotify></vue-snotify>
    <transition name="fade" mode="out-in">
      <nav v-show="showNavbar" class="navbar fixed" id="navbar-fix">
        <div class="container">
          <a href="#about" id="logo">
            <img src="./assets/images/logo.png" alt="Logo">
          </a>
          <button class="menu-button" v-on:click="openMenu()"><i class="fas fa-bars"></i></button>
          <ul itemscope itemtype="http://www.schema.org/SiteNavigationElement">
            <li itemprop="name"><a itemprop="url" href="#about" v-lang.nav.about v-bind:class="{ active: activeMenu == 'about' }" v-scroll-to="'#about'">Sobre</a></li>
            <li itemprop="name"><a itemprop="url" href="#portfolio" v-lang.nav.portfolio v-bind:class="{ active: activeMenu == 'portfolio' }"  v-scroll-to="'#portfolio'">Portfólio</a></li>
            <li itemprop="name"><a itemprop="url" href="#services" v-lang.nav.services v-bind:class="{ active: activeMenu == 'services' }"  v-scroll-to="'#services'">Serviços</a></li>
            <li itemprop="name"><a itemprop="url" href="#resume" v-lang.nav.resume v-bind:class="{ active: activeMenu == 'resume' }"  v-scroll-to="'#resume'">Resumo</a></li>
            <li itemprop="name"><a itemprop="url" href="#contact" v-lang.nav.contact v-bind:class="{ active: activeMenu == 'contact' }"  v-scroll-to="'#contact'">Contato</a></li>
          </ul>
        </div>
      </nav>
    </transition>
    <div id="menu-responsive">
      <transition name="slide">
        <nav v-show="showMenu">
          <ul>
            <li><a href="#about" v-lang.nav.about v-bind:class="{ active: activeMenu == 'about' }" v-scroll-to="'#about'">Sobre</a></li>
            <li><a href="#portfolio" v-lang.nav.portfolio v-bind:class="{ active: activeMenu == 'portfolio' }"  v-scroll-to="'#portfolio'">Portfólio</a></li>
            <li><a href="#services" v-lang.nav.services v-bind:class="{ active: activeMenu == 'services' }"  v-scroll-to="'#services'">Serviços</a></li>
            <li><a href="#resume" v-lang.nav.resume v-bind:class="{ active: activeMenu == 'resume' }"  v-scroll-to="'#resume'">Resumo</a></li>
            <li><a href="#contact" v-lang.nav.contact v-bind:class="{ active: activeMenu == 'contact' }"  v-scroll-to="'#contact'">Contato</a></li>
          </ul>
        </nav>
      </transition>
      <div v-show="showMenu">
        <div class="overlay" v-on:click="closeMenu()"></div>
      </div>
    </div>
    <About v-on:click="openMenu()"></About>
    <Portfolio></Portfolio>
    <Services></Services>
    <Resume></Resume>
    <Contact></Contact>
  </div>
</template>

<script>
import About from './components/About'
import Portfolio from './components/Portfolio'
import Services from './components/Services'
import Resume from './components/Resume'
import Contact from './components/Contact'

export default {
  name: 'App',
  components: {
    About,
    Portfolio,
    Services,
    Resume,
    Contact
  },
  data () {
    return {
      showNavbar: false,
      showMenu: false,
      activeMenu: 'about' // navigation item active
    }
  },
  methods: {
    handleScroll () {
      const yOffset = window.pageYOffset
      const that = this

      // show navbar after about section
      if (yOffset > document.getElementById('about').clientHeight - 100) {
        this.showNavbar = true
      } else {
        this.showNavbar = false
      }

      let prev = 'about'
      let next = 'about'
      const components = this.$options.components
      // verify where is the yOffset to active the related item on menu
      Object.keys(components).map(function (key, index) {
        prev = next
        next = components[key].name.toLowerCase()

        if (next === 'vuecomponent') {
          return false
        } else if (yOffset > document.getElementById('contact').offsetTop - 500) {
          that.activeMenu = 'contact'
          return true
        } else if (
          yOffset > document.getElementById(prev).offsetTop - 300 &&
          yOffset < document.getElementById(next).offsetTop - 300
        ) {
          that.activeMenu = prev
          return true
        }
      })
    },
    openMenu () {
      this.showMenu = true
    },
    closeMenu () {
      this.showMenu = false
    }
  },
  created () {
    window.addEventListener('scroll', this.handleScroll)
    document.getElementsByTagName('html')[0].setAttribute('lang', this.language)
    if(this.language == 'pt') {
      document.title = 'Rafael C. da Cunha | Desenvolvedor Web'
      document.getElementsByName("description")[0].setAttribute("content", "Desenvolvedor Web e graduando da USP (Universidade de São Paulo) em Ciências de Computação. Clique e conheça um pouco do meu trabalho.");
    }

  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="scss">
@import url('./assets/stylesheets/_resets.scss');
@import "~vue-snotify/styles/material";

#app {
  font-family: 'Alef', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #454547;
  font-size: 16px;
}

#app, html, body {
  height:100%;
}

form {
  position: relative;
  display: block;
  input, textarea, select {
    border: 0;
    box-sizing: border-box;
    padding: 1em 1em;
    @include border-radius(3px);
    font-family: 'Alef', sans-serif;
    font-size: 16px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: #696969;
    color: #fff;
    width: 100%;
    margin-bottom: 1em;
    &:focus {
      background: #9c9c9c;
    }
    @include placeholder(#fff);
  }
}

.section-title {
  width: 100%;
  font-size: 24px;
  font-weight: 700;
  text-align: center;
  margin: 2em 0 0.7em 0;
}

.section-subtitle {
  width: 100%;
  font-size: 18px;
  font-weight: normal;
  text-align: center;
  margin-bottom: 3em;
}

.container {
  position: relative;
  width: 1200px;
  padding: 0 2em;
}

.button {
  background: $secondary;
  color: #fff;
  font-weight: 700;
  padding: 1em 2em;
  @include border-radius(50px);
  border: 2px solid $secondary;
  &:hover {
    background: transparent;
    color: $secondary;
  }
}

.about-media {
  width: 100%;
  display: flex;
  justify-content: center;
  li {
    font-size: 24px;
    a {
      padding: 1em;
      color: #fff;
      &:hover {
        color: $secondary;
      }
    }
  }
}

.navbar {
  position: relative;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;
  width: 100%;
  padding: 1em 0;
  z-index: 10;
  .menu-button {
    display: none;
    color: #fff;
    border: 0;
    background: transparent;
    cursor: pointer;
    font-size: 1.5em;
  }
  @media screen and (max-width: 760px) {
    .menu-button {
      display: block;
    }
  }
  &.fixed {
    position: fixed;
    background: $primary;  /* fallback for old browsers */
    @include transition();
    img {
      width: 100px;
    }
    li a {
      padding: 1em 1.5em;
    }
    @media screen and (max-width: 760px) {
      display: flex;
      padding: 0.5em 0;
      .menu-button {
        display: block;
      }
      #logo {
        width: 30px;
        overflow: hidden;
      }
      img {
        width: 70px;
      }
    }
  }
  .container {
    display: flex;
    justify-content: space-between;
  }
  ul {
    display: flex;
    justify-content: flex-end;
    flex-wrap: wrap;
    @media screen and (max-width: 760px) {
      display: none;
    }
  }
  li {
    display: flex;
    align-items: center;
    a {
      padding: 1.5em;
      color: #fff;
      font-weight: 700;
      &:hover, &.active {
        color: $secondary;
      }
    }
    &:last-child a {
      padding-right: 0;
    }
  }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 1s
}
.fade-enter, .fade-leave-to{
  opacity: 0
}

#menu-responsive {
  nav {
    position: fixed;
    z-index: 100;
    height: 100vh;
    color: #4F4F4F;
    background: #fff;
    ul {
      margin-top: 1em;
    }
    a {
      color: #4F4F4F;
      padding: 1em 10em 1em 1em;
      display: block;
      font-weight: 700;
      &:hover, &.active {
        color: $secondary;
      }
    }
  }
  .overlay {
    position: fixed;
    z-index: 91;
    background: #4f4f4f;
    @include opacity(0.5);
    width: 100%;
    height: 100vh;
  }
}

.slide-enter-active, .slide-leave-active {
  transform: translateX(0);
  transition: 0.6s;
}
.slide-enter, .slide-leave-to{
  transform: translateX(-100%);
}

.next-button {
  position: absolute;
  bottom: 50px;
  width: 100%;
  display: flex;
  justify-content: center;
  svg {
    margin-top: 70px;
    position: absolute;
    color: #fff;
    @include transition();
  }
  &:hover {
    svg {
      margin-top: 75px;
    }
  }
  .white {
    margin-top: 60px;
  }
}

</style>
