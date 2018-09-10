<template>
    <div class="task-wrap panel">
            <div class="task-title">任务列表</div>
            <ul class="task-list">
                <li class="task-item" 
                    v-for="(item , index) in taskList" 
                    :key="index"
                    >
                    <div class="task-h clear">
                        <span class="task-subtitle">【 {{item.title}} 】</span>
                        <span class="task-to">to:{{item.name}} </span>
                        <span class="task-time fr">[{{item.time}}]</span>
                    </div>
                    <div class="task-body">
                        {{item.content}}
                        <div v-if="item.step.length > 0">
                            <p  class="task-step-item"  
                                v-for="step in item.step" 
                                :key="step.index">
                                {{step.txt}}
                            </p>
                        </div>
                        <a v-if="item.api.length > 0" :href="item.api" class="task-api-link " target="_blank">资料文档 (点击跳转) </a>   
                    </div>
                </li>
            </ul>
    </div>
</template>

<script>
import { basePath } from "../controller/common/common.js";
export default {
  data() {
    return {
      taskList: []
    };
  },
  methods: {
    getTaskList: function() {
      this.$axios
        .get(`${basePath}/static/data/task/task1.json`)
        .then(res => {
          this.taskList = res.data.taskList;
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  },
  created() {
    this.getTaskList();
  }
};
</script>

<style scoped>
.task-title {
  height: 45px;
  line-height: 45px;
  font-size: 20px;
  border-bottom: 1px solid #e3e3e3;
}
.task-subtitle {
  font-weight: bold;
  color: #333;
}
.task-api-link {
  display: block;
  margin-top: 15px;
  font-size: 14px;
  color: #139a9c;
}
.task-list {
  margin-top: 15px;
}
.task-item {
  padding: 15px;
  background-color: #f3ffff;
  border-radius: 4px;
  border: 1px solid #c7e6e6;
  margin-bottom: 15px;
}
.task-h {
  height: 40px;
  line-height: 40px;
  border-bottom: 1px solid #e3e3e3;
}
.task-to {
  font-weight: blod;
  font-size: 18px;
  color: #333;
}
.task-time {
  font-size: 14px;
  color: #999;
  margin-left: 4px;
}
.task-body {
  padding: 15px;
  font-size: 14px;
  color: #666;
}
.task-step-item {
  padding: 10px 0 2px 20px;
  font-size: 12px;
  color: #333;
}
</style>