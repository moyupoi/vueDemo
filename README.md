# vueDemo

## 依赖
- vue v2.5
- vuex v3.0 状态管理方案
- vant v1.0 移动端组件库
- mint-ui v2.2 移动端组件库
- axios 基于promise的HTTP库
- sass v4.9.2
- karma 测试执行过程管理工具
- e2e 前端测试
- webpack v3.11
- eslint 严谨效验格式规范

## 常用操作

``` bash
# 安装
npm install

# 服务启动 localhost:3002
npm run dev

# 打包
npm run build

# 进行构建，用于分析打包大小
npm run build --report

# 单元测试
npm run unit

# e2e测试
npm run e2e

# 运行所有测试
npm test
```

## 目录结构

 - 整体结构:

```
├── dist 打包文件
├── src
|   ├── assets     公有样式、图片、其他
|   ├── components 组件
|   ├── fetch      请求
|   ├── store      数据仓库/数据缓存
|   ├── util       工具函数
|   ├── views      页面
|   ├── App        根组件
|   ├── main       入口/各种配置
|   ├── router     路由目录
├── static
```
 - 组件:

 ```
├── TitleBar       头部
 ```

 - 工具方法:

 ```
├── common         综合工具类
├── cookie         顾名思义 目前用不到
├── rem            计算rem 可修改倍率
 ```

## 常见问题（收集中）
