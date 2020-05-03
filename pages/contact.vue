<template>
  <div>
    <b-container>
      <page-header :param="{ title: 'Contact', icon: 'lnr-envelope' }" />

      <form
        id="contact-form"
        name="contact"
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
      >
        <div class="messages" />
        <div class="controls">
          <div class="row">
            <div class="col-md-6">
              <div class="form-group">
                <h4 for="form_name">Name *</h4>
                <input
                  id="form_name"
                  type="text"
                  name="name"
                  class="form-control"
                  placeholder="Please enter your name"
                  required="required"
                  data-error="Name is required."
                >
                <div class="help-block with-errors" />
              </div>
              <div class="form-group">
                <h4 for="form_email">Email *</h4>
                <input
                  id="form_email"
                  type="email"
                  name="email"
                  class="form-control"
                  placeholder="Please enter your email"
                  required="required"
                  data-error="Valid email is required."
                >
                <div class="help-block with-errors" />
              </div>
            </div>
            <div class="col-md-6">
              <div
                class="LI-profile-badge"
                data-version="v1"
                data-size="medium"
                data-locale="en_US"
                data-type="horizontal"
                data-theme="light"
                data-vanity="menelaospetousis"
              >
                <a
                  class="LI-simple-link"
                  href="https://gr.linkedin.com/in/menelaospetousis?trk=profile-badge"
                >
                  Menelaos Petousis
                </a>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <div class="form-group">
                <h4 for="form_message">Message *</h4>
                <textarea
                  id="form_message"
                  name="message"
                  class="form-control"
                  placeholder="Message for me"
                  rows="4"
                  required="required"
                  data-error="Please, leave us a message."
                />
                <div class="help-block with-errors" />
              </div>
            </div>
          </div>
          <!-- <div class="row">
            <div class="col">
              <div data-netlify-recaptcha="true" />
            </div>
          </div> -->
          <b-row>
            <b-col>
              <b-button type="submit" pill variant="outline-info" class="mt-3 mb-4">
                Send message
              </b-button>
            </b-col>
          </b-row>
          <b-row class="mb-4">
            <b-col>
              <p class="text-muted">
                <strong>*</strong> All these fields are required.
              </p>
            </b-col>
          </b-row>
          <div class="footnote">
            <div>
              <i>PS: Hope to see you again here :)</i>
            </div>
          </div>
        </div>
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
      meta: [{
        name: 'og:title',
        content: 'Contact | Petousis Menelaos'
      }, {
        vmid: 'description',
        name: 'description',
        content: 'Feel free to contact me here!'
      }, {
        vmid: 'og:description',
        name: 'og:description',
        content: 'Feel free to contact me here!'
      }],
      script: [
        { src: 'https://platform.linkedin.com/badges/js/profile.js' }
      ],
      link: [
        { rel: 'preconnect', href: 'https://platform.linkedin.com' }
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

@media screen and (min-width: 767px) {
  .LI-profile-badge {
    float: right;
  }
}
</style>
