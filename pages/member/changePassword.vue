<style lang="scss" scoped>
.change-mobile-box {
  width: 100%;
  height: auto;
  float: left;
  background-color: white;

  .change-mobile-input-box {
    width: 300px;
    height: auto;
    margin: 0 auto;
  }
}
</style>
<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <div class="change-mobile-box">
          <div class="meedu-panel">
            <div class="title">
              <div class="text">修改密码</div>
            </div>
            <div class="body">
              <div class="change-mobile-input-box">
                <div class="form-group">
                  <input
                    type="text"
                    class="input-form-item"
                    placeholder="手机号"
                    name="mobile"
                    v-model="form.mobile"
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
                      v-model="form.captchaImage"
                      required
                    />
                    <div class="input-group-append">
                      <img
                        :src="captchaImage.img"
                        @click="getCaptchaImage"
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
                      v-model="form.mobile_code"
                      required
                    />
                    <div class="input-group-append">
                      <button
                        type="button"
                        style="width: 120px; height: 42px"
                        class="send-sms-button"
                        :class="{
                          active:
                            sms.loading === false &&
                            form.captchaImage.length > 0,
                        }"
                        :disabled="
                          sms.loading || form.captchaImage.length === 0
                        "
                        @click="sendSmsCode"
                      >
                        <span v-if="sms.loading">{{ sms.current }}s</span>
                        <span v-else>发送验证码</span>
                      </button>
                    </div>
                  </div>
                </div>

                <div class="form-group">
                  <input
                    type="text"
                    class="input-form-item"
                    placeholder="新密码"
                    name="password"
                    v-model="form.password"
                    required
                  />
                </div>

                <div class="form-group">
                  <button
                    type="button"
                    class="auth-button"
                    :class="{
                      active:
                        form.mobile.length === 11 &&
                        form.mobile_code.length > 0 &&
                        form.password.length > 0,
                    }"
                    @click="handler"
                    :disabled="
                      !(
                        form.mobile.length === 11 &&
                        form.mobile_code.length > 0 &&
                        form.password.length > 0
                      )
                    "
                  >
                    确认
                  </button>
                </div>
              </div>
            </div>
          </div>
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
      form: {
        mobile: "",
        captchaImage: "",
        mobile_code: "",
        password: "",
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
  mounted() {
    this.getCaptchaImage();
  },
  methods: {
    getCaptchaImage() {
      this.$api.Base.CaptchaImage().then((res) => {
        if (res.code !== 0) {
          this.$toast.error("获取图形验证码失败");
          return;
        }
        this.captchaImage.key = res.data.key;
        this.captchaImage.img = res.data.img;
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
    handler() {
      if (this.form.mobile.length !== 11) {
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
      this.$api.Member.PasswordChange(this.form).then((res) => {
        if (res.code !== 0) {
          this.$toast.error(res.message);
          return;
        }
        this.$toast.success("成功");
        this.$router.push("/member/home");
      });
    },
  },
};
</script>