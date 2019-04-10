<template>
  <div class="gameTopUp">
    <TitleBar></TitleBar>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import TitleBar from '../components/TitleBar'
export default {
  components: {
    TitleBar
  },
  computed: {
    ...mapState({
      gameList: state => state.gameList
    })
  },
  data() {
    return {
    }
  },
  methods: {
  }
}
</script>
<style lang="scss">
  .gameTopUp {
    width: 750px;
  }
</style>
