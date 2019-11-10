<template>
  <div v-if="task">
    <h1>这里是模板界面</h1>
    <div class="task">
      <div class="task-image">
        <img :src="task.image">
      </div>
      <div class="task-info">
        <h1 class="task-name">模板{{ task.id }}</h1>
        <div class="task-cost">模板名称 ：{{ task.name }}</div>
        <div class="task-cost">创建时间 ：{{ task.time }}</div>
      </div>
    </div>
  </div>
</template>
<script>
import task_data_1 from "../data/history.js";
import task_data_2 from "../data/template.js";
export default {
  data() {
    return {
      // 获取路由中的参数
      id: parseInt(this.$route.params.id),
      task: null
    };
  },
  methods: {
    gettask() {
      // 真实环境通过 ajax 获取，这里用异步模拟
      setTimeout(() => {
        this.task = task_data_1.find(item => item.id === this.id);
      }, 500);
      setTimeout(() => {
        this.task = task_data_2.find(item => item.id === this.id);
      }, 500);
    }
  },
  mounted() {
    this.gettask();
  }
};
</script>
<style scoped>
.task {
  background: #fff;
  border: 1px solid #dddee1;
  border-radius: 10px;
  overflow: hidden;
}
.task-image {
  float: left;
  text-align: center;
}
.task-image img {
  height: 100%;
}
.task-info {
  width: 50%;
  float: left;
  padding-left: 20px;
}
.task-cost {
  color: #f2352e;
  margin: 8px 0;
}
.task-desc {
  background: #fff;
  margin: 32px;
  padding: 32px;
  border: 1px solid #dddee1;
  border-radius: 10px;
  text-align: center;
}
.task-desc img {
  display: block;
  width: 50%;
  margin: 32px auto;
  padding: 32px;
  border-bottom: 1px solid #dddee1;
}
</style>