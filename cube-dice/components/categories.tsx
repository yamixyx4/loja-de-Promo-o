import Link from "next/link"
import { categoryData } from "@/lib/data"

export default function Categories() {
  return (
    <nav className="border-b bg-white">
      <div className="container mx-auto hidden gap-6 px-4 py-3 md:flex">
        {Object.entries(categoryData).map(([slug, category]) => (
          <Link key={slug} href={`/${slug}`} className="text-sm font-medium text-gray-600 hover:text-red-600">
            {category.name}
          </Link>
        ))}
      </div>
    </nav>
  )
}

