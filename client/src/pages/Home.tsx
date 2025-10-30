import { Heart, ShoppingCart, User, Search, Menu, X, ChevronRight, ChevronLeft } from 'lucide-react';
import { useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ProductGrid from '@/components/ProductGrid';
import DailywearSection from '@/components/DailywearSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <ProductGrid />
        <DailywearSection />
      </main>
      <Footer />
    </div>
  );
}
