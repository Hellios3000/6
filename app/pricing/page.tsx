'use client';
import { Check } from 'lucide-react';
import { useCart } from '../../store/useCart';

const plans = [
  {
    id: 'basic',
    name: 'Старт',
    price: 15000,
    features: ['Landing Page', 'Інтеграція CRM', 'Адаптив під мобільні', 'SEO Налаштування']
  },
  {
    id: 'pro',
    name: 'Професіонал',
    price: 35000,
    features: ['Багатосторінковий сайт', 'Система лояльності', 'Розширена аналітика', 'Google Maps SEO']
  },
  {
    id: 'elite',
    name: 'Еліт',
    price: 60000,
    features: ['Індивідуальний дизайн', 'English/UA версії', 'Підтримка 24/7', 'Маркетингова стратегія']
  }
];

export default function PricingPage() {
  const { addItem } = useCart();

  return (
    <div className="py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-black mb-4">ТАРИФИ ТА <span className="text-primary">ЦІНИ</span></h1>
          <p className="text-gray-400 max-w-2xl mx-auto">Прозорі умови без прихованих платежів.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div key={plan.id} className="p-10 border border-white/10 bg-black hover:border-primary transition-colors flex flex-col">
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <div className="text-4xl font-black text-primary mb-8">від {plan.price} ₴</div>
              <ul className="space-y-4 mb-10 flex-grow">
                {plan.features.map((f, idx) => (
                  <li key={idx} className="flex items-center text-gray-300">
                    <Check size={18} className="text-primary mr-3" /> {f}
                  </li>
                ))}
              </ul>
              <button 
                onClick={() => addItem({ id: plan.id, name: plan.name, price: plan.price })}
                className="w-full py-4 bg-primary text-secondary font-bold uppercase hover:bg-white transition-colors"
              >
                Вибрати Тариф
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}