// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  plugins: [
    require('postcss-px2rem')({
  	  remUnit: 37.5, // 基于的字体大小
      unitPrecision: 5,
      propList: ['*'], // 存储哪些将被转换的属性列表 例: ['*', '!border*']
      selectorBlackList: [], // 过滤数组 例: ['fs'] 为fs-xl类名
      replace: true,
      mediaQuery: false,
      minPixelValue: 12 // 小于12px的样式都不被转换
    })
  ]
}
