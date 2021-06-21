<template>
  <div>
    <amp-header />

    <Nuxt />

    <amp-sidebar />
  </div>
</template>

<script>
import ampHeader from '@/components/amp/Header.vue'
import ampSidebar from '@/components/amp/Sidebar.vue'

export default {
  name: 'AmpLayout',
  components: { ampHeader, ampSidebar }
}
</script>
