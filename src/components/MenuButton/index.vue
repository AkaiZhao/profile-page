<template lang="pug">
.app-nav-menu(
  :class="{ active: isMenuOpen }",
  @click="toggleMenuOpen",
  @mousemove="handleBorderMove",
  @mouseleave="handleResetBorderPosition"
)
  .app-nav-menu-border(ref="borderRef")
</template>
<script>
import { mapMutations, mapState } from 'vuex'
export default {
  computed: {
    ...mapState({
      isMenuOpen: state => state.ui.menu.open
    })
  },
  methods: {
    ...mapMutations('ui', [
      'toggleMenuOpen'
    ]),
    handleBorderMove (e) {
      const borderEl = this.$refs.borderRef
      borderEl.setAttribute('style', `transform: translate(${e.offsetX - 32}px, ${e.offsetY - 32}px)`)
    },
    handleResetBorderPosition (e) {
      const borderEl = this.$refs.borderRef
      borderEl.setAttribute('style', '')
    }
  }
}
</script>

<style lang="scss">
.app-nav-menu {
  position: absolute;
  top: -25px;
  right: 60px;
  width: 80px;
  height: 80px;
  transition: 0.7s;
  cursor: pointer;
  @media (max-width: 414px) {
    position: relative;
    top: initial;
    right: initial;
    width: 40px;
    height: 40px;
  }
  &-border {
    position: absolute;
    top: 10%;
    left: 10%;
    width: 80%;
    height: 80%;
    border: 2px solid #eee;
    border-radius: 50%;
    box-sizing: border-box;
    transition: 0.2s, border 0.5s;
    pointer-events: none;
    @media (max-width: 414px) {
      display: none;
    }
    .active & {
      border: 2px solid #777;
    }
  }

  &::before,
  &::after {
    position: absolute;
    background-color: #eee;
    transition: 0.8s;
    content: "";
  }

  &::before {
    top: 32px;
    left: 25px;
    width: 28px;
    height: 3px;
  }

  &::after {
    top: 43px;
    left: 25px;
    width: 18px;
    height: 3px;
  }

  &.active {
    &::before,
    &::after {
      background-color: #777;
    }

    &::before {
      top: 37px;
      left: 26px;
      width: 28px;
      height: 4px;
      transform: rotate(-315deg);
    }

    &::after {
      top: 37px;
      left: 26px;
      width: 28px;
      height: 4px;
      transform: rotate(315deg);
    }
  }
}
</style>
