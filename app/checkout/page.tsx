'use client';
import { useCart } from '../../store/useCart';
import { Trash2 } from 'lucide-react';

export default function CheckoutPage() {
  const { items, total, removeItem } = useCart();

  return (
    <div className="py-24 min-h-screen bg-black">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-black mb-12 uppercase">Ваше Замовлення</h1>
        {items.length === 0 ? (
          <p className="text-gray-400">Кошик порожній.</p>
        ) : (
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              {items.map((item) => (
                <div key={item.id} className="bg-secondary p-6 flex justify-between items-center border border-white/10">
                  <div>
                    <h3 className="font-bold">{item.name}</h3>
                    <p className="text-primary">{item.price} ₴</p>
                  </div>
                  <button onClick={() => removeItem(item.id)} className="text-red-500 hover:text-red-400">
                    <Trash2 size={20} />
                  </button>
                </div>
              ))}
              <div className="text-2xl font-bold pt-6 border-t border-white/10 flex justify-between">
                <span>Всього:</span>
                <span className="text-primary">{total} ₴</span>
              </div>
            </div>
            <div className="bg-secondary p-8 border border-white/10">
              <h3 className="text-xl font-bold mb-6 uppercase">Оформлення</h3>
              <form className="space-y-4">
                <input type="text" placeholder="Ім'я" className="w-full p-4 bg-black border border-white/10 focus:border-primary outline-none" />
                <input type="email" placeholder="Email" className="w-full p-4 bg-black border border-white/10 focus:border-primary outline-none" />
                <button className="w-full py-4 bg-primary text-secondary font-bold uppercase hover:bg-white transition-colors">
                  Оплатити замовлення
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}