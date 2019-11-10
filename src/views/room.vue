<style scoped>
.ant-menu-item-selected {
  background-color: #3487ec !important;
  color: aliceblue;
}
.ant-menu-item {
  margin: 0 !important;
  padding-left: 40px !important;
}
.room :global(.ant-tabs-bar) {
  margin-bottom: 0;
}
.room :global(.ant-tabs-nav) {
  margin-top:5px;
}
.ant-tabs-extra-content{
  line-height: 60px;
}
.ant-tabs-nav-scroll {
  padding-left: 20px !important;
}
.way-image {
  text-align: center;
}
p {
  line-height: 30px !important;
}
</style>

<template>
  <a-layout class="room">
    <a-layout-content style="padding: 0 50px">
      <a-tabs
        defaultActiveKey="1"
        @change="callback"
        style="margin-top:16px;background-color:white"        
      >
        <a-tab-pane tab="指标库" key="1">
          <a-layout style="background: #fff">
            <a-layout-sider width="250" style="background: #fff">
              <a-menu
                mode="inline"
                :defaultSelectedKeys="['room1']"
                :defaultOpenKeys="['sub1','sub2','sub3']"
                :inlineCollapsed="true"
                @click="change"
                style="height: 100%"
              >
                <a-menu-item
                  key="0"
                  disabled
                  style="cursor:auto;color:rgba(39, 39, 39,0.8)!important;background-color:#eeeeef"
                >
                  <span>
                    <a-icon type="user" />软件人机界面
                  </span>
                </a-menu-item>
                <a-menu-item key="room1">易学性</a-menu-item>
                <a-menu-item key="room2">容错性</a-menu-item>
                <a-menu-item key="room3">易用性</a-menu-item>
                <a-menu-item
                  key="4"
                  disabled
                  style="cursor:auto;color:rgba(39, 39, 39,0.8)!important;background-color:#eeeeef"
                >
                  <span>
                    <a-icon type="user" />系统任务流程
                  </span>
                </a-menu-item>
                <a-menu-item key="5">有效性</a-menu-item>
                <a-menu-item key="6">效率</a-menu-item>
                <a-menu-item
                  key="7"
                  disabled
                  style="cursor:auto;color:rgba(39, 39, 39,0.8)!important;background-color:#eeeeef"
                >
                  <span>
                    <a-icon type="user" />硬件人机交互
                  </span>
                </a-menu-item>
                <a-menu-item key="8">视觉显示</a-menu-item>
                <a-menu-item key="9">结构布局</a-menu-item>
                <a-menu-item key="10">环境适应</a-menu-item>
                <a-menu-item
                  key="11"
                  disabled
                  style="cursor:auto;color:rgba(39, 39, 39,0.8)!important;background-color:#eeeeef"
                >
                  <span>
                    <a-icon type="user" />操作员
                  </span>
                </a-menu-item>
                <a-menu-item key="12">负荷</a-menu-item>
                <a-menu-item key="13">满意度</a-menu-item>
                <a-menu-item key="14">人机协同</a-menu-item>
                <a-menu-item key="15">基于不同席位典型任务的操作</a-menu-item>
              </a-menu>
            </a-layout-sider>
            <a-layout-content :style="{ padding: '0 24px', minHeight: '280px' }">
              <div v-if="room!==null">
              <h3 style="margin-top:18px">{{room.name}}</h3>
              <a-divider />
              <h4>定义</h4>
              <br />
              <p>
                <a>{{room.name}}</a>
                {{room.top_content}}
                <br />
                {{room.title_content}}
              </p>
              <br />
              <h4>度量方法</h4>
              <br />
              <a>启发式评估</a>
              <p>
                启发式评估法（Heuristic Evaluation）是一种用来评定软件可用性的方法。使用一套相对简单、通用、有启发性的可用性规则进行可用性评估。
                <br />启发式评估法具有以下特征:
                <br />1)交互专家以启发性规则为指导，评定用户界面元素是否符合原则
                <br />2)交互专家以角色扮演的方式，模拟典型用户使用产品的情形，从中找出潜在的问题
                <br />3)参与评估的交互专家数量不固定
                <br />4)成本相对较低，而且较为快捷，因此也称为“经济评估法”
                <br />5)精度不高
              </p>
              </div>
            </a-layout-content>
          </a-layout>
        </a-tab-pane>
        <a-tab-pane tab="方法库" key="2" forceRender>
          <a-layout style="background: #fff;min-height:600px">
            <a-layout-sider width="250" style="background: #fff">
              <a-menu
                mode="inline"
                :defaultSelectedKeys="['d1']"
                :defaultOpenKeys="['sub1','sub2','sub3']"
                :inlineCollapsed="true"
                @click="change_way"
                style="height: 100%"
              >
                <a-menu-item
                  key="d0"
                  disabled
                  style="cursor:auto;color:rgba(39, 39, 39,0.8)!important;background-color:#eeeeef"
                >
                  <span>
                    <a-icon type="user" />通用表
                  </span>
                </a-menu-item>
                <a-menu-item key="d1">知情协议</a-menu-item>
                <a-menu-item key="d2">保密协议</a-menu-item>
                <a-menu-item key="d3">观察者问卷</a-menu-item>
                <a-menu-item key="d4">个人信息收集</a-menu-item>
                <a-menu-item
                  key="d00"
                  disabled
                  style="cursor:auto;color:rgba(39, 39, 39,0.8)!important;background-color:#eeeeef"
                >
                  <span>
                    <a-icon type="user" />一级方法
                  </span>
                </a-menu-item>
                <a-menu-item key="d5">可用性测试（狭义）</a-menu-item>
                <a-menu-item key="d6">主观可用性量表</a-menu-item>
                <a-menu-item key="d7">专家走查</a-menu-item>
                <a-menu-item
                  key="d000"
                  disabled
                  style="cursor:auto;color:rgba(39, 39, 39,0.8)!important;background-color:#eeeeef"
                >
                  <span>
                    <a-icon type="user" />主观感知
                  </span>
                </a-menu-item>
                <a-menu-item key="d8">GOMS模型</a-menu-item>
                <a-menu-item key="d9">NASA-TLX自评</a-menu-item>
                <a-menu-item key="d10">Borg疲劳自评</a-menu-item>
                <a-menu-item key="d11">系统满意度量表</a-menu-item>
              </a-menu>
            </a-layout-sider>
            <a-layout-content :style="{ padding: '0 24px', minHeight: '280px' }">
              <div v-if="way!==null">
              <h3 style="margin-top:18px">{{way.name}}</h3>
              <a-divider />
              <h4>定义</h4>
              <p>
                <a>{{way.name}}</a>
                {{way.def_content}}
              </p>
              <h4>使用时机</h4>
              <p>{{way.time_content}}</p>
              <h4>对应指标</h4>
              <p>{{way.target}}</p>
              <h4>操作流程</h4>
              <p>{{way.time_content}}</p>
              <h4>表单预览</h4>
              <br/>
              <div class="way-image">
                <img :src="way.src" />
              </div>
              </div>
              <br/>
            </a-layout-content>
          </a-layout>
        </a-tab-pane>
         <a-button slot="tabBarExtraContent" type="primary" ghost style="width:150px;margin-right:30px;margin-top:10px">+新建评估</a-button>
      </a-tabs>
    </a-layout-content>
    <a-layout-footer style="textAlign: center">Assessment Systems ©2019 Created by HCI</a-layout-footer>
  </a-layout>
</template>
<script>
import { constants } from "fs";
import { connect } from "tls";
import room_data from "../data/room.js";
import way_data from "../data/way.js";
export default {
  computed: {},
  data() {
    return {
      room: null,
      way: null
    };
  },
  methods: {
    callback() {},
    change(res) {
      this.room = room_data.find(item => item.key === res.key);
    },
    change_way(res) {
      this.way = way_data.find(item => item.key === res.key);
      console.log(this.way);
    },
    gettask() {
      // 真实环境通过 ajax 获取，这里用异步模拟
      setTimeout(() => {
        this.room = room_data.find(item => item.key === "room1");
        this.way = way_data.find(item => item.key === "d1");
      }, 100);
    }
  },
  created() {
    this.gettask();
  }
};
</script>