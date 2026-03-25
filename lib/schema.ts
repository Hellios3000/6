export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "BarberWeb UA",
  "url": "https://barberweb.ua",
  "logo": "https://barberweb.ua/logo.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+38-0XX-XXX-XX-XX",
    "contactType": "customer service",
    "areaServed": "UA",
    "availableLanguage": ["Ukrainian"]
  }
};

export const mainServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Web Development for Barbershops",
  "provider": {
    "@type": "LocalBusiness",
    "name": "BarberWeb UA",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Kyiv",
      "addressCountry": "UA"
    }
  },
  "areaServed": "UA",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Website Solutions",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Custom Website Development"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Online Booking Integration"
        }
      }
    ]
  }
};

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Скільки часу займає розробка сайту для барбершопа?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Зазвичай розробка займає від 14 до 30 днів залежно від складності та інтеграцій."
      }
    },
    {
      "@type": "Question",
      "name": "Чи інтегруєте ви Altegio або EasyWeek?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Так, ми налаштовуємо повну синхронізацію з усіма популярними CRM системами в Україні."
      }
    }
  ]
};