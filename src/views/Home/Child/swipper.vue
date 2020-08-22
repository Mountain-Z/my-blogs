<template>
  <div class="swipper">
    <!-- 图片 -->
    <div
      class="swipperItem"
      :style=" ' transition: ' + Transition + '; width:' + Width + 'px;margin-left:' + dist + 'px' "
    >
      <div
        v-for="(item,index) in banner"
        :key="index"
        class="Item"
        @mouseenter="pauseSwiper"
        @mouseleave="startSwipper"
      >
        <img :src="item.imgurl" />

        <!-- 创建浮标 -->
      </div>
      <!-- 复制第一张图片 -->
      <!-- <div class="Item" @mouseenter="pauseSwiper" @mouseleave="startSwipper">
        <img :src="banner[0].imgurl" />
      </div>-->
    </div>

    <!-- 浮标 -->
    <div class="markP">
      <div
        v-for="(item,index) in banner"
        :key="index"
        :class=" ['Mark' , currentIndex == index ? 'active':'' ]   "
        @click="handleMark(index)"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      Width: 0,
      dist: 0,
      Timer: null,
      currentIndex: 0,
      isShow: false,
      num: 0,
      Transition: "1s ease-out",
    };
  },
  props: {
    banner: {
      type: Array,
      require: true,
    },
  },
  created() {
    this.Width = 1000 * this.banner.length;

    this.startSwipper();
  },
  methods: {
    pauseSwiper(e) {
      clearInterval(this.Timer);
      this.Timer = null;
    },
    startSwipper() {
      this.Timer = setInterval(() => {
        if (this.currentIndex != this.banner.length) {
          this.Transition = "1s ease-out";
          this.currentIndex += 1;
          this.dist = this.dist - 1000;
        }

        if (this.dist == -1000 * this.banner.length) {
          this.dist = 0;
          // this.Transition = "unset";
        }
        if (this.currentIndex == this.banner.length) {
          this.currentIndex = 0;
        }
      }, 2000);
    },
    handleMark(index) {
      this.currentIndex = index;
      this.dist = -1000 * this.currentIndex;
      clearInterval(this.Timer);
      this.Timer = null;
    },
  },
};
</script>

<style scoped>
.swipper {
  position: relative;
  width: 1000px;
  height: 391.4px;
  overflow: hidden;
  margin: 0 auto;
}
.swipperItem {
  height: 391.4px;
  display: flex;
}
.Item {
  width: 1000px;
  height: 391.4px;
  overflow: hidden;
}
.Item img {
  width: 1000px;
  height: 669.7px;
}

.markP {
  position: absolute;
  bottom: 5px;
  text-align: center;
  width: 1000px;
  margin: 0 auto;
}

.Mark {
  display: inline-block;
  height: 10px;
  width: 10px;
  margin: 0 5px;
  border-radius: 50%;
  background-color: #b1b1b1;
}

.active {
  background-color: #ff7300;
}
</style>