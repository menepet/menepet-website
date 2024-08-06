<template>
  <div>
    <b-container>
      <page-header :param="{ title: 'About Me', icon: 'user' }" />

      <b-row class="mb-4">
        <b-col class="mb-4" lg="6">
          <h3>Software Engineer</h3>

          <p>Hi There 👋</p>
          <p>
            I'm Menelaos, a Web Software Engineer from Athens, Greece, and
            co-founder of
            <a href="https://www.decode.gr" target="_blank" rel="noopener">
              Decode+</a
            >, the company behind
            <a href="https://www.dikaio.ai" target="_blank" rel="noopener">
              DikaioAI
            </a>
            — a cutting-edge Greek legal AI assistant.
          </p>
          <p>
            With a Bachelor's in Computer Science and a deep passion for
            fullstach development, I've been crafting web applications since
            2015.
          </p>
          <p>
            When I'm not coding, I'm usually enjoy playing music or practicing
            martial arts. Want to know more? Check out my
            <n-link to="/resume">Resume</n-link> section 🎉
          </p>
          <p>⚡ Fun fact: I love puns</p>
        </b-col>
        <b-col offset-lg="2" lg="4">
          <h3>Personal Information</h3>

          <ul>
            <li>
              <span class="title-underline">Name</span
              ><span class="value">Petousis Menelaos</span>
            </li>
            <li>
              <span class="title-underline">Age</span
              ><span class="value">{{ currentAge }} years old</span>
            </li>
            <li>
              <span class="title-underline">Residence</span
              ><span class="value">Athens, Greece</span>
            </li>
            <li>
              <span class="title-underline">Email</span>
              <transition name="fade">
                <a v-if="displayMail" href="mailto:menepet@gmail.com"
                  >menepet@gmail.com</a
                >
                <font-awesome-icon
                  v-else
                  class="email-display"
                  icon="eye"
                  @click="displayMail = true"
                />
              </transition>
            </li>
            <!-- <li><span class="title-underline">Phone</span><span class="value"><a href="tel:6932225760">+30 693 222 57 60</a></span></li> -->
            <li>
              <span class="title-underline">LinkedIn</span>
              <a
                target="_blank"
                rel="noopener"
                href="https://www.linkedin.com/in/menelaospetousis/"
                class="value"
                >linkedin.com/menelaospetousis</a
              >
            </li>
            <li>
              <span class="title-underline">Medium</span>
              <a
                target="_blank"
                rel="noopener"
                href="https://medium.com/@menepet"
                class="value"
              >
                medium.com/@menepet
              </a>
            </li>
            <li>
              <span class="title-underline">Stackoverflow</span>
              <a
                target="_blank"
                rel="noopener"
                href="https://stackoverflow.com/users/3074131/mene"
                class="value"
                >stackoverflow.com/mene</a
              >
            </li>
          </ul>
          <div class="d-none d-lg-block">
            <b-button
              to="/resume"
              pill
              variant="outline-info"
              class="mt-3 mb-4"
            >
              Continue to Resume
            </b-button>
          </div>
        </b-col>
      </b-row>
      <b-row class="d-lg-none d-sm-block">
        <b-col class="text-center">
          <b-button to="/resume" pill variant="outline-info" class="mt-3 mb-4">
            Continue to Resume
          </b-button>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import PageHeader from "~/components/PageHeader";
import { metaHead } from "~/utils";

export default {
  name: "AboutPage",
  components: { PageHeader },
  data() {
    return {
      displayMail: false,
    };
  },
  computed: {
    currentAge() {
      const date = new Date();
      date.setFullYear(date.getFullYear() - 1992);
      return date.getFullYear();
    },
  },
  head() {
    return {
      ...metaHead("About Me 🧑‍💻", "Learn more about my experience as a dev!"),
      link: [
        {
          hid: "canonical",
          rel: "canonical",
          href: `${process.env.BASE_URL}/about`,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
ul li {
  font-family: $font-droid-regular;
  line-height: 1em;
  margin-bottom: 13px;
  a {
    color: var(--color-primary);
  }
}

.email-display {
  cursor: pointer;
  opacity: 0.6;
  &:hover {
    opacity: 1;
  }
}

section {
  padding: 2%;
  .meter {
    height: 5px;
    position: relative;
    background: #668fab0f;
    overflow: hidden;
    span {
      display: block;
      height: 100%;
    }
    .progress {
      background-color: var(--color-primary);
      -webkit-animation: progressBar 3s ease-in-out;
      animation: progressBar 3s ease-in-out;
      -moz-animation: progressBar 3s ease-in-out;
      -webkit-animation-fill-mode: both;
      -moz-animation-fill-mode: both;
      animation-fill-mode: both;
    }
  }
}

@-moz-keyframes progressBar {
  0% {
    width: 0;
  }
  100% {
    width: 100%;
  }
}
@-webkit-keyframes progressBar {
  0% {
    width: 0;
  }
  100% {
    width: 100%;
  }
}
@keyframes progressBar {
  0% {
    width: 0;
  }
  100% {
    width: 100%;
  }
}
</style>
