<template>
  <a-card hoverable style="width: 268px" >
    <template #cover>
      <div class="out_box">
        <div class="in_box"></div>
      </div>
    </template>
    <a-card-meta title="Europe Street beat">
      <template #description>www.instagram.com</template>
    </a-card-meta>
  </a-card>
</template>

<script setup lang="ts">

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
  background: url("src/assets/StockImages/videobg.png");
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
  }
}
</style>