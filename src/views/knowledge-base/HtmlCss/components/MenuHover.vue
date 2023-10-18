<template>
  <!--  <div>-->
  <!--    菜单悬停效果H-->
  <!--  </div>-->
  <div class="menu_box">
    <ul>
      <li style="--i:6"><a href="#">Home</a></li>
      <li style="--i:5"><a href="#">About</a></li>
      <li style="--i:4"><a href="#">Services</a></li>
      <li style="--i:3"><a href="#">Portfolio</a></li>
      <li style="--i:2"><a href="#">Our Team</a></li>
      <li style="--i:1"><a href="#">Contact</a></li>
    </ul>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="less">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Arial;
}

.menu_box {
  padding-left: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100%;
  background-color: #434750;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;

  ul {
    position: relative;
    transform: skewY(-12deg);

    li {
      text-align: center;
      position: relative;
      list-style: none;
      width: 160px;
      background-color: #3e3f46;
      padding: 14px;
      transition: 0.5s;
      z-index: var(--i);
      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: -40px;
        width: 40px;
        height: 100%;
        background-color: #2e3133;
        transform-origin: right;
        transform: skewY(45deg);
        transition: 0.5s;
      }

      &::after {
        content: '';
        position: absolute;
        top: -40px;
        left: 0;
        width: 100%;
        height: 40px;
        background-color: #35383e;
        transform-origin: bottom;
        transform: skewX(45deg);
        transition: 0.5s;
      }
      &:last-child::after{
        box-shadow: -100px 100px 20px rgba(0,0,0,.25);
      }

      &:hover {
        a {
          color: white;
        }

        background-color: #33a3ee;
        transform: translateX(50px);
        &::before{
          background-color: #1f5378;
        }
        &::after{
          background-color: #2982b9;
        }
      }

      a {
        color: #999;
        text-decoration: none;
        display: block;
        text-transform: uppercase;
        letter-spacing: 0.1em;
        transition: 0.5s;
      }
    }
  }
}
</style>