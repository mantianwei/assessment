<template>
  <div>
    <div class="list-control ant-list-bordered">
      <span class="list-control-info">完成度：</span>
      <div class="list-control-finish">
        <a-radio-group :value="size" @change="handleSizeChange">
          <a-radio-button value="large" name="进行中">全部</a-radio-button>
          <a-radio-button value="default" name="进行中">进行中</a-radio-button>
          <a-radio-button value="small" name="已完成">已完成</a-radio-button>
        </a-radio-group>
      </div>
      <div>
        <a-input-search placeholder="请输入评估关键字" style="width: 250px" @search="onSearch" />
      </div>
      <div style="margin-left: auto;">
        <router-link to="/new" class="list-control-new">
          <a-button type="primary" ghost style="width:150px">+新建评估</a-button>
        </router-link>
      </div>
    </div>


    <a-list
      class="listpage"
      :bordered="true"
      :pagination="paginationProps"
      :loading="loading"
      itemLayout="horizontal"
      :dataSource="data"
    > 
   
      <a-list-item slot="renderItem" slot-scope="item, index">
        <a slot="actions">编辑</a>
        <a slot="actions">查看</a>
     
        <a-list-item-meta :description="item.describe">
          <a slot="title">{{item.name}}</a>
          <a-avatar slot="avatar" shape="square" :src="item.image" style="width:50px;height:50px" />
        </a-list-item-meta>

        <span class="ant-list-item-meta-description" style="width:50px;margin-right:30px">
          发起者
          <br />
          {{ item.name }}
        </span>
        <span class="ant-list-item-meta-description" style="width:150px;margin-right:30px">
          开始时间
          <br />
          {{ item.time }}
        </span>
        <a-progress
          :percent="item.progress"
          status="active"
          style="display:inline-block;width:200px;align-self:center;"
        />
      </a-list-item>
     

      <br/>
    </a-list>

    <a-layout-footer style="textAlign: center">Assessment Systems ©2019 Created by HCI</a-layout-footer>
  </div>
</template>
<script>
//import reqwest from 'reqwest'

export default {
  data() {
    return {
      loading: false,
      loadingMore: false,
      showLoadingMore: true,
      size: "large"
    };
  },
  computed: {
    list() {
      return this.$store.state.taskList;
    },
    paginationProps() {
      let pag = {
        showSizeChanger: true,
        showQuickJumper: true,
        pageSize: 6,
        total: this.data.length
      };
      return pag;
    },
    data() {
      let list = [...this.list];
      if (this.size == "default") {
        list = list.filter(item => item.finish == "进行中");
      } else if (this.size == "small") {
        list = list.filter(item => item.finish == "已完成");
      }
      return list;
    }
  },
  mounted() {
    this.$store.dispatch("gettaskList");
    // this.getData((res) => {
    //   this.loading = false
    //   this.data = res.results
    // })
  },
  methods: {
    // getData  (callback) {
    //   reqwest({
    //     url: fakeDataUrl,
    //     type: 'json',
    //     method: 'get',
    //     contentType: 'application/json',
    //     success: (res) => {
    //       callback(res)
    //     },
    //   })
    // }
    handleSizeChange(e) {
      this.size = e.target.value;
    },
    onSearch() {

    }

  }
};
</script>
<style>
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
  display: inline-block;
  align-self: center;
  margin-right: 10px;
}
.list-control-finish {
  margin-right: 50px;
}
.list-control-new {
  width: 150px;
  margin-left: 450px;
}

.listpage {
  min-height: 500px;
  background: #fff;
  margin: 0 auto;
  margin-bottom: 20px;
  padding: 16px 40px 0px 40px;
  width: 90%;
}
.Content {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
</style>
