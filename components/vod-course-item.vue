<style lang="scss" scoped>
.vod-course-item {
  width: 100%;
  height: auto;
  float: left;
  display: block;
  border-radius: 8px;
  background-color: white;
  transition: all 0.3s ease-in-out;

  &:hover {
    cursor: pointer;
    transform: scale(1.05);
  }

  .course-thumb {
    width: 255px;
    height: 191.25px;
    float: left;
    img {
      width: 255px;
      height: 191.25px;
      border-top-left-radius: 8px;
      border-top-right-radius: 8px;
    }
  }

  .title {
    width: 100%;
    height: auto;
    float: left;
    padding: 16px 16px 10px 16px;
    white-space: nowrap;
    word-break: keep-all;
    overflow: hidden;
    text-overflow: ellipsis;
    color: rgba(51, 51, 51, 1);
    font-size: 16px;
    font-weight: 500;
    line-height: 1;
  }

  .info {
    width: 100%;
    height: auto;
    float: left;
    padding: 0 16px 10px 16px;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    display: flex;
    line-height: 20px;

    .user-count {
      flex: 1;
      text-align: left;
      font-size: 12px;
      color: rgb(153, 153, 153);
    }

    .charge {
      flex: 1;
      text-align: right;

      .text {
        color: rgba(red, 0.8);
        font-size: 14px;
        font-weight: bold;
      }
    }
  }
}
</style>
<template>
  <nuxt-link :to="'/course/' + course.id" class="vod-course-item">
    <div class="course-thumb">
      <img :src="course.thumb" width="100%" />
    </div>
    <div class="title">
      {{ course.title }}
    </div>
    <div class="info">
      <div class="user-count">{{ course.user_count }}人已购买</div>
      <div class="charge">
        <span class="text" v-if="course.is_free === 1">免费</span>
        <span class="text" v-else>￥{{ course.charge }}</span>
      </div>
    </div>
  </nuxt-link>
</template>
<script>
export default {
  props: ["course"],
  data() {
    return {};
  },
};
</script>