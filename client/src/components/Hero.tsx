import { ChevronRight } from 'lucide-react';

export default function Hero() {
  const featuredCategories = [
    {
      id: 1,
      name: '14 Kt',
      image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=300&h=300&fit=crop',
      description: 'Classic Gold Collection',
    },
    {
      id: 2,
      name: '18 Kt',
      image: 'https://images.unsplash.com/photo-1515562141207-6461a4b9b7fd?w=300&h=300&fit=crop',
      description: 'Premium Gold Jewelry',
    },
    {
      id: 3,
      name: '22 Kt',
      image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=300&h=300&fit=crop',
      description: 'Pure Gold Designs',
    },
  ];

  return (
    <div className="bg-white">
      {/* Page Title */}
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center text-[#1a1a1a] mb-12">All Jewellery</h1>

        {/* Featured Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {featuredCategories.map((category) => (
            <div
              key={category.id}
              className="group cursor-pointer hover-lift"
            >
              <div className="relative overflow-hidden rounded-lg bg-gray-100 aspect-square mb-4">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-lg font-semibold text-center text-[#1a1a1a]">
                {category.name}
              </h3>
              <p className="text-center text-sm text-gray-600 mt-1">
                {category.description}
              </p>
            </div>
          ))}
        </div>

        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-600 border-t border-gray-200 pt-6">
          <span>Home</span>
          <ChevronRight size={16} className="text-[#d4a574]" />
          <span className="text-[#d4a574] font-medium">All Jewellery</span>
        </div>
      </div>
    </div>
  );
}
