<template lang="pug">
transition(name="slide")
  .app-menu
    //- .app-menu-deco-left
    transition(name="slide-deco")
      .app-menu-deco(v-if="isMenuOpen")
        .app-menu-deco-text MENU
    ul.app-menu-list
      router-link.app-menu-list-item(tag="li", :to="{ name: 'Home' }") HOME 首頁
      router-link.app-menu-list-item(tag="li", :to="{ name: 'Work' }") WORK 作品(未完成)
      li.app-menu-list-item 其他還沒有那麼多內容
      li.app-menu-list-item 所以這兩行是湊字數的
      //- li.app-menu-list-item dissbleio
</template>
<script>
import { mapMutations, mapState } from 'vuex'
export default {
  computed: {
    ...mapState({
      isMenuOpen: state => state.ui.menu.open
    })
  },
  watch: {
    $route (to, from) {
      console.log(to)
      this.toggleMenuOpen(false)
    }
  },
  methods: {
    ...mapMutations('ui', [
      'toggleMenuOpen'
    ])
  }
}
</script>

<style lang="scss">
.app-menu {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #eee;
  z-index: 1;

  &-deco {
    position: relative;
    overflow: hidden;
    width: 61.9vw;
    height: 100%;
    background-color: #323232;

    &-text {
      position: absolute;
      bottom: 160px;
      left: -125px;
      font-size: 120px;
      font-weight: bold;
      color: transparent;
      -webkit-text-stroke: 1px;
      -webkit-text-stroke-color: #aaa;
      transform: rotate(90deg);
      letter-spacing: 24px;
      line-height: 1;
    }

    &-left {
      position: fixed;
      top: 120px;
      right: 98px;
      width: 2px;
      height: 300px;
      background-color: #aaa;
    }
  }

  &-list {
    position: absolute;
    top: 50%;
    right: 25vw;
    margin: 0;
    padding: 40px;
    font-size: 84px;
    font-weight: bold;
    text-align: right;
    color: #eee;
    list-style: none;
    transition: 0.2s;
    transform: translateY(-50%);
    letter-spacing: 10px;
    text-size-adjust: auto;
    mix-blend-mode: exclusion;
    text-transform: uppercase;
    cursor: pointer;

    &:hover {
      color: #666;
    }

    &-item {
      transition: 0.2s;

      &:hover {
        color: #eee;
        transform: scale(1.05);
      }
    }
  }
}

.slide-enter-active,
.slide-leave-active {
  transition: 1.2s 0.2s;
  transform: translateX(0%);
}

.slide-enter {
  transform: translateX(100%);
}

.slide-leave-to {
  transform: translateX(-100%);
}

.slide-deco-enter-active {
  transition: 1s 0.4s;
}

.slide-deco-leave-active {
  transition: 0.5s;
}

.slide-deco-enter {
  width: 100vw;
}

.slide-deco-leave-to {
  width: 0;
}
</style>
