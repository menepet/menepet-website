<template>
  <div>
    <b-container>
      <page-header :param="{ title: 'Contact', icon: 'lnr-envelope' }" />

      <form
        id="contact-form"
        name="contact"
        method="POST"
        data-netlify="true"
      >
        <div class="messages" />
        <div class="controls">
          <b-row>
            <b-col md="6">
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
            </b-col>
            <b-col md="6">
              <div
                class="LI-profile-badge float-right"
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
            </b-col>
          </b-row>
          <b-row>
            <b-col>
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
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              <b-button type="submit" pill variant="outline-info" class="mt-3 mb-4">
                Send message
              </b-button>
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              <p class="text-muted">
                <strong>*</strong> All these fields are required.
              </p>
            </b-col>
          </b-row>
          <b-row class="footnote">
            <b-col>
              <i>PS: Hope to see you again here :)</i>
            </b-col>
          </b-row>
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
