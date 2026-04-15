<template>
  <section
    class="relative grid grid-cols-1 gap-0 p-0! xl:grid-cols-2"
    id="about"
  >
    <div class="gap-3xl flex flex-col bg-white px-6 py-16 md:px-16 md:py-20 xl:px-20 xl:py-24">
      <div>
        <p class="mb-lg fade-in text-lg leading-snug font-semibold">
          {{ $t('about.label') }}
        </p>
        <h2
          class="mb-4xl fade-in text-[clamp(2rem,4vw,3rem)] leading-tight font-bold uppercase delay-1"
        >
          {{ $t('about.title') }}
        </h2>
      </div>

      <div class="gap-2xl sm:gap-3xl fade-in flex flex-col delay-2 sm:flex-row">
        <div class="gap-md flex flex-col">
          <span class="text-gradient-brand text-4xl font-bold sm:text-5xl">{{
            $t('about.stats.yearsNum')
          }}</span>
          <span class="text-base-black text-base leading-[1.4] font-normal whitespace-pre-line">{{
            $t('about.stats.yearsLabel')
          }}</span>
        </div>
        <div class="gap-md flex flex-col">
          <span class="text-gradient-brand text-4xl font-bold sm:text-5xl">{{
            $t('about.stats.projectsNum')
          }}</span>
          <span class="text-base-black text-base leading-[1.4] font-normal whitespace-pre-line">{{
            $t('about.stats.projectsLabel')
          }}</span>
        </div>
        <div class="gap-md flex flex-col">
          <span class="text-gradient-brand text-4xl font-bold sm:text-5xl">{{
            $t('about.stats.productsNum')
          }}</span>
          <span class="text-base-black text-base leading-[1.4] font-normal whitespace-pre-line">{{
            $t('about.stats.productsLabel')
          }}</span>
        </div>
      </div>

      <p class="text-muted-80 fade-in text-base leading-loose font-normal delay-3">
        {{ $t('about.bio') }}
      </p>

      <BaseButton
        href="#contact"
        variant="dark"
        class="fade-in max-w-fit delay-4"
      >
        <span>{{ $t('about.downloadCv') }}</span>
        <span class="-mr-xs flex h-8 w-8 items-center justify-center">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            class="h-4 w-4"
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

    <div class="bg-gradient-brand px-6 py-16 text-white md:px-16 md:py-20 xl:px-20 xl:py-24">
      <p class="mb-lg text-lg leading-snug font-semibold text-white/80">
        {{ $t('about.experienceLabel') }}
      </p>
      <h2
        class="mb-4xl border-white/20 text-[clamp(2rem,4vw,3rem)] leading-tight font-bold text-white uppercase"
      >
        {{ $t('about.experienceTitle') }}
      </h2>

      <div class="gap-3xl xl:mt-4xl mt-3xl flex flex-col">
        <div
          v-for="(exp, i) in experience"
          :key="i"
          class="gap-xl pb-xl flex flex-col border-b border-white/20 last:border-b-0"
        >
          <div class="gap-xs flex flex-col lg:flex-row lg:items-start lg:justify-between lg:gap-0">
            <strong class="text-xl leading-normal font-bold lg:text-4xl">{{ exp.role }}</strong>
            <span
              class="text-left text-base leading-normal font-medium opacity-80 before:content-['—_'] lg:text-right"
              >{{ exp.company }}</span
            >
          </div>
          <span class="text-sm leading-snug font-normal opacity-70">{{ exp.date }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import BaseButton from '~/components/ui/BaseButton.vue'
const { tm, t, rt } = useI18n()
const experience = computed(() => {
  const items = (tm('about.experience') as any[]) || []
  return items.map((exp) => ({
    role: rt(exp.role),
    company: rt(exp.company),
    date: rt(exp.date),
  }))
})
</script>
