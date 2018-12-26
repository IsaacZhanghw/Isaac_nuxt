<template>
  <div class="index-bg">
    <lemon-head></lemon-head>
    <main id="main" class="main-box">
      <article style="color: #4D4D4D;">
        <section style="font-size: 22px; line-height: 1.4; margin-top: 24px; margin-bottom: 24px; text-align: center;">
          <h2 style="padding:0px; color:#010101; border:none; max-width: none; font-weight: 400;">
            一些简要说明
          </h2>
        </section>
        <section style="text-align: center; margin-bottom: 24px;">
          <p>
            自己的一个小小博客，简单且粗糙，诸位见笑，工作之余慢慢搭建罢。
          </p>
          <img style="width: 30px; margin-top: 14px;" src="~/static/images/fish.png" alt="">
        </section>
        <section style="text-align: center; margin-bottom: 24px;">
          <p> 所以，本站是自己在互联世界的一个小窝。
          </p>
          <img style="width: 30px; margin-top: 14px;" src="~/static/images/crab.png" alt="">
        </section>
        <section style="text-align: center; margin-bottom: 24px;">
          <p> 93水瓶男，渣渣前端er。
            也希望能交到一些朋友，在世界互联起来。
          </p>
          <img style="width: 30px; margin-top: 14px;" src="~/static/images/prawn.png" alt="">
        </section>

        <section style="text-align: center; margin-bottom: 24px;">
          <p> 前端页面东拼西凑来的，后端也是初次搭建，当前服务不稳定还望见谅。
            ( 当然人数访问量不多服务器也没啥压力 ~逃(ง˙o˙)ว)
          </p>
        </section>
        <section style="text-align: center;">
          <img style="width: 150px;" src="~/static/images/cuteAbout.gif" alt="">
        </section>
      </article>
    </main>
    <lemon-foot class="foot"></lemon-foot>
  </div>
</template>
<script>
import LemonHead from '@/components/LemonHead'
import LemonFoot from '@/components/LemonFoot'

export default {
  name: 'smart',
  components: {
    LemonHead,
    LemonFoot
  },
  data() {
    return {}
  },
  created() {},
  beforeMount() {},
  computed: {},
  mounted: function() {},
  methods: {},
  watch: {}
}
</script>
<style lang='less' scoped>
.background-box {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -100;
}
.swiper-item {
  width: 100%;
  object-fit: cover;
}
.main-box {
  width: 1200px;
  margin: 0 auto;
  padding: 5px 0;
  padding-top: 50px;
}
@media screen and (max-width: 1200px) {
  .main-box {
    width: 100%;
  }
}
</style>