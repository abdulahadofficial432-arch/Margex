import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn(
    'Supabase credentials not found. Please set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY in your .env.local file.'
  )
  console.warn(
    'Get these from: Supabase Dashboard → Project Settings → API'
  )
}

// Support both old format (eyJ...) and new format (sb_publishable_...)
const apiKey = supabaseAnonKey.startsWith('sb_') 
  ? supabaseAnonKey 
  : supabaseAnonKey

export const supabase = createClient(supabaseUrl, apiKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true,
  },
})
