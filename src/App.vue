<template>
  <div id="app">
    <!-- {{token}} -->
    <router-view />
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState({
      token: state => state.token
    })
  }
}
</script>
<style lang="scss">
@import './assets/stylesheets/reset.css';
body {
  background-color: #f8f8f8;
  overflow: hidden;
}
</style>
