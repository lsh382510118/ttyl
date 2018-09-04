<template>
    <div class="header-nav">
        <div class="inner">
            <h1 class="head-l">{{title}}</h1>
            <div class="head-r">

                <router-link v-for="item in navList"
                            :key="item.index"
                            :index ="item.index"
                            :to="item.path"
                            class="head-link">{{item.name}}</router-link>

            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "headerNav",
  data() {
    return {
      title: "TTYL",
      navList: [
        { name: "每日心情", path: "/mood", index: "1" },
        { name: "生活杂语", path: "/life", index: "2" },
        { name: "学习历程", path: "/study", index: "3" },
        { name: "工作分享", path: "/work", index: "4" },
        { name: "联系方式", path: "/mine", index: "5" }
      ]
    };
  }
};
</script>

<style scoped>
.header-nav {
  height: 80px;
  line-height: 80px;
  background-color: #333;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
}
.header-nav > .inner {
  display: -webkit-flex;
  display: flex;
  -webkit-justify-content: space-between;
  justify-content: space-between;
  -webkit-align-items: stretch;
  align-items: stretch;
  height: 80px;
  line-height: 80px;
  background-color: #333;
  padding: 0 50px;
  box-shadow: 0 3px 3px rgba(48, 194, 197, 0.4);
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 99;
}
.head-l {
  color: #30c2c5;
  text-shadow: 0 -1px 1px rgba(0, 0, 0, 0.8);
  letter-spacing: 10px;
  font-size: 50px;
}
.head-link {
  padding: 0 1em;
  font-size: 16px;
  display: inline-block;
  vertical-align: top;
  color: #fff;
  text-shadow: 0 -1px 1px rgba(0, 0, 0, 0.8);
  -webkit-transition: all 0.3s linear 0s;
  transition: all 0.3s linear 0s;
  margin: 0 7px;
  min-width: 100px;
  text-align: center;
}
.head-link:hover {
  padding: 0 1em;
  font-size: 16px;
  display: inline-block;
  vertical-align: top;
  color: #fff;
  text-shadow: 0 -1px 1px rgba(0, 0, 0, 0.8);
  -webkit-transition: all 0.3s linear 0s;
  transition: all 0.3s linear 0s;
  margin: 0 7px;
  min-width: 100px;
}
.head-link.router-link-active {
  -webkt-transform-origin: top center;
  transform-origin: top center;
  transform: scale(1.1);
  color: #1e4546;
  background-color: #30c2c5;
  text-shadow: 0 1px 1px rgba(255, 255, 255, 0.8);
  font-size: 18px;
}
</style>