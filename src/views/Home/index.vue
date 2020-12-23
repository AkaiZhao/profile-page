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
  data: () => ({

  })
}
</script>

<style lang="scss">

.home {
  position: relative;
}
</style>
