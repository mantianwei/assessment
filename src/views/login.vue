<template>
  <div class="login">
    <div class="login_info">
      <h1 style="font-size:60px;color: #0b5479;">人机工效评估系统</h1>
      <a-divider style="height: 10px;background-color: #0b5479;margin-bottom:0" />
      <a-divider style="height: 3px;background-color: #0b5479;" />
    </div>
    <div class="login-area">
      <h2 style="color:rgb(0,0,0,0.8) ;margin: 15px 0px 0px 40px;">登录</h2>
      <a-divider />
      <a-form
        id="components-form-demo-normal-login"
        :form="form"
        class="login-form"
        @submit="handleSubmit"
      >
        <a-form-item label="用户名" :label-col="{ span: 5 }" :wrapper-col="{ span: 16 } " style="margin-bottom:30px">
          <a-input
            v-decorator="[
          '用户名',
          { rules: [{ required: true, message: '请输入用户名' }] },
        ]"
            placeholder="请输入用户名"
          >
          </a-input>
        </a-form-item>
        <a-form-item label="密码" :label-col="{ span: 5 }" :wrapper-col="{ span: 16 }">
          <a-input
            v-decorator="[
          '密码',
          { rules: [{ required: true, message: '请输入密码' }] },
        ]"
            type="password"
            placeholder="请输入密码"
          >
          </a-input>
        </a-form-item>
        <a-form-item>
          <a-checkbox style="margin-left:43px"
            v-decorator="[
          '记住账号密码',
          {
            valuePropName: 'checked',
            initialValue: true,
          },
        ]"
          >记住账号密码</a-checkbox>
          <a class="login-form-forgot" href style="padding-right:60px;font-size:16px;">忘记密码</a>
          <p style="color:rgba(0,0,0,0.45);font-size:16px;margin-left:43px" :class="{'info':showInfo}">{{info}}</p>
          <a-button type="primary" html-type="submit" class="login-form-button" style="margin-top:30px">登录</a-button>
          <a-button type="primary" ghost html-type="submit" class="login-form-button">注册</a-button>
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
        showInfo:0,
        info:"初始密码为123456"
    };
  },
  computed: {},
  watch: {
    $route: function(to, from) {
      this.selectedKeys = [to.path];
      console.log();
    }
  },
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: 'normal_login' });
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      console.log(e)
      this.form.validateFields((err, values) => {
        if (!err) {
            console.log(values["用户名"])
          if(values["用户名"]=="admin" && values["密码"]=="123456"){
              this.showInfo=0
              this.info="登陆成功！"
               this.$router.push({  
        path:'/index',   //跳转的路径
      })
          }else{
              this.showInfo=1
              this.info="账号或密码错误！"
          }
        }
      });
    },
  },
};
</script>
<style>
.login {
  background: url("/static/10.png");
  background-size: 100% 100%;
  height: 100%;
  position: fixed;
  width: 100%;
  display: flex;
  flex-direction: row;
}
.login_info {
  width: 480px;
  margin-left: 10%;
  margin-top: 18%;
}
.login-area {
  width: 450px;
  height: 500px;
  margin-top: 10%;
  margin-left: 14.5%;
  background-color: rgba(255, 255, 255, 0.45);
}
.login :global(.ant-divider-horizontal) {
  margin: 10px 0 50px 0;
}
.login :global(.ant-input) {
  height: 40px;
  font-size: 16px;
}
.login :global(.ant-form label) {
  font-size: 16px;
}
.login :global(.ant-form-item-required:before) {
  content: ""
}
.info{
    color:#d0021d!important;
}
#components-form-demo-normal-login .login-form {
  max-width: 300px;
}
#components-form-demo-normal-login .login-form-forgot {
  float: right;
}
#components-form-demo-normal-login .login-form-button {
  width: 60%;
  margin-left:60px;
  height:40px;
  margin:10px 0px 10px 85px;
  font-size: 16px;
}
</style>