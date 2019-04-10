/* eslint-disable */
import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'
// import store from '../store/actions'
// import store from '@/store/index'
var store = null

// export const apiHeader = {
//   'Me-Api-Platform': 'WAP',
//   'Me-Api-Id': 'a9b0f5a803a83d9b5faaee5b9ba0b3175c6f925c1a59199e8cdc119f3fb1275a',
//   'Me-Api-Key': '5d43b13f353434326b5546ead381b79890e1d781ece3a4f1847f21634e7760e8'
// }

const instance = axios.create({
  baseURL: process.env.API_ROOT,
  timeout: 1500,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Authorization': 'eyJhbGciOiJIUzI1NiJ9.eyJpZCI6IjViZTk0NmJhN2ZmNjMxMTcyZTNjYTFiNiIsImV4cCI6MTU1NjY3Njg1Mn0.2-dHyTS2X8_LSe2yDC5iBYzkP7jbKaM5NyRCOWl38BI111'
  }
})

// 请求拦截器
// axios.interceptors.request.use(
//   config => {
//     // 判断是否存在token，如果存在的话，则每个http header都加上token
//     if (store.state.token) {
//       config.headers.Authorization = `token ${store.state.token}`
//     }
//     return config
//   },
//   err => {
//   return Promise.reject(err)
// })
//
// // 响应拦截器
// axios.interceptors.request.use(
//   config => {
//     if (store.state.token) {  // 判断是否存在token，如果存在的话，则每个http header都加上token
//       config.headers.Authorization = `token ${store.state.token}`
//     }
//     return config
//   },
//   err => {
//     return Promise.reject(err)
//   }
// )

// Add a request interceptor
instance.interceptors.request.use(function (config) {
  // Vue.prototype.$indicator.open()
  // Do something before request is sent
  // Object.assign(config.headers, tokenHeader(), uidHeader())
  return config
}, function (error) {
  // Do something with request error
  return Promise.reject(error)
})

// Add a response interceptor
instance.interceptors.response.use(function (response) {
  // Vue.prototype.$indicator.close()
  // Do something with response data
  if (response.data.message) {
    console.log(response.data.message)
  }
  return response
}, function (error) {
	// console.log(error);
  Vue.prototype.$indicator.close()
  // Do something with response error
  if (error.response) {
    if (error.response.status === 401 || error.response.status === 403) {
      Vue.prototype.$toast({
        message: '登录已过期，请重新登录。',
        position: 'middle',
        duration: 5000
      })
      // 清除token
      store.commit('REMOVE_TOKEN')
      // FIXME 重新登录 两种方式 一种是跳转路由，一种是重定向
      // window.location.href = '/login'
      // router.push('/login')
    } else if (error.response.status === 500) {
      Vue.prototype.$toast({
        message: '网络繁忙, 请稍后访问。',
        position: 'middle',
        duration: 5000
      })
    } else if (error.response.data && error.response.data.message) {
      Vue.prototype.$toast({
        message: error.response.data.message,
        position: 'middle',
        duration: 5000
      })
    }
  } else {
    Vue.prototype.$toast({
      message: '网络繁忙, 请稍后访问。',
      position: 'middle',
      duration: 5000
    })
  }
  console.log(error)
  return Promise.reject(error)
})

export const tokenHeader = () => {
  const token = cookie.get('accessToken')
  return { 'Authorization': `Bearer ${token}` }
}

export const uidHeader = () => {
  const openid = cookie.get('wx_openid')
  return { 'Me-WX-UID': openid }
}
var api = {
  // Frontend Moudule
  // login: (mobile, code) => instance.post('/v1/login', { mobile, code }),
  login: (params) => instance.post('/v1/users/wechat_login', params),
  mine: (params) => instance.get('/v1/users/mine', params),
  getEntrance: () => instance.get('/api/entrance'),
  mrReg: (params) => instance.post('/api/mr_signup', params),
}

api.install = function (Vue, options) {
  // 初始化会执行，options就是main里面传递过来的store
  store = options
  Vue.prototype.$api = api
  Vue.prototype.apiInstance = instance
}

export default api
