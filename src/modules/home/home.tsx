'use client';

import React, { useEffect, useState } from 'react';
import { getAllSurah } from '@/api/api';
import { ISurah } from '@/constant/surah.constant';
import Link from 'next/link';

const HomeModule: React.FC = () => {
  const [surahs, setSurahs] = useState<ISurah[]>([]);

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

  return (
    <div className="mt-20 md:mt-10 max-w-screen m-10 flex min-h-screen flex-col items-center">
      <h1 className="text-2xl font-bold">Baca Al-Quran Online</h1>
      <div className="mt-5 grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {surahs.map((surah, _index) => (
          <Link
            href={`/${surah.nomor}`}
            key={surah.nomor}
            className="hover:border-teal-300S group flex flex-row justify-between rounded-md border-[1px] border-slate-400 bg-slate-700 p-4 duration-200 hover:cursor-pointer hover:border-teal-300"
          >
            <div className="flex flex-row items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 group-hover:bg-teal-300">
                <p className="font-bold group-hover:text-slate-900">
                  {surah.nomor}
                </p>
              </div>

              <div>
                <p className="font-semibold">{surah.namaLatin}</p>
                <p className="text-sm text-slate-400 group-hover:text-teal-300">
                  {surah.arti}
                </p>
              </div>
            </div>
            <div className="text-right">
              <p>{surah.nama}</p>
              <p className="text-sm text-slate-400 group-hover:text-teal-300">
                {surah.jumlahAyat} ayat
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomeModule;
