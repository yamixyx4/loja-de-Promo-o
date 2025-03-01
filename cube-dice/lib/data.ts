export const categoryData: Record<
  string,
  {
    name: string
    description: string
    icon: string
  }
> = {
  "ofertas-do-dia": {
    name: "Ofertas do Dia",
    description: "As melhores ofertas com tempo limitado. Aproveite antes que acabem!",
    icon: "https://images.unsplash.com/photo-1607082349566-187342175e2f?w=800&auto=format&fit=crop&q=60",
  },
  "ofertas-relampago": {
    name: "Ofertas Relâmpago",
    description: "Promoções especiais com duração de apenas algumas horas!",
    icon: "https://images.unsplash.com/photo-1587232546749-d238ec95ef22?w=800&auto=format&fit=crop&q=60",
  },
  tecnologia: {
    name: "Tech Deals",
    description: "Smartphones, notebooks, tablets e mais com super descontos!",
    icon: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&auto=format&fit=crop&q=60",
  },
  "casa-e-cozinha": {
    name: "Casa & Cozinha",
    description: "Eletrodomésticos e itens para sua casa com preços imperdíveis!",
    icon: "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&auto=format&fit=crop&q=60",
  },
  moda: {
    name: "Moda com Desconto",
    description: "Roupas, calçados e acessórios com até 70% OFF!",
    icon: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&auto=format&fit=crop&q=60",
  },
  games: {
    name: "Games & Consoles",
    description: "Jogos, consoles e acessórios gamers em promoção!",
    icon: "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?w=800&auto=format&fit=crop&q=60",
  },
  "super-descontos": {
    name: "Super Descontos",
    description: "Produtos com mais de 50% de desconto!",
    icon: "https://images.unsplash.com/photo-1607083206869-4c7672e72a8c?w=800&auto=format&fit=crop&q=60",
  },
  celulares: {
    name: "Celulares",
    description: "Smartphones das melhores marcas com os melhores preços. Samsung, Apple, Motorola e mais!",
    icon: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&auto=format&fit=crop&q=60",
  },
  eletrodomesticos: {
    name: "Eletrodomésticos",
    description: "Geladeiras, fogões, máquinas de lavar e muito mais para sua casa.",
    icon: "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&auto=format&fit=crop&q=60",
  },
  informatica: {
    name: "Informática",
    description: "Notebooks, computadores, acessórios e tudo para seu setup.",
    icon: "https://images.unsplash.com/photo-1537498425277-c283d32ef9db?w=800&auto=format&fit=crop&q=60",
  },
  "tv-e-home-theater": {
    name: "TV e Home Theater",
    description: "As melhores TVs e equipamentos de áudio para sua casa.",
    icon: "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=800&auto=format&fit=crop&q=60",
  },
  eletroportateis: {
    name: "Eletroportáteis",
    description: "Cafeteiras, liquidificadores, aspiradores e outros eletroportáteis.",
    icon: "https://images.unsplash.com/photo-1585515320310-259814833f6e?w=800&auto=format&fit=crop&q=60",
  },
  moveis: {
    name: "Móveis",
    description: "Móveis para todos os ambientes da sua casa com ótimos preços.",
    icon: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?w=800&auto=format&fit=crop&q=60",
  },
}

export const products = [
  {
    id: 1,
    name: "iPhone 13 Pro 128GB",
    price: 5999.99,
    installments: "12x R$ 499,99",
    image: "https://images.unsplash.com/photo-1632661674596-618e44110c85?w=800&auto=format&fit=crop&q=60",
    category: "celulares",
  },
  {
    id: 2,
    name: "Samsung Galaxy S21",
    price: 4499.99,
    installments: "12x R$ 374,99",
    image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=800&auto=format&fit=crop&q=60",
    category: "celulares",
  },
  {
    id: 3,
    name: 'Smart TV Samsung 55" 4K',
    price: 3299.99,
    installments: "12x R$ 274,99",
    image: "https://images.unsplash.com/photo-1601944179066-29786cb9d32a?w=800&auto=format&fit=crop&q=60",
    category: "tv-e-home-theater",
  },
  {
    id: 4,
    name: "Notebook Dell Inspiron",
    price: 4599.99,
    installments: "12x R$ 383,33",
    image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=800&auto=format&fit=crop&q=60",
    category: "informatica",
  },
  {
    id: 5,
    name: "Geladeira Brastemp Frost Free",
    price: 3999.99,
    installments: "12x R$ 333,33",
    image: "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?w=800&auto=format&fit=crop&q=60",
    category: "eletrodomesticos",
  },
  {
    id: 6,
    name: "Máquina de Lavar Electrolux 11kg",
    price: 2499.99,
    installments: "12x R$ 208,33",
    image: "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=800&auto=format&fit=crop&q=60",
    category: "eletrodomesticos",
  },
  {
    id: 7,
    name: "Cafeteira Nespresso",
    price: 499.99,
    installments: "10x R$ 49,99",
    image: "https://images.unsplash.com/photo-1517914309068-f000ec7d3a4d?w=800&auto=format&fit=crop&q=60",
    category: "eletroportateis",
  },
  {
    id: 8,
    name: "Sofá 3 Lugares Retrátil",
    price: 1999.99,
    installments: "12x R$ 166,66",
    image: "https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=800&auto=format&fit=crop&q=60",
    category: "moveis",
  },
  {
    id: 9,
    name: 'Monitor Gaming 27" 144Hz',
    price: 1899.99,
    installments: "12x R$ 158,33",
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=800&auto=format&fit=crop&q=60",
    category: "informatica",
  },
  {
    id: 10,
    name: "Home Theater Samsung",
    price: 999.99,
    installments: "12x R$ 83,33",
    image: "https://images.unsplash.com/photo-1558504487-ce6f9c0bcdb0?w=800&auto=format&fit=crop&q=60",
    category: "tv-e-home-theater",
  },
  // Ofertas do dia - produtos com desconto
  {
    id: 11,
    name: 'Smart TV LG 50" 4K',
    price: 2599.99,
    originalPrice: 3299.99,
    installments: "12x R$ 216,66",
    image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=800&auto=format&fit=crop&q=60",
    category: "ofertas-do-dia",
  },
  {
    id: 12,
    name: "Smartphone Motorola G60",
    price: 1499.99,
    originalPrice: 1999.99,
    installments: "12x R$ 124,99",
    image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=800&auto=format&fit=crop&q=60",
    category: "ofertas-do-dia",
  },
  {
    id: 13,
    name: "Aspirador de Pó Robô",
    price: 899.99,
    originalPrice: 1299.99,
    installments: "10x R$ 89,99",
    image: "https://images.unsplash.com/photo-1589006833108-9e84b0a785e5?w=800&auto=format&fit=crop&q=60",
    category: "ofertas-do-dia",
  },
]

