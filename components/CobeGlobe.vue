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

// Locations with display labels  (as const → tuple types required by Cobe)
const HCM_LAT = 10.82
const HCM_LNG = 106.63

const MARKERS = [
  { location: [HCM_LAT, HCM_LNG] as [number, number], size: 0.12 }, // HCM — home, bigger
  { location: [37.57, 126.98] as [number, number], size: 0.06 }, // Seoul
  { location: [35.68, 139.69] as [number, number], size: 0.06 }, // Tokyo
  { location: [1.35, 103.82] as [number, number], size: 0.06 }, // Singapore
]

const LOCATION_LABELS = ['Hồ Chí Minh', 'Seoul', 'Tokyo', 'Singapore']

// Arcs connecting HCM to each city
const ARCS = [
  { from: [HCM_LAT, HCM_LNG] as [number, number], to: [37.57, 126.98] as [number, number] },
  { from: [HCM_LAT, HCM_LNG] as [number, number], to: [35.68, 139.69] as [number, number] },
  { from: [HCM_LAT, HCM_LNG] as [number, number], to: [1.35, 103.82] as [number, number] },
]

const toRad = (deg: number) => (deg * Math.PI) / 180

// Initial orientation: centre Asia-Pacific in view
phi = toRad(HCM_LNG)
theta = toRad(90 - HCM_LAT) * 0.2

// ── Pointer interaction ──────────────────────────────────────────────────────

function onPointerDown(e: PointerEvent) {
  isPointerDown = true
  pointerStartX = e.clientX
  pointerStartY = e.clientY
  phiAtDown = phi
  thetaAtDown = theta
  ;(e.currentTarget as HTMLElement).setPointerCapture(e.pointerId)
}

function onPointerMove(e: PointerEvent) {
  if (!isPointerDown || !currentSize) return
  const dx = e.clientX - pointerStartX
  const dy = e.clientY - pointerStartY
  phi = phiAtDown + (dx / currentSize) * Math.PI * 1.5
  theta = Math.max(-Math.PI / 3, Math.min(Math.PI / 3, thetaAtDown - (dy / currentSize) * Math.PI))
}

function onPointerUp() {
  isPointerDown = false
}

function onPointerEnter() {
  isHovering = true
  let i = 0
  const cycle = () => {
    if (!isHovering) return
    activeLabel.value = LOCATION_LABELS[i % LOCATION_LABELS.length] ?? null
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

// ── Lifecycle ────────────────────────────────────────────────────────────────

onMounted(async () => {
  const canvas = canvasRef.value
  const container = containerRef.value
  if (!canvas || !container) return

  // Force opaque WebGL context: Cobe's canvas has alpha:true by default,
  // which causes it to composite onto white page background making
  // land dots invisible. With alpha:false, canvas gets its own opaque background.
  const ctx = canvas.getContext('webgl', { alpha: false, powerPreference: 'high-performance' })
  if (!ctx) {
    canvas.getContext('webgl2', { alpha: false, powerPreference: 'high-performance' })
  }

  const createGlobe = (await import('cobe')).default

  const width = container.clientWidth || 600
  const size = Math.min(width, 600)
  currentSize = size

  canvas.width = size * 2
  canvas.height = size * 2
  canvas.style.width = `${size}px`
  canvas.style.height = `${size}px`

  container.addEventListener('pointerdown', onPointerDown)
  container.addEventListener('pointermove', onPointerMove)
  container.addEventListener('pointerup', onPointerUp)
  container.addEventListener('pointercancel', onPointerUp)
  container.addEventListener('pointerenter', onPointerEnter)
  container.addEventListener('pointerleave', onPointerLeave)

  globeInstance = createGlobe(canvas, {
    devicePixelRatio: 2,
    width: size * 2,
    height: size * 2,
    phi,
    theta,
    context: { alpha: false, powerPreference: 'high-performance' } as WebGLContextAttributes,

    // alpha:false = opaque canvas. dark=1 = dark ocean, land dots bright.
    // baseColor = land dot color. With mapBrightness:6, land = bright gray/white dots.
    dark: 1,
    diffuse: 1.2,
    mapSamples: 16000,
    mapBrightness: 6,
    baseColor: [0.4, 0.35, 0.5], // Purple-tinted gray land dots
    markerColor: [1, 0.42, 0.39], // Brand coral #FF6C63
    glowColor: [0.55, 0.22, 0.78], // Brand purple glow
    arcColor: [1, 0.7, 0.42], // Warm amber arcs
    arcWidth: 1.5,
    arcHeight: 0.4,

    markers: MARKERS,
    arcs: ARCS,

    onRender: (state: Record<string, number>) => {
      if (!isPointerDown) {
        phi += isHovering ? 0.001 : 0.004
      }
      state.phi = phi
      state.theta = theta
    },
  } as Parameters<typeof createGlobe>[1])
})

onBeforeUnmount(() => {
  globeInstance?.destroy()
  globeInstance = null

  const container = containerRef.value
  if (container) {
    container.removeEventListener('pointerdown', onPointerDown)
    container.removeEventListener('pointermove', onPointerMove)
    container.removeEventListener('pointerup', onPointerUp)
    container.removeEventListener('pointercancel', onPointerUp)
    container.removeEventListener('pointerenter', onPointerEnter)
    container.removeEventListener('pointerleave', onPointerLeave)
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
  user-select: none;
}

.cobe-container:active {
  cursor: grabbing;
}

.cobe-canvas {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

/* ── Location label ── */
.globe-label {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  gap: 7px;
  background: rgba(12, 4, 20, 0.65);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 999px;
  padding: 6px 16px 6px 12px;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  color: #ffffffd0;
  text-transform: uppercase;
  pointer-events: none;
  white-space: nowrap;
}

.globe-label__dot {
  flex-shrink: 0;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #ff6c63;
  box-shadow:
    0 0 0 2px rgba(255, 108, 99, 0.25),
    0 0 8px #ff6c63;
  animation: dot-pulse 1.2s ease-in-out infinite;
}

@keyframes dot-pulse {
  0%,
  100% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.6);
    opacity: 0.55;
  }
}

/* Label transition */
.label-fade-enter-active,
.label-fade-leave-active {
  transition:
    opacity 0.35s ease,
    transform 0.35s ease;
}
.label-fade-enter-from,
.label-fade-leave-to {
  opacity: 0;
  transform: translateX(-50%) translateY(8px);
}
</style>
