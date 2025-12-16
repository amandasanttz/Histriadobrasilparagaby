import { motion } from 'motion/react';
import { ArrowDown, Heart } from 'lucide-react';

interface HeroProps {
  onExplore: () => void;
}

export function Hero({ onExplore }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-600 via-pink-500 to-rose-500">
      <div className="absolute inset-0 bg-black/20"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="flex items-center justify-center space-x-2 mb-4"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Heart className="w-8 h-8 text-white fill-white" />
          </motion.div>
          <h1 className="text-5xl md:text-7xl text-white mb-4">
            Olá, Maria Gabrielly!
          </h1>
          <p className="text-2xl md:text-3xl text-white/95 mb-3">
            História do Brasil
          </p>
          <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Um espaço especial criado exclusivamente para você explorar os momentos fascinantes que moldaram nossa nação
          </p>
          <motion.button
            onClick={onExplore}
            className="bg-white text-purple-700 px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Começar a Explorar
          </motion.button>
        </motion.div>

        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown className="w-8 h-8 text-white" />
        </motion.div>
      </div>

      {/* Animated circles */}
      <motion.div
        className="absolute top-20 left-10 w-64 h-64 bg-white/10 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-white/10 rounded-full blur-3xl"
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.5, 0.3, 0.5] }}
        transition={{ duration: 10, repeat: Infinity }}
      />
    </section>
  );
}