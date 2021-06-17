<template>
  <div>
    <amp-header />

    <Nuxt />
  </div>
</template>

<script>
import ampHeader from '@/components/AmpHeader.vue'

export default {
  name: 'AmpLayout',
  components: { ampHeader }
}
</script>
