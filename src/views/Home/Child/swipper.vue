<template>
  <div id="wrapper">
    <div class="swipper" v-on:mouseenter="pauseSwitch()" @mouseleave="startSwitch()">
      <div class="swipperItem" :style="'left:'+ currentdist + 'px' ">
        <div class="Item">
          <img :src="banner[banner.length - 1].imgurl" />
        </div>

        <div v-for="(item,index) in banner" :key="index" class="Item">
          <img :src="item.imgurl" />
        </div>

        <!-- 复制第一张图片 -->
        <div class="Item">
          <img :src="banner[0].imgurl" />
        </div>
      </div>

      <aside>
        <a
          href="javascript:;"
          class="prev"
          :style=" 'opacity:' + opacity "
          @click="prevImage()"
        >{{direction}}</a>
        <a href="javascript:;" class="next" :style="  'opacity:' + opacity" @click="nextImage()">></a>
      </aside>

      <div class="markP">
        <div
          v-for="(item,index) in banner"
          :key="index"
          :class=" ['Mark' , currentIndex == index ? 'active':'' ]   "
          @click="handleMark(index)"
        ></div>
      </div>
    </div>

    <!-- 浮标 -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      dist: 1000,
      direction: "<",
      currentdist: -1000,
      timer: 20,
      speedtimer: 20,
      autoTime: 3000,
      autoSwitchTimer: null,
      opacity: 0,
      constentClick: false,
      currentIndex: 0,
      clickTimer: null,
      clickTime: 10,
    };
  },
  props: {
    banner: {
      type: Array,
      require: true,
    },
  },

  created() {
    this.Width = 1000 * (this.banner.length + 2);
    this.autoSwitch();
  },

  methods: {
    prevImage() {
      this.switchImage(true);
    },

    nextImage() {
      this.switchImage(false);
    },

    switchImage(result) {
      if (this.constentClick) {
        return;
      }
      let dist = result ? this.dist : -this.dist;

      this.currentIndex = result
        ? this.currentIndex - 1
        : this.currentIndex + 1;

      if (this.currentIndex > this.banner.length - 1) {
        this.currentIndex = 0;
      } else if (this.currentIndex < 0) {
        this.currentIndex = this.banner.length - 1;
      }

      let targetDist = this.currentdist + dist;

      let speed = dist / this.speedtimer;

      const switchTimer = setInterval(() => {
        this.currentdist += speed;

        if (this.currentdist == targetDist) {
          clearInterval(switchTimer);
          this.constentClick = false;
          if (this.currentdist == -(this.Width + dist)) {
            this.currentdist = dist;
          }
          if (this.currentdist == 0) {
            this.currentdist = -(this.Width - 2 * dist);
          }
        }
      }, this.timer);

      this.constentClick = true;
    },

    autoSwitch() {
      this.autoSwitchTimer = setInterval(() => {
        this.switchImage(false);
      }, this.autoTime);
    },

    pauseSwitch() {
      this.opacity = 1;
      clearInterval(this.autoSwitchTimer);
    },
    startSwitch() {
      this.opacity = 0;

      this.autoSwitch();
    },

    handleMark(index) {
      let beforeIndex = this.currentIndex;
      if (beforeIndex != index) {
        this.currentIndex = index;

        let targetdist = -(this.currentIndex + 1) * this.dist;

        let speed = this.currentIndex < beforeIndex ? 100 : -100;

        this.clickTimer = setInterval(() => {
          this.currentdist += speed;

          if (this.currentdist == targetdist) {
            clearInterval(this.clickTimer);
          }
        }, this.clickTime);
      }
    },
  },
};
</script>

<style scoped>
.wrapper {
  position: relative;
}
.swipper {
  position: relative;
  width: 1000px;
  height: 391.4px;
  overflow: hidden;
  margin: 0 auto;
}
.swipperItem {
  position: absolute;
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
  bottom: 3%;
  text-align: center;
  width: 1000px;
  margin: 0 auto;
  z-index: 9;
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

.prev,
.next {
  position: absolute;
  height: 670px;
  width: 110px;
  background-color: rgba(0, 0, 0, 0.4);
  text-align: center;
  line-height: 400px;
  color: #fff;
  font-size: 25px;
  transition: 0.5s ease-out;
}

.prev {
  left: 0;
}
.next {
  right: 0;
}
</style>