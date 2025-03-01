export interface Store {
  name: string
  logo?: string
  url?: string
}

export interface Product {
  id: number
  name: string
  price: number
  originalPrice?: number
  installments: string
  image: string
  category: string
  store?: Store
  discount?: number
  expiresAt?: number
}

