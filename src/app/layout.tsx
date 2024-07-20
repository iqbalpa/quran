import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/header/header';
import GoTopButton from '@/components/goTopButton/goTopButton';
import BackButton from '@/components/backButton/backButton';
import { ScrollArea } from '@/components/ui/scroll-area';
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
        className={`${inter.className} flex h-screen flex-col overflow-hidden bg-gray-800 text-slate-200`}
      >
        <Header />
        <div className="flex flex-1 flex-row overflow-hidden">
          <main className="flex-1 overflow-y-auto">{children}</main>
          <ScrollArea className="flex-shrink-0 bg-teal-900 p-4">
            <Sidebar />
          </ScrollArea>
        </div>
        <GoTopButton />
        <BackButton />
      </body>
    </html>
  );
}
