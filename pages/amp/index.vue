<template>
  <div class="wrapper">
    <amp-img
      alt="home logo"
      src="/icon.svg"
      width="180"
      height="187"
      layout="fixed"
    />

    <type-label />
  </div>
</template>

<script>
import TypeLabel from '~/components/TypeLabel.vue'

export default {
  name: 'AmpHome',
  layout: 'default.amp',
  components: { TypeLabel },
  head() {
    return {
      title: 'Petousis Menelaos | Front-End Developer',
      meta: [{
        name: 'og:title',
        content: 'Menepet | Software Developer Engineer'
      }, {
        name: 'description',
        content: 'My Personal Website as a Developer. Here you can check my Resume'
      }, {
        name: 'og:description',
        content: 'My Personal Website as a Developer. Here you can check my Resume'
      }],
      link: [
        { rel: 'canonical', href: `${process.env.BASE_URL || ''}/` }
      ]
    }
  }
}
</script>
