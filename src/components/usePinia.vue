<template>
  <div>
    {{ name }}
  </div>
</template>

<script lang="ts" setup>
import { storeToRefs } from 'pinia';
import { useUserStore } from "@/store/user.ts";

const store = useUserStore();
const { name } = storeToRefs(store);
store.updateName('Lishisan')
</script>

<style lang="scss" scoped>

</style>