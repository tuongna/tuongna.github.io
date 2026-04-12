<template>
  <aside class="w-[285px] bg-base-black border-r border-white/10 flex flex-col justify-between p-[56px_48px] fixed top-0 left-0 h-screen z-[100] transition-transform duration-300 ease max-[900px]:-translate-x-full max-[900px]:[&.open]:translate-x-0" :id="'sidebar'">
    <!-- Logo -->
    <div class="flex justify-center">
      <NuxtLink :to="localePath('/')" class="font-serif text-3xl font-bold leading-[1.3] text-white text-center no-underline" :aria-label="$t('sidebar.logoAria')">NA</NuxtLink>
    </div>

    <!-- Navigation -->
    <div>
      <hr class="w-full h-1 bg-gradient-line border-none m-0 mb-8">
      <nav class="flex flex-col gap-8" :aria-label="$t('sidebar.navAria')">
        <!-- On home page: anchor links. On other pages: full route links -->
        <template v-if="isHomePage">
          <a href="#home" class="font-body text-[20px] leading-[1.5] uppercase text-center text-white no-underline transition-all duration-200 hover:opacity-100" :class="activeSection === 'home' ? 'font-bold opacity-100' : 'font-normal opacity-70'" @click="closeSidebar">{{ $t('nav.home') }}</a>
          <a href="#about" class="font-body text-[20px] leading-[1.5] uppercase text-center text-white no-underline transition-all duration-200 hover:opacity-100" :class="activeSection === 'about' ? 'font-bold opacity-100' : 'font-normal opacity-70'" @click="closeSidebar">{{ $t('nav.about') }}</a>
          <a href="#skills" class="font-body text-[20px] leading-[1.5] uppercase text-center text-white no-underline transition-all duration-200 hover:opacity-100" :class="activeSection === 'skills' ? 'font-bold opacity-100' : 'font-normal opacity-70'" @click="closeSidebar">{{ $t('nav.skills') }}</a>
          <a href="#writing" class="font-body text-[20px] leading-[1.5] uppercase text-center text-white no-underline transition-all duration-200 hover:opacity-100" :class="activeSection === 'writing' ? 'font-bold opacity-100' : 'font-normal opacity-70'" @click="closeSidebar">{{ $t('nav.blog') }}</a>
          <a href="#contact" class="font-body text-[20px] leading-[1.5] uppercase text-center text-white no-underline transition-all duration-200 hover:opacity-100" :class="activeSection === 'contact' ? 'font-bold opacity-100' : 'font-normal opacity-70'" @click="closeSidebar">{{ $t('nav.contact') }}</a>
        </template>
        <template v-else>
          <NuxtLink :to="localePath('/')" class="font-body text-[20px] font-normal leading-[1.5] uppercase text-center text-white no-underline transition-all duration-200 opacity-70 hover:opacity-100" @click="closeSidebar">{{ $t('nav.home') }}</NuxtLink>
          <NuxtLink :to="localePath('/') + '#about'" class="font-body text-[20px] font-normal leading-[1.5] uppercase text-center text-white no-underline transition-all duration-200 opacity-70 hover:opacity-100" @click="closeSidebar">{{ $t('nav.about') }}</NuxtLink>
          <NuxtLink :to="localePath('/') + '#skills'" class="font-body text-[20px] font-normal leading-[1.5] uppercase text-center text-white no-underline transition-all duration-200 opacity-70 hover:opacity-100" @click="closeSidebar">{{ $t('nav.skills') }}</NuxtLink>
          <NuxtLink :to="localePath('/') + '#writing'" class="font-body text-[20px] font-normal leading-[1.5] uppercase text-center text-white no-underline transition-all duration-200 opacity-70 hover:opacity-100" @click="closeSidebar">{{ $t('nav.blog') }}</NuxtLink>
          <NuxtLink :to="localePath('/') + '#contact'" class="font-body text-[20px] font-normal leading-[1.5] uppercase text-center text-white no-underline transition-all duration-200 opacity-70 hover:opacity-100" @click="closeSidebar">{{ $t('nav.contact') }}</NuxtLink>
        </template>
      </nav>
    </div>

    <!-- Bottom links and copyright -->
    <div class="flex flex-col gap-3xl items-center">
      <div class="flex flex-col gap-md items-center">
        <a href="https://github.com/tuongna" target="_blank" rel="noopener" class="w-10 h-10 flex items-center justify-center text-white transition-all duration-200 opacity-70 hover:opacity-100 hover:scale-110" aria-label="GitHub">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
        </a>
        <a href="https://linkedin.com/in/tuongna" target="_blank" rel="noopener" class="w-10 h-10 flex items-center justify-center text-white transition-all duration-200 opacity-70 hover:opacity-100 hover:scale-110" aria-label="LinkedIn">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
        </a>
        <a href="mailto:natuong2017@gmail.com" class="w-10 h-10 flex items-center justify-center text-white transition-all duration-200 opacity-70 hover:opacity-100 hover:scale-110" aria-label="Email">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
        </a>
      </div>

      <nav class="flex gap-xs justify-center" :aria-label="$t('sidebar.langAria')">
        <NuxtLink v-for="loc in locales" :key="loc.code" :to="switchLocalePath(loc.code)" class="text-[13px] font-semibold px-[12px] py-[6px] bg-transparent text-white/70 no-underline rounded-[4px] transition-all duration-200 hover:text-white" :class="{ 'bg-white/15 !text-white': locale === loc.code }">
          {{ loc.code.toUpperCase() }}
        </NuxtLink>
      </nav>

      <div class="text-[16px] font-normal leading-[1.375] text-white text-center opacity-70 flex items-center justify-center gap-1">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-3.5 h-3.5"><circle cx="12" cy="12" r="10"/><path d="M14.83 14.83a4 4 0 1 1 0-5.66"/></svg>
        <span>{{ $t('sidebar.copyright') }}</span>
      </div>
    </div>
  </aside>
</template>

<script setup>
const route = useRoute()
const { locale, locales } = useI18n()
const localePath = useLocalePath()
const switchLocalePath = useSwitchLocalePath()

const isHomePage = computed(() => {
  const path = route.path
  return path === '/' || path === '/en' || path === '/ko' || path === `/${locale.value}`
})

const activeSection = ref('home')

function closeSidebar() {
  document.getElementById('sidebar')?.classList.remove('open')
  document.querySelector('.sidebar-overlay')?.classList.remove('active')
}
</script>
