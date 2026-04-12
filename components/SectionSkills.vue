<template>
  <section class="py-[100px] px-[24px] lg:px-[115px] relative" id="skills">
    <p class="text-[18px] font-semibold leading-[1.33] mb-lg fade-in">{{ $t('skills.label') }}</p>
    <h2 class="text-[clamp(32px,4vw,48px)] font-bold leading-[1.17] uppercase mb-4xl fade-in delay-1">{{ $t('skills.title') }}</h2>

    <div class="flex flex-col">
      <div v-for="(item, i) in skills" :key="i" class="flex flex-col items-start gap-lg lg:flex-row lg:items-center lg:justify-between py-2xl border-b border-muted-20 transition-all duration-400 hover:pl-lg cursor-default group fade-in delay-2">
        <span class="text-[clamp(24px,3vw,32px)] font-bold leading-snug uppercase lg:min-w-[280px]">{{ item.name }}</span>
        <span class="text-base text-muted-80 leading-relaxed flex-1 lg:max-w-[545px]">
          <span class="font-medium text-base-black after:content-['_\—_'] after:text-muted-80 after:font-normal">{{ item.tech }}</span>
          <span>{{ item.desc }}</span>
        </span>
        <span class="hidden lg:flex w-10 h-10 items-center justify-center border border-muted-20 rounded-full transition-colors duration-400 group-hover:bg-brand-orange group-hover:border-transparent group-hover:text-white">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-4 h-4">
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </span>
      </div>
    </div>
  </section>
</template>

<script setup>
const { tm, rt } = useI18n()
const skills = computed(() => {
  const items = tm('skills.items') || []
  return items.map(item => ({
    name: rt(item.name),
    tech: rt(item.tech),
    desc: rt(item.desc)
  }))
})
</script>
