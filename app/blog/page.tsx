import Link from 'next/link';

const posts = [
  {
    title: 'Як відкрити барбершоп у 2025: Покроковий гайд',
    slug: 'yak-vidkryty-barbershop',
    excerpt: 'Розбираємо юридичні тонкощі, вибір обладнання та маркетингову стратегію.',
    date: '20 Травня 2024'
  },
  {
    title: '5 трендів у дизайні сайтів для барберів',
    slug: 'trends-2025',
    excerpt: 'Мінімалізм, темна тема та акцент на відео-контенті.',
    date: '15 Травня 2024'
  }
];

export default function BlogPage() {
  return (
    <div className="py-20 bg-black min-h-screen">
      <div className="max-w-5xl mx-auto px-4">
        <h1 className="text-6xl font-black mb-16 uppercase">Блог для <span className="text-primary">Власників</span></h1>
        <div className="space-y-12">
          {posts.map((post) => (
            <article key={post.slug} className="group border-b border-white/10 pb-12">
              <Link href={`/blog/${post.slug}`}>
                <p className="text-primary mb-2 font-mono">{post.date}</p>
                <h2 className="text-3xl font-bold mb-4 group-hover:text-primary transition-colors cursor-pointer">{post.title}</h2>
                <p className="text-gray-400 text-lg mb-6">{post.excerpt}</p>
                <span className="inline-block border-b border-primary text-sm font-bold uppercase tracking-widest">Читати далі</span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}