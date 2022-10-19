<template>
  <div class="container">
    <page-header :param="{ title: 'Contact', icon: 'envelope' }" />

    <form
      id="contact-form"
      name="contact"
      method="POST"
      netlify-honeypot="bot-field"
      data-netlify-recaptcha="true"
      data-netlify="true"
    >
      <input type="hidden" name="form-name" value="contact">

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
              class="badge-base LI-profile-badge"
              data-locale="en_US"
              data-size="medium"
              data-theme="dark"
              data-type="HORIZONTAL"
              data-vanity="menelaospetousis"
              data-version="v1"
            >
              <a
                class="badge-base__link LI-simple-link"
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
        <button
          type="submit"
          class="btn mt-3 mb-4 btn-outline-info rounded-pill"
        >
          Send message
        </button>
        <div class="row mb-4">
          <div class="col">
            <p class="text-muted">
              <strong>*</strong> All these fields are required.
            </p>
          </div>
        </div>
        <div class="footnote">
          <i>PS: Hope to see you again here :)</i>
        </div>
      </div>
    </form>

    <a
      href="https://github.com/menepet/menepet-website"
      target="_blank"
      rel="noopener"
    >
      <img
        loading="lazy"
        width="70"
        height="70"
        src="/images/forkme_right_white_ffffff.png?resize=70%2C70"
        class="fork-me"
        alt="Fork me on GitHub"
        data-recalc-dims="1"
      >
    </a>
  </div>
</template>

<script>
import PageHeader from '~/components/PageHeader'
import { metaHead } from '~/utils'

export default {
  name: 'Contact',
  amp: false,
  components: {
    PageHeader
  },
  head() {
    return {
      ...metaHead('Contact 📨', 'Feel free to contact me here!'),
      script: [{ src: 'https://platform.linkedin.com/badges/js/profile.js' }],
      link: [{ rel: 'preconnect', href: 'https://platform.linkedin.com' }]
    }
  }
}
</script>

<style lang="scss" scoped>
input,
textarea {
  border-color: var(--color-primary);
}
.footnote {
  display: none;
  position: absolute;
  bottom: 10px;
  opacity: 0.7;
}
.fork-me {
  position: absolute;
  top: 0;
  right: 0;
}

@media screen and (min-width: 767px) {
  .footnote {
    display: block;
  }
  .LI-profile-badge {
    float: right;
  }
  .fork-me {
    width: 140px;
    height: 140px;
  }
}
</style>
