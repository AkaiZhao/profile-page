<template lang="pug">
  .app
    app-menu(v-show="isMenuOpen")
    app-nav
    .app-container
      router-view
</template>
<script>
import AppNav from '@/components/Nav'
import AppMenu from '@/components/Menu'
import { mapState } from 'vuex'

export default {
  components: {
    AppNav,
    AppMenu
  },
  computed: {
    ...mapState({
      isMenuOpen: state => state.ui.menu.open
    })
  }
}
</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@700&family=Rubik:wght@300;400;700&display=swap');

body {
  margin: 0;
  padding: 0;
  color: #eee;
  background-color: #323232;
}

.app {
  width: 100%;
  font-family: 'Rubik', 'Noto Sans TC', Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.app-container {
  margin: 0 auto;
  padding-top: 120px;
}
</style>
