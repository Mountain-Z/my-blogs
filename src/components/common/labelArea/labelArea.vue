<template>
  <div class="labelArea">
    <div class="title">
      <div>
        <slot name="title"></slot>
      </div>
      <div>
        <slot name="nums"></slot>
      </div>
    </div>
    <div class="content">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.labelArea {
  position: relative;
  width: 300px;
  margin-bottom: 30px;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.2);
}
.content {
  width: 300px;
  height: 300px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}
.title {
  width: 300px;
  height: 55px;
  line-height: 55px;
  background-color: rgb(212, 212, 212);
  border-bottom: 4px solid rgb(7, 7, 255);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;

  display: flex;
  justify-content: space-between;
}
</style>