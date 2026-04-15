<template>
  <aside
    class="bg-base-black ease fixed top-0 left-0 z-[100] flex h-screen w-[285px] flex-col justify-between border-r border-white/10 p-[56px_48px] transition-transform duration-300 max-[900px]:-translate-x-full max-[900px]:[&.open]:translate-x-0"
    :id="'sidebar'"
  >
    <!-- Logo -->
    <div class="flex justify-center">
      <NuxtLink
        :to="localePath('/')"
        class="text-center font-serif text-3xl leading-[1.3] font-bold text-white no-underline"
        :aria-label="$t('sidebar.logoAria')"
        >NA</NuxtLink
      >
    </div>

    <!-- Navigation -->
    <div>
      <hr class="bg-gradient-line m-0 mb-8 h-1 w-full border-none" />
      <nav
        class="flex flex-col gap-8"
        :aria-label="$t('sidebar.navAria')"
      >
        <!-- On home page: anchor links. On other pages: full route links -->
        <template v-if="isHomePage">
          <a
            href="#home"
            class="font-body text-center text-[20px] leading-[1.5] text-white uppercase no-underline transition-all duration-200 hover:opacity-100"
            :class="activeSection === 'home' ? 'font-bold opacity-100' : 'font-normal opacity-70'"
            @click="closeSidebar"
            >{{ $t('nav.home') }}</a
          >
          <a
            href="#about"
            class="font-body text-center text-[20px] leading-[1.5] text-white uppercase no-underline transition-all duration-200 hover:opacity-100"
            :class="activeSection === 'about' ? 'font-bold opacity-100' : 'font-normal opacity-70'"
            @click="closeSidebar"
            >{{ $t('nav.about') }}</a
          >
          <a
            href="#skills"
            class="font-body text-center text-[20px] leading-[1.5] text-white uppercase no-underline transition-all duration-200 hover:opacity-100"
            :class="activeSection === 'skills' ? 'font-bold opacity-100' : 'font-normal opacity-70'"
            @click="closeSidebar"
            >{{ $t('nav.skills') }}</a
          >
          <a
            href="#writing"
            class="font-body text-center text-[20px] leading-[1.5] text-white uppercase no-underline transition-all duration-200 hover:opacity-100"
            :class="
              activeSection === 'writing' ? 'font-bold opacity-100' : 'font-normal opacity-70'
            "
            @click="closeSidebar"
            >{{ $t('nav.blog') }}</a
          >
          <a
            href="#contact"
            class="font-body text-center text-[20px] leading-[1.5] text-white uppercase no-underline transition-all duration-200 hover:opacity-100"
            :class="
              activeSection === 'contact' ? 'font-bold opacity-100' : 'font-normal opacity-70'
            "
            @click="closeSidebar"
            >{{ $t('nav.contact') }}</a
          >
        </template>
        <template v-else>
          <NuxtLink
            :to="localePath('/')"
            class="font-body text-center text-[20px] leading-[1.5] font-normal text-white uppercase no-underline opacity-70 transition-all duration-200 hover:opacity-100"
            @click="closeSidebar"
            >{{ $t('nav.home') }}</NuxtLink
          >
          <NuxtLink
            :to="localePath('/') + '#about'"
            class="font-body text-center text-[20px] leading-[1.5] font-normal text-white uppercase no-underline opacity-70 transition-all duration-200 hover:opacity-100"
            @click="closeSidebar"
            >{{ $t('nav.about') }}</NuxtLink
          >
          <NuxtLink
            :to="localePath('/') + '#skills'"
            class="font-body text-center text-[20px] leading-[1.5] font-normal text-white uppercase no-underline opacity-70 transition-all duration-200 hover:opacity-100"
            @click="closeSidebar"
            >{{ $t('nav.skills') }}</NuxtLink
          >
          <NuxtLink
            :to="localePath('/') + '#writing'"
            class="font-body text-center text-[20px] leading-[1.5] font-normal text-white uppercase no-underline opacity-70 transition-all duration-200 hover:opacity-100"
            @click="closeSidebar"
            >{{ $t('nav.blog') }}</NuxtLink
          >
          <NuxtLink
            :to="localePath('/') + '#contact'"
            class="font-body text-center text-[20px] leading-[1.5] font-normal text-white uppercase no-underline opacity-70 transition-all duration-200 hover:opacity-100"
            @click="closeSidebar"
            >{{ $t('nav.contact') }}</NuxtLink
          >
        </template>
      </nav>
    </div>

    <!-- Bottom links and copyright -->
    <div class="gap-3xl flex flex-col items-center">
      <div class="gap-md flex flex-col items-center">
        <a
          href="https://github.com/tuongna"
          target="_blank"
          rel="noopener"
          class="flex h-10 w-10 items-center justify-center text-white opacity-70 transition-all duration-200 hover:scale-110 hover:opacity-100"
          aria-label="GitHub"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="h-5 w-5"
          >
            <path
              d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
            />
          </svg>
        </a>
        <a
          href="https://linkedin.com/in/tuongna"
          target="_blank"
          rel="noopener"
          class="flex h-10 w-10 items-center justify-center text-white opacity-70 transition-all duration-200 hover:scale-110 hover:opacity-100"
          aria-label="LinkedIn"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="h-5 w-5"
          >
            <path
              d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
            />
            <rect
              x="2"
              y="9"
              width="4"
              height="12"
            />
            <circle
              cx="4"
              cy="4"
              r="2"
            />
          </svg>
        </a>
      </div>

      <nav
        class="gap-xs flex justify-center"
        :aria-label="$t('sidebar.langAria')"
      >
        <NuxtLink
          v-for="loc in locales"
          :key="loc.code"
          :to="switchLocalePath(loc.code)"
          class="rounded-[4px] bg-transparent px-[12px] py-[6px] text-[13px] font-semibold text-white/70 no-underline transition-all duration-200 hover:text-white"
          :class="{ 'bg-white/15 !text-white': locale === loc.code }"
        >
          {{ loc.code.toUpperCase() }}
        </NuxtLink>
      </nav>

      <div
        class="flex items-center justify-center gap-1 text-center text-[16px] leading-[1.375] font-normal text-white opacity-70"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          class="h-3.5 w-3.5"
        >
          <circle
            cx="12"
            cy="12"
            r="10"
          />
          <path d="M14.83 14.83a4 4 0 1 1 0-5.66" />
        </svg>
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
