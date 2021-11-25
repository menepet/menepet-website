<template>
  <div>
    Portfolio
  </div>
</template>

<script>
import { metaHead } from '~/utils'

export default {
  name: 'Portfolio',
  head() {
    return {
      ...metaHead('Portfolio', 'My portfolio Projects')
    }
  }
}
</script>
