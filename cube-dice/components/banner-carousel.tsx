"use client"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

const banners = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1607082349566-187342175e2f?w=1600&h=400&fit=crop&crop=bottom",
    title: "Ofertas Relâmpago",
    subtitle: "Até 70% de desconto!",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=1600&h=400&fit=crop&crop=bottom",
    title: "Tech Deals",
    subtitle: "As melhores ofertas em tecnologia",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=1600&h=400&fit=crop&crop=bottom",
    title: "Super Descontos",
    subtitle: "Produtos com mais de 50% OFF",
  },
]

export default function BannerCarousel() {
  return (
    <Carousel className="mb-8 w-full">
      <CarouselContent>
        {banners.map((banner) => (
          <CarouselItem key={banner.id}>
            <div className="relative aspect-[21/9] w-full overflow-hidden rounded-lg">
              <img src={banner.image || "/placeholder.svg"} alt={banner.title} className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-3xl font-bold">{banner.title}</h3>
                <p className="mt-2 text-xl">{banner.subtitle}</p>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}

