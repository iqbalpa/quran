import Link from 'next/link';
import React from 'react';

const Header: React.FC = () => {
  return (
    <div className="flex flex-row items-center justify-between bg-gray-900 p-5">
      <Link href="/" className="text-xl font-bold">
        Al - Quran
      </Link>
    </div>
  );
};

export default Header;