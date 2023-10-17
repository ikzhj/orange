<template>
  <div class="grid_but">
    <div>
      <CommandButton/>
      <span>点击试试</span>
    </div>
    <div>
      <CatButton/>
      <span>移入看看</span>
    </div>
    <div>
      <StarButton/>
      <span>移入看看</span>
    </div>
    <div>
      <NextButton/>
      <span>移入看看</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import CatButton from "@/views/knowledge-base/HtmlCss/components/button/CatButton.vue";
import StarButton from "@/views/knowledge-base/HtmlCss/components/button/StarButton.vue";
import CommandButton from "@/views/knowledge-base/HtmlCss/components/button/CommandButton.vue";
import NextButton from "@/views/knowledge-base/HtmlCss/components/button/NextButton.vue";
</script>

<style scoped lang="less">
.grid_but {
  display: grid;
  grid-template-columns: repeat(2, 46%);
  grid-template-rows: repeat(2, 214px);
  grid-gap: 20px;

  div {
    text-align: center;
    border-radius: 8px;
    //background-color: #C1CFF7;

    > span {
      display: inline-block;
      margin-top: 12px;
    }


    &:nth-child(1) {
      padding: 50px;
    }
    &:nth-child(2) {
      padding: 36px 50px;
    }
    &:nth-child(3) {
      padding: 60px 25px;
    }
    &:nth-child(4) {
      padding: 60px 36px;
    }
  }
}
</style>