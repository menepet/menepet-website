<template>
  <div>
    <b-container>
      <page-header :param="{ title: 'My Resume', icon: 'scroll' }" />

      <span class="icon"><i class="lnr lnr-printer" @click="print" /></span>
      <span class="icon">
        <a href="/docs/Petousis_Menelaos_CV.pdf" target="_blank" class="lnr lnr-download" download />
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
import { EventBus } from '~/plugins/event-bus.js'
import PageHeader from '~/components/PageHeader'
import ResumeList from '~/components/ResumeList'
import experience from '~/static/mock/resume.json'

export default {
  name: 'AboutPage',
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
            and courses such as: Artificial Intelligence, Compilers, Computer Networking,
            Digital Systems Design, Distributed Systems`,
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
      title: 'My Resume | Petousis Menelaos',
      meta: [{
        name: 'og:title',
        content: 'My Resume | Petousis Menelaos'
      }, {
        vmid: 'description',
        name: 'description',
        content: 'Petousis Menelaos Resume and professional experience'
      }, {
        name: 'og:description',
        content: 'Petousis Menelaos Resume and professional experience'
      }]
    }
  }
}
</script>

<style lang="scss" scoped>
  .icon i.lnr, .icon a {
    color: $main-color;
    font-size: 22px;
    cursor: pointer;
    margin-right: 15px;
  }
</style>
