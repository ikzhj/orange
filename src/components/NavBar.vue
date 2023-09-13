<template>
  <div class="nav_box">
    <a-image src="/logo.svg" :preview="false"/>

    <a-row class="nav" justify="end">
      <a-col :span="2" @click="router.push({path:'/knowledge'})">知识库</a-col>
<!--      <a-col :span="2" @click="router.push({path:'/about-me'})">关于我</a-col>-->
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
                <span class="margin_left_8">530308071</span>
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
              <a-menu-item v-for="(item,index) in morelinks" :key="index">
                <a :href="item.address" target="_blank">
                  <img style="width: 1em;height: 1em" :src="item.logo">
                  <span class="margin_left_8">{{ item.title }}</span>
                </a>
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
import {reactive} from "vue";

const router = useRouter();

const morelinks = reactive([
  {
    logo: 'https://fastly.jsdelivr.net/npm/@vant/assets/logo.png',
    address: 'https://vant-contrib.gitee.io/vant/#/zh-CN',
    title: 'Vant - 移动端组件库'
  }, {
    logo: 'https://pinia.web3doc.top/logo.svg',
    address: 'https://pinia.web3doc.top/introduction.html',
    title: 'Pinia 中文文档'
  },{
    logo: 'https://res.wx.qq.com/a/wx_fed/assets/res/NTI4MWU5.ico',
    address: 'https://developers.weixin.qq.com/miniprogram/dev/framework/',
    title: '微信开放文档'
  },{
    logo: '\thttps://next.antdv.com/assets/logo.1ef800a8.svg',
    address: 'https://www.antdv.com/docs/vue/introduce-cn/',
    title: 'Ant Design Vue'
  },
])
</script>

<style scoped lang="less">
.nav_box {
  height: 60px;
  background: url("../assets/StockImages/videobg.png");
  color: @nav-text-color;
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
    // cursor: pointer;
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