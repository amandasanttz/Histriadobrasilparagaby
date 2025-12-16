import { BookOpen, Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-green-500 via-yellow-400 to-blue-600 rounded-lg flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg">História do Brasil</span>
            </div>
            <p className="text-gray-400 text-sm">
              Explorando e preservando a rica história do nosso país através de artigos, quiz interativo e galerias de imagens.
            </p>
          </div>

          <div>
            <h3 className="mb-4">Períodos Históricos</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Brasil Colônia (1500-1822)</li>
              <li>Brasil Império (1822-1889)</li>
              <li>República Velha (1889-1930)</li>
              <li>Era Vargas (1930-1945)</li>
              <li>República Contemporânea (1945-presente)</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4">Sobre</h3>
            <p className="text-gray-400 text-sm">
              Este site foi criado para educar e inspirar o interesse pela história brasileira, tornando o aprendizado mais interativo e acessível para todos.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400 text-sm flex items-center justify-center space-x-1">
            <span>Feito com</span>
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            <span>para preservar nossa história</span>
          </p>
          <p className="text-gray-500 text-xs mt-2">
            © {new Date().getFullYear()} História do Brasil - Todos os direitos reservados
          </p>
        </div>
      </div>
    </footer>
  );
}
