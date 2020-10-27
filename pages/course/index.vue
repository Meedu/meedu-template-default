<style lang="scss" scoped>
.filter-box {
  width: 100%;
  height: 72px;
  float: left;
  margin-bottom: 30px;
  background: white;
  box-shadow: 0 4px 8px 0 #e5e5e5;
  border-radius: 8px;
  padding: 0 15px;

  .item {
    display: block;
    width: auto;
    height: 72px;
    float: left;
    margin-right: 60px;
    font-size: 16px;
    font-weight: 400;
    color: #666666;
    line-height: 72px;
    cursor: pointer;
    text-decoration: none;

    &.active,
    &:hover {
      color: $primary;
      font-weight: 600;
      border-bottom: 4px solid $primary;
      margin-bottom: -4px;
    }
  }
}
.courses-box {
  width: 100%;
  height: auto;
  float: left;

  .course-item {
    width: 255px;
    height: auto;
    float: left;
    margin-right: 30px;
    margin-bottom: 30px;

    &:nth-of-type(4n) {
      margin-right: 0;
    }
  }
}
</style>
<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <div class="filter-box">
          <nuxt-link
            to="/course"
            class="item"
            :class="{ active: scene.length === 0 }"
            >所有课程</nuxt-link
          >
          <nuxt-link
            to="?scene=free"
            class="item"
            :class="{ active: scene === 'free' }"
            >免费课程</nuxt-link
          >
          <nuxt-link
            to="?scene=recom"
            class="item"
            :class="{ active: scene === 'recom' }"
            >推荐课程</nuxt-link
          >
          <nuxt-link
            to="?scene=sub"
            class="item"
            :class="{ active: scene === 'sub' }"
            >订阅最多</nuxt-link
          >
        </div>
      </div>
      <div class="col-12">
        <div class="courses-box">
          <div class="course-item" v-for="course in list" :key="course.id">
            <vod-course-item :course="course"></vod-course-item>
          </div>
        </div>
      </div>

      <scroll @load-more="getMore" :loading="loading" :over="loadOver"></scroll>
    </div>
  </div>
</template>

<script>
export default {
  middleware: ["user"],
  layout: "app",
  head() {
    return {
      title: "全部课程",
    };
  },
  async asyncData({ app, query }) {
    let result = {
      total: 0,
      list: [],
    };

    let scene = query.scene || "";
    console.log(scene);

    let page = query.page;
    page = page ? page : 1;
    let data = await app.$api.Course.Index({
      page: page,
      size: 16,
      scene: scene,
    }).then((res) => {
      if (res.code !== 0) {
        return result;
      }

      return {
        total: res.data.total,
        list: res.data.data,
      };
    });

    return {
      total: data.total,
      list: data.list,
      scene: scene,
    };
  },
  watchQuery: ["scene"],
  data() {
    return {
      pagination: {
        page: 1,
        size: 16,
      },
      list: [],
      total: 0,
      scene: "",
      loading: false,
      loadOver: false,
    };
  },
  methods: {
    getMore() {
      if (this.loading || this.loadOver) {
        // 加载中
        return;
      }
      this.loading = true;
      this.pagination.page++;
      this.$api.Course.Index({
        page: this.pagination.page,
        size: this.pagination.size,
        scene: this.scene,
      }).then((res) => {
        if (res.code !== 0) {
          this.$toast.error(res.message);
          return;
        }
        if (res.data.data.length === 0) {
          this.loadOver = true;
        } else {
          this.list.push(...res.data.data);
        }

        setTimeout(() => {
          this.loading = false;
        }, 200);
      });
    },
  },
};
</script>