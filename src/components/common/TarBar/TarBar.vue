<template>
  <div id="wrapper">
    <div class="content">
      <!-- <div class="title">
        <a href="#">
          <img src="../../assets/title.png" alt />
        </a>
      </div>-->
      <div class="Home">
        <router-link to="/home" style="color:#fff">
          <span class="iconfont">&#xe69b;</span>
          首页
        </router-link>
      </div>
      <div>
        <router-link to="/category" style="color:#fff">
          <span class="iconfont">&#xe6f5;</span>
          <span>分类</span>
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
  /* width: 1200px; */
  overflow: hidden;

  height: 65px;
  background-color: rgb(26, 26, 26);
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);
}

.content {
  overflow: hidden;

  line-height: 65px;
  width: 75.8%;
  margin: 0 auto;
  color: #ffffff;
  display: flex;
  justify-content: space-between;
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
</style>