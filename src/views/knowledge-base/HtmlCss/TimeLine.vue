<template>
  <div class="void" id="void">
    <div class="crop">
      <ul id="card-list" style="--count: 6;">
        <template v-for="(item,index) in data" :key="index">
          <li>
            <div class="card"><a href="">
              <span class="model-name">{{ item.title }}</span>
              <span>{{ item.content }}</span>
            </a></div>
          </li>
          <li>
            <div class="card">
              <a href="">
                <img src="./resource/timeline/03.gif" alt="">
              </a>
            </div>
          </li>
        </template>
      </ul>
      <div class="circle last-circle"></div>
      <div class="circle second-circle"></div>
    </div>
    <div class="mask"></div>
    <div class="center-circle"></div>
  </div>
</template>

<script setup lang="ts">

import {reactive} from "vue";

const data = reactive([
  {title: '1931年', content: '九一八事变，抗日起点'},
  {title: '1937年', content: '七七事变，全国全民族抗日'},
  {title: '1945年', content: '日本无条件投降，9月签署投降书'},
])
</script>

<style scoped lang="less">
/* 设置容器样式 */
.void {
  --rotate-speed: 40;
  --count: 6;
  --easing: cubic-bezier(0.000, 0.37, 1.000, 0.63);
  position: relative;
  aspect-ratio: 1/ 1;
  background-image: linear-gradient(to top, #a18cd177 0%, #fbc2eb77 100%);
}

/* 鼠标悬停时暂停动画 */
ul:hover * {
  animation-play-state: paused;
}

/* 设置列表样式 */
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  position: relative;
  width: 100%;
  aspect-ratio: 1 / 1;
  z-index: 1;

  li {
    position: absolute;
    top: 40%;
    transform: translateY(-60%);
    width: 100%;
    animation: rotateCW calc(var(--rotate-speed) * 1s) var(--easing) infinite;
  }
}

/* 设置卡片样式 */
.card {
  width: 47%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 6px;
  gap: 8px;
  background: #FFFFFF;
  box-shadow: 0px 4px 12px rgba(70, 0, 255, 0.1),
  0px 16px 32px rgba(165, 135, 255, 0.1);
  border-radius: 8px;
  font: 400 12px '';
  color: #535062;
  animation: rotateCCW calc(var(--rotate-speed) * 1s) var(--easing) infinite;

  img {
    width: 100%;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }

  /* 设置模型名称样式 */

  .model-name {
    font-weight: 600;
    font-size: 14px;
    display: block;
    line-height: 150%;
    letter-spacing: 3px;
    color: #6844f7;
  }
}

/* 设置链接样式 */
a {
  text-decoration: none;
  color: unset;
  display: block;
  height: 36px;
  overflow: hidden;
}

/* 设置不同列表项的动画延迟 */
li:nth-child(2),
li:nth-child(2) .card {
  animation-delay: calc((var(--rotate-speed) / var(--count)) * -1s);
}

li:nth-child(3),
li:nth-child(3) .card {
  animation-delay: calc((var(--rotate-speed) / var(--count)) * -2s);
}

li:nth-child(4),
li:nth-child(4) .card {
  animation-delay: calc((var(--rotate-speed) / var(--count)) * -3s);
}

li:nth-child(5),
li:nth-child(5) .card {
  animation-delay: calc((var(--rotate-speed) / var(--count)) * -4s);
}

li:nth-child(6),
li:nth-child(6) .card {
  animation-delay: calc((var(--rotate-speed) / var(--count)) * -5s);
}

/* 定义顺时针旋转动画 */
@keyframes rotateCW {
  from {
    transform: translate3d(50px, 90%, 10px) rotate(-45deg);
  }

  to {
    transform: translate3d(-90px, -50%, -10px) rotate(-315deg);
  }
}

/* 定义逆时针旋转动画 */
@keyframes rotateCCW {
  from {
    transform: rotate(45deg);
  }

  to {
    transform: rotate(315deg);
  }
}

/* 设置中心圆样式 */
.center-circle {
  position: absolute;
  width: 136px;
  aspect-ratio: 1 / 1;
  left: 30%;
  top: 50%;
  transform: translate(-50%, -50%);
  background: #FFFFFF;
  box-shadow: 0px 18px 36px -18px rgba(12, 5, 46, 0.3),
  0px 30px 60px -12px rgba(12, 5, 46, 0.25);
  border-radius: 50%;
  background-size: cover;
  background-position: -35px 0;
}

.circle {
  position: absolute;
  aspect-ratio: 1 / 1;
  top: 50%;
  left: 30%;
  transform: translate(-50%, -50%);
  background: #F5F4FE;
  box-shadow: 0px 18px 36px -18px rgba(12, 5, 46, 0.3),
  0px 30px 60px -12px rgba(12, 5, 46, 0.25);
  border-radius: 50%;
  background-image: url(./resource/timeline/03.gif);
}

/* 设置第二个圆样式 */
.second-circle {
  width: 48%;
  opacity: 0.7;
}

/* 设置最后一个圆样式 */
.last-circle {
  width: 70%;
  opacity: 0.25;
}

/* 设置裁剪样式 */
.crop {
  -webkit-mask-image: linear-gradient(90deg,
  rgba(0, 0, 0, 0), rgba(0, 0, 0, 0) 30%,
  rgba(0, 0, 0, 1) 30%, rgba(0, 0, 0, 1));
}

/* 设置遮罩样式 */
.mask {
  position: absolute;
  top: 0;
  left: -43px;
  bottom: 0;
  width: 40%;
  background-position: 100% 50%;
  background-repeat: no-repeat;
  background-image: radial-gradient(100% 50% at 100% 50%,
  rgba(60, 26, 229, 0.25) 0%,
  rgba(59, 26, 229, 0.241896) 20%,
  rgba(53, 26, 229, 0.1872) 40%,
  rgba(41, 23, 240, 0.104) 60%,
  rgba(34, 26, 229, 0.0184296) 90%,
  rgba(32, 26, 229, 0) 100%);
}
</style>