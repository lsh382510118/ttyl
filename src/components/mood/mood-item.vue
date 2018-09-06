<template>
    <div class="mood-item">
        <div class="mood-h">
            <div class="mood-h-l">
                <div class="mood-item-picwrap">
                <img :src="itemData.userPic?itemData.userPic:'../../static/img/1.jpg'" class="mood-item-pic"></div>
                <span class="mood-name">{{itemData.name}}</span>
                <span class="mood-time">({{itemData.time}})</span>
            </div>
        </div>
        <div class="mood-txt">{{itemData.mood}}</div>
    </div>
</template>

<script>
export default {
  name: "moodItem",
  props: ["itemData"],
  data() {
    return {};
  },
  mounted() {

  }
};
</script>

<style scoped>
.mood-item{
    padding: 15px;
    background-color: #f3ffff;
    border-radius: 4px;
    border: 1px solid #c7e6e6;
}
.mood-h {
    height: 70px;
    line-height: 70px;
}
.mood-name{
    margin-left: 15px;
}
.mood-time{
    margin-left: 8px;
    color: #999;
    font-size: 12px;
}
.mood-item-picwrap{
  height: 50px;
  width: 50px;
  border-radius: 50%;
  overflow: hidden;
  vertical-align: middle;
  border: 1px solid #e3e3e3;
  display: inline-block;
  padding: 2px;
}
.mood-item-pic {
    width: 100%;
}
.mood-txt{
    padding: 15px;
    font-size: 14px;
    color: #666;
}
.mood-item + .mood-item{
    margin-top: 15px;
}
</style>