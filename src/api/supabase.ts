import { createClient } from '@supabase/supabase-js'

// For process.env files with vite in front end, import.meta.env must be used
// The public variables must start with VITE_

export const supabase = createClient(
  import.meta.env.VITE_PUBLIC_SUPABASE_URL,
  import.meta.env.VITE_PUBLIC_SUPABASE_ANON_KEY
)
