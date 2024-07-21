import React from 'react';
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { BookOpen } from 'lucide-react';
import { ScrollArea } from '../ui/scroll-area';

interface ITafsirDialog {
  namaSurah: string;
  nomorAyat: number;
  teksTafsir: string;
}

const TasfirDialog: React.FC<ITafsirDialog> = ({
  namaSurah,
  nomorAyat,
  teksTafsir,
}) => {
  return (
    <AlertDialog>
      <AlertDialogTrigger>
        <button className="rounded-full bg-purple-500 p-3 duration-100 hover:bg-purple-700">
          <BookOpen size={18} />
        </button>
      </AlertDialogTrigger>
      <AlertDialogContent className="flex h-2/3 flex-col bg-slate-900 lg:max-w-screen-lg">
        <AlertDialogHeader className="flex-shrink-0">
          <AlertDialogTitle>
            Tafsir {namaSurah} Ayat {nomorAyat}
          </AlertDialogTitle>
        </AlertDialogHeader>
        <ScrollArea className="flex-grow">
          <AlertDialogDescription>{teksTafsir}</AlertDialogDescription>
        </ScrollArea>
        <AlertDialogCancel className="flex-shrink-0 text-slate-700 duration-150 hover:bg-slate-300 hover:text-slate-900">
          Tutup
        </AlertDialogCancel>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default TasfirDialog;
