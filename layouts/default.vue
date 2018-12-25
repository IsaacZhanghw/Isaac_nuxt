<template>
  <div class="nuxt-box" @click='canvasClick'>
    <nuxt />
    <canvas-boom v-if="isCanvas" class="canvas-boom" :style="{top: eventOffsetY + 'px', left: eventOffsetX + 'px'}"></canvas-boom>
  </div>
</template>
<script>
import LemonHead from '@/components/LemonHead'
import LemonFoot from '@/components/LemonFoot'
import canvasBoom from '@/components/canvasBoom'

export default {
  name: 'smart',
  components: {
    LemonHead,
    LemonFoot,
    canvasBoom
  },
  data() {
    return {
      isCanvas: false,
      eventOffsetX: 0,
      eventOffsetY: 0,
    }
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
<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
.canvas-boom {
  position: absolute;
  transform: translate(-50%, -50%);
  z-index: 10;
}
.nuxt-box{
background-color: rgba(203, 203, 203, .5);
}
</style>
