import Vue from "./Vue"

//此处不能export,因为index.html不少cmd模式,而是直接从全局要vue的作用域  
window.Vue = Vue;