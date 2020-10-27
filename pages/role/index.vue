<style lang="scss" scoped>
.title {
  width: 100%;
  height: auto;
  float: left;
  font-size: 44px;
  font-weight: bolder;
  line-height: 1;
  margin-top: 100px;
  margin-bottom: 15px;
  text-align: center;
  color: $primary;
}

.description {
  width: 100%;
  height: auto;
  float: left;
  font-size: 16px;
  color: rgba($primary, 0.6);
  text-align: center;
  margin-bottom: 80px;
}

.roles-box {
  width: 100%;
  height: auto;
  float: left;
  display: flex;
  justify-content: center;
  margin-bottom: 150px;

  .role-item {
    width: 240px;
    height: auto;
    background-color: white;
    border-radius: 15px;
    margin-left: 15px;
    margin-right: 15px;
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
      0 10px 10px -5px rgba(0, 0, 0, 0.04);

    &:hover {
      cursor: pointer;
    }

    .name {
      width: 100%;
      height: auto;
      float: left;
      text-align: left;
      padding-top: 30px;
      padding-left: 15px;
      padding-right: 15px;
      background-color: white;
      border-top-left-radius: 15px;
      border-top-right-radius: 15px;

      span {
        display: inline;
        padding: 5px 10px;
        font-size: 15px;
        line-height: 1;
        border-radius: 18px;
        background-color: rgba($primary, 0.3);
        color: $primary;
        font-weight: 500;
      }
    }

    .charge {
      width: 100%;
      height: auto;
      float: left;
      padding-left: 15px;
      padding-right: 15px;
      background-color: white;

      .text {
        font-size: 44px;
        font-weight: bolder;
        color: #333333;
        text-align: left;
        line-height: 88px;

        small {
          font-weight: 16px;
        }
      }

      .days {
        font-size: 16px;
        color: rgba(#333333, 0.5);
      }
    }

    .permissions {
      width: 100%;
      height: auto;
      float: left;
      padding: 30px 15px;
      border-top: 2px dashed $primary;

      .permission-item {
        width: 100%;
        height: auto;
        float: left;
        color: rgba(#333333, 0.8);
        font-size: 14px;
        line-height: 36px;
        text-align: left;
      }
    }

    .options {
      width: 100%;
      height: auto;
      float: left;
      padding: 15px;
      background-color: white;
      text-align: center;

      .subscribe-button {
        display: block;
        width: 100%;
        height: auto;
        float: left;
        background-color: $primary;
        color: white;
        text-align: center;
        font-size: 18px;
        line-height: 48px;
        border-radius: 5px;

        &:hover {
          text-decoration: none;
          background-color: rgba($primary, 0.9);
        }
      }
    }
  }
}
</style>
<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <div class="title">VIP会员</div>
        <div class="description">VIP会员可免费观看全站所有视频</div>
        <div class="roles-box">
          <div class="role-item" v-for="item in list" :key="item.id">
            <div class="name">
              <span>{{ item.name }}</span>
            </div>
            <div class="charge">
              <span class="text"><small>￥</small>{{ item.charge }}</span>
              <span class="days">/{{ item.expire_days }}天</span>
            </div>
            <div class="options">
              <a href="javascript:void(0)" class="subscribe-button">立即订阅</a>
            </div>
            <div class="permissions">
              <div
                class="permission-item"
                v-for="(p, index) in item.desc_rows"
                :key="index"
              >
                {{ p }}
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
  middleware: ["user"],
  head() {
    return {
      title: "VIP",
    };
  },
  layout: "app",
  async asyncData({ app }) {
    let list = await app.$api.Role.Index().then((res) => {
      if (res.code !== 0) {
        return [];
      }
      return res.data;
    });

    return {
      list,
    };
  },
  data() {
    return {
      list: [],
    };
  },
};
</script>