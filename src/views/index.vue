<style scoped>
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
.sider {
  margin-top: 10px;
  margin-bottom: 10px;
}
.sider-top{
    text-align: center;
    padding: 20px;
}
.sider-content{
    padding-left: 40px;
    padding-bottom: 90px;
}
.sider-bottom{
display: flex;
  flex-direction: row;
  justify-content: center;
}
.content-row{
    display: flex;
  flex-direction: row;
  justify-content: center;
  padding:24px;
  
}
.inter-card{
    background-color: #fff;
    width:50%;
    height: 300px;
      justify-content: center;
}
.content-info{
    padding-left: 170px;
}
h4{
    color: rgba(0, 0, 0, 0.35)
}
</style>

<template>
  <a-layout>
    <a-layout-content>
      <a-layout style="background: #f0f2f5;width:100%;height:1000px">
        <a-layout-sider width="300" style="background: #001529;overflow:hidden">
        <div class="sider-top">
          <router-link to="*" class="header-menu-left">
          <a-avatar :size="80" icon="user" src="./static/8.jpeg" style="color:rgb(255, 255, 255);" />
        </router-link>
          <h3 style="color:#fff;padding-top:20px">管理员1</h3>
          <a-divider style="width:80%;margin-left:auto;margin-right:auto;" />
        </div>
        <div class="sider-content">
            <h4 style="color:#fff;padding-bottom:10px">我的评估任务(10个)</h4>
            <a v-for="i in 10" :key="i" style="font-size:14px;color:rgba(255,255,255,0.65);display:block;padding-bottom:10px">正在进行的评估{{i}}</a>
            <router-link to="/listpage">
            <a style="font-size:14px;color:#1890ff;">更多</a>
            </router-link>
        </div>
        <div class="sider-bottom">
            <router-link to="*" style="padding-right:25px">
            <h3 style="color:#1890ff;">修改密码</h3>
            </router-link>
            <h3 style="color:#1890ff;padding-right:25px">|</h3>
            <router-link to="*">
            <h3 style="color:#1890ff;">退出登陆</h3>
            </router-link>
        </div>
        </a-layout-sider>

        <a-layout-content style="padding-top:30px">
            <div class="content-row">
                <router-link to="/listpage" class="inter-card" style="margin-right:30px">
                    <h1 style="text-align: center;padding-top: 40px;">进入我的评估</h1>
                    <a-divider style="width:50%;height:8px;background-color:rgba(24,144,255,0.35);margin-left:auto;margin-right:auto" />
                    <div class="content-info">
                    <h4>你可以：</h4>
                    <h4>•新建系统评估任务</h4><h4>•录入评估任务的数据</h4><h4>•查看评估任务的结论</h4><h4>•管理历史评估任务</h4>
                    </div>
                </router-link>
                <router-link to="/evaluate" class="inter-card">
                    <h1 style="text-align: center;padding-top: 40px;">开始参数检验</h1>
                    <a-divider style="width:50%;height:8px;background-color:rgba(24,144,255,0.35);margin-left:auto;margin-right:auto" />
                    <div class="content-info">
                    <h4>你可以：</h4>
                    <h4>•查看硬件参数基准库</h4><h4>•录入硬件参数并检验</h4>
                    </div>
                </router-link>
            </div>
            <div class="content-row">
                <router-link to="/list" class="inter-card" style="margin-right:30px">
                    <h1 style="text-align: center;padding-top: 40px;">管理评估模版</h1>
                    <a-divider style="width:50%;height:8px;background-color:rgba(24,144,255,0.35);margin-left:auto;margin-right:auto" />
                    <div class="content-info">
                    <h4>你可以：</h4>
                    <h4>•新建评估任务的模版</h4><h4>•管理已有评估任务的模版</h4><h4>•从评估模版新建评估任务</h4>
                    </div>
                </router-link>
                <router-link to="/room" class="inter-card">
                    <h1 style="text-align: center;padding-top: 40px;">查看数据库</h1>
                    <a-divider style="width:50%;height:8px;background-color:rgba(24,144,255,0.35);margin-left:auto;margin-right:auto" />
                    <div class="content-info">
                    <h4>你可以：</h4>
                    <h4>•查看评估的指标库</h4><h4>•查看评估的方法库</h4><h4>•从对应指标新建评估任务</h4><h4>•从对应方法新建评估任务</h4>
                    </div>
                </router-link>
            </div>
        </a-layout-content>
      </a-layout>
    </a-layout-content>
    <a-layout-footer style="textAlign: center">Assessment Systems ©2019 Created by HCI</a-layout-footer>
  </a-layout>
</template>
<script>

export default {
  data() {
    return {
      
    };
  },
  computed: {

  },
  methods: {
    
  },
    created(){
      this.$parent.showMenu=true
  },
  mounted() {
    
  },

};
</script>