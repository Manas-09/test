import { Heart } from 'lucide-react';
import { useState } from 'react';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  stock: string;
  isExpertChoice: boolean;
  isFavorite: boolean;
}

const products: Product[] = [
  {
    id: 1,
    name: 'Everyday Charm Diamond Stud Earrings',
    price: 45564,
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=300&h=300&fit=crop',
    stock: 'Only 1 left',
    isExpertChoice: false,
    isFavorite: false,
  },
  {
    id: 2,
    name: 'Treble Drop Earrings',
    price: 88554,
    image: 'https://images.unsplash.com/photo-1515562141207-6461a4b9b7fd?w=300&h=300&fit=crop',
    stock: 'Only 1 left',
    isExpertChoice: true,
    isFavorite: false,
  },
  {
    id: 3,
    name: 'Charming Paisley Pendant',
    price: 48265,
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=300&h=300&fit=crop',
    stock: 'Only 1 left',
    isExpertChoice: false,
    isFavorite: false,
  },
  {
    id: 4,
    name: 'Floral Grace Diamond Pendant',
    price: 85156,
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=300&h=300&fit=crop',
    stock: 'Only 1 left',
    isExpertChoice: true,
    isFavorite: false,
  },
];

export default function ProductGrid() {
  const [favorites, setFavorites] = useState<number[]>([]);

  const toggleFavorite = (id: number) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]
    );
  };

  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-lg overflow-hidden hover-lift"
            >
              {/* Product Image Container */}
              <div className="relative bg-gray-100 aspect-square overflow-hidden">
                {product.isExpertChoice && (
                  <div className="absolute top-3 left-3 z-10 badge-expert">
                    ★ EXPERT'S CHOICE
                  </div>
                )}
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <button
                  onClick={() => toggleFavorite(product.id)}
                  className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow"
                >
                  <Heart
                    size={20}
                    className={
                      favorites.includes(product.id)
                        ? 'fill-[#d4a574] text-[#d4a574]'
                        : 'text-gray-400'
                    }
                  />
                </button>
              </div>

              {/* Product Info */}
              <div className="p-4">
                <h3 className="text-sm font-semibold text-[#1a1a1a] mb-2 line-clamp-2">
                  {product.name}
                </h3>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-lg font-bold text-[#1a1a1a]">
                    ₹ {product.price.toLocaleString('en-IN')}
                  </span>
                </div>
                <p className="text-xs text-[#d4a574] font-medium">
                  {product.stock}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
