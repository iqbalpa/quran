'use client';

import { getSurahByNomor } from '@/api/api';
import { ScrollArea } from '@/components/ui/scroll-area';
import { DetailSurah } from '@/constant/surah.constant';
import { Play } from 'lucide-react';
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
    return null;
  }

  return (
    <div className="flex h-full max-h-screen flex-col overflow-y-auto pb-4 pt-16">
      <div className="flex flex-col items-center pt-20 md:pt-10">
        <h1 className="text-xl font-bold">
          {surah.namaLatin} - {surah.nama}
        </h1>
        <p>
          {surah.jumlahAyat} ayat - {surah.arti} - {surah.tempatTurun}
        </p>
      </div>
      <ScrollArea className="mt-5 flex flex-col items-center gap-3 overflow-y-auto px-4 pb-5 md:px-10 lg:px-14 xl:px-20">
        {surah.ayat.map((ayat, _index) => (
          <div key={ayat.nomorAyat} className="flex w-full flex-col">
            <div className="flex w-full flex-row justify-between gap-3 text-sm md:text-base">
              <div className="flex flex-col items-center justify-start gap-2">
                <p className="text-xs md:text-sm">
                  {surah.nomor}:{ayat.nomorAyat}
                </p>
                <button
                  onClick={() => {
                    const audio = new Audio(ayat.audio[0]);
                    audio.play();
                  }}
                  className="rounded-full bg-teal-500 p-3 duration-100 hover:bg-teal-700"
                >
                  <Play />
                </button>
              </div>
              <div className="flex grow flex-col">
                <p className="text-right text-lg leading-8 md:text-xl lg:text-2xl">
                  {ayat.teksArab}
                </p>
                <p className="text-xs text-slate-300 md:text-sm">
                  {ayat.teksIndonesia}
                </p>
              </div>
            </div>
            <hr className="my-3 w-full border-t border-gray-600" />
          </div>
        ))}
      </ScrollArea>
    </div>
  );
};

export default DetailSurahPage;
