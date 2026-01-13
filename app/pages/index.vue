<script lang="ts" setup>
import { components } from '~/slices';

const { client } = usePrismic();
const { data: page, status, error } = await useAsyncData('home-page', () =>
  client.getByUID('index', 'index')
);

useHead({
  title: () => page.value?.data.meta_title || 'Rijschool Gorredijk - Rijlessen voor auto, motor en scooter',
  meta: [
    {
      name: 'description',
      content: () => page.value?.data.meta_description || 'Rijschool Gorredijk biedt rijlessen voor auto, motor en scooter in Gorredijk en omgeving. Professionele instructeurs en flexibele lespakketten.',
    },
  ],
});
</script>

<template>
  <div v-if="'success' === status">
    <SliceZone :slices="page?.data.slices || []" :components="components" />
  </div>
</template>