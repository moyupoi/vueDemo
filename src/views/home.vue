<template>
  <div>
    <span>123456</span>
    <router-link :to="{ name: 'user', params: { userId: 123 }}">User</router-link>
    <div class="name">{{token}}</div>
    <mt-range v-model="rangeValue"></mt-range>
    <mt-swipe :auto="0" class="mySwipe">
      <mt-swipe-item>
        <img src="../assets/images/1.png"></img>
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="../assets/images/1.png"></img>
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="../assets/images/1.png"></img>
      </mt-swipe-item>
    </mt-swipe>
    <mt-button class="login-button" type="primary" @click="login()">登录</mt-button>
    <button @click="log()">输出</button>
  </div>
</template>
<script>
import { Swipe, SwipeItem, Range } from 'mint-ui'
import cookie from '@/util/cookie'
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState({
      token: state => state.token,
      userInfo: state => state.userInfo
    })
  },
  data() {
    return {
      rangeValue: 100,
      UserInfo: ''
    }
  },
  components: {
    // [Cell.name]: Cell
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [Range.name]: Range
  },
  methods: {
    login() {
      this.$store.dispatch('setToken', 'aaa')
      console.log(this.token)
      const params = { name: '123', age: '456' }
      this.$api.mine(params).then((res) => {
        if (res.status === 200) {
          cookie.set('accessToken', res.data.token, { path: '/' })
          // window.localStorage.user = JSON.stringify(params)
          this.$store.dispatch('setUserInfo', res.data)
          // this.$store.commit('REMOVE_TOKEN')
          // console.log(this.$store)
          // this.$router.push({name: 'Home'})
        }
      })
    },
    log() {
      console.log(this.$store.getters.getToken, this.$store.getters.getUserInfo)
    }
  }
}
</script>
<style lang="scss">
  .mySwipe {
    height: 320px;
  }
  img {
    width: 375px;
    height: 400px;
    display: block;
  }
</style>
