import './globals.css';
import type { Metadata } from 'next';
import { Tajawal } from 'next/font/google';

const tajawal = Tajawal({ 
  subsets: ['arabic', 'latin'],
  weight: ['300', '400', '500', '700', '900'],
  variable: '--font-tajawal',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Faisal Mubarak Plumbing & Electrical Services | مؤسسة فيصل مبارك للسباكة والكهرباء',
  description: 'Professional plumbing and electrical services in Saudi Arabia. Fast response, experienced technicians, quality work. خدمات السباكة والكهرباء الاحترافية في المملكة العربية السعودية.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${tajawal.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
