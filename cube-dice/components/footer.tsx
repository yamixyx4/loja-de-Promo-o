import Link from "next/link"

export default function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <h3 className="mb-4 text-lg font-semibold">Institucional</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-red-600">
                  Sobre nós
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-red-600">
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-red-600">
                  Termos de Uso
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Ajuda</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-red-600">
                  Central de Atendimento
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-red-600">
                  Trocas e Devoluções
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-red-600">
                  Dúvidas Frequentes
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Pagamento</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-red-600">
                  Cartões de Crédito
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-red-600">
                  Boleto
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-red-600">
                  Pix
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Redes Sociais</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-red-600">
                  Facebook
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-red-600">
                  Instagram
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-red-600">
                  Twitter
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center">
          <p className="text-sm text-gray-500">© 2024 Loja Online. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

