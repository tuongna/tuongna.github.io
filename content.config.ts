import { defineCollection, defineContentConfig, z } from '@nuxt/content'

const blogSchema = z.object({
  title: z.string(),
  date: z.string(),
  description: z.string().optional(),
})

export default defineContentConfig({
  collections: {
    blog_vi: defineCollection({
      type: 'page',
      source: 'vi/blog/**',
      schema: blogSchema,
    }),
    blog_en: defineCollection({
      type: 'page',
      source: 'en/blog/**',
      schema: blogSchema,
    }),
    blog_ko: defineCollection({
      type: 'page',
      source: 'ko/blog/**',
      schema: blogSchema,
    }),
  },
})
