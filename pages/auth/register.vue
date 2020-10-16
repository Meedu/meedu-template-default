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
      <div class="col-5">
        <div class="login-box">
          <div class="title">账号注册</div>
          <div class="form-group">
            <label>手机号</label>
            <input
              type="text"
              name="mobile"
              class="form-control"
              placeholder="手机号"
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
                    required
                  />
                  <div class="input-group-append">
                    <img
                      :src="captchatImage.img"
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
                    required
                  />
                  <div class="input-group-append">
                    <button
                      type="button"
                      style="width: 120px"
                      class="send-sms-captcha btn btn-primary"
                    >
                      发送验证码
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="form-group">
            <label for="password">密码</label>
            <input
              id="password"
              type="password"
              class="form-control"
              placeholder="密码"
              name="password"
              required
            />
          </div>
          <div class="form-group">
            <label
              ><input type="checkbox" name="agree_protocol" /> 同意
              <a href="" target="_blank">《用户协议》</a>
              和
              <a href="" target="_blank">《隐私政策》</a></label
            >
          </div>
          <div class="form-group mt-2">
            <button class="btn btn-primary btn-block">注册</button>
          </div>
        </div>
        <div class="other-box">
          已经有账号？<nuxt-link to="/auth/login">立即登录</nuxt-link>
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
      captchatImage: {
        key: "",
        img: "",
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
      captchatImage: captcha,
    };
  },
  head() {
    return {
      title: "注册",
    };
  },
  methods: {
    switchCaptcha() {
      this.$api.Base.CaptchaImage().then((res) => {
        if (res.code === 0) {
          this.captchatImage.key = res.data.key;
          this.captchatImage.img = res.data.img;
        }
      });
    },
  },
};
</script>