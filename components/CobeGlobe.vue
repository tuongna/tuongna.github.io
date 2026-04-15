<template>
  <div
    ref="containerRef"
    class="cobe-container"
    aria-label="Interactive globe showing locations"
  >
    <canvas
      ref="canvasRef"
      class="cobe-canvas"
      aria-hidden="true"
    />
    <!-- Location label tooltip -->
    <Transition name="label-fade">
      <div
        v-if="activeLabel"
        class="globe-label"
      >
        <span class="globe-label__dot" />
        {{ activeLabel }}
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

const canvasRef = ref<HTMLCanvasElement | null>(null)
const containerRef = ref<HTMLDivElement | null>(null)
const activeLabel = ref<string | null>(null)
let globeInstance: ReturnType<typeof import('cobe').default> | null = null
let phi = 0
let theta = 0
let isPointerDown = false
let pointerStartX = 0
let pointerStartY = 0
let phiAtDown = 0
let thetaAtDown = 0
let currentSize = 0
let isHovering = false
let labelTimeout: ReturnType<typeof setTimeout> | null = null

// Locations
const LOCATIONS = [
  { lat: 10.82, lng: 106.63, label: 'Hồ Chí Minh', size: 0.1, home: true },
  { lat: 37.57, lng: 126.98, label: 'Seoul', size: 0.05 },
  { lat: 35.68, lng: 139.69, label: 'Tokyo', size: 0.05 },
  { lat: 1.35, lng: 103.82, label: 'Singapore', size: 0.05 },
]

const toRad = (deg: number) => (deg * Math.PI) / 180

// Initial orientation — center on HCM
const HCM = LOCATIONS[0]
const initialPhi = toRad(HCM.lng)
phi = initialPhi
theta = toRad(90 - HCM.lat) * 0.25

function onPointerDown(e: PointerEvent) {
  isPointerDown = true
  pointerStartX = e.clientX
  pointerStartY = e.clientY
  phiAtDown = phi
  thetaAtDown = theta
  containerRef.value?.setPointerCapture(e.pointerId)
}

function onPointerMove(e: PointerEvent) {
  if (!isPointerDown || !currentSize) return
  const dx = e.clientX - pointerStartX
  const dy = e.clientY - pointerStartY
  phi = phiAtDown + (dx / currentSize) * Math.PI * 1.2
  theta = Math.max(-Math.PI / 3, Math.min(Math.PI / 3, thetaAtDown - (dy / currentSize) * Math.PI))
}

function onPointerUp() {
  isPointerDown = false
}

function onPointerEnter() {
  isHovering = true
  // Cycle through labels on hover
  let i = 0
  const cycle = () => {
    if (!isHovering) return
    activeLabel.value = LOCATIONS[i % LOCATIONS.length].label
    i++
    labelTimeout = setTimeout(cycle, 1800)
  }
  cycle()
}

function onPointerLeave() {
  isHovering = false
  if (labelTimeout) clearTimeout(labelTimeout)
  activeLabel.value = null
}

onMounted(async () => {
  if (!canvasRef.value || !containerRef.value) return

  const createGlobe = (await import('cobe')).default

  const width = containerRef.value.clientWidth || 600
  const size = Math.min(width, 600)
  currentSize = size

  canvasRef.value.width = size * 2
  canvasRef.value.height = size * 2
  canvasRef.value.style.width = `${size}px`
  canvasRef.value.style.height = `${size}px`

  // Add interaction listeners on container
  containerRef.value.addEventListener('pointerdown', onPointerDown)
  containerRef.value.addEventListener('pointermove', onPointerMove)
  containerRef.value.addEventListener('pointerup', onPointerUp)
  containerRef.value.addEventListener('pointerleave', onPointerUp)
  containerRef.value.addEventListener('pointerenter', onPointerEnter)
  containerRef.value.addEventListener('pointerleave', onPointerLeave)

  globeInstance = createGlobe(canvasRef.value, {
    devicePixelRatio: 2,
    width: size * 2,
    height: size * 2,
    phi: initialPhi,
    theta,
    dark: 0.95,
    diffuse: 1.6,
    mapSamples: 20000,
    mapBrightness: 7,
    baseColor: [0.12, 0.12, 0.14],
    markerColor: [1, 0.42, 0.39], // Brand coral
    glowColor: [0.5, 0.22, 0.72], // Brand purple
    markers: LOCATIONS.map((loc) => ({
      location: [loc.lat, loc.lng] as [number, number],
      size: loc.home ? 0.1 : 0.055,
    })),
    onRender: (state: Record<string, number>) => {
      if (!isPointerDown) {
        // Auto-rotate, slower when hovering
        phi += isHovering ? 0.001 : 0.004
      }

      state.phi = phi
      state.theta = theta
    },
  } as Parameters<typeof createGlobe>[1])
})

onBeforeUnmount(() => {
  if (globeInstance) {
    globeInstance.destroy()
    globeInstance = null
  }
  if (containerRef.value) {
    containerRef.value.removeEventListener('pointerdown', onPointerDown)
    containerRef.value.removeEventListener('pointermove', onPointerMove)
    containerRef.value.removeEventListener('pointerup', onPointerUp)
    containerRef.value.removeEventListener('pointerenter', onPointerEnter)
    containerRef.value.removeEventListener('pointerleave', onPointerLeave)
  }
  if (labelTimeout) clearTimeout(labelTimeout)
})
</script>

<style scoped>
.cobe-container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: relative;
  cursor: grab;
  touch-action: none;
}

.cobe-container:active {
  cursor: grabbing;
}

.cobe-canvas {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

/* Location label */
.globe-label {
  position: absolute;
  bottom: 18px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  gap: 6px;
  background: rgba(20, 10, 30, 0.55);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 999px;
  padding: 6px 14px;
  font-size: 0.8125rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  color: #fff;
  text-transform: uppercase;
  pointer-events: none;
  white-space: nowrap;
}

.globe-label__dot {
  display: inline-block;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #ff6c63;
  box-shadow: 0 0 6px #ff6c63;
  animation: dot-pulse 1.4s ease-in-out infinite;
}

@keyframes dot-pulse {
  0%,
  100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.5;
    transform: scale(1.5);
  }
}

/* Label transition */
.label-fade-enter-active,
.label-fade-leave-active {
  transition:
    opacity 0.4s ease,
    transform 0.4s ease;
}
.label-fade-enter-from,
.label-fade-leave-to {
  opacity: 0;
  transform: translateX(-50%) translateY(6px);
}
</style>
