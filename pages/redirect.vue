<template>
  <div>
    Redirect Page to new Domain
  </div>
</template>

<script>
import { metaHead } from '~/utils'

export default {
  name: 'Redirect',
  asyncData({ redirect }) {
    return redirect('https://mene.pet')
  },
  head() {
    return {
      ...metaHead('Redirect', 'My Redirect Projects')
    }
  }
}
</script>
