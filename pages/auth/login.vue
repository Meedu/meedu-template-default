<style lang="less" scoped>
.login-box {
  width: 100%;
  height: auto;
  float: left;
  margin-top: 100px;
  padding: 30px 30px 20px 30px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 2px 20px 0 rgba(0, 0, 0, 0.05);

  .title {
    width: 100%;
    height: auto;
    float: left;
    text-align: center;
    margin-bottom: 30px;
    font-size: 20px;
    color: #000;
    font-weight: 600;
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

    label {
      font-size: 14px;
      color: rgba(0, 0, 0, 0.7);
    }
  }
}

.other-box {
  width: 100%;
  height: auto;
  float: left;
  margin-top: 15px;
  margin-bottom: 150px;
  padding-left: 30px;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.7);
}
</style>
<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-4">
        <div class="login-box">
          <div class="title">账号登录</div>
          <div class="sms-login-button">
            <span @click="switchTab()">{{
              tab === "sms" ? "密码登录" : "短信登录"
            }}</span>
          </div>
          <template v-if="tab === 'password'">
            <div class="form-group">
              <label for="mobile">手机号</label>
              <input
                id="mobile"
                type="mobile"
                class="form-control"
                placeholder="手机号"
                v-model="form.mobile"
                required
              />
            </div>
            <div class="form-group">
              <label for="password">密码</label>
              <input
                id="password"
                type="password"
                class="form-control"
                placeholder="密码"
                v-model="form.password"
                required
              />
            </div>
          </template>
          <template v-else>
            <div class="form-group">
              <label>手机号</label>
              <input
                type="text"
                class="form-control"
                placeholder="手机号"
                v-model="smsLogin.mobile"
                required
              />
            </div>
            <div class="form-group">
              <label>验证码</label>
              <div class="row">
                <div class="col">
                  <div class="input-group">
                    <input
                      type="text"
                      name="captcha"
                      placeholder="验证码"
                      class="form-control"
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
              </div>
            </div>
            <div class="form-group">
              <label>手机验证码</label>
              <div class="row">
                <div class="col">
                  <div class="input-group">
                    <input
                      type="text"
                      name="sms_captcha"
                      placeholder="手机验证码"
                      class="form-control"
                      v-model="smsLogin.sms"
                      required
                    />
                    <div class="input-group-append">
                      <button
                        type="button"
                        style="width: 120px"
                        class="btn btn-primary"
                        :disabled="sms.loading"
                        @click="sendSmsCode"
                      >
                        <span v-if="sms.loading">{{ sms.current }}s</span>
                        <span v-else>发送验证码</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </template>
          <div class="form-group">
            <button
              type="button"
              class="btn btn-primary btn-block"
              @click="loginHandler"
            >
              登录
            </button>
          </div>
        </div>
        <div class="other-box">
          还没有账号？<nuxt-link to="/auth/register">立即注册</nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "app",
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
    loginHandler() {
      if (this.tab === "password") {
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
        });
        return;
      }

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