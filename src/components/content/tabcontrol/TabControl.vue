<template>
  <div class="tab-control">
    <div
      v-for="(item, index) in titles"
      :key="index"
      :class="{ active: index === currentIndex }"
      @click="itemClick(index)"
      class="tab-control-item"
    >
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      currentIndex: 0,
    };
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index;
      this.$emit("tabClick", index);
    },
  },
};
</script>

<style lang="" scoped>
.tab-control {
  display: flex;
  height: 44px;
  line-height: 44px;
  font-size: 15px;
  background-color: #fff;
}
.tab-control-item {
  flex: 1;
  text-align: center;
}
.active {
  color: var(--color-tint);
}
.active span {
  border-bottom: 2px solid var(--color-tint);
  padding-bottom: 3px;
}
</style>