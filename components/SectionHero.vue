<template>
  <section
    class="px-2xl relative flex min-h-screen items-center overflow-hidden lg:px-28"
    id="home"
  >
    <div class="relative z-10 mt-24 w-full lg:mt-0 xl:max-w-[70vw]">
      <p
        class="font-body text-base-black mb-2xl fade-in text-4xl leading-none font-medium tracking-[-0.03em]"
      >
        {{ $t('hero.greeting') }}
      </p>
      <h1
        class="font-display text-dark-alt mb-4xl fade-in text-5xl leading-none font-medium uppercase delay-1 lg:text-[clamp(3rem,7vw,6.375rem)] lg:leading-[0.88]"
      >
        {{ $t('hero.name') }}
      </h1>

      <div class="gap-4xl fade-in mt-2xl flex items-center delay-2">
        <BaseButton
          href="#contact"
          variant="dark"
        >
          <span>{{ $t('hero.cta') }}</span>
          <span class="-mr-xs flex h-8 w-8 items-center justify-center">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              class="h-4 w-4"
              aria-hidden="true"
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

      <div class="gap-lg md:gap-4xl fade-in mt-6xl flex flex-col delay-3 md:flex-row">
        <a
          href="https://github.com/tuongna"
          target="_blank"
          rel="noopener"
          class="gap-md flex items-center no-underline transition-all duration-200 hover:opacity-60"
        >
          <div class="bg-base-black/5 flex h-8 w-8 items-center justify-center rounded-full">
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              class="text-base-black h-4 w-4"
              aria-hidden="true"
            >
              <path
                d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"
              />
            </svg>
          </div>
          <span class="text-base-black text-sm leading-snug font-normal">GitHub</span>
        </a>
        <a
          href="https://linkedin.com/in/tuongna"
          target="_blank"
          rel="noopener"
          class="gap-md flex items-center no-underline transition-all duration-200 hover:opacity-60"
        >
          <div class="bg-base-black/5 flex h-8 w-8 items-center justify-center rounded-full">
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              class="text-base-black h-4 w-4"
              aria-hidden="true"
            >
              <path
                d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
              />
            </svg>
          </div>
          <span class="text-base-black text-sm leading-snug font-normal">LinkedIn</span>
        </a>
      </div>
    </div>

    <div
      class="pointer-events-none absolute top-0 right-0 hidden h-full w-1/2 items-center justify-center overflow-hidden opacity-70 md:flex"
    >
      <ClientOnly>
        <CobeGlobe />
      </ClientOnly>
    </div>
  </section>
</template>

<script setup>
import BaseButton from '~/components/ui/BaseButton.vue'
const { t } = useI18n()
</script>
