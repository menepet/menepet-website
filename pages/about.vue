<template>
  <div>
    <b-container>
      <page-header :param="{ title: 'About Me', icon: 'lnr-user' }" />
      <b-row>
        <b-col md="8">
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
          <div class="mt-4 w-50">
            <img src="https://watson-vcard.netlify.com/img/signature-black.png" alt="signature">
          </div>
        </b-col>
        <b-col md="4">
          <h3>
            Personal Information
          </h3>
          <ul>
            <li><span class="title">Name</span><span class="value">Petousis Menelaos</span></li>
            <li><span class="title">Age</span><span class="value">{{ currentAge }} Years</span></li>
            <li><span class="title">Residence</span><span class="value">Athens, Greece</span></li>
            <li><span class="title">Address</span><span class="value">Vrilissia</span></li>
            <li><span class="title">Email</span><span class="value">menepet@gmail.com</span></li>
            <li><span class="title">Phone</span><span class="value">(+30) 693 222 57 60</span></li>
            <li><span class="title">Freelance</span><span class="value">Available</span></li>
          </ul>
          <b-button pill variant="outline-info" class="mt-3">
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
  }
}
</script>

<style lang="scss" scoped>
ul {
  padding: 0;
}
ul li {
    font-family: "Droid Sans";
    line-height: 1em;
    margin-bottom: 13px;
    list-style: none !important;
    .title {
        font-family: "Droid Sans Bold";
        font-size: 16px;
        font-weight: 700;
        letter-spacing: .5px;
        border-bottom: 2px solid $main-color;
        position: relative;
        display: inline-block;
        margin-right: 15px;
        padding-bottom: 2px;
        color: $font-color;
        &:after {
            content: ':';
            position: absolute;
            right: -10px;
        }
    }
}
</style>
