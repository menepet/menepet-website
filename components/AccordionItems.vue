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
      Check Projects
    </b-button>

    <b-collapse id="collapse-item" v-model="visible" class="mt-2">
      <b-card>I am collapsible content!</b-card>
    </b-collapse>
  </div>
</template>

<script>
export default {
  name: 'AccordionItems',
  props: {
    index: {
      type: Number,
      required: true,
      default: 0
    }
  },
  data() {
    return {
      visible: false
    }
  }
}
</script>
