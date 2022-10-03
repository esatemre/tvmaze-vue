<script lang="ts" setup>
defineProps<{
  image?: string;
  name?: string;
  rating?: number;
  genres?: string[];
  summary?: string;
}>();
</script>
<template>
  <div class="movie-card">
    <div class="container">
      <img v-if="image" :src="image" alt="cover" class="cover" async />

      <div class="hero">
        <div class="details">
          <div class="title">
            {{ name }}
            <span v-if="rating">{{ rating }}</span>
          </div>
        </div>
      </div>

      <div class="description">
        <div v-if="genres" class="genres">
          <span class="tag" v-for="genre in genres" v-bind:key="genre">
            {{ genre }}
          </span>
        </div>

        <div v-if="summary" class="summary">
          <p v-html="summary"></p>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.movie-card {
  font: 14px/22px "Lato", Arial, sans-serif;
  color: #a9a8a3;
  padding: 40px 0;
}

.container {
  margin: 0 auto;
  background: #f0f0ed;
  border-radius: 5px;
  position: relative;
}

.hero {
  height: 342px;
  margin: 0;
  position: relative;
  overflow: hidden;
  z-index: 1;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

.hero:before {
  content: "";
  width: 100%;
  height: 100%;
  position: absolute;
  overflow: hidden;
  top: 0;
  left: 0;
  background: rgb(2, 0, 36);
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 52%,
    rgba(255, 0, 0, 1) 100%
  );
  z-index: -1;

  transform: skewY(-2.2deg);
  transform-origin: 0 0;
}

.cover {
  position: absolute;
  top: 160px;
  left: 40px;
  z-index: 2;
}

.details {
  @media only screen and (min-width: $breakpoint-small) {
    padding: 190px 0 0 280px;
  }

  @media only screen and (max-width: $breakpoint-small) {
    padding: 60px 0 0 60px;
  }

  .title {
    color: white;
    margin-bottom: 13px;
    position: relative;

    @media only screen and (max-width: $breakpoint-small) {
      font-size: 30px;
    }
    @media only screen and (min-width: $breakpoint-small) {
      font-size: 44px;
    }

    span {
      position: absolute;
      top: 3px;
      margin-left: 12px;
      background: #c4af3d;
      border-radius: 5px;
      color: #544c21;
      font-size: 14px;
      padding: 0px 4px;
    }
  }
}

.description {
  bottom: 0px;
  height: 200px;
  font-size: 16px;
  line-height: 26px;
  color: #b1b0ac;
}

.genres {
  padding-left: 20px;
  padding-top: 120px;
  float: left;
  text-align: center;
}

.tag {
  background: white;
  border-radius: 10px;
  padding: 3px 8px;
  font-size: 14px;
  margin-right: 4px;
  line-height: 35px;
  cursor: pointer;
}

.tag:hover {
  background: #ddd;
}

.summary {
  padding-top: 30px;
  margin: 5px;
  float: left;
}
</style>
