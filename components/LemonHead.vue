<!-- 头部页面 -->
<template>
  <div class="layout">
    <div class="head-box">
      <nuxt-link v-for="(item,index) in linkList" :key="index" class="click-hover router-link-active" :to="item.link == 'index' ? '/' : '/' + item.link">
        <div class="link-title" @mouseover='headOver(index)' @mouseout='headOut(index)'>
          <img :src="item.image" class="head-item head-item-huge">
          <b :class="item.activeBorder ? 'link-border' : ''"></b>
        </div>
      </nuxt-link>
    </div>
  </div>
</template>
<script>
import home from '../static/home.png'
import about from '../static/about.png'
import link from '../static/link.png'
export default {
  name: 'LemonHead',
  data() {
    return {
      showModal: false,
      linkList: [
        {
          link: 'index',
          activeBorder: false,
          border: false,
          image: home
        },
        {
          link: 'about',
          activeBorder: false,
          border: false,
          image: about
        },
        {
          link: 'link',
          activeBorder: false,
          border: false,
          image: link
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

  },
  methods: {
    // 导航跳转
    goLink: function(link) {
      this.$nuxt.push({ path: link })
    },
    // 鼠标移入边框激活
    headOver: function(index) {
      console.log('index', index)
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
  }
}
</script>
<style lang="less" scoped>
.layout {
  width: 100%;
  font-size: 0px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
}

.head-box {
  width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: flex-end;
  .head-item {
    height: 50px;
    line-height: 50px;
    cursor: pointer;
    position: relative;
    z-index: 3;
  }

  .link-title {
    padding: 0 20px;
    position: relative;
    z-index: 4;
  }
  .router-link-active {
    text-decoration: none;
  }

  .link-border {
    display: block;
    width: 100%;
    height: 50%;
    background-color: #43e9ff;
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translate(-50%);
    z-index: 0;
    animation: titleFrames 5s forwards;
  }

  .head-link-item:first-child {
    .link-title {
      padding-right: 0;
    }
  }
}

@keyframes titleFrames {
  to {
    height: 100%;
  }
}
</style>
