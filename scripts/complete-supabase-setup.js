/**
 * Complete Supabase Setup Checker
 * Verifies all Supabase configuration is correct
 */

require('dotenv').config({ path: '.env.local' })

const fs = require('fs')
const path = require('path')

console.log('🔧 Supabase Setup Checker\n')
console.log('=' .repeat(50))

// Check .env.local exists
const envPath = path.join(__dirname, '..', '.env.local')
if (!fs.existsSync(envPath)) {
  console.error('❌ .env.local file not found!')
  console.log('\nCreating .env.local file...')
  const envContent = `NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=sb_publishable_tym8sZXcuWv2FYUpyx7tdg_zDwPJ8fD
`
  fs.writeFileSync(envPath, envContent)
  console.log('✅ Created .env.local file')
  console.log('⚠️  Please add your Project URL to NEXT_PUBLIC_SUPABASE_URL\n')
} else {
  console.log('✅ .env.local file exists')
}

// Check environment variables
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

console.log('\n📋 Configuration Status:')
console.log('-'.repeat(50))

if (supabaseKey) {
  console.log('✅ Publishable Key: Found')
  console.log(`   ${supabaseKey.substring(0, 30)}...`)
} else {
  console.log('❌ Publishable Key: Missing')
}

if (supabaseUrl && supabaseUrl.trim() !== '') {
  console.log('✅ Project URL: Found')
  console.log(`   ${supabaseUrl}`)
  
  // Validate URL format
  if (supabaseUrl.startsWith('https://') && supabaseUrl.includes('.supabase.co')) {
    console.log('✅ URL format: Valid')
  } else {
    console.log('⚠️  URL format: May be incorrect')
    console.log('   Expected format: https://xxxxx.supabase.co')
  }
} else {
  console.log('❌ Project URL: Missing')
  console.log('\n📍 How to find your Project URL:')
  console.log('   1. Go to Supabase Dashboard')
  console.log('   2. Project Settings → API (or General)')
  console.log('   3. Look for "Project URL" or "URL"')
  console.log('   4. Format: https://xxxxx.supabase.co')
  console.log('\n   Or run: npm run find-url')
}

console.log('\n' + '='.repeat(50))

// Test connection if both are present
if (supabaseUrl && supabaseKey && supabaseUrl.trim() !== '') {
  console.log('\n🧪 Testing Connection...\n')
  
  try {
    const { createClient } = require('@supabase/supabase-js')
    const supabase = createClient(supabaseUrl, supabaseKey)
    
    supabase.auth.getSession()
      .then(({ data, error }) => {
        if (error) {
          console.error('❌ Connection failed:', error.message)
          console.log('\nPossible issues:')
          console.log('  - Invalid URL or key')
          console.log('  - Project might be paused')
          console.log('  - Check Supabase dashboard')
        } else {
          console.log('✅ Supabase connection successful!')
          console.log('\n🎉 Your Supabase is ready to use!')
          console.log('\nNext steps:')
          console.log('  1. Enable Email auth in Supabase Dashboard')
          console.log('  2. Configure redirect URLs')
          console.log('  3. Run: npm run dev')
          console.log('  4. Test login at: http://localhost:3006/login')
        }
      })
      .catch((error) => {
        console.error('❌ Unexpected error:', error.message)
      })
  } catch (error) {
    console.error('❌ Error loading Supabase client:', error.message)
    console.log('\nMake sure @supabase/supabase-js is installed:')
    console.log('  npm install')
  }
} else {
  console.log('\n⚠️  Cannot test connection - missing credentials')
  console.log('\n📝 To complete setup:')
  console.log('   1. Find your Project URL in Supabase Dashboard')
  console.log('   2. Update .env.local with the URL')
  console.log('   3. Run this script again: npm run setup-check')
}

console.log('')

