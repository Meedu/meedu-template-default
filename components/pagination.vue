<style lang="scss" scoped>
.pagination-box {
  width: 100%;
  height: auto;
  float: left;
  text-align: right;
  margin-top: 15px;

  .page-no {
    display: inline-block;
    width: 50px;
    height: auto;
    line-height: 44px;
    text-align: center;
    color: #333333;
    margin-left: 15px;
  }

  .prev-button,
  .next-button {
    display: inline-block;
    width: 120px;
    height: auto;
    line-height: 44px;
    background-color: $primary;
    color: white;
    text-align: center;
    border-radius: 22px;
    cursor: pointer;
    border: 0;
    outline: none;
    margin-left: 15px;

    &:hover {
      background-color: rgba($primary, 0.8);
      text-decoration: none;
    }

    &.disabled {
      background-color: rgba(0, 0, 0, 0.1);
      color: rgba(0, 0, 0, 0.2);
    }
  }
}
</style>
<template>
  <div class="pagination-box">
      <button
          class="prev-button"
          :class="{ disabled: page === 1 }"
          :disabled="page === 1"
          @click="page--"
        >
          上一页
        </button>
        <div class="page-no">第{{ value }}页</div>
        <button
          class="next-button"
          :class="{ disabled: !hasNext }"
          :disabled="!hasNext"
          @click="page++"
        >
          下一页
        </button>
      </div>
  </div>
</template>
<script>
export default {
  props: ["hasNext", "value"],
  data() {
    return {
      page: 1,
    };
  },
  mounted() {
    this.page = this.value;
  },
  watch: {
    value(newVal) {
      this.page = newVal;
    },
    page(newVal) {
      this.$emit("input", newVal);
    },
  },
};
</script>