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
    <a-layout-content>
      <div class="list-control ant-list-bordered">
        <h2 style="margin-left: 20px">参数评估</h2>
        <router-link to="/evaluate" style="margin-left:auto">
      <a-button type="primary" ghost style="width:150px">返回</a-button>
     </router-link>
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
          <div style="padding-bottom:20px;">
            <div style="align-items: baseline;">
            <h3 style="margin-top:18px">评估结果</h3>
            </div>
            <a-divider />
            <h3 style="margin-top:18px">工作椅——视域 联动评估</h3>
            <div class="way-image">
                <img src="/static/7.jpg" />
              </div>
            <h4 style="margin-top:28px">结论</h4>
            <p style="margin-bottom:40px">在对工作椅和视域进行联动评估后得出，7、水平视线距离显示器的距离为XXcm，超出最大范围XXcm，可将XX调整至距离显示器XXcm</p>

            <div style="align-items: baseline;">
            <h3 style="margin-top:18px">显示设备</h3>
            </div>
            <a-divider />
            <a-table :columns="columns" :dataSource="ware" bordered :pagination="false"></a-table>
            <h4 style="margin-top:28px">结论</h4>
            <p style="margin-bottom:40px">在对XXX的评估中得出，XXX的指标，超出最大范围XXcm，可将XX调整至距离XXcm</p>

          </div>
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
const columns = [
  {
    title: "显示器布局",
    dataIndex: "min"
  },
  {
    title: "控制器关系",
    dataIndex: "opt"
  },
  {
    title: "显示与亮度",
    dataIndex: "max"
  },
  {
    title: "照明环境下",
    dataIndex: "norm"
  },
  {
    title: "标示、编码",
    dataIndex: "level"
  },
  {
    title: "字符清晰度",
    dataIndex: "clear"
  }
];
const ware=[{
            min: "360mm",
            opt: "360mm",
            max: "100cd",
            norm: "100cd",
            level: "1080px",
            clear:"1440px"
          }]
export default {
  data() {
    return {
      expandedKeys: ["0", "1", "2"],
      autoExpandParent: true,
      checkedKeys: ["0", "2"],
      selectedKeys: [],
      treeData,
      columns,
      ware
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
  },
  mounted() {
    //this.gettask();
  }
};
</script>