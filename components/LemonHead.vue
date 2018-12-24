<!-- 头部页面 -->
<template>
  <div class="layout">
    <div class="head-box">
      <router-link class="left" :to="{path: '/'}">
        <img src="~/static/Banana.png" class="head-item" alt="">
      </router-link>
      <ul class="head-huge">
        <li v-for="(item,index) in linkList" :key="index" class="head-item click-hover right" @click="goLink(item.link)" @mouseover='headOver(index)' @mouseout='headOut(index)'>
          <div class="link-title">
            {{item.title}}
            <b v-if="item.activeBorder" class="link-border"></b>
            <transition name="fade">
              <b v-if="item.border" class="link-border"></b>
            </transition>
          </div>
        </li>
      </ul>
      <div class="clearfix"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'LemonHead',
  data() {
    return {
      showModal: false,
      linkList: [
        { link: 'link', title: '友链', activeBorder: false, border: false },
        { link: 'about', title: '关于', activeBorder: false, border: false },
        { link: 'blog', title: '文章', activeBorder: false, border: false },
        { link: 'index', title: '首页', activeBorder: false, border: false }
      ]
    }
  },
  beforeMount() {},
  mounted() {
    // 导航列表遍历
    this.linkList.forEach(item => {
      // 所有激活边框置否
      item.activeBorder = false
      if (this.$nuxt.$route.name == item.link) {
        item.activeBorder = true
      }
    })
  },
  computed: {},
  methods: {
    // 导航跳转
    goLink: function(link) {
      this.$router.push({ path: link })
      this.linkList.forEach(item => {
        // 所有激活边框置否
        item.activeBorder = false
        console.log('this.$nuxt.$route.name',this.$nuxt.$route.name)
        if (this.$nuxt.$route.name == item.link) {
          item.activeBorder = true
        }
      })
    },
    // 鼠标移入边框激活
    headOver: function(index) {
      this.linkList.forEach(item => {
        if (this.linkList[index].activeBorder) {
          return
        } else {
          this.linkList[index].border = true
        }
      })
    },
    // 鼠标移出所有边框置否
    headOut: function(index) {
      this.linkList.forEach(item => {
        item.border = false
      })
    },
    // 小屏下模态框打开方法
    menuModal: function() {
      this.showModal = true
    },
    closeModal() {
      this.showModal = false
    },
    // 小屏下鼠标移入边框激活
    headOverReverse: function(index) {
      this.linkListReverse.forEach(item => {
        if (this.linkListReverse[index].activeBorder) {
          return
        } else {
          this.linkListReverse[index].border = true
        }
      })
    },
    // 小屏下鼠标移入边框置否
    headOutReverse: function(index) {
      this.linkListReverse.forEach(item => {
        item.border = false
      })
    }
  }
}
</script>
<style lang="less" scoped>
.layout {
  width: 100%;
  background-color: rgba(156, 8, 250, 0.3);
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
}
.head-box {
  width: 1200px;
  margin: 0 auto;

  .head-item {
    color: #5a5a5a;
    height: 40px;
    line-height: 40px;
    cursor: pointer;
  }

  .link-title {
    padding: 0 20px;
    font-family: 'Noto Sans CJK SC DemiLight', 'Source Han Sans CN DemiLight';
    color: #fdf5fe;
    letter-spacing: 2px;
    position: relative;
  }

  .link-border {
    display: block;
    width: 100%;
    height: 3px;
    border-bottom: 3px solid #fecc01;
    position: absolute;
    bottom: 0;
    left: 0;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: transform 0.5s;
}

.fade-enter,
.fade-leave-to {
  transform: scaleX(0);
}
</style>
