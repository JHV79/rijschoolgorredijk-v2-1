<script lang="ts" setup>
import { components } from '~/slices';
import type { WithContext, LocalBusiness } from 'schema-dts';

const { client } = usePrismic();
const { data: page, status, error } = await useAsyncData('home-page', () =>
  client.getByUID('index', 'index')
);

const { data: json } = await useAsyncData('global_settings', () =>
  client.getByUID('global_settings', 'global_settings')
);

const children: WithContext<LocalBusiness> = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': json.value?.data.domain as string,
  name: json.value?.data.name as string,
  logo: [
    json.value?.data.logo.url as string
  ],
  image: [
    json.value?.data.company_image.url as string
  ],
  url: json.value?.data.domain as string,
  email: json.value?.data.email as string,
  telephone: json.value?.data.telephone as string,
  address: {
    '@type': 'PostalAddress',
    streetAddress: json.value?.data.street_address as string,
    addressLocality: json.value?.data.address_locality as string,
    addressRegion: json.value?.data.address_region as string,
    postalCode: json.value?.data.postal_code as string,
    addressCountry: json.value?.data.address_country as string
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: json.value?.data.latitude as string,
    longitude: json.value?.data.longitude as string,
  }
}

useHead({
  title: () => page.value?.data.meta_title || 'Rijschool Gorredijk - Rijlessen voor auto, motor en scooter',
  meta: [
    {
      name: 'description',
      content: () => page.value?.data.meta_description || 'Rijschool Gorredijk biedt rijlessen voor auto, motor en scooter in Gorredijk en omgeving. Professionele instructeurs en flexibele lespakketten.',
    },
  ],
  link: [
    {
      rel: 'canonical',
      href: 'https://rijschoolgorredijk.nl/',
    }
  ],
  script: [
    {
      type: 'application/ld+json',
      textContent: JSON.stringify(children)
    }
  ]
});
</script>

<template>
  <div v-if="'success' === status">
    <SliceZone :slices="page?.data.slices || []" :components="components" />
  </div>
</template>