import { createClient, SupabaseClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

// Support both old format (eyJ...) and new format (sb_publishable_...)
const apiKey = supabaseAnonKey?.startsWith('sb_') 
  ? supabaseAnonKey 
  : supabaseAnonKey

// Create Supabase client with safe fallbacks for build time
// During build, if credentials are missing, use a valid-looking placeholder
// that matches Supabase's URL format to pass validation
const url = supabaseUrl || 'https://abcdefghijklmnop.supabase.co'
const key = apiKey || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0'

let supabase: SupabaseClient

try {
  supabase = createClient(url, key, {
    auth: {
      persistSession: typeof window !== 'undefined' && !!supabaseUrl && !!supabaseAnonKey,
      autoRefreshToken: typeof window !== 'undefined' && !!supabaseUrl && !!supabaseAnonKey,
      detectSessionInUrl: typeof window !== 'undefined' && !!supabaseUrl && !!supabaseAnonKey,
    },
  })
} catch (error) {
  // If client creation fails, create a minimal client
  // This should not happen with valid URL format, but provides a fallback
  supabase = createClient(url, key)
}

export { supabase }

// Warn if credentials are missing (only in browser, not during build)
if (typeof window !== 'undefined' && (!supabaseUrl || !supabaseAnonKey)) {
  console.warn(
    'Supabase credentials not found. Please set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY in your environment variables.'
  )
  console.warn(
    'Get these from: Supabase Dashboard → Project Settings → API'
  )
}
