# Supabase Connection Setup Guide

## Step 1: Get Your Supabase Credentials

1. Go to your Supabase Dashboard: https://app.supabase.com
2. Select your project (or create a new one)
3. Go to **Project Settings** → **API** (in the left sidebar)

## Step 2: Find Your Credentials

You'll see two important values:

### 1. Project URL
- Look for **"Project URL"** or **"URL"**
- Format: `https://xxxxx.supabase.co`
- Copy this value

### 2. Anon/Public Key
- Look for **"anon"** or **"public"** key
- This is a long string starting with `eyJ...`
- Copy this value

## Step 3: Update .env.local

1. Open `.env.local` in the project root
2. Paste your values:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
```

3. Save the file

## Step 4: Enable Email Authentication

1. In Supabase Dashboard, go to **Authentication** → **Providers**
2. Find **"Email"** provider
3. Make sure it's **enabled** (toggle should be ON)
4. Configure email templates if needed (optional)

## Step 5: Set Up Redirect URLs

1. Go to **Authentication** → **URL Configuration**
2. Set **Site URL** to: `http://localhost:3006` (for development)
3. Add **Redirect URLs**:
   - `http://localhost:3006/**`
   - `http://localhost:3006/auth/callback`
   - Add your production URL when deploying

## Step 6: Test the Connection

1. Make sure `.env.local` is saved
2. Restart your dev server:
   ```bash
   npm run dev
   ```
3. Visit `http://localhost:3006/login`
4. Try signing up with a test email
5. Check Supabase Dashboard → Authentication → Users to see if user was created

## Troubleshooting

### "Supabase credentials not found" warning
- Make sure `.env.local` exists in the project root
- Verify variable names are exactly: `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- Restart your dev server after adding/updating `.env.local`

### Authentication not working
- Check Supabase Dashboard → Authentication → Providers → Email is enabled
- Verify redirect URLs are configured correctly
- Check browser console for error messages

### Can't find API settings
- Make sure you're in the correct project
- Look for "Settings" icon in left sidebar
- Click "API" under Project Settings

## Quick Reference

**Where to find credentials:**
- Dashboard → Project Settings → API

**Required values:**
- `NEXT_PUBLIC_SUPABASE_URL` = Project URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` = anon/public key

**Note:** The PostgreSQL connection string you saw is for direct database access, not for client-side authentication. We need the Project URL and anon key instead.

