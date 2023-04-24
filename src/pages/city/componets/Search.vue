<template>
  <div>
    <div class="search">
      <input class="search-input" type="text"  
      v-model="keyward"
      placeholder="输入城市名或拼音" />
    </div>
    <!-- 搜索内容 -->
    <div class="search-content" ref="search"  v-show="keyward">
      <ul>
        <li
          class="serch-item border-bottom"
          v-for="item of list"
          :key="item.id"
          @click="handleCityClick(item.name)"
        >
          {{ item.name }}
        </li>
        <li class="serch-item border-bottom" v-show="hasNoData">
          没有找到匹配数据
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import Bscroll from "better-scroll";
import { mapMutations } from "vuex";
export default {
  name: "CitySearch",
  props: {
    cities: Object,
  },
  data() {
    return {
      keyward: "",
      list: [], //存储包含城市关键词的项目
      timer: null,
    };
  }, 
  computed: {
    // 尽量在模板中使用计算属性，因而要写在computed中
    hasNoData() {
      return !this.list.length;
    },
  },
   watch: {
    keyward() {
      //节流函数
      if (this.timer) {
        clearTimeout(this.timer);
      }
      // keyward不存在时，清空列表项
      if (!this.keyward) {
        this.list = [];
        return;
      }
      this.timer = setTimeout(() => {
        const result = [];
        //二次遍历cities获取城市关键词
        for (let i in this.cities) {
          this.cities[i].forEach((value) => {
            /* spell或name中能搜索到关，添加到result中，后保存到list */
            if (
              value.spell.indexOf(this.keyward) > -1 ||
              value.name.indexOf(this.keyward) > -1
            ) {
              result.push(value);
            }
          });
        }
        // 则list中保存了 包含 城市关键词的项目
        this.list = result;
      }, 100);
    },
  },
  methods:{
    handleCityClick(city){
      // this.$store.commit("changeCity",city);
      this.changeCity(city);
      this.$router.push("/");
    },
    ...mapMutations(["changeCity"])
  },
  mounted () {
    // bug：使用后搜索内容无法左键拉取滚动，只能滚轮滚动
    // this.scroll = new Bscroll(this.$refs.search);
  },
};
</script>
<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl';

.search {
  height: 0.72rem;
  padding: 0 0.1rem;
  background: $bgColor;

  .search-input {
    box-sizing: border-box
    width: 100%;
    height: .62rem
    padding: 0 .2rem
    line-height: .62rem
    text-align: center
    border-radius: .06rem
    color: #666
  }
}
.search-content {
  z-index: 1;
  overflow: hidden;
  position: relative;
  // top: 1.58rem;
  left: 0;
  right: 0;
  bottom: 0;
  background: #eee;

  .serch-item {
    line-height: 0.62rem;
    padding-left: 0.2rem;
    background: #fff;
    color: #666;
  }
}
</style>