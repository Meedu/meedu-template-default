<style lang="scss" scoped>
.vod-course-item {
  width: 280px;
  height: auto;
  float: left;
  border: 8px;
  background-color: white;

  .course-thumb {
    width: 280px;
    height: 210px;
    float: left;

    img {
      border-top-left-radius: 8px;
      border-top-right-radius: 8px;
    }
  }

  .title {
    width: 100%;
    height: auto;
    float: left;
    padding: 5px 10px;
    white-space: nowrap;
    word-break: keep-all;
    overflow: hidden;
    text-overflow: ellipsis;
    color: #333;
    font-size: 15px;
  }

  .info {
    width: 100%;
    height: auto;
    float: left;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    display: flex;

    .user-count {
      flex: 1;
      text-align: left;
      font-size: 14px;
      color: #999999;
    }

    .charge {
      flex: 1;
      text-align: right;
      .free {
        display: inline-block;
        padding: 5px 8px;
        background-color: rgba(green, 0.7);
        color: white;
        font-size: 14px;
      }

      .text {
        color: raba(red, 0.8);
        font-size: 15px;

        small {
          font-size: 13px;
        }
      }
    }
  }
}
</style>
<template>
  <div class="vod-course-item">
    <div class="course-thumb">
      <img :src="course.thumb" width="280" height="210" />
    </div>
    <div class="title">
      {{ course.title }}
    </div>
    <div class="info">
      <div class="user-count">{{ course.user_count }}人</div>
      <div class="charge">
        <span class="free" v-if="course.is_free === 1">免费</span>
        <span class="text" v-else><small>￥</small>{{ course.charge }}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["course"],
  data() {
    return {};
  },
};
</script>