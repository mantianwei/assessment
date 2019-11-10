<template>
  <div>
    <div class="list-control ant-list-bordered">
      <div class="list-control-finish">
      <a-radio-group :value="size" @change="handleSizeChange">
      <a-radio-button value="large" name="进行中">全部</a-radio-button>
      <a-radio-button value="default" name="进行中">表单模版</a-radio-button>
      <a-radio-button value="small" name="已完成">历史模版</a-radio-button>
    </a-radio-group>
      </div>
      <div>
      </div>
    </div>
    <div class="list_set ant-list-bordered">
    <div v-if="size=='large'">
    <h4 style="margin-left:15px;">表单模板</h4>
     <task v-for="item in data_m" :info="item" :key="item.id"></task>
     <br/>
     <h4 style="margin-left:15px;">历史模板</h4>
      <task v-for="item in data_h" :info="item" :key="item.id"></task>
      <div class="clearfloat"></div>
    </div>
    <div v-if="size=='default'">
    <h4 style="margin-left:15px;">表单模板</h4>
     <task v-for="item in data_m" :info="item" :key="item.id"></task>
    </div>
    <div v-if="size=='small'">
     <h4 style="margin-left:15px;">自定义模板</h4>
      <task v-for="item in data_h" :info="item" :key="item.id"></task>
      <div class="clearfloat"></div>
    </div>
    </div>
     <a-layout-footer style="textAlign: center">Assessment Systems ©2019 Created by HCI</a-layout-footer>
  </div>
  
</template>
<script>
import task from "../components/task.vue";
import task_m from "../data/template.js";
import task_h from "../data/history.js";

export default {
  components: { task },
  computed: {
    list() {
      return this.$store.state.taskList;
    },
    
  },
  data() {
    return {
      size: "large",
      data_m:task_m,
      data_h:task_h
    };
  },
  methods: {
    
    handleSizeChange(e) {
      this.size = e.target.value;
    },
    onSearch() {
      
    }
  },

  mounted() {
    this.$store.dispatch("gettaskList");
    //this.$store.commit("settaskList",task_data);
  }
};
</script>
<style scoped>
.list-control {
  background: #fff;
  width: 90%;
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 16px;
  height: 60px;
  display: flex;
  flex-direction: row;
}
.list-control-info{
    display: inline-block;
    align-self: center;
    margin-right: 10px;
}
.list-control-finish{
    margin-right: 50px;
}
.list-control-new {
    width: 150px;
    margin-left: 750px;
}

.list_set {
  height:auto!important;
  min-height:500px;
  background: #fff;
  margin: 0 auto;
  margin-bottom: 20px;
  padding: 16px 40px 0px 40px;
  width: 90%;
}
.clearfloat{
  clear:both;height:0;font-size:1px;line-height:0px;
} 
</style>