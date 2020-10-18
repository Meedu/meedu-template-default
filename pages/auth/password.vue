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
  background-color: white;
  border-radius: 10px;

  .title {
    width: 100%;
    height: auto;
    float: left;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    padding: 15px 30px;
    text-align: center;
    font-size: 20px;
    color: #333;
    box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.05);
  }

  .body {
    width: 100%;
    height: auto;
    float: left;
    padding: 30px 30px 0 30px;
  }

  .form-group {
    width: 100%;
    height: auto;
    float: left;
    margin-bottom: 0;
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

  .other-buttons {
    width: 100%;
    height: auto;
    float: left;
    margin-bottom: 30px;
    text-align: right;
    color: #999999;
    font-size: 14px;
    padding-left: 30px;
    padding-right: 30px;

    a {
      color: #999999;

      &:hover {
        color: #333333;
        text-decoration: none;
      }
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
      <div class="title">找回密码</div>
      <div class="body">
        <div class="form-group">
          <input
            type="text"
            class="input-form-item"
            v-model="form.mobile"
            placeholder="手机号"
          />
        </div>
        <div class="form-group">
          <div class="input-group">
            <input
              type="text"
              placeholder="验证码"
              class="input-form-item"
              style="width: 120px; margin-right: 15px"
              v-model="form.captchaImage"
            />
            <div class="input-group-append">
              <img
                :src="captchaImage.img"
                class="captcha"
                @click="getImageCaptcha"
                width="120"
                height="42"
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
              class="input-form-item"
              style="width: 120px; margin-right: 15px"
              v-model="form.mobile_code"
            />
            <div class="input-group-append">
              <button
                type="button"
                style="width: 120px"
                class="send-sms-button"
                :class="{
                  active:
                    sms.loading === false &&
                    form.mobile.length > 0 &&
                    form.captchaImage.length > 0,
                }"
                @click="sendSmsCode"
                :disabled="
                  sms.loading ||
                  form.mobile.length === 0 ||
                  form.captchaImage.length === 0
                "
              >
                <span v-if="sms.loading">{{ sms.current }}s</span>
                <span v-else>发送验证码</span>
              </button>
            </div>
          </div>
        </div>
        <div class="form-group">
          <input
            type="password"
            placeholder="请输入新密码"
            class="input-form-item"
            v-model="form.password"
          />
        </div>
        <div class="form-group">
          <input
            type="password"
            placeholder="再输入一次"
            class="input-form-item"
            v-model="form.password_confirmation"
          />
        </div>
        <div class="form-group">
          <button
            class="auth-button"
            :class="{
              active:
                form.mobile.length > 0 &&
                form.mobile_code.length > 0 &&
                form.password.length > 0 &&
                form.password_confirmation.length > 0,
            }"
            @click="resetHandler"
            :disabled="
              form.mobile.length === 0 ||
              form.mobile_code.length === 0 ||
              form.password.length === 0 ||
              form.password_confirmation.length === 0
            "
          >
            重置密码
          </button>
        </div>
      </div>

      <div class="other-buttons">
        <nuxt-link to="/auth/login">登录</nuxt-link>
        &nbsp;|&nbsp;
        <nuxt-link to="/auth/register">注册</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "找回密码",
    };
  },
  data() {
    return {
      captchaImage: {
        key: "",
        img: "",
      },
      sms: {
        loading: false,
        max: 120,
        current: 120,
      },
      form: {
        mobile: "",
        mobile_code: "",
        captchaImage: "",
        password: "",
        password_confirmation: "",
      },
    };
  },
  mounted() {
    this.getImageCaptcha();
  },
  methods: {
    getImageCaptcha() {
      this.$api.Base.CaptchaImage().then((res) => {
        if (res.code === 0) {
          this.captchaImage.key = res.data.key;
          this.captchaImage.img = res.data.img;
        }
      });
    },
    sendSmsCode() {
      if (this.sms.loading) {
        // 验证码已发送，冷却时间内
        return;
      }
      if (this.form.mobile.length !== 11) {
        this.$toast.error("请输入手机号");
        return;
      }
      if (this.form.captchaImage.length === 0) {
        this.$toast.error("请输入图形验证码");
        return;
      }
      this.$api.Base.SendSms({
        mobile: this.form.mobile,
        image_captcha: this.form.captchaImage,
        image_key: this.captchaImage.key,
        scene: "password_reset",
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
    resetHandler() {
      if (this.form.mobile.length === 0) {
        this.$toast.error("请输入手机号");
        return;
      }
      if (this.form.mobile_code.length === 0) {
        this.$toast.error("请输入短信验证码");
        return;
      }
      if (this.form.password.length === 0) {
        this.$toast.error("请输入密码");
        return;
      }
      if (this.form.password !== this.form.password_confirmation) {
        this.$toast.error("两次输入密码不一致");
        return;
      }

      this.$api.Auth.PasswordReset({
        mobile: this.form.mobile,
        mobile_code: this.form.mobile_code,
        password: this.form.password,
      }).then((res) => {
        if (res.code !== 0) {
          this.$toast.error(res.message);
          return;
        }

        this.$toast.success("密码重置成功");

        setTimeout(() => {
          this.$router.push("/auth/login");
        }, 500);
      });
    },
  },
};
</script>