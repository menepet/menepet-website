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
</style>
