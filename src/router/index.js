// 配置路由,首先下载路由,然后导入路由,注册路由,创建路由实例并配置路由规则,把路由挂载在main.js当中的根实例上,最后导出路由
import Vue from 'vue'
import VueRouter from 'vue-router'
// 导入登录页的组件
import Login from '@/views/login'
Vue.use(VueRouter)
const router = new VueRouter({
  routes: [
    { name: 'login', path: '/login', component: Login }
  ]
})
export default router
