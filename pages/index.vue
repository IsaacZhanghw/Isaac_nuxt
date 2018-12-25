<!-- 首页 -->
<template>
  <div>
    <lemon-head />
    <div v-swiper:studentSwiper="studentswiperOption">
      <div class="swiper-wrapper" :style="{width: clientWidth + 'px', height: clientHeight + 'px'}">
        <div class="swiper-slide" v-for="(item, index) in swiperList" :key="index">
          <img :src="item" class="swiper-item" />
        </div>
      </div>
    </div>
    <div class="index-box">
      <p>One day you love them</p>
      <p>and the next day</p>
      <p>you want to kill them a thousand times over</p>
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
        isaac07
      ],
      studentswiperOption: {
        speed: 1000,
        loop: true,
        autoHeight: true,
        grabCursor: true,
        effect: 'fade',
        // autoplay: {
        //   delay: 3000,
        //   disableOnInteraction: false
        // }
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
.index-box {
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
  p {
    width: 80%;
    text-align: right;
    font-size: 2.5rem;
    line-height: 40px;
    color: #fff;
  }
}
</style>
