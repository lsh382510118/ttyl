<template>
  <div id="app">
    <header-nav></header-nav>
    <div class="router-view-wrap">
      <router-view/>
    </div>
  </div>
</template>

<script>
import headerNav from "./components/headerNav";
export default {
  name: "App",
  data() {
    return {};
  },
  components: {
    headerNav: headerNav
  }
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
a{
  text-decoration: none;
}
html,
body {
  height: 100%;
}
body {
  font-family: "微软雅黑 Light";
  padding-top: 80px;
  background-color: #f7f7f7;
  position: relative;
  color: #333;
  /* min-height: 500px; */
}
#app{
  height: 100%;
}
.router-view-wrap{
  height: 100%;
}
</style>
