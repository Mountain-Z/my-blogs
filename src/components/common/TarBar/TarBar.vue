<template>
  <div id="wrapper">
    <div class="content">
      <!-- <div class="title">
        <a href="#">
          <img src="../../assets/title.png" alt />
        </a>
      </div>-->
      <div>
        <router-link to="/home" style="color:#fff">
          <span class="iconfont">&#xe69b;</span>首页
        </router-link>
      </div>
      <div>
        <router-link to="/category" style="color:#fff">
          <span class="iconfont">&#xe6f5;</span>分类
        </router-link>
      </div>
      <div>
        <span class="iconfont">&#xe697;</span>
        标签
      </div>
      <div>
        <span class="iconfont">&#xe69c;</span>
        音乐
      </div>
      <div>
        <span class="iconfont">&#xe6a4;</span>
        视频
      </div>
      <div>
        <span class="iconfont">&#xe6a0;</span>
        站长信息
      </div>
      <div class="searchBox">
        <input type="text" name id placeholder="Searc" />
        <span class="iconfont">&#xe6e1;</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "selectTarBar",
};
</script>

<style scoped>
#wrapper {
  height: 69.3px;
  background-color: rgb(26, 26, 26);
  box-shadow: 0 5px 8px rgba(0, 0, 0, 0.5);
}

.content {
  line-height: 69.3px;
  width: 1137px;
  margin: 0 auto;
  color: #ffffff;
  display: flex;
  justify-content: space-between;
  align-content: center;
}

.title {
  text-align: center;
  line-height: 68.8px;
  position: relative;
}

.title img {
  width: 70%;
  /* height: 65%; */
  margin-top: 13px;
}
.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
@font-face {
  font-family: "iconfont";
  src: url("../../../assets/font/iconfont.eot");
  src: url("../../../assets/font/iconfont.eot?#iefix")
      format("embedded-opentype"),
    url("../../../assets/font/iconfont.woff2") format("woff2"),
    url("../../../assets/font/iconfont.woff") format("woff"),
    url("../../../assets/font/iconfont.ttf") format("truetype"),
    url("../../../assets/font/iconfont.svg#iconfont") format("svg");
}
</style>