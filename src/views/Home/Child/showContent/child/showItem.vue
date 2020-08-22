<template>
  <div class="showItem">
    <div class="items" @click="handleIndex">
      <h3 class="title">{{items.title}}</h3>
      <div class="detail">{{items.details}}</div>
      <div class="author">
        <div>{{items.author.username}}</div>
        <div>{{items.author.createTime}}</div>
        <div class="lebal"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Object,
    },
  },
  methods: {
    handleIndex() {
      this.$emit("handleIndex");
    },
  },
};
</script>

<style scoped>
.showItem {
  position: relative;
  height: 150px;
  width: 600px;
  border-radius: 10px;
  background-color: rgb(122, 253, 181);
  margin: 10px 0;
}

.items {
  position: absolute;
  top: 25%;
  left: 3%;
  width: 460px;
  height: 100px;
}

.title {
  color: #333333;
  font-size: 1.2rem;
}

.items .detail {
  margin-top: 10px;
  width: 400px;
  height: 40px;
  line-height: 20px;
  font-size: 16px;
  overflow: elipse;
}
.author {
  display: flex;
  width: 300px;
  height: 20px;
  line-height: 20px;
  font-size: 13px;
  justify-content: space-between;
}
</style>