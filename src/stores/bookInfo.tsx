import {create} from 'zustand';

type BookInfoState = {
  date: string;
  title: string;
  author: string;
  genre: string;
};

type BookInfoActions = {
  setDate: () => void;
  setTitle: () => void;
  setAuthor: () => void;
  setGenre: () => void;
};

const useBookInfoStore = create<BookInfoState & BookInfoActions>(
  (set, _get) => ({
    date: new Date(),
    title: '',
    author: '',
    genre: '',
    setDate: async data => {
      set({date: data});
    },
    setTitle: async data => {
      set({title: data});
    },
    setAuthor: async data => {
      set({author: data});
    },
    setGenre: async data => {
      set({genre: data});
    },
  }),
);

export default useBookInfoStore;
