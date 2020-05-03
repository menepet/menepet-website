<template>
  <div>
    <img class="icon" src="~/static/icon.svg" style="" alt="home logo">
    <type-label />
  </div>
</template>

<script>
import TypeLabel from '~/components/TypeLabel.vue'

export default {
  components: {
    TypeLabel
  },
  head() {
    return {
      title: 'Petousis Menelaos | Front-End Developer',
      meta: [{
        name: 'og:title',
        content: 'About | Petousis Menelaos'
      }, {
        vmid: 'description',
        name: 'description',
        content: 'My Personal Website as a Developer. Here you can check my Resume and feel free to contact me!'
      }, {
        vmid: 'og:description',
        name: 'og:description',
        content: 'My Personal Website as a Developer. Here you can check my Resume and feel free to contact me!'
      }]
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
