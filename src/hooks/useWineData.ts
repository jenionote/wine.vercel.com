// hooks는 항상 use로 시작함
import useSWR from 'swr';
import { fetcher } from '../utils/fetcher';
import { WINE_API_ENDPOINT } from '../constants';

export const useWineData = (path: string) => {
  return useSWR(`${WINE_API_ENDPOINT}${path}`, fetcher);
}