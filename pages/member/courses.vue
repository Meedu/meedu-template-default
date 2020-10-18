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
  margin-top: 30px;

  .course-item {
    width: 100%;
    height: auto;
    float: left;
    margin-bottom: 15px;
    display: flex;
    cursor: pointer;
    border: 1px solid rgba(0, 0, 0, 0.1);
    padding: 15px;
    border-radius: 10px;

    .thumb {
      width: 200px;
      height: 150px;
      margin-right: 30px;

      img {
        border-radius: 5px;
      }
    }

    .info {
      flex: 1;

      .title {
        width: 100%;
        height: auto;
        float: left;
        font-size: 18px;
        color: #333333;
        line-height: 30px;
        margin-bottom: 20px;
        white-space: nowrap;
        word-break: keep-all;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .stat {
        width: 100%;
        height: auto;
        float: left;
        font-size: 14px;
        color: rgba(0, 0, 0, 0.7);
        line-height: 30px;
        margin-bottom: 15px;
      }

      .buttons {
        width: 100%;
        height: auto;
        float: left;
        text-align: right;

        .detail-button {
          display: inline-block;
          width: 120px;
          height: auto;
          line-height: 44px;
          text-align: center;
          color: white;
          background-color: $primary;
          border-radius: 22px;

          &:hover {
            background-color: rgba($primary, 0.8);
            text-decoration: none;
          }
        }
      }
    }
  }

  .video-item {
    width: 100%;
    height: auto;
    float: left;
    background-color: rgba(0, 0, 0, 0.02);
    padding: 10px 30px;
    border-radius: 33px;
    display: flex;
    margin-bottom: 15px;

    &:hover {
      background-color: rgba(0, 0, 0, 0.04);
    }

    .title {
      flex: 1;
      text-align: left;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-size: 15px;
      color: #333333;
      line-height: 36px;
    }

    .duration {
      width: 80px;
      text-align: center;
      font-size: 14px;
      color: rgba(0, 0, 0, 0.7);
      line-height: 36px;
    }
    .buttons {
      width: auto;
      height: auto;
      padding-left: 15px;

      a {
        display: inline-block;
        width: 80px;
        height: 36px;
        border-radius: 18px;
        text-align: center;
        line-height: 36px;
        color: rgba(0, 0, 0, 0.7);
        background-color: rgba(0, 0, 0, 0.1);

        &:hover {
          background-color: $primary;
          color: white;
          text-decoration: none;
        }
      }
    }
  }
}
</style>
<template>
  <div class="meedu-panel">
    <div class="title">我的课程</div>
    <div class="body">
      <div class="tabs">
        <div
          class="tab-item"
          :class="{ active: tab === tabItem.key }"
          v-for="tabItem in tabs"
          :key="tabItem.key"
          @click="tab = tabItem.key"
        >
          <span>{{ tabItem.name }}</span>
        </div>
      </div>

      <div class="contents">
        <template v-if="tab === 'videos'">
          <template v-if="data.length > 0">
            <div class="video-item" v-for="video in data" :key="video.id">
              <div class="title">{{ video.title }}</div>
              <div class="duration">
                <duration-text :seconds="video.duration"></duration-text>
              </div>
              <div class="buttons">
                <nuxt-link :to="'/video/' + video.id">观看</nuxt-link>
              </div>
            </div>
          </template>
          <none v-else></none>
        </template>
        <template v-else>
          <template v-if="data.length > 0">
            <div class="course-item" v-for="course in data" :key="course.id">
              <div class="thumb">
                <img :src="course.thumb" width="200" height="150" />
              </div>
              <div class="info">
                <div class="title">{{ course.title }}</div>
                <div class="stat">
                  <span>{{ course.user_count }}人订阅</span>
                  <span>&nbsp;·&nbsp;</span>
                  <span>{{ course.videos_count }}节视频</span>
                </div>
                <div class="buttons">
                  <nuxt-link class="detail-button" :to="'/course/' + course.id"
                    >查看详情</nuxt-link
                  >
                </div>
              </div>
            </div>
          </template>
          <none v-else></none>
        </template>
      </div>

      <pagination v-model="pagination.page" :has-next="hasNext"></pagination>
    </div>
  </div>
</template>
<script>
export default {
  layout: "member",
  data() {
    return {
      tab: "courses",
      tabs: [
        {
          name: "我的课程",
          key: "courses",
        },
        {
          name: "我的视频",
          key: "videos",
        },
        {
          name: "观看记录",
          key: "history",
        },
        {
          name: "我的收藏",
          key: "like",
        },
      ],
      pagination: {
        page: 1,
        page_size: 8,
        total: 0,
      },
      hasNext: false,
      filter: {},
      data: [],
    };
  },
  mounted() {
    this.getCourses(true);
  },
  watch: {
    "pagination.page"() {
      if (this.tab === "courses") {
        this.getCourses();
      } else if (this.tab === "like") {
        this.getCoursesLike();
      } else if (this.tab === "history") {
        this.getCoursesHistory();
      } else if (this.tab === "videos") {
        this.getVideos();
      }
    },
    tab() {
      this.hasNext = false;
      this.data = [];
      if (this.tab === "courses") {
        this.getCourses(true);
      } else if (this.tab === "like") {
        this.getCoursesLike(true);
      } else if (this.tab === "history") {
        this.getCoursesHistory(true);
      } else if (this.tab === "videos") {
        this.getVideos(true);
      }
    },
  },
  methods: {
    getCourses(reset = false) {
      if (reset) {
        this.pagination.page = 1;
      }
      this.$api.Member.Courses(this.pagination).then((res) => {
        if (res.code !== 0) {
          this.$toast.error(res.message);
          return;
        }
        this.data = res.data.data;
        this.hasNext =
          res.data.total > this.pagination.page * this.pagination.page_size;
      });
    },
    getCoursesLike(reset = false) {
      if (reset) {
        this.pagination.page = 1;
      }
      this.$api.Member.LikeCourses(this.pagination).then((res) => {
        if (res.code !== 0) {
          this.$toast.error(res.message);
          return;
        }
        this.data = res.data.data;
        this.hasNext =
          res.data.total > this.pagination.page * this.pagination.page_size;
      });
    },
    getCoursesHistory(reset = false) {
      if (reset) {
        this.pagination.page = 1;
      }
      this.$api.Member.HistoryCourses(this.pagination).then((res) => {
        if (res.code !== 0) {
          this.$toast.error(res.message);
          return;
        }
        this.data = res.data.data;
        this.hasNext =
          res.data.total > this.pagination.page * this.pagination.page_size;
      });
    },
    getVideos(reset = false) {
      if (reset) {
        this.pagination.page = 1;
      }
      this.$api.Member.Videos(this.pagination).then((res) => {
        if (res.code !== 0) {
          this.$toast.error(res.message);
          return;
        }
        this.data = res.data.data;
        console.log(this.data);
        this.hasNext =
          res.data.total > this.pagination.page * this.pagination.page_size;
      });
    },
  },
};
</script>