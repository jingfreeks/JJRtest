import 'react-native-url-polyfill/auto';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {createClient} from '@supabase/supabase-js';

const supabaseUrl = 'https://lzdzuqkdivoyfeibzbqr.supabase.co';
const supabaseAnonKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx6ZHp1cWtkaXZveWZlaWJ6YnFyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTY0NzQ2MDQsImV4cCI6MjAxMjA1MDYwNH0._BDmcJDNFxCNi72d5u5pbECNZ9otnB8R03gWLDBZVlk';

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
