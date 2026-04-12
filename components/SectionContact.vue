<template>
  <section class="grid grid-cols-1 md:grid-cols-2 gap-0" id="contact">
    <div class="p-[60px_24px] md:p-[80px_60px] lg:p-[100px_80px]">
      <p class="text-[18px] font-semibold leading-[1.33] mb-lg fade-in">{{ $t('contact.label') }}</p>
      <h2 class="text-[clamp(32px,4vw,48px)] font-bold leading-[1.17] uppercase mb-4xl fade-in delay-1">{{ $t('contact.title') }}</h2>

      <p class="text-[16px] font-normal leading-[1.5] tracking-[-0.03em] text-base-black mt-4xl fade-in delay-2">{{ $t('contact.address') }}</p>
      <p class="text-[22px] md:text-[32px] font-bold leading-[1.25] mt-2xl fade-in delay-2">{{ $t('contact.phone') }}</p>
      <p class="text-[22px] md:text-[32px] font-bold leading-[1.25] mt-2xl fade-in delay-3">{{ $t('contact.email') }}</p>

      <div class="flex gap-2xl mt-4xl fade-in delay-4">
        <a href="https://github.com/tuongna" target="_blank" rel="noopener" class="text-[16px] font-medium leading-[1.5] tracking-[-0.03em] uppercase text-base-black no-underline transition-all duration-200 hover:opacity-60">GitHub</a>
        <a href="https://linkedin.com/in/tuongna" target="_blank" rel="noopener" class="text-[16px] font-medium leading-[1.5] tracking-[-0.03em] uppercase text-base-black no-underline transition-all duration-200 hover:opacity-60">LinkedIn</a>
      </div>
    </div>

    <div class="bg-gradient-brand p-[60px_24px] md:p-[80px_60px] lg:p-[64px_85px] flex flex-col justify-center">
      <h3 class="text-[32px] md:text-[40px] font-bold leading-[1.2] uppercase text-white mb-4xl whitespace-pre-line">{{ $t('contact.formTitle') }}</h3>
      <form class="flex flex-col gap-3xl" action="#" method="POST">
        <div class="flex flex-col md:flex-row gap-3xl">
          <label for="contact-name" class="sr-only">{{ $t('contact.formName') }}</label>
          <input type="text" class="w-full bg-transparent border-0 border-b-[1.5px] border-white py-sm font-body text-[16px] font-medium uppercase text-white outline-none transition-all duration-200 placeholder:text-white/80 focus-visible:outline-[2px] focus-visible:outline-[#B238EF] focus-visible:outline-offset-4 focus-visible:rounded-[2px]" :placeholder="$t('contact.formName')" name="name" id="contact-name" autocomplete="name">
          <label for="contact-email" class="sr-only">{{ $t('contact.formEmail') }}</label>
          <input type="email" class="w-full bg-transparent border-0 border-b-[1.5px] border-white py-sm font-body text-[16px] font-medium uppercase text-white outline-none transition-all duration-200 placeholder:text-white/80 focus-visible:outline-[2px] focus-visible:outline-[#B238EF] focus-visible:outline-offset-4 focus-visible:rounded-[2px]" :placeholder="$t('contact.formEmail')" name="email" id="contact-email" autocomplete="email">
        </div>
        <label for="contact-message" class="sr-only">{{ $t('contact.formMessage') }}</label>
        <textarea class="w-full min-h-[60px] resize-none bg-transparent border-0 border-b-[1.5px] border-white py-sm font-body text-[16px] font-medium uppercase text-white outline-none transition-all duration-200 placeholder:text-white/80 focus:border-b-black focus-visible:outline-[2px] focus-visible:outline-[#B238EF] focus-visible:outline-offset-4 focus-visible:rounded-[2px]" :placeholder="$t('contact.formMessage')" name="message" rows="3" id="contact-message"></textarea>
        <div class="mt-xl">
          <BaseButton type="submit" variant="dark">
            <span>{{ $t('contact.formSubmit') }}</span>
            <span class="w-[24px] h-[24px] flex items-center justify-center -mr-xs">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-[16px] h-[16px]"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
            </span>
          </BaseButton>
        </div>
      </form>
    </div>
  </section>
</template>

<script setup lang="ts">
import BaseButton from '~/components/ui/BaseButton.vue'
const { t } = useI18n()
</script>
