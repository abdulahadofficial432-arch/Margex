# How to Find Your Supabase Project URL

You're on the API Keys page and have your **Publishable Key**. Now you need the **Project URL**.

## Where to Find Project URL

On the same **API Keys** page, look for:

1. **At the top of the page** - There should be a section showing:
   - Project URL: `https://xxxxx.supabase.co`
   - Or just "URL": `https://xxxxx.supabase.co`

2. **Alternative locations:**
   - Check the **top navigation bar** - Your project name might show the URL
   - Look in **Project Settings → General** - The URL is usually displayed there
   - Check the browser address bar - The URL might contain your project reference

## What It Looks Like

The Project URL format is:
```
https://[project-ref].supabase.co
```

Example:
```
https://abcdefghijklmnop.supabase.co
```

## Quick Steps

1. **Stay on the API Keys page** (where you are now)
2. **Look at the top** of the main content area
3. **Find "Project URL"** or "URL" field
4. **Copy that URL**

## If You Can't Find It

1. Go to **Project Settings → General** (in the left sidebar)
2. The Project URL should be displayed there
3. Or check the **breadcrumbs** at the top - your project reference might be visible

## Once You Have Both

Update `.env.local`:
```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project-ref.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=sb_publishable_tym8sZXcuWv2FYUpyx7tdg_zDwPJ8fD
```

Then test with:
```bash
npm run test-supabase
```

