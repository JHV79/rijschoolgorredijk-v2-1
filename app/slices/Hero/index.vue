<script setup lang="ts">
import { type Content, asLink } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
const { slice } = defineProps(
  getSliceComponentProps<Content.HeroSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ])
);

const timer = ref(0);
const current = ref(0);
const parent = ref<HTMLDivElement | null>(null);
const count = computed(() => parent.value?.querySelectorAll('img').length || 0);
const imgs = computed(() => {
  const items: { url: string, alt: string, width: number, height: number, duration: number }[] = [];
  slice.items.filter(item => item.image?.url).forEach(item => {
    items.push({
      url: item.image.url || '#no-image',
      alt: item.image.alt || '',
      width: item.image.dimensions?.width || 844,
      height: item.image.dimensions?.height || 770,
      duration: 5000,
    });
  });
  return items;
});

function cycle() {
  window.clearTimeout(timer.value);
  current.value = current.value === (count.value - 1) ? 0 : current.value + 1;
  timer.value = window.setTimeout(() => {
    cycle();
  }, imgs.value[current.value]?.duration || 5000);
}

onMounted(() => {
  if (!parent.value) {
    return console.error('Missing parent');
  }
  window.clearTimeout(timer.value);
  if (count.value < 2) return;
  timer.value = window.setTimeout(() => {
    cycle();
  }, imgs.value[current.value]?.duration || 5000);
});

onBeforeUnmount(() => {
  window.clearTimeout(timer.value);
});
</script>


<template>
  <div class="py-20 flex flex-wrap gap-8">
    <div class="bg-gray-800 p-8 2xl:ml-auto 2xl:max-w-2xl rounded-lg shadow-lg">
      <h1 class="text-4xl font-bold text-shade-3 mb-8 drop-shadow-lg">{{ slice.primary.heading_1 }}</h1>
      <div class="px-4 py-8 mx-auto">
        <h2 v-if="slice.primary.heading_2" class="text-2xl mb-8 text-white">{{ slice.primary.heading_2 }}</h2>
        <nuxt-link v-if="'url' in slice.primary.cta_link" :to="asLink(slice.primary.cta_link) || '#unresolved'" class="bg-shade-1 inline-block text-center text-2xl text-white p-4 lg:px-12 rounded-lg">{{ slice.primary.cta_text }}</nuxt-link>
      </div>
    </div>
    <div class="2xl:max-w-4xl 2xl:mr-auto grid items-center order-first 2xl:order-last" ref="parent">
      <div class="col-start-1 row-start-1 transition-all duration-[2s]"
        :class="[current === index ? 'opacity-100' : 'opacity-0']" v-for="(img, index) in imgs" :key="img.url">
        <nuxt-img sizes="100vw sm:640px md:758px lg:1024px" class="w-full h-auto rounded-lg" :src="img.url" :alt="img.alt" :width="img.width" :height="img.height"
          fit="contain" />
      </div>
    </div>
  </div>
</template>
