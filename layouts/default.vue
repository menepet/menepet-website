<template>
  <div>
    <sidebar />
    <nuxt class="app-content" keep-alive />
  </div>
</template>

<script>
import sidebar from '~/components/Sidebar.vue'

export default {
  components: { sidebar }
}
</script>

<style lang="scss">
html, body {
  font-family: Arial, sans-serif, -apple-system, BlinkMacSystemFont;
  background-color: var(--background) !important; // due to linkedIn widget override
  color: var(--color-secondary);
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
</style>

<style lang="scss" scoped>
.app-content {
  font-family: $font-droid-regular;
  position: absolute;
  left: $sidebarWidth;
  min-height: 100vh;
  display: block;
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
