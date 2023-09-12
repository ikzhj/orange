<template>
  <a-layout style="min-height: 100vh">
    <a-layout>
      <a-layout-content><slot></slot></a-layout-content>
      <a-layout-footer style="text-align: center">
        &copy;{{ moment().format('YYYY') }} 落日橘子洲
      </a-layout-footer>
    </a-layout>
    <a-layout-sider>Sider</a-layout-sider>
  </a-layout>
</template>

<script setup lang="ts">

import moment from "moment";

</script>

<style scoped>
.site-layout .site-layout-background {
  background: #fff;
}

[data-theme='dark'] .site-layout .site-layout-background {
  background: #141414;
}
</style>