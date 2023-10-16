<template>
  <a-card hoverable style="width: 460px">
    <template #cover>
      <div class="box"><slot></slot></div>
    </template>
    <a-card-meta :title="data.title">
      <template #description>{{ data.description }}</template>
    </a-card-meta>
  </a-card>
</template>

<script setup lang="ts">
const props = defineProps({
  data: null
})
</script>

<style scoped lang="less">
.ant-card {
  margin-right: 24px;
  margin-bottom: 24px;
}
.box{
  width: 460px;
  height: 460px;
  border-radius: 8px 8px 0 0;
  padding: 8px;
}
</style>