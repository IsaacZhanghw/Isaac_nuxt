<!-- 首页 -->
<template>
  <div class="index-bg">
    <lemon-head />
    <div class="banner-box">
      <img
        src="http://website.lemonread.com/banner-bg.png"
        class="banner-bg"
      >
      <transition name="banner-fade">
        <img
          v-if="shoadowShow"
          src="http://website.lemonread.com/lemonShadow.png"
          class="banner"
        />
      </transition>
      <transition name="banner-fade">
        <img
          v-if="bookShow"
          src="http://website.lemonread.com/lemonBook.png"
          class="banner"
        />
      </transition>
      <transition name="banner-fade">
        <img
          v-if="eyeshieldShow"
          src="http://website.lemonread.com/eyeshield.png"
          class="banner"
        />
      </transition>
      <transition name="banner-fade">
        <img
          v-if="lineShow"
          src="~/static/index/line.png"
          class="banner"
        />
      </transition>
      <transition name="banner-fade">
        <img
          v-if="platformShow"
          src="~/static/index/platform.png"
          class="banner"
        />
      </transition>
      <img
        src="http://website.lemonread.com/paper.png"
        class="banner"
      />
      <transition name="banner-fade">
        <img
          v-if="studentShow"
          src="~/static/index/studentsIcon.png"
          class="banner"
        />
      </transition>
      <transition name="banner-fade">
        <img
          v-if="teacherShow"
          src="~/static/index/teachersIcon.png"
          class="banner"
        />
      </transition>
      <transition name="banner-fade">
        <img
          v-if="parentsShow"
          src="~/static/index/parentsIcon.png"
          class="banner"
        />
      </transition>
      <transition name="banner-fade">
        <img
          v-if="rectorsShow"
          src="~/static/index/rectorsIcon.png"
          class="banner"
        />
      </transition>
    </div>
    <div
      class="app-box-relative"
      id="studentTop"
    >
      <img
        src="~/static/index/student-relative.png"
        class="banner-bg"
      />
      <img
        src="http://website.lemonread.com/student-bg.png"
        class="student-bg"
      />
      <div class="state-box-absolute">
        <div class="state-box-relative state-box-right">
          <div
            class="swiper-box state-swiper-box"
            v-swiper:studentStateSwiper="studentStateOption"
          >
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <div class="state-swiper-item">
                  <div class="state-item">
                    <p class="state-title">阅读测评</p>
                    <p class="state-content">基于阅读测评结果</p>
                    <p class="state-content">按能力推荐适合书籍</p>
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="state-swiper-item">
                  <div class="state-item">
                    <p class="state-title">精选分级书城</p>
                    <p class="state-content">10000余本多方权威机构推荐书单</p>
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="state-swiper-item">
                  <div class="state-item">
                    <p class="state-title">训练与作业</p>
                    <p class="state-content">帮助巩固与提升阅读能力</p>
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="state-swiper-item">
                  <div class="state-item">
                    <p class="state-title">任务中心</p>
                    <p class="state-content">签到、任务激励</p>
                    <p class="state-content">助力阅读习惯养成</p>
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="state-swiper-item">
                  <div class="state-item">
                    <p class="state-title">书圈互动</p>
                    <p class="state-content">随时随地与老师</p>
                    <p class="state-content">同学在线效流分享阅读心得</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="app-content-absolute">
            <div class="app-content-relative">
              <div class="app-content-box">
                <p class="content-title">贯穿阅读学习闭环，智适应阅读</p>
                <p class="content-content">1、学生进行阅读能力测评定位能力</p>
                <p class="content-content">2、基于能力，智适应阅读内容与计划</p>
                <p class="content-content">3、训练、闯关、柠檬树等激励体系培养阅读习惯</p>
                <p class="content-content">4、根据阅读轨迹分析阅读行为</p>
                <p class="content-content">5、根据阅读行为调整阅读计划</p>
                <p class="content-content">6、提供名师阅读指导</p>
                <a
                  class="download router-link-active"
                  v-bind:href="studentDownloadUrl"
                >
                  学生端APP下载
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="phone-box-absolute">
        <div class="phone-box phone-left">
          <img
            src="~/static/index/phone.png"
            class="phone-bg"
          />
          <div
            class="phone-screen-box"
            v-swiper:studentSwiper="studentPhoneOption"
          >
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <img
                  src="http://website.lemonread.com/student01.png"
                  class="phone-item"
                />
              </div>
              <div class="swiper-slide">
                <img
                  src="http://website.lemonread.com/student02.png"
                  class="phone-item"
                />
              </div>
              <div class="swiper-slide">
                <img
                  src="http://website.lemonread.com/student03.png"
                  class="phone-item"
                />
              </div>
              <div class="swiper-slide">
                <img
                  src="http://website.lemonread.com/student04.png"
                  class="phone-item"
                />
              </div>
              <div class="swiper-slide">
                <img
                  src="http://website.lemonread.com/student05.png"
                  class="phone-item"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="app-box-absolute">
        <div class="app-box">
          <p class="app-titile">
            柠檬悦读<span class="client">学生端</span>
          </p>
          <p class="app-content">贯穿阅读学习闭环，基于阅读能力与兴趣，智能匹配适应内容</p>
          <div class="speciality-box">
            <div class="speciality-item">
              <img
                src="~/static/index/speciality.png"
                class="speciality-icon"
              />
              激发阅读兴趣
            </div>
            <div class="speciality-item">
              <img
                src="~/static/index/speciality.png"
                class="speciality-icon"
              />
              提升阅读能力
            </div>
            <div class="speciality-item">
              <img
                src="~/static/index/speciality.png"
                class="speciality-icon"
              />
              培养阅读习惯
            </div>
          </div>
        </div>
      </div>
    </div>
    <lemon-foot />
  </div>
</template>
<script>
import LemonHead from '@/components/LemonHead'
import LemonFoot from '@/components/LemonFoot'
import axios from 'axios'
export default {
  name: 'index',
  components: {
    LemonHead,
    LemonFoot
  },
  data() {
    let that = this
    return {
      studentDownloadUrl: '',
      teacherDownloadUrl: '',
      parentDownloadUrl: '',
      rotateYNum: 0,
      rotateXNum: 0,
      shoadowShow: false,
      bookShow: false,
      rectorsShow: false,
      parentsShow: false,
      teacherShow: false,
      studentShow: false,
      eyeshieldShow: false,
      lineShow: false,
      platformShow: false,
      studentTop: 0,
      studentNum: 0,
      isStudentOver: false,
      studentStateLeft: true,
      teacherTop: 0,
      teacherNum: 0,
      isTeacherOver: false,
      parentTop: 0,
      parentNum: 0,
      isParentOver: false,
      parentStateLeft: true,
      masterTop: 0,
      masterNum: 0,
      isMasterOver: false,
      screenHalf: 300,
      banners: [
        'http://website.lemonread.com/student01.png',
        'http://website.lemonread.com/student02.png',
        'http://website.lemonread.com/student03.png'
      ],
      swiperOption: {
        loop: true,
        slidesPerView: 'auto',
        centeredSlides: true,
        spaceBetween: 30,
        grabCursor: true
      },
      studentPhoneIndex: 0,
      studentTouchIndex: 0,
      studentPhoneOption: {
        speed: 1000,
        loop: true,
        autoHeight: true,
        grabCursor: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false
        },
        on: {
          slideChange: function() {
            that.studentPhoneIndex = this.activeIndex
          },
          touchEnd: function(event) {
            that.studentTouchIndex++
            setTimeout(function() {
              let interval = setInterval(() => {
                that.studentTouchIndex--
                if (that.studentTouchIndex >= 0) {
                  clearInterval(interval)
                  if (that.studentTouchIndex === 0) {
                    that.studentPhoneSwiper.autoplay.start()
                  }
                }
              }, 10)
            }, 2000)
          }
        }
      },
      studentStateOption: {
        speed: 1000,
        mousewheelControl: false,
        effect: 'fade',
        grabCursor: true,
        fadeEffect: {
          crossFade: true
        }
      }
    }
  },
  async asyncData() {
    let [studentData, teacherData, parentData] = await Promise.all([
      axios.get(
        'http://lemonread.com/apk/getNewestApk?client_type=2&role_type=1'
      ),
      axios.get(
        'http://lemonread.com/apk/getNewestApk?client_type=2&role_type=2'
      ),
      axios.get(
        'http://lemonread.com/apk/getNewestApk?client_type=2&role_type=3'
      )
    ])
    return {
      studentDownloadUrl: studentData.data.retobj[0].url,
      teacherDownloadUrl: teacherData.data.retobj[0].url,
      parentDownloadUrl: parentData.data.retobj[0].url
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
    const that = this
    setTimeout(() => {
      that.bookShow = true
    }, 500)
    setTimeout(() => {
      that.shoadowShow = true
    }, 1000)
    setTimeout(() => {
      that.rectorsShow = true
    }, 1400)
    setTimeout(() => {
      that.parentsShow = true
    }, 1600)
    setTimeout(() => {
      that.teacherShow = true
    }, 1800)
    setTimeout(() => {
      that.studentShow = true
    }, 2000)
    setTimeout(() => {
      that.eyeshieldShow = true
    }, 2200)
    setTimeout(() => {
      that.lineShow = true
    }, 2400)
    setTimeout(() => {
      that.platformShow = true
    }, 2600)
  },
  methods: {},
  watch: {
    studentPhoneIndex(val, oldValue) {
      let that = this
      if (that.isStudentOver) {
        return
      }
      if (val == 1 || val == 6) {
        that.studentStateSwiper.slideTo(0)
      }
      if (val == 2) {
        that.studentStateSwiper.slideTo(1)
      }
      if (val == 3) {
        that.studentStateSwiper.slideTo(2)
      }
      if (val == 4) {
        that.studentStateSwiper.slideTo(3)
      }
      if (val == 5 || val == 0) {
        that.studentStateSwiper.slideTo(4)
      }
    }
  }
}
</script>
<style lang='less' scoped>
.banner-box {
  position: relative;
  overflow: hidden;

  .banner {
    width: 100%;
    position: absolute;
    left: 0;
    top: 0;
  }
}

.banner-img-box {
  width: 100%;
}

.banner-bg {
  width: 100%;
}

.app-box-relative {
  position: relative;
  .student-bg {
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
  }
}

.phone-box-absolute {
  width: 100%;
  text-align: center;
  position: absolute;
  bottom: 5%;
  left: 0;
  z-index: 10;
}

.pc-box-absolute {
  bottom: 14%;
}

.phone-box {
  display: inline-block;
  position: relative;
}

.phone-bg {
  width: 408px;
  height: 680px;
  margin: 0 auto;
  position: relative;
}

.pc-bg {
  width: 900px;
  height: 476px;
  margin: 0 auto;
  position: relative;
  z-index: 5;
}

.phone-screen-box {
  width: 282px;
  height: 502px;
  margin: auto;
  position: absolute;
  top: 69px;
  left: 50%;
  transform: translate(-50%);
  overflow: hidden;
}

.pc-screen-box {
  width: 684px;
  top: 31px;
  left: 452px;
}

.phone-swiper-item {
  // width: 240px !important;
  // height: 680px;
  position: relative;
  .phone-item {
    width: 240px !important;
  }
}

.phone-item {
  width: 100%;
  height: 100%;
}

.app-box-absolute {
  width: 100%;
  position: absolute;
  top: 8%;
  left: 0;
}

p.app-titile {
  height: 50px;
  line-height: 50px;
  font-size: 2.2rem;
  letter-spacing: 3px;
  text-align: center;

  .client {
    color: #019988;
  }
}

p.app-content {
  font-size: 0.9rem;
  margin: 5px 0;
  text-align: center;
}

.speciality-box {
  display: flex;
  justify-content: center;
}

.speciality-item {
  height: 20px;
  line-height: 20px;
  font-size: 1.2rem;
  margin: 10px;
  margin-top: 15px;

  .speciality-icon {
    height: 80%;
    vertical-align: middle;
  }
}

.state-box-absolute {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}

.state-box-relative {
  /* 1200 / 2 */
  width: 600px;
  height: 100%;
  position: absolute;
  top: 0;

  .state-swiper-box {
    width: 100%;
    height: 100%;
    margin: auto;
    position: absolute;
    left: 50%;
    overflow: hidden;
    transform: translate(-50%);

    .state-swiper-item {
      width: 100%;
      height: 100%;
      position: relative;
    }
  }

  .state-item {
    display: inline-block;
    position: absolute;
    top: 45%;
    transform: translate(-50%, -50%);
  }

  .state-title {
    font-size: 1.3rem;
    color: #019988;
    margin-bottom: 10px;
  }

  .state-content {
    line-height: 26px;
  }
}

.app-content-absolute {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
}

.app-content-relative {
  width: 100%;
  height: 100%;
  position: relative;
}

.app-content-box {
  display: inline-block;
  position: absolute;
  top: 50%;
  z-index: 50;
  p {
    text-align: left;
  }
}

.content-title {
  line-height: 30px;
  font-size: 1.3rem;
  color: #019988;
}

.content-content {
  line-height: 24px;
  font-size: 0.9rem;
}

.download {
  display: block;
  width: 180px;
  height: 40px;
  line-height: 40px;
  color: #fff;
  font-size: 1.1rem;
  text-align: center;
  background-color: #02baa1;
  border-radius: 15px;
  margin-top: 10px;
  text-decoration: none;
}

.state-box-right {
  left: 50%;

  .state-item {
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .app-content-absolute {
    left: -100%;

    .app-content-box {
      right: 30%;
      transform: translate(0, -50%);
    }
  }
}

.state-box-left {
  right: 50%;

  .state-item {
    right: 50%;
    transform: translate(50%, -50%);
  }

  .app-content-absolute {
    left: 50%;

    .app-content-box {
      right: -30%;
      transform: translate(0, -50%);
    }
  }
}

.banner-fade-enter-active {
  transition: all 1s ease-out;
}

.banner-fade-enter {
  transform: translate(0, -100px);
  opacity: 0;
}

/* 1680 */
@media only screen and (max-width: 1800px) {
  .phone-bg {
    width: 348px;
    height: 580px;
  }

  .pc-bg {
    width: 900px;
    height: 476px;
  }

  .phone-screen-box {
    width: 240px;
    height: 426px;
    top: 60px;
  }

  .pc-screen-box {
    width: 684px;
    top: 31px;
    left: 452px;
  }

  .pc-box-absolute {
    bottom: 14%;
  }
}

/* 1440 */
@media only screen and (max-width: 1560px) {
  .app-box-absolute {
    top: 5%;
  }

  .phone-box-absolute {
    bottom: 4%;
  }

  .phone-bg {
    width: 300px;
    height: 500px;
  }

  .pc-bg {
    width: 800px;
    height: 426px;
  }

  .phone-screen-box {
    width: 69%;
    height: 368px;
    top: 52px;
  }

  .pc-screen-box {
    width: 610px;
    top: 28px;
    left: 402px;
  }

  .pc-box-absolute {
    bottom: 8%;
  }
}

/* 1200 */
@media only screen and (max-width: 1320px) {
  .app-box-absolute {
    top: 2%;
  }

  .phone-box-absolute {
    bottom: 3%;
  }

  .phone-bg {
    width: 264px;
    height: 440px;
  }

  .pc-bg {
    width: 710px;
    height: 378px;
  }

  .phone-screen-box {
    width: 182px;
    height: 324px;
    top: 46px;
  }

  .pc-screen-box {
    width: 542px;
    top: 25px;
    left: 357px;
  }

  .pc-box-absolute {
    bottom: 6%;
  }

  .app-titile {
    line-height: 40px;
    font-size: 2rem;
    letter-spacing: 2px;
  }

  .speciality-item {
    font-size: 1.1rem;
    margin-top: 5px;
  }
}

/* 960 */
@media only screen and (max-width: 1080px) {
  .index-bg {
    width: 1200px;
  }
}
</style>
