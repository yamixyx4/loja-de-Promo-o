"use client"

import { useEffect, useRef } from "react"

export default function StarBackground() {
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

      // Random position
      const left = Math.random() * 100

      // Random duration between 10s and 20s
      const duration = 10 + Math.random() * 10

      // Random delay
      const delay = Math.random() * 10

      star.style.left = `${left}%`
      star.style.width = "2px"
      star.style.height = "2px"
      star.style.animation = `starFall ${duration}s linear ${delay}s infinite`

      container.appendChild(star)
    }
  }, [])

  return <div ref={containerRef} className="absolute inset-0 overflow-hidden z-0"></div>
}

