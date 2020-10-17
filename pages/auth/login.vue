<style lang="less" scoped>
.main-body {
  width: 100%;
  height: 100vh;
  background: url("~assets/images/bg.jpg") no-repeat;
  background-size: cover;
}

.logo-box {
  position: absolute;
  top: 50px;
  left: 50%;
  margin-left: -70px;
  width: 140px;
  height: 37px;
}

.login-box {
  position: absolute;
  top: 150px;
  left: 50%;
  margin-left: -200px;
  z-index: 11;
  width: 400px;
  height: auto;
  padding: 30px 30px 20px 30px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 2px 20px 0 rgba(0, 0, 0, 0.05);

  .tabs {
    width: 100%;
    height: auto;
    float: left;
    border-bottom: 1px solid #eeeeee;
    margin-bottom: 45px;

    .tab-item {
      width: 64px;
      height: auto;
      float: left;
      color: rgb(153, 153, 153);
      line-height: 24px;
      font-weight: 500;
      margin-right: 30px;
      padding-bottom: 20px;
      margin-bottom: -1px;
      cursor: pointer;

      &.active,
      &:hover {
        color: #282828;
        border-bottom: 2px solid #282828;
      }
    }
  }

  .input-form-item {
    width: 100%;
    height: 42px;
    float: left;
    padding-left: 20px;
    padding-right: 20px;
    color: #666666;
    font-size: 14px;
    border: 1px solid #dddddd;
    background-color: #f4f4f4;
    border-radius: 4px;
    margin-bottom: 20px;

    &:focus {
      background-color: white;
      outline: none;
    }
  }

  .auth-button,
  .send-sms-button {
    width: 100%;
    height: 42px;
    float: left;
    margin-bottom: 20px;
    font-size: 16px;
    border: 1px solid #eeeeee;
    text-align: center;
    outline: none;
    background-color: #eeeeee;
    color: #bbbbbb;
    border-radius: 4px;

    &.active {
      color: white;
      background-color: rgba(40, 177, 138, 1);
      border: 1px solid rgba(50, 180, 138, 1);

      &:hover {
        background-color: rgba(40, 177, 138, 0.8);
      }
    }
  }

  .send-sms-button {
    width: 120px;
  }

  .sms-login-button {
    width: 100%;
    height: auto;
    float: left;
    font-size: 14px;
    color: rgba(0, 0, 0, 0.7);
    text-align: right;
    margin-bottom: 15px;
    cursor: pointer;
  }

  .form-group {
    width: 100%;
    height: auto;
    float: left;
    margin-bottom: 0;
  }

  .other-buttons {
    width: 100%;
    height: auto;
    float: left;
    margin-bottom: 30px;
    text-align: right;
    color: #999999;
    font-size: 14px;

    a {
      color: #999999;

      &:hover {
        color: #333333;
        text-decoration: none;
      }
    }
  }

  .socialites {
    width: 100%;
    height: auto;
    float: left;
    margin-bottom: 20px;
    margin-top: 15px;

    .title {
      width: 100%;
      height: auto;
      float: left;
      font-size: 14px;
      line-height: 20px;
      color: #999999;
      margin-bottom: 15px;
      text-align: center;
    }
  }
}
</style>
<template>
  <div class="main-body">
    <div class="logo-box">
      <nuxt-link to="/">
        <img src="~assets/images/white-logo.png" width="140" height="42"
      /></nuxt-link>
    </div>
    <div class="login-box">
      <div class="tabs">
        <div
          class="tab-item"
          @click="tab = 'password'"
          :class="{ active: tab === 'password' }"
        >
          密码登录
        </div>
        <div
          class="tab-item"
          @click="tab = 'sms'"
          :class="{ active: tab === 'sms' }"
        >
          短信登录
        </div>
      </div>
      <template v-if="tab === 'password'">
        <div class="form-group">
          <input
            type="text"
            class="input-form-item"
            placeholder="手机号"
            v-model="form.mobile"
            required
          />
        </div>
        <div class="form-group">
          <input
            type="password"
            class="input-form-item"
            placeholder="密码"
            v-model="form.password"
            required
          />
        </div>
        <div class="form-group">
          <button
            type="button"
            class="auth-button"
            :class="{
              active: form.mobile.length === 11 && form.password.length > 0,
            }"
            @click="loginHandler"
            :disabled="!(form.mobile.length === 11 && form.password.length > 0)"
          >
            登录
          </button>
        </div>
      </template>
      <template v-else>
        <div class="form-group">
          <input
            type="text"
            class="input-form-item"
            placeholder="手机号"
            v-model="smsLogin.mobile"
            required
          />
        </div>
        <div class="form-group">
          <div class="input-group">
            <input
              type="text"
              name="captcha"
              placeholder="验证码"
              class="input-form-item"
              style="width: 120px; margin-right: 15px"
              v-model="smsLogin.captchaImage"
              required
            />
            <div class="input-group-append">
              <img
                :src="captchaImage.img"
                @click="switchCaptcha"
                class="captcha"
                width="120"
                height="38"
              />
            </div>
          </div>
        </div>
        <div class="form-group">
          <div class="input-group">
            <input
              type="text"
              name="sms_captcha"
              placeholder="手机验证码"
              style="width: 120px; margin-right: 15px"
              class="input-form-item"
              v-model="smsLogin.sms"
              required
            />
            <div class="input-group-append">
              <button
                type="button"
                style="width: 120px; height: 42px"
                class="send-sms-button"
                :class="{
                  active:
                    sms.loading === false && smsLogin.captchaImage.length > 0,
                }"
                :disabled="sms.loading"
                @click="sendSmsCode"
              >
                <span v-if="sms.loading">{{ sms.current }}s</span>
                <span v-else>发送验证码</span>
              </button>
            </div>
          </div>
        </div>

        <div class="form-group">
          <button
            type="button"
            class="auth-button"
            :class="{
              active: smsLogin.mobile.length === 11 && smsLogin.sms.length > 0,
            }"
            @click="smsLoginHandler"
            :disabled="
              !(smsLogin.mobile.length === 11 && smsLogin.sms.length > 0)
            "
          >
            登录
          </button>
        </div>
      </template>
      <div class="other-buttons">
        <nuxt-link to="/auth/password">忘记密码</nuxt-link>
        &nbsp;|&nbsp;
        <nuxt-link to="/auth/register">注册</nuxt-link>
      </div>
      <div class="socialites">
        <div class="title">第三方账号登录</div>
        <div class="apps"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tab: "password",
      form: {
        mobile: "",
        password: "",
      },
      smsLogin: {
        mobile: "",
        sms: "",
        captchaImage: "",
      },
      captchaImage: {
        key: "",
        img: "",
      },
      sms: {
        loading: false,
        max: 120,
        current: 120,
      },
    };
  },
  async asyncData({ app, params, store }) {
    let captcha = await app.$api.Base.CaptchaImage().then((res) => {
      let result = {
        key: "",
        img: "",
      };
      if (res.code === 0) {
        result.key = res.data.key;
        result.img = res.data.img;
      }
      return result;
    });

    return {
      captchaImage: captcha,
    };
  },
  head() {
    return {
      title: "登录",
    };
  },
  methods: {
    switchCaptcha() {
      this.$api.Base.CaptchaImage().then((res) => {
        if (res.code === 0) {
          this.captchaImage.key = res.data.key;
          this.captchaImage.img = res.data.img;
        }
      });
    },
    switchTab() {
      this.tab = this.tab === "password" ? "sms" : "password";
    },
    smsLoginHandler() {
      if (this.smsLogin.mobile.length !== 11) {
        this.$toast.error("请输入手机号");
        return;
      }
      if (this.smsLogin.sms.length === 0) {
        this.$toast.error("请输入短信验证码");
        return;
      }
      this.$api.Auth.LoginSms({
        mobile: this.form.mobile,
        mobile_code: this.form.sms,
      }).then((res) => {
        if (res.code !== 0) {
          this.$toast.error(res.message);
          return;
        }
        // 登录成功
        this.$toast.success("登录成功");
      });
    },
    loginHandler() {
      if (this.form.mobile.length !== 11) {
        this.$toast.error("请输入手机号");
        return;
      }
      if (this.form.password.length === 0) {
        this.$toast.error("请输入密码");
        return;
      }
      this.$api.Auth.LoginPassword({
        mobile: this.form.mobile,
        password: this.form.password,
      }).then((res) => {
        if (res.code !== 0) {
          this.$toast.error(res.message);
          return;
        }

        this.$toast.success("登录成功");
      });
    },
    sendSmsCode() {
      if (this.sms.loading) {
        // 验证码已发送，冷却时间内
        return;
      }
      if (this.smsLogin.mobile.length !== 11) {
        this.$toast.error("请输入手机号");
        return;
      }
      if (this.smsLogin.captchaImage.length === 0) {
        this.$toast.error("请输入图形验证码");
        return;
      }
      this.$api.Base.SendSms({
        mobile: this.smsLogin.mobile,
        image_captcha: this.smsLogin.captchaImage,
        image_key: this.captchaImage.key,
        scene: "register",
      }).then((res) => {
        if (res.code !== 0) {
          this.$toast.error(res.message);
          return;
        }
        this.sms.loading = true;
        window.SmsInterval = setInterval(() => {
          if (this.sms.loading === false) {
            clearInterval(window.SmsInterval);
            return;
          }
          if (this.sms.current > 0) {
            this.sms.current--;
          } else {
            this.sms.loading = false;
            this.sms.current = this.sms.max;
            clearInterval(window.SmsInterval);
          }
        }, 1000);
      });
    },
  },
};
</script>