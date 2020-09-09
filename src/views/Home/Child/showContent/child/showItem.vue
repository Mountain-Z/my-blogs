<template>
  <div class="showItem">
    <div class="items" @click="handleIndex(items.blogsId)">
      <h3 class="title">{{items.title}}</h3>
      <div class="detail">{{items.discription}}</div>
      <div class="author">
        <div>{{items.author}}</div>
        <div>{{items.createDate}}</div>
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
  height: 150px;
  width: 600px;
  border-radius: 10px;
  background-color: #fff;
  margin: 20px 0;
  box-shadow: 5px 5px 2px rgba(2, 2, 2, 0.2);
}

.items {
  padding: 15px;
  width: 550px;
  height: 100px;
}

.title {
  color: #333333;
  font-size: 1.2em;
  height: 30px;
  line-height: 30px;
}

.detail {
  margin-top: 10px;
  height: 55px;
  line-height: 20px;
  font-size: 1em;
  line-height: 100%;

  text-overflow: elipse;
}
.author {
  margin-top: 5px;

  display: flex;
  height: 20px;
  width: 600px;
  padding: 0 8px;
  line-height: 20px;
  font-size: 0.8em;
  justify-content: space-between;
}
</style>