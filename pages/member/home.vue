<style lang="scss" scoped>
.profile-item {
  width: 100%;
  height: auto;
  float: left;
  font-size: 14px;
  line-height: 60px;
  display: flex;
  color: #333333;

  .title {
    width: 100px;
    text-align: right;
    font-weight: 500;
  }

  .value {
    flex: 1;
    padding-left: 30px;
    text-align: left;

    a {
      margin-left: 15px;
      color: $primary;
    }
  }
}
</style>
<template>
  <div class="meedu-panel">
    <div class="title">
      <div class="text">用户资料</div>
    </div>
    <div class="body">
      <div class="row">
        <div class="col-12" v-if="user">
          <div class="profile-item">
            <div class="title">头像</div>
            <div class="value">
              <img :src="user.avatar" width="50" height="50" class="br-50" />
            </div>
          </div>
          <div class="profile-item">
            <div class="title">手机号</div>
            <div class="value" v-if="user.mobile.length === 11">
              {{ user.mobile.slice(0, 3) }}****{{ user.mobile.slice(7, 11) }}
            </div>
            <div class="value" v-else>未绑定 <a href="">绑定手机号</a></div>
          </div>
          <div class="profile-item">
            <div class="title">昵称</div>
            <div class="value">
              {{ user.nick_name }}
              <a href="" v-if="user.is_set_nickname === 0">修改</a>
            </div>
          </div>
          <div class="profile-item" v-if="user.role">
            <div class="title">会员</div>
            <div class="value">
              {{ user.role.name }} - {{ user.role_expired_at }}
            </div>
          </div>
          <div class="profile-item" v-else>
            <div class="title">会员</div>
            <div class="value">
              免费会员 <nuxt-link to="/role/index">加入会员</nuxt-link>
            </div>
          </div>

          <div class="profile-item">
            <div class="title">密码</div>
            <div class="value" v-if="user.is_set_password === 0">
              未设置
              <a href="" v-if="user.is_set_nickname === 0">设置密码</a>
            </div>
            <div class="value" v-else>已设置 <a href="">修改密码</a></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  middleware: ["auth"],
  layout: "member",
  head() {
    return {
      title: "我的资料",
    };
  },
  data() {
    return {
      user: null,
    };
  },
  mounted() {
    this.user = this.$store.state.auth.user;
  },
};
</script>