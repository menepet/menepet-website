<template>
  <div>
    <sidebar />
    <nuxt />
  </div>
</template>

<script>
import sidebar from '~/components/Sidebar.vue'

export default {
  components: { sidebar }
}
</script>

<style lang="scss">
html {
  font-family: -apple-system, BlinkMacSystemFont,
    Arial, sans-serif;
  background-color: $bg-color;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
</style>
