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
  },
  watch:{
    // '$route'(to , from) {
    //       console.log(this)
    //       console.log(this.$router)
    //       console.log(this.$route)
    //       console.log(to);
    //       console.log(from);
    // }
  }
};
</script>
