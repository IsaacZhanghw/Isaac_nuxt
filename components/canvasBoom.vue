<template>
  <div>
    <canvas id="canvasBoom" width="50px" height="50px"></canvas>
  </div>
</template>
<script>
export default {
  name: 'boomBox',
  mounted() {
    let that = this
    var booms = {};
    draw();
    function draw() {
      var canvas = document.getElementById("canvasBoom");
      if (canvas == null) return false;
      var context = canvas.getContext('2d');
      context.clearRect(0, 0, 50, 50);
      context.save();
      context.translate(25, 25);
      var rg = context.createRadialGradient(0, 0, 0, 50, 0, 50);
      rg.addColorStop(0, '#F9059A');
      rg.addColorStop(1, '#C2EC49');
      context.lineCap = "round";
      context.strokeStyle = rg;

      for (var i = 1; i < 20; i++) {
        if (booms[i] && booms[i].id) {
          spread(booms[i]);
        } else {
          var start = random(1, 5);
          var height = random(1, 25);
          var angle = random(10, 360);
          var width = random(1, 2);
          booms[i] = new boom(i, context, start, height, angle, width);
        }
        drawLine(booms[i]);
      }
      context.restore();
      setTimeout(draw, 100);
    }

    function spread(boom) {
      boom.start += 5;
      if (boom.height > 3) {
        boom.height -= 3;
        boom.angle += 1;
      }
    }

    function boom(id, ctx, start, height, angle, width) {
      this.id = id;
      this.ctx = ctx;
      this.start = start;
      this.height = height;
      this.angle = angle;
      this.width = width;
      this.maxheight = 3 * (start + height);
    }

    function drawLine(boom) {
      if (boom.start + boom.height < boom.maxheight) {
        boom.ctx.lineWidth = boom.width;
        boom.ctx.save();
        boom.ctx.rotate(Math.PI * 2 / 360 * boom.angle)
        boom.ctx.beginPath();

        boom.ctx.moveTo(boom.start, 0);

        boom.ctx.lineTo(boom.start + boom.height, 0)
        boom.ctx.stroke();
        boom.ctx.restore();
      }
    }

    function random(start, end) {
      return Math.round(Math.random() * (end - start) + start);
    }
  },
}

</script>
<style lang="less" scoped>

</style>
