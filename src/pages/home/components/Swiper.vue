<template>
  <div class="wrapper">
    <swiper :options="swiperOption" v-if="showSwiper">
      <!-- <swiper-slide v-for="item of list" :key="item.id"> -->
      <!-- 轮播画面 -->
      <swiper-slide v-for="item of list" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" />
      </swiper-slide>

      <!-- 分页器组件 在组件下方显示圆点指示器-->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
export default {
  name: "HomeSwiper",
  props:{
    list:Array
  },
  components: {},  
  data() {
    return {
      swiperOption: {
        pagination: ".swiper-pagination", //轮播小白点
        loop: "true", //循环轮播
        speed: 2000, //滑动速度
        autoplay: {
          delay: 200, //自动切换时间间隔
          stopOnLastSlide: false //是否切换到最后一幅图时停止自动切换
        },
        // 避免手动滑了之后就停止自动轮播，去掉autoplay可以放入autoplay对象中
        autoplayDisableOnInteraction: false
      },
    };
  },
  computed:{
    showSwiper(){
      return this.list.length;
    }
  }
};
</script>
<style lang="stylus" scoped>
.wrapper /deep/.swiper-pagination-bullet-active {
  background: #fff !important;
}

.wrapper {
  overflow: hidden;
  width: 100%;
  height: 0;
  padding-bottom: 31.25%;
  background: #eee;

  .swiper-img {
    width: 100%;
  }
}
</style>
