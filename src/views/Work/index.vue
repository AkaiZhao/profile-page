<template lang="pug">
.work
  .work-scroll
    .work-banner(ref="banner" :style="bannerStyles")
      h1.work-title  Suspendisse icu
        span.white vehicula
        div blandit Donec elit ex.
  .work-scroll-card
    h1.work-sub-title(ref="cardTitle") Donec vehicula.
    .work-cards(v-show="showCard")
      .work-card
</template>
<script>
export default {
  data: () => ({
    bannerStyles: {
      opacity: 1,
      transform: ''
    },
    showCard: false
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
    },
    handleCardScroll () {
      if (this.$refs.cardTitle.getBoundingClientRect().y > 0) return
      console.log(this.$refs.cardTitle.getBoundingClientRect())
    }
  }
}
</script>
<style lang="scss" scoped>
.work-scroll {
  position: relative;
  height: 300vh;
}

.work-scroll-card {
  position: relative;
  height: 600vh;
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

  &-sub-title {
    text-transform: uppercase;
    letter-spacing: 15px;
    margin: auto;
    padding: 120px;
    font-size: 84px;
    text-align: left;
    color: #eee;
  }
}
</style>
