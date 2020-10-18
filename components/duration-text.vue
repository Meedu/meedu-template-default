<template>
  <span>{{ h }}:{{ m }}:{{ s }}</span>
</template>
<script>
export default {
  props: ["seconds"],
  data() {
    return {
      h: 0,
      m: 0,
      s: 0,
    };
  },
  mounted() {
    this.h = parseInt(this.seconds / 3600);
    this.m = parseInt((this.seconds - 3600 * this.h) / 60);
    this.s = this.seconds - this.h * 3600 - this.m * 60;

    this.h = this.h >= 10 ? this.h : "0" + this.h;
    this.m = this.m >= 10 ? this.m : "0" + this.m;
    this.s = this.s >= 10 ? this.s : "0" + this.s;
  },
};
</script>