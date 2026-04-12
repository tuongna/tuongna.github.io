# tuongna.github.io

Personal portfolio and blog of **Nguyen Anh Tuong** — Senior Frontend Engineer. This project was recently migrated from a static multi-file structure to a modern **Nuxt 4** framework for better maintainability and performance.

🌐 **Live:** [tuongna.github.io](https://tuongna.github.io/)

---

## 🚀 Tech Stack

- **Framework:** [Nuxt 4](https://nuxt.com/) (Beta/v4.4.2)
- **Content:** [@nuxt/content v3](https://content.nuxt.com/) (Markdown-based blog engine)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) (CSS-first engine)
- **Multilingual:** [@nuxtjs/i18n](https://i18n.nuxtjs.org/) (VI, EN, KO support)
- **Hosting:** GitHub Pages via GitHub Actions

## ✨ Key Features

- 🌍 **Trilingual** — Full support for Vietnamese, English, and Korean with localized routing.
- ♿ **Accessible** — Semantic HTML5, WCAG-compliant contrast ratios (#c0392b links), and ARIA labels.
- 🔍 **SEO-ready** — Dynamic Meta tags, Open Graph images, sitemap, and canonical URLs.
- 📱 **Responsive** — Sidebar-driven layout optimized for desktop and mobile.
- ⚡ **Performance** — Localized date handling and optimized asset loading.

## 📂 Project Structure

```bash
tuongna.github.io/
├── components/         # Shared UI components (AppSidebar, BaseButton, etc.)
├── content/            # Blog posts in Markdown (vi/, en/, ko/)
├── layouts/            # Page layouts
├── pages/              # Nuxt pages & routing ([...slug].vue for blog)
├── public/             # Static assets (favicons, og-images)
├── assets/             # Global CSS and Tailwind v4 configuration
└── README.md
```

## 🛠️ Local Development

```bash
# 1. Clone & Install
npm install

# 2. Run dev server
npm run dev

# 3. Build for production (Static Generation)
npm run generate
```

## 📝 Blog

Managing the pipeline gap and workforce transitions in the AI era.
- **Topics:** Career guidance, Junior developer landscape, AI vs. Engineering.
- **Versions:** [VI](https://tuongna.github.io/vi/blog/junior-dev-letter), [EN](https://tuongna.github.io/en/blog/junior-dev-letter), [KO](https://tuongna.github.io/ko/blog/junior-dev-letter).

## 📄 License

© 2026 Nguyen Anh Tuong. All rights reserved.
The source code and design of this website are proprietary. Blog content may be shared with proper attribution.
