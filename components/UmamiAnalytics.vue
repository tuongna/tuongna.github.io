<template>
  <!-- Umami analytics loads via useHead, no visible DOM needed -->
</template>

<script setup lang="ts">
const config = useRuntimeConfig()
const umamiHost = config.public.umamiHost as string
const umamiWebsiteId = config.public.umamiWebsiteId as string

// Only inject analytics in production and when configured
if (umamiWebsiteId && umamiHost) {
  useHead({
    script: [
      {
        src: umamiHost,
        async: true,
        defer: true,
        'data-website-id': umamiWebsiteId,
      },
    ],
  })
}
</script>
