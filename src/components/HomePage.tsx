"use client";

import { useState } from "react";
import {
  Bars3Icon,
  XMarkIcon,
  WrenchScrewdriverIcon,
  BoltIcon,
  PhoneIcon,
  Cog6ToothIcon,
  ShieldCheckIcon,
  ClockIcon,
  BuildingOffice2Icon,
  FireIcon,
  StarIcon,
  MapPinIcon,
  CreditCardIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";
import { ChatBubbleLeftRightIcon } from "@heroicons/react/24/solid";

type Language = "ar" | "en";

const translations = {
  ar: {
    companyName: "مؤسسة فيصل مبارك للسباكة والكهرباء",
    nav: {
      home: "الرئيسية",
      services: "الخدمات",
      about: "من نحن",
      contact: "اتصل بنا",
    },
    hero: {
      title: "خدمات السباكة والكهرباء الاحترافية في المملكة",
      subtitle: "استجابة سريعة • فنيون محترفون • خدمة موثوقة • متاحون 24/7",
      cta: "اتصل بنا الآن",
      emergency: "⚡ خدمات طوارئ متوفرة على مدار الساعة",
    },
    popularServices: {
      title: "خدماتنا الأساسية",
      subtitle: "نلتزم بمعايير كود البناء السعودي ومواصفات الهيئة السعودية للكهرباء",
      items: [
        {
          title: "خدمات السباكة",
          desc: "تركيب وإصلاح الأنابيب، كشف التسربات بأحدث الأجهزة، صيانة شبكات المياه وفقاً لمعايير المياه الوطنية",
          price: "ابتداءً من 150 ريال",
          img: "/services/plumbing.jpg",
        },
        {
          title: "خدمات الكهرباء",
          desc: "أعمال كهربائية معتمدة، تركيب الإضاءة، توصيلات آمنة متوافقة مع كود الكهرباء السعودي ومعايير SEC",
          price: "ابتداءً من 200 ريال",
          img: "/services/electrical.jpg",
        },
        {
          title: "صيانة وطوارئ 24/7",
          desc: "خدمات طوارئ فورية على مدار الساعة، صيانة دورية، استجابة سريعة لأي مشكلة في أي وقت",
          price: "ابتداءً من 180 ريال",
          img: "/services/maintenance.jpg",
        },
        {
          title: "تركيب سخانات",
          desc: "تركيب وصيانة سخانات المياه بجميع الأنواع، ضمان شامل، توفير في الطاقة",
          price: "ابتداءً من 250 ريال",
          img: "/services/water-heaters.jpg",
        },
        {
          title: "شبكات المياه",
          desc: "تصميم وتنفيذ شبكات المياه للمنازل والمباني، اختبار ضغط، ضمان عدم التسرب",
          price: "ابتداءً من 500 ريال",
          img: "/services/water-network.jpg",
        },
        {
          title: "تركيب مولدات",
          desc: "تركيب وصيانة مولدات الكهرباء، توصيلات آمنة، صيانة دورية",
          price: "ابتداءً من 800 ريال",
          img: "/services/generators.jpg",
        },
      ],
    },
    whyUs: {
      title: "لماذا تختارنا؟",
      items: [
        { icon: ShieldCheckIcon, text: "فنيون معتمدون وذوو خبرة" },
        { icon: ClockIcon, text: "استجابة فورية خلال 30 دقيقة" },
        { icon: Cog6ToothIcon, text: "مواد عالية الجودة ومعتمدة" },
        { icon: StarIcon, text: "أسعار تنافسية وشفافة" },
        { icon: BuildingOffice2Icon, text: "خدماتنا في جميع أنحاء المملكة" },
        { icon: FireIcon, text: "خدمات طوارئ 24/7 بدون توقف" },
      ],
    },
    serviceAreas: {
      title: "مناطق خدماتنا",
      cities: [
        "الرياض",
        "جدة",
        "الدمام",
        "مكة المكرمة",
        "المدينة المنورة",
        "الخبر",
        "الطائف",
        "تبوك",
        "القصيم",
        "أبها",
        "حائل",
        "نجران",
      ],
    },
    paymentMethods: {
      title: "طرق الدفع المتاحة",
      methods: [
        "نقداً",
        "تحويل بنكي",
        "مدى",
        "فيزا - ماستركارد",
        "Apple Pay",
        "STC Pay",
      ],
    },
    contact: {
      title: "اتصل بنا",
      form: {
        name: "الاسم",
        phone: "رقم الهاتف",
        message: "الرسالة",
        submit: "إرسال",
      },
      whatsapp: "تواصل عبر واتساب",
      mapTitle: "موقعنا",
    },
    footer: {
      company: "مؤسسة فيصل مبارك للسباكة والكهرباء",
      desc: "خدمات احترافية في السباكة والكهرباء متوافقة مع المعايير السعودية",
      rights: "جميع الحقوق محفوظة",
    },
  },
  en: {
    companyName: "Faisal Mubarak Plumbing & Electrical Services",
    nav: {
      home: "Home",
      services: "Services",
      about: "About",
      contact: "Contact",
    },
    hero: {
      title: "Professional Plumbing & Electrical Services in Saudi Arabia",
      subtitle: "Fast Response • Professional Technicians • Reliable Service • Available 24/7",
      cta: "Contact Us Now",
      emergency: "⚡ Emergency Services Available Around the Clock",
    },
    popularServices: {
      title: "Our Core Services",
      subtitle: "Compliant with Saudi Building Code and Saudi Electricity Company (SEC) Standards",
      items: [
        {
          title: "Plumbing Services",
          desc: "Pipe installation and repair, advanced leak detection, water network maintenance following National Water Company standards",
          price: "Starting from 150 SAR",
          img: "/services/plumbing.jpg",
        },
        {
          title: "Electrical Services",
          desc: "Certified electrical work, lighting installation, safe connections compliant with Saudi Electrical Code and SEC standards",
          price: "Starting from 200 SAR",
          img: "/services/electrical.jpg",
        },
        {
          title: "Maintenance & Emergency 24/7",
          desc: "Immediate emergency services around the clock, regular maintenance, rapid response to any issue at any time",
          price: "Starting from 180 SAR",
          img: "/services/maintenance.jpg",
        },
        {
          title: "Water Heaters",
          desc: "Installation and maintenance of all types of water heaters, comprehensive warranty, energy-efficient solutions",
          price: "Starting from 250 SAR",
          img: "/services/water-heaters.jpg",
        },
        {
          title: "Water Networks",
          desc: "Design and installation of water networks for homes and buildings, pressure testing, leak-proof guarantee",
          price: "Starting from 500 SAR",
          img: "/services/water-network.jpg",
        },
        {
          title: "Generators",
          desc: "Generator installation and maintenance, safe connections, regular servicing",
          price: "Starting from 800 SAR",
          img: "/services/generators.jpg",
        },
      ],
    },
    whyUs: {
      title: "Why Choose Us?",
      items: [
        { icon: ShieldCheckIcon, text: "Certified & Experienced Technicians" },
        { icon: ClockIcon, text: "Immediate Response Within 30 Minutes" },
        { icon: Cog6ToothIcon, text: "High-Quality Certified Materials" },
        { icon: StarIcon, text: "Competitive & Transparent Pricing" },
        { icon: BuildingOffice2Icon, text: "Serving All Regions of Saudi Arabia" },
        { icon: FireIcon, text: "24/7 Non-Stop Emergency Services" },
      ],
    },
    serviceAreas: {
      title: "Our Service Areas",
      cities: [
        "Riyadh",
        "Jeddah",
        "Dammam",
        "Makkah",
        "Madinah",
        "Khobar",
        "Taif",
        "Tabuk",
        "Qassim",
        "Abha",
        "Hail",
        "Najran",
      ],
    },
    paymentMethods: {
      title: "Accepted Payment Methods",
      methods: [
        "Cash",
        "Bank Transfer",
        "Mada",
        "Visa - Mastercard",
        "Apple Pay",
        "STC Pay",
      ],
    },
    contact: {
      title: "Contact Us",
      form: {
        name: "Name",
        phone: "Phone Number",
        message: "Message",
        submit: "Submit",
      },
      whatsapp: "Contact us on WhatsApp",
      mapTitle: "Our Location",
    },
    footer: {
      company: "Faisal Mubarak Plumbing & Electrical Services",
      desc: "Professional plumbing and electrical services compliant with Saudi standards",
      rights: "All rights reserved",
    },
  },
};

export default function HomePage() {
  const [lang, setLang] = useState<Language>("ar");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = translations[lang];
  const isRTL = lang === "ar";

  const toggleLanguage = () => {
    const newLang = lang === "ar" ? "en" : "ar";
    setLang(newLang);
    document.documentElement.setAttribute("lang", newLang);
    document.documentElement.setAttribute(
      "dir",
      newLang === "ar" ? "rtl" : "ltr"
    );
  };

  return (
    <div
      className={`min-h-screen ${isRTL ? "rtl" : "ltr"} bg-gray-50`}
      dir={isRTL ? "rtl" : "ltr"}
    >
      {/* Navbar */}
      <nav className="bg-primary-600 text-white fixed w-full top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-lg sm:text-xl font-bold truncate max-w-xs sm:max-w-md">
              {t.companyName}
            </div>
            <div className="hidden md:flex items-center space-x-8 space-x-reverse">
              <a href="#home" className="hover:text-primary-200 transition">
                {t.nav.home}
              </a>
              <a href="#services" className="hover:text-primary-200 transition">
                {t.nav.services}
              </a>
              <a href="#about" className="hover:text-primary-200 transition">
                {t.nav.about}
              </a>
              <a href="#contact" className="hover:text-primary-200 transition">
                {t.nav.contact}
              </a>
              <button
                onClick={toggleLanguage}
                className="px-4 py-2 bg-white text-primary-600 rounded-lg hover:bg-primary-50 transition font-medium"
              >
                {lang === "ar" ? "EN" : "AR"}
              </button>
            </div>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden"
            >
              {mobileMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden bg-primary-700 px-4 pt-2 pb-4 space-y-2">
            <a
              href="#home"
              className="block py-2 hover:bg-primary-600 rounded px-3"
            >
              {t.nav.home}
            </a>
            <a
              href="#services"
              className="block py-2 hover:bg-primary-600 rounded px-3"
            >
              {t.nav.services}
            </a>
            <a
              href="#about"
              className="block py-2 hover:bg-primary-600 rounded px-3"
            >
              {t.nav.about}
            </a>
            <a
              href="#contact"
              className="block py-2 hover:bg-primary-600 rounded px-3"
            >
              {t.nav.contact}
            </a>
            <button
              onClick={toggleLanguage}
              className="w-full text-center py-2 bg-white text-primary-600 rounded-lg mt-2 font-medium"
            >
              {lang === "ar" ? "English" : "عربي"}
            </button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="pt-24 pb-16 px-4 bg-gradient-to-br from-primary-50 to-secondary-50 relative overflow-hidden"
      >
        {/* Background Image Overlay */}
        <div className="absolute inset-0 opacity-10">
          <img
            src="/hero-bg.jpg"
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="bg-red-600 text-white px-6 py-3 rounded-full inline-block mb-4 font-bold animate-pulse">
            {t.hero.emergency}
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-2 relative inline-block">
            {t.hero.title}
            <span className="block w-24 h-1 bg-primary-600 mx-auto mt-2 rounded"></span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8">
            {t.hero.subtitle}
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-4 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition text-lg font-medium shadow-lg"
          >
            {t.hero.cta}
          </a>
        </div>
      </section>

      {/* Popular Services */}
      <section id="services" className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-3 relative inline-block">
            {t.popularServices.title}
            <span className="block w-20 h-1 bg-secondary-600 mx-auto mt-2 rounded"></span>
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            {t.popularServices.subtitle}
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {t.popularServices.items.map((service, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition transform hover:-translate-y-2"
              >
                <div className="relative h-48 bg-gradient-to-br from-primary-100 to-secondary-100 flex items-center justify-center">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = "none";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {service.desc}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <span className="text-primary-600 font-bold text-lg">
                      {service.price}
                    </span>
                    <CheckCircleIcon className="h-6 w-6 text-green-500" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 px-4 bg-gradient-to-br from-primary-50 to-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12 relative inline-block">
            {t.serviceAreas.title}
            <span className="block w-20 h-1 bg-primary-600 mx-auto mt-2 rounded"></span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {t.serviceAreas.cities.map((city, i) => (
              <div
                key={i}
                className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition text-center flex flex-col items-center"
              >
                <MapPinIcon className="h-8 w-8 text-primary-600 mb-2" />
                <span className="font-semibold text-gray-800">{city}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="about" className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12 relative inline-block">
            {t.whyUs.title}
            <span className="block w-20 h-1 bg-primary-600 mx-auto mt-2 rounded"></span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {t.whyUs.items.map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-6 shadow-md flex flex-col items-center text-center hover:shadow-xl transition transform hover:-translate-y-1"
              >
                <item.icon className="h-12 w-12 text-primary-600 mb-4" />
                <p className="text-lg font-semibold text-gray-800">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Methods */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12 relative inline-block">
            {t.paymentMethods.title}
            <span className="block w-20 h-1 bg-secondary-600 mx-auto mt-2 rounded"></span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {t.paymentMethods.methods.map((method, i) => (
              <div
                key={i}
                className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-xl p-6 shadow-md hover:shadow-lg transition flex flex-col items-center text-center"
              >
                <CreditCardIcon className="h-10 w-10 text-primary-600 mb-3" />
                <span className="font-semibold text-gray-800">{method}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Location */}
      <section id="contact" className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12 relative inline-block">
            {t.contact.title}
            <span className="block w-20 h-1 bg-primary-600 mx-auto mt-2 rounded"></span>
          </h2>
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <form className="space-y-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    {t.contact.form.name}
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    {t.contact.form.phone}
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    {t.contact.form.message}
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition font-medium text-lg"
                >
                  {t.contact.form.submit}
                </button>
              </form>
              <div className="mt-6">
                <a
                  href="https://wa.me/966500000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-secondary-600 text-white rounded-lg hover:bg-secondary-700 transition font-medium"
                >
                  <ChatBubbleLeftRightIcon className="h-6 w-6" />
                  {t.contact.whatsapp}
                </a>
              </div>
            </div>
            {/* Google Maps */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {t.contact.mapTitle}
              </h3>
              <div className="relative rounded-2xl overflow-hidden shadow-lg h-96 cursor-pointer">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3623.986!2d46.6753!3d24.7136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDQyJzQ5LjAiTiA0NsKwNDAnMzEuMSJF!5e0!3m2!1sen!2ssa!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                <a
                  href="https://www.google.com/maps/place/24.7136,46.6753"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0"
                >
                  <span className="sr-only">Open Google Maps</span>
                </a>
              </div>
            </div>
          </div>
          {/* Social Media */}
          <div className="mt-12 flex justify-center gap-6">
            <a
              href="https://wa.me/966500000000"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-secondary-600 hover:bg-secondary-700 text-white rounded-full flex items-center justify-center transition shadow-lg"
            >
              <ChatBubbleLeftRightIcon className="h-6 w-6" />
            </a>
            <a
              href="#"
              className="w-12 h-12 bg-pink-600 hover:bg-pink-700 text-white rounded-full flex items-center justify-center transition shadow-lg"
            >
              <span className="text-xl font-bold">IG</span>
            </a>
            <a
              href="#"
              className="w-12 h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-full flex items-center justify-center transition shadow-lg"
            >
              <span className="text-xl font-bold">F</span>
            </a>
            <a
              href="#"
              className="w-12 h-12 bg-gray-900 hover:bg-gray-800 text-white rounded-full flex items-center justify-center transition shadow-lg"
            >
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
          <p className="text-gray-500">
            &copy; {new Date().getFullYear()} {t.footer.rights}
          </p>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/966500000000"
        target="_blank"
        rel="noopener noreferrer"
        className={`fixed bottom-6 ${
          isRTL ? "left-6" : "right-6"
        } w-16 h-16 bg-secondary-600 hover:bg-secondary-700 text-white rounded-full flex items-center justify-center shadow-2xl z-40 transition hover:scale-110`}
      >
        <ChatBubbleLeftRightIcon className="h-8 w-8" />
      </a>
    </div>
  );
}
