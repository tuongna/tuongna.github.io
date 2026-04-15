<template>
  <div
    ref="containerRef"
    class="cobe-container"
  >
    <canvas
      ref="canvasRef"
      class="cobe-canvas"
      aria-hidden="true"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

const canvasRef = ref<HTMLCanvasElement | null>(null)
const containerRef = ref<HTMLDivElement | null>(null)
let globeInstance: ReturnType<typeof import('cobe').default> | null = null
let animationId: number | null = null
let phi = 0

// Ho Chi Minh City coordinates
const HCM_LAT = 10.82
const HCM_LNG = 106.63

// Convert lat/lng to radians for initial globe orientation
const initialPhi = (HCM_LNG * Math.PI) / 180
const initialTheta = ((90 - HCM_LAT) * Math.PI) / 180 - Math.PI / 2

onMounted(async () => {
  if (!canvasRef.value) return

  const createGlobe = (await import('cobe')).default

  const width = containerRef.value?.clientWidth || 600
  const size = Math.min(width, 600)

  canvasRef.value.width = size * 2
  canvasRef.value.height = size * 2
  canvasRef.value.style.width = `${size}px`
  canvasRef.value.style.height = `${size}px`

  globeInstance = createGlobe(canvasRef.value, {
    devicePixelRatio: 2,
    width: size * 2,
    height: size * 2,
    phi: initialPhi,
    theta: initialTheta * 0.3,
    dark: 0.95,
    diffuse: 1.4,
    mapSamples: 16000,
    mapBrightness: 6,
    baseColor: [0.15, 0.15, 0.15],
    markerColor: [1, 0.42, 0.39], // Brand coral #FF6C63
    glowColor: [0.45, 0.2, 0.65], // Brand purple tint
    markers: [
      { location: [HCM_LAT, HCM_LNG], size: 0.08 }, // Ho Chi Minh City
      { location: [37.57, 126.98], size: 0.04 }, // Seoul
      { location: [35.68, 139.69], size: 0.04 }, // Tokyo
      { location: [1.35, 103.82], size: 0.04 }, // Singapore
    ],
    onRender: (state: Record<string, number>) => {
      state.phi = phi
      phi += 0.003 // Slow rotation
    },
  } as Parameters<typeof createGlobe>[1])
})

onBeforeUnmount(() => {
  if (globeInstance) {
    globeInstance.destroy()
    globeInstance = null
  }
  if (animationId) {
    cancelAnimationFrame(animationId)
    animationId = null
  }
})
</script>

<style scoped>
.cobe-container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}

.cobe-canvas {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}
</style>
