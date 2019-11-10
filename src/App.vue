<template>
  <div>
    <div v-if="showMenu" class="header">
      <router-link to="/index" class="header-title">
        <a-icon type="desktop" style="color: rgb(7, 164, 255);font-size: 25px;" />&nbsp;&nbsp;&nbsp;&nbsp;
        <span style="color:rgb(255,255,255);">人机工效评估系统</span>
      </router-link>
      <div class="header-menu">
        <router-link to="*" class="header-menu-left">
          <a-icon type="bell" style="color:rgb(255, 255, 255)" fontSize="40" />
        </router-link>
        <router-link to="*" style="color:rgb(255, 255, 255)" class="header-menu-left">
          <a-icon type="setting" fontSize="40" />
        </router-link>
        <router-link to="*" class="header-menu-left">
          <a-avatar :size="30" icon="user" src="./static/8.jpeg" style="color:rgb(255, 255, 255)" />
        </router-link>
        <span style="color:rgb(255,255,255);">管理员1</span>
      </div>
      <div>
        <a-menu :defaultSelectedKeys="['index']" v-model="selectedKeys" mode="horizontal" theme="dark"  style="padding-top:12px">
          <a-menu-item key="/index">
            <router-link to="/index">首页</router-link>
          </a-menu-item>
          <a-sub-menu>
            <span slot="title" class="submenu-title-wrapper">评估管理</span>
            <a-menu-item  key="/listpage">
              <router-link to="/listpage">方案管理</router-link>
            </a-menu-item>
            <a-menu-item key="/list">
              <router-link to="/list">模板管理</router-link>
            </a-menu-item>
          </a-sub-menu>
          <a-sub-menu>
            <span slot="title" class="submenu-title-wrapper">参数管理</span>
            <a-menu-item  key="/hardware">
              <router-link to="/hardware">人机参数</router-link>
            </a-menu-item>
            <a-menu-item key="/evaluate">
              <router-link to="/evaluate">参数检验</router-link>
            </a-menu-item>
          </a-sub-menu>
          <a-menu-item key="/room">
            <router-link to="/room">指标库与方法库</router-link>
          </a-menu-item>
        </a-menu>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  data(){
    return{
      showMenu:false,
      selectedKeys: []
    }
  },
  computed: {},
  watch:{
      '$route':function(to,from){
          this.selectedKeys=[to.path]
          console.log()
      }
  }
  }
</script>
<style>
.header :global(.ant-menu.ant-menu-dark .ant-menu-item-selected){
  background-color: #001529
}
</style>