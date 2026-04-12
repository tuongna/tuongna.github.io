<template>
  <section class="relative grid grid-cols-1 xl:grid-cols-2 gap-0 !p-0" id="about">
    <div class="bg-white p-[60px_24px] md:p-[80px_60px] xl:p-[100px_80px] flex flex-col gap-3xl">
      <div>
        <p class="text-[18px] font-semibold leading-[1.33] mb-lg fade-in">{{ $t('about.label') }}</p>
        <h2 class="text-[clamp(32px,4vw,48px)] font-bold leading-[1.17] uppercase mb-4xl fade-in delay-1">{{ $t('about.title') }}</h2>
      </div>

      <div class="flex flex-col sm:flex-row gap-2xl sm:gap-3xl fade-in delay-2">
        <div class="flex flex-col gap-md">
          <span class="text-[36px] sm:text-[48px] font-bold text-gradient-brand">{{ $t('about.stats.yearsNum') }}</span>
          <span class="text-base font-normal leading-[1.4] text-base-black whitespace-pre-line">{{ $t('about.stats.yearsLabel') }}</span>
        </div>
        <div class="flex flex-col gap-md">
          <span class="text-[36px] sm:text-[48px] font-bold text-gradient-brand">{{ $t('about.stats.projectsNum') }}</span>
          <span class="text-base font-normal leading-[1.4] text-base-black whitespace-pre-line">{{ $t('about.stats.projectsLabel') }}</span>
        </div>
        <div class="flex flex-col gap-md">
          <span class="text-[36px] sm:text-[48px] font-bold text-gradient-brand">{{ $t('about.stats.productsNum') }}</span>
          <span class="text-base font-normal leading-[1.4] text-base-black whitespace-pre-line">{{ $t('about.stats.productsLabel') }}</span>
        </div>
      </div>

      <p class="text-base font-normal leading-[1.75] text-muted-80 fade-in delay-3">{{ $t('about.bio') }}</p>

      <BaseButton href="#contact" variant="dark" class="fade-in delay-4 max-w-fit">
        <span>{{ $t('about.downloadCv') }}</span>
        <span class="w-[32px] h-[32px] flex items-center justify-center -mr-xs">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-[16px] h-[16px]"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
        </span>
      </BaseButton>
    </div>

    <div class="bg-gradient-brand text-white p-[60px_24px] md:p-[80px_60px] xl:p-[100px_80px]">
      <p class="text-[18px] font-semibold leading-[1.33] mb-lg text-white/80">{{ $t('about.experienceLabel') }}</p>
      <h2 class="text-[clamp(32px,4vw,48px)] font-bold leading-[1.17] uppercase mb-4xl text-white border-white/20">{{ $t('about.experienceTitle') }}</h2>

      <div class="flex flex-col gap-3xl xl:mt-4xl mt-3xl">
        <div v-for="(exp, i) in experience" :key="i" class="flex flex-col gap-xl pb-xl border-b border-white/20 last:border-b-0">
          <div class="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-xs lg:gap-0">
            <strong class="text-[22px] lg:text-[32px] font-bold leading-[1.5]">{{ exp.role }}</strong>
            <span class="text-base font-medium leading-[1.5] text-left lg:text-right opacity-80 before:content-['—_']">{{ exp.company }}</span>
          </div>
          <span class="text-sm font-normal leading-[1.43] opacity-70">{{ exp.date }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import BaseButton from '~/components/ui/BaseButton.vue'
const { tm, t, rt } = useI18n()
const experience = computed(() => {
  const items = tm('about.experience') as any[] || []
  return items.map(exp => ({
    role: rt(exp.role),
    company: rt(exp.company),
    date: rt(exp.date)
  }))
})
</script>
