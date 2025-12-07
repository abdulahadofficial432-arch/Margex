# 🚀 Quick Start - Connect Supabase

## Find Your Supabase Credentials

1. **Go to Supabase Dashboard**: https://app.supabase.com
2. **Select your project** (the one you saw in the connection screen)
3. **Click "Project Settings"** (gear icon in left sidebar)
4. **Click "API"** in the settings menu

You'll see:
- **Project URL**: `https://xxxxx.supabase.co` ← Copy this
- **anon public key**: `eyJ...` (long string) ← Copy this

## Add to .env.local

1. Open `.env.local` file in the project root
2. Paste your values:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
```

3. **Save the file**

## Enable Email Auth

1. In Supabase Dashboard → **Authentication** → **Providers**
2. Find **"Email"** and make sure it's **enabled** ✅
3. Go to **Authentication** → **URL Configuration**
4. Set **Site URL**: `http://localhost:3006`
5. Add **Redirect URLs**: `http://localhost:3006/**`

## Test Connection

```bash
npm install
npm run test-supabase
```

If you see ✅ "Supabase connection successful!", you're all set!

## Start Development

```bash
npm run dev
```

Visit `http://localhost:3006/login` and try signing up!

---

**Need help?** See `SUPABASE_SETUP.md` for detailed instructions.

