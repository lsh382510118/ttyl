<template>
  <div class="study-nav-wrap">
    <el-row class="tac study-nav">
      <el-col :span="24">
        <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
          background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" router>

          <el-submenu v-for="(item) in studyNavData" :key="item.index" :index="item.index">
            <template slot="title">
              <i :class="item.ico"></i>
              <span> {{item.label}} </span>
            </template>
            <el-menu-item v-if="item.children.length > 0" v-for="(subitem, index) in item.children" :key="index"  :index="subitem.path">
              {{subitem.label}}
            </el-menu-item>

          </el-submenu>


        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import {
    basePath
  } from "./../../controller/common/common.js";
  export default {
    data() {
      return {
        studyNavData: [],
        defaultProps: {
          children: "children",
          label: "label"
        }
      };
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      handleNodeClick(data) {
        console.log(data);
      },
      getStudyNavData() {
        this.$axios
          .get(`${basePath}/static/data/study/studyNav.json`)
          .then(res => {
            console.log(res);
            this.studyNavData = res.data.studyNav;
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    },
    mounted() {
      this.getStudyNavData();
    }
  };

</script>

<style scoped>
  .el-menu{
    border-right: none;
  }
</style>
