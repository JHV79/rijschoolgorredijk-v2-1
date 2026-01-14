<script setup lang="ts">
import { type Content } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
const { slice } = defineProps(
  getSliceComponentProps<Content.GridTwoColumnsSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ])
);
</script>

<template>
  <div class="w-fit mx-auto">
    <div class="grid py-16 px-16 xl:grid-cols-[480px_3fr] gap-x-20 gap-y-10 max-w-[90rem]">
      <nuxt-img class="md:m-8 rounded-lg" v-if="slice.primary.image.url" :src="slice.primary.image.url"
        :width="slice.primary.image.dimensions.width" :height="slice.primary.image.dimensions.height"
        :alt="slice.primary.image.alt || ''" />
      <div class="rte grid gap-2">
        <prismic-rich-text :field="slice.primary.content"></prismic-rich-text>
      </div>
    </div>
  </div>
</template>
