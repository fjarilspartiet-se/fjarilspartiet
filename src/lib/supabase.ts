import { createClient } from '@supabase/supabase-js';

// Get environment variables
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// Debug logging
console.log('Supabase URL available:', !!supabaseUrl);
console.log('Supabase Anon Key available:', !!supabaseAnonKey);

// Create Supabase client
export const supabase = createClient(
  supabaseUrl || '',
  supabaseAnonKey || ''
);

// Debug log
console.log('Supabase client created:', !!supabase);
