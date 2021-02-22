<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav-bar"></detail-nav-bar>
    <scroll class="content" ref="scroll" :pull-up-load="true">
      <detail-swiper :topImages="topImages"></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-goods-info
        :detailInfo="detailInfo"
        @imageLoad="imageLoad"
      ></detail-goods-info>
      <detail-param-info :paramInfo="paramInfo"></detail-param-info>
    </scroll>
  </div>
</template>

<script>
import DetailNavBar from "../detail/childComps/DetailNavBar";
import DetailSwiper from "../detail/childComps/DetailSwiper";
import DetailBaseInfo from "../detail/childComps/DetailBaseInfo";
import DetailShopInfo from "../detail/childComps/DetailShopInfo";
import DetailGoodsInfo from "../detail/childComps/DetailGoodsInfo";
import DetailParamInfo from "../detail/childComps/DetailParamInfo";
import { getDetail, Goods, Shop, GoodsParam } from "../../network/detail";
import Scroll from "../../components/common/scroll/Scroll";
export default {
  name: "Detail",
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
    };
  },
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    Scroll,
    DetailGoodsInfo,
    DetailParamInfo,
  },
  created() {
    //1.保存传入的id
    this.iid = this.$route.params.iid;
    //2.根据idd请求详情数据
    getDetail(this.iid).then((res) => {
      console.log(res);
      //1.获取顶部的图片轮播数据
      const data = res.result;
      this.topImages = data.itemInfo.topImages;
      //2.获取商品信息
      this.goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );
      //3.获取店铺信息
      this.shop = new Shop(data.shopInfo);
      //4.获取展示的信息
      this.detailInfo = data.detailInfo;
      //5.获取参数信息
      this.paramInfo = new GoodsParam(
        data.itemParams.info,
        data.itemParams.rule
      );
    });
  },
  methods: {
    imageLoad() {
      this.$refs.scroll.refresh();
    },
  },
};
</script>

<style lang="" scoped>
#detail {
  position: relative;
  z-index: 9;
  background-color: #fff;
  height: 100vh;
}
.detail-nav-bar {
  position: relative;
  z-index: 9;
  background-color: white;
}
.content {
  height: calc(100% - 44px);
}
</style>