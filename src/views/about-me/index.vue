<template>
  <Card name="基本资料" icon-name="project" bg-color="#7065EC"></Card>
  <Card name="教育背景" icon-name="project" bg-color="#7065EC"></Card>
  <Card name="专业技能" icon-name="project" bg-color="#7065EC"></Card>
  <Card name="工作经历" icon-name="project" bg-color="#7065EC"></Card>
  <Card name="项目经历" icon-name="project" bg-color="#7065EC">
    <Projects/>
  </Card>
</template>

<script setup lang="ts">
import Card from "@/components/Card.vue";
import Projects from "@/views/about-me/components/Projects.vue";

</script>

<style scoped>

</style>