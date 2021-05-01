<template lang="pug">
section.home-section(ref="section", :class="{ scroll }", v-show="show")
  h2.home-section-title My Works
  template(v-for="(row, i) in rowData")
    .home-section-container(:class="{ reverse: Boolean(i % 2) }")
      .home-section-container-text
        h3.home-section-container-title {{ row.title }}
        p.home-section-container-content {{ row.content }}
        a.home-section-container-link(
          v-if="row.link",
          :href="row.link",
          target="_blank"
        ) LINK
      .home-section-container-image
        img.home-section-container-image-main(:src="row.imageSrc")
        img.home-section-container-image-sub(:src="row.subImageSrc")
</template>

<script>
import { WORKS } from '@/configs/works'
export default {
  name: 'Intro',
  data: () => ({
    timer: null,
    show: false,
    scroll: false,
    rowData: WORKS
  }),
  mounted () {
    this.timer = setTimeout(() => {
      this.show = true
      window.addEventListener('scroll', this.handleWindowScroll)
    }, 4500)
  },
  beforeDestroy () {
    clearTimeout(this.timer)
    window.removeEventListener('scroll', this.handleWindowScroll)
  },
  methods: {
    handleWindowScroll (e) {
      const sectionEl = this.$refs.section
      if (sectionEl.getBoundingClientRect().y < 100) {
        this.scroll = true
      } else {
        this.scroll = false
      }
    }
  }
}
</script>

<style lang="scss">
.home-section {
  margin: 0 auto;
  padding: 0 0 60px;
  width: 100%;
  box-sizing: border-box;
  max-width: 96vw;
  background-color: #ccc;
  border-radius: 8px 8px 0 0;
  animation: init-section-1 2.3s both;
  transition: 0.4s;

  &.scroll {
    background-color: #323232;
    color: #eee;
    max-width: 100vw;
    border-radius: 0;
  }

  @keyframes init-section-1 {
    0% {
      transform: translateY(300px);
    }

    100% {
      transform: translateY(0);
    }
  }

  &-title {
    margin: 0;
    padding: 60px 40px;
    font-size: 84px;
    text-align: left;
    transition: 0.14s;
  }

  &-container {
    display: flex;
    padding: 120px 0;
    text-align: left;
    transition: 0.6s;
    max-width: 100%;
    .scroll & {
      padding: 120px 60px;
      max-width: 1600px;
      margin: 0 auto;
    }

    &.reverse {
      flex-direction: row-reverse;
      text-align: right;
    }

    &-text {
      flex: 1;
      padding: 0 60px;
      & > p,
      & > a {
        font-size: 24px;
        margin: 12px 0;
        margin-bottom: 40px;
      }
      & > h3 {
        font-size: 36px;
        margin: 20px 0;
      }

      /* text-align: justify; */
    }
    $link-color: rgb(163, 212, 224);
    &-link {
      text-align: center;
      padding: 16px 32px;
      display: block;
      border: 3px solid $link-color;
      text-decoration: none;
      color: $link-color;
      position: relative;
      transition: 0.3s;
      overflow: hidden;
      &::before,
      &:after {
        z-index: -1;
        content: "";
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: $link-color;
      }
      &::before {
        left: -100%;
      }
      &::after {
        transition: 0.3s;
        right: -100%;
      }
      &:hover {
        color: #232323;
        transition: 0.3s 0.3s;
        &::before {
          transition: 0.3s;
          left: 0%;
        }
        &::after {
          transition: 0s 0.3s;
          right: 0;
        }
      }
    }

    &-image {
      flex: 1.3;
      position: relative;

      &-main {
        width: 100%;
        height: 100%;
        border: 1px solid #444;
        border-radius: 8px;
        box-shadow: 0px 0px 6px 1px rgba($color: #000, $alpha: 0.4);
      }

      &-sub {
        border-radius: 4px;
        position: absolute;
        bottom: -20px;
        left: -20px;
        max-height: 350px;
        box-shadow: 0px 0px 6px 1px rgba($color: #000, $alpha: 0.4);
      }
    }

    .reverse &-image-sub {
      bottom: -20px;
      right: -20px;
      left: initial;
    }
  }
}
</style>
