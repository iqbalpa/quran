'use client';

import { getAllSurah } from '@/api/api';
import { ISurah } from '@/constant/surah.constant';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { ScrollArea } from '../ui/scroll-area';

const Sidebar: React.FC = () => {
  const [surahs, setSurahs] = useState<ISurah[]>([]);
  const pathname = usePathname();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getAllSurah();
        console.log(res);
        setSurahs(res);
      } catch (e) {
        console.log('failed to fetch the surah');
      }
    };
    fetchData();
  }, []);

  if (pathname === '/') {
    return null;
  }

  return (
    <ScrollArea>
      <div className="hidden flex-col gap-2 p-4 md:flex">
        {surahs.map((surah) => {
          const isActive = pathname === `/${surah.nomor}`;

          return (
            <Link
              href={`/${surah.nomor}`}
              key={surah.nomor}
              className={`group flex w-[250px] flex-row justify-between rounded-md border-[1px] border-slate-400 bg-slate-700 p-4 duration-200 hover:cursor-pointer ${
                isActive ? 'border-teal-300' : 'hover:border-teal-300'
              }`}
            >
              <div className="flex flex-row items-center gap-3">
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 ${
                    isActive ? 'bg-teal-300' : 'group-hover:bg-teal-300'
                  }`}
                >
                  <p
                    className={`font-bold ${
                      isActive ? 'text-slate-900' : 'group-hover:text-slate-900'
                    }`}
                  >
                    {surah.nomor}
                  </p>
                </div>

                <div>
                  <p className="font-semibold">{surah.namaLatin}</p>
                  <p
                    className={`text-sm text-slate-400 ${
                      isActive ? 'text-teal-300' : 'group-hover:text-teal-300'
                    }`}
                  >
                    {surah.arti}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p>{surah.nama}</p>
                <p
                  className={`text-sm text-slate-400 ${
                    isActive ? 'text-teal-300' : 'group-hover:text-teal-300'
                  }`}
                >
                  {surah.jumlahAyat} ayat
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </ScrollArea>
  );
};

export default Sidebar;
