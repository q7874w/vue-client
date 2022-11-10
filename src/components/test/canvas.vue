<!-- 签名 -->
<script setup lang="ts">
  import PageHeader from './components/header.vue'
  import { ref, onMounted } from 'vue'
  onMounted(() => {
    canvasDrawPC()
    // canvasDrawH5()
  })

  const canvasDrawH5 = () => {
    document.body.addEventListener(
      'touchmove',
      function (e) {
        e.preventDefault()
      },
      { passive: false }
    )
    const cvs = document.getElementById('cvs')
    let ctx = (cvs as HTMLCanvasElement).getContext('2d')
    let isDrawing = ref(false)
    if (!cvs || !ctx) return
    ctx.lineWidth = 4

    cvs.ontouchstart = function (e) {
      ctx!.beginPath()
      ctx!.moveTo(e.touches[0].pageX, e.touches[0].pageY - 80)
    }

    cvs.ontouchmove = function (e) {
      ctx!.lineTo(e.touches[0].pageX, e.touches[0].pageY - 80)
      ctx!.stroke()
    }

    cvs.ontouchend = function (e) {
      ctx!.closePath()
    }
  }
  const canvasDrawPC = () => {
    const cvs = document.getElementById('cvs')
    let ctx = (cvs as HTMLCanvasElement).getContext('2d')
    let isDrawing = ref(false)
    if (!cvs || !ctx) return
    ctx.lineWidth = 4

    cvs.onmousedown = function (e) {
      isDrawing.value = true
      ctx!.beginPath()
      ctx!.moveTo(e.pageX, e.pageY - 80)
    }

    cvs.onmousemove = function (e) {
      if (isDrawing.value) {
        ctx!.lineTo(e.pageX, e.pageY - 80)
        ctx!.stroke()
      }
    }

    cvs.onmouseup = function (e) {
      isDrawing.value = false
    }
  }
</script>

<template>
  <page-header />
  <canvas id="cvs" ref="cvs" width="600" height="300"></canvas>
</template>

<style>
  #cvs {
    border: 1px solid #333;
    border-radius: 18px;
  }
</style>
