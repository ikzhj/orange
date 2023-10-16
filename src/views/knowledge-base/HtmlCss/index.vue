<template>
  <BoxCard :data="data" ><Timeline /></BoxCard>

</template>

<script setup lang="ts">
import BoxCard from "@/components/Card/BoxCard.vue";
import Timeline from './TimeLine.vue'
import {reactive, ref} from "vue";

const data = reactive({
  title: '流态旋转时间轴',
  description: '以流动图片作为元素，加上循环动画来展示时间的流动',
})
</script>

<style scoped>

</style>