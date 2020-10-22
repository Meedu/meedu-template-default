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

    .user-avatar {
      width: 70px;
      height: 70px;
      position: relative;

      img {
        width: 70;
        height: 70;
      }

      .shadow {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 11;
        background-color: rgba(0, 0, 0, 0.5);
        text-align: center;
        border-bottom-left-radius: 35px;
        border-bottom-right-radius: 35px;
        color: white;
        text-align: center;
        font-size: 13px;
        line-height: 24px;
        cursor: pointer;

        &:hover {
          background-color: rgba(0, 0, 0, 0.4);
        }
      }
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
              <div class="user-avatar">
                <img :src="user.avatar" width="70" height="70" class="br-50" />
                <div class="shadow" @click="changeAvatar">
                  <span>修改</span>
                </div>
                <div style="display: none">
                  <input type="file" ref="avatar" @change="avatarChange" />
                </div>
              </div>
            </div>
          </div>
          <div class="profile-item">
            <div class="title">手机号</div>
            <div class="value" v-if="user.mobile.length === 11">
              {{ user.mobile.slice(0, 3) }}****{{ user.mobile.slice(7, 11) }}
              <nuxt-link to="/member/changeMobile">更换手机号</nuxt-link>
            </div>
            <div class="value" v-else>
              未绑定
              <nuxt-link to="/member/changeMobile">绑定手机号</nuxt-link>
            </div>
          </div>
          <div class="profile-item">
            <div class="title">昵称</div>
            <div class="value">
              {{ user.nick_name }}
              <nuxt-link
                to="/member/changeNickname"
                v-if="user.is_set_nickname === 0"
                >修改</nuxt-link
              >
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
              免费会员 <nuxt-link to="/role">加入会员</nuxt-link>
            </div>
          </div>

          <div class="profile-item">
            <div class="title">密码</div>
            <div class="value" v-if="user.is_set_password === 0">
              未设置
              <a href="" v-if="user.is_set_nickname === 0">设置密码</a>
            </div>
            <div class="value" v-else>
              已设置 <nuxt-link to="/member/changePassword">修改密码</nuxt-link>
            </div>
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
  methods: {
    changeAvatar() {
      this.$refs.avatar.click();
    },
    avatarChange(e) {
      let file = event.target.files[0];
      let formData = new FormData();
      formData.append("file", file);
      this.$api.Member.AvatarChange(formData).then((res) => {
        if (res.code !== 0) {
          this.$toast.error(res.message);
          return;
        }
        this.$toast.success("头像更换成功");
        setTimeout(() => {
          window.location.reload();
        }, 500);
      });
    },
  },
};
</script>