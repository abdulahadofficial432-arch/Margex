# Troubleshooting - Server Not Starting

## Step-by-Step Fix

### 1. Clean Install (Try This First)

```bash
# Remove node_modules and lock files
Remove-Item -Recurse -Force node_modules
Remove-Item -Force package-lock.json
Remove-Item -Force .next -ErrorAction SilentlyContinue

# Reinstall everything
npm install

# Start server
npm run dev
```

### 2. Check for Port Conflicts

```bash
# Check if port 3006 is in use
netstat -ano | findstr :3006

# If something is using it, kill it:
# Find the PID from above, then:
taskkill /PID [PID_NUMBER] /F
```

### 3. Try Different Port

If port 3006 is blocked, temporarily change it:

Edit `package.json`:
```json
"dev": "next dev -p 3007"
```

Then run:
```bash
npm run dev
```

### 4. Check Node.js Version

You have Node v24.11.1 which should work, but Next.js 14 might prefer Node 18-20.

If issues persist, try:
```bash
# Use Node 18 or 20 (if you have nvm)
nvm use 18
npm install
npm run dev
```

### 5. Manual Start with Error Output

```bash
# This will show all errors
npm run dev 2>&1 | Tee-Object -FilePath server-log.txt
```

Then check `server-log.txt` for errors.

### 6. Verify Files Exist

Make sure these files exist:
- ✅ `package.json`
- ✅ `next.config.js`
- ✅ `tsconfig.json`
- ✅ `tailwind.config.ts`
- ✅ `postcss.config.js`
- ✅ `app/layout.tsx`
- ✅ `app/page.tsx`

### 7. Quick Test

Create a simple test to see if Next.js works:

```bash
# Create minimal test
npx create-next-app@latest test-app --typescript --tailwind --app --no-src-dir
cd test-app
npm run dev
```

If this works, the issue is with the project configuration.

## Common Errors & Solutions

### "Cannot find module"
→ Run `npm install`

### "Port already in use"
→ Kill the process or change port

### "Syntax error" or "Type error"
→ Check the file mentioned in the error
→ Run `npm run lint` to find issues

### "Module not found"
→ Check import paths (should use `@/` for aliases)
→ Verify file exists

## Still Not Working?

Share the exact error message you see when running `npm run dev`

