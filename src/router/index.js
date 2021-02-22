import Vue from 'vue'
import Router from 'vue-router'
const Home = () => import('../views/home/Home')
const Category = () => import('../views/category/Category')
const Profile = () => import('../views/profile/Profile')
const Shopcard = () => import('../views/shopcard/Shopcard')
const Detail = () => import('../views/detail/Detail')

//1.安装插件
Vue.use(Router)

//解决ElementUI导航栏中的vue-router重复点击报错的问题
const originalPush = Router.prototype.push
Router.prototype.push = function pusn(location) {
  return originalPush.call(this, location).catch(err => err)
}

//2.创建路由对象
const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/shopcard',
    component: Shopcard
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    path: '/detail/:iid',//动态路由
    component: Detail
  }

]
const router = new Router({
  routes,
  mode: 'history'
})

//3.导出路由
export default router
// export default new Router({
//   routes
// })
