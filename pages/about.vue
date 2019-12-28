<template>
  <div>
    <b-container>
      <page-header :param="{ title: 'About Me', icon: 'lnr-user' }" />
      <b-row>
        <b-col lg="8">
          <h3>
            Front End Developer
          </h3>
          <p>
            Dolor reprehenderit aut repudiandae maiores recusandae. Consequatur dolor nisi
            labore commodi ipsa? Excepturi velit laboriosam at voluptatibus cupiditate est
            vel. Dolorem praesentium itaque fugiat placeat quas consequatur? Obcaecati natus rerum
          </p>
          <p>Consectetur consectetur nesciunt nesciunt blanditiis amet? Quod quis unde aliquid
            excepturi laudantium? Illo architecto aliquam velit illo magnam neque perferendis
            sint Incidunt eius ipsa inventore labore eos velit. Minus hic magni reiciendis necessitatibus
            ex Quidem officia deleniti accusamus obcaecati dolores. Porro culpa quibusdam impedit
            porro praesentium excepturi. Alias ab consequatur?
          </p>
          <div class="my-4 w-75">
            <img class="img-fluid" src="https://watson-vcard.netlify.com/img/signature-black.png" alt="signature">
          </div>
        </b-col>
        <b-col lg="4">
          <h3>
            Personal Information
          </h3>
          <ul>
            <li><span class="title-underline">Name</span><span class="value">Petousis Menelaos</span></li>
            <li><span class="title-underline">Age</span><span class="value">{{ currentAge }} years old</span></li>
            <li><span class="title-underline">Residence</span><span class="value">Athens, Greece</span></li>
            <li><span class="title-underline">Address</span><span class="value">Vrilissia</span></li>
            <li><span class="title-underline">Email</span><span class="value">menepet@gmail.com</span></li>
            <li><span class="title-underline">Phone</span><span class="value">(+30) 693 222 57 60</span></li>
            <li><span class="title-underline">LinkedIn</span>
              <a target="_blank" href="https://www.linkedin.com/in/menelaospetousis/" class="value">linkedin.com/menelaospetousis</a>
            </li>
            <li><span class="title-underline">Stackoverflow</span>
              <a target="_blank" href="https://stackoverflow.com/users/3074131/mene" class="value">stackoverflow.com/mene</a>
            </li>
            <li><span class="title-underline">Google Play</span>
              <a target="_blank" href="https://play.google.com/store/apps/developer?id=Petousis+Menelaos" class="value">
                play.google.com/menepet
              </a>
            </li>
            <li><span class="title-underline">Freelance</span><span class="value">Available</span></li>
          </ul>
          <b-button to="/resume" pill variant="outline-info" class="mt-3 mb-4">
            Download Resume
          </b-button>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <h3>
            Coding Skills
          </h3>
        </b-col>
      </b-row>
      <b-row class="mb-4">
        <b-col v-for="(item, index) in skills" :key="index" lg="6">
          <section>
            <h4>{{ item.skill }}</h4>
            <div class="meter">
              <span :style="`width:${item.progress}%;`"><span class="progress" /></span>
            </div>
          </section>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import PageHeader from '~/components/PageHeader'

export default {
  name: 'AboutPage',
  components: {
    PageHeader
  },
  data() {
    return {
      skills: [
        {
          skill: 'VueJs / Nuxt',
          progress: 85
        },
        {
          skill: 'EmberJs',
          progress: 80
        },
        {
          skill: 'SCSS / SASS',
          progress: 70
        },
        {
          skill: 'HTML',
          progress: 85
        },
        {
          skill: 'PWA',
          progress: 53
        },
        {
          skill: 'ECMA 6',
          progress: 80
        },
        {
          skill: 'Bootstrap',
          progress: 81
        },
        {
          skill: 'MeteorJs',
          progress: 75
        },
        {
          skill: 'Git',
          progress: 83
        },
        {
          skill: 'Linux',
          progress: 73
        },
        {
          skill: 'jQuery',
          progress: 67
        },
        {
          skill: 'Webpack',
          progress: 64
        }
      ]
    }
  },
  computed: {
    currentAge() {
      const date = new Date()
      date.setFullYear(date.getFullYear() - 1992)
      return date.getFullYear()
    }
  },
  head() {
    return {
      title: 'About | Petousis Menelaos'
    }
  }
}
</script>

<style lang="scss" scoped>
ul li {
    font-family: "Droid Sans";
    line-height: 1em;
    margin-bottom: 13px;
    a {
      color: $main-color;
    }
}

section {
  padding: 2%;
  .meter {
      height: 5px;
      position: relative;
      background: #f3efe6;
      overflow: hidden;
      span {
          display: block;
          height: 100%;
      }
      .progress {
          background-color: $main-color;
          -webkit-animation: progressBar 3s ease-in-out;
          animation: progressBar 3s ease-in-out;
          -moz-animation: progressBar 3s ease-in-out;
          -webkit-animation-fill-mode:both;
          -moz-animation-fill-mode:both;
          animation-fill-mode:both;
      }
  }
}

@-moz-keyframes progressBar {
  0% { width: 0; }
  100% { width: 100%; }
}
@-webkit-keyframes progressBar {
  0% { width: 0; }
  100% { width: 100%; }
}
@keyframes progressBar {
  0% { width: 0; }
  100% { width: 100%; }
}
</style>
