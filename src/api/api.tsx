import { ISurah } from '@/constant/surah.constant';
import axios from 'axios';

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
