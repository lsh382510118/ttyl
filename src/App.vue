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
