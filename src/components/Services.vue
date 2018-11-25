<template>
  <section id="services">
    <div class="container">
      <h1 class="section-title" v-lang.services.title>Veja como posso ajudá-lo</h1>
      <h2 class="section-subtitle" v-lang.services.subtitle>Estes são alguns dos serviços que ofereço.</h2>
      <ul id="services-items">
        <li>
          <img src="@/assets/images/display.svg" alt="Peças digitais">
          <h3 v-lang.services.design.title>Aplicativos Mobile</h3>
          <p v-lang.services.design.subtitle>Desenvolvimento de aplicativos para dispositivos mobile.</p>
        </li>
        <li>
          <img src="@/assets/images/development.svg" alt="Peças digitais">
          <h3 v-lang.services.development.title>Websites</h3>
          <p v-lang.services.development.subtitle>Desenvolvimento de sites institucionais, lojas virtuais, blogs, APIs, Web apps, etc.</p>
        </li>
        <li>
          <img src="@/assets/images/seo.svg" alt="Peças digitais">
          <h3 v-lang.services.seo.title>SEO</h3>
          <p v-lang.services.seo.subtitle>Serviços de consultoria em SEO para melhorar o rankeamento nas buscas.</p>
        </li>
      </ul>
      <section id="services-button" class="next-button">
        <p v-lang.services.text>Interessado?</p>
        <a href="#portfolio" class="button" v-scroll-to="'#contact'" v-lang.services.button>Entre em contato</a>
        <i class="fas fa-chevron-down white"></i>
        <i class="fas fa-chevron-down"></i>
      </section>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Services'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
#services {
  position: relative;
  display: flex;
  justify-content: center;
  background: $primary;
  color: #fff;
}
#services-items {
  display: flex;
  justify-content: space-between;
  margin-top: 10%;
  li {
    text-align: center;
    padding: 2em;
    flex-grow: 1;
    flex-basis: 0;
    h3 {
      margin: 1em 0;
    }
  }
  @media screen and (max-width: 760px) {
    display: block;
    padding-bottom: 5em;
    li {
      display: block;
    }
  }
}
#services-button {
  position: relative;
  margin-top: 12%;
  p {
    position: absolute;
    margin-top: -2em;
  }
}
</style>
