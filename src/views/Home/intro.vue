<template lang="pug">
section.home-section(ref="section" v-show="show")
  h2.home-section-title Layout
  template(v-for="x in [1,2,3,4]")
    .home-section-container
      p.home-section-container-text Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
      img.home-section-container-image(:src="`https://picsum.photos/id/${Math.floor(Math.random() * 100 *x)}/600/300`")
</template>

<script>
export default {
  name: 'Intro',
  data: () => ({
    show: false
  }),
  mounted () {
    setTimeout(() => {
      this.show = true
    }, 4500)

    window.addEventListener('scroll', this.handleWindowScroll)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.handleWindowScroll)
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
    padding: 0 60px;
    padding-bottom: 30px;
    text-align: left;

    &:nth-child(2n) {
      flex-direction: row-reverse;
      text-align: right;
    }

    &-text {
      flex: 1;
      padding: 0 40px;
      font-size: 24px;

      /* text-align: justify; */
    }

    &-image {
      flex: 1;
      display: block;
      padding: 0 40px;
    }
  }
}

</style>
