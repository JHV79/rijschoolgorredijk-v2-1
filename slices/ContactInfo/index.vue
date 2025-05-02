<script setup lang="ts">
import { type Content } from "@prismicio/client";
const prismic = usePrismic();

const { data: settings } = await useAsyncData('global_settings', () =>
  prismic.client.getByUID('global_settings', 'global_settings')
);

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.ContactInfoSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ])
);
</script>

<template>
  <div class="max-w-7xl mx-auto pt-10 lg:pt-20 pb-10">
    <div class="grid px-8 lg:grid-cols-[1fr_2fr_2fr] gap-8">
      <h1 class="text-3xl font-bold lg:text-5xl text-shade-1">Contact</h1>
      <div>
        <h2 class="text-4xl mb-3">Rijschool Gorredijk</h2>
        <h2 class="text-4xl">Rijschool Akkrum e.o.</h2>
        <div class="grid bg-white my-8 p-8 lg:text-2xl">
          <p class="grid grid-cols-[1rem_1fr] gap-4 items-center py-2">
            <svgo-home class="text-shade-1"></svgo-home>
            <span>{{ settings?.data.street_address }}</span>
          </p>
          <p class="grid grid-cols-[1rem_1fr] gap-4 items-center py-2">
            <svgo-home class="text-shade-1"></svgo-home>
            <span>{{ settings?.data.postal_code }} {{ settings?.data.address_locality }}</span>
          </p>
          <nuxt-link :to="`tel:${settings?.data.telephone}`" class="grid grid-cols-[1rem_1fr] gap-4 items-center py-2">
            <svgo-phone class="text-shade-1"></svgo-phone>
            <span class="underline">{{ slice.primary.telephone_text }}</span>
          </nuxt-link>
          <nuxt-link :to="`https://wa.me/${settings?.data.telephone}`"
            class="grid grid-cols-[1rem_1fr] gap-4 items-center py-2">
            <svgo-whatsapp class="text-shade-1"></svgo-whatsapp>
            <span class="underline">{{ slice.primary.whatsapp_text }}</span>
          </nuxt-link>
          <nuxt-link :to="`mailto:${settings?.data.email}`" class="grid grid-cols-[1rem_1fr] gap-4 items-center py-2">
            <svgo-envelope class="text-shade-1"></svgo-envelope>
            <span class="underline">{{ settings?.data.email }}</span>
          </nuxt-link>
          <nuxt-link :to="`mailto:info@rijschoolakkrum.nl`" class="grid grid-cols-[1rem_1fr] gap-4 items-center py-2">
            <svgo-envelope class="text-shade-1"></svgo-envelope>
            <span class="underline">info@rijschoolakkrum.nl</span>
          </nuxt-link>
        </div>
        <div class="grid gap-2">
          <prismic-rich-text :field="slice.primary.content"></prismic-rich-text>
        </div>
      </div>
      <div>
        <h3 class="text-3xl mb-8">Openingstijden</h3>
        <div class="grid gap-4">
          <nuxt-img :src="slice.primary.image.url || '#'"
            :width="slice.primary.image.dimensions?.width || 0"
            :height="slice.primary.image.dimensions?.height || 0"
            :alt="slice.primary.image.alt || ''"></nuxt-img>
          <div>
            <p v-for="item in slice.items" class="grid grid-cols-[2fr_3fr] gap-4 lg:gap-8">
              <span class="border-b-4 border-black mb-2">{{ item.day }}&nbsp;</span>
              <span class="border-b-4 border-shade-1 mb-2 font-bold">{{ item.time }}</span>
            </p>
          </div>
        </div>
        <h3 class="text-3xl py-4">Google maps</h3>
        <nuxt-link to="https://maps.app.goo.gl/8nBGx7d6Y5mpW9Cz9">
          <nuxt-img :src="slice.primary.gmaps_image.url || '#'"
            :width="slice.primary.gmaps_image.dimensions?.width || 0"
            :height="slice.primary.gmaps_image.dimensions?.height || 0"
            :alt="slice.primary.gmaps_image.alt || ''"></nuxt-img>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>
