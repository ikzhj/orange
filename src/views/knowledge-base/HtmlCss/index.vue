<template>
  <div class="flex_box">
    <BoxCard v-for="(item,index) in data" :key="index" :data="item">
      <Timeline v-if="index === 0"/>
      <Buttons v-if="index === 1"/>
      <MenuHover v-if="index === 2"/>
    </BoxCard>
  </div>

</template>

<script setup lang="ts">
import BoxCard from "@/components/Card/BoxCard.vue";
import Timeline from './components/TimeLine.vue'
import {reactive} from "vue";
import Buttons from "@/views/knowledge-base/HtmlCss/components/Buttons.vue";
import MenuHover from "@/views/knowledge-base/HtmlCss/components/MenuHover.vue";

const data = reactive([
  {
    title: '流态旋转时间轴',
    description: '以流动图片作为元素，加上循环动画来展示时间的流动',
  }, {
    title: '按钮效果',
    description: '通过阴影，颜色，动画实现按钮的不同动态效果',
  }, {
    title: '菜单悬停',
    description: '立体菜单，鼠标移入菜单项，对应菜单项会向右移出一部分并高亮显示当前菜单项',
  }])
</script>

<style scoped lang="less">
.flex_box {
  display: flex;
  flex-wrap: wrap;
}
</style>