<template>
  <div class="home-page">
    <div class="first-wrap">
      <div class="content">
        <div class="bubble"></div>
        <div class="text-3xl font-Arial-BoldMT mt-5 mg:text-5xl lg:text-8xl">Formless</div>
        <div class="title">REDEFINING WEB 3.0 GAMING</div>
      </div>
      <div class="machine">
        <div class="round-img"></div>
        <div class="logo-img"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
  .home-page {
    width: 100%;
    .first-wrap {
      overflow: hidden;
      width: 100%;
      // height: 715px;
      background-image: url(../../assets/images/homeImg/first.png);
      background-repeat: no-repeat;
      position: relative;
      background-size: 100%;
      .content {
        .bubble {
          // width: 100px;
          // height: 80px;
          background-image: url(../../assets/images/homeImg/bubble.png);
          background-repeat: no-repeat;
          background-position: center;
          margin-top: 80px;
        }
        .name {
          font-size: 100px;
          line-height: 100px;
          color: #fdfbfc;
          margin-top: 20px;
          font-weight: bold;
          font-family: 'Arial-BoldMT';
        }
        .title {
          font-size: 40px;
          font-weight: bold;
          color: #b4afc5;
          font-family: 'Arial-BoldMT';
          margin-top: 34px;
        }
        .start-btn {
          padding: 0 20px;
          margin-top: 55px;
          margin-bottom: 258px;
        }
      }
      .machine {
        // width: 850px;
        // height: 610px;
        background-image: url(../../assets/images/homeImg/1.png);
        background-repeat: no-repeat;
        background-position: top left;
        position: absolute;
        // top: 130px;
        // right: 0;
        .round-img {
          // width: 133px;
          // height: 133px;
          background-image: url(../../assets/images/homeImg/first-1.png);
          position: absolute;
          // top: -28px;
          // left: 320px;
        }
        .logo-img {
          // width: 65px;
          // height: 75px;
          background-image: url(../../assets/images/homeImg/first-2.png);
          position: absolute;
          // top: -8px;
          // left: 350px;
        }
      }
    }
  }
</style>
