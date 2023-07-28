<template>
  <a-timeline mode="alternate">
    <a-timeline-item v-for="(el,index) in originalData" :key="index">
      <template #dot>
        <svg-icon name="project2"/>
      </template>
      <a-badge-ribbon :text="el.rangeTime" color="green" :placement="index%2 === 0 ? 'end': 'start'">
        <div class="timeline_content bulge">
          <div class="timeline_content bulge_in">
            <div class="title">{{ el.projectName }}</div>
            <div class="introduce" :class="{text_left: index%2 === 0}">{{
                el.introduce
              }}
            </div>
            <div v-for="(it,ind) in el.duty" :key="ind" :class="{text_left: index%2 === 0}">
              <div class="paragraph">
                <svg-icon name="geometry"/>
                <span>{{ it }}</span>
              </div>
            </div>
          </div>
        </div>
      </a-badge-ribbon>
    </a-timeline-item>
  </a-timeline>
</template>

<script setup lang="ts">
const originalData = [
  // {
  //   projectName: '音 乐 网 站',
  //   rangeTime: '2021.06 —— 2021.07',
  //   introduce: '是一款在线听歌的音乐网站，项目主体分为首页的推荐歌单页面，注册页，登录页，排行榜单页， 搜索页，歌手页，不同歌单的详情模块，歌手详情模块，歌曲播放等模块',
  //   duty: [
  //     '主要运用 Vue 框架，实现了视图层和模型层的分离',
  //     '通过Vue 省去了复杂的节点查询，实现了双向数据绑定,降低页面维护难度',
  //     '推荐歌单页面,歌手页,排行榜单页等都是采用 v-for 来循环遍历实现的',
  //     '使用 Carousel 实现推荐页面轮播效果',
  //   ]
  // },
  {
    projectName: '教师培训管理系统',
    rangeTime: '2021.08 —— 2022.02',
    introduce: '帮助教务处对在校老师的培训进行管理，包括报名培训，参与培训，培训效果，培训资料，回收管 理，留言管理，数据展示等模块',
    duty: [
      '利用 JWT 使除登录页面之外的页面都携带 token，便于验证请求的合法性',
      '使用 Container、NavMenu、Breadcrumb、Pagheader 搭建页面的整体框架',
      '利用 element 的上传组件完成对 Excel 文件的上传，利用 xlsx 插件实现前端读取和解析文件',
      '使用 router-link 和 router-view 完成页面的部分刷新，提升用户使用感',
      '利用 cookie 存储用户操作习惯，在一定期限内，用户再次进入页面，页面会保持退出时的样子',
      '使用 from 和 rate 制作培训完结的互评界面',
    ]
  },
  {
    projectName: '音 乐 网 站',
    rangeTime: '2021.06 —— 2021.07',
    introduce: '是一款在线听歌的音乐网站，项目主体分为首页的推荐歌单页面，注册页，登录页，排行榜单页， 搜索页，歌手页，不同歌单的详情模块，歌手详情模块，歌曲播放等模块',
    duty: [
      '主要运用 Vue 框架，实现了视图层和模型层的分离',
      '通过Vue 省去了复杂的节点查询，实现了双向数据绑定,降低页面维护难度',
      '推荐歌单页面,歌手页,排行榜单页等都是采用 v-for 来循环遍历实现的',
      '使用 Carousel 实现推荐页面轮播效果',
    ]
  },
  {
    projectName: '导游精灵管理平台',
    rangeTime: '2021.03 —— 2021.05',
    introduce: '导游精灵管理平台包含登录，订单管理，账号管理，排班管理，信息管理，新增导游等模块',
    duty: [
      '根据 UI 设计师提供的设计图，利用 html 和 css 写好静态页面，页面排版',
      '使用 Ajax 与后台进行交互，获取列表图片和描述文字等信息并用模板引擎 template 渲染',
      '使用 DateTimePicker 日历插件和 Distpicker 省市三级联动插件',
    ]
  },
]
</script>

<style lang="less" scoped>
.timeline_content {
  cursor: pointer;
  padding: 16px;
  line-height: 26px;
  border-radius: 30px;

  .title {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 6px;
  }

  .introduce {
    text-indent: 2em; // 首行缩进2格
    color: var(--sub-font-color);
  }

  .paragraph {
    display: flex;
    line-height: 22px;

    .svg-icon {
      margin-top: 4px;
      margin-right: 8px;
    }
  }
}

.bulge {
  box-shadow: var(--blackShadow),
  var(--whiteShadow);
  padding: 5px;

  &:hover {
    box-shadow: var(--blackShadow),
    var(--whiteShadow);
    padding: 5px;
  }
}

.bulge_in {
  box-shadow: inset var(--blackShadow2),
  inset var(--whiteShadow2);

  &:hover {
    box-shadow: inset var(--blackShadow),
    inset var(--whiteShadow);
  }
}
</style>