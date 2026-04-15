<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
  <UmamiAnalytics />
</template>

<script setup>
const { t } = useI18n()
const i18nHead = useLocaleHead({ addSeoAttributes: true })

useHead({
  htmlAttrs: { lang: i18nHead.value.htmlAttrs?.lang },
  link: [...(i18nHead.value.link || [])],
  meta: [...(i18nHead.value.meta || [])],
})
</script>
