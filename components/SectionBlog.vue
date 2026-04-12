<template>
  <section class="py-[100px] px-[24px] lg:px-[115px] relative" id="writing">
    <p class="text-[18px] font-semibold leading-[1.33] mb-lg fade-in text-center">{{ $t('blog.label') }}</p>
    <h2 class="text-[clamp(32px,4vw,48px)] font-bold leading-[1.17] uppercase mb-4xl fade-in delay-1 text-center">{{ $t('blog.title') }}</h2>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3xl">
      <!-- Real blog post -->
      <NuxtLink v-for="(post, i) in posts" :key="i" :to="localePath(`/blog/${post.slug}`)" class="flex flex-col gap-2xl no-underline text-inherit transition-all duration-400 hover:-translate-y-1 fade-in delay-2">
        <div class="w-full h-[260px] object-cover bg-muted-05 bg-[linear-gradient(135deg,#FFB147_0%,#FF6C63_50%,#B86ADF_100%)] flex items-center justify-center">
          <span class="text-[48px] text-white font-bold font-display">JR</span>
        </div>
        <div class="flex flex-col gap-xl">
          <time class="text-[18px] font-semibold leading-[1.33]">{{ post.date }}</time>
          <h3 class="text-[24px] font-bold leading-[1.25] text-dark-text">{{ post.title }}</h3>
          <div class="w-full h-[1px] bg-muted-20"></div>
        </div>
      </NuxtLink>

      <!-- Placeholder 1 -->
      <div class="flex flex-col gap-2xl no-underline text-inherit transition-all duration-400 opacity-40 fade-in delay-3">
        <div class="w-full h-[260px] object-cover bg-muted-05"></div>
        <div class="flex flex-col gap-xl">
          <time class="text-[18px] font-semibold leading-[1.33]">{{ $t('blog.comingSoon') }}</time>
          <h3 class="text-[24px] font-bold leading-[1.25] text-dark-text whitespace-pre-line">{{ $t('blog.placeholder1') }}</h3>
          <div class="w-full h-[1px] bg-muted-20"></div>
        </div>
      </div>

      <!-- Placeholder 2 -->
      <div class="flex flex-col gap-2xl no-underline text-inherit transition-all duration-400 opacity-40 fade-in delay-4">
        <div class="w-full h-[260px] object-cover bg-muted-05"></div>
        <div class="flex flex-col gap-xl">
          <time class="text-[18px] font-semibold leading-[1.33]">{{ $t('blog.comingSoon') }}</time>
          <h3 class="text-[24px] font-bold leading-[1.25] text-dark-text whitespace-pre-line">{{ $t('blog.placeholder2') }}</h3>
          <div class="w-full h-[1px] bg-muted-20"></div>
        </div>
      </div>
    </div>

    <div class="text-center mt-[64px]">
      <BaseButton v-if="posts.length" :to="localePath(`/blog/${posts[0]?.slug}`)" class="fade-in delay-4">
        <span>{{ $t('blog.readMore') }}</span>
        <span class="w-[32px] h-[32px] flex items-center justify-center -mr-xs">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-[16px] h-[16px]"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
        </span>
      </BaseButton>
    </div>
  </section>
</template>

<script setup lang="ts">
import BaseButton from '~/components/ui/BaseButton.vue'
const { locale } = useI18n()
const localePath = useLocalePath()

const collectionName = computed(() => `blog_${locale.value}` as any)

const { data: contentPosts } = await useAsyncData(`blog-list-${locale.value}`, () =>
  queryCollection(collectionName.value).all()
)

const posts = computed(() => {
  return (contentPosts.value || []).map(post => ({
    date: post.date,
    title: post.title,
    slug: post.stem?.replace(`${locale.value}/blog/`, '') || ''
  }))
})


</script>
