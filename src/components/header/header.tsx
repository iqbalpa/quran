'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import Hamburger from 'hamburger-react';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

const Header: React.FC = () => {
  const [fontSize, setFontSize] = useState<string>('medium');

  const handleFontSizeChange = (size: string) => {
    setFontSize(size);
    document.documentElement.style.fontSize = size;
  };
  return (
    <div className="fixed inset-x-0 z-10 flex flex-row items-center justify-between bg-gray-900 p-5">
      <Link href="/" className="text-xl font-bold">
        Al - Quran
      </Link>
      <Sheet>
        <SheetTrigger>
          <div className="-my-4">
            <Hamburger toggled={false} />
          </div>
        </SheetTrigger>
        <SheetContent className="bg-slate-900">
          <SheetHeader>
            <SheetTitle className="text-white">Ukuran Teks</SheetTitle>
            <SheetDescription>
              <div className="flex items-center justify-start space-x-2">
                <button
                  onClick={() => handleFontSizeChange('small')}
                  className={`rounded px-3 py-1 text-sm ${
                    fontSize === 'small' ? 'bg-blue-500' : 'bg-gray-700'
                  } text-white`}
                >
                  S
                </button>
                <button
                  onClick={() => handleFontSizeChange('medium')}
                  className={`rounded px-3 py-1 text-base ${
                    fontSize === 'medium' ? 'bg-blue-500' : 'bg-gray-700'
                  } text-white`}
                >
                  M
                </button>
                <button
                  onClick={() => handleFontSizeChange('large')}
                  className={`rounded px-3 py-1 text-lg ${
                    fontSize === 'large' ? 'bg-blue-500' : 'bg-gray-700'
                  } text-white`}
                >
                  L
                </button>
              </div>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Header;
