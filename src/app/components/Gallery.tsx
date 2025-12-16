import { motion } from 'motion/react';
import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface GalleryImage {
  id: number;
  url: string;
  title: string;
  description: string;
  period: string;
}

const galleryImages: GalleryImage[] = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1632184671130-f63ac80ec83b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmF6aWxpYW4lMjBpbmRlcGVuZGVuY2UlMjBoaXN0b3JpY2FsfGVufDF8fHx8MTc2NTkwNjA5OHww&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Independência do Brasil",
    description: "Monumento histórico celebrando a independência proclamada em 1822",
    period: "Império (1822-1889)"
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1639192822808-21771854c670?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvbmlhbCUyMGJyYXppbCUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NjU5MDYwOTh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Arquitetura Colonial",
    description: "Exemplos preservados da arquitetura colonial portuguesa no Brasil",
    period: "Colônia (1500-1822)"
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1653628649666-d27d69a6ba28?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmF6aWwlMjBmbGFnJTIwbW9udW1lbnR8ZW58MXx8fHwxNzY1OTA2MDk5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Símbolos Nacionais",
    description: "Monumentos que representam a identidade brasileira",
    period: "República (1889-presente)"
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1668200223967-bd5c81e9dafc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyaW8lMjBkZSUyMGphbmVpcm8lMjBoaXN0b3JpY2FsfGVufDF8fHx8MTc2NTkwNjA5OXww&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Rio de Janeiro Histórico",
    description: "Vista histórica da antiga capital brasileira",
    period: "Império e República"
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1735839550903-98b86765a0d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmF6aWxpYW4lMjBjdWx0dXJlJTIwdHJhZGl0aW9uYWx8ZW58MXx8fHwxNzY1OTA2MDk5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Cultura Tradicional",
    description: "Manifestações culturais que moldaram a identidade brasileira",
    period: "Diversos períodos"
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1619385931825-59b4cd592e50?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYWx2YWRvciUyMGJhaGlhJTIwY29sb25pYWx8ZW58MXx8fHwxNzY1OTA2MTAwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Salvador, Bahia",
    description: "Primeira capital do Brasil, fundada em 1549",
    period: "Colônia (1500-1822)"
  }
];

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const handlePrevious = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1);
    }
  };

  const handleNext = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === galleryImages.length - 1 ? 0 : selectedImage + 1);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') handlePrevious();
    if (e.key === 'ArrowRight') handleNext();
    if (e.key === 'Escape') setSelectedImage(null);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl text-gray-900 mb-4">Galeria Histórica</h2>
          <p className="text-xl text-gray-600">
            Imagens que contam a história do nosso país
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer aspect-square"
              onClick={() => setSelectedImage(index)}
            >
              <ImageWithFallback
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl mb-2">{image.title}</h3>
                  <p className="text-sm text-white/80">{image.period}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center"
            onClick={() => setSelectedImage(null)}
            onKeyDown={handleKeyDown}
            tabIndex={0}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white p-2 hover:bg-white/10 rounded-full transition-colors z-10"
            >
              <X className="w-8 h-8" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrevious();
              }}
              className="absolute left-4 text-white p-3 hover:bg-white/10 rounded-full transition-colors z-10"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              className="absolute right-4 text-white p-3 hover:bg-white/10 rounded-full transition-colors z-10"
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              className="max-w-6xl max-h-[90vh] mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <ImageWithFallback
                src={galleryImages[selectedImage].url}
                alt={galleryImages[selectedImage].title}
                className="max-w-full max-h-[70vh] object-contain rounded-lg"
              />
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 mt-4 text-white">
                <h3 className="text-2xl mb-2">{galleryImages[selectedImage].title}</h3>
                <p className="text-white/80 mb-2">{galleryImages[selectedImage].description}</p>
                <p className="text-sm text-white/60">{galleryImages[selectedImage].period}</p>
                <div className="flex items-center justify-center mt-4 space-x-2">
                  {galleryImages.map((_, idx) => (
                    <div
                      key={idx}
                      className={`w-2 h-2 rounded-full transition-all ${
                        idx === selectedImage ? 'bg-white w-8' : 'bg-white/40'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
