<template>
  <div class="px-2xl mx-auto min-h-screen max-w-225 py-16 md:px-16 md:py-20 lg:px-28 lg:py-24">
    <BaseButton
      :to="localePath('/')"
      variant="dark"
    >
      <span class="mr-xs h-2xl flex w-2xl items-center justify-center">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          class="h-lg w-lg"
        >
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </span>
      <span>{{ $t('nav.home') }}</span>
    </BaseButton>

    <article v-if="page">
      <h1
        class="mt-4xl mb-md text-base-black text-3xl leading-tight font-bold tracking-[-0.02em] md:text-4xl lg:text-5xl"
      >
        {{ page.title }}
      </h1>
      <p class="text-base-black/80 mb-4xl text-base">{{ page.displayDate || page.date }}</p>

      <div class="prose">
        <ContentRenderer :value="page" />
      </div>

      <GiscusComments />
    </article>

    <div
      v-else
      class="py-24 text-center"
    >
      <h1 class="text-3xl font-bold md:text-4xl">404 - Post Not Found</h1>
      <div class="mt-2xl flex justify-center">
        <BaseButton
          :to="localePath('/')"
          variant="dark"
        >
          {{ $t('nav.home') }}
        </BaseButton>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import BaseButton from '~/components/ui/BaseButton.vue'
const route = useRoute()
const { locale } = useI18n()
const localePath = useLocalePath()

const collectionName = computed(() => `blog_${locale.value}` as any)
const slug = computed(() => {
  const parts = route.params.slug
  return Array.isArray(parts) ? parts.join('/') : parts
})

const { data: page } = await useAsyncData(`blog-${locale.value}-${slug.value}`, () => {
  return queryCollection(collectionName.value).path(`/${locale.value}/blog/${slug.value}`).first()
})

if (page.value) {
  const siteUrl = 'https://tuongna.github.io'

  useSeoMeta({
    title: page.value.title,
    description: page.value.description,
    ogTitle: page.value.title,
    ogDescription: page.value.description,
    ogType: 'article',
    ogImage: `${siteUrl}/og-image.png`,
    ogImageWidth: 1200,
    ogImageHeight: 630,
    twitterCard: 'summary_large_image',
    twitterTitle: page.value.title,
    twitterDescription: page.value.description,
    twitterImage: `${siteUrl}/og-image.png`,
  })

  useHead({
    script: [
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: page.value.title,
          description: page.value.description,
          datePublished: page.value.date || undefined,
          inLanguage: locale.value,
          author: {
            '@type': 'Person',
            name: 'Nguyen Anh Tuong',
            url: siteUrl,
          },
          publisher: {
            '@type': 'Organization',
            name: 'Nguyen Anh Tuong - Portfolio',
          },
          mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': `${siteUrl}${route.path}`,
          },
        }),
      },
    ],
  })
}
</script>
