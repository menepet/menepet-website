<template>
  <div class="app-content">
    <logo />
    <type-label />
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import TypeLabel from '~/components/TypeLabel.vue'

export default {
  components: {
    Logo,
    TypeLabel
  },
  head() {
    return {
      title: 'Petousis Menelaos | Front-End Engineer'
    }
  }
}
</script>

<style lang="scss" scoped>
.app-content {
  position: absolute;
  left: $sidebarWidth;
  min-height: 100vh;
  display: block;
  text-align: center;
  width: -webkit-calc(100% - #{$sidebarWidth});
  width:    -moz-calc(100% - #{$sidebarWidth});
  width:         calc(100% - #{$sidebarWidth});
}

@media screen and (max-width: 767px) {
  .app-content {
    left: 0;
    width: 100%;
    display: block;
    margin-top: $header-mobile-height;
  }
}
</style>
