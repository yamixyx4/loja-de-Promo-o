"use client"

import { useState } from "react"
import Link from "next/link"
import { Search, ShoppingCart, User, MapPin, Menu } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function Header() {
  const [cartCount] = useState(0)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between gap-4">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <nav className="flex flex-col gap-4">
                <Link href="/" className="flex items-center gap-2 text-sm font-medium">
                  Ofertas do Dia
                </Link>
                <Link href="/" className="flex items-center gap-2 text-sm font-medium">
                  Celulares
                </Link>
                <Link href="/" className="flex items-center gap-2 text-sm font-medium">
                  Eletrodomésticos
                </Link>
                <Link href="/" className="flex items-center gap-2 text-sm font-medium">
                  Informática
                </Link>
              </nav>
            </SheetContent>
          </Sheet>

          <Link href="/" className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-red-600">Loja Online</h1>
          </Link>

          <div className="hidden flex-1 md:block">
            <form className="flex max-w-2xl items-center gap-2">
              <Input type="search" placeholder="Busque aqui seu produto" className="w-full" />
              <Button type="submit" variant="ghost" size="icon">
                <Search className="h-5 w-5" />
              </Button>
            </form>
          </div>

          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="hidden md:inline-flex">
              <MapPin className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              {cartCount > 0 && (
                <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-600 text-xs text-white">
                  {cartCount}
                </span>
              )}
            </Button>
          </div>
        </div>

        <div className="mb-4 md:hidden">
          <form className="flex items-center gap-2">
            <Input type="search" placeholder="Busque aqui seu produto" className="w-full" />
            <Button type="submit" variant="ghost" size="icon">
              <Search className="h-5 w-5" />
            </Button>
          </form>
        </div>
      </div>
    </header>
  )
}

