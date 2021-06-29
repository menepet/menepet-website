<template>
  <div>
    <ul>
      <li v-for="(item, index) in projects" :key="index" class="text-left">
        <div v-if="index !== 0" class="text-center dot">~</div>
        <span class="title-underline">Name</span>{{ item. title }}

        <template v-if="item.descr">
          <br><span class="title-underline">Description</span>{{ item.descr }}
        </template>

        <template v-if="item.technologies">
          <br><span class="title-underline">technologies</span>
          <span v-for="tech in item.technologies" :key="tech" class="tech">#{{ tech }}</span>
        </template>

        <template v-if="item.customer">
          <br><span class="title-underline">Customer</span>{{ item.customer }}
        </template>

        <template v-if="item.link">
          <br><span class="title-underline">link</span>
          <a :href="item.link" target="_blank" rel="noopener">{{ item.link }}</a>
        </template>
      </li>
    </ul>
    <b-button
      pill
      variant="outline-info"
      class="mt-3 collapse-btn"
      @click="$emit('toggleView')"
    >
      Collapse ^
    </b-button>
  </div>
</template>

<script>
export default {
  name: 'ProjectProjection',
  props: {
    projects: {
      type: Array,
      required: true,
      default: () => []
    }
  }
}
</script>

<style lang="scss" scoped>
$hashColor: rgba(102, 143, 171, 0.7);

ul {
  border: $main-color 1px dotted;
  border-radius: 15px;
  padding: 25px;

  &> li {
    margin: 20px 0;
    font-family: "Droid Sans";

    .dot {
      color: $main-color;
      font-size: 20px;
    }
    .tech {
      border: $hashColor 1px solid;
      color: $hashColor;
      border-radius: 20px;
      padding: 3px 6px;
      margin-right: 7px;
      word-break: break-word;
      line-height: 1.8;
    }
    a {
      color: $main-color;
      word-break: break-word;
    }
  }
}
.collapse-btn {
  border: none;
}

@media screen and (max-width: 767px) {
  ul { padding: 15px; }
}
</style>
