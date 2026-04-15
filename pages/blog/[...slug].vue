<template>
  <div
    class="mx-auto min-h-screen max-w-[900px] px-[24px] py-[60px] md:px-[60px] md:py-[80px] lg:px-[115px] lg:py-[100px]"
  >
    <BaseButton
      :to="localePath('/')"
      variant="dark"
    >
      <span class="mr-xs flex h-[24px] w-[24px] items-center justify-center">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          class="h-[16px] w-[16px]"
        >
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </span>
      <span>{{ $t('nav.home') }}</span>
    </BaseButton>

    <article v-if="page">
      <h1
        class="mt-4xl mb-md text-base-black text-[28px] leading-[1.17] font-bold tracking-[-0.02em] md:text-[36px] lg:text-[48px]"
      >
        {{ page.title }}
      </h1>
      <p class="text-base-black/80 mb-4xl text-[16px]">{{ page.displayDate || page.date }}</p>

      <div class="prose">
        <ContentRenderer :value="page" />
      </div>

      <GiscusComments />
    </article>

    <div
      v-else
      class="py-[100px] text-center"
    >
      <h1 class="text-[28px] font-bold md:text-[36px]">404 - Post Not Found</h1>
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
