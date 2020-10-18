<style lang="scss" scoped>
.credit1-item {
  .sum {
    width: 100px;
    text-align: center;
    font-size: 15px;
    color: red;
  }

  .reamrk {
    flex: 1;
    font-size: 14px;
    color: rgba(0, 0, 0, 0.5);
  }

  .date {
    width: 170px;
    height: auto;
    text-align: center;
  }
}
</style>
<template>
  <div class="meedu-panel">
    <div class="title">
      <div class="text">我的积分</div>
      <div class="right-menu">
        <a href="javascript:void(0)"
          >积分：{{ $store.state.auth.user.credit1 }}</a
        >
      </div>
    </div>
    <div class="body">
      <template v-if="data.length > 0">
        <div
          class="common-item credit1-item"
          v-for="item in data"
          :key="item.id"
        >
          <div class="sum">{{ item.sum }}</div>
          <div class="date">{{ item.created_at }}</div>
          <div class="remark">{{ item.remark }}</div>
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
    return {
      title: "我的积分",
    };
  },
  data() {
    return {
      data: [],
      pagination: {
        page: 1,
        page_size: 10,
      },
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
        this.data = [];
        this.pagination.page = 1;
      }
      this.$api.Member.Credit1Records(this.pagination).then((res) => {
        if (res.code !== 0) {
          this.$toase.error(res.message);
          return;
        }
        this.data = res.data.data;
        this.hasNext =
          res.data.total > this.pagination.page * this.pagination.page_size;
      });
    },
  },
};
</script>