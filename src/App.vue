<template>
  <div id="app">
    <tar-bar />
    <router-view />
  </div>
</template>

<script>
import TarBar from "components/common/TarBar/TarBar";

export default {
  components: {
    TarBar,
  },
};
</script>

<style>
@import "assets/css/base.css";

#app {
  background-color: #f4f4f4;
}
</style>
