<script setup lang="ts">
import { type Content, asText } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.GridThreeColumnsSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ])
);
</script>

<template>
  <section class="mb-24">
    <div class="grid 2xl:grid-cols-[16rem_auto_3fr] gap-8 max-w-6xl mx-auto">
      <h2 class="text-3xl text-white p-4 bg-shade-1 rounded-lg shadow-lg">{{ asText(slice.primary.heading) }}</h2>
      <div class="flex justify-center">
        <nuxt-img class="rounded-lg" v-if="slice.primary.image.url" :src="slice.primary.image.url"
          :width="slice.primary.image.dimensions.width" :height="slice.primary.image.dimensions.height"
          :alt="slice.primary.image.alt || ''" />
      </div>
      <div class="rte p-8 bg-white rounded-lg shadow-lg">
        <prismic-rich-text :field="slice.primary.content"></prismic-rich-text>
      </div>
    </div>
  </section>
</template>
