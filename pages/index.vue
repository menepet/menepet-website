<template>
  <div>
    <img class="icon" src="~/static/icon.svg" width="300" height="187" alt="home logo">
    <type-label />
  </div>
</template>

<script>
import TypeLabel from '~/components/TypeLabel.vue'
import { metaHead } from '~/utils'

export default {
  components: { TypeLabel },
  head() {
    return {
      ...metaHead('Home 🏠', 'My Personal Website as a Software Engineer. Check my Resume :)'),
      link: [
        { rel: 'amphtml', href: `${process.env.BASE_URL || ''}/amp/` }
      ]
    }
  }
}
</script>

<style scoped>
.icon {
  animation: 1s appear;
  width: 300px;
  margin: 5% auto;
  display: block;
}

@keyframes appear {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@media screen and (max-width: 767px) {
    .icon {
      width: 180px;
      margin: 10% auto;
    }
}
</style>
