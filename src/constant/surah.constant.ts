export interface ISurah {
  nomor: number;
  nama: string;
  namaLatin: string;
  jumlahAyat: number;
  tempatTurun: string;
  arti: string;
  deskripsi: string;
  audioFull: { [key: string]: string };
}

export interface DetailSurah {
  arti: string;
  audioFull: { [key: number]: string };
  ayat: Ayat[];
  deskripsi: string;
  jumlahAyat: number;
  nama: string;
  namaLatin: string;
  nomor: number;
  suratSebelumnya: BriefSurah | boolean;
  suratSelanjutnya: BriefSurah | boolean;
  tempatTurun: string;
}

interface Ayat {
  nomorAyat: number;
  teksArab: string;
  teksIndonesia: string;
  teksLatin: string;
  audio: { [key: number]: string };
}

interface BriefSurah {
  jumlahAyat: number;
  nama: string;
  namaLatin: string;
  nomor: number;
}
