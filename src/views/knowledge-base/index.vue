<template>
  <LeftSider>
    <div v-for="i in 10" :key="i">Bill is a cat.1234</div>
    <router-view></router-view>
  </LeftSider>
</template>

<script setup lang="ts">

import LeftSider from "@/components/Layout/LeftSider.vue";
</script>

<style scoped>

</style>