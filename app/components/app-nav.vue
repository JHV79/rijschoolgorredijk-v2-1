<script lang="ts" setup>

const { client } = usePrismic();
const { data } = await useAsyncData('app-nav', () =>
  client.getByUID('menu', 'menu')
);

const root = ref<HTMLDivElement | null>(null);
const observer = ref<ResizeObserver | null>(null);
const open = ref(false);
const route = useRoute();

function setMenuHeight(height: number) {
  window.requestAnimationFrame(
    () => root.value!.style.setProperty('--menu-height', `${height}px`)
  );
}

onMounted(() => {
  const nav = root.value?.querySelector('nav');
  if (!nav) {
    return;
  }
  setMenuHeight(nav.getBoundingClientRect().height || 96);
  observer.value = new ResizeObserver((entries) => {
    setMenuHeight(entries[0]!.borderBoxSize[0]!.blockSize);
  });
  observer.value.observe(nav);
});

onUnmounted(() => observer.value?.disconnect());

const menu = computed(() => {
  let uid = route.params.uid ?? 'index';
  return data.value?.data.items.map((item: any) => {
    const url = 'index' === item.link?.uid ? '/' : `/${item.link?.uid}/`;
    return {
      text: item.text,
      url,
      isCurrent: uid === item.link?.uid
    };
  });
});
</script>

<template>
  <div ref="root">
    <div class="h-[--menu-height] mb-8"></div>
    <nav class="fixed z-10 top-0 left-0 w-full">
      <div class="relative flex items-center p-4 lg:justify-around w-fit mx-auto">
        <nuxt-link class="mr-8 hover hover:scale-125 transition-transform ease-bouncy duration-700" to="/" @click="open = false">
          <svgo-logo-v2 aria-hidden="true" :fontControlled="false" :filled="true" class="max-w-48 w-full h-auto lg:w-64 stroke-slate-300 bg-white bg-opacity-50 rounded-lg" />
          <span class="sr-only">Home</span>
        </nuxt-link>
        <button @click="open = !open" class="bg-white grid gap-1 p-2 rounded-lg ml-auto lg:hidden" aria-controls="main-menu" :aria-expanded="open">
          <div class="bg-slate-500 w-8 my-auto h-[6px]"></div>
          <div class="bg-slate-500 w-8 my-auto h-[6px]"></div>
          <div class="bg-slate-500 w-8 my-auto h-[6px]"></div>
          <span class="sr-only">Open menu</span>
        </button>
        <ul id="main-menu"
          :class="[open ? 'scale-y-100' : 'scale-y-0 opacity-10 pointer-events-none lg:scale-100 lg:opacity-100 lg:pointer-events-auto']"
          class="bg-gray-200 rounded-lg absolute z-10 lg:relative left-0 px-4 py-2 w-full lg:w-auto top-[--menu-height] lg:top-auto flex lg:flex flex-col lg:flex-row md:flex-wrap gap-4 origin-top transition-all ease-smooth-out duration-700">
          <li v-for="item in menu" class="group grid grid-rows-[auto_2px] bg-white rounded-lg px-2">
            <nuxt-link @click="open = false" :class="item.isCurrent ? 'decoration-shade-1' : 'decoration-gray-100'" class="inline-block underline py-2" :to="item.url || '#'">{{ item.text }}</nuxt-link>
            <span class="block h-[4px] bg-black will-change-transform ease-bouncy transition-all duration-1000 scale-x-0 group-hover:scale-x-100 group-hover:bg-shade-1 origin-left"></span>
          </li>
        </ul>
      </div>
      <div class="absolute -bottom-10 lg:-bottom-12 w-full flex justify-center gap-2 lg:gap-12">
        <nuxt-link :class="{ hidden: open }" class="bg-gray-600 flex items-center gap-2 py-2 px-4 text-white rounded-md hover:scale-125 duration-500 transition-transform will-change-transform ease-bouncy" to="tel:+0031633418680">
          <svgo-phone aria-hidden="true" class="text-shade-3 hidden lg:block"></svgo-phone>
          <span>Bel ons</span>
        </nuxt-link>
        <nuxt-link :class="{ hidden: open }" class="bg-gray-600 flex items-center gap-2 p-2 text-white rounded-md hover:scale-125 duration-500 transition-transform will-change-transform ease-bouncy" to="mailto:info@rijschoolgorredijk.nl">
          <svgo-envelope aria-hidden="true" class="text-shade-3 hidden lg:block"></svgo-envelope>
          <span>E-mail</span>
        </nuxt-link>
        <nuxt-link :class="{ hidden: open }" class="bg-gray-600 flex items-center gap-2 p-2 text-white rounded-md hover:scale-125 duration-500 transition-transform will-change-transform ease-bouncy" to="https://www.startmetjerijbewijs.nl/rijschool-gorredijk/inschrijven">
          <svgo-user aria-hidden="true" class="text-shade-3 hidden lg:block"></svgo-user>
          <span>Inschrijven</span>
        </nuxt-link>
      </div>
    </nav>
  </div>
</template>