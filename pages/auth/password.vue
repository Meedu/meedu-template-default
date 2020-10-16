<style lang="less" scoped>
.login-box {
  width: 100%;
  height: auto;
  float: left;
  margin-top: 100px;
  margin-bottom: 150px;
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
</style>
<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-5">
        <div class="login-box">
          <div class="title">找回密码</div>
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
                    <img src="" class="captcha" width="120" height="38" />
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
              placeholder="请输入新密码"
              class="form-control"
              name="password"
              required
            />
          </div>
          <div class="form-group">
            <label for="password-confirm">确认密码</label>
            <input
              id="password-confirm"
              type="password"
              placeholder="再输入一次"
              class="form-control"
              name="password_confirmation"
              required
            />
          </div>
          <div class="form-group mt-2">
            <button class="btn btn-primary btn-block">重置密码</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "app",
  head() {
    return {
      title: "找回密码",
    };
  },
};
</script>