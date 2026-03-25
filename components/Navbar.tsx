'use client';
import Link from 'next/link';
import { useState } from 'react';
import { Scissors, Menu, X, ShoppingBag } from 'lucide-react';
import { useCart } from '../store/useCart';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { items } = useCart();

  return (
    <nav className="bg-secondary border-b border-white/10 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2 text-primary">
              <Scissors size={28} />
              <span className="font-bold text-xl uppercase tracking-tighter text-white">BarberWeb</span>
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link href="/cases" className="hover:text-primary px-3 py-2 transition-colors">Кейси</Link>
              <Link href="/pricing" className="hover:text-primary px-3 py-2 transition-colors">Ціни</Link>
              <Link href="/features/online-booking" className="hover:text-primary px-3 py-2 transition-colors">Онлайн-запис</Link>
              <Link href="/blog" className="hover:text-primary px-3 py-2 transition-colors">Блог</Link>
              <Link href="/contacts" className="bg-primary text-secondary px-6 py-2 font-bold rounded-sm hover:bg-white transition-colors">Замовити</Link>
            </div>
          </div>

          <div className="md:hidden flex items-center space-x-4">
            <button className="p-2 relative">
              <ShoppingBag className="text-white" />
              {items.length > 0 && <span className="absolute top-0 right-0 bg-primary text-[10px] rounded-full h-4 w-4 flex items-center justify-center font-bold">{items.length}</span>}
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-secondary border-b border-white/10">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-center">
            <Link href="/cases" className="block px-3 py-4 w-full text-center border-b border-white/5">Кейси</Link>
            <Link href="/pricing" className="block px-3 py-4 w-full text-center border-b border-white/5">Ціни</Link>
            <Link href="/features/online-booking" className="block px-3 py-4 w-full text-center border-b border-white/5">Онлайн-запис</Link>
            <Link href="/blog" className="block px-3 py-4 w-full text-center border-b border-white/5">Блог</Link>
            <Link href="/contacts" className="block px-3 py-4 w-full text-center bg-primary text-secondary font-bold">Замовити</Link>
          </div>
        </div>
      )}
    </nav>
  );
}