<template>
  <section
    class="relative px-[24px] py-[100px] lg:px-[115px]"
    id="writing"
  >
    <p class="mb-lg fade-in text-center text-[18px] leading-[1.33] font-semibold">
      {{ $t('blog.label') }}
    </p>
    <h2
      class="mb-4xl fade-in text-center text-[clamp(32px,4vw,48px)] leading-[1.17] font-bold uppercase delay-1"
    >
      {{ $t('blog.title') }}
    </h2>

    <div class="gap-3xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <!-- Real blog post -->
      <NuxtLink
        v-for="(post, i) in posts"
        :key="i"
        :to="localePath(`/blog/${post.slug}`)"
        class="gap-2xl fade-in flex flex-col text-inherit no-underline transition-all delay-2 duration-400 hover:-translate-y-1"
      >
        <div
          class="bg-muted-05 flex h-[260px] w-full items-center justify-center bg-[linear-gradient(135deg,#FFB147_0%,#FF6C63_50%,#B86ADF_100%)] object-cover"
        >
          <span class="font-display text-[48px] font-bold text-white">JR</span>
        </div>
        <div class="gap-xl flex flex-col">
          <time class="text-[18px] leading-[1.33] font-semibold">{{ post.date }}</time>
          <h3 class="text-dark-text text-[24px] leading-[1.25] font-bold">{{ post.title }}</h3>
          <div class="bg-muted-20 h-[1px] w-full"></div>
        </div>
      </NuxtLink>

      <!-- Placeholder 1 -->
      <div
        class="gap-2xl fade-in flex flex-col text-inherit no-underline opacity-40 transition-all delay-3 duration-400"
      >
        <div class="bg-muted-05 h-[260px] w-full object-cover"></div>
        <div class="gap-xl flex flex-col">
          <time class="text-[18px] leading-[1.33] font-semibold">{{ $t('blog.comingSoon') }}</time>
          <h3 class="text-dark-text text-[24px] leading-[1.25] font-bold whitespace-pre-line">
            {{ $t('blog.placeholder1') }}
          </h3>
          <div class="bg-muted-20 h-[1px] w-full"></div>
        </div>
      </div>

      <!-- Placeholder 2 -->
      <div
        class="gap-2xl fade-in flex flex-col text-inherit no-underline opacity-40 transition-all delay-4 duration-400"
      >
        <div class="bg-muted-05 h-[260px] w-full object-cover"></div>
        <div class="gap-xl flex flex-col">
          <time class="text-[18px] leading-[1.33] font-semibold">{{ $t('blog.comingSoon') }}</time>
          <h3 class="text-dark-text text-[24px] leading-[1.25] font-bold whitespace-pre-line">
            {{ $t('blog.placeholder2') }}
          </h3>
          <div class="bg-muted-20 h-[1px] w-full"></div>
        </div>
      </div>
    </div>

    <div class="mt-[64px] text-center">
      <BaseButton
        v-if="posts.length"
        :to="localePath(`/blog/${posts[0]?.slug}`)"
        class="fade-in delay-4"
      >
        <span>{{ $t('blog.readMore') }}</span>
        <span class="-mr-xs flex h-[32px] w-[32px] items-center justify-center">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            class="h-[16px] w-[16px]"
          >
            <line
              x1="7"
              y1="17"
              x2="17"
              y2="7"
            />
            <polyline points="7 7 17 7 17 17" />
          </svg>
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
  queryCollection(collectionName.value).all(),
)

const posts = computed(() => {
  return (contentPosts.value || []).map((post) => ({
    date: post.date,
    title: post.title,
    slug: post.stem?.replace(`${locale.value}/blog/`, '') || '',
  }))
})
</script>
