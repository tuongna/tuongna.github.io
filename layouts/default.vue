<template>
  <div class="relative flex min-h-screen">
    <a
      href="#main-content"
      class="absolute -top-10 left-0 z-[100] bg-[#B86ADF] p-2 font-semibold text-white no-underline transition-[top] duration-200 ease-out focus:top-0 focus:outline-2 focus:outline-offset-2 focus:outline-[#FFB147]"
      >{{ $t('nav.skipToContent') }}</a
    >
    <AppSidebar />
    <MobileToggle />
    <main
      id="main-content"
      class="ml-sidebar flex-1 focus:outline-none max-[900px]:ml-0"
      tabindex="-1"
    >
      <slot />
    </main>
  </div>
</template>

<script setup>
const { t } = useI18n()
</script>
