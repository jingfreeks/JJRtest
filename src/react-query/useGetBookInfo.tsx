import {useQuery} from 'react-query';
import {supabase} from '../utils/supabase';

export function useGetBookInfo() {
  return useQuery({
    queryKey: ['bookinfo'],
    queryFn: async () => {
      const {data, error} = await supabase.from('bookinfo').select('*');
      if (data) {
        return data;
      }
      if (error) {
        throw error;
      }
    },
    retry: 1,
  });
}
