/**
 * Test Supabase Connection
 * Run with: node scripts/test-supabase.js
 */

require('dotenv').config({ path: '.env.local' })

const { createClient } = require('@supabase/supabase-js')

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

console.log('Testing Supabase Connection...\n')

if (!supabaseKey) {
  console.error('❌ Error: Missing Supabase publishable key!')
  console.log('\nPlease set NEXT_PUBLIC_SUPABASE_ANON_KEY in .env.local')
  process.exit(1)
}

if (!supabaseUrl || supabaseUrl.trim() === '') {
  console.error('❌ Error: Missing Supabase Project URL!')
  console.log('\nPlease set NEXT_PUBLIC_SUPABASE_URL in .env.local')
  console.log('\n📍 How to find your Project URL:')
  console.log('   1. Go to Supabase Dashboard')
  console.log('   2. Project Settings → API (or General)')
  console.log('   3. Look for "Project URL" or "URL"')
  console.log('   4. Format: https://xxxxx.supabase.co')
  console.log('\n   Or run: npm run find-url')
  process.exit(1)
}

console.log('✓ Found Supabase URL:', supabaseUrl)
console.log('✓ Found Supabase Key:', supabaseKey.substring(0, 30) + '...')
console.log('\nTesting connection...\n')

const supabase = createClient(supabaseUrl, supabaseKey)

// Test connection by fetching auth settings
supabase.auth.getSession()
  .then(({ data, error }) => {
    if (error) {
      console.error('❌ Connection failed:', error.message)
      console.log('\nPossible issues:')
      console.log('  - Invalid URL or key')
      console.log('  - Project might be paused')
      console.log('  - Check Supabase dashboard')
      process.exit(1)
    }
    
    console.log('✅ Supabase connection successful!')
    console.log('\nYour Supabase is ready to use.')
    console.log('\nNext steps:')
    console.log('  1. Enable Email auth in Supabase Dashboard')
    console.log('  2. Configure redirect URLs')
    console.log('  3. Test login/signup on your site')
  })
  .catch((error) => {
    console.error('❌ Unexpected error:', error.message)
    process.exit(1)
  })

