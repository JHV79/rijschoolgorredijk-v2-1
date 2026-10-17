<script setup lang="ts">
import { h, computed } from 'vue'
import type { RichTextField } from '@prismicio/client'
import { PrismicRichText, PrismicLink, PrismicImage } from '@prismicio/vue'

type ElementKey =
  | 'heading1' | 'heading2' | 'heading3' | 'heading4' | 'heading5' | 'heading6'
  | 'paragraph' | 'preformatted' | 'strong' | 'em'
  | 'list' | 'oList' | 'listItem' | 'oListItem'
  | 'hyperlink' | 'image'

const props = withDefaults(
  defineProps<{
    field: RichTextField | null | undefined
    /** Tailwind classes per element type, e.g. { paragraph: 'mb-4 leading-7' } */
    classes?: Partial<Record<ElementKey, string>>
    /** Classes for Prismic "labels" (custom inline styles set in the editor), keyed by label name */
    labels?: Record<string, string>
    /** Classes for the wrapper element */
    wrapperClass?: string
    /** Wrapper tag, defaults to div */
    wrapper?: string
  }>(),
  {
    classes: () => ({}),
    labels: () => ({}),
    wrapper: 'div',
  },
)

// Sensible defaults, overridden per key by the `classes` prop
const defaults: Partial<Record<ElementKey, string>> = {
  paragraph: 'mb-4',
  list: 'mb-4 list-disc pl-6',
  oList: 'mb-4 list-decimal pl-6',
  hyperlink: 'underline hover:no-underline',
}

const cls = (key: ElementKey) => props.classes[key] ?? defaults[key]

const tag =
  (el: string, key: ElementKey) =>
  (_: unknown, { slots }: any) =>
    h(el, { class: cls(key) }, slots.default?.())

const components = computed(() => ({
  heading1: tag('h1', 'heading1'),
  heading2: tag('h2', 'heading2'),
  heading3: tag('h3', 'heading3'),
  heading4: tag('h4', 'heading4'),
  heading5: tag('h5', 'heading5'),
  heading6: tag('h6', 'heading6'),
  paragraph: tag('p', 'paragraph'),
  preformatted: tag('pre', 'preformatted'),
  strong: tag('strong', 'strong'),
  em: tag('em', 'em'),
  list: tag('ul', 'list'),
  oList: tag('ol', 'oList'),
  listItem: tag('li', 'listItem'),
  oListItem: tag('li', 'oListItem'),

  hyperlink: (p: any, { slots }: any) =>
    h(PrismicLink, { field: p.node.data, class: cls('hyperlink') }, () => slots.default?.()),

  image: (p: any) => {
    const node = p.node
    const img = h(PrismicImage, { field: node, class: cls('image') })
    return node.linkTo
      ? h(PrismicLink, { field: node.linkTo }, () => img)
      : img
  },

  label: (p: any, { slots }: any) =>
    h('span', { class: props.labels[p.node.data.label] }, slots.default?.()),
}))
</script>

<template>
  <PrismicRichText
    v-if="field?.length"
    :field="field"
    :components="components"
    :wrapper="wrapper"
    :class="wrapperClass"
  />
</template>