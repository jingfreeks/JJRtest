import {useMutation, useQueryClient} from 'react-query';

import {supabase} from '../utils/supabase';

export function useDeleteBookInfo() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({id}: {id: number}) => {
      const {data, status} = await supabase
        .from('bookinfo')
        .delete()
        .eq('id', id)
        .select();
      if (status === 204) {
        return data;
      }
    },
    onSuccess: async () => {
      queryClient.invalidateQueries({
        queryKey: ['bookinfo'],
      });
    },
    retry: 2,
  });
}
