<template lang="pug">
.home
  landing
  intro
</template>

<script>
import Landing from './landing'
import Intro from './intro'
export default {
  name: 'Home',
  components: {
    Landing,
    Intro
  },
  data: () => ({})
}
</script>

<style lang="scss">
.home {
  padding-top: 120px;
  min-height: calc(100vh - 120px);
  background: linear-gradient(
    110deg,
    rgb(100, 145, 177) 20%,
    rgb(83, 230, 103)
  );
  position: relative;
}
</style>
