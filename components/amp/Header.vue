<template>
  <header class="header-mobile">
    <span class="w-50" />

    <n-link to="/">
      <amp-img width="48" height="30" src="/icon.svg" alt="profile-pic" />
    </n-link>

    <button id="nav-icon" class="w-50" on="tap:sidebar.toggle">
      <span />
      <span />
      <span />
      <span />
      <span />
      <span />
    </button>
  </header>
</template>

<script>
export default {
  name: 'AmpHeader'
}
</script>
