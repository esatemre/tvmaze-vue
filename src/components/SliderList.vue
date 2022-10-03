<script lang="ts" setup>
defineProps<{
  title?: string | number;
}>();
</script>
<template>
  <div class="slider">
    <span v-if="title">{{ title }}</span>
    <div class="slides">
      <slot></slot>
    </div>
  </div>
</template>
<style scoped lang="css">
.slider {
  text-align: center;
}
.slides {
  display: flex;
  min-height: 310px;
  overflow-y: hidden;
  overflow-x: auto;
  scroll-snap-type: x mandatory;

  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
}
.slides::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}
.slides::-webkit-scrollbar-thumb {
  background: black;
  border-radius: 10px;
}
.slides::-webkit-scrollbar-track {
  background: transparent;
}
</style>
