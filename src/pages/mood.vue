<template>
  <div class="mood-panel panel">
    <!-- <router-link to="/mood/page1">333</router-link>
    <router-view></router-view> -->
    <mood-item v-for="(item, index) in moodList" :key="index" :itemData="item"></mood-item>
  </div>
</template>

<script>
import moodItem from "../components/mood/mood-item";

import { basePath } from "../controller/common/common.js";
export default {
  data() {
    return {
      moodList: []
    };
  },
  mounted() {
    this.getMoodData();
  },
  methods: {
    getMoodData: function() {
      this.$axios
        .get(`${basePath}/static/data/mood/moodList1.json`)
        .then(res => {
          this.moodList = res.data.moodList;
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  },
  components: {
    moodItem: moodItem
  }
};
</script>
