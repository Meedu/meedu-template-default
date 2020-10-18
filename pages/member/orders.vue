<style lang="scss" scoped>
.order-item {
  width: 100%;
  height: auto;
  float: left;
  margin-bottom: 15px;
  padding: 15px 30px;
  background-color: rgba(0, 0, 0, 0.02);
  border-radius: 33px;
  line-height: 36px;
  display: flex;
  cursor: pointer;

  &:hover {
    background-color: rgba(0, 0, 0, 0.04);
  }

  .order-no {
    width: 120px;
    height: auto;
    color: rgba(0, 0, 0, 0.7);
    text-align: center;
  }

  .goods {
    flex: 1;
    color: #333333;
    font-size: 15px;
    padding-left: 15px;
  }

  .total {
    width: 100px;
    height: auto;
    color: rgba(red, 0.8);
    font-size: 15px;
    text-align: center;

    small {
      font-size: 12px;
    }
  }

  .status {
    width: 80px;
    height: auto;
    font-size: 12px;
    color: rgba(0, 0, 0, 0.5);
    text-align: center;
  }

  .date {
    width: 200px;
    text-align: right;
    font-size: 12px;
    color: rgba(0, 0, 0, 0.5);
  }
}
</style>
<template>
  <div class="meedu-panel">
    <div class="title"><div class="text">我的订单</div></div>
    <div class="body">
      <template v-if="data.length > 0">
        <div class="order-item" v-for="order in data" :key="order.id">
          <div class="order-no">{{ order.order_id }}</div>
          <div class="goods">
            {{ order.goods[0].goods_text }}
          </div>
          <div class="total"><small>￥</small>{{ order.charge }}</div>
          <div class="status">{{ order.status_text }}</div>
          <div class="date">{{ order.created_at }}</div>
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
      title: "我的订单",
    };
  },
  data() {
    return {
      pagination: {
        page: 1,
        page_size: 10,
        total: 0,
      },
      hasNext: false,
      data: [],
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
      this.$api.Member.Orders(this.pagination).then((res) => {
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