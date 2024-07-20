import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/header/header';
import GoTopButton from '@/components/goTopButton/goTopButton';
import Sidebar from '@/components/sidebar/sidebar';

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
        className={`${inter.className} flex h-screen flex-col bg-gray-800 text-slate-200`}
      >
        <Header />
        <div className="flex flex-1 flex-row">
          <main className="flex-1 overflow-y-hidden">{children}</main>
          <div className="flex max-h-screen flex-shrink-0 overflow-hidden overflow-y-auto bg-slate-900 pb-4 pt-16">
            <Sidebar />
          </div>
        </div>
        <GoTopButton />
      </body>
    </html>
  );
}
