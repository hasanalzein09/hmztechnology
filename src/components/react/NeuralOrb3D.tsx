import { useEffect, useRef, useState } from 'react'

/**
 * NeuralOrb3D — a decorative 3D particle "neural orb" rendered with three.js.
 *
 * Performance contract (Core Web Vitals discipline):
 * - three.js is loaded via dynamic import() inside useEffect — never in the initial bundle.
 * - devicePixelRatio capped at 1.5.
 * - Rendering pauses when off-screen (IntersectionObserver) and when the tab is hidden.
 * - prefers-reduced-motion => renders a static gradient fallback, zero WebGL.
 * - Full cleanup on unmount: rAF cancelled, listeners removed, geometry/material/renderer disposed.
 * - Zero `window` access during render (SSR-safe). Renders only a wrapper div on the server.
 */
const NeuralOrb3D = () => {
    const containerRef = useRef<HTMLDivElement>(null)
    const [reducedMotion, setReducedMotion] = useState(false)

    useEffect(() => {
        const container = containerRef.current
        if (!container) return

        // Respect reduced motion: static gradient fallback, no WebGL at all.
        const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
        if (mediaQuery.matches) {
            setReducedMotion(true)
            return
        }

        let cancelled = false
        let rafId = 0
        let isVisible = true
        let isTabVisible = !document.hidden
        let cleanupScene: (() => void) | null = null
        let observer: IntersectionObserver | null = null

        const init = async () => {
            const THREE = await import('three')
            if (cancelled || !containerRef.current) return

            const width = container.clientWidth
            const height = container.clientHeight

            // --- Renderer ---
            const renderer = new THREE.WebGLRenderer({
                antialias: true,
                alpha: true,
                powerPreference: 'high-performance'
            })
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5))
            renderer.setSize(width, height)
            container.appendChild(renderer.domElement)

            // --- Scene / Camera ---
            const scene = new THREE.Scene()
            const camera = new THREE.PerspectiveCamera(55, width / height, 0.1, 100)
            camera.position.z = 7.5

            const orb = new THREE.Group()
            scene.add(orb)

            // --- Particles: fibonacci sphere ---
            const isSmall = width < 768
            const COUNT = isSmall ? 700 : 1400
            const RADIUS = 2.6
            const positions = new Float32Array(COUNT * 3)
            const colors = new Float32Array(COUNT * 3)
            const cyan = new THREE.Color('#00d4ff')
            const purple = new THREE.Color('#7c3aed')
            const pink = new THREE.Color('#ec4899')
            const golden = Math.PI * (3 - Math.sqrt(5))

            const tmpColor = new THREE.Color()
            for (let i = 0; i < COUNT; i++) {
                const y = 1 - (i / (COUNT - 1)) * 2
                const r = Math.sqrt(1 - y * y)
                const theta = golden * i
                const x = Math.cos(theta) * r
                const z = Math.sin(theta) * r
                // Slight organic jitter
                const jitter = 1 + (Math.random() - 0.5) * 0.06
                positions[i * 3] = x * RADIUS * jitter
                positions[i * 3 + 1] = y * RADIUS * jitter
                positions[i * 3 + 2] = z * RADIUS * jitter

                // Gradient cyan -> purple (with a pink touch near equator)
                const mixAmount = (y + 1) / 2
                tmpColor.copy(cyan).lerp(purple, mixAmount)
                if (Math.abs(y) < 0.25) tmpColor.lerp(pink, 0.25)
                colors[i * 3] = tmpColor.r
                colors[i * 3 + 1] = tmpColor.g
                colors[i * 3 + 2] = tmpColor.b
            }

            const pointsGeometry = new THREE.BufferGeometry()
            pointsGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
            pointsGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))
            const pointsMaterial = new THREE.PointsMaterial({
                size: 0.035,
                vertexColors: true,
                transparent: true,
                opacity: 0.9,
                blending: THREE.AdditiveBlending,
                depthWrite: false,
                sizeAttenuation: true
            })
            const points = new THREE.Points(pointsGeometry, pointsMaterial)
            orb.add(points)

            // --- Connections: link each point to nearby points (bounded O(n^2) at init) ---
            const maxDistSq = (RADIUS * 0.42) ** 2
            const linePositions: number[] = []
            const lineColors: number[] = []
            for (let i = 0; i < COUNT; i++) {
                let links = 0
                for (let j = i + 1; j < COUNT && links < 3; j++) {
                    const dx = positions[i * 3] - positions[j * 3]
                    const dy = positions[i * 3 + 1] - positions[j * 3 + 1]
                    const dz = positions[i * 3 + 2] - positions[j * 3 + 2]
                    const dSq = dx * dx + dy * dy + dz * dz
                    if (dSq < maxDistSq) {
                        linePositions.push(
                            positions[i * 3], positions[i * 3 + 1], positions[i * 3 + 2],
                            positions[j * 3], positions[j * 3 + 1], positions[j * 3 + 2]
                        )
                        lineColors.push(
                            colors[i * 3], colors[i * 3 + 1], colors[i * 3 + 2],
                            colors[j * 3], colors[j * 3 + 1], colors[j * 3 + 2]
                        )
                        links++
                    }
                }
            }
            const linesGeometry = new THREE.BufferGeometry()
            linesGeometry.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3))
            linesGeometry.setAttribute('color', new THREE.Float32BufferAttribute(lineColors, 3))
            const linesMaterial = new THREE.LineBasicMaterial({
                vertexColors: true,
                transparent: true,
                opacity: 0.22,
                blending: THREE.AdditiveBlending,
                depthWrite: false
            })
            const lines = new THREE.LineSegments(linesGeometry, linesMaterial)
            orb.add(lines)

            // --- Inner core glow sphere ---
            const coreGeometry = new THREE.SphereGeometry(RADIUS * 0.55, 32, 32)
            const coreMaterial = new THREE.MeshBasicMaterial({
                color: new THREE.Color('#7c3aed'),
                transparent: true,
                opacity: 0.05,
                blending: THREE.AdditiveBlending,
                depthWrite: false
            })
            const core = new THREE.Mesh(coreGeometry, coreMaterial)
            orb.add(core)

            // --- Mouse parallax (lerped) ---
            const targetRotation = { x: 0, y: 0 }
            const handleMouseMove = (e: MouseEvent) => {
                const nx = (e.clientX / window.innerWidth) * 2 - 1
                const ny = (e.clientY / window.innerHeight) * 2 - 1
                targetRotation.y = nx * 0.35
                targetRotation.x = ny * 0.25
            }

            // --- Resize ---
            const handleResize = () => {
                if (!containerRef.current) return
                const w = containerRef.current.clientWidth
                const h = containerRef.current.clientHeight
                camera.aspect = w / h
                camera.updateProjectionMatrix()
                renderer.setSize(w, h)
            }

            // --- Animation loop (pausable) ---
            const clock = new THREE.Clock()
            const animate = () => {
                rafId = requestAnimationFrame(animate)
                if (!isVisible || !isTabVisible) return

                const t = clock.getElapsedTime()
                orb.rotation.y += 0.0012
                // Mouse parallax with easing
                orb.rotation.x += (targetRotation.x - orb.rotation.x) * 0.03
                orb.rotation.y += (targetRotation.y - orb.rotation.y) * 0.02
                // Pulse lines + core
                linesMaterial.opacity = 0.14 + Math.sin(t * 1.4) * 0.09
                coreMaterial.opacity = 0.04 + Math.sin(t * 0.9) * 0.02
                pointsMaterial.size = 0.032 + Math.sin(t * 1.1) * 0.005

                renderer.render(scene, camera)
            }

            // --- Visibility management ---
            observer = new IntersectionObserver(
                ([entry]) => { isVisible = entry.isIntersecting },
                { threshold: 0 }
            )
            observer.observe(container)

            const handleVisibility = () => {
                isTabVisible = !document.hidden
                if (isTabVisible) clock.getDelta() // discard paused time
            }

            window.addEventListener('mousemove', handleMouseMove, { passive: true })
            window.addEventListener('resize', handleResize)
            document.addEventListener('visibilitychange', handleVisibility)

            animate()

            cleanupScene = () => {
                cancelAnimationFrame(rafId)
                window.removeEventListener('mousemove', handleMouseMove)
                window.removeEventListener('resize', handleResize)
                document.removeEventListener('visibilitychange', handleVisibility)
                pointsGeometry.dispose()
                pointsMaterial.dispose()
                linesGeometry.dispose()
                linesMaterial.dispose()
                coreGeometry.dispose()
                coreMaterial.dispose()
                renderer.dispose()
                if (renderer.domElement.parentNode) {
                    renderer.domElement.parentNode.removeChild(renderer.domElement)
                }
            }
        }

        init()

        return () => {
            cancelled = true
            if (observer) observer.disconnect()
            if (cleanupScene) cleanupScene()
        }
    }, [])

    if (reducedMotion) {
        // Static gradient fallback — no WebGL, no animation.
        return (
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background:
                        'radial-gradient(circle at 50% 45%, rgba(124, 58, 237, 0.18) 0%, rgba(0, 212, 255, 0.08) 35%, transparent 70%)'
                }}
            />
        )
    }

    return (
        <div
            ref={containerRef}
            aria-hidden="true"
            className="absolute inset-0 pointer-events-none opacity-80"
        />
    )
}

export default NeuralOrb3D
