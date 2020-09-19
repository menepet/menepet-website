<template>
  <div class="page-heading">
    <h1>{{ param.title }}</h1>
    <span class="icon"><i class="lnr" :class="param.icon" /></span>
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
    margin: 40px 0;
    border-bottom: 1px dashed rgba(0, 0, 0, 0.2);
    padding-bottom: 10px;
    display: flex;
    justify-content: space-between;
    height: 100%;

    &> h1 {
        color: $main-color;
        font-size: 36px;
        font-weight: 700;
        letter-spacing: 1.5px;
        line-height: 1.6em;

        @media screen and (max-width: 768px) {
          font-size: 26px;
          margin: 0;
        }
    }
    &> .icon {
        color: $main-color;
        font-size: 38px;
        line-height: 1em;
    }
}
</style>
