<template lang="pug">
  main.home-main
    .home-main-content
      h1.home-main-content-text 你好，世界！
      h1.home-main-content-text Hello, World!
      h1.home-main-content-text Bonjour le monde
      h1.home-main-content-text Здравствуй, мир!
      p.home-main-content-text-deco This is only some decoration, make home-mainpge cool.
    .home-main-content-deco-right I want off work.
    .home-main-scroll-tip
      .home-main-scroll-tip-text scroll
      .home-main-scroll-tip-arrow
</template>

<style lang="scss">

.home-main {
  position: relative;
  padding: 100px;
  padding-bottom: 200px;

  &-content {
    display: inline-block;
    margin: 0 auto;
    padding: 0 80px;

    &-text {
      margin: 5px;
      font-size: 84px;
      text-align: left;
      opacity: 0;
      transition: 0.5s;
      line-height: 1;
      letter-spacing: 3px;
      text-transform: uppercase;
      pointer-events: none;
      transform: translateY(30px);

      &:nth-child(2n-1) {
        color: #bcbcbc;
        animation: move1 6s;
      }

      &:nth-child(2n) {
        color: #323232;
        -webkit-text-stroke-width: 1px;
        -webkit-text-stroke-color: #bcbcbc;
      }

      @for $i from 1 through 4 {
        &:nth-child(#{$i}) {
          @if ($i<4) {
            margin-left: ($i - 1) * 40px;
          }

          @else {
            margin-left: (-$i + 3) * 40px;
          }

          animation: move 2.4s $i*0.7s both;
        }
      }

      @keyframes move {
        0% {
          opacity: 0;
          transform: translateY(30px);
        }

        100% {
          transform: translateY(0);
          opacity: 1;
        }
      }
    }

    &-text-deco {
      margin: 0;
      margin-left: -80px;
      text-align: left;
      color: #fff;
      letter-spacing: 3px;
      animation: show 0.5s both 4.3s;

      @keyframes show {
        0% {
          opacity: 0;
        }

        100% {
          opacity: 1;
        }
      }
    }

    &-deco-right {
      position: absolute;
      top: 350px;
      right: 80px;
      color: #fff;
      transform-origin: 100% 0;
      transform: rotate(90deg);
    }
  }

  &-scroll-tip {
    position: absolute;
    bottom: 100px;
    left: 0;
    display: flex;
    align-items: flex-end;
    text-align: left;
    color: #eee;
    transform: rotate(90deg);
    animation: scroll-display 0.7s 6s both;
    opacity: 0;

    @keyframes scroll-display {
      20% {
        opacity: 0;
      }

      100% {
        opacity: 1;
      }
    }

    &-arrow {
      overflow: hidden;
      margin: 6px 8px;
      width: 40px;
      height: 1px;

      &::before {
        display: block;
        width: 100%;
        height: 100%;
        background-color: #fff;
        content: '';
        animation: arrow-move 2.5s infinite both linear;
      }

      @keyframes arrow-move {
        0% {
          width: 0;
          transform: translateX(-20%);
        }

        45% {
          width: 100%;
          transform: translateX(0);
        }

        50% {
          width: 100%;
          transform: translateX(0);
        }

        100% {
          width: 100%;
          transform: translateX(100%);
        }
      }
    }
  }
}
</style>
