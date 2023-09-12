<template>
  <a-layout>
    <a-layout-sider>
      <a-menu
          v-model:selectedKeys="state.selectedKeys"
          :openKeys="state.openKeys"
          mode="inline"
          :items="items"
          @openChange="onOpenChange"
      ></a-menu>
    </a-layout-sider>
    <a-layout class="layout_right">
      <div class="right_content">
        <ImageCard v-for="i in itemsContent[state.selectedKeys]" :key="i"/>
        <VideoCard v-for="i in itemsContent[state.selectedKeys]" :key="i" />
      </div>
    </a-layout>
  </a-layout>
</template>

<script setup lang="ts">
import {reactive} from "vue";
import ImageCard from "@/components/Card/ImageCard.vue";
import VideoCard from "@/components/Card/VideoCard.vue";

const state = reactive({
  selectedKeys: ['1'],
  openKeys: [],
  rootSubmenuKeys: ['sub1', 'sub2',],
});

const items = reactive([
  {
    key: '1',
    // icon: () => h(PieChartOutlined),
    label: '后台管理系统',
    title: '后台管理系统',
  },
  {
    key: '2',
    // icon: () => h(DesktopOutlined),
    label: '图表可视化',
    title: '图表可视化',
  },
  {
    key: 'sub1',
    // icon: () => h(MailOutlined),
    label: '移动端',
    title: '移动端',
    children: [
      {
        key: '5',
        label: 'H5',
        title: 'H5',
      }, {
        key: '6',
        label: '微信小程序',
        title: '微信小程序',
      },
    ],
  },
  // {
  //   key: 'sub2',
  //   // icon: () => h(MailOutlined),
  //   label: 'Navigation Two',
  //   title: 'Navigation Two',
  //   children: [
  //     {
  //       key: '6',
  //       label: 'Option 6',
  //       title: 'Option 6',
  //     },
  //   ],
  // },
])

const itemsContent = reactive({
  '1': [1],
  '2': [1,2],
  '5': [1,2,3,4,5],
  '6': [1,2,3,4,5,6],
})

const onOpenChange = (openKeys: string[]) => {
  let latestOpenKey = openKeys.find(key => state.openKeys.indexOf(key) === -1);
  if (state.rootSubmenuKeys.includes(latestOpenKey) === -1) {
    state.openKeys = openKeys;
  } else {
    state.openKeys = latestOpenKey ? [latestOpenKey] : [];
  }
};
</script>

<style scoped lang="less">
.ant-layout {
  background: none;
}

.ant-layout-sider {
  background: none;
}

.layout_right {
  margin-left: 20px;
  >.right_content{
    display: flex;
    flex-wrap: wrap;
  }
}
:deep(.ant-menu-light .ant-menu-item-selected){
  background-color: @primary-color;
  color: @menu-text-color;
}
:deep(.ant-menu-light .ant-menu-submenu-selected >.ant-menu-submenu-title){
  color: @menu-text-color;
}
</style>