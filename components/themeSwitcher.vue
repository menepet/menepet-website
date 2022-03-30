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
      v-if="this.$colorMode.preference === 'dark'"
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
