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
</style>

<template>
  <a-layout>
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
          <a-menu
            mode="inline"
            :defaultOpenKeys="['chair','equip','screen']"
            :defaultSelectedKeys="['chair1']"
            :inlineCollapsed="true"
            @click="change"
            style="height: 100%;background-color:#fbfbfb;"
          >
            <a-sub-menu key="chair">
              <span slot="title">
                <span>工作椅</span>
              </span>
              <a-menu-item key="chair1">作业椅面高度</a-menu-item>
              <a-menu-item key="chair2">座面倾角</a-menu-item>
              <a-menu-item key="chair3">座深</a-menu-item>
              <a-menu-item key="chair4">座宽</a-menu-item>
              <a-menu-item key="chair5">座椅与工作台间距</a-menu-item>
              <a-menu-item key="chair6">背靠倾角</a-menu-item>
            </a-sub-menu>
            <a-sub-menu key="equip">
              <span slot="title">
                <span>显示设备</span>
              </span>
              <a-menu-item key="equip1">显示器布局</a-menu-item>
              <a-menu-item key="equip2">控制器关系</a-menu-item>
              <a-menu-item key="equip3">显示与亮度</a-menu-item>
              <a-menu-item key="equip4">照明环境下</a-menu-item>
              <a-menu-item key="equip5">标示、编码</a-menu-item>
              <a-menu-item key="equip6">字符清晰度</a-menu-item>
            </a-sub-menu>
            <a-sub-menu key="screen">
              <span slot="title">
                <span>视域</span>
              </span>
              <a-menu-item key="screen1">与显示器距离</a-menu-item>
              <a-menu-item key="screen2">与显示器视线倾角</a-menu-item>
            </a-sub-menu>
          </a-menu>
        </a-layout-sider>
        <a-layout-content :style="{ padding: '0 24px', minHeight: '280px' }">
          <div v-if="hardware!==null">
            <h3 style="margin-top:18px">{{hardware[0].type}}</h3>
            <a-divider />
            <div class="way-image">
                <img :src="hardware[0].src" />
              </div>
            <div v-for="(item,index) in hardware" :key="item.name" :id="item.key">
              <h4 :class="{'highlight':isActive[index]}">{{item.name}}</h4>
              <a-table :columns="columns" :dataSource="ware[index]" bordered :pagination="false"></a-table>
              <br />
            </div>
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
const columns = [
  {
    title: "最小值",
    dataIndex: "min"
  },
  {
    title: "最佳值",
    dataIndex: "opt"
  },
  {
    title: "最大值",
    dataIndex: "max"
  },
  {
    title: "指标来源",
    dataIndex: "norm"
  },
  {
    title: "重要程度（1-5）",
    dataIndex: "level"
  }
];
export default {
  data() {
    return {
      hardware: null,
      isActive: null,
      columns
    };
  },
  computed: {
    ware() {
      var data_set = [];
      for (var i = 0; i < this.hardware.length; i++) {
        var hardware_Data = [
          {
            min: this.hardware[i].min,
            opt: this.hardware[i].opt,
            max: this.hardware[i].max,
            norm: this.hardware[i].norm,
            level: this.hardware[i].level
          }
        ];
        data_set.push(hardware_Data);
      }
      console.log(this.hardware);
      return data_set;
    }
  },
  methods: {
    search() {},
    onSearch(e) {
      var target = hardware_data.find(item => item.name == e);
      this.hardware = hardware_data.filter(item => item.type == target.type);
      var active_set = [];
      for (var i = 0; i < this.hardware.length; i++) {
        if (this.hardware[i].name == e) {
          active_set.push(1);
        } else {
          active_set.push(0);
        }
      }
      this.isActive = active_set;
      console.log(target)
      var targrt_dom=document.getElementById(target.key)
      targrt_dom.scrollIntoView({ block: "start", behavior: "smooth" });
    },
    callback() {},
    change(res) {
      var target = hardware_data.find(item => item.key === res.key);
      this.hardware = hardware_data.filter(item => item.type === target.type);
      var active_set = [];
      for (var i = 0; i < this.hardware.length; i++) {
        if (this.hardware[i].key == res.key) {
          active_set.push(1);
        } else {
          active_set.push(0);
        }
      }
      this.isActive = active_set;
      console.log(target)
      console.log(active_set)
      document.getElementById(res.key).scrollIntoView({ block: "start", behavior: "smooth" });
    },

    gettask() {
      // 真实环境通过 ajax 获取，这里用异步模拟
      setTimeout(() => {
        var target = hardware_data.filter(item => item.type === "工作椅");
        this.hardware = target;
        var active_set = [];
        for (var i = 0; i < this.hardware.length; i++) {
          if (i==0) {
            active_set.push(1);
          } else {
            active_set.push(0);
          }
        }
        this.isActive = active_set;
      }, 50);
    }
  },
  mounted() {
    this.gettask();
  }
};
</script>
