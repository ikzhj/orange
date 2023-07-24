<template>
  <div class="nav_box">
    <a-image src="/logo.png" :preview="false" @click="router.push({path:'/'})"/>

    <a-row class="nav" justify="end">
      <a-col :span="2" @click="router.push({path:'/portfolios'})">作品集</a-col>
      <a-col :span="2" @click="router.push({path:'/knowledge'})">知识库</a-col>
      <a-col :span="2" @click="router.push({path:'/about-me'})">关于我</a-col>
      <a-col :span="2">
        <a-dropdown>
          <span @click="e => e.preventDefault()">
            联系我
            <down-outlined/>
          </span>
          <template #overlay>
            <a-menu>
              <a-menu-item>
                <svg-icon name="email"/>
                <span class="margin_left_8">ikzhj@outlook.com</span>
              </a-menu-item>
              <a-menu-item>
                <svg-icon name="LittleRedBook"/>
                <span class="margin_left_8">ikzhj@outlook.com</span>
              </a-menu-item>
            </a-menu>
          </template>
        </a-dropdown>
      </a-col>
      <a-col :span="2">
        <a-dropdown>
          <span @click="e => e.preventDefault()">
            更多
            <down-outlined/>
          </span>
          <template #overlay>
            <a-menu>
              <a-menu-item>
                <svg-icon name="email"/>
                <span class="margin_left_8">ikzhj@outlook.com</span>
              </a-menu-item>
              <a-menu-item>
                <svg-icon name="LittleRedBook"/>
                <span class="margin_left_8">ikzhj@outlook.com</span>
              </a-menu-item>
            </a-menu>
          </template>
        </a-dropdown>
      </a-col>
    </a-row>
  </div>
</template>

<script setup lang="ts">
import {useRouter} from "vue-router";
import {DownOutlined} from "@ant-design/icons-vue"

const router = useRouter();
</script>

<style scoped lang="less">
.nav_box {
  height: 60px;
  background: var(--card-bg-color);
  color: var(--sub-font-color);
  font-weight: 600;
  border-radius: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  margin-bottom: 18px;

  :deep(.ant-image-img) {
    width: 120px;
    height: 60px;
    cursor: pointer;
  }

  .nav {
    flex: 1;
    text-align: center;

    div {
      font-size: var(--nav-font-size);
      cursor: pointer;
    }
  }
}
</style>