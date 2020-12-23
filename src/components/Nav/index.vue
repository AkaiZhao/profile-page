<template lang="pug">
nav.app-nav
  .app-nav-container
    h1.app-nav-logo(:class="{ hide: logoCollapse && !isMenuOpen }")
      img.app-nav-logo-img(:src="require('@/assets/logo.svg')")
      .app-nav-logo-text
        .app-nav-logo-text-content revue and rescss
    menu-button
</template>
<script>
import MenuButton from '@/components/MenuButton'
import { mapState } from 'vuex'
export default {
  components: {
    MenuButton
  },
  data: () => ({
    logoCollapse: false
  }),
  computed: {
    ...mapState({
      isMenuOpen: state => state.ui.menu.open
    })
  },
  mounted () {
    window.addEventListener('scroll', this.handleTitleCollapse)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.handleTitleCollapse)
  },
  methods: {
    handleTitleCollapse (e) {
      this.logoCollapse = window.scrollY > 20
    }
  }
}
</script>

<style lang="scss">
.app-nav {
  position: fixed;
  top: 48px;
  width: 100vw;
  color: #eee;
  z-index: 1;

  &-container {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    padding: 0 72px;
    width: calc(100% - 144px);
  }

  &-logo {
    display: flex;
    align-items: center;
    margin: 0;
    font-size: 24px;
    text-transform: uppercase;
    transition: 0.3s;

    &-img {
      display: block;
      height: 40px;
      transition: 0.3s;

      .hide & {
        height: 60px;
        transition: 0.3s 0.5s;
      }
    }

    &-text {
      overflow: hidden;
      padding-left: 10px;
      word-break: none;

      &-content {
        transition: 0.3s;
      }

      .hide &-content {
        transition: 0.5s;
        transform: translateX(-120%);
      }
    }
  }
}

</style>
