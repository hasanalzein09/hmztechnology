'use client';
import { useEffect, useRef, useState } from 'react'

/**
 * NeuralGalaxy3D — the hero's signature 3D scene: a rotating particle galaxy
 * sphere wrapped in a wireframe icosahedron, three orbital rings with
 * traveling light pulses, and mouse-parallax tilt.
 *
 * Performance contract (Core Web Vitals discipline):
 * - three.js loads via dynamic import() inside useEffect — never in the initial bundle.
 * - devicePixelRatio capped at 1.5. ~6k particles, additive blending, no lights.
 * - Pauses off-screen (IntersectionObserver) and when the tab is hidden.
 * - prefers-reduced-motion => static gradient fallback, zero WebGL.
 * - Full cleanup on unmount (rAF, listeners, geometries, materials, renderer).
 * - SSR-safe: renders only a wrapper div on the server.
 */
const NeuralGalaxy3D = () => {
    const containerRef = useRef<HTMLDivElement>(null)
    const [reducedMotion, setReducedMotion] = useState(false)

    useEffect(() => {
        const container = containerRef.current
        if (!container) return

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

            const renderer = new THREE.WebGLRenderer({
                antialias: true,
                alpha: true,
                powerPreference: 'high-performance'
            })
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5))
            renderer.setSize(width, height)
            container.appendChild(renderer.domElement)

            const scene = new THREE.Scene()
            const camera = new THREE.PerspectiveCamera(55, width / height, 0.1, 100)
            camera.position.z = 8

            const galaxy = new THREE.Group()
            scene.add(galaxy)

            const CYAN = new THREE.Color(0x00d4ff)
            const PURPLE = new THREE.Color(0x7c3aed)

            // --- Particle sphere (fibonacci distribution, dual-tone) ---
            const COUNT = 6000
            const positions = new Float32Array(COUNT * 3)
            const colors = new Float32Array(COUNT * 3)
            for (let i = 0; i < COUNT; i++) {
                const phi = Math.acos(1 - (2 * (i + 0.5)) / COUNT)
                const theta = Math.PI * (1 + Math.sqrt(5)) * i
                const r = 3 + Math.sin(i * 0.7) * 0.15 // slight organic ripple
                positions[i * 3] = r * Math.sin(phi) * Math.cos(theta)
                positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
                positions[i * 3 + 2] = r * Math.cos(phi)
                const c = CYAN.clone().lerp(PURPLE, (Math.sin(theta) + 1) / 2)
                colors[i * 3] = c.r
                colors[i * 3 + 1] = c.g
                colors[i * 3 + 2] = c.b
            }
            const particleGeo = new THREE.BufferGeometry()
            particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
            particleGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3))
            const particleMat = new THREE.PointsMaterial({
                size: 0.035,
                vertexColors: true,
                transparent: true,
                opacity: 0.85,
                blending: THREE.AdditiveBlending,
                depthWrite: false,
                sizeAttenuation: true
            })
            const particles = new THREE.Points(particleGeo, particleMat)
            galaxy.add(particles)

            // --- Inner wireframe icosahedron ---
            const wireGeo = new THREE.IcosahedronGeometry(1.6, 1)
            const wireMat = new THREE.MeshBasicMaterial({
                color: 0x00d4ff,
                wireframe: true,
                transparent: true,
                opacity: 0.18
            })
            const wire = new THREE.Mesh(wireGeo, wireMat)
            galaxy.add(wire)

            // --- Orbital rings with traveling pulses ---
            const rings: { ring: any; pulse: any; speed: number; offset: number }[] = []
            const ringDefs = [
                { radius: 4.2, tilt: 0.5, color: 0x00d4ff, speed: 0.35 },
                { radius: 4.8, tilt: -0.9, color: 0x7c3aed, speed: -0.25 },
                { radius: 5.4, tilt: 1.3, color: 0x22d3ee, speed: 0.18 }
            ]
            for (const def of ringDefs) {
                const ringGroup = new THREE.Group()
                const ringGeo = new THREE.TorusGeometry(def.radius, 0.008, 8, 128)
                const ringMat = new THREE.MeshBasicMaterial({
                    color: def.color,
                    transparent: true,
                    opacity: 0.35
                })
                const ring = new THREE.Mesh(ringGeo, ringMat)
                ring.rotation.x = Math.PI / 2 + def.tilt
                ringGroup.add(ring)

                // Traveling pulse on the ring
                const pulseGeo = new THREE.SphereGeometry(0.09, 12, 12)
                const pulseMat = new THREE.MeshBasicMaterial({
                    color: def.color,
                    transparent: true,
                    opacity: 0.95,
                    blending: THREE.AdditiveBlending
                })
                const pulse = new THREE.Mesh(pulseGeo, pulseMat)
                pulse.userData = { radius: def.radius, tilt: def.tilt }
                ringGroup.add(pulse)

                galaxy.add(ringGroup)
                rings.push({ ring: ringGroup, pulse, speed: def.speed, offset: Math.random() * Math.PI * 2 })
            }

            // --- Ambient drifting dust ---
            const DUST = 400
            const dustPos = new Float32Array(DUST * 3)
            for (let i = 0; i < DUST; i++) {
                dustPos[i * 3] = (Math.random() - 0.5) * 24
                dustPos[i * 3 + 1] = (Math.random() - 0.5) * 14
                dustPos[i * 3 + 2] = (Math.random() - 0.5) * 10
            }
            const dustGeo = new THREE.BufferGeometry()
            dustGeo.setAttribute('position', new THREE.BufferAttribute(dustPos, 3))
            const dustMat = new THREE.PointsMaterial({
                size: 0.05,
                color: 0x67e8f9,
                transparent: true,
                opacity: 0.35,
                blending: THREE.AdditiveBlending,
                depthWrite: false
            })
            const dust = new THREE.Points(dustGeo, dustMat)
            scene.add(dust)

            // --- Mouse parallax (lerped) ---
            let targetRX = 0, targetRY = 0
            const onMouseMove = (e: MouseEvent) => {
                targetRY = (e.clientX / window.innerWidth - 0.5) * 0.5
                targetRX = (e.clientY / window.innerHeight - 0.5) * 0.3
            }
            window.addEventListener('mousemove', onMouseMove, { passive: true })

            const onResize = () => {
                const w = container.clientWidth
                const h = container.clientHeight
                camera.aspect = w / h
                camera.updateProjectionMatrix()
                renderer.setSize(w, h)
            }
            window.addEventListener('resize', onResize)

            const clock = new THREE.Clock()
            const animate = () => {
                rafId = requestAnimationFrame(animate)
                if (!isVisible || !isTabVisible) return
                const t = clock.getElapsedTime()

                // Idle rotation + lerped mouse parallax
                galaxy.rotation.y += 0.0018
                galaxy.rotation.x += (targetRX - galaxy.rotation.x) * 0.03
                galaxy.rotation.z += (targetRY * 0.4 - galaxy.rotation.z) * 0.03

                // Wireframe counter-rotation + breathing
                wire.rotation.y -= 0.004
                wire.rotation.x += 0.002
                const s = 1 + Math.sin(t * 0.8) * 0.05
                wire.scale.set(s, s, s)

                // Ring pulses travel along their orbits
                for (const r of rings) {
                    const a = t * r.speed + r.offset
                    const { radius, tilt } = r.pulse.userData
                    r.pulse.position.set(
                        Math.cos(a) * radius,
                        Math.sin(a) * radius * Math.sin(-tilt),
                        Math.sin(a) * radius * Math.cos(-tilt)
                    )
                    r.pulse.material.opacity = 0.6 + Math.sin(t * 3 + r.offset) * 0.35
                }

                // Slow dust drift
                dust.rotation.y += 0.0004

                renderer.render(scene, camera)
            }
            animate()

            // Pause when off-screen
            observer = new IntersectionObserver(
                ([entry]) => { isVisible = entry.isIntersecting },
                { threshold: 0 }
            )
            observer.observe(container)
            const onVisibility = () => { isTabVisible = !document.hidden }
            document.addEventListener('visibilitychange', onVisibility)

            cleanupScene = () => {
                cancelAnimationFrame(rafId)
                window.removeEventListener('mousemove', onMouseMove)
                window.removeEventListener('resize', onResize)
                document.removeEventListener('visibilitychange', onVisibility)
                observer?.disconnect()
                particleGeo.dispose(); particleMat.dispose()
                wireGeo.dispose(); wireMat.dispose()
                dustGeo.dispose(); dustMat.dispose()
                for (const r of rings) {
                    r.ring.children.forEach((c: any) => {
                        c.geometry?.dispose(); c.material?.dispose()
                    })
                }
                renderer.dispose()
                renderer.domElement.remove()
            }
        }

        init()
        return () => {
            cancelled = true
            cleanupScene?.()
        }
    }, [])

    if (reducedMotion) {
        return (
            <div
                className="absolute inset-0 z-0"
                style={{
                    background:
                        'radial-gradient(ellipse at center, rgba(0,212,255,0.12) 0%, rgba(124,58,237,0.08) 40%, transparent 70%)'
                }}
            />
        )
    }

    return <div ref={containerRef} className="absolute inset-0 z-0" aria-hidden="true" />
}

export default NeuralGalaxy3D
