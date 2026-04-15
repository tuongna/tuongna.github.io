<template>
  <section
    class="border-base-black/10 mt-6xl pt-4xl border-t"
    aria-label="Comments"
  >
    <h2 class="mb-2xl text-base-black text-xl font-bold md:text-2xl">
      {{ $t('blog.commentsTitle') }}
    </h2>
    <ClientOnly>
      <Giscus
        repo="tuongna/tuongna.github.io"
        repo-id="MDEwOlJlcG9zaXRvcnkyMDI1OTc4MTI="
        category="Announcements"
        category-id="DIC_kwDODBNltM4C66qV"
        mapping="pathname"
        reactions-enabled="1"
        emit-metadata="0"
        input-position="top"
        :theme="giscusTheme"
        :lang="giscusLang"
        loading="lazy"
      />
      <template #fallback>
        <div class="py-3xl flex items-center justify-center">
          <div
            class="border-base-black/20 border-t-brand-coral h-6 w-6 animate-spin rounded-full border-2"
          ></div>
          <span class="ml-md text-base-black/60 text-sm">Loading comments...</span>
        </div>
      </template>
    </ClientOnly>
  </section>
</template>

<script setup lang="ts">
import Giscus from '@giscus/vue'

const { locale } = useI18n()

// Map locale codes to Giscus supported language codes
const giscusLangMap: Record<string, string> = {
  vi: 'vi',
  en: 'en',
  ko: 'ko',
}

const giscusLang = computed(() => giscusLangMap[locale.value] || 'en')
const giscusTheme = computed(() => 'light')
</script>
