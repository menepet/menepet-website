<template>
  <div>
    <b-button
      pill
      variant="outline-info"
      :class="visible ? null : 'collapsed'"
      :aria-expanded="visible ? 'true' : 'false'"
      aria-controls="collapse-item"
      @click="visible = !visible"
    >
      Take a look!
    </b-button>

    <b-collapse id="collapse-item" v-model="visible" class="mt-2">
      <project-projection :projects="projects" @toggleView="visible = false" />
    </b-collapse>
  </div>
</template>

<script>
import ProjectProjection from '~/components/ProjectProjection'
import { EventBus } from '~/plugins/event-bus.js'

export default {
  name: 'AccordionItems',
  components: {
    ProjectProjection
  },
  props: {
    projects: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      visible: false
    }
  },
  mounted() {
    EventBus.$on('expandAll', () => {
      this.visible = true
    })
    EventBus.$on('collapseAll', () => {
      this.visible = false
    })
  },
  beforeDestroy() {
    EventBus.$off()
  }
}
</script>
