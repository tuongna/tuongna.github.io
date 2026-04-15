<template>
  <div>
    <SectionHero />
    <SectionAbout />
    <SectionSkills />
    <SectionBlog />
    <SectionContact />
  </div>
</template>

<script setup>
const { t } = useI18n()
const siteUrl = 'https://tuongna.github.io'

useSeoMeta({
  title: () => t('seo.title'),
  description: () => t('seo.description'),
  ogTitle: () => t('seo.title'),
  ogDescription: () => t('seo.ogDescription'),
  ogType: 'website',
  ogImage: `${siteUrl}/og-image.png`,
  ogImageWidth: 1200,
  ogImageHeight: 630,
  twitterCard: 'summary_large_image',
  twitterTitle: () => t('seo.title'),
  twitterDescription: () => t('seo.ogDescription'),
  twitterImage: `${siteUrl}/og-image.png`,
})

useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'ProfilePage',
        mainEntity: {
          '@type': 'Person',
          name: 'Nguyen Anh Tuong',
          alternateName: 'Nguyễn Anh Tường',
          jobTitle: 'Senior Frontend Engineer',
          url: siteUrl,
          sameAs: ['https://github.com/tuongna', 'https://linkedin.com/in/tuongna'],
          knowsAbout: ['Vue 3', 'React', 'TypeScript', 'Design System', 'AI Integration'],
          worksFor: { '@type': 'Organization', name: 'Smilegate Vietnam' },
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Ho Chi Minh City',
            addressCountry: 'VN',
          },
        },
      }),
    },
  ],
})
</script>
