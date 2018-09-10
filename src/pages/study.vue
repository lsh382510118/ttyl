<template>
  <div class="study-main">
    <study-nav></study-nav> 
    <router-view class="study-content"></router-view>
  </div>
</template>

<script>
  import studyNav from './study/studyNav.vue';
  export default {
    components : {
      studyNav
    },
    data(){
      return {

      }
    },
  }
</script>

<style scoped>
.study-main,.study-nav-wrap,.study-content{
  height: 100%;
}
.study-nav-wrap{
  float: left;
  width: 200px;
  background-color: rgb(84, 92, 100);
}
  .study-content{
    margin-left: 200px;
  }
</style>