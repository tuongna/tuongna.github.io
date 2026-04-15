<template>
  <section
    class="relative px-6 py-24 lg:px-28"
    id="skills"
  >
    <p class="mb-lg fade-in text-lg leading-snug font-semibold">{{ $t('skills.label') }}</p>
    <h2
      class="mb-4xl fade-in text-[clamp(2rem,4vw,3rem)] leading-tight font-bold uppercase delay-1"
    >
      {{ $t('skills.title') }}
    </h2>

    <div class="flex flex-col">
      <div
        v-for="(item, i) in skills"
        :key="i"
        class="gap-lg py-2xl border-muted-20 hover:pl-lg group fade-in flex cursor-default flex-col items-start border-b transition-all delay-2 duration-400 lg:flex-row lg:items-center lg:justify-between"
      >
        <span
          class="text-[clamp(1.5rem,3vw,2rem)] leading-snug font-bold uppercase lg:min-w-[280px]"
          >{{ item.name }}</span
        >
        <span class="text-muted-80 flex-1 text-base leading-relaxed lg:max-w-136.25">
          <span
            class="text-base-black after:text-muted-80 font-medium after:font-normal after:content-['_\—_']"
            >{{ item.tech }}</span
          >
          <span>{{ item.desc }}</span>
        </span>
        <span
          class="border-muted-20 group-hover:bg-brand-orange hidden h-10 w-10 items-center justify-center rounded-full border transition-colors duration-400 group-hover:border-transparent group-hover:text-white lg:flex"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            class="h-4 w-4"
          >
            <line
              x1="12"
              y1="5"
              x2="12"
              y2="19"
            />
            <line
              x1="5"
              y1="12"
              x2="19"
              y2="12"
            />
          </svg>
        </span>
      </div>
    </div>
  </section>
</template>

<script setup>
const { tm, rt } = useI18n()
const skills = computed(() => {
  const items = tm('skills.items') || []
  return items.map((item) => ({
    name: rt(item.name),
    tech: rt(item.tech),
    desc: rt(item.desc),
  }))
})
</script>
