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
          <div class="title">账号登录</div>
          <div class="form-group">
            <label for="mobile">手机号</label>
            <input
              id="mobile"
              type="mobile"
              class="form-control"
              placeholder="手机号"
              name="mobile"
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
              name="password"
              required
            />
          </div>
          <div class="form-group">
            <label
              ><input type="checkbox" name="remember" /> 15天内免登录</label
            >
          </div>
          <div class="form-group">
            <button type="button" class="btn btn-primary btn-block">
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
  head() {
    return {
      title: "登录",
    };
  },
};
</script>