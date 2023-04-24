<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <!-- swiper滑动 -->
      <swiper-slide v-for="(page, index) of pages" :key="index">
        <!-- icon图标 -->
        <div class="icon" v-for="item in page" :key="item.id">

          <!-- 图片展示 -->
          <div class="icon-img">
            <img class="iocn-img-content" :src="item.imgUrl" />
          </div>
          
          <!-- 文本介绍 -->
          <p class="icon-desc">{{ item.desc }}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
export default {
  name: "HomeIcons",
  props:{
    list:Array
  },
  data() {
    return {
      swiperOption:{
        autplay:false  //取消swiper自动滚动
      }
    }
  },
  computed: {
    // 将一维的九条数组，拆分为二维数组 让页码与数据项关联
    pages() {
      const pages = [];
      this.list.forEach((item, index) => {
        // 当前下标数据应该展示在轮播图第几页
        const page = Math.floor(index / 8);
        if (!pages[page]) {
          pages[page] = [];
        }
        pages[page].push(item);
      });
      return pages;
    },
  },
};
</script>
<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl';
// 引入超出文本出现省略号方法 ellipis() 
@import '~@/assets/styles/mixins.styl';

.icons/deep/.swiper-container {
  height: 0;
  padding-bottom: 50%;
}
.icons{
  margin-top: .1rem
  .icon {
    position: relative;
    overflow: hidden;
    float: left;
    width: 25%;
    height: 0;
    padding-bottom: 25%;

    .icon-img {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0.44rem;
      box-sizing: border-box;
      padding: 0.1rem;

      .iocn-img-content {
        display: block;
        margin: 0 auto;
        height: 100%;
      }
    }

    .icon-desc {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 10px;
      // height: 0.44rem;
      // line-height: 0.44rem;
      text-align: center;
      color: $darkTextColor;
      // overflow: hidden;
      // white-space: nowrap;
      // text-overflow: ellipsis;
      ellipis()   //用于在指定位置插入省略号
    }
  }
}
</style>