import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/header/header';
import GoTopButton from '@/components/goTopButton/goTopButton';
import BackButton from '@/components/backButton/backButton';

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
        className={`${inter.className} flex max-h-screen flex-col bg-gray-800 text-slate-200`}
      >
        <Header />
        <main className="flex-1 overflow-auto">{children}</main>
        <GoTopButton />
        <BackButton />
      </body>
    </html>
  );
}
