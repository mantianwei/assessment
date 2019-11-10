import Vue from "vue";
import VueRouter from "vue-router";
import Routers from "./router/router";
import Vuex from "vuex";
import App from "./app.vue";
import "./style.css";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
import task_data from "./data/task";
import echarts from 'echarts';

Vue.config.taskionTip = false;
Vue.use(VueRouter);
Vue.use(Vuex);
Vue.use(Antd);
Vue.use(echarts);





// 路由配置
const RouterConfig = {
  // 使用 HTML5 的 History 路由模式
  mode: "history",
  routes: Routers
};
const router = new VueRouter(RouterConfig);

router.beforeEach((to, from, next) => {
  window.document.title = to.meta.title;
  next();
});

router.afterEach((to, from, next) => {
  window.scrollTo(0, 0);
});

// 数组排重
function getFilterArray(array) {
  const res = [];
  const json = {};
  for (let i = 0; i < array.length; i++) {
    const _self = array[i];
    if (!json[_self]) {
      res.push(_self);
      json[_self] = 1;
    }
  }
  return res;
}

const store = new Vuex.Store({
  state: {
    taskList: [],
    cartList: []
  },
  getters: {
    finishs: state => {
      const finishs = state.taskList.map(item => item.finish);
      return getFilterArray(finishs);
    }
  },
  mutations: {
    // 添加商品列表
    settaskList(state, data) {
      state.taskList = data;
    },
    // // 添加到购物车
    // addCart(state, id) {
    //   // 先判断购物车是否已有，如果有，数量+1
    //   const isAdded = state.cartList.find(item => item.id === id);
    //   if (isAdded) {
    //     isAdded.count++;
    //   } else {
    //     state.cartList.push({
    //       id: id,
    //       count: 1
    //     });
    //   }
    // },
    // // 修改商品数量
    // editCartCount(state, payload) {
    //   const task = state.cartList.find(item => item.id === payload.id);
    //   task.count += payload.count;
    // },
    // // 删除商品
    // deleteCart(state, id) {
    //   const index = state.cartList.findIndex(item => item.id === id);
    //   state.cartList.splice(index, 1);
    // },
    // // 清空购物车
    // emptyCart(state) {
    //   state.cartList = [];
    // }
  },
  actions: {
    // 请求商品列表
    gettaskList(context) {
      // 真实环境通过 ajax 获取，这里用异步模拟
      setTimeout(() => {
        context.commit("settaskList", task_data);
      }, 500);
    },
    // // 购买
    // buy(context) {
    //   // 真实环境应通过 ajax 提交购买请求后再清空购物列表
    //   return new Promise(resolve => {
    //     setTimeout(() => {
    //       context.commit("emptyCart");
    //       resolve();
    //     }, 500);
    //   });
    // }
  }
});

new Vue({
  el: "#app",
  router: router,
  store: store,
  render: h => {
    return h(App);
  }
});
