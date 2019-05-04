<template>
  <div class="home">
    <header class="g-header-container">
      <home-header></home-header>
    </header>
    <scroll>
      <home-slider></home-slider>
      <home-slider></home-slider>
      <home-slider></home-slider>
      <home-slider></home-slider>
      <home-slider></home-slider>
      <home-slider></home-slider>
      <home-slider></home-slider>
      <home-slider></home-slider>
      <home-slider></home-slider>
      <home-slider></home-slider>
    </scroll>
    <div class="g-backtop-container"></div>
    <router-view></router-view>
  </div>
</template>

<script>
  import HomeHeader from './header';
  import HomeSlider from './slider';
  import Scroll from 'base/scroll'

  export default {
    name: "Home",
    components: {
      HomeHeader,
      HomeSlider,
      Scroll,
    }
  }
</script>

<style lang="scss" scoped>
  @import "~assets/css/mixins";

  .home {
    overflow: hidden;
    background-color: $bgc-theme;
    width: 100%;
    height: 100%;
  }
</style>
