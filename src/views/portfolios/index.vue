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
        <ImageCard v-for="i in itemsContent[state.selectedKeys][0]" :key="i.title" :data="i"/>
        <VideoCard v-for="i in itemsContent[state.selectedKeys][1]" :key="i" :data="i"/>
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
    label: '后台管理系统',
    title: '后台管理系统',
  },
  {
    key: '2',
    label: '图表可视化',
    title: '图表可视化',
  },
  {
    key: 'sub1',
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
  '1': [
    [{
      title: '智慧小区',
      description: '内网 & 外网',
      images: [
        'src/assets/StockImages/webPc/001/35.jpg',
        'src/assets/StockImages/webPc/001/36.jpg',
        'src/assets/StockImages/webPc/001/41.png',
      ]
    }, {
      title: '组件库文档',
      description: '二次封装组件使用文档',
      images: [
        'src/assets/StockImages/webPc/002/38.png',
        'src/assets/StockImages/webPc/002/37.png',
        'src/assets/StockImages/webPc/002/39.png',
        'src/assets/StockImages/webPc/002/40.png',
      ]
    }],
    [{
      title: '赋能平台',
      description: '接口数据管理平台',
      videoAddress: 'src/assets/StockImages/webPc/赋能平台.mp4',
    }, {
      title: '广安互联网',
      description: '智慧安防小区综合治理平台',
      videoAddress: 'src/assets/StockImages/webPc/广安互联网.mp4',
    }]
  ],
  '2': [
    [{
      title: '领导驾驶舱',
      description: '人口数据可视化展示',
      images: [
        'src/assets/StockImages/echart/001/1.jpg',
        'src/assets/StockImages/echart/001/7.jpg',
        'src/assets/StockImages/echart/001/2.jpg',
        'src/assets/StockImages/echart/001/3.jpg',
        'src/assets/StockImages/echart/001/8.jpg',
        'src/assets/StockImages/echart/001/9.jpg',
        'src/assets/StockImages/echart/001/10.jpg',
        'src/assets/StockImages/echart/001/11.jpg',
        'src/assets/StockImages/echart/001/12.jpg',
        'src/assets/StockImages/echart/001/13.jpg',
        'src/assets/StockImages/echart/001/14.jpg',
        'src/assets/StockImages/echart/001/15.jpg',
        'src/assets/StockImages/echart/001/16.jpg',
        'src/assets/StockImages/echart/001/17.jpg',
        'src/assets/StockImages/echart/001/19.jpg',
        'src/assets/StockImages/echart/001/21.jpg',
        'src/assets/StockImages/echart/001/22.jpg',
        'src/assets/StockImages/echart/001/24.jpg',
        'src/assets/StockImages/echart/001/30.jpg',
        'src/assets/StockImages/echart/001/32.jpg',
        'src/assets/StockImages/echart/001/34.jpg',
      ]
    }],
    [{
      title: '领导驾驶舱',
      description: '人口数据可视化展示',
      videoAddress: 'src/assets/StockImages/echart/驾驶舱.mp4',
    }]],
  '5': [
    [{
      title: '平安畅行码',
      description: '进出小区认证',
      images: [
        'src/assets/StockImages/H5/001/5.jpg',
      ]
    }],
    [{
      title: '平安畅行码',
      description: '申领流程示意',
      videoAddress: 'src/assets/StockImages/H5/平安畅行码.mp4',
    }]],
  '6': [
    [{
      title: '平安畅行码',
      description: '小程序入口',
      images: [
        'src/assets/StockImages/Wx/001/6.jpg',
      ]
    }],
    [{
      title: '勤务考勤',
      description: '接入小程序打卡流程示意',
      videoAddress: 'src/assets/StockImages/Wx/勤务考勤.mp4',
    }]],
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

  > .right_content {
    display: flex;
    flex-wrap: wrap;
  }
}

:deep(.ant-menu-light .ant-menu-item-selected) {
  background-color: @primary-color;
  color: @menu-text-color;
}

:deep(.ant-menu-light .ant-menu-submenu-selected >.ant-menu-submenu-title) {
  color: @menu-text-color;
}
</style>