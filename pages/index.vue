<template>
  <div class="app-content">
    <logo />
    <h1 class="title">
      menepet-website
    </h1>
    <h2 class="subtitle">
      My Personal Resume Website
    </h2>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
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

.title {
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: $main-color;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
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
