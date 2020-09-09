<template>
  <div id="home">
    <swipper :banner="banner" />
    <showContent :items="articleItems" />
  </div>
</template>

<script>
import axios from "axios";
import swipper from "./Child/swipper";
import showContent from "./Child/showContent/showContent";

import { getarticleDetail } from "../../network/home";

export default {
  data() {
    return {
      articleItems: null,
      banner: [
        {
          id: 256,
          imgurl:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597748656043&di=42d790ce6a4579aa7b95f78f91008c82&imgtype=0&src=http%3A%2F%2Fi0.hdslb.com%2Fbfs%2Farticle%2Fb731391fdc6820b18b724b3c7041cbe279bc46f2.jpg",
        },
        {
          id: 257,
          imgurl:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597748656041&di=7249cf59482cb511c9acd77b578619dc&imgtype=0&src=http%3A%2F%2Fn.sinaimg.cn%2Fsinacn07%2F600%2Fw1920h1080%2F20180429%2F06f5-fzrwiaz1157993.jpg",
        },
        {
          id: 258,
          imgurl:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597748656036&di=114c2b75bf793ea49a5208195103aca8&imgtype=0&src=http%3A%2F%2Fstatic01.coloros.com%2Fbbs%2Fdata%2Fattachment%2Fforum%2F201608%2F18%2F095520uwsiehiiizys8iif.jpg",
        },
      ],
    };
  },
  components: {
    swipper,
    showContent,
  },

  created() {
    getarticleDetail().then((res) => {
      console.log(res.data);
      this.articleItems = res.data;
    });
  },
};
</script>

<style scoped>
#home {
  overflow: hidden;
  width: 1000px;
  margin: 0 auto;
  margin-top: 5px;
}
</style>                                                                                                                                                                                        