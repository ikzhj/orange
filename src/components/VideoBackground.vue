<template>
  <div class="video-box">
    <video class="video-background" preload="auto" loop playsinline autoplay src="../assets/video/bgmp4.mp4" tabindex="-1"
      muted />
    <div class="layer">
      <img src="/logo.svg" alt="bytedance" />
      <div class="slogan">
        <div class="subtitle">激发创造，丰富生活</div>
        <div class="title">欢迎来到落日橘子洲</div>
        <div class="try-btn" @click="router.push({ path: '/home' })">了解更多</div>
      </div>
      <!-- <div class="animation_down down_arrow">
        <div class="arrow">
          <svg-icon name="down"/>
          <svg-icon name="down"/>
          <svg-icon name="down"/>
          <svg-icon name="down"/>
          <svg-icon name="down"/>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script setup lang="ts">

// import SvgIcon from "@/components/IconSvg.vue";
import { useRouter } from 'vue-router'

const router = useRouter()

</script>

<style scoped lang="less">
.video-box {
  position: relative;
  height: 100vh;
  background-color: #C1CFF7;
  /*进行视频裁剪*/
  overflow: hidden;
}

.video-box .video-background {
  position: absolute;
  left: 50%;
  top: 50%;
  /*保证视频内容始终居中*/
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  /*保证视频充满屏幕*/
  object-fit: cover;
  min-height: 800px;
}

.layer {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  background: rgba(19, 60, 154, .2);

  img {
    width: 120px;
    height: 60px;
    margin-top: 15px;
    margin-left: 100px;
  }

  .slogan {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 684px;
    color: white;
    text-align: center;

    .title {
      font-weight: 550;
      font-size: 56px;
      margin: 0 0 16px;
    }

    .subtitle {
      font-weight: 550;
      font-size: 20px;
      letter-spacing: 10px;
      margin: 0 0 16px;
    }

    .try-btn {
      position: relative;
      left: 50%;
      width: 156px;
      height: 54px;
      line-height: 54px;
      margin-top: 40px;
      margin-left: -78px;
      color: #3370ff;
      background: white;
      text-align: center;
      border-radius: 100px;
      font-weight: 600;
      cursor: pointer;
    }
  }

  .animation_down {
    position: absolute;
    left: 50%;
    top: 80%;
    width: 120px;
    height: 180px;
    line-height: 54px;
    margin-top: 40px;
    margin-left: -78px;
    color: #3370ff;
    font-weight: 600;
    //background: white;
    overflow: hidden;

    .arrow {
      -webkit-animation: 2s down_arrow linear infinite normal;
      animation: 2s down_arrow linear infinite normal;
      position: relative;
    }

    .svg-icon {
      display: block;
      width: 120px;
      height: 60px;
    }
  }
}

@keyframes down_arrow {
  0% {
    -webkit-transform: translate3d(0, -100px, 0);
    transform: translate3d(0, -100px, 0);
  }

  100% {
    -webkit-transform: translate3d(0, 200px, 0);
    transform: translate3d(0, 200px, 0);
  }
}
</style>