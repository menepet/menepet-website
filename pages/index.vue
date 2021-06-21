<template>
  <div>
    <img class="icon" src="~/static/icon.svg" width="300" height="187" alt="home logo">
    <type-label />
  </div>
</template>

<script>
import TypeLabel from '~/components/TypeLabel.vue'

export default {
  components: { TypeLabel },
  head() {
    return {
      title: 'Petousis Menelaos | Software Developer Engineer',
      meta: [{
        name: 'og:title',
        content: 'Petousis Menelaos | Software Developer Engineer'
      }, {
        name: 'description',
        content: 'My Personal Website as a Developer. Here you can check my Resume'
      }, {
        name: 'og:description',
        content: 'My Personal Website as a Developer. Here you can check my Resume'
      }],
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
