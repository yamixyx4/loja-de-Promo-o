import { notFound } from "next/navigation"
import ProductGrid from "@/components/product-grid"
import Header from "@/components/header"
import Categories from "@/components/categories"
import Footer from "@/components/footer"
import { CubeButton } from "@/components/cube-button"
import { categoryData } from "@/lib/data"
import { fetchDeals } from "@/lib/deals"

export default async function CategoryPage({
  params: { category },
}: {
  params: { category: string }
}) {
  const categoryInfo = categoryData[category]

  if (!categoryInfo) {
    notFound()
  }

  const allDeals = await fetchDeals()
  const filteredProducts = allDeals.filter((product) => product.category === category)

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Categories />
      <main className="container mx-auto px-4 py-6">
        <div className="mb-8 rounded-lg bg-white p-6 shadow-sm">
          <div className="mb-4 flex items-center gap-4">
            <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-lg">
              <img
                src={categoryInfo.icon || "/placeholder.svg"}
                alt={categoryInfo.name}
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">{categoryInfo.name}</h1>
              <p className="mt-1 text-gray-600">{categoryInfo.description}</p>
            </div>
          </div>
        </div>
        <ProductGrid products={filteredProducts} />
      </main>
      <Footer />
      <CubeButton />
    </div>
  )
}

