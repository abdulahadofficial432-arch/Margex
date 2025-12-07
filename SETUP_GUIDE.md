# Setup Guide - Pixel-Perfect Margex Site

This guide will help you complete the pixel-perfect setup of your Margex site.

## 1. Extract Assets from margex.com

### Method 1: Using Browser DevTools

1. Open margex.com in Chrome/Firefox
2. Open DevTools (F12)
3. Go to Network tab → Filter by "Img"
4. Refresh the page
5. Right-click on images → Save As
6. Save to `public/assets/` directory

### Method 2: Using the Extraction Script

1. Inspect margex.com to find image URLs
2. Update `scripts/extract-assets.js` with actual URLs
3. Run: `npm run extract-assets`

### Assets to Extract:

- **Logo**: Look for logo in header (usually SVG or PNG)
  - Save as: `public/assets/logo.svg` or `public/logo.png`
- **Hero Images**: Background images, illustrations
- **Feature Icons**: If custom icons are used
- **Testimonial Images**: User avatars
- **Product Screenshots**: Trading interface screenshots

### Update Logo in Header

After extracting logo, update `components/Header.tsx`:

```tsx
<Link href="/" className="flex items-center">
  <img src="/assets/logo.svg" alt="Margex" className="h-8" />
</Link>
```

## 2. Fine-Tune Colors and Spacing

### Extract Exact Colors

1. Open margex.com in browser
2. Use browser DevTools color picker
3. Inspect elements to get exact hex codes
4. Update `styles/tokens.css` with exact values

### Measure Spacing

1. Use browser DevTools to inspect elements
2. Check computed styles for padding/margin
3. Update spacing values in `styles/tokens.css`

### Common Elements to Check:

- Header height and padding
- Button padding and border radius
- Card spacing
- Section padding
- Grid gaps

## 3. Set Up Supabase Authentication

### Step 1: Create Supabase Project

1. Go to [supabase.com](https://supabase.com)
2. Sign up/Login
3. Create new project
4. Wait for project to initialize

### Step 2: Get Credentials

1. Go to Project Settings → API
2. Copy:
   - Project URL → `NEXT_PUBLIC_SUPABASE_URL`
   - anon/public key → `NEXT_PUBLIC_SUPABASE_ANON_KEY`

### Step 3: Configure Environment Variables

Create `.env.local`:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

### Step 4: Enable Email Auth

1. Go to Authentication → Providers
2. Enable "Email" provider
3. Configure email templates (optional)

### Step 5: Set Redirect URLs

1. Go to Authentication → URL Configuration
2. Add your site URL to "Site URL"
3. Add redirect URLs:
   - `http://localhost:3006/**` (development)
   - `https://yourdomain.com/**` (production)

## 4. Connect Real Market Data

### Current Setup

The project uses CoinGecko API (free tier) for market data.

### API Configuration

No API key needed for CoinGecko free tier. The integration is already set up in:
- `lib/market-data.ts` - API functions
- `hooks/useMarketData.ts` - React hooks

### Alternative APIs

If you want to use a different API:

1. **Binance API** (for more accurate trading data):
   - Update `lib/market-data.ts`
   - Use Binance WebSocket for real-time data

2. **Custom API**:
   - Update API endpoints in `lib/market-data.ts`
   - Add authentication if needed

### Testing Market Data

1. Start dev server: `npm run dev`
2. Visit `/markets` page
3. Check browser console for API errors
4. Data should update every 60 seconds

## 5. Verify Pixel-Perfect Match

### Side-by-Side Comparison

1. Open margex.com in one browser window
2. Open your site (localhost:3000) in another
3. Compare:
   - Colors (use color picker)
   - Spacing (use DevTools ruler)
   - Typography (font size, weight, line-height)
   - Layout (grid, flexbox)
   - Interactions (hover, focus states)

### Tools for Comparison

- **Browser DevTools**: Inspect and compare CSS
- **Figma/Sketch**: If you have design files
- **Screenshot Comparison**: Use tools like Percy or Chromatic

### Checklist

- [ ] Logo matches exactly
- [ ] Colors match (use color picker)
- [ ] Spacing matches (measure with DevTools)
- [ ] Typography matches (font, size, weight)
- [ ] Layout matches (grid, columns, gaps)
- [ ] Hover states match
- [ ] Focus states match
- [ ] Mobile responsive matches
- [ ] All images loaded
- [ ] Forms work correctly
- [ ] Navigation works

## 6. Production Deployment

### Deploy to Vercel

1. Push code to GitHub
2. Import project in Vercel
3. Add environment variables:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
4. Deploy

### Update Supabase URLs

After deployment, update Supabase redirect URLs with your production domain.

## 7. Final Checks

- [ ] All pages load correctly
- [ ] Authentication works
- [ ] Market data loads
- [ ] Forms submit correctly
- [ ] Mobile responsive
- [ ] SEO metadata present
- [ ] Accessibility features work
- [ ] Performance optimized

## Troubleshooting

### Market Data Not Loading

- Check browser console for CORS errors
- Verify CoinGecko API is accessible
- Check network tab for failed requests

### Supabase Auth Not Working

- Verify environment variables are set
- Check Supabase project is active
- Verify redirect URLs are configured
- Check browser console for errors

### Assets Not Loading

- Verify file paths in `public/` directory
- Check file names match exactly
- Ensure images are optimized

## Support

For issues or questions, check:
- README.md for general documentation
- PROJECT_SUMMARY.md for implementation details
- Supabase docs: https://supabase.com/docs
- CoinGecko API docs: https://www.coingecko.com/api/documentation

