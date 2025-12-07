/**
 * Asset Extraction Script
 * 
 * This script helps extract assets from margex.com
 * Run with: node scripts/extract-assets.js
 * 
 * Note: You'll need to manually inspect margex.com and extract:
 * - Logo files (SVG/PNG)
 * - Images
 * - Icons
 * - Fonts
 */

const fs = require('fs')
const path = require('path')
const https = require('https')
const http = require('http')

// Configuration
const ASSETS_DIR = path.join(__dirname, '../public/assets')
const LOGO_URL = 'https://margex.com/logo.svg' // Update with actual logo URL
const IMAGE_URLS = [
  // Add image URLs from margex.com here
]

// Create assets directory if it doesn't exist
if (!fs.existsSync(ASSETS_DIR)) {
  fs.mkdirSync(ASSETS_DIR, { recursive: true })
}

// Download function
function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    const protocol = url.startsWith('https') ? https : http
    const file = fs.createWriteStream(dest)
    
    protocol.get(url, (response) => {
      if (response.statusCode === 200) {
        response.pipe(file)
        file.on('finish', () => {
          file.close()
          console.log(`Downloaded: ${dest}`)
          resolve()
        })
      } else if (response.statusCode === 301 || response.statusCode === 302) {
        // Handle redirects
        downloadFile(response.headers.location, dest).then(resolve).catch(reject)
      } else {
        fs.unlink(dest, () => {})
        reject(new Error(`Failed to download: ${url} (${response.statusCode})`))
      }
    }).on('error', (err) => {
      fs.unlink(dest, () => {})
      reject(err)
    })
  })
}

// Extract logo
async function extractLogo() {
  try {
    console.log('Extracting logo...')
    const logoPath = path.join(ASSETS_DIR, 'logo.svg')
    await downloadFile(LOGO_URL, logoPath)
    console.log('Logo extracted successfully!')
  } catch (error) {
    console.error('Error extracting logo:', error.message)
    console.log('Please manually download the logo from margex.com')
  }
}

// Extract images
async function extractImages() {
  console.log('Extracting images...')
  for (let i = 0; i < IMAGE_URLS.length; i++) {
    const url = IMAGE_URLS[i]
    const filename = path.basename(url)
    const dest = path.join(ASSETS_DIR, filename)
    
    try {
      await downloadFile(url, dest)
    } catch (error) {
      console.error(`Error downloading ${url}:`, error.message)
    }
  }
}

// Main function
async function main() {
  console.log('Starting asset extraction...')
  console.log('Note: Update LOGO_URL and IMAGE_URLS in this script with actual URLs from margex.com')
  console.log('')
  
  await extractLogo()
  await extractImages()
  
  console.log('')
  console.log('Asset extraction complete!')
  console.log('Check the public/assets directory for downloaded files.')
  console.log('')
  console.log('Next steps:')
  console.log('1. Inspect margex.com in browser DevTools')
  console.log('2. Find all image URLs in the Network tab')
  console.log('3. Update IMAGE_URLS array in this script')
  console.log('4. Run this script again')
}

main().catch(console.error)

