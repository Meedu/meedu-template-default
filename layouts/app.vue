<style lang="scss" scoped>
@import "~/assets/scss/var";

nav {
  width: 100%;
  height: 70px;
  float: left;
  margin-bottom: 15px;
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
          padding: 0 8px;

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
        border-top-left-radius: 20px;
        border-bottom-left-radius: 20px;
        line-height: 40px;
        padding: 5px 15px;
        font-size: 14px;
        color: rgba(0, 0, 0, 0.7);

        &:focus {
          border: 1px solid $primary;
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

      .login-item {
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
    }
  }
}

footer {
  width: 100%;
  height: auto;
  background: #0e0c1e;
  padding-top: 30px;
  margin-top: 15px;

  p {
    font-size: 14px;
    font-weight: 400;
    color: rgba(256, 256, 256, 0.3);
    margin-bottom: 30px;
    text-align: center;

    a {
      color: rgba(256, 256, 256, 0.3);
    }
  }
}
</style>
<template>
  <div>
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
              <nuxt-link class="login-item" to="/auth/login">
                <span>登录</span>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <div>
      <Nuxt />
    </div>
    <!-- 页脚 -->
    <footer>
      <div class="container">
        <div class="row">
          <div class="col-12">
            <p>
              Powered By <a href="https://meedu.vip" target="_blank">MeEdu</a>
            </p>
            <p>
              © 2020 MeEdu ·
              <a href="http://www.beian.miit.gov.cn" target="_blank"
                >备案信息</a
              >
            </p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>