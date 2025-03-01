"use client"

import { useRef, useState } from "react"
import Link from "next/link"
import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import CubeDice from "@/components/cube-dice"
import CubeStarBackground from "@/components/cube-star-background"

export default function CuboPage() {
  const [isAnimating, setIsAnimating] = useState(false)
  const [result, setResult] = useState<number | null>(null)
  const controlsRef = useRef<any>(null)
  const cubeRef = useRef<any>(null)

  const handleRandomSpin = () => {
    if (isAnimating || !cubeRef.current) return

    setIsAnimating(true)
    setResult(null)

    // Random number between 1 and 6
    const randomNumber = Math.floor(Math.random() * 6) + 1

    // Reset controls
    if (controlsRef.current) {
      controlsRef.current.reset()
    }

    // Animate the cube
    cubeRef.current.spin(randomNumber, () => {
      setResult(randomNumber)
      setIsAnimating(false)
    })
  }

  const handleReset = () => {
    if (isAnimating) return

    setIsAnimating(true)
    setResult(null)

    // Reset controls
    if (controlsRef.current) {
      controlsRef.current.reset()
    }

    setTimeout(() => {
      setIsAnimating(false)
    }, 1000)
  }

  return (
    <main className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-br from-rose-200/50 to-blue-300/80 overflow-hidden relative">
      <CubeStarBackground />

      <Link
        href="/"
        className="absolute top-5 left-5 bg-blue-600 text-white px-4 py-2 rounded font-bold z-10 hover:bg-blue-700 transition-colors"
      >
        ← Voltar
      </Link>

      <div className="w-[300px] h-[300px] relative z-10">
        <Canvas camera={{ position: [0, 0, 4], fov: 50 }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <CubeDice ref={cubeRef} />
          <OrbitControls ref={controlsRef} enablePan={false} enableZoom={false} enableRotate={!isAnimating} />
        </Canvas>
      </div>

      <div className="bg-white/80 p-4 rounded-lg shadow-md mt-8 z-10 flex flex-col items-center">
        <div className="mb-3 font-bold text-center">Clique e arraste para girar ou use os botões</div>

        <div className="flex gap-3 mb-3">
          <button
            onClick={handleRandomSpin}
            disabled={isAnimating}
            className="bg-green-600 text-white px-4 py-2 rounded min-w-[120px] hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Girar Aleatório
          </button>
        </div>

        <div className="flex gap-3">
          <button
            onClick={handleReset}
            disabled={isAnimating}
            className="bg-red-600 text-white px-4 py-2 rounded min-w-[120px] hover:bg-red-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Resetar Posição
          </button>
        </div>

        {result && <div className="mt-3 font-bold">Resultado: {result}</div>}
      </div>
    </main>
  )
}

