import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  modules: ['@nuxtjs/i18n', '@nuxt/content'],

  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&family=IBM+Plex+Sans:wght@400;500;600;700&family=IBM+Plex+Serif:wght@700&family=Jost:wght@400&display=swap',
        },
      ],
      meta: [
        { 'http-equiv': 'X-Content-Type-Options', content: 'nosniff' },
        { name: 'referrer', content: 'strict-origin-when-cross-origin' },
        {
          'http-equiv': 'Content-Security-Policy',
          content: [
            "default-src 'self'",
            "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://cloud.umami.is",
            "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
            "font-src 'self' https://fonts.gstatic.com",
            'frame-src https://giscus.app',
            "img-src 'self' data: https:",
            "connect-src 'self' https://formspree.io https://cloud.umami.is",
          ].join('; '),
        },
      ],
    },
  },

  css: ['~/assets/css/main.css'],

  i18n: {
    locales: [
      { code: 'vi', language: 'vi-VN', file: 'vi.json' },
      { code: 'en', language: 'en-US', file: 'en.json' },
      { code: 'ko', language: 'ko-KR', file: 'ko.json' },
    ],
    defaultLocale: 'vi',
    strategy: 'prefix_except_default',
    detectBrowserLanguage: false,
    baseUrl: 'https://tuongna.github.io',
  },

  vite: {
    plugins: [tailwindcss()],
  },

  runtimeConfig: {
    public: {
      umamiHost: process.env.NUXT_PUBLIC_UMAMI_HOST || 'https://cloud.umami.is/script.js',
      umamiWebsiteId:
        process.env.NUXT_PUBLIC_UMAMI_WEBSITE_ID || '2ef3ce90-4a12-4319-8902-cd0ee3baf9db',
    },
  },

  nitro: {
    preset: 'github_pages',
  },

  compatibilityDate: '2026-04-11',
})
