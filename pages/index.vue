<!-- 首页 -->
<template>
  <div class="index-bg">
    <lemon-head />
    <div v-swiper:studentSwiper="studentswiperOption">
      <div class="swiper-wrapper" :style="{width: clientWidth + 'px', height: clientHeight + 'px'}">
        <div class="swiper-slide" v-for="(item, index) in swiperList" :key="index">
          <img :src="item" class="swiper-item" />
        </div>
      </div>
    </div>
    <!-- <lemon-foot /> -->
  </div>
</template>
<script>
import LemonHead from '@/components/LemonHead'
import LemonFoot from '@/components/LemonFoot'
import axios from 'axios'
import isaac01 from '~/static/isaac01.jpg'
import isaac02 from '~/static/isaac02.jpg'
import isaac03 from '~/static/isaac03.jpg'
import isaac04 from '~/static/isaac04.jpg'
import isaac05 from '~/static/isaac05.jpg'
import isaac06 from '~/static/isaac06.jpg'
import isaac07 from '~/static/isaac07.jpg'
import isaac08 from '~/static/isaac08.jpg'
import isaac09 from '~/static/isaac09.jpg'
import isaac10 from '~/static/isaac10.jpg'
export default {
  name: 'index',
  components: {
    LemonHead,
    LemonFoot
  },
  data() {
    return {
      clientWidth: 0,
      clientHeight: 0,
      swiperList: [
        isaac01,
        isaac02,
        isaac03,
        isaac04,
        isaac05,
        isaac06,
        isaac07,
        isaac08,
        isaac09,
        isaac10
      ],
      studentswiperOption: {
        speed: 1000,
        loop: true,
        autoHeight: true,
        grabCursor: true,
        effect : 'fade',
        autoplay: {
          delay: 2500,
          disableOnInteraction: false
        }
      }
    }
  },
  mounted() {
    this.clientWidth =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth ||
      document.body.offsetWidth ||
      window.screen.width
    this.clientHeight =
      window.innerHeight ||
      document.documentElement.clientHeight ||
      document.body.clientHeight ||
      document.body.offsetHeight ||
      window.screen.height
  },
  methods: {},
  watch: {}
}
</script>
<style lang='less' scoped>
.swiper-slide,
.swiper-slide,
.swiper-item {
  width: 100%;
  height: 100%;
}
.swiper-item {
  object-fit: cover;
}
</style>
