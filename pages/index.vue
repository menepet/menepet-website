<template>
  <div>
    <logo style="margin: 50px 0" />
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
