<script lang="ts" setup>
import { components } from '~/slices';

const { client } = usePrismic();
const { params } = useRoute();
const { data: page, status, error } = await useAsyncData('page-' + params.uid, () =>
  client.getByUID('page', params.uid as string)
);

useHead({
  title: page.value?.data.meta_title,
  meta: [
    {
      name: 'description',
      content: page.value?.data.meta_description,
    },
  ],
});
</script>

<template>
  <div v-if="'success' === status">
    <SliceZone :slices="page?.data.slices || []" :components="components" />
  </div>
</template>