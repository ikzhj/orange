<template>
  <a-card hoverable style="width: 268px">
    <template #cover>
      <a-image
          style="height: 200px"
          :preview="{ visible: false }" alt="example"
          :src="data.images[0]" @click="visible = true"/>
      <div style="display: none">
        <a-image-preview-group :preview="{ visible, onVisibleChange: (vis) => (visible = vis) }">
          <a-image v-for="el in data.images" :key="el" :src="el"/>
        </a-image-preview-group>
      </div>
    </template>
    <a-card-meta :title="data.title">
      <template #description>{{ data.description }}</template>
    </a-card-meta>
  </a-card>
</template>

<script lang="ts" setup>
import {ref} from 'vue';

const visible = ref(false);
const props = defineProps({
  data: null
})
// console.log(props.data, "===")
</script>

<style lang="less" scoped>
.ant-card {
  margin-right: 24px;
  margin-bottom: 24px;
}
</style>