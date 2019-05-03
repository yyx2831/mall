<template>
  <div class="slider-wapper">
    <loading></loading>
<!--    <my-swiper-->
<!--      :data="sliders"-->
<!--      :direction="direction"-->
<!--      :loop="loop"-->
<!--      :interval="interval"-->
<!--      :pagination="pagination"-->
<!--      v-if="sliders.length">-->
<!--      <swiper-slide v-for="(item, index) in sliders" :key="index">-->
<!--        <a :href="item.linkUrl" class="slider-link">-->
<!--          <img :src="item.picUrl" alt="" class="slider-img">-->
<!--        </a>-->
<!--      </swiper-slide>-->
<!--    </my-swiper>-->
  </div>
</template>

<script>
  import MySwiper from 'base/slider';
  import {swiperSlide} from 'vue-awesome-swiper';
  import {sliderOptions} from "@/pages/home/config";
  import {getHomeSlider} from "@/api/home";
  import loading from 'base/loading';

  export default {
    name: "swiper",
    components: {
      MySwiper,
      swiperSlide,
      loading
    },
    data() {
      return {
        direction: sliderOptions.direction,
        loop: sliderOptions.loop,
        interval: sliderOptions.interval,
        pagination: sliderOptions.pagination,
        sliders: [],
        // sliders: [
        //   {
        //     'linkUrl': 'https://www.imooc.com',
        //     'picUrl': require('./1.jpg')
        //   },
        //   {
        //     'linkUrl': 'https://www.imooc.com',
        //     'picUrl': require('./2.jpg')
        //   },
        //   {
        //     'linkUrl': 'https://www.imooc.com',
        //     'picUrl': require('./3.jpg')
        //   },
        //   {
        //     'linkUrl': 'https://www.imooc.com',
        //     'picUrl': require('./4.jpg')
        //   }
        // ]
      }
    },
    created() {
      this.getSliders();
    },
    methods: {
      getSliders() {
        getHomeSlider().then(data => {
          this.sliders = data;
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .slider-wapper {
    width: 100%;
    height: 183px;
  }

  .slider-link {
    display: block;
  }

  .slider-link,
  .slider-img {
    overflow: hidden;
    width: 100%;
    height: 100%;
  }
</style>
