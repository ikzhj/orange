<template>
  <div class="nav_box">
    <a-divider style="height: 5px;border-color:  rgba(255, 255, 255, 0.06)" />
    <a-row justify="space-between">
      <a-col :span="6">保留所有权利</a-col>
      <a-col :span="6" :offset="12" class="text_right">&copy;{{ moment().format('YYYY') }} 落日橘子洲</a-col>
    </a-row>
  </div>
</template>

<script setup lang="ts">
import moment from "moment";
</script>

<style scoped lang="less">
.nav_box{
  height: 72px;
  //border: 1px solid #fff;
}
</style>