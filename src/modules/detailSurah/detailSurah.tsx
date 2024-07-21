'use client';

import { getSurahByNomor, getTafsirByNomor } from '@/api/api';
import { ScrollArea } from '@/components/ui/scroll-area';
import { DetailSurah, Tafsir } from '@/constant/surah.constant';
import { BookOpen, Play } from 'lucide-react';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';

const DetailSurahPage: React.FC = () => {
  const pathname = usePathname();
  const nomorSurah = pathname.split('/')[1];
  const [surah, setSurah] = useState<DetailSurah>();
  const [tafsir, setTafsir] = useState<Tafsir[]>([]);

  useEffect(() => {
    const fetchSurah = async () => {
      try {
        const res = await getSurahByNomor(parseInt(nomorSurah));
        setSurah(res);
        const res2 = await getTafsirByNomor(parseInt(nomorSurah));
        setTafsir(res2);
      } catch (e) {
        console.log(`failed to fetch surah no ${nomorSurah}`);
      }
    };
    fetchSurah();
  }, [pathname]);

  if (!surah || !tafsir) {
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
                <button className="rounded-full bg-teal-500 p-3 duration-100 hover:bg-teal-700">
                  <Play size={18} />
                </button>
                <AlertDialog>
                  <AlertDialogTrigger>
                    <button className="rounded-full bg-purple-500 p-3 duration-100 hover:bg-purple-700">
                      <BookOpen size={18} />
                    </button>
                  </AlertDialogTrigger>
                  <AlertDialogContent className="flex h-2/3 flex-col bg-slate-900 lg:max-w-screen-lg">
                    <AlertDialogHeader className="flex-shrink-0">
                      <AlertDialogTitle>
                        Tafsir {surah.namaLatin} Ayat {ayat.nomorAyat}
                      </AlertDialogTitle>
                    </AlertDialogHeader>
                    <ScrollArea className="flex-grow">
                      <AlertDialogDescription>
                        {tafsir[ayat.nomorAyat]?.teks}
                      </AlertDialogDescription>
                    </ScrollArea>
                    <AlertDialogCancel className="flex-shrink-0 text-slate-700 duration-150 hover:bg-slate-300 hover:text-slate-900">
                      Tutup
                    </AlertDialogCancel>
                  </AlertDialogContent>
                </AlertDialog>
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
