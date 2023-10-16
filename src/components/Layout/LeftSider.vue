<template>
  <a-layout style="min-height: 100vh">
    <a-layout-sider v-model:collapsed="collapsed" collapsible>
      <div class="logo" @click="router.push({path:'/home'})">
        <a-image src="/logo.svg" :preview="false"/>
      </div>
      <a-menu v-model:selectedKeys="selectedKeys" mode="inline" :items="menus"/>
    </a-layout-sider>
    <a-layout>
      <a-layout-content style="margin: 0 16px">
        <a-breadcrumb style="margin: 16px 0">
          <a-breadcrumb-item><a @click="router.push({path:'/home'})">知识库</a></a-breadcrumb-item>
          <a-breadcrumb-item v-for="(item) in breadcrumbs" :key="item">{{ item }}</a-breadcrumb-item>
        </a-breadcrumb>
        <div class="k_content">
          <contentIndex :selectedKeys="selectedKeys[0]"/>
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
  DesktopOutlined,
  Html5Outlined,
} from '@ant-design/icons-vue';
import {watch, h, ref} from 'vue';
import {MenuProps} from 'ant-design-vue';
import moment from "moment/moment";
import {useRouter} from "vue-router";
import contentIndex from "@/views/knowledge-base/contentIndex.vue";

const collapsed = ref<boolean>(false);
const router = useRouter();
const selectedKeys = ref<string[]>(['1']);

// 菜单
const menus = ref<MenuProps['items']>([
      {
        key: '1',
        icon: () => h(Html5Outlined),
        label: 'HTML & CSS',
        // title: 'Navigation One',
      },
      {
        key: 'sub1',
        icon: () => h(DesktopOutlined),
        label: 'PC',
        children: [
          {
            label: 'Option 1',
            key: '2',
          },
          {
            label: 'Option 2',
            key: '3',
          },
        ],
      },
    ]
);
// 面包屑
const breadcrumbs = ref<any>([]);
// 监听——菜单和面包屑联动
watch(() => selectedKeys.value[0],
    (newVal, oldVal) => {
      const copyMenus = menus.value
      copyMenus?.map((item) => {
        if (item.children) {
          item.children?.map((el) => {
            if (el.key === newVal) {
              breadcrumbs.value = [item.label, el.label]
            }
          })
        } else if (item.key === newVal) {
          breadcrumbs.value = [item.label]
        }
      })
    }, {immediate: true}
)

</script>

<style scoped lang="less">
.ant-layout-sider {
  background: @primary-color;
}

.ant-menu-light {
  background: @primary-color;
}

:deep(.ant-layout-sider-trigger) {
  background: @primary-color;
}

:deep(.ant-menu-light .ant-menu-item-selected) {
  background-color: #fff;
  color: @menu-text-color;
}

:deep(.ant-menu-light .ant-menu-submenu-selected >.ant-menu-submenu-title) {
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

.k_content {
  padding: 24px;
  background: #fff;
  height: 90vh;
  overflow-y: auto;
  border-radius: 8px;
}
</style>