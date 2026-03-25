import Image from 'next/image';

const cases = [
  {
    title: 'Razor & Blade Kyiv',
    desc: 'Збільшення онлайн-записів на 40% через редизайн.',
    image: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&q=80',
    category: 'Преміум Лендінг'
  },
  {
    title: 'Gentleman House',
    desc: 'Мережа з 5 барбершопів з єдиною системою бронювання.',
    image: 'https://images.unsplash.com/photo-1599351473639-4cb9af46e967?auto=format&fit=crop&q=80',
    category: 'Корпоративний Сайт'
  },
  {
    title: 'Classic Cut',
    desc: 'Локальний SEO-прорив: ТОП-1 у Львові.',
    image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80',
    category: 'SEO Оптимізація'
  }
];

export default function CasesPage() {
  return (
    <div className="py-20 bg-black min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-5xl font-black mb-12 uppercase">Наші <span className="text-primary">Кейси</span></h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cases.map((c, i) => (
            <div key={i} className="group relative overflow-hidden bg-secondary border border-white/10">
              <div className="h-64 overflow-hidden">
                <img src={c.image} alt={c.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <span className="text-primary text-sm font-bold uppercase mb-2 block">{c.category}</span>
                <h3 className="text-2xl font-bold mb-3">{c.title}</h3>
                <p className="text-gray-400">{c.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}