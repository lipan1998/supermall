<template>
  <div class="back-top">
    <img src="@/assets/img/common/top.png" alt="" />
  </div>
</template>

<script>
export default {
  name: "BackTop",
  data() {
    return {};
  },
};
</script>

<style lang="" scoped>
.back-top {
  position: fixed;
  right: -40px;
  bottom: 55px;
}
.back-top img {
  width: 50%;
}
</style>