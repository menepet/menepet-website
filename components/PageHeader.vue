<template>
  <div class="page-heading">
    <h1>{{ param.title }}</h1>

    <font-awesome-icon class="icon" :icon="param.icon" />
  </div>
</template>

<script>
export default {
  props: {
    param: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.page-heading {
  margin: 20px 0;
  border-bottom: 1px dashed var(--title);
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    color: var(--title);
    font-size: 26px;
    font-weight: 700;
    letter-spacing: 1.5px;
    line-height: 1.6em;
    margin: auto 0;
  }

  .icon {
    color: var(--title);
    font-size: 25px;
    line-height: 1em;
  }

  @media screen and (min-width: 768px) {
    margin: 40px 0;

    h1 {
      font-size: 36px;
    }
    .icon {
      font-size: 35px;
    }
  }
}
</style>
