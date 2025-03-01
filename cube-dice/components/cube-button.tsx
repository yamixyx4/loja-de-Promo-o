"use client"

import { Dice5 } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export function CubeButton() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Link
      href="/cubo"
      className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-red-600 text-white shadow-lg transition-all duration-300 hover:bg-red-700"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Dice5 className={`h-6 w-6 transition-transform duration-300 ${isHovered ? "rotate-[360deg]" : ""}`} />
      {isHovered && (
        <span className="absolute right-full mr-3 whitespace-nowrap rounded bg-gray-900 px-2 py-1 text-sm">
          Jogar Cubo 3D
        </span>
      )}
    </Link>
  )
}

