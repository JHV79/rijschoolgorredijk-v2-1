<script setup lang="ts">
import { type Content } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.ServicePricingSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ])
);

function formatCurrenycy(val: any): string {
  const amount = parseFloat(val);
  if (amount === Math.round(amount)) {
    return `${amount},-`;
  }
  return val.toFixed(2).replace('.', ',');
}
</script>

<template>
  <div class="max-w-[50rem] mx-auto px-4 grid gap-8">
    <h2 class="text-3xl font-bold text-center">{{ slice.primary.heading }}</h2>
    <div v-for="item in slice.items" class="grid lg:grid-cols-[2fr_1fr]">
      <div class="grid grid-cols-[2rem_1fr] items-center px-8 border-b-2 gap-4 text-xl">
        <svgo-chevron :fontControlled="false" class="text-shade-1"></svgo-chevron>
        <prismic-rich-text :field="item.content"></prismic-rich-text>
      </div>
      <span class="border-b-2 border-black text-center mt-auto">&nbsp;€ {{ formatCurrenycy(item.price) }}</span>
    </div>
    <div class="max-w-[40rem] mx-auto">
      <prismic-rich-text :field="slice.primary.footnote"></prismic-rich-text>
      <div class="">
        <prismic-rich-text :field="slice.primary.content"></prismic-rich-text>
      </div>
    </div>
  </div>
</template>
