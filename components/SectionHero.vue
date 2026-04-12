<template>
  <section class="min-h-[100vh] flex items-center px-[24px] lg:px-[115px] relative overflow-hidden" id="home">
    <div class="relative z-10 w-full mt-[100px] lg:mt-0 xl:max-w-[70vw]">
      <p class="font-body text-[32px] font-medium leading-[1] tracking-[-0.03em] text-base-black mb-2xl fade-in">{{ $t('hero.greeting') }}</p>
      <h1 class="font-display text-[48px] lg:text-[clamp(48px,7vw,102px)] font-medium leading-[1] lg:leading-[0.88] uppercase text-dark-alt mb-4xl fade-in delay-1">{{ $t('hero.name') }}</h1>

      <div class="flex items-center gap-4xl fade-in delay-2 mt-2xl">
        <BaseButton href="#contact" variant="dark">
          <span>{{ $t('hero.cta') }}</span>
          <span class="w-8 h-8 flex items-center justify-center -mr-xs">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-4 h-4" aria-hidden="true"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
          </span>
        </BaseButton>
      </div>

      <div class="flex flex-col md:flex-row gap-lg md:gap-4xl mt-[64px] fade-in delay-3">
        <div class="flex items-center gap-md">
          <div class="w-8 h-8 bg-base-black/5 rounded-full flex items-center justify-center">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-4 h-4 text-base-black" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
          </div>
          <span class="text-[14px] font-normal leading-[1.43] text-base-black">{{ $t('hero.phone') }}</span>
        </div>
        <div class="flex items-center gap-md">
          <div class="w-8 h-8 bg-base-black/5 rounded-full flex items-center justify-center">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-4 h-4 text-base-black" aria-hidden="true"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
          </div>
          <span class="text-[14px] font-normal leading-[1.43] text-base-black">{{ $t('hero.email') }}</span>
        </div>
      </div>
    </div>

    <div class="absolute right-0 top-0 w-1/2 h-full pointer-events-none overflow-hidden">
      <div class="absolute rounded-[50%] blur-[60px] opacity-50 w-[500px] h-[400px] bg-[linear-gradient(-89deg,rgba(255,108,99,0.6)_20%,rgba(255,177,71,0.2)_58%)] top-[10%] right-[5%]"></div>
      <div class="absolute rounded-[50%] blur-[60px] opacity-50 w-[450px] h-[350px] bg-[linear-gradient(267deg,rgba(178,56,239,0.5)_16%,rgba(255,177,71,0.2)_98%)] bottom-[15%] right-[15%]"></div>
    </div>
  </section>
</template>

<script setup>
import BaseButton from '~/components/ui/BaseButton.vue'
const { t } = useI18n()
</script>
