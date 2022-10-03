<template>
  <div v-if="details?.show">
    <MovieDetailHeader
      :name="details.show.name"
      :image="details.show.image?.medium"
      :rating="details.show.rating?.average"
      :genres="details.show.genres"
      :summary="details.show.summary"
    ></MovieDetailHeader>
    <SliderList title="Cast">
      <div
        v-for="one in details.cast"
        v-bind:key="one.person.id"
        class="poster"
      >
        <PosterCard :name="one.person.name" :image="one.person.image?.medium">
        </PosterCard>
      </div>
    </SliderList>
  </div>
  <div v-else>
    <span class="text">Loading...</span>
  </div>
</template>

<script lang="ts">
import { getShowDetailData, ShowDetail } from "@/services/getShowDetailData";
import { defineComponent, ref, watch } from "vue";
import { useRoute } from "vue-router";
import MovieDetailHeader from "@/components/MovieDetailHeader.vue";
import SliderList from "@/components/SliderList.vue";
import PosterCard from "@/components/PosterCard.vue";
export default defineComponent({
  name: "ShowDetails",
  setup() {
    const route = useRoute();
    const details = ref({} as ShowDetail);
    async function fetchShowDetail(id: string) {
      details.value = await getShowDetailData(id);
    }
    watch(
      () => route.params.id,
      async (newId) => {
        if (typeof newId === "string") {
          fetchShowDetail(newId as string);
        }
      },
      { immediate: true }
    );
    return { details };
  },
  components: { MovieDetailHeader, SliderList, PosterCard },
});
</script>
