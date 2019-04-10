import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/home.vue'
// import api from './fetch/api'
import { getLocalStorage, setLocalStorage } from './util/common'
Vue.use(Router)

const routes = [
  {
    path: '/',
    component: () => import('./views/index'),
    meta: {
      title: '首页',
      // 表示必须登录才可以访问的页面
      requireAuthLogin: false
    }
  }, {
    name: 'home',
    component: () => import('./views/home'),
    meta: {
      title: '会员中心',
      requireAuthLogin: true
    }
  }, {
    name: 'user',
    component: () => import('./views/user'),
    meta: {
      title: '用户',
      requireAuthLogin: true
    }
  }
]

// 添加路由路径
routes.forEach(route => {
  route.path = route.path || '/' + (route.name || '')
})

// 路由模式为 帅气的 history 或者 很丑的 hash 参考文献: vue-router
const router = new Router({
  mode: 'history',
  routes
})

// 路由拦截
// to: 即将要进入的目标
// from: 当前导航正要离开的路由
// next: 要跳转的路由
router.beforeEach((to, from, next) => {
  // 配置 title
  const title = to.meta && to.meta.title
  if (title) {
    document.title = title
  }
  // 拦截是否需要登录
  if (to.meta.requireAuthLogin) {
    // 判断是否登录了
    const token = getLocalStorage('token')
    if (token) {
      // 已登录就直接跳转不做处理
      next()
    } else {
      login(to, next)
    }
  } else {
    next()
  }
})
// 登录用
function login(to, next) {
  // 这里调用登录接口获取token
  // const params = { code: 'xxx' }
  // api.login(params).then((res) => {
  //   if (res.status === 200) {
  //     setLocalStorage('token', 'xxx')
  //     next({
  //       path: '/home',
  //       // fullPath 登陆成功后跳转到该路由
  //       query: { redirect: to.fullPath }
  //     })
  //   }
  // })

  // 假数据
  setLocalStorage('token', 'xxx')
  next({
    path: '/home',
    // fullPath 登陆成功后跳转到该路由
    query: { redirect: to.fullPath }
  })
}

export default router
