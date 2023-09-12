<template>
  <a-layout style="min-height: 100vh">
    <a-layout-sider v-model:collapsed="collapsed" collapsible>
      <div class="logo" @click="router.push({path:'/home'})"><a-image src="/logo.svg" :preview="false" /></div>
      <a-menu v-model:selectedKeys="selectedKeys" mode="inline">
        <a-menu-item key="1">
          <pie-chart-outlined/>
          <span>Option 1</span>
        </a-menu-item>
        <a-menu-item key="2">
          <desktop-outlined/>
          <span>Option 2</span>
        </a-menu-item>
        <a-sub-menu key="sub1">
          <template #title>
            <span>
              <user-outlined/>
              <span>User</span>
            </span>
          </template>
          <a-menu-item key="3">Tom</a-menu-item>
          <a-menu-item key="4">Bill</a-menu-item>
          <a-menu-item key="5">Alex</a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="sub2">
          <template #title>
            <span>
              <team-outlined/>
              <span>Team</span>
            </span>
          </template>
          <a-menu-item key="6">Team 1</a-menu-item>
          <a-menu-item key="8">Team 2</a-menu-item>
        </a-sub-menu>
        <a-menu-item key="9">
          <file-outlined/>
          <span>File</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-content style="margin: 0 16px">
        <a-breadcrumb style="margin: 16px 0">
          <a-breadcrumb-item>User</a-breadcrumb-item>
          <a-breadcrumb-item>Bill</a-breadcrumb-item>
        </a-breadcrumb>
        <div class="k_content">
          <slot></slot>
        </div>
      </a-layout-content>
      <a-layout-footer style="text-align: center">
        &copy;{{ moment().format('YYYY') }} 落日橘子洲
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>

<script setup lang="ts">
import {
  PieChartOutlined,
  DesktopOutlined,
  UserOutlined,
  TeamOutlined,
  FileOutlined,
} from '@ant-design/icons-vue';
import {ref} from 'vue';
import moment from "moment/moment";
import {useRouter} from "vue-router";

const collapsed = ref<boolean>(false);
const router = useRouter();
const selectedKeys = ref<string[]>(['1']);
</script>

<style scoped lang="less">
.ant-layout-sider{
  background: @primary-color;
}
.ant-menu-light{
  background: @primary-color;
}
:deep(.ant-layout-sider-trigger){
  background: @primary-color;
}
:deep(.ant-menu-light .ant-menu-item-selected){
  background-color: #fff;
  color: @menu-text-color;
}
:deep(.ant-menu-light .ant-menu-submenu-selected >.ant-menu-submenu-title){
  color: @menu-text-color;
}
.logo {
  height: 42px;
  //margin: 16px;
  margin-bottom: 8px;
  background: @primary-color;
  text-align: center;
  :deep(.ant-image-img) {
    height: 42px;
    cursor: pointer;
  }
}

.site-layout .site-layout-background {
  background: #fff;
}

[data-theme='dark'] .site-layout .site-layout-background {
  background: #141414;
}
.k_content{
  padding: 24px;
  background: #fff;
  height: 90vh;
  overflow-y: auto;
  border-radius: 8px;
}
</style>