import { useQuery } from 'react-query';

import { axios } from '@/lib/axios';
import { ExtractFnReturnType, QueryConfig } from '@/lib/react-query';

import { Freebook } from '../types';

export const getFreebooks = ({ perPage }: { perPage: number }): Promise<Freebook[]> => {
  return axios
    .get('/freebooks', {
      params: {
        perPage,
      },
    })
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      return error;
    });
};

type QueryFnType = typeof getFreebooks;

type UseFreebooksOptions = {
  perPage: number;
  config?: QueryConfig<QueryFnType>;
};

export const useFreebooks = ({ perPage, config }: UseFreebooksOptions) => {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    queryKey: ['freebooks', perPage],
    queryFn: () => getFreebooks({ perPage }),
    ...config,
  });
};
