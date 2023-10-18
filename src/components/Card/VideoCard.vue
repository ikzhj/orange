<template>
  <a-card hoverable style="width: 268px">
    <template #cover>
      <div class="out_box">
        <div class="in_box">
          <video class="video-background" controls preload="none" :src="data.videoAddress" muted/>
        </div>
      </div>
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

.out_box {
  width: 240px;
  height: 150px;
  border-radius: 8px;
  transform: rotate(10deg);
  background: url("../../assets/StockImages/videobg.png");
  background-size: cover;
  margin: 0 auto;
  margin-top: 18px;
  margin-bottom: 24px;

  .in_box {
    width: 240px;
    height: 150px;
    background: #ccc;
    border-radius: 8px;
    transform: rotate(-10deg);

    > .video-background {
      border: 1px solid #ccc;
      border-radius: 8px;
      width: 240px;
      height: 150px;
      /*保证视频充满屏幕*/
      object-fit: cover;
    }
  }
}
</style>