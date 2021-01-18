import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);



// 配置路由
const router = new VueRouter({
  routes: [{
    name: 'login',
    path: '/login',
    component: () => import('@/views/login.vue')
  }]
})


// 暴露路由
export default router;
