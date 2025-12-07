# ✅ Connect Supabase - You're Almost There!

## What You Have ✅

You already have:
- **Publishable Key**: `sb_publishable_tym8sZXcuWv2FYUpyx7tdg_zDwPJ8fD` ✅

## What You Need 🔍

You need **one more thing**:
- **Project URL**: `https://xxxxx.supabase.co`

## Find Your Project URL

**On the same API Keys page you're viewing:**

1. Look at the **top of the page** (above the "Publishable key" section)
2. You should see something like:
   ```
   Project URL: https://xxxxx.supabase.co
   ```
3. **Copy that URL**

**OR**

1. In the left sidebar, click **"General"** (under Project Settings)
2. The Project URL will be displayed there

## Update .env.local

I've already added your publishable key. Now add the Project URL:

1. Open `.env.local` file in the project root
2. Find the line: `NEXT_PUBLIC_SUPABASE_URL=`
3. Add your Project URL after the `=`
4. It should look like:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=https://your-project-ref.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=sb_publishable_tym8sZXcuWv2FYUpyx7tdg_zDwPJ8fD
   ```
5. **Save the file**

## Test Connection

After adding the Project URL, run:

```bash
npm run test-supabase
```

You should see: ✅ "Supabase connection successful!"

## Enable Email Auth

1. In Supabase Dashboard → **Authentication** → **Providers**
2. Enable **"Email"** provider
3. Go to **Authentication** → **URL Configuration**
4. Set **Site URL**: `http://localhost:3006`
5. Add **Redirect URLs**: `http://localhost:3006/**`

## Start Your App

```bash
npm run dev
```

Visit `http://localhost:3006/login` and test signup!

---

**Can't find the Project URL?** Check `FIND_PROJECT_URL.md` for more help.

