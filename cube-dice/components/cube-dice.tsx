"use client"

import { forwardRef, useImperativeHandle, useRef, useMemo } from "react"
import { useFrame } from "@react-three/fiber"
import * as THREE from "three"

// Positions for each face/number
const positions = [
  { rx: 0, ry: 0, rz: 0 }, // 1 (front)
  { rx: 0, ry: Math.PI, rz: 0 }, // 2 (back)
  { rx: 0, ry: Math.PI / 2, rz: 0 }, // 3 (right)
  { rx: 0, ry: -Math.PI / 2, rz: 0 }, // 4 (left)
  { rx: -Math.PI / 2, ry: 0, rz: 0 }, // 5 (top)
  { rx: Math.PI / 2, ry: 0, rz: 0 }, // 6 (bottom)
]

const CubeDice = forwardRef((props, ref) => {
  const cubeRef = useRef<THREE.Group>(null)
  const targetRotation = useRef({ x: 0, y: 0, z: 0 })
  const currentRotation = useRef({ x: 0, y: 0, z: 0 })
  const isAnimating = useRef(false)
  const callback = useRef<(() => void) | null>(null)

  // Create textures for each face
  const textures = useMemo(() => {
    return Array.from({ length: 6 }, (_, i) => {
      const canvas = document.createElement("canvas")
      canvas.width = 512
      canvas.height = 512
      const context = canvas.getContext("2d")

      if (context) {
        // Create gradient matching the original CSS
        const gradient = context.createLinearGradient(0, 0, 512, 512)
        gradient.addColorStop(0, "rgba(70, 130, 180, 0.9)") // Steel blue
        gradient.addColorStop(1, "rgba(255, 182, 193, 0.9)") // Light pink

        context.fillStyle = gradient
        context.fillRect(0, 0, 512, 512)

        // Add white border
        context.strokeStyle = "rgba(255, 255, 255, 0.5)"
        context.lineWidth = 10
        context.strokeRect(10, 10, 492, 492)

        // Add inner glow effect
        const innerGlow = context.createRadialGradient(256, 256, 100, 256, 256, 256)
        innerGlow.addColorStop(0, "rgba(255, 255, 255, 0.4)")
        innerGlow.addColorStop(1, "rgba(255, 255, 255, 0)")

        context.fillStyle = innerGlow
        context.fillRect(0, 0, 512, 512)

        // Add number
        context.font = "bold 200px Arial"
        context.textAlign = "center"
        context.textBaseline = "middle"
        context.fillStyle = "white"
        context.shadowColor = "rgba(0, 0, 0, 0.3)"
        context.shadowBlur = 4
        context.shadowOffsetX = 2
        context.shadowOffsetY = 2
        context.fillText((i + 1).toString(), 256, 256)
      }

      const texture = new THREE.CanvasTexture(canvas)
      texture.anisotropy = 16

      return texture
    })
  }, [])

  useImperativeHandle(ref, () => ({
    spin: (number: number, onComplete: () => void) => {
      if (!cubeRef.current || isAnimating.current) return

      isAnimating.current = true

      // First spin randomly
      const randomX = Math.random() * Math.PI * 4
      const randomY = Math.random() * Math.PI * 4
      const randomZ = Math.random() * Math.PI * 4

      // Set temporary random rotation
      targetRotation.current = {
        x: randomX,
        y: randomY,
        z: randomZ,
      }

      // After random rotation, set to the target face position
      setTimeout(() => {
        // Get the position for the target number (1-6)
        const targetPosition = positions[number - 1]

        // Set final target rotation
        targetRotation.current = {
          x: targetPosition.rx,
          y: targetPosition.ry,
          z: targetPosition.rz,
        }

        // Set callback to execute when animation completes
        callback.current = onComplete
      }, 1500)
    },
  }))

  useFrame(() => {
    if (!cubeRef.current || !isAnimating.current) return

    // Update current rotation towards target rotation with easing
    currentRotation.current.x += (targetRotation.current.x - currentRotation.current.x) * 0.05
    currentRotation.current.y += (targetRotation.current.y - currentRotation.current.y) * 0.05
    currentRotation.current.z += (targetRotation.current.z - currentRotation.current.z) * 0.05

    // Apply rotation
    cubeRef.current.rotation.x = currentRotation.current.x
    cubeRef.current.rotation.y = currentRotation.current.y
    cubeRef.current.rotation.z = currentRotation.current.z

    // Check if animation is complete
    const distanceX = Math.abs(targetRotation.current.x - currentRotation.current.x)
    const distanceY = Math.abs(targetRotation.current.y - currentRotation.current.y)
    const distanceZ = Math.abs(targetRotation.current.z - currentRotation.current.z)

    if (distanceX < 0.01 && distanceY < 0.01 && distanceZ < 0.01) {
      isAnimating.current = false

      // Execute callback if exists
      if (callback.current) {
        callback.current()
        callback.current = null
      }
    }
  })

  return (
    <group ref={cubeRef}>
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[1.8, 1.8, 1.8]} />
        <meshStandardMaterial transparent opacity={0} />

        {/* Face 1 - Front */}
        <mesh position={[0, 0, 0.9]}>
          <planeGeometry args={[1.8, 1.8]} />
          <meshStandardMaterial map={textures[0]} />
        </mesh>

        {/* Face 2 - Back */}
        <mesh position={[0, 0, -0.9]} rotation={[0, Math.PI, 0]}>
          <planeGeometry args={[1.8, 1.8]} />
          <meshStandardMaterial map={textures[1]} />
        </mesh>

        {/* Face 3 - Right */}
        <mesh position={[0.9, 0, 0]} rotation={[0, Math.PI / 2, 0]}>
          <planeGeometry args={[1.8, 1.8]} />
          <meshStandardMaterial map={textures[2]} />
        </mesh>

        {/* Face 4 - Left */}
        <mesh position={[-0.9, 0, 0]} rotation={[0, -Math.PI / 2, 0]}>
          <planeGeometry args={[1.8, 1.8]} />
          <meshStandardMaterial map={textures[3]} />
        </mesh>

        {/* Face 5 - Top */}
        <mesh position={[0, 0.9, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[1.8, 1.8]} />
          <meshStandardMaterial map={textures[4]} />
        </mesh>

        {/* Face 6 - Bottom */}
        <mesh position={[0, -0.9, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <planeGeometry args={[1.8, 1.8]} />
          <meshStandardMaterial map={textures[5]} />
        </mesh>
      </mesh>
    </group>
  )
})

CubeDice.displayName = "CubeDice"

export default CubeDice

