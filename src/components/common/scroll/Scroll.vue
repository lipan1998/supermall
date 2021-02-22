<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "Scroll",
  props: {
    probeType: {
      type: Number,
      default: 0,
    },
    pullUpLoad: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      scroll: null,
    };
  },

  updated() {
    // 1.创建BScroll对象
    // this.scroll = new BScroll(this.$refs.wrapper, {
    //   click: true,
    //   probeType: this.probeType,
    //   pullUpLoad: this.pullUpLoad,
    // });
    let self = this;
    self.scroll = new BScroll(self.$refs.wrapper, {
      // 0，1 不监听滚动事件
      // 2 不监听惯性的滚动
      // 3 监听惯性的滚动
      // 解决返回顶部的问题
      scrollY: true,
      scrollX: false,
      startY: self.satrY, //调用上次加载后底部y轴的位置    ---**重点** starY在data里面初始值设置为0
      bounce: {
        top: true,
        bottom: true,
      },
      pullUpLoad: {
        threshold: -30,
      },
      probeType: this.probeType, // 上啦加载更多
      pullUpLoad: this.pullUpLoad,
      click: true,
    });
    //2.监听滚动的位置
    this.scroll.on("scroll", (position) => {
      // console.log(position);
      this.$emit("scroll", position);
    });
    //3.监听上拉事件
    this.scroll.on("pullingUp", () => {
      self.satrY = self.scroll.startY;
      this.$emit("pullingUp");
    });
  },
  methods: {
    scrollTo(x, y, time = 300) {
      this.scroll && this.scroll.scrollTo(x, y, time);
    },
    refresh() {
      this.scroll && this.scroll.refresh();
    },
    finishPullUp() {
      this.scroll && this.scroll.finishPullUp();
    },
    getScrollY() {
      this.scroll ? this.scroll.y : 0;
    },
  },
};
</script>

<style lang="" scoped>
</style>