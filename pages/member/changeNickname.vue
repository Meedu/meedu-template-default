<style lang="scss" scoped>
.change-nickname-box {
  width: 100%;
  height: auto;
  float: left;
  background-color: white;

  .change-nickname-input-box {
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
        <div class="change-nickname-box">
          <div class="meedu-panel">
            <div class="title">
              <div class="text">绑定/更换手机号</div>
            </div>
            <div class="body">
              <div class="change-nickname-input-box">
                <div class="form-group">
                  <input
                    type="text"
                    class="input-form-item"
                    placeholder="昵称"
                    v-model="form.nick_name"
                    required
                  />
                </div>

                <div class="form-group">
                  <button
                    type="button"
                    class="auth-button"
                    :class="{
                      active: form.nick_name.length > 0,
                    }"
                    @click="handler"
                    :disabled="!(form.nick_name.length > 0)"
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
        nick_name: "",
      },
    };
  },
  methods: {
    handler() {
      if (this.form.nick_name.trim().length === 0) {
        this.$toast.error("请输入昵称");
        return;
      }
      this.$api.Member.NicknameChange(this.form).then((res) => {
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