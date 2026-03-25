import LeadForm from '../../components/LeadForm';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="py-20 bg-secondary min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-20">
          <div>
            <h1 className="text-6xl font-black mb-10">КОНТАКТИ</h1>
            <p className="text-xl text-gray-400 mb-12">Готові вивести свій барбершоп на новий рівень? Напишіть нам сьогодні.</p>
            <div className="space-y-8">
              <div className="flex items-center space-x-6">
                <div className="bg-primary p-4 text-secondary rounded-sm"><Phone size={24} /></div>
                <div>
                  <p className="text-sm text-gray-500 uppercase font-bold">Телефон</p>
                  <p className="text-xl">+38 (067) 000-00-00</p>
                </div>
              </div>
              <div className="flex items-center space-x-6">
                <div className="bg-primary p-4 text-secondary rounded-sm"><Mail size={24} /></div>
                <div>
                  <p className="text-sm text-gray-500 uppercase font-bold">Email</p>
                  <p className="text-xl">hello@barberweb.ua</p>
                </div>
              </div>
              <div className="flex items-center space-x-6">
                <div className="bg-primary p-4 text-secondary rounded-sm"><MapPin size={24} /></div>
                <div>
                  <p className="text-sm text-gray-500 uppercase font-bold">Офіс</p>
                  <p className="text-xl">Київ, вул. Велика Васильківська</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-black p-10 border border-white/10 shadow-2xl">
            <h2 className="text-2xl font-bold mb-8 uppercase">Залиште заявку</h2>
            <LeadForm />
          </div>
        </div>
      </div>
    </div>
  );
}