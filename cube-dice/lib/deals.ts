import type { Product } from "./types"

export async function fetchDeals(): Promise<Product[]> {
  // In a real app, this would fetch from multiple APIs
  return getMockDeals()
}

function getMockDeals(): Product[] {
  return [
    // Ofertas Relâmpago
    {
      id: 1,
      name: "Sony WH-1000XM4 Wireless Headphones",
      price: 248.0,
      originalPrice: 349.99,
      installments: "10x $24.80",
      image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=800&auto=format&fit=crop&q=60",
      category: "ofertas-relampago",
      store: {
        name: "Amazon",
        logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
        url: "https://www.amazon.com",
      },
      discount: 29,
      expiresAt: Date.now() + 1000 * 60 * 60 * 2, // 2 hours
    },
    {
      id: 2,
      name: "Samsung Galaxy S23 Ultra 256GB",
      price: 949.99,
      originalPrice: 1199.99,
      installments: "12x $79.16",
      image: "https://images.unsplash.com/photo-1678911820864-e5c8d8722f22?w=800&auto=format&fit=crop&q=60",
      category: "ofertas-relampago",
      store: {
        name: "Best Buy",
        logo: "https://upload.wikimedia.org/wikipedia/commons/f/f5/Best_Buy_Logo.svg",
        url: "https://www.bestbuy.com",
      },
      discount: 21,
      expiresAt: Date.now() + 1000 * 60 * 60 * 3, // 3 hours
    },

    // Tech Deals
    {
      id: 3,
      name: "MacBook Air M2 8GB 256GB",
      price: 999.99,
      originalPrice: 1199.99,
      installments: "12x $83.33",
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&auto=format&fit=crop&q=60",
      category: "tecnologia",
      store: {
        name: "Apple",
        logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
        url: "https://www.apple.com",
      },
      discount: 17,
      expiresAt: Date.now() + 1000 * 60 * 60 * 24, // 24 hours
    },
    {
      id: 4,
      name: "Dell XPS 15 32GB 1TB",
      price: 1799.99,
      originalPrice: 2299.99,
      installments: "12x $150.00",
      image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=800&auto=format&fit=crop&q=60",
      category: "tecnologia",
      store: {
        name: "Dell",
        logo: "https://upload.wikimedia.org/wikipedia/commons/1/18/Dell_logo_2016.svg",
        url: "https://www.dell.com",
      },
      discount: 22,
      expiresAt: Date.now() + 1000 * 60 * 60 * 48, // 48 hours
    },

    // Casa & Cozinha
    {
      id: 5,
      name: "Ninja Foodi 9-in-1 Deluxe XL",
      price: 199.99,
      originalPrice: 299.99,
      installments: "10x $19.99",
      image: "https://images.unsplash.com/photo-1544233726-9f1d2b27be8b?w=800&auto=format&fit=crop&q=60",
      category: "casa-e-cozinha",
      store: {
        name: "Walmart",
        logo: "https://upload.wikimedia.org/wikipedia/commons/c/ca/Walmart_logo.svg",
        url: "https://www.walmart.com",
      },
      discount: 33,
      expiresAt: Date.now() + 1000 * 60 * 60 * 72, // 72 hours
    },
    {
      id: 6,
      name: "KitchenAid Stand Mixer",
      price: 279.99,
      originalPrice: 449.99,
      installments: "10x $27.99",
      image: "https://images.unsplash.com/photo-1594385208974-2e75f8d7bb48?w=800&auto=format&fit=crop&q=60",
      category: "casa-e-cozinha",
      store: {
        name: "Target",
        logo: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Target_logo.svg",
        url: "https://www.target.com",
      },
      discount: 38,
      expiresAt: Date.now() + 1000 * 60 * 60 * 48,
    },

    // Moda
    {
      id: 7,
      name: "Nike Air Max 2024",
      price: 129.99,
      originalPrice: 189.99,
      installments: "6x $21.66",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&auto=format&fit=crop&q=60",
      category: "moda",
      store: {
        name: "Nike",
        logo: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Nike_Logo.svg",
        url: "https://www.nike.com",
      },
      discount: 32,
      expiresAt: Date.now() + 1000 * 60 * 60 * 24,
    },
    {
      id: 8,
      name: "Adidas Ultraboost 24",
      price: 119.99,
      originalPrice: 179.99,
      installments: "6x $20.00",
      image: "https://images.unsplash.com/photo-1615897570286-da936a5a5943?w=800&auto=format&fit=crop&q=60",
      category: "moda",
      store: {
        name: "Adidas",
        logo: "https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg",
        url: "https://www.adidas.com",
      },
      discount: 33,
      expiresAt: Date.now() + 1000 * 60 * 60 * 36,
    },

    // Games
    {
      id: 9,
      name: "PlayStation 5 + 2 Controllers",
      price: 449.99,
      originalPrice: 559.99,
      installments: "12x $37.50",
      image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=800&auto=format&fit=crop&q=60",
      category: "games",
      store: {
        name: "PlayStation",
        logo: "https://upload.wikimedia.org/wikipedia/commons/0/00/PlayStation_logo.svg",
        url: "https://www.playstation.com",
      },
      discount: 20,
      expiresAt: Date.now() + 1000 * 60 * 60 * 48,
    },
    {
      id: 10,
      name: "Xbox Series X + Game Pass",
      price: 449.99,
      originalPrice: 559.99,
      installments: "12x $37.50",
      image: "https://images.unsplash.com/photo-1621259182978-fbf93132d53d?w=800&auto=format&fit=crop&q=60",
      category: "games",
      store: {
        name: "Microsoft",
        logo: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg",
        url: "https://www.xbox.com",
      },
      discount: 20,
      expiresAt: Date.now() + 1000 * 60 * 60 * 72,
    },

    // Super Descontos (>50% OFF)
    {
      id: 11,
      name: "Smartwatch Pro 5",
      price: 149.99,
      originalPrice: 399.99,
      installments: "10x $14.99",
      image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=800&auto=format&fit=crop&q=60",
      category: "super-descontos",
      store: {
        name: "AliExpress",
        logo: "https://upload.wikimedia.org/wikipedia/commons/9/92/AliExpress_logo.svg",
        url: "https://www.aliexpress.com",
      },
      discount: 63,
      expiresAt: Date.now() + 1000 * 60 * 60 * 24,
    },
    {
      id: 12,
      name: "4K Drone com Câmera",
      price: 299.99,
      originalPrice: 699.99,
      installments: "12x $25.00",
      image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=800&auto=format&fit=crop&q=60",
      category: "super-descontos",
      store: {
        name: "Gearbest",
        logo: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Gearbest_logo.svg",
        url: "https://www.gearbest.com",
      },
      discount: 57,
      expiresAt: Date.now() + 1000 * 60 * 60 * 48,
    },

    // Ofertas do Dia
    {
      id: 13,
      name: "Robot Vacuum 4000",
      price: 199.99,
      originalPrice: 399.99,
      installments: "10x $19.99",
      image: "https://images.unsplash.com/photo-1589006833108-9e84b0a785e5?w=800&auto=format&fit=crop&q=60",
      category: "ofertas-do-dia",
      store: {
        name: "Dyson",
        logo: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Dyson_logo.svg",
        url: "https://www.dyson.com",
      },
      discount: 50,
      expiresAt: Date.now() + 1000 * 60 * 60 * 24,
    },
    {
      id: 14,
      name: "Smart Home Security Kit",
      price: 249.99,
      originalPrice: 499.99,
      installments: "12x $20.83",
      image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&auto=format&fit=crop&q=60",
      category: "ofertas-do-dia",
      store: {
        name: "Ring",
        logo: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Ring_logo.svg",
        url: "https://www.ring.com",
      },
      discount: 50,
      expiresAt: Date.now() + 1000 * 60 * 60 * 24,
    },
    {
      id: 15,
      name: '4K HDR Monitor 32"',
      price: 399.99,
      originalPrice: 699.99,
      installments: "12x $33.33",
      image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=800&auto=format&fit=crop&q=60",
      category: "ofertas-do-dia",
      store: {
        name: "LG",
        logo: "https://upload.wikimedia.org/wikipedia/commons/2/20/LG_symbol.svg",
        url: "https://www.lg.com",
      },
      discount: 43,
      expiresAt: Date.now() + 1000 * 60 * 60 * 24,
    },

    // Mais Ofertas Relâmpago
    {
      id: 16,
      name: "Câmera DSLR 4K",
      price: 699.99,
      originalPrice: 999.99,
      installments: "12x $58.33",
      image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=800&auto=format&fit=crop&q=60",
      category: "ofertas-relampago",
      store: {
        name: "Canon",
        logo: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Canon_logo_vector.svg",
        url: "https://www.canon.com",
      },
      discount: 30,
      expiresAt: Date.now() + 1000 * 60 * 60 * 4, // 4 hours
    },
    {
      id: 17,
      name: "Home Theater System",
      price: 399.99,
      originalPrice: 699.99,
      installments: "12x $33.33",
      image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=800&auto=format&fit=crop&q=60",
      category: "ofertas-relampago",
      store: {
        name: "Sony",
        logo: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Sony_logo.svg",
        url: "https://www.sony.com",
      },
      discount: 43,
      expiresAt: Date.now() + 1000 * 60 * 60 * 5, // 5 hours
    },
    {
      id: 18,
      name: "Smart Air Fryer Pro",
      price: 89.99,
      originalPrice: 149.99,
      installments: "5x $18.00",
      image: "https://images.unsplash.com/photo-1648326311535-21904efb6705?w=800&auto=format&fit=crop&q=60",
      category: "ofertas-relampago",
      store: {
        name: "Philips",
        logo: "https://upload.wikimedia.org/wikipedia/commons/5/52/Philips_logo_new.svg",
        url: "https://www.philips.com",
      },
      discount: 40,
      expiresAt: Date.now() + 1000 * 60 * 60 * 6, // 6 hours
    },
  ]
}

