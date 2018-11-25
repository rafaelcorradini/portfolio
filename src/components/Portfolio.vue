<template>
  <section id="portfolio">
    <div class="container">
      <h1 class="section-title" v-lang.portfolio.title>Veja meu portfólio</h1>
      <h2 class="section-subtitle" v-lang.portfolio.subtitle>Dê uma olhada em alguns de meus trabalhos.</h2>

      <swiper class="slide" :options="swiperOption" ref="mySwiper">
        <!-- slides -->
        <swiper-slide class="slide-item" v-for="work in works" v-bind:key="work.id">
          <div class="slide-left">
            <h3>{{ work.name }}</h3>
            <p v-if="language == 'pt'">{{ work.description }}</p>
            <p v-else>{{ work.description_en }}</p>
            <ul class="slide-tags">
              <li v-for="tag in work.tags" v-if="tag != undefined" v-bind:key="tag">
                {{ tag }}
              </li>
            </ul>
          </div>
          <div class="slide-right">
            <a :href="work.url" :title="work.name" target="_blank">
              <img :src="imagePath(work.image)">
            </a>
          </div>
        </swiper-slide>
        <!-- controls -->
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </swiper>
    </div>
  </section>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Portfolio',
  data () {
    return {
      swiperOption: {
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          centeredSlides: true
        }
      },
      works: []
    }
  },
  created () {
    let that = this
    axios.get('/work').then(response => {
      that.works = response.data
      Object.keys(this.works).forEach(function (key, index) {
        that.works[key].tags = that.works[key].tags.split(';').map(item => {
          if (item !== '') return item.trim()
          else return undefined
        })
      })
    })
  },
  methods: {
    imagePath: function (image) {
      return require('@/assets/images/' + image)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
#portfolio {
  position: relative;
  display: flex;
  justify-content: center;
  overflow: hidden;
  .container {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-content: flex-start;
    overflow: hidden;
    @media screen and (max-width: 1200px) {
      width: 90%;
    }
  }

  .slide {
    position: relative;
    margin-top: 2em;
    width: 100%;
    h3 {
      font-size: 24px;
      color: $primary;
      font-weight: normal;
      margin-bottom: 1em;
    }
    p {
      line-height: 16px*1.5;
      margin-bottom: 1em;
    }
    .slide-tags {
      margin-bottom: 3em;
      li {
        margin-top: 1em;
        display: inline-block;
        padding: 0.5em 1em;
        margin-right: 0.5em;
        line-height: 16px*1.5;
        color: $secondary;
        border: 1px solid $secondary;
        @include border-radius(36px);
      }
    }
    .swiper-slide {
      overflow: hidden;
    }
    .slide-item {
      display: flex;
      justify-content: space-between;
      .slide-left, .slide-right {
        width: 47%;
      }
      .slide-right {
        img {
          width: 100%;
        }
      }
    }
    .swiper-slide {
      width: 100% !important;
    }
    @media screen and (max-width: 760px) {
      .slide-item {
        display: block;
        width: 100%;
        .slide-left {
          display: block;
          width: 100% !important;
        }
        .slide-right {
          a {
            display: block;
          }
          display: block;
          width: 100%;
          padding-bottom: 100px;
        }
      }
    }
  }

  .swiper-button-prev, .swiper-button-next {
    position: absolute;
    border: 2px solid $secondary;
    @include border-radius(50%);
    padding: 0.5em;
    width: 36px;
    height: 36px;
    background-size: 36px auto;
    left: 50%;
    background-color: $secondary;
    top: auto !important;
    bottom: 20px;
  }

  .swiper-button-prev {
    background-image: url('../assets/images/arrow-left.svg');
    margin-left: -56px;
    &:hover {
      background-position: 40% 50%;
    }
  }
  .swiper-button-next {
    background-image: url('../assets/images/arrow-right.svg');
    margin-left: 10px;
    &:hover {
      background-position: 60% 50%;
    }
  }
}
</style>
