<template>
  <main>
    <div v-for="(shows, genre) in dashboardData" v-bind:key="genre">
      <SliderList :title="genre">
        <div
          v-for="show in shows"
          v-bind:key="show.id"
          class="poster show-poster"
        >
          <router-link :to="{ name: 'ShowDetails', params: { id: show.id } }">
            <PosterCard
              :image="show.image.medium"
              :name="show.name"
            ></PosterCard>
          </router-link>
        </div>
      </SliderList>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { DashboardData, getDashboardData } from "@/services/getDashboardData";
import SliderList from "@/components/SliderList.vue";
import PosterCard from "@/components/PosterCard.vue";

export default defineComponent({
  name: "Dashboard",
  data() {
    return { dashboardData: {} as DashboardData };
  },
  mounted() {
    this.init();
  },
  methods: {
    async init() {
      this.dashboardData = await getDashboardData();
    },
  },
  components: { SliderList, PosterCard },
});
</script>
<style lang="css" scoped>
.show-poster {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 10px;
}
</style>
