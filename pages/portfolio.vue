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
      ...metaHead('Portfolio', 'My portfolio Projects'),
      link: [
        { hid: 'canonical', rel: 'canonical', href: `${process.env.BASE_URL}/portfolio` }
      ]
    }
  }
}
</script>
