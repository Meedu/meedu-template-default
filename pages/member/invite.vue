<style lang="scss" scoped>
.tabs {
  width: 100%;
  height: auto;
  float: left;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);

  .tab-item {
    width: 100px;
    height: 50px;
    line-height: 50px;
    float: left;
    text-align: center;
    font-size: 15px;
    margin-bottom: -1px;
    cursor: pointer;

    &.active,
    &:hover {
      border-bottom: 1px solid $primary;
      color: $primary;
      font-weight: 500;
    }
  }
}

.contents {
  width: 100%;
  height: auto;
  float: left;
  padding-top: 15px;

  .code-box {
    width: 100%;
    height: auto;
    float: left;
    padding-top: 50px;
    padding-bottom: 50px;
    text-align: center;

    .text {
      display: inline-block;
      padding: 15px 50px;
      border: 5px dashed $primary;
      border-radius: 5px;
      color: $primary;
      font-size: 24px;
      cursor: pointer;
    }

    .create-button {
      display: inline-block;
      width: 300px;
      height: 44px;
      line-height: 44px;
      text-align: center;
      color: white;
      background-color: $primary;
      border-radius: 5px;
      cursor: pointer;
      margin-top: 50px;

      &:hover {
        background-color: rgba($primary, 0.8);
      }
    }
  }

  .code-desc {
    width: 100%;
    height: auto;
    float: left;
    margin-top: 15px;

    p {
      font-size: 15px;
      color: rgba(0, 0, 0, 0.7);
      line-height: 32px;
    }
  }
}

.common-item {
  width: 100%;
  height: auto;
  float: left;
  padding: 15px 30px;
  border-radius: 33px;
  background-color: rgba(0, 0, 0, 0.02);
  display: flex;
  cursor: pointer;
  font-size: 15px;
  color: rgba(0, 0, 0, 0.7);
  line-height: 36px;
  margin-top: 15px;

  .mobile {
    flex: 1;
    text-align: left;
  }

  .date {
    flex: 1;
    text-align: right;
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.04);
  }
}

.invite-user-item {
  .mobile {
    flex: 1;
    text-align: left;
  }

  .date {
    flex: 1;
    text-align: right;
    color: rgba(0, 0, 0, 0.5);
  }
}

.withdraw-record-item {
  .date {
    width: 200px;
    font-size: 14px;
    text-align: center;
    color: rgba(0, 0, 0, 0.5);
  }

  .status {
    width: 100px;
    font-size: 14px;
    text-align: center;
    color: rgba(0, 0, 0, 0.5);
  }

  .charge {
    width: 200px;
    text-align: center;
    font-size: 15px;
    color: rgba(red, 0.8);
  }

  .remark {
    flex: 1;
    font-size: 14px;
    font-weight: 500;
    color: rgba(0, 0, 0, 0.7);
    text-align: right;
  }
}

.balance-record-item {
  .date {
    width: 200px;
    font-size: 14px;
    text-align: center;
    color: rgba(0, 0, 0, 0.5);
  }

  .desc {
    width: 300px;
    font-size: 14px;
    text-align: center;
    color: rgba(0, 0, 0, 0.5);
  }

  .charge {
    flex: 1;
    text-align: center;
    font-size: 15px;
    color: rgba(red, 0.8);
  }
}

.withdraw-box {
  width: 100%;
  height: auto;
  float: left;
  padding-top: 30px;

  .withdraw-input-box {
    width: 260px;
    height: auto;
    margin: 0 auto;

    .form-group {
      .text {
        color: rgba(0, 0, 0, 0.5);
      }
    }

    .form-input-item {
      width: 100%;
      height: 42px;
      float: left;
      padding-left: 20px;
      padding-right: 20px;
      color: #666666;
      font-size: 14px;
      border: 1px solid #dddddd;
      background-color: #f4f4f4;
      border-radius: 4px;
      margin-bottom: 20px;

      &:focus {
        background-color: white;
        outline: none;
      }
    }

    .withdraw-button {
      width: 100%;
      height: 42px;
      float: left;
      margin-bottom: 20px;
      font-size: 16px;
      border: 1px solid #eeeeee;
      text-align: center;
      outline: none;
      background-color: #eeeeee;
      color: #bbbbbb;
      border-radius: 4px;

      &.active {
        color: white;
        background-color: $primary;
        border: 1px solid $primary;

        &:hover {
          background-color: rgba($primary, 0.8);
        }
      }
    }
  }
}
</style>
<template>
  <div class="meedu-panel">
    <div class="title">
      <div class="text">我的邀请</div>
      <div class="right-menu">
        <a href="javascript:void(0)"
          >邀请余额：<small>￥</small
          >{{ $store.state.auth.user.invite_balance }}</a
        >
      </div>
    </div>
    <div class="body">
      <div class="tabs">
        <div
          class="tab-item"
          :class="{ active: tab === 'code' }"
          @click="tab = 'code'"
        >
          邀请码
        </div>
        <div
          class="tab-item"
          :class="{ active: tab === 'records' }"
          @click="tab = 'records'"
        >
          邀请记录
        </div>
        <div
          class="tab-item"
          :class="{ active: tab === 'balance_records' }"
          @click="tab = 'balance_records'"
        >
          余额明细
        </div>
        <div
          class="tab-item"
          :class="{ active: tab === 'withdraw_records' }"
          @click="tab = 'withdraw_records'"
        >
          提现记录
        </div>
        <div
          class="tab-item"
          :class="{ active: tab === 'withdraw' }"
          @click="tab = 'withdraw'"
        >
          提现
        </div>
      </div>

      <!-- 主体内容 -->
      <div class="contents">
        <!-- 邀请码 -->
        <template v-if="tab === 'code'">
          <div class="code-box" v-if="tab === 'code'">
            <div class="text" v-if="promoCode">{{ promoCode.code }}</div>
            <div class="create-button" @click="createPromoCode" v-else>
              您还未创建邀请码，点击创建
            </div>
          </div>
          <div class="code-desc" v-if="promoCode">
            <p>
              1.使用该优惠码的用户将获得
              <b>{{ promoCode.invited_user_reward }}</b> 元抵扣。
            </p>
            <p>
              2.当用户使用您的优惠码支付并完成订单的时候，您也将获得
              <b>{{ promoCode.invite_user_reward }}</b> 元奖励。
            </p>
            <p>
              3.使用您的优惠码完成支付的用户将会自动成为您的下级，TA的每一笔已支付订单您都将享有
              <b>{{ promoCode.per_order_draw * 100 }}%</b> 的抽成。
            </p>
          </div>
        </template>

        <!-- 邀请记录 -->
        <template v-if="tab === 'records'">
          <template v-if="data.length > 0">
            <div
              class="common-item invite-user-item"
              v-for="(item, index) in data"
              :key="index"
            >
              <div class="mobile">{{ item.mobile }}</div>
              <div class="date">{{ item.created_at }}</div>
            </div>
          </template>
          <none v-else></none>
        </template>

        <!-- 提现记录 -->
        <template v-if="tab === 'withdraw_records'">
          <template v-if="data.length > 0">
            <div
              class="common-item withdraw-record-item"
              v-for="item in data"
              :key="item.id"
            >
              <div class="date">{{ item.created_at }}</div>
              <div class="status">{{ item.status_text }}</div>
              <div class="charge"><small>￥</small>{{ item.total }}</div>
              <div class="remark">{{ item.remark }}</div>
            </div>
          </template>
          <none v-else></none>
        </template>

        <!-- 余额明细 -->
        <template v-if="tab === 'balance_records'">
          <template v-if="data.length > 0">
            <div
              class="common-item balance-record-item"
              v-for="item in data"
              :key="item.id"
            >
              <div class="date">{{ item.created_at }}</div>
              <div class="desc">{{ item.desc }}</div>
              <div class="charge">
                <template v-if="item.total > 0">
                  <small>￥</small>{{ item.total }}
                </template>
                <template v-else>
                  -<small>￥</small>{{ item.total * -1 }}
                </template>
              </div>
            </div>
          </template>
          <none v-else></none>
        </template>

        <!-- 提现 -->
        <div class="withdraw-box" v-if="tab === 'withdraw'">
          <div class="withdraw-input-box">
            <div class="form-group">
              <div class="text">渠道：{{ withdraw.channel }}</div>
            </div>
            <div class="form-group">
              <input
                type="number"
                class="form-input-item"
                placeholder="请输入提现金额"
                v-model="withdraw.total"
              />
            </div>
            <div class="form-group">
              <input
                type="text"
                class="form-input-item"
                v-model="withdraw.channel_account"
                placeholder="账户"
              />
            </div>
            <div class="form-group">
              <input
                type="text"
                class="form-input-item"
                v-model="withdraw.channel_name"
                placeholder="账户姓名"
              />
            </div>
            <div class="form-group">
              <button
                type="button"
                class="withdraw-button"
                :class="{
                  active:
                    withdraw.total >= 1 &&
                    withdraw.channel_name.length > 0 &&
                    withdraw.channel_account.length > 0,
                }"
                :disabled="
                  withdraw.total < 1 ||
                  withdraw.channel_name.length === 0 ||
                  withdraw.channel_account.length === 0
                "
                @click="submitWithdraw"
              >
                提交提现申请
              </button>
            </div>
          </div>
        </div>
      </div>

      <pagination
        v-if="tab !== 'code' && tab !== 'withdraw'"
        v-model="pagination.page"
        :has-next="hasNext"
      ></pagination>
    </div>
  </div>
</template>
<script>
export default {
  middleware: ["auth"],
  layout: "member",
  head() {
    return {
      title: "我的邀请",
    };
  },
  data() {
    return {
      tab: "code",
      promoCode: null,
      data: [],
      pagination: {
        page: 1,
        page_size: 10,
        total: 0,
      },
      hasNext: false,
      withdraw: {
        total: 0,
        channel: "支付宝",
        channel_name: "",
        channel_account: "",
      },
    };
  },
  mounted() {
    this.getPromoCode();
  },
  watch: {
    "pagination.page"() {
      if (this.tab === "records") {
        this.getRecords();
      } else if (this.tab === "balance_records") {
        this.getInviteBalanceRecords();
      } else if (this.tab === "withdraw_records") {
        this.getWithdrawRecords();
      }
    },
    tab() {
      this.hasNext = false;
      if (this.tab === "records") {
        this.getRecords(true);
      } else if (this.tab === "balance_records") {
        this.getInviteBalanceRecords(true);
      } else if (this.tab === "withdraw_records") {
        this.getWithdrawRecords(true);
      }
    },
  },
  methods: {
    getPromoCode() {
      this.$api.Member.PromoCode().then((res) => {
        if (res.code !== 0) {
          this.$toast.error(res.message);
          return;
        }
        let code = res.data;
        if (typeof code.id !== "undefined") {
          this.promoCode = code;
        }
      });
    },
    createPromoCode() {
      this.$api.Member.PromoCodeCreate().then((res) => {
        if (res.code !== 0) {
          this.$toast.error(res.message);
          return;
        }
        this.$toast.success("创建成功");
        this.getPromoCode();
      });
    },
    getRecords(reset = false) {
      if (reset) {
        this.pagination.page = 1;
      }
      this.$api.Member.InviteUsers(this.pagination).then((res) => {
        if (res.code !== 0) {
          this.$toast.error(res.message);
          return;
        }
        this.data = res.data.data;

        this.hasNext =
          res.data.total > this.pagination.page * this.pagination.page_size;
      });
    },
    getWithdrawRecords(reset = false) {
      if (reset) {
        this.pagination.page = 1;
      }
      this.$api.Member.WithdrawRecords(this.pagination).then((res) => {
        if (res.code !== 0) {
          this.$toast.error(res.message);
          return;
        }
        this.data = res.data.data;
        this.hasNext =
          res.data.total > this.pagination.page * this.pagination.page_size;
      });
    },
    getInviteBalanceRecords(reset = false) {
      if (reset) {
        this.pagination.page = 1;
      }
      this.$api.Member.InviteBalanceRecords(this.pagination).then((res) => {
        if (res.code !== 0) {
          this.$toast.error(res.message);
          return;
        }
        this.data = res.data.data;
        this.hasNext =
          res.data.total > this.pagination.page * this.pagination.page_size;
      });
    },
    submitWithdraw() {
      this.withdraw.total = parseInt(this.withdraw.total);
      if (this.withdraw.total < 1) {
        this.$toast.error("提现金额错误");
        return;
      }
      if (this.withdraw.total > this.$store.state.auth.user.invite_balance) {
        this.$toast.error("余额不足");
        return;
      }
      if (
        this.withdraw.channel_name.trim().length === 0 ||
        this.withdraw.channel_account.trim().length === 0
      ) {
        this.$toast.error("请输入提现账号和姓名");
        return;
      }
      this.$api.Member.Withdraw(this.withdraw).then((res) => {
        if (res.code !== 0) {
          this.$toast.error(res.message);
          return;
        }
        this.withdraw.total = 0;
        this.withdraw.channel_name = "";
        this.withdraw.channel_account = "";
        this.$toast.success("提现提交成功");
        this.tab = "withdraw_records";
      });
    },
  },
};
</script>