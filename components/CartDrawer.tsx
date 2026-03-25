'use client';
import { useCart } from '../store/useCart';
import Link from 'next/link';
import { X, ShoppingBag } from 'lucide-react';
import { useState } from 'react';
import { cn } from '../lib/utils';

export default function CartDrawer() {
  const { items, total, removeItem } = useCart();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 bg-primary text-secondary p-4 rounded-full shadow-2xl z-40 hover:scale-110 transition-transform"
      >
        <ShoppingBag size={24} />
        {items.length > 0 && <span className="absolute -top-1 -right-1 bg-white text-secondary text-[10px] font-bold h-5 w-5 rounded-full flex items-center justify-center">{items.length}</span>}
      </button>

      <div className={cn("fixed inset-0 bg-black/80 backdrop-blur-sm z-50 transition-opacity", isOpen ? "opacity-100 visible" : "opacity-0 invisible")}>
        <div className={cn("fixed right-0 top-0 h-full w-full max-w-md bg-secondary border-l border-white/10 p-8 transform transition-transform duration-300", isOpen ? "translate-x-0" : "translate-x-full")}>
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-black uppercase tracking-tighter">Ваше замовлення</h2>
            <button onClick={() => setIsOpen(false)}><X size={32} /></button>
          </div>
          
          <div className="flex-grow overflow-y-auto max-h-[60vh] mb-8">
            {items.length === 0 ? (
              <p className="text-gray-500">Ваш кошик ще пустий</p>
            ) : (
              <div className="space-y-4">
                {items.map((item) => (
                  <div key={item.id} className="flex justify-between items-center p-4 bg-black/40 border border-white/5">
                    <div>
                      <p className="font-bold">{item.name}</p>
                      <p className="text-primary">{item.price} ₴</p>
                    </div>
                    <button onClick={() => removeItem(item.id)} className="text-gray-500 hover:text-white">Видалити</button>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="border-t border-white/10 pt-8">
            <div className="flex justify-between text-2xl font-black mb-6 uppercase">
              <span>Сума:</span>
              <span className="text-primary">{total} ₴</span>
            </div>
            <Link 
              href="/checkout" 
              onClick={() => setIsOpen(false)}
              className="block w-full text-center bg-primary text-secondary py-5 font-black uppercase hover:bg-white transition-colors"
            >
              Оформити замовлення
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}