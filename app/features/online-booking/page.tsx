import { CalendarCheck, Database, RefreshCw, Smartphone } from 'lucide-react';

export default function OnlineBookingPage() {
  return (
    <div className="bg-black text-white min-h-screen">
      <section className="py-24 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-6xl font-black mb-8 leading-tight">
            ОНЛАЙН-ЗАПИС ТА <span className="text-primary uppercase italic">CRM ІНТЕГРАЦІЯ</span>
          </h1>
          <p className="text-2xl text-gray-400 max-w-3xl mb-12">
            Ми не просто малюємо картинки. Ми вбудовуємо повноцінний відділ продажів у ваш сайт.
          </p>
          <div className="grid md:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div className="flex gap-6">
                <CalendarCheck className="text-primary shrink-0" size={40} />
                <div>
                  <h3 className="text-xl font-bold mb-2">Автоматизація Запису</h3>
                  <p className="text-gray-400">Клієнти записуються самостійно 24/7 без дзвінків адміністратору.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <Database className="text-primary shrink-0" size={40} />
                <div>
                  <h3 className="text-xl font-bold mb-2">Altegio & EasyWeek</h3>
                  <p className="text-gray-400">Глибока інтеграція віджетів у дизайн вашого сайту, а не просто посилання.</p>
                </div>
              </div>
            </div>
            <div className="bg-secondary p-8 border border-white/10">
              <h4 className="text-primary font-bold mb-4 uppercase">Що це дає вашому бізнесу?</h4>
              <ul className="space-y-4">
                <li className="flex justify-between border-b border-white/5 pb-2">
                  <span>Зменшення No-shows</span>
                  <span className="text-primary">-30%</span>
                </li>
                <li className="flex justify-between border-b border-white/5 pb-2">
                  <span>Ріст повторних записів</span>
                  <span className="text-primary">+25%</span>
                </li>
                <li className="flex justify-between border-b border-white/5 pb-2">
                  <span>Час адміна на дзвінки</span>
                  <span className="text-primary italic">Економія 3 год/день</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}