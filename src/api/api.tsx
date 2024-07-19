import axios from 'axios';
import { DetailSurah, ISurah } from '@/constant/surah.constant';

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
