<template>
  <svg :class="[className,'svg-icon']" :style="{ color: color}">
    <use :href="'#icon-'+name"/>
  </svg>
</template>

<script setup lang="ts">

defineProps({
  name: {type: String, required: true},
  className: {type: String, default: ""},
  color: {type: String, default: ""}
});

</script>

<style scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
//fill: currentColor; //overflow: hidden;
}
</style>
