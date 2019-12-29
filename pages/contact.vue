<template>
  <div>
    <b-container>
      <page-header :param="{ title: 'Contact', icon: 'lnr-envelope' }" />

      <form name="contact" method="POST" data-netlify="true">
        <p>
          <label>Your Name: <input type="text" name="name"></label>
        </p>
        <p>
          <label>Your Email: <input type="email" name="email"></label>
        </p>
        <p>
          <label>Message: <textarea name="message" /></label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
    </b-container>
  </div>
</template>

<script>
import PageHeader from '~/components/PageHeader'

export default {
  name: 'Contact',
  components: {
    PageHeader
  },
  head() {
    return {
      title: 'Contact | Petousis Menelaos',
      script: [
        { src: 'https://platform.linkedin.com/badges/js/profile.js' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
input, textarea {
  border-color: $main-color;
}
.footnote {
  position: absolute;
  bottom: 10px;
  opacity: 0.7;
}
</style>
