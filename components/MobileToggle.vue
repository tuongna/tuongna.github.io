<template>
  <div>
    <!-- Overlay backdrop -->
    <div
      class="sidebar-overlay fixed inset-0 z-[90] hidden bg-black/50 [&.active]:block"
      @click="closeSidebar"
    ></div>
    <!-- Toggle button -->
    <button
      class="sidebar__toggle bg-base-black fixed top-[20px] left-[20px] z-[200] hidden h-[44px] w-[44px] cursor-pointer items-center justify-center rounded-[8px] border-none text-white max-[900px]:flex"
      @click="toggleSidebar"
      :aria-label="$t('nav.toggleMenu')"
    >
      <svg
        class="h-[24px] w-[24px]"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        aria-hidden="true"
      >
        <line
          x1="3"
          y1="6"
          x2="21"
          y2="6"
        />
        <line
          x1="3"
          y1="12"
          x2="21"
          y2="12"
        />
        <line
          x1="3"
          y1="18"
          x2="21"
          y2="18"
        />
      </svg>
    </button>
  </div>
</template>

<script setup>
function toggleSidebar() {
  document.getElementById('sidebar')?.classList.toggle('open')
  document.querySelector('.sidebar-overlay')?.classList.toggle('active')
}

function closeSidebar() {
  document.getElementById('sidebar')?.classList.remove('open')
  document.querySelector('.sidebar-overlay')?.classList.remove('active')
}
</script>
