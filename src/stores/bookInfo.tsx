import {create} from 'zustand';
import {Job} from '@/api/fixlers/models';
import JobList from '@/api/methods/jobsList';

type BookInfoState = {
  jobs: Job[];
  isLoadingJobs: boolean;
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

// const [date, setDate] = useState<string>(new Date());
// const [open, setOpen] = useState<boolean>(false);
// const [title, setTitle] = useState<string>('');
// const [author, setAuthor] = useState<string>('');
// const [genre, setGenre] = useState<string>('');
