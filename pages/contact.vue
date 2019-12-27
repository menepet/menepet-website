<template>
  <div>
    <b-container>
      <page-header :param="{ title: 'Contact', icon: 'lnr-envelope' }" />
    </b-container>
  </div>
</template>

<script>
import PageHeader from '~/components/PageHeader'

export default {
  name: 'Contact',
  components: {
    PageHeader
  },
  head() {
    return {
      title: 'Contact | Petousis Menelaos'
    }
  }
}
</script>
