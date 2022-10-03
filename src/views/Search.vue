<template>
  <div v-if="shows">
    <SliderList :title="'Search results for: ' + searchTerm">
      <div v-for="search in shows" v-bind:key="search.show.id" class="poster">
        <router-link
          :to="{ name: 'ShowDetails', params: { id: search.show.id } }"
        >
          <PosterCard
            :image="search.show.image?.medium"
            :name="search.show.name"
          ></PosterCard>
        </router-link>
      </div>
    </SliderList>
  </div>
  <div v-else>Loading...</div>
</template>
<script lang="ts">
import { searchShows } from "@/api/client";
import { ShowSearch } from "@/api/contract";
import { defineComponent, ref, watch } from "vue";
import { useRoute } from "vue-router";
import PosterCard from "@/components/PosterCard.vue";
import SliderList from "@/components/SliderList.vue";
export default defineComponent({
  name: "Search",
  setup() {
    const route = useRoute();
    let shows = ref([] as ShowSearch[]);
    let searchTerm = ref("");
    async function fetchShowDetail(query: string) {
      shows.value = (await searchShows(query)).data;
    }
    watch(
      () => route.params.query,
      (query) => {
        if (typeof query === "string") {
          searchTerm.value = query;
          fetchShowDetail(query as string);
        }
      },
      { immediate: true }
    );
    return { shows, searchTerm };
  },
  components: { PosterCard, SliderList },
});
</script>
