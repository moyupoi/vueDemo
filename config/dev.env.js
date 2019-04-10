'use strict'
var merge = require('webpack-merge')
var prodEnv = require('./prod.env')
// 环境
var isFormal = true
// 域名
var host = isFormal ? 'https://api-investment-pro.xinyongjinku.com' : 'https://api-investment-staging.xinyongjinku.com'
console.log(host)
module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  API_ROOT: `'${host}'`
})
