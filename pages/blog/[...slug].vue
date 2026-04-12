<template>
  <div class="px-[24px] py-[60px] md:px-[60px] md:py-[80px] lg:px-[115px] lg:py-[100px] max-w-[900px] mx-auto min-h-screen">
    <BaseButton :to="localePath('/')" variant="dark">
      <span class="w-[24px] h-[24px] flex items-center justify-center mr-xs">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-[16px] h-[16px]"><polyline points="15 18 9 12 15 6"/></svg>
      </span>
      <span>{{ $t('nav.home') }}</span>
    </BaseButton>

    <article v-if="page">
      <h1 class="text-[28px] md:text-[36px] lg:text-[48px] font-bold leading-[1.17] tracking-[-0.02em] mt-4xl mb-md text-base-black">
        {{ page.title }}
      </h1>
      <p class="text-[16px] text-base-black/80 mb-4xl">{{ page.date }}</p>

      <div class="prose">
        <ContentRenderer :value="page" />
      </div>
    </article>

    <div v-else class="text-center py-[100px]">
      <h1 class="text-[28px] md:text-[36px] font-bold">404 - Post Not Found</h1>
      <div class="mt-2xl flex justify-center">
        <BaseButton :to="localePath('/')" variant="dark">
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
  return queryCollection(collectionName.value)
    .path(`/${locale.value}/blog/${slug.value}`)
    .first()
})

if (page.value) {
  useSeoMeta({
    title: page.value.title,
    description: page.value.description,
    ogTitle: page.value.title,
    ogDescription: page.value.description,
    ogType: 'article',
  })
}
</script>
