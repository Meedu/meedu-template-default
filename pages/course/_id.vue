<style lang="scss" scoped>
.course-banner {
  width: 100%;
  height: auto;
  float: left;
  display: flex;
  background-color: white;
  padding: 30px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;

  .course-thumb {
    position: relative;
    width: 320px;
    height: 240px;
    margin-right: 50px;

    img {
      border-radius: 4px;
    }
  }

  .course-info-box {
    flex: 1;

    .title {
      width: 100%;
      height: auto;
      float: left;
      display: flex;
      padding-top: 10px;
      margin-bottom: 20px;
      line-height: 24px;

      .text {
        flex: 1;
        font-size: 24px;
        font-weight: 500;
        color: #333333;
      }

      .right-menus {
        width: auto;

        a {
          font-size: 14px;
          font-weight: 400;
          color: #cccccc;
          line-height: 14px;
          text-decoration: none;

          img {
            margin-right: 3px;
          }
        }
      }
    }

    .short-desc {
      width: 100%;
      height: auto;
      float: left;
      min-height: 90px;
      font-size: 16px;
      font-weight: 400;
      color: #666666;
      line-height: 30px;
      margin-bottom: 50px;
    }

    .buttons {
      width: 100%;
      height: auto;
      float: left;
      line-height: 40px;

      .charge {
        font-size: 24px;
        font-weight: 600;
        color: #ff4040;
        margin-right: 50px;
      }

      .buy-button {
        display: inline-block;
        width: 104px;
        height: 40px;
        background: $primary;
        border-radius: 20px;
        font-size: 16px;
        font-weight: 400;
        color: white;
        text-align: center;
        margin-right: 40px;
        text-decoration: none;
      }

      .buy-role {
        display: inline-block;
        width: auto;
        text-decoration: none;
        color: #e1a507;
        font-size: 16px;
        font-weight: 400;
      }
    }
  }
}

.course-content {
  width: 100%;
  height: auto;
  float: left;

  .tabs {
    width: 100%;
    height: auto;
    float: left;
    background-color: white;
    padding-left: 30px;
    box-shadow: 0 4px 8px 0 #e5e5e5;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;

    .tab-item {
      width: auto;
      height: 60px;
      line-height: 60px;
      float: left;
      margin-right: 60px;
      font-size: 16px;
      font-weight: 400;
      cursor: pointer;

      &.active {
        font-weight: 600;
        color: $primary;
        border-bottom: 4px solid $primary;
        margin-bottom: -4px;
      }
    }
  }
}

.course-desc,
.course-chapter,
.course-comment,
.course-attach {
  width: 100%;
  height: auto;
  float: left;
  margin-bottom: 150px;
  margin-top: 30px;
  line-height: 1.2;

  p {
    margin: 0;
    padding: 0;
  }

  img {
    max-width: 100% !important;
  }
}

.course-chapter {
  .video-item {
    background-color: white;
    width: 100%;
    height: auto;
    float: left;
    padding: 18px 30px;
    display: flex;
    line-height: 24px;

    &:first-child {
      border-top-left-radius: 8px;
      border-top-right-radius: 8px;
    }

    &:last-child {
      border-bottom-left-radius: 8px;
      border-bottom-right-radius: 8px;
    }

    .icon {
      width: 24px;
      height: 24px;
      margin-right: 15px;

      .default {
        display: block;
      }

      .active {
        display: none;
      }
    }

    .title {
      flex: 1;
      font-size: 16px;
      font-weight: 400;
      color: #333333;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      padding-right: 15px;

      .try-label {
        display: inline;
        padding: 2px 6px;
        border-radius: 3px;
        background-color: rgba(red, 0.8);
        color: white;
        font-size: 12px;
        margin-right: 5px;
      }
    }

    .duration {
      width: auto;
      height: auto;
      color: #ccc;
    }

    &:hover {
      cursor: pointer;
      background-color: rgba($primary, 0.1);

      .icon {
        .default {
          display: none;
        }
        .active {
          display: block;
        }
      }
    }
  }

  .chapter-item {
    width: 100%;
    height: auto;
    float: left;

    > .title {
      width: 100%;
      height: auto;
      float: left;
      padding-bottom: 30px;
      padding-left: 30px;
      font-size: 16px;
      font-weight: 500;
      color: #333333;
      line-height: 16px;
    }

    > .chapter-videos-box {
      width: 100%;
      height: auto;
      float: left;
      background-color: white;
      border-radius: 8px;
      box-shadow: 0 4px 8px 0 #e5e5e5;
      margin-bottom: 50px;
    }
  }
}

.course-comment {
  .course-comment-input-box {
    width: 100%;
    height: auto;
    float: left;

    .title {
      width: 100%;
      height: auto;
      float: left;
      padding-left: 30px;
      padding-bottom: 30px;
      font-size: 16px;
      font-weight: 500;
      color: #333333;
      line-height: 16px;
    }

    .content {
      width: 100%;
      height: auto;
      float: left;
      padding: 30px;
      border-radius: 8px;
      background-color: white;
      box-shadow: 0 4px 8px 0 #e5e5e5;

      .input {
        width: 100%;
        height: auto;
        float: left;
        margin-bottom: 20px;
        textarea {
          resize: none;
        }
      }

      .buttons {
        width: 100%;
        height: auto;
        float: left;
        text-align: right;

        .course-comment-submit-button {
          width: 104px;
          height: 40px;
          line-height: 40px;
          border: none;
          background: $primary;
          border-radius: 20px;
          text-align: center;
          font-size: 16px;
          font-weight: 400;
          color: #ffffff;
          outline: none;
          &:hover {
            background-color: rgba($primary, 0.9);
          }

          &:focus {
            outline: none;
          }
        }
      }
    }
  }

  .commens-box {
    width: 100%;
    height: auto;
    float: left;
    margin-top: 30px;

    .comment-item {
      width: 100%;
      height: auto;
      float: left;
      background-color: white;
      border-radius: 8px;
      padding: 20px 30px;
      display: flex;
      box-shadow: 0 4px 8px 0 #e5e5e5;
      margin-bottom: 10px;

      .avatar {
        width: 70px;
        height: 70px;
        margin-right: 20px;
        img {
          border-radius: 50%;
        }
      }

      .content {
        flex: 1;
        .nickname {
          width: 100%;
          height: auto;
          float: left;
          font-size: 14px;
          font-weight: 600;
          color: #999999;
          line-height: 14px;
          margin-bottom: 15px;
        }

        .comment-content {
          width: 100%;
          height: auto;
          float: left;
          font-size: 16px;
          font-weight: 400;
          color: #333333;
          line-height: 16px;
          word-break: break-all;
          margin-bottom: 20px;
        }

        .date {
          width: 100%;
          height: auto;
          float: left;
          font-size: 12px;
          font-weight: 400;
          color: #cccccc;
          line-height: 12px;
        }
      }
    }
  }
}

.course-attach {
  width: 100%;
  height: auto;
  float: left;

  .attach-item {
    display: block;
    width: 100%;
    height: auto;
    float: left;
    margin-bottom: 10px;
    background-color: white;
    padding: 20px 30px;
    border-radius: 8px;
    display: flex;
    line-height: 15px;
    text-decoration: none;

    .name {
      flex: 1;
      font-size: 15px;
      color: #333333;
    }

    .size {
      width: auto;
      height: auto;
      font-size: 13px;
      color: #cccccc;
    }

    &:hover {
      cursor: pointer;
      background-color: rgba($primary, 0.1);
    }
  }
}
</style>
<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <div class="course-banner">
          <div class="course-thumb">
            <img :src="course.thumb" width="320" height="240" />
          </div>
          <div class="course-info-box">
            <div class="title">
              <div class="text">{{ course.title }}</div>
              <div class="right-menus">
                <a
                  href="javascript:void(0)"
                  @click="collectHandler"
                  v-if="isCollect"
                >
                  <img
                    src="~/assets/icons/like-hover.png"
                    width="24"
                    height="24"
                  />
                  取消收藏
                </a>
                <a href="javascript:void(0)" @click="collectHandler" v-else>
                  <img src="~/assets/icons/like.png" width="24" height="24" />
                  收藏
                </a>
              </div>
            </div>
            <div class="short-desc">{{ course.short_description }}</div>
            <div class="buttons" v-if="isBuy === false && course.charge > 0">
              <span class="charge"><small>￥</small>{{ course.charge }} </span>
              <nuxt-link class="buy-button" to="/order/">订阅课程</nuxt-link>
              <nuxt-link class="buy-role" to="/role/"
                >开通会员全站免费看</nuxt-link
              >
            </div>
          </div>
        </div>

        <div class="course-content">
          <div class="tabs">
            <div
              class="tab-item"
              :class="{ active: tab === 'desc' }"
              @click="tab = 'desc'"
            >
              课程介绍
            </div>
            <div
              class="tab-item"
              :class="{ active: tab === 'chapters' }"
              @click="tab = 'chapters'"
            >
              课程章节
            </div>
            <div
              class="tab-item"
              :class="{ active: tab === 'comments' }"
              @click="tab = 'comments'"
            >
              课程评论
            </div>
            <div
              class="tab-item"
              :class="{ active: tab === 'attach' }"
              @click="tab = 'attach'"
            >
              课程附件
            </div>
          </div>
        </div>

        <div class="course-desc" ref="desc" v-show="tab === 'desc'">
          <div v-html="course.render_desc"></div>
        </div>

        <div class="course-chapter" v-show="tab === 'chapters'">
          <template v-if="chapters.length === 0">
            <div class="video-item" v-for="video in videos[0]" :key="video.id">
              <div class="icon">
                <img
                  src="~/assets/icons/player.png"
                  class="default"
                  height="24"
                  width="24"
                />
                <img
                  src="~/assets/icons/player-hover.png"
                  class="active"
                  height="24"
                  width="24"
                />
              </div>
              <div class="title">
                <span
                  class="try-label"
                  v-if="video.free_seconds > 0 || video.charge === 0"
                  >试看</span
                >
                {{ video.title }}
              </div>
              <div class="duration">
                <duration-text :seconds="video.duration"></duration-text>
              </div>
            </div>
          </template>
          <template v-else>
            <div
              class="chapter-item"
              v-for="chapter in chapters"
              :key="chapter.id"
            >
              <div class="title">{{ chapter.title }}</div>
              <div class="chapter-videos-box">
                <div
                  class="video-item"
                  v-for="video in videos[chapter.id]"
                  :key="video.id"
                >
                  <div class="icon">
                    <img
                      src="~/assets/icons/player.png"
                      class="default"
                      height="24"
                      width="24"
                    />
                    <img
                      src="~/assets/icons/player-hover.png"
                      class="active"
                      height="24"
                      width="24"
                    />
                  </div>
                  <div class="title">
                    <span
                      class="try-label"
                      v-if="video.free_seconds > 0 || video.charge === 0"
                      >试看</span
                    >
                    {{ video.title }}
                  </div>
                  <div class="duration">
                    <duration-text :seconds="video.duration"></duration-text>
                  </div>
                </div>
              </div>
            </div>
          </template>
        </div>

        <div class="course-comment" v-show="tab === 'comments'">
          <div class="course-comment-input-box">
            <div class="title">课程讨论</div>
            <div class="content">
              <div class="input">
                <textarea
                  rows="3"
                  class="form-control"
                  placeholder="请输入内容"
                  v-model="comment.content"
                ></textarea>
              </div>
              <div class="buttons">
                <button
                  class="course-comment-submit-button"
                  @click="submitComment"
                >
                  评论
                </button>
              </div>
            </div>
          </div>

          <div class="commens-box">
            <template v-if="comments.data.length > 0">
              <template v-for="comment in comments.data">
                <div
                  class="comment-item"
                  :key="comment.id"
                  v-if="typeof comments.users[comment.user_id] !== 'undefined'"
                >
                  <div class="avatar">
                    <img
                      :src="comments.users[comment.user_id].avatar"
                      width="70"
                      height="70"
                    />
                  </div>
                  <div class="content">
                    <div class="nickname">
                      {{ comments.users[comment.user_id].nick_name }}
                    </div>
                    <div class="comment-content">
                      <div v-html="comment.render_content"></div>
                    </div>
                    <div class="date">
                      {{ comment.created_at }}
                    </div>
                  </div>
                </div>
              </template>
            </template>

            <none v-else></none>
          </div>
        </div>

        <div class="course-attach" v-show="tab === 'attach'">
          <template v-if="attach.length > 0">
            <a
              :href="config.url + '/course/attach/' + item.id + '/download'"
              class="attach-item"
              target="_blank"
              v-for="item in attach"
              :key="item.id"
            >
              <div class="name">{{ item.name }}</div>
              <div class="size">{{ parseInt(item.size / 1024) }}kb</div>
            </a>
          </template>
          <none v-else></none>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import config from "~/config/index";

export default {
  layout: "app",
  middleware: ["user"],
  head() {
    return {
      title: this.course.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.course.seo_description,
        },
        {
          hid: "keywords",
          name: "keywords",
          content: this.course.seo_keywords,
        },
      ],
    };
  },
  async asyncData({ app, params }) {
    let [courseData, commentData] = await Promise.all([
      app.$api.Course.Detail(params.id).then((res) => {
        if (res.code !== 0) {
          return {};
        }
        return {
          attach: res.data.attach,
          course: res.data.course,
          chapters: res.data.chapters,
          isBuy: res.data.isBuy,
          isCollect: res.data.isCollect,
          videoWatchedProgress: res.data.videoWatchedProgress,
          videos: res.data.videos,
        };
      }),
      app.$api.Course.Comments(params.id, {
        page: 1,
        page_size: 10,
      }).then((res) => {
        if (res.code !== 0) {
          return {};
        }
        return {
          data: res.data.comments,
          users: res.data.users,
        };
      }),
    ]);
    courseData.comments = commentData;
    return courseData;
  },
  data() {
    return {
      course: {},
      attach: [],
      chapters: [],
      isBuy: false,
      isCollect: false,
      videoWatchedProgress: [],
      videos: {},
      config: config,
      tab: "desc",
      comments: {
        data: [],
        users: [],
      },
      comment: {
        content: "",
      },
    };
  },
  methods: {
    collectHandler() {
      this.$api.Course.Like(this.course.id).then((res) => {
        if (res.code !== 0) {
          this.$toast.error(res.message);
          return;
        }
        this.isCollect = !this.isCollect;
      });
    },
    submitComment() {
      if (this.comment.content.trim().length < 6) {
        this.$toast.error("评论内容不能少于6个字");
        return;
      }
      if (this.$store.state.auth.auth === false) {
        this.$toast.error("请登录");
        this.$router.push("/auth/login");
        return;
      }
      this.$api.Course.SubmitComment(this.$route.params.id, {
        content: this.comment.content,
      }).then((res) => {
        if (res.code !== 0) {
          this.$toast.error(res.message);
          return;
        }
        this.$toast.success("成功");
        setTimeout(() => {
          window.location.reload();
        }, 500);
      });
    },
  },
};
</script>