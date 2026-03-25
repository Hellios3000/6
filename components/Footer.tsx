export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-4 text-center md:text-left">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-2">
            <h3 className="text-2xl font-black text-primary mb-6">BarberWeb UA</h3>
            <p className="text-gray-400 max-w-sm">Лідер у створенні цифрових рішень для барбер-індустрії України. Ми робимо бізнес керованим.</p>
          </div>
          <div>
            <h4 className="font-bold mb-6 uppercase">Навігація</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="/cases" className="hover:text-primary">Кейси</a></li>
              <li><a href="/pricing" className="hover:text-primary">Ціни</a></li>
              <li><a href="/blog" className="hover:text-primary">Блог</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6 uppercase">Послуги</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="/features/online-booking" className="hover:text-primary">Онлайн-запис</a></li>
              <li><a href="/services/seo-barbershop" className="hover:text-primary">SEO Просування</a></li>
              <li><a href="/" className="hover:text-primary">Розробка дизайну</a></li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-white/5 text-gray-600 text-sm">
          &copy; {new Date().getFullYear()} BarberWeb Development Agency. Всі права захищено.
        </div>
      </div>
    </footer>
  );
}