"use client"

import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import type { Product } from "@/lib/types"
import { useEffect, useState } from "react"

interface ProductGridProps {
  products: Product[]
}

export default function ProductGrid({ products }: ProductGridProps) {
  const [timeLeft, setTimeLeft] = useState<Record<number, string>>({})

  useEffect(() => {
    const timer = setInterval(() => {
      const now = Date.now()
      const newTimeLeft: Record<number, string> = {}

      products.forEach((product) => {
        const diff = (product.expiresAt || 0) - now
        if (diff > 0) {
          const hours = Math.floor(diff / (1000 * 60 * 60))
          const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
          newTimeLeft[product.id] = `${hours}h ${minutes}m`
        } else {
          newTimeLeft[product.id] = "Expirado"
        }
      })

      setTimeLeft(newTimeLeft)
    }, 1000)

    return () => clearInterval(timer)
  }, [products])

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products.map((product) => (
        <Card key={product.id} className="group overflow-hidden">
          <CardContent className="p-4">
            <div className="relative aspect-square overflow-hidden rounded-lg">
              <img
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              {product.discount && (
                <div className="absolute left-2 top-2 rounded-full bg-red-600 px-2 py-1 text-sm font-bold text-white">
                  -{product.discount}%
                </div>
              )}
              {timeLeft[product.id] && (
                <div className="absolute right-2 top-2 rounded-full bg-black/70 px-2 py-1 text-sm text-white">
                  {timeLeft[product.id]}
                </div>
              )}
            </div>

            <div className="mt-4">
              {product.store && (
                <div className="mb-2 flex items-center gap-2">
                  {product.store.logo && (
                    <img
                      src={product.store.logo || "/placeholder.svg"}
                      alt={product.store.name}
                      className="h-6 object-contain"
                    />
                  )}
                  <span className="text-sm text-gray-500">{product.store.name}</span>
                </div>
              )}

              <h3 className="text-sm font-medium text-gray-700 group-hover:text-red-600">{product.name}</h3>

              <div className="mt-2 flex items-baseline gap-2">
                <p className="text-lg font-bold text-gray-900">${product.price.toFixed(2)}</p>
                {product.originalPrice && (
                  <p className="text-sm text-gray-500 line-through">${product.originalPrice.toFixed(2)}</p>
                )}
              </div>

              <p className="text-sm text-gray-500">em {product.installments}</p>
            </div>
          </CardContent>

          <CardFooter className="p-4 pt-0">
            {product.store?.url ? (
              <a
                href={product.store.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded bg-red-600 px-4 py-2 font-medium text-white transition-colors hover:bg-red-700"
              >
                Ver na loja
                <ExternalLink className="h-4 w-4" />
              </a>
            ) : (
              <Button className="w-full bg-red-600 hover:bg-red-700">Adicionar ao carrinho</Button>
            )}
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

