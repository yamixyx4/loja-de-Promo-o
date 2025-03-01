import ProductGrid from "@/components/product-grid"
import { CubeButton } from "@/components/cube-button"
import Header from "@/components/header"
import Categories from "@/components/categories"
import Footer from "@/components/footer"
import BannerCarousel from "@/components/banner-carousel"
import { fetchDeals } from "@/lib/deals"

export default async function Home() {
  const deals = await fetchDeals()

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Categories />
      <main className="container mx-auto px-4 py-6">
        <BannerCarousel />
        <div className="mb-6 flex items-baseline justify-between">
          <h2 className="text-2xl font-bold">Ofertas em Tempo Real</h2>
          <p className="text-sm text-gray-500">Preços e disponibilidade podem variar</p>
        </div>
        <ProductGrid products={deals} />
      </main>
      <Footer />
      <CubeButton />
    </div>
  )
}

