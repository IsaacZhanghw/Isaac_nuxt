<!-- 头部页面 -->
<template>
  <div class="layout">
    <div class="head-box">
      <nuxt-link
        class="left"
        :to="{path: '/'}"
      >
        <img
          src="http://website.lemonread.com/logo.png"
          class="head-item head-item-huge"
          alt="柠檬,博阅,柠檬悦读,柠檬阅读,阅读,学生阅读,分级阅读,阅读习惯,K12教育,小柠檬教育科技,让孩子爱上阅读"
        >
        <img
          src="http://website.lemonread.com/slogan.png"
          class="head-item head-item-huge"
          style="margin-left: 20px;"
          alt="柠檬,博阅,柠檬悦读,柠檬阅读,阅读,学生阅读,分级阅读,阅读习惯,K12教育,小柠檬教育科技,让孩子爱上阅读"
        >
      </nuxt-link>
      <div class="head-huge">
        <nuxt-link
          v-for="(item,index) in linkList"
          :key="index"
          class="head-item head-link-item  click-hover right router-link-active"
          :to=" item.link == 'index' ? '/' : '/' + item.link"
        >
          <div
            class="link-title"
            @mouseover='headOver(index)'
            @mouseout='headOut(index)'
          >
            {{item.title}}
            <b
              v-if="item.activeBorder"
              class="link-border"
            ></b>
            <transition name="fade">
              <b
                v-if="item.border"
                class="link-border"
              ></b>
            </transition>
          </div>
        </nuxt-link>
      </div>
      <div class="head-large">
        <p>
          <nuxt-link
            class="head-large-nuxt left"
            :to="{path: '/'}"
          >
            <p>
              小柠檬教育科技
            </p>
          </nuxt-link>
          <i
            class="iconfont icon-weibiaoti12 click-hover right"
            @click="menuModal"
          ></i>
        </p>
      </div>
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
        {
          link: 'about',
          title: '关于我们',
          activeBorder: false,
          border: false
        },
        {
          link: 'trial',
          title: '申请试用',
          activeBorder: false,
          border: false
        },
        {
          link: 'smart',
          title: '护眼阅读器',
          activeBorder: false,
          border: false
        },
        {
          link: 'index',
          title: 'APP客户端',
          activeBorder: false,
          border: false
        }
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
  computed: {
    // 小屏下导航顺序倒叙
    linkListReverse() {
      return this.linkList.concat().reverse()
    }
  },
  methods: {
    // 导航跳转
    goLink: function(link) {
      this.$nuxt.push({ path: link })
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
.modal {
  position: relative;

  .modal-content {
    position: fixed;
    box-sizing: border-box;
    width: 160px;
    height: 100%;
    right: 0;
    top: 0;
    background: rgba(0, 0, 0, 0.7);
    z-index: 50002;

    p {
      text-align: center;
      color: #fff;
      padding: 8px 0;
    }

    .link-title-reverse {
      letter-spacing: 2px;
      font-weight: 100;
      position: relative;

      .link-border {
        display: block;
        width: 8px;
        height: 100%;
        border-left: 8px solid #fecc01;
        position: absolute;
        left: 0;
        top: 0;
      }
    }
  }

  .mask {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 50001;
  }
}

.layout {
  width: 100%;
  background-color: #ffffff;
}

.head-box {
  width: 1200px;
  margin: 0 auto;
  padding: 20px 0;

  .head-item {
    height: 50px;
    line-height: 50px;
    cursor: pointer;
  }

  .link-title {
    padding: 0 20px;
    font-family: 'Noto Sans CJK SC DemiLight', 'Source Han Sans CN DemiLight';
    color: #5a5a5a;
    letter-spacing: 2px;
    font-weight: 100;
    text-decoration: none;
  }
  .router-link-active {
    text-decoration: none;
  }

  .link-border {
    display: block;
    width: 100%;
    height: 3px;
    border-bottom: 3px solid #fecc01;
  }

  .head-link-item:first-child {
    .link-title {
      padding-right: 0;
    }
  }

  .head-large {
    display: none;

    p {
      height: 40px;
      line-height: 40px;
      color: #fff;
      letter-spacing: 2px;
      font-weight: 100;

      .head-large-nuxt {
        width: 70%;
      }
    }
  }

  .head-item-large {
    display: none;
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

@media only screen and (max-width: 1320px) {
  .head-box {
    width: 1024px;

    .link-title {
      padding: 0 10px;
    }
  }

  .user-interaction {
    display: none;
  }
}

/* 960 */
@media only screen and (max-width: 1080px) {
  .layout {
    width: 1200px;
  }
}
</style>
