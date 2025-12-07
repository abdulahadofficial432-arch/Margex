/**
 * Helper script to find Supabase Project URL
 * This will help identify the Project URL from common locations
 */

console.log('🔍 Finding Supabase Project URL...\n')
console.log('The Project URL is typically in one of these formats:')
console.log('  - https://[project-ref].supabase.co')
console.log('  - https://[project-id].supabase.co\n')

console.log('📍 Where to find it in Supabase Dashboard:\n')
console.log('1. API Keys Page:')
console.log('   - Look at the top of the page')
console.log('   - Should show "Project URL" or "URL"\n')

console.log('2. Project Settings → General:')
console.log('   - Click "General" in left sidebar')
console.log('   - Project URL is displayed there\n')

console.log('3. Browser Address Bar:')
console.log('   - Check the URL when viewing your project')
console.log('   - Format: app.supabase.com/project/[project-ref]\n')

console.log('4. Connection String (if you saw it earlier):')
console.log('   - The connection string contains the hostname')
console.log('   - Example: aws-1-ap-south-1.pooler.supabase.com')
console.log('   - Your URL might be: https://[project-ref].supabase.co\n')

console.log('💡 Quick Check:')
console.log('   Your project reference might be in the breadcrumbs')
console.log('   or in the project name in the top navigation.\n')

console.log('Once you find it, update .env.local:')
console.log('   NEXT_PUBLIC_SUPABASE_URL=https://your-project-ref.supabase.co\n')

