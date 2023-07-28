<template>
  <div class="card_box">
    <header :style="{background: bgColor}"></header>
    <div class="card_content">
      <h2>
        <svg-icon :name="iconName"/>
        {{ name }}
      </h2>
      <div class="slot_box">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  name: {type: String, required: true},
  iconName: {type: String, required: true},
  bgColor: {type: String},
})
</script>

<style lang="less" scoped>
.card_box {
  background-color: var(--card-box-color);
  border-radius: 8px;
  margin-bottom: 24px;
  padding-right: 16px;
  display: flex;

  header {
    width: 20px;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
  }

  .card_content {
    flex: 1;
    max-width: 1400px;

    h2 {
      padding: 8px 16px;
    }

    .slot_box {
      padding: 8px 16px 16px;
    }
  }
}
</style>