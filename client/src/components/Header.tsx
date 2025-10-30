import { Heart, ShoppingCart, User, Search, Menu, X, Globe, Home as HomeIcon } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { name: 'All Jewellery', icon: '✦' },
    { name: 'Gold', icon: '◆' },
    { name: 'Diamond', icon: '◇' },
    { name: 'Earrings', icon: '⟡' },
    { name: 'Rings', icon: '⊙' },
    { name: 'Daily Wear', icon: '✧' },
    { name: 'Collections', icon: '⬚' },
    { name: 'Wedding', icon: '♥' },
    { name: 'Gifting', icon: '🎁' },
    { name: 'More', icon: '⋯' },
  ];

  return (
    <header className="bg-white border-b border-gray-200">
      {/* Top Navigation Bar */}
      <div className="border-b border-gray-100">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-bold text-[#8b5a5a] font-serif">JC</div>
          </div>

          {/* Search Bar */}
          <div className="flex-1 mx-8 hidden md:flex">
            <div className="w-full relative">
              <Search className="absolute left-3 top-3 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search for Gold Jewellery, Diamond Jewellery and more"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#d4a574]"
              />
            </div>
          </div>

          {/* Right Icons */}
          <div className="flex items-center gap-4">
            <button className="hidden md:flex items-center gap-2 text-gray-700 hover:text-[#d4a574]">
              <HomeIcon size={20} />
            </button>
            <button className="hidden md:flex items-center gap-2 text-gray-700 hover:text-[#d4a574]">
              <Heart size={20} />
            </button>
            <button className="hidden md:flex items-center gap-2 text-gray-700 hover:text-[#d4a574]">
              <User size={20} />
            </button>
            <button className="relative text-gray-700 hover:text-[#d4a574]">
              <ShoppingCart size={20} />
              <span className="absolute -top-2 -right-2 bg-[#8b5a5a] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </button>
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Category Navigation */}
      <div className="hidden md:block border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between overflow-x-auto py-3">
            {categories.map((category) => (
              <button
                key={category.name}
                className="flex flex-col items-center gap-1 px-3 py-2 text-sm text-gray-700 hover:text-[#d4a574] whitespace-nowrap transition-colors"
              >
                <span className="text-lg">{category.icon}</span>
                <span className="text-xs">{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 py-4">
          <div className="container mx-auto px-4 space-y-3">
            <div className="relative mb-4">
              <Search className="absolute left-3 top-3 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search jewellery"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#d4a574]"
              />
            </div>
            {categories.map((category) => (
              <button
                key={category.name}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 rounded"
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
