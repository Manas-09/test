import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

interface DailywearCategory {
  id: number;
  name: string;
  image: string;
}

const dailywearCategories: DailywearCategory[] = [
  {
    id: 1,
    name: 'Dailywear Rings',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=400&fit=crop',
  },
  {
    id: 2,
    name: 'Dailywear Earrings',
    image: 'https://images.unsplash.com/photo-1515562141207-6461a4b9b7fd?w=400&h=400&fit=crop',
  },
  {
    id: 3,
    name: 'Dailywear Mangalsutra',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=400&fit=crop',
  },
];

export default function DailywearSection() {
  const [scrollPosition, setScrollPosition] = useState(0);

  const scroll = (direction: 'left' | 'right') => {
    const container = document.getElementById('dailywear-carousel');
    if (container) {
      const scrollAmount = 400;
      if (direction === 'left') {
        container.scrollLeft -= scrollAmount;
        setScrollPosition(container.scrollLeft - scrollAmount);
      } else {
        container.scrollLeft += scrollAmount;
        setScrollPosition(container.scrollLeft + scrollAmount);
      }
    }
  };

  return (
    <div className="bg-gradient-to-b from-[#8b5a5a] to-[#6b4a4a] py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          Dailywear Jewellery
        </h2>

        {/* Carousel Container */}
        <div className="relative">
          {/* Left Arrow */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow"
          >
            <ChevronLeft size={24} className="text-[#8b5a5a]" />
          </button>

          {/* Carousel */}
          <div
            id="dailywear-carousel"
            className="flex gap-6 overflow-x-auto scroll-smooth px-12"
            style={{ scrollBehavior: 'smooth' }}
          >
            {dailywearCategories.map((category) => (
              <div
                key={category.id}
                className="flex-shrink-0 w-80 group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-lg bg-gray-200 aspect-square mb-4">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
                </div>
                <h3 className="text-lg font-semibold text-center text-white">
                  {category.name}
                </h3>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow"
          >
            <ChevronRight size={24} className="text-[#8b5a5a]" />
          </button>
        </div>
      </div>
    </div>
  );
}
