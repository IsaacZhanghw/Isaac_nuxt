<!-- 头部页面 -->
<template>
  <div class="none-box">
    <div class="none-inline">
      <router-link class="watermelon-icon" :to="{path: '/'}">
        <img src="~/static/watermelon.png" class="none-icon" alt="">
      </router-link>
      空的哦,给Isaac催更吧  (〃'▽'〃)
    </div>
  </div>
</template>
<script>
export default {
  name: 'noData',
  data() {
    return {
      showModal: false
    }
  },
  computed: {},
  methods: {}
}
</script>
<style lang="less" scoped>
.none-box {
  text-align: center;
  padding-top: 50px;
  .none-inline {
    display: inline-block;
    height: 50px;
    line-height: 50px;
    position: relative;
  }
  .watermelon-icon {
    position: absolute;
    top: 50%;
    left: 110%;
    transform: translate(0, -50%);
  }
}
</style>
