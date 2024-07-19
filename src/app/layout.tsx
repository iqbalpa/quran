import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/header/header';
import GoTopButton from '@/components/goTopButton/goTopButton';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Al - Qur'an",
  description: 'Reading Quran Online Here',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} relative bg-gray-800 text-slate-200`}
      >
        <Header />
        {children}
        <GoTopButton />
      </body>
    </html>
  );
}
