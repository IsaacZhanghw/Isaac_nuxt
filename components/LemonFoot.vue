<!-- 底部页面 -->
<template>
  <div class="layout">
    <div class="foot-box">
      <P>「 故事，不会有好的结局。」</P>
      <P class="footer-centent">
        Copyright © 2017 ISAAC
        <img src="~/static/aubergine.png" class="footer-icon" alt="">
      </P>
    </div>
  </div>
</template>
<script>
export default {
  name: 'LemonFoot',
  data() {
    return {}
  }
}
</script>
<style lang="less">
.layout {
  width: 100%;
  background-color: rgba(156, 8, 250, 0.3);
}
.foot-box {
  width: 1200px;
  margin: 0 auto;
  padding: 5px 0;
  color: #FDF5FE;
  font-size: 0.95rem;
  text-align: center;
  line-height: 26px;
}
.footer-centent {
  position: relative;
}
.footer-icon {
  height: 26px;
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
}
</style>
