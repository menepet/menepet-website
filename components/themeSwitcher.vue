<template>
  <b-form-checkbox
    v-model="$colorMode.preference"
    name="switch theme"
    value="dark"
    unchecked-value="light"
    aria-label="switch between light or dark theme"
    switch
  >
    <font-awesome-icon
      v-if="$colorMode.preference === 'dark'"
      tabindex="0"
      aria-label="switch to light theme"
      icon="moon"
    />
    <font-awesome-icon
      v-else
      tabindex="0"
      aria-label="switch to dark theme"
      icon="sun"
    />
  </b-form-checkbox>
</template>

<script>
export default {
  name: 'ThemeSwitcher',
  mounted() {
    const hasSelectedTheme = localStorage.getItem('nuxt-color-mode')
    const hasDarkSystemDefault = window.matchMedia('(prefers-color-scheme: dark)').matches

    if (!hasSelectedTheme && hasDarkSystemDefault) {
      window.requestAnimationFrame(() => {
        this.$colorMode.preference = 'dark'
        console.log('dark mode')
      })
    }
  }
}
</script>
