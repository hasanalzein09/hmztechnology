import { useEffect, useRef } from 'react'

interface Node {
    x: number
    y: number
    vx: number
    vy: number
    radius: number
    opacity: number
}

const NeuralNetwork = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const animationRef = useRef<number>()
    const nodesRef = useRef<Node[]>([])
    const mouseRef = useRef({ x: 0, y: 0 })

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext('2d')
        if (!ctx) return

        const resizeCanvas = () => {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
            initNodes()
        }

        const initNodes = () => {
            const nodeCount = window.innerWidth < 768 ? 40 : 80
            nodesRef.current = []

            for (let i = 0; i < nodeCount; i++) {
                nodesRef.current.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    vx: (Math.random() - 0.5) * 0.5,
                    vy: (Math.random() - 0.5) * 0.5,
                    radius: Math.random() * 2 + 1,
                    opacity: Math.random() * 0.5 + 0.2
                })
            }
        }

        const drawNode = (node: Node) => {
            if (!ctx) return

            // Glow effect
            const gradient = ctx.createRadialGradient(
                node.x, node.y, 0,
                node.x, node.y, node.radius * 4
            )
            gradient.addColorStop(0, `rgba(0, 212, 255, ${node.opacity})`)
            gradient.addColorStop(0.5, `rgba(124, 58, 237, ${node.opacity * 0.5})`)
            gradient.addColorStop(1, 'rgba(0, 212, 255, 0)')

            ctx.beginPath()
            ctx.arc(node.x, node.y, node.radius * 4, 0, Math.PI * 2)
            ctx.fillStyle = gradient
            ctx.fill()

            // Core
            ctx.beginPath()
            ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2)
            ctx.fillStyle = `rgba(255, 255, 255, ${node.opacity})`
            ctx.fill()
        }

        const drawConnections = () => {
            if (!ctx) return
            const nodes = nodesRef.current
            const maxDistance = 150

            for (let i = 0; i < nodes.length; i++) {
                for (let j = i + 1; j < nodes.length; j++) {
                    const dx = nodes[i].x - nodes[j].x
                    const dy = nodes[i].y - nodes[j].y
                    const distance = Math.sqrt(dx * dx + dy * dy)

                    if (distance < maxDistance) {
                        const opacity = (1 - distance / maxDistance) * 0.3
                        
                        const gradient = ctx.createLinearGradient(
                            nodes[i].x, nodes[i].y,
                            nodes[j].x, nodes[j].y
                        )
                        gradient.addColorStop(0, `rgba(0, 212, 255, ${opacity})`)
                        gradient.addColorStop(0.5, `rgba(124, 58, 237, ${opacity})`)
                        gradient.addColorStop(1, `rgba(0, 212, 255, ${opacity})`)

                        ctx.beginPath()
                        ctx.moveTo(nodes[i].x, nodes[i].y)
                        ctx.lineTo(nodes[j].x, nodes[j].y)
                        ctx.strokeStyle = gradient
                        ctx.lineWidth = 1
                        ctx.stroke()
                    }
                }
            }

            // Mouse interaction lines
            const mouse = mouseRef.current
            if (mouse.x && mouse.y) {
                for (const node of nodes) {
                    const dx = mouse.x - node.x
                    const dy = mouse.y - node.y
                    const distance = Math.sqrt(dx * dx + dy * dy)

                    if (distance < 200) {
                        const opacity = (1 - distance / 200) * 0.5
                        ctx.beginPath()
                        ctx.moveTo(node.x, node.y)
                        ctx.lineTo(mouse.x, mouse.y)
                        ctx.strokeStyle = `rgba(0, 212, 255, ${opacity})`
                        ctx.lineWidth = 1
                        ctx.stroke()
                    }
                }
            }
        }

        const updateNodes = () => {
            const nodes = nodesRef.current

            for (const node of nodes) {
                node.x += node.vx
                node.y += node.vy

                // Bounce off edges
                if (node.x < 0 || node.x > canvas.width) node.vx *= -1
                if (node.y < 0 || node.y > canvas.height) node.vy *= -1

                // Mouse repulsion
                const mouse = mouseRef.current
                if (mouse.x && mouse.y) {
                    const dx = node.x - mouse.x
                    const dy = node.y - mouse.y
                    const distance = Math.sqrt(dx * dx + dy * dy)

                    if (distance < 100) {
                        const force = (100 - distance) / 100
                        node.vx += (dx / distance) * force * 0.5
                        node.vy += (dy / distance) * force * 0.5
                    }
                }

                // Speed limit
                const speed = Math.sqrt(node.vx * node.vx + node.vy * node.vy)
                if (speed > 2) {
                    node.vx = (node.vx / speed) * 2
                    node.vy = (node.vy / speed) * 2
                }

                // Friction
                node.vx *= 0.99
                node.vy *= 0.99
            }
        }

        const animate = () => {
            if (!ctx || !canvas) return

            ctx.clearRect(0, 0, canvas.width, canvas.height)

            drawConnections()
            nodesRef.current.forEach(drawNode)
            updateNodes()

            animationRef.current = requestAnimationFrame(animate)
        }

        const handleMouseMove = (e: MouseEvent) => {
            mouseRef.current = { x: e.clientX, y: e.clientY }
        }

        const handleMouseLeave = () => {
            mouseRef.current = { x: 0, y: 0 }
        }

        window.addEventListener('resize', resizeCanvas)
        window.addEventListener('mousemove', handleMouseMove)
        window.addEventListener('mouseleave', handleMouseLeave)

        resizeCanvas()
        animate()

        return () => {
            window.removeEventListener('resize', resizeCanvas)
            window.removeEventListener('mousemove', handleMouseMove)
            window.removeEventListener('mouseleave', handleMouseLeave)
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current)
            }
        }
    }, [])

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{ opacity: 0.6 }}
        />
    )
}

export default NeuralNetwork
