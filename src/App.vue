<template>
  <app-header></app-header>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AppHeader from "./components/AppHeader.vue";
export default defineComponent({
  name: "App",
  components: { AppHeader },
});
</script>

<style lang="css">
.poster {
  scroll-snap-align: start;
  flex-shrink: 0;
  width: 210px;
  margin-right: 10px;
  border-radius: 10px;
  background: #eee;
  transform-origin: center center;
  transform: scale(1);
  transition: transform 0.5s;
}
</style>
