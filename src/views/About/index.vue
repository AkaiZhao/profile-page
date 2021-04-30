<template lang="pug">
.work
  .work-scroll
    .work-banner(ref="banner", :style="bannerStyles")
      h1.work-title HI, I'm
        span.white &nbsp; Akai
        div more and more frontend
</template>
<script>
import { WORKS } from '@/configs/works'
export default {
  data: () => ({
    bannerStyles: {
      opacity: 1,
      transform: ''
    },
    cards: WORKS
  }),
  mounted () {
    this.handleBannerScroll()
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll () {
      this.handleBannerScroll()
      this.handleCardScroll()
    },
    handleBannerScroll () {
      const height = window.outerHeight * 2 - window.scrollY
      this.bannerStyles.opacity = (height + 600) / window.outerHeight / 2
      const scale = (height) / window.outerHeight / 2 + 0.3
      if (scale < 0) this.bannerStyles.transform = 'scale(0)'
      else if (scale > 1) this.bannerStyles.transform = 'scale(1)'
      else this.bannerStyles.transform = `scale(${scale})`
    }
  }
}
</script>
<style lang="scss" scoped>
.work-scroll {
  position: relative;
  height: 350vh;
}
.work-cards-outer {
  width: 100%;
  background-color: #eee;
  padding: 120px 0;
}
.work-cards {
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
}

.work-card {
  overflow: hidden;
  border-radius: 8px;
  text-decoration: none;
  box-shadow: 3px 3px 12px -2px rgba(#232323, 0.8);
  margin: 0 20px;
  width: 25%;
  box-sizing: border-box;
  display: block;
  text-align: left;
  color: #323232;
  transition: 0.3s;
  &:hover {
    transform: translate(-3px, -3px);
    box-shadow: 0px 0px 7px 3px rgba(#232323, 0.4);
  }
  &.extra {
    background-color: #fff;
    box-shadow: none;
    background-image: url("~@/assets/github.png");
    background-repeat: no-repeat;
    background-position: center;
    position: relative;
    &::before {
      content: "MORE";
      position: absolute;
      bottom: 40px;
      width: 100%;
      font-size: 20px;
      text-align: center;
    }
  }

  // &.light {
  // }
  // &.dark {
  //   color: #eee;
  //   background-color: #323232;
  // }
  &-main {
    padding: 20px 12px;
  }

  &-title {
    text-transform: uppercase;
    margin: auto;
    margin-bottom: 12px;
    font-size: 28px;
  }
  &-content {
    font-family: serif;
    font-size: 16px;
    font-weight: normal;
  }
  &-img {
    width: 100%;
    transition: 0.2s;
    height: 150px;
    background-size: cover;
    background-position: center;
  }
}

.work {
  &-banner {
    position: fixed;
    top: 0;
    display: flex;
    margin: 0;
    width: 100vw;
    height: 100vh;
  }

  &-title {
    text-transform: uppercase;
    letter-spacing: 15px;
    margin: auto;
    max-width: 1200px;
    font-size: 120px;
    text-align: left;
    color: #eee;

    .white {
      color: #323232;
      background-color: #fff;
    }
  }
}
</style>
