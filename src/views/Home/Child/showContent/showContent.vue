<template>
  <div id="showContent">
    <div class="showItem">
      <div v-for="(item,index) in items" :key="index">
        <show-item :items="item" @handleIndex="getItemsIndex(index)" />
      </div>
    </div>
    <div class="showOther">
      <label-area>
        <div slot="title" class="More">
          <a href="#">
            <div class="more1">
              <span class="iconfont">&#xe6f5;</span>
              分类
            </div>
          </a>
          <div>
            <a href="#">
              <div class="more2">More >></div>
            </a>
          </div>
        </div>
        <div class="categoryInnerArea" slot="content">
          <div v-for="(item,index) in categories" :key="item">
            <show-category :categories="item" @clickItem="handleCategoryIndex(index)" />
          </div>
        </div>
      </label-area>

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
  props: {
    items: {
      type: Array,
      default: [],
    },
  },
  data() {
    return {
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
  created() {},
  methods: {
    handleCategoryIndex(index) {
      console.log(index);
      console.log(this.items);
    },
    getItemsIndex(index) {
      console.log(index);
    },
  },
};
</script>

<style scoped>
#showContent {
  overflow: hidden;
  width: 1000px;
  display: flex;
  justify-content: space-between;
}
.showOther {
  width: 300px;
  margin-top: 10px;
}

.categoryOutArea {
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
  width: 264px;
  /* background-color: red; */
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2), -2px -2px 2px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  line-height: 40px;
}

.More {
  width: 300px;
  display: flex;
  justify-content: space-between;
}
.More .more1 {
  color: rgb(80, 80, 80);
  font-size: 17px;

  margin-left: 10px;
}
.More .more2 {
  color: rgb(62, 132, 179);
  margin-right: 8px;
}
</style>