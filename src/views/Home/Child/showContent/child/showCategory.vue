<template>
  <div class="wrapper" @click="clickItem">
    <div class="content">{{categories}}</div>
    <slot name="categories"></slot>
  </div>
</template>

<script>
export default {
  props: {
    categories: {
      type: String,
    },
  },
  methods: {
    clickItem() {
      this.$emit("clickItem");
    },
  },
};
</script>

<style scoped>
.wrapper {
  height: 40px;
  border-bottom: 1px solid rgb(170, 170, 170);
}
</style>