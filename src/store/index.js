import Vue from 'vue'
import Vuex from 'vuex'
import state from "./state"
import mutations from "./mutations"
// 让Vue使用vuex插件
Vue.use(Vuex)
//导出使用 new Vuex.Store创建的仓库
export default new Vuex.Store({  
    state, //公共数据存储在state中，组件该数据
    mutations,  // 存放着一个个对头部的修改
    // getters:{
    //     doubleCity(state){
    //         return state.city +" "+ state.city
    //     },
    //     doubleCity:state=>state.city +" "+ state.city //简写
    // }
})