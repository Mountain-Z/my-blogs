<template>
  <div class="showContent">
    <div class="showItem">
      <div v-for="(item,index) in items" :key="index">
        <show-item :items="item" @handleIndex="getItemsIndex(index)" />
      </div>
    </div>
    <div class="showOther">
      <label-area></label-area>
      <!-- 
      <div class="categoryOutArea">
        <div class="categoryInnerArea">
          <div v-for="(item,index) in categories" :key="item">
            <show-category :categories="item" @clickItem="handleCategoryIndex(index)" />
          </div>
        </div>
      </div>-->
      <label-area></label-area>

      <div v-for="(item,index) in labels" :key="index">
        <show-label :label="item" />
      </div>
    </div>
  </div>
</template>

<script>
import showItem from "./child/showItem";
import showLabel from "./child/showLabel";
import showCategory from "./child/showCategory";
import labelArea from "components/common/labelArea/labelArea";

export default {
  data() {
    return {
      items: [
        {
          id: 2345,
          title: "关于用户上网",
          details: "内有详细教程",
          author: {
            username: "Mountain_Z",
            createTime: "2019-01-12",
          },
        },
        {
          id: 2345,
          title: "关于用户上网",
          details: "内有详细教程",
          author: {
            username: "Mountain_Z",
            createTime: "2019-01-12",
          },
        },
      ],
      labels: ["笔记", "IO流", "教程", "资源", "操作"],
      categories: ["其它技术", "学习", "旅行记录", "资源分享"],
    };
  },
  components: {
    showItem,
    showLabel,
    showCategory,
    labelArea,
  },
  methods: {
    handleCategoryIndex(index) {
      console.log(index);
    },
    getItemsIndex(index) {
      console.log(index);
    },
  },
};
</script>

<style scoped>
.showContent {
  position: relative;
  display: flex;
  justify-content: space-between;
}
.showOther {
  width: 300px;
  margin-top: 10px;
}

.categoryOutArea {
  position: absolute;
  right: 0;
  width: 300px;
  height: 300px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2);
}

.categoryInnerArea {
  position: absolute;
  width: 264px;
  /* background-color: red; */
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2), -2px -2px 2px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  line-height: 40px;
}
</style>