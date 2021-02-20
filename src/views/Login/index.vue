<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: DCW
 * @Date: 2021-02-02 16:59:04
 * @LastEditors: DCW
 * @LastEditTime: 2021-02-20 17:10:09
-->
<template>
  <div class="login-container">
    <div class="login-block" v-show="loginShow">
      <div class="login-bg"></div>
      <div class="login-rt">
        <div class="login-form">
          <p class="login-title">用户登录</p>
          <div style="margin-bottom:20px;">
            <div class="icon"></div>
            <el-input placeholder="请输入手机号" v-model="form.username">
            </el-input>
          </div>

          <div style="margin-bottom:25px;">
            <div class="icon" style="background-position: -80px 0;"></div>
            <el-input placeholder="请输入密码" v-model="form.password">
            </el-input>
          </div>
          <el-button
            type="primary"
            style="width:100%;margin-bottom:20px;"
            @click="onSubmit"
            >登录</el-button
          >
          <el-button
            type="primary"
            style="width:100%;margin-left:0;"
            @click="loginShow = false"
            >注册</el-button
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { login, getUserInfo } from "@/api/login";
export default {
  data() {
    return {
      form: {
        username: "",
        password: "",
      },
      loginShow: true,
    };
  },
  methods: {
    onSubmit() {
      //   if (this.form.username == "") {
      //     this.warn("请输入手机号！");
      //     return;
      //   }
      //   if (!/^[1][3,4,5,7,8,9][0-9]{9}$/.test(this.form.username)) {
      //     this.warn("手机号格式错误！");
      //     return;
      //   }
      //   if (this.form.password == "") {
      //     this.warn("请输入密码！");
      //     return;
      //   }
      //   if (this.form.password.length < 6 || this.form.password.length > 18) {
      //     this.warn("请输入6-18位密码！");
      //     return;
      //   }
      login(this.form.username, this.form.password).then((res) => {
        const resp = res.data;
        if (resp.flag) {
          this.success(resp.message);
          window.localStorage.setItem("token", JSON.stringify(resp.data.token));

          getUserInfo(resp.data.token).then((res_info) => {
            if (res_info.data.flag) {
              this.success(res_info.data.message);
              window.localStorage.setItem(
                "userinfo",
                JSON.stringify(res_info.data.data)
              );
              this.$router.push("/");
            } else {
              this.warn(res_info.data.message);
            }
          });
        } else {
          this.warn(resp.message);
        }
      });
    },
  },
};
</script>

<style scoped lang="scss">
.login-container {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background: url("../../assets/bg.jpg") center center no-repeat;
  .login-block {
    height: 468px;
    width: 990px;
    margin-top: -234px;
    left: 50%;
    margin-left: -495px;
    background: #fff url("../../assets/r-bg.jpg") bottom right no-repeat;
    text-align: center;
    position: absolute;
    top: 50%;
    box-shadow: 0px 3px 10px rgb(0 0 0 / 10%);
    .login-bg {
      width: 445px;
      height: 424px;
      margin: 22px 0;
      background: url("../../assets/home/login-bg.jpg") no-repeat center;
      border-right: 1px solid #cfcfcf;
      float: left;
    }
    .login-rt {
      width: 542px;
      margin: 10px auto;
      float: left;
      .login-form {
        width: 280px;
        /* 上下间隙 160px, 左右自动居中 */
        background-color: rgb(255, 255, 255, 0.8);
        margin: 0 auto;
        .login-title {
          padding-top: 38px;
          font-size: 20px;
          line-height: 20px;
          margin-bottom: 28px;
          color: #4ca4ff;
          font-weight: bolder;
        }
        .icon {
          float: left;
          display: block;
          width: 40px;
          height: 40px;
          background: url("../../assets/i-register.png") no-repeat;
        }
        ::v-deep .el-input {
          width: calc(100% - 40px);
          .el-input__inner {
            border-radius: 0;
          }
        }
      }
    }
  }
}
</style>
