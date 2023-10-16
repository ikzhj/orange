<template>
  <div v-if="selectedKeys !== '1'">
    <div v-for="i in selectedKeys" :key="i">{{ i }}**!!</div>
  </div>
  <HtmlCssIndex v-else />
</template>

<script setup lang="ts">
import HtmlCssIndex from './HtmlCss/index.vue'

const props = defineProps({
  selectedKeys: {
    type: String,
    required: true
  }
})
</script>

<style scoped>

</style>