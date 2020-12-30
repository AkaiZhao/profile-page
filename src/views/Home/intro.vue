<template lang="pug">
section.home-section(ref="section" v-show="show")
  h2.home-section-title Layout
  template(v-for="(row, i) in rowData")
    .home-section-container(:class="{reverse: Boolean(i%2) }")
      p.home-section-container-text {{row.content}}
      .home-section-container-image
        img.home-section-container-image-main(:src="row.imageSrc")
        img.home-section-container-image-sub(:src="row.subImageSrc")
</template>

<script>
export default {
  name: 'Intro',
  data: () => ({
    timer: null,
    show: false,
    rowData: [
      {
        imageSrc: 'https://picsum.photos/id/183/800/370',
        subImageSrc: 'https://picsum.photos/id/13/250/350',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
      },
      {
        imageSrc: 'https://picsum.photos/id/193/500/370',
        subImageSrc: 'https://picsum.photos/id/12/250/350',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
      },
      {
        imageSrc: 'https://picsum.photos/id/145/500/370',
        subImageSrc: 'https://picsum.photos/id/23/250/350',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
      },
      {
        imageSrc: 'https://picsum.photos/id/173/500/370',
        subImageSrc: 'https://picsum.photos/id/125/250/350',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
      }
    ]
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
    document.body.style.backgroundColor = ''
  },
  methods: {
    handleWindowScroll (e) {
      const sectionEl = this.$refs.section
      if (sectionEl.getBoundingClientRect().y < 100) {
        document.body.style.transition = '.6s'
        document.body.style.backgroundColor = '#ccc'
        sectionEl.style.transition = '.4s'
        sectionEl.style.backgroundColor = '#323232'
        sectionEl.style.color = '#eee'
        sectionEl.style.maxWidth = '100vw'
        sectionEl.style.borderRadius = '0'
      } else {
        document.body.style.backgroundColor = ''
        sectionEl.style.backgroundColor = ''
        sectionEl.style.color = ''
        sectionEl.style.maxWidth = ''
        sectionEl.style.borderRadius = ''
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

    &.reverse {
      flex-direction: row-reverse;
      text-align: right;
    }

    &-text {
      flex: 1;
      padding: 0 160px;
      font-size: 24px;

      /* text-align: justify; */
    }

    &-image {
      flex: 1.3;
      position: relative;

      &-main {
        width: 100%;
        height: 100%;
      }

      &-sub {
        position: absolute;
        bottom: -20px;
        left: -20px;
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
