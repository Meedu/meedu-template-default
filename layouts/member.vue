<style lang="scss" scoped>
.member-box {
  width: 100%;
  height: auto;
  float: left;
  display: flex;

  .left-box {
    width: 244px;
    height: auto;
    float: left;
    margin-right: 15px;

    .user-box {
      width: 100%;
      height: auto;
      float: left;
      margin-bottom: 15px;
      background-color: white;
      border-radius: 2px;
      padding-top: 40px;
      padding-bottom: 40px;

      .avatar {
        width: 100%;
        height: auto;
        float: left;
        text-align: center;
        margin-bottom: 15px;

        img {
          border-radius: 50%;
        }
      }

      .nickname {
        width: 100%;
        height: auto;
        float: left;
        text-align: center;
        color: #333333;
        font-size: 15px;
        line-height: 1;
      }
    }

    .menu-box {
      width: 100%;
      height: auto;
      float: left;
      background-color: white;
      border-radius: 2px;
      padding: 15px;

      ul {
        width: 100%;
        height: auto;
        float: left;
        padding: 0;
        margin: 0;

        li {
          width: 100%;
          height: auto;
          float: left;
          list-style: none;

          &.active {
            a {
              color: $primary;
            }
          }

          a {
            display: inline-block;
            width: 100%;
            height: auto;
            line-height: 66px;
            text-align: center;
            color: #333333;

            &:hover {
              text-decoration: none;
              color: $primary;
            }
          }
        }
      }
    }
  }

  .right-box {
    flex: 1;
    background-color: white;
    border-radius: 2px;
  }
}
</style>
<template>
  <div>
    <meedu-nav></meedu-nav>
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="member-box">
            <div class="left-box">
              <div class="user-box" v-if="user.avatar && user.nick_name">
                <div class="avatar">
                  <img :src="user.avatar" width="64" height="64" />
                </div>
                <div class="nickname">{{ user.nick_name }}</div>
              </div>
              <div class="menu-box">
                <ul>
                  <li :class="{ active: $route.name === 'member-home' }">
                    <nuxt-link to="/member/home">我的资料</nuxt-link>
                  </li>
                  <li :class="{ active: $route.name === 'member-courses' }">
                    <nuxt-link to="/member/courses">我的课程</nuxt-link>
                  </li>
                  <li :class="{ active: $route.name === 'member-orders' }">
                    <nuxt-link to="/member/orders">我的订单</nuxt-link>
                  </li>
                  <li :class="{ active: $route.name === 'member-invite' }">
                    <nuxt-link to="/member/invite">我的邀请</nuxt-link>
                  </li>
                  <li :class="{ active: $route.name === 'member-credit1' }">
                    <nuxt-link to="/member/credti1">我的积分</nuxt-link>
                  </li>
                  <li
                    :class="{ active: $route.name === 'member-notifications' }"
                  >
                    <nuxt-link to="/member/notifications">我的消息</nuxt-link>
                  </li>
                </ul>
              </div>
            </div>
            <div class="right-box">
              <Nuxt />
            </div>
          </div>
        </div>
      </div>
    </div>

    <meedu-footer></meedu-footer>
  </div>
</template>
<script>
export default {
  middleware: ["auth"],
  data() {
    return {
      user: {
        nick_name: "",
        avatar: "",
      },
      route: "",
    };
  },
  mounted() {
    this.initUser();
  },
  methods: {
    initUser() {
      this.user = this.$store.state.auth.user;
    },
  },
};
</script>