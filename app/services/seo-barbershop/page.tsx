export default function SeoPage() {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-5xl font-black mb-8">SEO ПРОСУВАННЯ <span className="text-primary">БАРБЕРШОПІВ</span></h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-xl mb-8">Ваш сайт може бути ідеальним, але що з того, якщо його ніхто не бачить? Ми виводимо барбершопи в ТОП за запитами "стрижка бороди", "чоловіча стрижка київ" та іншими.</p>
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="bg-secondary p-10">
              <h3 className="text-primary text-2xl font-bold mb-4 italic">01 Local SEO</h3>
              <p>Оптимізація вашої точки на Google Maps. Кожен, хто шукає поруч - ваш клієнт.</p>
            </div>
            <div className="bg-secondary p-10">
              <h3 className="text-primary text-2xl font-bold mb-4 italic">02 Технічний SEO</h3>
              <p>Швидкість завантаження, мета-теги та правильна структура сторінок послуг.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}