<script setup lang="ts">
import { type Content } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.UniuqeSellingPointsSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ])
);
</script>

<style>
.unique-selling-points {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem 4rem;
  font-size: 1.25rem;
  list-style: none;
  padding: 2rem 0;
  text-align: center;
  filter: drop-shadow(5px 5px 10px #e7e7e7);
  margin-bottom: 4rem;
}

.unique-selling-points li {
  display: flex;
  align-items: center;
  column-gap: 1rem;
}

.unique-selling-points li svg {
  color: var(--color-primary);
  border: 0.5rem solid #fff;
}

@media screen and (max-width: 60rem) {
  .unique-selling-points {
    justify-content: start;
    text-align: left;
  }
}
</style>

<template>
  <ul class="unique-selling-points">
    <li v-for="usp in slice.items">
      <svgo-checkmark></svgo-checkmark>
      <prismic-rich-text :field="usp.selling_point"></prismic-rich-text>
    </li>
  </ul>
</template>
