<template>
  <div class="search">
    <form class="search-form" v-on:submit="searchShow">
      <input type="text" v-model="query" placeholder="Search for tv shows..." />
      <input type="submit" value="Go!" />
    </form>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";

const router = useRouter();
const route = useRoute();
const query = ref<string>("");

watch(
  () => route.params.query,
  (val) => {
    query.value = val !== undefined && typeof val === "string" ? val : "";
  }
);

async function searchShow(e) {
  e.preventDefault();
  if (query.value) {
    router.push({
      name: "Search",
      params: { query: query.value },
    });
  } else {
    router.push({
      name: "Home",
    });
  }
}
</script>

<style lang="scss" scoped>
.search {
  border: 2px solid #cf5c3f;
  overflow: auto;
  border-radius: 5px;
  -moz-border-radius: 5px;
  -webkit-border-radius: 5px;
}

.search input[type="text"] {
  border: 0px;
  width: 67%;
  padding: 10px 10px;
}

.search input[type="text"]:focus {
  outline: 0;
}

.search input[type="submit"] {
  border: 0px;
  background: none;
  background-color: $primary-color;
  color: #fff;
  float: right;
  padding: 10px;
  -moz-border-radius-top-right: 5px;
  -webkit-border-radius-top-right: 5px;
  -moz-border-radius-bottom-right: 5px;
  -webkit-border-radius-bottom-right: 5px;
  cursor: pointer;
}

@media only screen and (max-width: $breakpoint-small) {
  .search {
    width: 95%;
    margin: 0 auto;
  }
}
</style>
