<script setup lang="ts">
import { type Content } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
const props = defineProps(
  getSliceComponentProps<Content.GridTwoColumnsSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ])
);

const styleVars = {
  '--background-color': props.slice.primary.background as string
}
</script>

<style>
.grid-two-columns {
  max-width: 100rem;
  display: grid;
  margin: 0 auto 6rem auto;
  grid-template-columns: 1fr 2fr;
  gap: 8%;
}

.grid-two-columns.textLeft {
  grid-template-columns: 2fr 1fr;
}

.grid-two-columns > .img {
  margin-top: 15%;
  display: grid;
}

.grid-two-columns.textLeft > .img {
  grid-row: 1;
  grid-column: 2;
  margin-top: 25%;
}

.grid-two-columns .content {
  background: var(--background-color, rgb(246, 246, 246));
  padding: 8%;
}

.grid-two-columns .content p {
  margin-bottom: 1rem;
}

@media screen and (max-width: 68rem) {
  .grid-two-columns,
  .grid-two-columns.textLeft {
    grid-template-columns: none;
    gap: 0;
  }

  .grid-two-columns.default > .img {
    margin: 0 auto -5% auto;
    position: relative;
  }

  .grid-two-columns.textLeft > .img {
    grid-row: 2;
    grid-column: 1 / -1;
    margin: -5% 0 0 4rem;
    position: relative;
  }
}
</style>

<template>
  <section class="grid-two-columns" :class="slice.variation" :style="styleVars">
    <div class="img">
      <img-ix v-if="slice.primary.image.url" :field="slice.primary.image"></img-ix>
    </div>
    <div class="content">
      <prismic-rich-text :field="slice.primary.content"></prismic-rich-text>
    </div>
  </section>
</template>
