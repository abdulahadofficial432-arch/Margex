/**
 * Start Server Script
 * Helps diagnose and start the Next.js server
 */

const { spawn } = require('child_process')
const path = require('path')

console.log('🚀 Starting Next.js Development Server...\n')
console.log('Port: 3010')
console.log('URL: http://localhost:3010\n')
console.log('='.repeat(50))
console.log('')

// Start the server
const server = spawn('npm', ['run', 'dev'], {
  stdio: 'inherit',
  shell: true,
  cwd: path.join(__dirname, '..'),
})

server.on('error', (error) => {
  console.error('❌ Error starting server:', error.message)
  console.log('\nTroubleshooting:')
  console.log('1. Make sure Node.js is installed: node --version')
  console.log('2. Install dependencies: npm install')
  console.log('3. Check if port 3010 is available')
  process.exit(1)
})

server.on('close', (code) => {
  if (code !== 0) {
    console.error(`\n❌ Server exited with code ${code}`)
    console.log('\nCheck the error messages above for details.')
  }
})

// Handle process termination
process.on('SIGINT', () => {
  console.log('\n\n🛑 Stopping server...')
  server.kill()
  process.exit(0)
})

process.on('SIGTERM', () => {
  server.kill()
  process.exit(0)
})

