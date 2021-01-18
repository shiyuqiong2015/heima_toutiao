import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
//初始化样式文件
import "@/styles/reset.less";

//引入路由
import router from "@/router/index.js";
// import router from "@/router";

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
