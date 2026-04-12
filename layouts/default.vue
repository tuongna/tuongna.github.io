<template>
  <div class="flex min-h-screen relative">
    <a href="#main-content" class="absolute -top-[40px] left-0 bg-[#B86ADF] text-white p-[8px] z-[100] transition-[top] duration-200 ease-out no-underline font-semibold focus:top-0 focus:outline-[2px] focus:outline-[#FFB147] focus:outline-offset-[2px]">{{ $t('nav.skipToContent') }}</a>
    <AppSidebar />
    <MobileToggle />
    <main id="main-content" class="flex-1 ml-sidebar max-[900px]:ml-0 focus:outline-none" tabindex="-1">
      <slot />
    </main>
  </div>
</template>

<script setup>
const { t } = useI18n()
</script>
