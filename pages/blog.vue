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
                    </section>`,
      blogList: [
        {
          title: 'DARLING in the FRANXX \u535a\u5ba2\u6837\u5f0f',
          url: '/darling-in-the-franxx-style/',
          time: 5814,
          createdAt: '2018-02-04T17:21:13.930Z',
          updatedAt: '2018-12-24T05:39:55.545Z',
          objectId: '5a774109ee920a0045e5e2b5'
        },
        {
          title:
            '\u5173\u4e8e\u5f00\u6e90\u9879\u76ee\u8d5e\u52a9\u8fd9\u4ef6\u4e8b',
          url: '/open-source-project-donation/',
          time: 11618,
          createdAt: '2018-03-05T18:21:57.662Z',
          updatedAt: '2018-12-24T08:45:20.053Z',
          objectId: '5a9d8ac5d50eee2ea31c3ba0'
        },
        {
          title: '\u66b4\u8d70 yu \u4eba\u8282\u53c2\u5c55\u65e5\u8bb0',
          url: '/2018-bao-zou-yu-ren-jie/',
          time: 2479,
          createdAt: '2018-04-01T18:44:26.793Z',
          updatedAt: '2018-12-23T02:17:10.498Z',
          objectId: '5ac1288a9f5454300103b898'
        },
        {
          title: 'RSSHub - \u4f7f\u7528 RSS \u8fde\u63a5\u5168\u4e16\u754c',
          url: '/rsshub/',
          time: 6079,
          createdAt: '2018-04-12T16:57:14.874Z',
          updatedAt: '2018-12-24T03:30:18.613Z',
          objectId: '5acf8feaac502e003ca4fbe5'
        },
        {
          title:
            '\u6280\u672f\u5b85\u4e5f\u8981\u8c08\u604b\u7231\u4e4b\u65e9\u5b89\u665a\u5b89\u81ea\u52a8\u5316',
          url: '/goodnight/',
          time: 12973,
          createdAt: '2018-04-24T19:06:13.927Z',
          updatedAt: '2018-12-24T09:20:54.554Z',
          objectId: '5adf802517d0090062803067'
        },
        {
          title: 'Polymer \u521d\u4f53\u9a8c',
          url: '/polymer/',
          time: 7235,
          createdAt: '2018-05-30T17:40:52.422Z',
          updatedAt: '2018-12-24T09:27:22.665Z',
          objectId: '5b0ee2249f54545e3adbc2d1'
        },
        {
          title: '2018 bw & bml \u53c2\u5c55\u65e5\u8bb0',
          url: '/bw2018/',
          time: 2153,
          createdAt: '2018-08-05T18:38:31.569Z',
          updatedAt: '2018-12-24T08:04:56.748Z',
          objectId: '5b674427fe88c2005b2d52be'
        },
        {
          title: '2018 ChinaJoy \u53c2\u5c55\u65e5\u8bb0',
          url: '/cj2018/',
          time: 2989,
          createdAt: '2018-08-10T16:25:02.849Z',
          updatedAt: '2018-12-24T06:57:22.470Z',
          objectId: '5b6dbc5e17d0090035bbf618'
        },
        {
          title: 'C94 & CP2018SP \u53c2\u5c55\u65e5\u8bb0',
          url: '/cp2018sp/',
          time: 6655,
          createdAt: '2018-08-26T08:45:17.752Z',
          updatedAt: '2018-12-24T08:37:15.156Z',
          objectId: '5b82689d67f356003436cd8f'
        },
        {
          title: '\u4ece\u96f6\u5f00\u59cb\u7684 NAS \u751f\u6d3b',
          url: '/nas/',
          time: 9811,
          createdAt: '2018-11-08T15:58:07.797Z',
          updatedAt: '2018-12-24T09:31:15.168Z',
          objectId: '5be45d0f67f3560062deefeb'
        }
      ]
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
