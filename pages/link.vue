<!-- 阅读器页面 -->
<template>
  <div class="index-bg" @click='canvasClick'>
    <lemon-head></lemon-head>
    <no-data></no-data>
    <main id="main" class="main-box">
      <!-- <div v-for="(item, index) in blogList" :key="index" class="blo-item">
        <h2 class="blog-title">
          {{item.title}}
        </h2>
        <div v-html="blogDetail"></div>
      </div> -->
    </main>
    <lemon-foot></lemon-foot>
  </div>
</template>
<script>
import LemonHead from '@/components/LemonHead'
import LemonFoot from '@/components/LemonFoot'
import noData from '@/components/noData'

export default {
  name: 'smart',
  components: {
    LemonHead,
    LemonFoot,
    noData
  },
  data() {
    return {
      clientWidth: 0,
      clientHeight: 0,
      isCanvas: false,
      eventOffsetX: 0,
      eventOffsetY: 0,
      blogDetail: `<section style='border: 0px none; box-sizing: border-box;'>
                        <section style='text-align: center;'>
                            <section style='font-size: 14px; text-align: justify; letter-spacing: 1.5px; line-height: 1.75em; color: #3f3e3f; padding: 1em; box-sizing: border-box;'>
                                <p style='letter-spacing: 1.5px; line-height: 1.75em;'><span style='font-size: 14px;'>临近年底忙到飞起，偏偏这会儿老板催你交年终总结，毫无头绪、真心崩溃！年终总结年年写，如何算好“年终账”、明晰来年的计划？</span></p>
                                <p style='letter-spacing: 1.5px; line-height: 1.75em;'><span style='font-size: 14px;'>对多数人来说，年复一年的工作，如果没有太大的变动，撰写年终总结说不上创新深刻，因而也就是“年年总结年年似”。别烦，“套路”在手，总结不愁！</span></p>
                                <p style='letter-spacing: 1.5px; line-height: 1.75em;'><br></p>
                            </section>
                        </section>
                        <p><br></p>
                    </section>`
    }
  },
  created() {},
  beforeMount() {},
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
  methods: {
    canvasClick(event) {
      this.eventOffsetX = event.pageX
      this.eventOffsetY = event.pageY
      this.isCanvas = true
      setTimeout(() => {
        this.isCanvas = false
      }, 500)
    }
  },
  watch: {}
}
</script>
<style lang='less' scoped>
.main-box {
  width: 1200px;
  margin: 0 auto;
  padding: 5px 0;
}
.blo-item {
  margin: 30px 0;
  padding: 20px;
  text-align: center;
  color: #4d4d4d;
  background-color: rgba(250, 250, 250, 1);
  border-radius: 5px;
  .blog-title {
    font-size: 2rem;
    color: #010101;
    padding: 0 20px;
    font-weight: bold;
  }
}
@media screen and (max-width: 1200px) {
  .main-box {
    width: 100%;
  }
}
</style>
