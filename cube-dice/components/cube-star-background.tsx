"use client"

import { useEffect, useRef } from "react"

export default function CubeStarBackground() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const container = containerRef.current

    // Clear any existing stars
    container.innerHTML = ""

    // Create 100 stars
    for (let i = 0; i < 100; i++) {
      const star = document.createElement("div")
      star.classList.add("absolute", "rounded-full", "bg-white")

      // Random size
      const size = Math.random() * 3 + 1

      // Random position
      const y = Math.random() * 100

      // Random duration between 3s and 11s
      const duration = Math.random() * 8 + 3

      // Random delay
      const delay = Math.random() * 5

      star.style.width = `${size}px`
      star.style.height = `${size}px`
      star.style.top = `${y}%`
      star.style.right = `-5px`
      star.style.opacity = `${Math.random() * 0.5 + 0.5}`
      star.style.animation = `starMovement ${duration}s linear ${delay}s infinite`

      // Small variation in trajectory
      const yVariation = Math.random() * 10 - 5
      star.style.transform = `translateY(${yVariation}px)`

      container.appendChild(star)
    }
  }, [])

  return <div ref={containerRef} className="fixed inset-0 pointer-events-none z-0"></div>
}

