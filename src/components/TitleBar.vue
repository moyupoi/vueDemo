<template>
  <div class="titleBar">
    <img src="../assets/images/1.png" class="logo"></img>
    <div class="directory">
      <span>游戏</span>
      <span>其他栏目</span>
      <span>个人中心</span>
    </div>
    <div class="search">
      <input type="text" name="" value=""/>
      <button type="button">搜索</button>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
      }
    },
    methods: {
    }
  }
</script>
<style lang="scss">
  .titleBar {
    height: 30px;
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    .logo {
      display: inline-block;
      width: 30px;
      height: 30px;
    }
    .directory {
      height: 30px;
      display: inline-block;
      span {
        font-size: 18px;
        line-height: 30px;
      }
    }
    .search {
      height: 30px;
      display: inline-block;
      input {

      }
      button {

      }
    }
  }
</style>
