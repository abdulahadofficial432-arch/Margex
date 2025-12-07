# 🚀 How to Start the Server - Step by Step

## Method 1: Standard Start (Recommended)

1. **Open PowerShell or Command Prompt** in the project folder:
   ```
   C:\Users\Abdul\Desktop\Margex
   ```

2. **Run this command:**
   ```bash
   npm run dev
   ```

3. **Wait for this message** (takes 10-30 seconds):
   ```
   ▲ Next.js 14.x.x
   - Local:        http://localhost:3006
   - Ready in X seconds
   ```

4. **Open your browser** and go to:
   ```
   http://localhost:3006
   ```

## Method 2: Using Helper Script

```bash
npm run start-server
```

## What You Should See

### ✅ Success Looks Like:
```
▲ Next.js 14.x.x
- Local:        http://localhost:3006
- Ready in 2.5s
```

### ❌ If You See Errors:

**Error: "Port 3006 is already in use"**
```bash
# Kill the process
netstat -ano | findstr :3006
taskkill /PID [PID_NUMBER] /F
```

**Error: "Cannot find module"**
```bash
npm install
```

**Error: "Type error" or "Syntax error"**
- Share the exact error message
- The error will tell you which file has the problem

**Error: "Command not found: npm"**
- Node.js is not installed or not in PATH
- Install Node.js from nodejs.org

## Still Not Working?

### Share This Information:

1. **The exact command you ran:**
   ```
   npm run dev
   ```

2. **The exact error message** (copy/paste the full output)

3. **What happens:**
   - Does the command run but nothing happens?
   - Does it show an error?
   - Does it start but browser shows "can't connect"?

### Quick Test:

Try this minimal test:
```bash
npx next@14 dev -p 3006
```

If this works, the issue is with the project setup.
If this doesn't work, the issue is with Next.js installation.

## Common Issues & Quick Fixes

| Problem | Solution |
|---------|----------|
| Port in use | Change port in `package.json` to `-p 3007` |
| Module not found | Run `npm install` |
| Type errors | Share the error message |
| Server starts but browser can't connect | Check firewall/antivirus |
| Command not found | Install Node.js |

## Need More Help?

Share:
1. The complete terminal output when you run `npm run dev`
2. Any error messages
3. What you see in the browser

