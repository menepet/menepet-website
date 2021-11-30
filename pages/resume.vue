<template>
  <div>
    <b-container>
      <page-header :param="{ title: 'My Resume', icon: 'scroll' }" />

      <span class="icon">
        <font-awesome-icon icon="print" title="Print the whole CV 🖨️" @click="print" />
      </span>
      <span class="icon">
        <a href="/docs/Petousis_Menelaos_CV.pdf" target="_blank" download>
          <font-awesome-icon icon="file-download" title="Download CV pdf 🗂️" />
        </a>
      </span>

      <resume-list title="EXPERIENCE" :list="experience" />

      <resume-list class="mt-4" title="EDUCATION" :list="education" />

      <div class="w-100 text-center">
        <b-button pill variant="outline-info" to="/contact" class="my-4">
          Send me a message in a bottle
        </b-button>
      </div>
    </b-container>
  </div>
</template>

<script>
import experience from '~/static/mock/resume.json'
import { EventBus } from '~/plugins/event-bus.js'
import PageHeader from '~/components/PageHeader'
import ResumeList from '~/components/ResumeList'
import { metaHead } from '~/utils'

export default {
  name: 'AboutPage',
  amp: false,
  components: {
    PageHeader,
    ResumeList
  },
  data() {
    return {
      experience,
      education: [
        {
          title: 'Computer Science degree',
          location: 'Athens University of Economics and Busines (AUEB)',
          descr: `Undergraduate student at the Athens University of Economics
            and Business, with a lot of volunteer work in the technical field
            and courses such as: AI, Compilers, Computer Networking,
            Distributed Systems`,
          from: '2010',
          to: '2016'
        }
      ]
    }
  },
  mounted() {
    window.onafterprint = function() {
      EventBus.$emit('collapseAll')
    }
  },
  beforeDestroy() {
    EventBus.$off()
  },
  methods: {
    print() {
      EventBus.$emit('expandAll')
      setTimeout(() => {
        window.print()
      }, 100)
    }
  },
  head() {
    return {
      ...metaHead('My Resume 📜', 'Petousis Menelaos CV and professional experience')
    }
  }
}
</script>

<style lang="scss" scoped>
  .icon svg, .icon a {
    color: $main-color;
    font-size: 22px;
    cursor: pointer;
    margin-right: 15px;
  }
</style>
