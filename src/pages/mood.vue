<template>
  <div class="mood-panel">
    <mood-item v-for="(item, index) in moodList" :key="index" :itemData="item"></mood-item>
  </div>
</template>

<script>
import moodItem from "../components/mood/mood-item";

export default {
  data() {
    return {
      moodList: [
        {
          userPic: "../../static/img/1.jpg",
          time: "06月13日 17:09",
          name: "徐凤年",
          mood: "男儿只说三分话，留下七分打天下！"
        },
        {
          userPic: "../../static/img/2.jpg",
          time: "06月13日 17:09",
          name: "徐凤年",
          mood: "天上剑仙三百万，遇我也须尽低眉。"
        },
        {
          userPic: "../../static/img/3.jpg",
          time: "06月13日 17:09",
          name: "徐凤年",
          mood: "不握剑了，握着她的手，这样的江湖，比什么都好。！"
        },
        {
          userPic: "../../static/img/4.jpg",
          time: "06月13日 17:09",
          name: "徐凤年",
          mood: "人生当苦无妨，良人当归即好！！"
        }
      ]
    };
  },
  components: {
    moodItem: moodItem
  }
};
</script>

<style scoped>
.mood-panel {
  width: 1100px;
  margin: auto;
  background-color: #fff;
  padding: 15px;
  margin-top: 15px;
}
</style>
