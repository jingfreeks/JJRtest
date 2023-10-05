import {useMutation, useQueryClient} from 'react-query';

import {supabase} from '../utils/supabase';

export function usePostBookInfo() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({
      title,
      author,
      date,
      genre,
    }: {
      title: string;
      title: string;
      date: interestedTechOrder;
      date: boolean;
    }) => {
      const {data, error} = await supabase
        .from('bookinfo')
        .insert([
          {
            title: title,
            author: author,
            publishedDate: date,
            genre: genre,
          },
        ])
        .select();
      if (data) {
        return data;
      }
      if (error) {
        throw error;
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
