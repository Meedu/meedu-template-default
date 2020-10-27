<style lang="scss" scoped>
.loading-bar {
  width: 100%;
  height: auto;
  float: left;
  padding-top: 30px;
  padding-bottom: 30px;
  text-align: center;
  font-size: 15px;
  line-height: 1;
  color: #cccccc;
}
</style>
<template>
  <div class="col-12">
    <div class="loading-bar">
      <span v-if="loading">加载中...</span>
      <span v-if="over">已全部加载了哦</span>
    </div>
  </div>
</template>
<script>
export default {
  props: ["loading", "over"],
  mounted() {
    this.$nextTick(() => {
      window.addEventListener("scroll", this.scrollHandler);
    });
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.scrollHandler, true);
  },
  methods: {
    scrollHandler() {
      let scroll =
        this.getScrollTop() + this.getWindowHeight() - this.getScrollHeight();
      if (scroll === 0 && this.loading === false) {
        this.$emit("load-more");
      }
    },
    //滚动条在Y轴上的滚动距离
    getScrollTop() {
      var documentScrollTop = 0;
      documentScrollTop = document.documentElement.scrollTop;
      return documentScrollTop;
    },
    //文档的总高度
    getScrollHeight() {
      var documentScrollHeight = 0;
      documentScrollHeight = document.documentElement.scrollHeight;
      return documentScrollHeight;
    },
    //浏览器视口的高度
    getWindowHeight() {
      var windowHeight = 0;
      windowHeight = document.documentElement.clientHeight;
      return windowHeight;
    },
  },
};
</script>