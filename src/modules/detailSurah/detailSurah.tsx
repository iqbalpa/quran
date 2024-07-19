'use client';

import { getSurahByNomor } from '@/api/api';
import { DetailSurah } from '@/constant/surah.constant';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const DetailSurahPage: React.FC = () => {
  const pathname = usePathname();
  const nomorSurah = pathname.split('/')[1];
  const [surah, setSurah] = useState<DetailSurah>();

  useEffect(() => {
    const fetchSurah = async () => {
      try {
        const res = await getSurahByNomor(parseInt(nomorSurah));
        console.log(res);
        setSurah(res);
      } catch (e) {
        console.log(`failed to fetch surah no ${nomorSurah}`);
      }
    };
    fetchSurah();
  }, [pathname]);

  if (!surah) {
    return;
  }

  return (
    <div className="mt-10 flex flex-col items-center pb-20">
      <h1 className="text-xl font-bold">
        {surah.namaLatin} - {surah.nama}
      </h1>
      <p>
        {surah.jumlahAyat} ayat - {surah.arti} - {surah.tempatTurun}
      </p>
      <div className="max-w-screen mt-5 flex flex-col items-center gap-3 px-4 md:px-10 lg:px-14 xl:px-20">
        {surah.ayat.map((ayat, _index) => (
          <div
            key={ayat.nomorAyat}
            className="flex w-full flex-col gap-1 text-sm md:text-base"
          >
            <div className="flex flex-row items-center justify-between">
              <p className="text-xs md:text-sm">
                {surah.nomor}:{ayat.nomorAyat}
              </p>
              <p className="text-right leading-loose">{ayat.teksArab}</p>
            </div>
            <p className="text-xs text-slate-300 md:text-sm">
              {ayat.teksIndonesia}
            </p>
            {_index < surah.ayat.length - 1 && (
              <hr className="my-3 w-full border-t border-gray-600" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DetailSurahPage;
