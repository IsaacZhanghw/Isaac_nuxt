<template>
  <div class="index-bg">
    <lemon-head></lemon-head>
    <!-- <div class="background-box">
      <img src="~/static/isaacAbout.jpg" class="swiper-item" />
    </div> -->
    <main id="main" class="main-box">
      <article>
        <section class="title" style="font-size: 22px; line-height: 1.4; margin-bottom: 24px;">
          <h2 style="padding:0px; color:#333; border:none; max-width: none; font-weight: 400;">
            关于作者的简单说明
          </h2>
          <blockquote class="preface">
            <span style="color: #888888;">伤春岂我事？冷眼看花容！飞扬造时代，煮酒论英雄。</span>
          </blockquote>
        </section>

        <section class="reason">
          <h2 style="border-color: #3b78e7; color: #3b78e7;">凡事皆有理由</h2>
          <p> 一直就想写一个真正的博客，能够记录平日所思所想。
            既然说过就去做吧！“写一个博客有很多好处，却没有任何明显的坏处”，为什么不呢？
            在折腾中慢慢学习，虽然依旧比不上诸位前辈，也在一点一点提升，更重要的是觉得自己比较喜欢这种事情。
            现在GitHub与独立博客几乎是程序员的标配了，在网络上有一块自由的角落，认识很多有意思的人，太幸福了。
            那么，现在起，立志成为一名改变世界程序员！或者其中之一。
          </p>
        </section>

        <section class="focus">
          <h2 style="border-color: #ea4335; color: #ea4335;">连峰是否天晴</h2>
          <p> 因此，本站聚焦一切有趣的东西，并深信它们将改变世界。
            当然咯，这也可能只是作者的一厢情愿，不过这样保持期待也不错。
            如果大家有不同意见，欢迎交流，一般都会回复，如果觉得很重要的问题也可以发邮件给我哦。
          </p>
        </section>

        <section class="contact">
          <h2 style="border-color: #fbbc50; color: #fbbc50;">稍微做个好梦</h2>
          <p> 下面是作者信息 </p>
          <p> 95后男生，常用网名@小桐桐，中二病，喜欢日常番，讨厌打游戏，loli是梦想，JK也可以，
            爱好航模，画画，化学，植物，猫，计算机，改革，听歌，回忆往事...
            也希望能交到很多朋友。
          </p>
          <div class="link">
            <p>
              Email : <a href="mailto:ethdthnt@gmail.com">ethdthnt@gmail.com</a>
            </p>
            <p>
              Github : <a href="https://github.com/arbent">https://github.com/arbent</a>
            </p>
          </div>
        </section>

        <section class="other">
          <h2 style="border-color: #34a853; color: #34a853;">明灯照亮之物</h2>
          <p> 本站主题是自己东拼西凑来的，后端也是初次搭建，当前服务不稳定还望见谅。
            如果觉得内容有意思，转载请注明出处。
            想加友链的话可以发邮件给我，如果想捐赠的话，嘿嘿那就不必啦，我会在心里小声感谢你的(ฅ´ω`ฅ)。
          </p>
        </section>
      </article>

      <p class="edit-date" style="text-align: right;">
        <em style="margin: 1em; color: #888888;">最后编辑于2018-10-10</em>
      </p>
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
  background-color: rgba(250, 250, 250, 0.8);
  margin-top: 50px;
}
</style>