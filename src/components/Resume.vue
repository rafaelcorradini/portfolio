<template>
  <section id="resume">
    <div class="container">
      <h1 class="section-title" v-lang.resume.title>Resumo</h1>
      <h2 class="section-subtitle" v-lang.resume.subtitle>Formação, experiência e habilidades.</h2>
      <div class="timeline">
        <ul>
          <h3 v-lang.resume.education>Formação</h3>
          <li v-for="resume in resumes" v-if="resume.type == 'education'" v-bind:key="resume.id">
            <b>{{ resume.title }}</b>
            <p>{{ resume.subtitle }} <span>•</span> {{ resume.when }}</p>
            <p>{{ resume.description }}</p>
          </li>
        </ul>
        <ul>
          <h3 v-lang.resume.work>Experiência</h3>
          <li v-for="resume in resumes" v-if="resume.type == 'work'" v-bind:key="resume.id">
            <b>{{ resume.title }}</b>
            <p>{{ resume.subtitle }} <span>•</span> {{ resume.when }}</p>
            <p>{{ resume.description }}</p>
          </li>
        </ul>
        <ul class="progress-bar-container">
          <h3 v-lang.resume.skills>Habilidades</h3>
          <li v-for="skill in skills" v-bind:key="skill.id">
            <div class="progress-bar">
              <div :style="'width:'+ skill.value +'%'">
                <span>
                  {{ skill.name }}({{ skill.value }}%)
                </span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Resume',
  data () {
    return {
      resumes: [],
      skills: []
    }
  },
  created () {
    let that = this
    axios.get('/resume').then(response => {
      Object.keys(response.data).forEach(function (key, index) {
        if (response.data[key].language === that.language)
          that.resumes.push(response.data[key])
      })
    })

    axios.get('/skill').then(response => {
      this.skills = response.data
    })
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
#resume {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  overflow: hidden;
}
.timeline {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  h3 {
    margin-bottom: 10px;
    color: $secondary;
    border-bottom: 2px solid $secondary;
    display: inline-block;
  }
  ul {
    width: 760px;
    border-left: 2px solid $secondary;
    padding: 0 0 25px 25px;
    @media screen and (max-width: 760px) {
      width: 100%;
    }
    &::before {
      position: absolute;
      margin: 0 0 0 -35px;
      content: '';
      display: block;
      width: 19px;
      height: 19px;
      background: url('../assets/images/resume-circle.svg');
      background-color: #fff;
    }
  }
  li {
    padding: 10px 0;
  }
  p {
    line-height: 16px*1.5;
    margin-bottom: 0.5em;
    span {
      color: $primary;
    }
  }
  b {
    display: block;
    // margin-bottom: 0.5em;
    line-height: 16px*1.5;
  }

  .progress-bar-container {
    h3 {
      margin-bottom: 1em;
    }
  }

  .progress-bar {
    position: relative;
    background: #F5F5F5;
    @include border-radius(3px);
    color: #fff;
    font-weight: 700;
    div {
      display: inline-block;
      padding: 1em 0;
      background: $secondary;
      @include border-radius(3px);
    }
    span {
      padding: 0 1em;
    }
  }
}
</style>
