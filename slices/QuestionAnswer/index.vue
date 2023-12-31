<script setup lang="ts">
import { type Content } from "@prismicio/client";
import { type WithContext, type FAQPage, type Question } from 'schema-dts';

const prismic = usePrismic();

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
const props = defineProps(
  getSliceComponentProps<Content.QuestionAnswerSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ])
);

const children: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
};

const items: Question[] = [];

props.slice.items.forEach((val) => {
  const doc = val.items as unknown as Content.QuestionanswerDocument;
  doc.data.items.forEach(item => items.push({
    '@type': 'Question',
    name: item.question as string,
    acceptedAnswer: {
      '@type': 'Answer',
      text: prismic.asHTML(item.answer)
    }
  }));
});

children.mainEntity = items;

useHead({
  script: [
    {
      type: 'application/ld+json',
      children
    }
  ]
})
</script>

<style>
.question-answer {
  background: rgba(245, 240, 255, 0.537);
  margin-bottom: 6rem;
}

.question-answer>.qa-items {
  max-width: 90rem;
  display: grid;
  padding: 2rem;
  gap: 4rem;
  grid-template-columns: repeat(2, 1fr);
}

.question-answer>.qa-items>.item {
  background: #fff;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.question-answer>.qa-items>.item h2 {
  color: var(--color-primary);
  margin-bottom: 3rem;
  border-bottom: #000 solid 1px;
}

.question-answer>.qa-items>.item>div>p {
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.question-answer>.qa-items>.item>div>.answer {
  padding: 0 1rem;
}

.question-answer>.qa-items>.item>div>.answer p {
  font-size: 1rem;
}

@media screen and (max-width: 45rem) {
  .question-answer>.qa-items {
    grid-template-columns: none;
  }
}
</style>

<template>
  <section class="question-answer">
    <div class="qa-items">
      <div v-for="item in slice.items" class="item">
        <h2>{{ prismic.asText(item.heading) }}</h2>
        <div v-for="qa in item.items.data.items">
          <p itemprop="name">{{ qa.question }}</p>
          <div itemscope itemprop="acceptedAnswer">
            <prismic-rich-text :field="qa.answer" itemprop="text"></prismic-rich-text>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
