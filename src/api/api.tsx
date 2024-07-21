import axios from 'axios';
import { DetailSurah, ISurah, Tafsir } from '@/constant/surah.constant';

const BASE_URL = 'https://equran.id';

export const getAllSurah = async (): Promise<ISurah[]> => {
  const res = await axios.get(`${BASE_URL}/api/v2/surat`, {
    headers: {
      Accept: '*/*',
      'Content-Type': 'application/json',
    },
  });
  const surahs: ISurah[] = res.data.data;
  return surahs;
};

export const getSurahByNomor = async (nomor: number): Promise<DetailSurah> => {
  const res = await axios.get(`${BASE_URL}/api/v2/surat/${nomor}`, {
    headers: {
      Accept: '*/*',
      'Content-Type': 'application/json',
    },
  });
  const surah: DetailSurah = res.data.data;
  return surah;
};

export const getTafsirByNomor = async (nomor: number): Promise<Tafsir[]> => {
  const res = await axios.get(`${BASE_URL}/api/v2/tafsir/${nomor}`, {
    headers: {
      Accept: '*/*',
      'Content-Type': 'application/json',
    },
  });
  const tafsir: Tafsir[] = res.data.data.tafsir;
  return tafsir;
};
