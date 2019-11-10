<template>
  <div class="task">
    <template>
      <a-card hoverable class="task-main">
        <router-link :to="'/task/' + info.id">
          <div>
            <img :src="info.image" slot="cover">
          </div>
          <h3>{{ info.project }}</h3>
          <!-- <h5>{{ info.describe }}</h5>
          <h5>发起者：{{ info.name }}</h5>
          <h5>开始时间：{{ info.time }}</h5> -->
        </router-link>
        <!-- <a-progress :percent="info.progress" status="active"/> -->
        <template slot="actions">
          <a-icon type="edit"/>
          <div>
            <a-dropdown>
              <a class="ant-dropdown-link" href="#">&nbsp;&nbsp;
                <a-icon type="ellipsis"/>&nbsp;&nbsp;
              </a>
              <a-menu slot="overlay">
                <a-menu-item>
                  <a href="javascript:;">&nbsp;&nbsp;录入数据&nbsp;&nbsp;</a>
                </a-menu-item>
                <a-menu-item>
                  <a href="javascript:;">&nbsp;&nbsp;分析数据&nbsp;&nbsp;</a>
                </a-menu-item>
                <a-menu-item>
                  <a href="javascript:;">&nbsp;&nbsp;复制评估&nbsp;&nbsp;</a>
                </a-menu-item>
                <a-menu-item>
                  <a href="javascript:;">&nbsp;&nbsp;删除评估&nbsp;&nbsp;</a>
                </a-menu-item>
                <a-menu-item>
                  <a href="javascript:;">&nbsp;&nbsp;生成评估&nbsp;&nbsp;</a>
                </a-menu-item>
              </a-menu>
            </a-dropdown>
          </div>
        </template>
      </a-card>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    info: Object
  },
  data() {
    return {};
  },
  methods: {}
};
</script>
<style scoped>
.task {
  width: 25%;
  float: left;
}
.task-main {
  display: block;
  margin: 16px;
  background: rgb(255, 255, 255);
}
.task-main img {
  width: 100%;
}
h3 {
  color: #222;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding-top: 10px;
}
.task-main:hover h3 {
  color: #0070c9;
}
</style>