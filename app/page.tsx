'use client';
import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Smartphone, ArrowRight } from 'lucide-react';
import LeadForm from '../components/LeadForm';
import { useState } from 'react';
import Modal from '../components/ui/Modal';

export default function HomePage() {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden barber-gradient">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80')] bg-cover bg-center"></div>
        <div className="relative z-10 text-center max-w-4xl px-4">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-5xl md:text-7xl font-black uppercase mb-6"
          >
            Ваш Барбершоп <br /> <span className="text-primary">Заслуговує на Більше</span>
          </motion.h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Створюємо преміальні сайти з онлайн-записом та CRM інтеграцією для лідерів ринку.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => setModalOpen(true)}
              className="bg-primary text-secondary text-lg font-bold py-4 px-10 rounded-sm hover:bg-white transition-all transform hover:scale-105"
            >
              Отримати Пропозицію
            </button>
            <a href="/cases" className="border border-white/30 hover:border-primary px-10 py-4 flex items-center justify-center transition-colors">
              Наші роботи <ArrowRight className="ml-2" size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="p-8 border border-white/5 hover:border-primary/50 transition-colors">
              <Zap className="text-primary mb-6" size={40} />
              <h3 className="text-2xl font-bold mb-4">Максимальна Швидкість</h3>
              <p className="text-gray-400">Сайти на Next.js, що завантажуються швидше, ніж клієнт встигає моргнути. 90+ в PageSpeed.</p>
            </div>
            <div className="p-8 border border-white/5 hover:border-primary/50 transition-colors">
              <Smartphone className="text-primary mb-6" size={40} />
              <h3 className="text-2xl font-bold mb-4">Mobile First</h3>
              <p className="text-gray-400">Адаптивність, що виглядає ідеально на iPhone та Android. Більшість ваших клієнтів там.</p>
            </div>
            <div className="p-8 border border-white/5 hover:border-primary/50 transition-colors">
              <ShieldCheck className="text-primary mb-6" size={40} />
              <h3 className="text-2xl font-bold mb-4">CRM Інтеграція</h3>
              <p className="text-gray-400">Повна синхронізація з Altegio, EasyWeek, та іншими українськими сервісами запису.</p>
            </div>
          </div>
        </div>
      </section>

      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)} title="Розрахувати Вартість">
        <LeadForm />
      </Modal>
    </div>
  );
}