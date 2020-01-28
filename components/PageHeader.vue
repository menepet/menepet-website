<template>
  <div class="page-heading">
    <span class="icon"><i class="lnr" :class="param.icon" /></span>
    <h1>{{ param.title }}</h1>
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
    margin-bottom: 50px;
    margin-top: 50px;
    border-bottom: 1px dashed rgba(0, 0, 0, 0.2);
    padding-bottom: 10px;

    &> h1 {
        color: $main-color;
        font-size: 36px;
        font-weight: 700;
        letter-spacing: 1.5px;
        line-height: 1em;
        text-transform: capitalize;
        position: relative;
        display: inline-block;
    }
    &> .icon {
        color: $main-color;
        float: right;
        font-size: 38px;
        line-height: 1em;
    }
}
</style>
