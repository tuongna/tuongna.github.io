# tuongna.github.io

Personal portfolio and blog of **Nguyen Anh Tuong** — Senior Frontend Engineer. This project was recently migrated from a static multi-file structure to a modern **Nuxt 4** framework for better maintainability and performance.

🌐 **Live:** [tuongna.github.io](https://tuongna.github.io/)

---

## 🚀 Tech Stack

- **Framework:** [Nuxt 4](https://nuxt.com/) (v4.4.2)
- **Content:** [@nuxt/content v3](https://content.nuxt.com/) (Markdown-based blog engine)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) (CSS-first engine)
- **Multilingual:** [@nuxtjs/i18n](https://i18n.nuxtjs.org/) (VI, EN, KO support)
- **Comments:** [Giscus](https://giscus.app/) (GitHub Discussions-powered)
- **Analytics:** [Umami](https://umami.is/) (privacy-friendly, cookie-free)
- **Contact:** [Formspree](https://formspree.io/) (serverless form backend)
- **Hosting:** GitHub Pages via GitHub Actions
- **Formatting:** [Prettier](https://prettier.io/) + [prettier-plugin-tailwindcss](https://github.com/tailwindlabs/prettier-plugin-tailwindcss)

## ✨ Key Features

- 🌍 **Trilingual** — Full support for Vietnamese, English, and Korean with localized routing.
- 🌐 **Interactive Globe** — WebGL globe ([cobe](https://cobe.vercel.app/)) showing location markers in the hero section.
- 💬 **Blog Comments** — Giscus-powered comments on every blog post, synced with GitHub Discussions.
- 📬 **Contact Form** — Formspree integration with rate limiting, honeypot spam protection, and submit feedback UX.
- 📊 **Privacy Analytics** — Umami Cloud tracking with no cookies, GDPR-friendly.
- ♿ **Accessible** — Semantic HTML5, WCAG-compliant contrast ratios, and ARIA labels.
- 🔍 **SEO-ready** — Dynamic meta tags, Open Graph images, structured data, sitemap, and canonical URLs.
- 📱 **Responsive** — Sidebar-driven layout optimized for desktop and mobile.
- 🔒 **Security Hardened** — CSP headers, input validation, referrer policy, X-Content-Type-Options.

## 📂 Project Structure

```bash
tuongna.github.io/
├── components/         # Shared UI components (AppSidebar, CobeGlobe, GiscusComments, etc.)
├── content/            # Blog posts in Markdown (vi/, en/, ko/) + _template.md
├── layouts/            # Page layouts
├── pages/              # Nuxt pages & routing ([...slug].vue for blog)
├── public/             # Static assets (favicons, og-images)
├── assets/             # Global CSS and Tailwind v4 configuration
├── i18n/               # Locale files (vi.json, en.json, ko.json)
└── README.md
```

## 🛠️ Local Development

```bash
# 1. Clone & Install
npm install

# 2. Run dev server
npm run dev

# 3. Format code
npm run format

# 4. Build for production (Static Generation)
npm run generate
```

## 📝 Blog

Managing the pipeline gap and workforce transitions in the AI era.

- **Topics:** Career guidance, Junior developer landscape, AI vs. Engineering.
- **Versions:** [VI](https://tuongna.github.io/blog/junior-dev-letter), [EN](https://tuongna.github.io/en/blog/junior-dev-letter), [KO](https://tuongna.github.io/ko/blog/junior-dev-letter).
- **New post?** Copy `content/_template.md` into `content/{vi,en,ko}/blog/` and follow the checklist inside.

## 📄 License

© 2026 Nguyen Anh Tuong. All rights reserved.
The source code and design of this website are proprietary. Blog content may be shared with proper attribution.
