<template>
  <right-sider>
    <vertical-right-outlined @click="router.push({path:'/home'})"/>
    <br>
    sdsss
  </right-sider>
  <!-- <Card name="项目经历" icon-name="project" bg-color="#7065EC">
    <Projects/>
  </Card> -->
</template>

<script setup lang="ts">
// import Card from "@/components/OrdinaryCard.vue";
// import Projects from "@/views/about-me/components/Projects.vue";

import RightSider from "@/components/Layout/RightSider.vue";
import {VerticalRightOutlined} from '@ant-design/icons-vue';
import {useRouter} from "vue-router";

const router = useRouter();

</script>

<style scoped>

</style>