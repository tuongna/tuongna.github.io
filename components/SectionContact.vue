<template>
  <section
    class="grid grid-cols-1 gap-0 md:grid-cols-2"
    id="contact"
  >
    <div class="px-6 py-16 md:px-16 md:py-20 lg:px-20 lg:py-24">
      <p class="mb-lg fade-in text-lg leading-snug font-semibold">
        {{ $t('contact.label') }}
      </p>
      <h2
        class="mb-4xl fade-in text-[clamp(2rem,4vw,3rem)] leading-tight font-bold uppercase delay-1"
      >
        {{ $t('contact.title') }}
      </h2>

      <p
        class="text-base-black mt-4xl fade-in text-base leading-normal font-normal tracking-[-0.03em] delay-2"
      >
        {{ $t('contact.address') }}
      </p>

      <div class="gap-2xl mt-4xl fade-in flex delay-4">
        <a
          href="https://github.com/tuongna"
          target="_blank"
          rel="noopener"
          class="text-base-black text-base leading-normal font-medium tracking-[-0.03em] uppercase no-underline transition-all duration-200 hover:opacity-60"
          >GitHub</a
        >
        <a
          href="https://linkedin.com/in/tuongna"
          target="_blank"
          rel="noopener"
          class="text-base-black text-base leading-normal font-medium tracking-[-0.03em] uppercase no-underline transition-all duration-200 hover:opacity-60"
          >LinkedIn</a
        >
      </div>
    </div>

    <div
      class="bg-gradient-brand flex flex-col justify-center px-6 py-16 md:px-16 md:py-20 lg:px-[5.3125rem] lg:py-16"
    >
      <h3
        class="mb-4xl text-4xl leading-tight font-bold whitespace-pre-line text-white uppercase md:text-5xl"
      >
        {{ $t('contact.formTitle') }}
      </h3>

      <!-- Success Message -->
      <div
        v-if="formState === 'success'"
        class="py-3xl flex flex-col items-center justify-center text-center"
      >
        <div class="mb-2xl h-6xl flex w-6xl items-center justify-center rounded-full bg-white/20">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            stroke-width="2.5"
            class="h-8 w-8"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <p class="mb-md text-xl font-bold text-white">{{ $t('contact.formSuccess') }}</p>
        <button
          type="button"
          class="mt-xl cursor-pointer text-sm text-white/80 underline underline-offset-4 transition-colors hover:text-white"
          @click="resetForm"
        >
          {{ $t('contact.formSendAnother') }}
        </button>
      </div>

      <!-- Form -->
      <form
        v-else
        class="gap-3xl flex flex-col"
        @submit.prevent="handleSubmit"
      >
        <!-- Honeypot for spam protection -->
        <input
          type="text"
          name="_gotcha"
          class="hidden"
          tabindex="-1"
          autocomplete="off"
        />

        <div class="gap-3xl flex flex-col md:flex-row">
          <label
            for="contact-name"
            class="sr-only"
            >{{ $t('contact.formName') }}</label
          >
          <input
            v-model="form.name"
            type="text"
            class="py-sm font-body w-full border-0 border-b-2 border-white bg-transparent text-base font-medium text-white uppercase transition-all duration-200 outline-none placeholder:text-white/80 focus-visible:rounded-[2px] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B238EF]"
            :placeholder="$t('contact.formName')"
            name="name"
            id="contact-name"
            autocomplete="name"
            required
            maxlength="100"
            :disabled="formState === 'sending'"
          />
          <label
            for="contact-email"
            class="sr-only"
            >{{ $t('contact.formEmail') }}</label
          >
          <input
            v-model="form.email"
            type="email"
            class="py-sm font-body w-full border-0 border-b-2 border-white bg-transparent text-base font-medium text-white uppercase transition-all duration-200 outline-none placeholder:text-white/80 focus-visible:rounded-[2px] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B238EF]"
            :placeholder="$t('contact.formEmail')"
            name="email"
            id="contact-email"
            autocomplete="email"
            required
            maxlength="254"
            :disabled="formState === 'sending'"
          />
        </div>
        <label
          for="contact-message"
          class="sr-only"
          >{{ $t('contact.formMessage') }}</label
        >
        <textarea
          v-model="form.message"
          class="py-sm font-body min-h-16 w-full resize-none border-0 border-b-2 border-white bg-transparent text-base font-medium text-white uppercase transition-all duration-200 outline-none placeholder:text-white/80 focus:border-b-black focus-visible:rounded-[2px] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B238EF]"
          :placeholder="$t('contact.formMessage')"
          name="message"
          rows="3"
          id="contact-message"
          required
          maxlength="2000"
          :disabled="formState === 'sending'"
        ></textarea>

        <!-- Error message -->
        <p
          v-if="formState === 'error'"
          class="px-lg py-sm rounded-lg bg-white/10 text-sm text-white/90"
        >
          ⚠️ {{ $t('contact.formError') }}
        </p>

        <div class="mt-xl">
          <BaseButton
            type="submit"
            variant="dark"
            :disabled="formState === 'sending'"
          >
            <span
              v-if="formState === 'sending'"
              class="gap-sm flex items-center"
            >
              <span
                class="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white"
              ></span>
              {{ $t('contact.formSending') }}
            </span>
            <template v-else>
              <span>{{ $t('contact.formSubmit') }}</span>
              <span class="-mr-xs h-2xl flex w-2xl items-center justify-center">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  class="h-lg w-lg"
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
            </template>
          </BaseButton>
        </div>
      </form>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import BaseButton from '~/components/ui/BaseButton.vue'

const { t } = useI18n()

type FormState = 'idle' | 'sending' | 'success' | 'error'

const formState = ref<FormState>('idle')
const lastSubmitTime = ref(0)
const COOLDOWN_MS = 10000 // 10 seconds between submissions

const form = reactive({
  name: '',
  email: '',
  message: '',
})

const FORMSPREE_URL = 'https://formspree.io/f/xpqkqrvw'

async function handleSubmit() {
  const now = Date.now()
  if (now - lastSubmitTime.value < COOLDOWN_MS) return
  lastSubmitTime.value = now
  formState.value = 'sending'

  try {
    const res = await fetch(FORMSPREE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        name: form.name,
        email: form.email,
        message: form.message,
        _subject: `Portfolio Contact: ${form.name}`,
      }),
    })

    if (res.ok) {
      formState.value = 'success'
      form.name = ''
      form.email = ''
      form.message = ''
    } else {
      formState.value = 'error'
    }
  } catch {
    formState.value = 'error'
  }
}

function resetForm() {
  formState.value = 'idle'
}
</script>
