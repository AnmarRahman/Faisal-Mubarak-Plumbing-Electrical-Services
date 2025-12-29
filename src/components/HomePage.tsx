'use client';

import { useState } from 'react';
import { Bars3Icon, XMarkIcon, WrenchScrewdriverIcon, BoltIcon, PhoneIcon } from '@heroicons/react/24/outline';
import { ChatBubbleLeftRightIcon } from '@heroicons/react/24/solid';

type Language = 'ar' | 'en';

const translations = {
  ar: {
    companyName: 'مؤسسة فيصل مبارك للسباكة والكهرباء',
    nav: { home: 'الرئيسية', services: 'الخدمات', about: 'من نحن', contact: 'اتصل بنا' },
    hero: {
      title: 'خدمات السباكة والكهرباء الاحترافية في المملكة',
      subtitle: 'استجابة سريعة • فنيون محترفون • خدمة موثوقة',
      cta: 'اتصل بنا الآن'
    },
    popularServices: {
      title: 'خدماتنا الأساسية',
      plumbing: { title: 'خدمات السباكة', desc: 'تركيب وإصلاح الأنابيب وكشف التسربات' },
      electrical: { title: 'خدمات الكهرباء', desc: 'أعمال كهربائية وتركيب الإضاءة' },
      maintenance: { title: 'صيانة وطوارئ', desc: 'خدمات طوارئ 24/7 وصيانة دورية' }
    },
    allServices: {
      title: 'جميع الخدمات',
      items: ['تركيب وإصلاح الأنابيب', 'كشف تسرب المياه', 'الأعمال الكهربائية', 'تركيب الإضاءة', 'صيانة عامة']
    },
    whyUs: {
      title: 'لماذا تختارنا؟',
      reasons: ['فنيون ذوو خبرة', 'استجابة سريعة', 'مواد عالية الجودة', 'أسعار تنافسية', 'نخدم المملكة العربية السعودية']
    },
    contact: {
      title: 'اتصل بنا',
      form: { name: 'الاسم', phone: 'رقم الهاتف', message: 'الرسالة', submit: 'إرسال' },
      whatsapp: 'تواصل عبر واتساب',
      mapTitle: 'موقعنا'
    },
    footer: { company: 'مؤسسة فيصل مبارك للسباكة والكهرباء', desc: 'خدمات احترافية في السباكة والكهرباء', rights: 'جميع الحقوق محفوظة' }
  },
  en: {
    companyName: 'Faisal Mubarak Plumbing & Electrical Services',
    nav: { home: 'Home', services: 'Services', about: 'About', contact: 'Contact' },
    hero: {
      title: 'Professional Plumbing & Electrical Services in Saudi Arabia',
      subtitle: 'Fast Response • Professional Technicians • Reliable Service',
      cta: 'Contact Us Now'
    },
    popularServices: {
      title: 'Our Core Services',
      plumbing: { title: 'Plumbing Services', desc: 'Pipe installation, repair & leak detection' },
      electrical: { title: 'Electrical Services', desc: 'Electrical work & lighting installation' },
      maintenance: { title: 'Maintenance & Emergency', desc: '24/7 emergency service & regular maintenance' }
    },
    allServices: {
      title: 'All Services',
      items: ['Pipe Installation & Repair', 'Water Leak Detection', 'Electrical Wiring', 'Lighting Installation', 'General Maintenance']
    },
    whyUs: {
      title: 'Why Choose Us?',
      reasons: ['Experienced Technicians', 'Fast Response Time', 'High-Quality Materials', 'Competitive Pricing', 'Serving Saudi Arabia']
    },
    contact: {
      title: 'Contact Us',
      form: { name: 'Name', phone: 'Phone Number', message: 'Message', submit: 'Submit' },
      whatsapp: 'Contact us on WhatsApp',
      mapTitle: 'Our Location'
    },
    footer: { company: 'Faisal Mubarak Plumbing & Electrical Services', desc: 'Professional plumbing and electrical services', rights: 'All rights reserved' }
  }
};

export default function HomePage() {
  const [lang, setLang] = useState<Language>('ar');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = translations[lang];
  const isRTL = lang === 'ar';

  const toggleLanguage = () => {
    setLang(lang === 'ar' ? 'en' : 'ar');
    document.documentElement.setAttribute('lang', lang === 'ar' ? 'en' : 'ar');
    document.documentElement.setAttribute('dir', lang === 'ar' ? 'ltr' : 'rtl');
  };

  return (
    <div className={`min-h-screen ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Navbar */}
      <nav className="bg-primary-600 text-white fixed w-full top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-lg sm:text-xl font-bold truncate max-w-xs sm:max-w-md">
              {t.companyName}
            </div>
            <div className="hidden md:flex items-center space-x-8 space-x-reverse">
              <a href="#home" className="hover:text-primary-200 transition">{t.nav.home}</a>
              <a href="#services" className="hover:text-primary-200 transition">{t.nav.services}</a>
              <a href="#about" className="hover:text-primary-200 transition">{t.nav.about}</a>
              <a href="#contact" className="hover:text-primary-200 transition">{t.nav.contact}</a>
              <button onClick={toggleLanguage} className="px-4 py-2 bg-white text-primary-600 rounded-lg hover:bg-primary-50 transition font-medium">
                {lang === 'ar' ? 'EN' : 'عر'}
              </button>
            </div>
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden">
              {mobileMenuOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
            </button>
          </div>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden bg-primary-700 px-4 pt-2 pb-4 space-y-2">
            <a href="#home" className="block py-2 hover:bg-primary-600 rounded px-3">{t.nav.home}</a>
            <a href="#services" className="block py-2 hover:bg-primary-600 rounded px-3">{t.nav.services}</a>
            <a href="#about" className="block py-2 hover:bg-primary-600 rounded px-3">{t.nav.about}</a>
            <a href="#contact" className="block py-2 hover:bg-primary-600 rounded px-3">{t.nav.contact}</a>
            <button onClick={toggleLanguage} className="w-full text-center py-2 bg-white text-primary-600 rounded-lg mt-2 font-medium">
              {lang === 'ar' ? 'English' : 'عربي'}
            </button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-16 px-4 bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            {t.hero.title}
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8">
            {t.hero.subtitle}
          </p>
          <a href="#contact" className="inline-block px-8 py-4 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition text-lg font-medium shadow-lg">
            {t.hero.cta}
          </a>
        </div>
      </section>

      {/* Popular Services */}
      <section id="services" className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            {t.popularServices.title}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition">
              <WrenchScrewdriverIcon className="h-16 w-16 text-primary-600 mb-4 mx-auto" />
              <h3 className="text-2xl font-bold text-gray-900 mb-3 text-center">
                {t.popularServices.plumbing.title}
              </h3>
              <p className="text-gray-700 text-center">
                {t.popularServices.plumbing.desc}
              </p>
            </div>
            <div className="bg-gradient-to-br from-secondary-50 to-secondary-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition">
              <BoltIcon className="h-16 w-16 text-secondary-600 mb-4 mx-auto" />
              <h3 className="text-2xl font-bold text-gray-900 mb-3 text-center">
                {t.popularServices.electrical.title}
              </h3>
              <p className="text-gray-700 text-center">
                {t.popularServices.electrical.desc}
              </p>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition">
              <PhoneIcon className="h-16 w-16 text-orange-600 mb-4 mx-auto" />
              <h3 className="text-2xl font-bold text-gray-900 mb-3 text-center">
                {t.popularServices.maintenance.title}
              </h3>
              <p className="text-gray-700 text-center">
                {t.popularServices.maintenance.desc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* All Services */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            {t.allServices.title}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {t.allServices.items.map((service, i) => (
              <div key={i} className="bg-white rounded-lg p-4 shadow hover:shadow-md transition border border-gray-200">
                <p className="text-gray-800 font-medium text-center">• {service}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="about" className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            {t.whyUs.title}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.whyUs.reasons.map((reason, i) => (
              <div key={i} className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-xl p-6 shadow-md text-center">
                <p className="text-lg font-semibold text-gray-800">✓ {reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Location */}
      <section id="contact" className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            {t.contact.title}
          </h2>
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <form className="space-y-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">{t.contact.form.name}</label>
                  <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">{t.contact.form.phone}</label>
                  <input type="tel" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">{t.contact.form.message}</label>
                  <textarea rows={4} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"></textarea>
                </div>
                <button type="submit" className="w-full px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition font-medium text-lg">
                  {t.contact.form.submit}
                </button>
              </form>
              <div className="mt-6">
                <a href="https://wa.me/966500000000" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-secondary-600 text-white rounded-lg hover:bg-secondary-700 transition font-medium">
                  <ChatBubbleLeftRightIcon className="h-6 w-6" />
                  {t.contact.whatsapp}
                </a>
              </div>
            </div>
            {/* Google Maps */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{t.contact.mapTitle}</h3>
              <div className="bg-white rounded-2xl p-2 shadow-lg h-96">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3623.986!2d46.6753!3d24.7136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDQyJzQ5LjAiTiA0NsKwNDAnMzEuMSJF!5e0!3m2!1sen!2ssa!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0, borderRadius: '1rem' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
          {/* Social Media */}
          <div className="mt-12 flex justify-center gap-6">
            <a href="https://wa.me/966500000000" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-secondary-600 hover:bg-secondary-700 text-white rounded-full flex items-center justify-center transition shadow-lg">
              <ChatBubbleLeftRightIcon className="h-6 w-6" />
            </a>
            <a href="#" className="w-12 h-12 bg-pink-600 hover:bg-pink-700 text-white rounded-full flex items-center justify-center transition shadow-lg">
              <span className="text-xl font-bold">IG</span>
            </a>
            <a href="#" className="w-12 h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-full flex items-center justify-center transition shadow-lg">
              <span className="text-xl font-bold">F</span>
            </a>
            <a href="#" className="w-12 h-12 bg-gray-900 hover:bg-gray-800 text-white rounded-full flex items-center justify-center transition shadow-lg">
              <span className="text-xl font-bold">X</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-3">{t.footer.company}</h3>
          <p className="text-gray-400 mb-6">{t.footer.desc}</p>
          <p className="text-gray-500">&copy; {new Date().getFullYear()} {t.footer.rights}</p>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a href="https://wa.me/966500000000" target="_blank" rel="noopener noreferrer" className="fixed bottom-6 ${isRTL ? 'left-6' : 'right-6'} w-16 h-16 bg-secondary-600 hover:bg-secondary-700 text-white rounded-full flex items-center justify-center shadow-2xl z-40 transition hover:scale-110">
        <ChatBubbleLeftRightIcon className="h-8 w-8" />
      </a>
    </div>
  );
}
