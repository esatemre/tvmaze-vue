<script lang="ts" setup>
defineProps<{
  image: string;
  name: string;
}>();
</script>
<template>
  <div class="card">
    <img v-if="image" :src="image" :alt="name" loading="lazy" async />
    <svg
      v-else
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      version="1.1"
      width="210"
      height="295"
      viewBox="0 0 210 295"
      xml:space="preserve"
    >
      <g
        transform="matrix(1 0 0 1 105 147.5)"
        id="85065d50-1d48-4e6d-954e-c5bde858ef2c"
      >
        <rect
          style="
            stroke: none;
            stroke-width: 1;
            stroke-dasharray: none;
            stroke-linecap: butt;
            stroke-dashoffset: 0;
            stroke-linejoin: miter;
            stroke-miterlimit: 4;
            fill: rgb(1, 0, 0);
            fill-rule: nonzero;
            opacity: 1;
          "
          vector-effect="non-scaling-stroke"
          x="-105"
          y="-147.5"
          rx="0"
          ry="0"
          width="210"
          height="295"
        />
      </g>
      <g
        transform="matrix(Infinity NaN NaN Infinity 0 0)"
        id="06c5f2cc-5e13-4032-b268-7a48fdd08045"
      ></g>
    </svg>
    <span class="text">{{ name }}</span>
  </div>
</template>
<style scoped lang="scss">
.text {
  display: none;
  color: white;
  background-color: $primary-color;
  border-radius: 20px;
  padding: 5px 10px;
}
.card:hover .text {
  display: block;
  position: absolute;
  top: 10px;
  left: 10px;
}

img {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
}
</style>
