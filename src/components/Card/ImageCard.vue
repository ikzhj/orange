<template>
  <a-card hoverable style="width: 268px">
    <template #cover>
      <a-image
          style="height: 200px"
          :preview="{ visible: false }" alt="example"
               src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" @click="visible = true"/>
      <div style="display: none">
        <a-image-preview-group :preview="{ visible, onVisibleChange: vis => (visible = vis) }">
          <a-image
              src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
          />
          <a-image
              src="https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp"
          />
          <a-image
              src="https://gw.alipayobjects.com/zos/antfincdn/cV16ZqzMjW/photo-1473091540282-9b846e7965e3.webp"
          />
          <a-image
              src="https://gw.alipayobjects.com/zos/antfincdn/x43I27A55%26/photo-1438109491414-7198515b166b.webp"
          />
        </a-image-preview-group>
      </div>
    </template>
    <a-card-meta title="Europe Street beat">
      <template #description>www.instagram.com</template>
    </a-card-meta>
  </a-card>
</template>

<script setup lang="ts">
import {ref} from 'vue'

const visible = ref(false)
</script>

<style lang="less" scoped>
.ant-card {
  margin-right: 24px;
  margin-bottom: 24px;
}
</style>