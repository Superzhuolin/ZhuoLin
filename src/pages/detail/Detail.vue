<template>
  <div>
    <detail-banner  
      :sightName="sightName"
      :bannerImg="bannerImg"
      :bannerImgs="gallaryImgs"></detail-banner>
    <detail-header></detail-header>
    <!-- 撑开页面宽度 -->
    <div class="content">
      <!-- 递归组件 实现页面分支 -->
      <detail-list :list="list"></detail-list>
    </div>
  </div>
</template>

<script>
import DetailBanner from "./components/Banner.vue";
import DetailHeader from "./components/Header.vue";
import DetailList from "./components/List.vue";
import axios from "axios";
export default {
  name: "Detail",
  components: {
    DetailBanner,
    DetailHeader,
    DetailList,
  },
  data() {
    return {
      sightName: "",
      bannerImg: "",
      gallaryImgs: [],  
      list: [],
    };
  },
  methods:{
    getDetailInfo(){
      axios.get("/api/detail.json?id=",{
        params:{
          id:this.$route.params.id
        }
      }).then(this.handelGetDetaSucc)
    },
    handelGetDetaSucc(res){
      res = res.data
      if(res.ret && res.data){
        const data = res.data
        this.sightName=data.sightName;
        this.bannerImg=data.bannerImg;
        this.gallaryImgs=data.gallaryImgs;
        this.list=data.categoryList;
      }

    }
  },
  mounted(){
    this.getDetailInfo();
  },
  activated(){ //页面重新渲染时执行
      this.getDetailInfo();
  }
};
</script>
<style lang="stylus" scoped>
.content {
  height: 50rem;
}
</style>