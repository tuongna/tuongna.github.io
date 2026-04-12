<template>
  <div>
    <!-- Overlay backdrop -->
    <div class="sidebar-overlay hidden fixed inset-0 bg-black/50 z-[90] [&.active]:block" @click="closeSidebar"></div>
    <!-- Toggle button -->
    <button class="sidebar__toggle hidden max-[900px]:flex fixed top-[20px] left-[20px] z-[200] w-[44px] h-[44px] bg-base-black border-none rounded-[8px] cursor-pointer items-center justify-center text-white" @click="toggleSidebar" :aria-label="$t('nav.toggleMenu')">
      <svg class="w-[24px] h-[24px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
        <line x1="3" y1="6" x2="21" y2="6"/>
        <line x1="3" y1="12" x2="21" y2="12"/>
        <line x1="3" y1="18" x2="21" y2="18"/>
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
