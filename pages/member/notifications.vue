<style lang="scss" scoped>
.notification-item {
  .dot {
    width: auto;
    height: auto;
    padding-right: 10px;
    text-align: center;

    .dotdot {
      display: inline-block;
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background-color: red;
    }
  }

  .content {
    flex: 1;
    font-size: 14px;
    color: rgba(0, 0, 0, 0.5);
    white-space: normal;
    word-break: break-all;

    &.active {
      color: #333333;
    }
  }
}
</style>
<template>
  <div class="meedu-panel">
    <div class="title">
      <div class="text">我的消息</div>
      <div class="right-menu">
        <a href="javascript:void(0)" @click="readAll">标记全部已读</a>
      </div>
    </div>
    <div class="body">
      <template v-if="data.length > 0">
        <div
          class="common-item notification-item"
          v-for="item in data"
          :key="item.id"
          @click="read(item)"
        >
          <div class="dot">
            <div class="dotdot" v-if="item.read_at === null"></div>
          </div>
          <div class="content" :class="{ active: item.read_at === null }">
            {{ item.data.message }}
          </div>
        </div>
      </template>
      <none v-else></none>

      <pagination v-model="pagination.page" :has-next="hasNext"></pagination>
    </div>
  </div>
</template>
<script>
export default {
  middleware: ["auth"],
  layout: "member",
  head() {
    return;
    {
      title: "我的消息";
    }
  },
  data() {
    return {
      pagination: {
        page: 1,
        page_size: 10,
      },
      data: [],
      hasNext: false,
    };
  },
  mounted() {
    this.getData();
  },
  watch: {
    "pagination.page"() {
      this.getData();
    },
  },
  methods: {
    getData(reset = false) {
      if (reset) {
        this.pagination.page = 1;
      }
      this.$api.Member.Notifications(this.pagination).then((res) => {
        if (res.code !== 0) {
          this.$toast.error(res.message);
          return;
        }
        this.data = res.data.data;
        this.hasNext =
          res.data.total > this.pagination.page * this.pagination.page_size;
      });
    },
    readAll() {
      this.$api.Member.NotificationMarkAllAsRead().then((res) => {
        if (res.code !== 0) {
          this.$toast.error(res.message);
        } else {
          this.$toast.success("成功");
          this.getData(true);
        }
      });
    },
    read(notification) {
      if (notification.read_at === null) {
        this.$api.Member.NotificationMarkAsRead(notification.id).then((res) => {
          if (res.code === 0) {
            this.getData();
          }
        });
      }
    },
  },
};
</script>