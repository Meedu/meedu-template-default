<style lang="scss" scoped>
nav {
  width: 100%;
  height: 70px;
  float: left;
  margin-bottom: 30px;
  box-shadow: 0 4px 10px 0 rgba(153, 153, 158, 0.2);
  background-color: white;

  .nav-body {
    width: 100%;
    height: auto;
    float: left;
    display: flex;

    .logo {
      width: 140px;
      height: 70px;
      line-height: 70px;
    }

    .menus {
      flex: 1;

      ul {
        width: auto;
        height: 70px;
        float: left;

        li {
          width: auto;
          height: 70px;
          float: left;
          line-height: 70px;
          list-style: none;
          font-size: 16px;
          padding: 0 10px;

          a {
            color: #333333;

            &:hover {
              text-decoration: none;
            }
          }

          &.active {
            a {
              color: $primary;
            }
          }
        }
      }
    }

    .search-input-box {
      width: 300px;
      height: 70px;
      float: left;
      padding: 15px 15px;

      input {
        width: 220px;
        height: 40px;
        float: left;
        border: 1px solid rgba(0, 0, 0, 0.2);
        border-right: 0;
        border-top-left-radius: 20px;
        border-bottom-left-radius: 20px;
        line-height: 40px;
        padding: 5px 15px;
        font-size: 14px;
        color: rgba(0, 0, 0, 0.7);

        &:focus {
          border: 1px solid $primary;
          border-right: 0;
          outline: none;
        }
      }

      button {
        width: 50px;
        height: 40px;
        float: left;
        border: 0;
        outline: 0;
        border-top-right-radius: 20px;
        border-bottom-right-radius: 20px;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
        font-size: 14px;
        background-color: $primary;
        color: white;

        &:hover {
          background-color: rgba($primary, 0.8);
        }
      }
    }

    .right-menu {
      width: auto;
      height: 70px;
      padding-left: 30px;

      > .login-item {
        display: block;
        width: auto;
        height: 70px;
        line-height: 70px;
        float: left;

        span {
          display: inline-block;
          width: 80px;
          height: 34px;
          border-radius: 17px;
          background-color: $primary;
          text-align: center;
          line-height: 34px;
          font-size: 14px;
          font-weight: 400;
          color: #ffffff;
        }

        &:hover {
          span {
            background-color: rgba($primary, 0.8);
          }
        }
      }

      .nickname {
        position: relative;
        display: block;
        width: 100px;
        height: 70px;
        line-height: 70px;
        float: left;
        text-align: center;
        color: #333333;
        cursor: pointer;
        font-size: 14px;

        img {
          border-radius: 50%;
          margin-right: 5px;
        }

        &:hover {
          color: $primary;
        }

        .menu-box {
          display: none;
          position: absolute;
          top: 70px;
          left: -15px;
          z-index: 999;
          width: 130px;
          height: auto;
          background-color: white;
          padding: 0 15px;
          border-radius: 2px;
          border: 1px solid rgba(0, 0, 0, 0.1);
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
            0 4px 6px -2px rgba(0, 0, 0, 0.05);

          .menu-item {
            display: block;
            width: 100%;
            height: auto;
            float: left;
            line-height: 40px;
            font-size: 14px;
            color: #333333;
            text-align: center;

            &:hover {
              color: $primary;
              text-decoration: none;
            }
          }

          .line {
            width: 100%;
            height: 1px;
            float: left;
            background-color: rgba(0, 0, 0, 0.05);
          }
        }

        &:hover {
          text-decoration: none;
          .menu-box {
            display: block;
          }
        }
      }
    }
  }
}
</style>
<template>
  <!-- 导航栏 -->
  <nav>
    <div class="container">
      <div class="col-12">
        <div class="nav-body">
          <div class="logo">
            <img src="~/assets/images/logo.png" height="37" width="140" />
          </div>
          <div class="menus">
            <ul>
              <li>
                <nuxt-link to="/">首页</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/courses">全部课程</nuxt-link>
              </li>
            </ul>
          </div>
          <div class="search-input-box">
            <form action="get" method="get">
              <input type="text" name="keywords" placeholder="关键字" />
              <button>搜索</button>
            </form>
          </div>
          <div class="right-menu">
            <nuxt-link
              class="login-item"
              to="/auth/login"
              v-if="$store.state.auth.auth === false"
            >
              <span>登录</span>
            </nuxt-link>
            <div class="nickname" v-else>
              <img
                :src="$store.state.auth.user.avatar"
                width="20"
                height="20"
              />
              <span>{{ $store.state.auth.user.nick_name }}</span>
              <div class="menu-box">
                <nuxt-link class="menu-item" to="/member/home"
                  >我的资料</nuxt-link
                >
                <nuxt-link class="menu-item" to="/member/courses"
                  >我的课程</nuxt-link
                >
                <nuxt-link class="menu-item" to="/member/orders"
                  >我的订单</nuxt-link
                >
                <nuxt-link class="menu-item" to="/member/invite"
                  >我的邀请</nuxt-link
                >
                <nuxt-link class="menu-item" to="/member/credit1"
                  >我的积分</nuxt-link
                >
                <nuxt-link class="menu-item" to="/member/notifications"
                  >我的消息</nuxt-link
                >
                <div class="line"></div>
                <div class="menu-item logout" @click="logout">安全退出</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  methods: {
    logout() {
      this.$utils.logout(this);
    },
  },
};
</script>