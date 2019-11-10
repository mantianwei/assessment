<style scoped>
.ant-menu-item-selected {
  background-color: #3487ec !important;
  color: aliceblue;
}
.ant-menu-item {
  margin: 0 !important;
  padding-left: 40px !important;
}
.ant-tabs-bar {
  margin: 0 !important;
  padding-left: 20px !important;
}
.ant-tabs-nav-scroll {
  padding-left: 20px !important;
}
.way-image {
  text-align: center;
}
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
.list-control-info {
  font-size: 20px;
  display: inline-block;
  align-self: center;
  margin-left: 20px;
}
.sider {
  margin-top: 10px;
  margin-bottom: 10px;
}
.highlight {
  font-size: 18px;
  color: #1890ff;
}
p {
  line-height: 30px !important;
}
.hardware :global(.ant-tree li) {
  padding: 6px 0;
}
.hardware :global(.ant-card-head-title) {
  font-size: 14px;
  font-weight: 350;
  text-align: center;
  overflow:initial;
}
.hardware :global(.ant-list-bordered .ant-list-item) {
    padding-left: 5px;
    padding-right: 5px;
}

</style>
<template>
  <a-layout class="hardware">
    <a-modal title="添加工作椅联动项" v-model="visible" @ok="handleOk">
      <a-tree
            checkable
            :treeData=model_data
          />
    </a-modal>
    <a-layout-content>
      <div class="list-control ant-list-bordered">
        <h2 style="margin-left: 20px">人机参数</h2>
        <div style="margin-left: auto;">
          <a-input-search placeholder="请输入评估关键字" style="width: 250px;" @search="onSearch" />
        </div>
      </div>
      <a-layout class="ant-list-bordered" style="background: #fff;width:90%;margin: 0 auto;">
        <a-layout-sider width="250" style="background: #fff;overflow:hidden">
          <h3 style="padding-left:20px;padding-top:20px">硬件评估指标库</h3>
          <a-divider style="margin-bottom:0" />
          <p style="padding-left:20px;">类别</p>
          <a-divider style="margin-top:0;margin-bottom: 0;" />
          <a-tree
            checkable
            @expand="onExpand"
            :expandedKeys="expandedKeys"
            :autoExpandParent="autoExpandParent"
            v-model="checkedKeys"
            @check="onCheck"
            :selectedKeys="selectedKeys"
            :treeData="treeData"
            style="height: 100%;background-color:#fbfbfb;"
          />
        </a-layout-sider>
        <a-layout-content :style="{ padding: '0 24px', minHeight: '600px' }">


          <div v-for="(i,index) in equip" :key="i">
              <div v-if="index==1" style="padding-bottom:20px;padding-left:10px;box-shadow: #dad6d6 0px 3px 3px 0px;">
            <div style="align-items: baseline;">
            <h3 style="margin-top:18px">工作椅——联动评估项</h3>
            <h3 style="margin-top:18px">{{i}}</h3>
            </div>
            <a-divider />
            <a-list
            :grid="{ gutter: 0, xs: 1, sm: 2, md: 4, lg: 4, xl: 6, xxl: 3 }"
            :dataSource="data[index]"
          >
            <a-list-item slot="renderItem" slot-scope="item">
              <a-card :title="item.title"><a-input :addonAfter="item.unit" defaultValue="0" /></a-card>
            </a-list-item>
          </a-list>
              </div>

              <div v-else style="padding-top:-20px;padding-left:10px;">
            <div style="display: flex;flex-direction: row;align-items: baseline;">
            <h3 style="margin-top:18px">{{i}}</h3>
            <a-button type="primary" ghost @click="showModal" style="width:100px;margin-right:30px;margin-left: auto;">添加联动项</a-button>
            </div>
            <a-divider />
            <a-list
            :grid="{ gutter: 0, xs: 1, sm: 2, md: 4, lg: 4, xl: 6, xxl: 3 }"
            :dataSource="data[index]"
          >
            <a-list-item slot="renderItem" slot-scope="item">
              <a-card :title="item.title"><a-input :addonAfter="item.unit" defaultValue="0" /></a-card>
            </a-list-item>
          </a-list>
              </div>

          </div>
          <a-row style="padding-top:30px;padding-bottom:50px">
            <a-col :span="24" :style="{ textAlign: 'center' }">
              <a-button type="primary" html-type="submit" @click="handleSubmit" style="width:150px">提交检查</a-button>
              <a-button :style="{ marginLeft: '18px' }" @click="handleReset" style="width:150px">清空数据</a-button>
            </a-col>
          </a-row>
        </a-layout-content>
      </a-layout>
    </a-layout-content>
    <a-layout-footer style="textAlign: center">Assessment Systems ©2019 Created by HCI</a-layout-footer>
  </a-layout>
</template>
<script>
import { constants } from "fs";
import { connect } from "tls";
import hardware_data from "../data/hardware.js";
const treeData = [
  {
    title: "工作椅",
    key: "0",
    children: [
      { title: "作业椅面高度", key: "0-0-0" },
      { title: "座面倾角", key: "0-0-1" },
      { title: "座深", key: "0-0-2" },
      { title: "座宽", key: "0-0-3" },
      { title: "座椅与工作台间距", key: "0-0-4" },
      { title: "背靠倾角", key: "0-0-5" }
    ]
  },
  {
    title: "显示设备",
    key: "1",
    children: [
      { title: "显示器布局", key: "0-1-0" },
      { title: "控制器关系", key: "0-1-1" },
      { title: "显示与亮度", key: "0-1-2" },
      { title: "照明环境下", key: "0-1-3" },
      { title: "标示、编码", key: "0-1-4" },
      { title: "字符清晰度", key: "0-1-5" }
    ]
  },
  {
    title: "视域",
    key: "2",
    children: [
      { title: "与显示器距离", key: "0-2-0" },
      { title: "与显示器视线倾角", key: "0-2-1" }
    ]
  }
];
const model_data=[{title: "显示设备",key: "01"},{title: "视域",key: "02"}]
const data = [[{title: '作业椅面高度',unit:"mm"},{title: '座面倾角',unit:" °"},{title: '座深',unit:"mm"},{title: '座宽',unit:"mm"},{title: '座台间距',unit:"mm"},{title: '背靠倾角',unit:" °"}],
[{title: '与显示器距离',unit:"mm"},{title: '视线倾角',unit:"mm"}],
[{title: '显示器布局',unit:"mm"},{title: '控制器关系',unit:"mm"},{title: '显示与亮度',unit:"cd"},{title: '照明环境下',unit:"cd"},{title: '标示、编码',unit:"px"},{title: '字符清晰度',unit:"px"}],
  ];
  
export default {
  data() {
    return {
      expandedKeys: ["0", "1", "2"],
      autoExpandParent: true,
      checkedKeys: ["0", "2"],
      selectedKeys: [],
      treeData,
      data,
      model_data,
      visible:false,
      equip: ["工作椅", "视域", "显示设备"]
    };
  },
  watch: {
    checkedKeys(val) {
      console.log("onCheck", val);
    }
  },
  computed: {},
  methods: {
    search() {},
    onSearch(e) {},
    callback() {},
    change(res) {},
    onExpand(expandedKeys) {
      this.expandedKeys = expandedKeys;
      this.autoExpandParent = false;
    },
    onCheck(checkedKeys,e) {
      console.log("onCheck", e.node);
      this.checkedKeys = checkedKeys;
      this.equip=["工作椅", "显示设备", "视域"]
      if(e.node.eventKey==0 && e.node.checked){
        this.equip= ["显示设备", "视域"]
      }
      if(e.node.eventKey==1 && e.node.checked){
        this.equip= ["工作椅", "视域"]
      }
      if(e.node.eventKey==2 && e.node.checked){
        this.equip= ["工作椅", "显示设备"]
      }
    },
    handleSearch(e) {
      e.preventDefault();
      this.form.validateFields((error, values) => {
        console.log("error", error);
        console.log("Received values of form: ", values);
      });
    },

    handleReset() {
      var input_set=document.getElementsByTagName("input")
      for (var i = 1; i < input_set.length; i++) {
        input_set[i].value="0"
      }
    },
     showModal() {
        this.visible = true;
      },
      handleOk(e) {
        this.visible = false;
      },
      handleSubmit(){
        this.$router.push({  
        path:'/result',   //跳转的路径
      })
      }
  },
  mounted() {
    //this.gettask();
  }
};
</script>