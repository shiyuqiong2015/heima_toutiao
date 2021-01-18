<template>
  <div class="login">
    <div class="login_header"></div>
    <div class="login_main">
      <div class="iconfont iconwode close_btn"></div>
      <div class="iconfont iconnew logo_txt"></div>
      <div class="input_box">
        <myinput
          placeholder="用户名 / 手机号码"
          @input="get_input"
          :rules="/^[A-Za-z_@.]{5,10}$|^1[3,5,7,8,9,]\d{9}$|^1\d{4}$/"
        ></myinput>
        <myinput
          class="pwd_ipt"
          placeholder="密码"
          v-model="userpassword"
          :rules="/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/"
        ></myinput>
      </div>
      <div class="btn">
        <mybutton
          @click="login"
          type="danger"
        >登录</mybutton>
      </div>

    </div>
    <div class="login_footer"></div>
  </div>
</template>

<script>
import mybutton from "@/components/mybutton.vue";
import myinput from "@/components/myinput.vue";
export default {
  data() {
    return {
      username: "",
      userpassword: "",
    };
  },
  components: {
    mybutton,
    myinput,
  },
  methods: {
    login(e) {
      // console.log(e);
      // console.log("按钮被点击啦");
      console.log(this.username, this.userpassword);
    },
    get_input(v) {
      // console.log(v);
      this.username = v;
    },
  },
};
</script>

<style lang="less" scoped>
.login {
  width: 100vw;
  height: 100vh;
  background-color: #f2f2f2;
  // .login_header {
  //   background-color: #757575;
  //   height: 20px;
  // }
  .login_main {
    padding: 20px;
    .close_btn {
      // margin: 10px;
      font-size: 30px;
    }
    .logo_txt {
      text-align: center;
      font-size: 120px;
      color: #d81e06;
    }
  }
  // .footer {
  //   background-color: #000;
  //   height: 40px;
  // }
  .pwd_ipt {
    margin-top: 10px;
  }
  .btn {
    margin-top: 30px;
  }
}
</style>
