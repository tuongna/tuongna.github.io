<script setup lang="ts">
import { computed } from 'vue'
import { cva } from 'class-variance-authority'
import type { VariantProps } from 'class-variance-authority'
import { NuxtLink } from '#components'
import { cn } from '~/utils/cn'

const buttonVariants = cva(
  'inline-flex justify-center items-center gap-xs px-[40px] h-[56px] font-body text-[18px] font-medium leading-[1.33] no-underline border-none cursor-pointer transition-all duration-400 ease-[cubic-bezier(0.4,0,0.2,1)] hover:-translate-y-[2px] hover:shadow-[0_8px_24px_rgba(0,0,0,0.15)]',
  {
    variants: {
      variant: {
        dark: 'bg-base-black text-white',
        white: 'bg-white text-base-black',
        gradient: 'bg-gradient-brand text-white',
      },
    },
    defaultVariants: {
      variant: 'dark',
    },
  },
)

type ButtonVariants = VariantProps<typeof buttonVariants>

interface Props {
  variant?: ButtonVariants['variant']
  as?: string
  href?: string
  to?: string | object
  class?: any
}

const props = withDefaults(defineProps<Props>(), {
  as: 'button',
  variant: 'dark',
})

const resolvedComponent = computed(() => {
  if (props.to) return NuxtLink
  if (props.href) return 'a'
  return props.as
})
</script>

<template>
  <component
    :is="resolvedComponent"
    :href="href"
    :to="to"
    :class="cn(buttonVariants({ variant }), props.class)"
  >
    <slot />
  </component>
</template>
