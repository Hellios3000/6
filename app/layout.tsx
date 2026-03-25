import type { Metadata } from 'next';
import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CartDrawer from '../components/CartDrawer';
import { organizationSchema, mainServiceSchema } from '../lib/schema';

export const metadata: Metadata = {
  title: 'Розробка сайтів для барбершопів в Україні | BarberWeb',
  description: 'Професійне створення сайтів для барбершопів з інтеграцією CRM Altegio/EasyWeek. SEO просування та онлайн-запис під ключ.',
  openGraph: {
    title: 'BarberWeb - Сайти для Барбершопів',
    description: 'Ефективні рішення для вашого барбер-бізнесу.',
    locale: 'uk_UA',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: { 
  children: React.ReactNode 
}) {
  return (
    <html lang="uk">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(mainServiceSchema) }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <CartDrawer />
        <Footer />
      </body>
    </html>
  );
}