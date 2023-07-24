<template>
  <div class="app_box">
    <div class="content">
      <NavBar />
      <div class="main_content">
        <!-- <router-view></router-view> -->
      </div>
      <Footer />
    </div>
  </div>
</template>

<script setup lang="ts">
import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";
</script>

<style lang="less" scoped>
.app_box {
  width: 100%;
  height: 100%;
  background: url("../../assets/StockImages/bg1.jpg");
  background-size: cover;
  color: var(--main-font-color);

  .content {
    padding-top: 18px;
    width: 90vw;
    min-width: 1000px;
    margin: 0 auto;

    .main_content {
      min-height: calc(100vh - 192px);
      //min-height: 640px;
    }
  }
}
</style>