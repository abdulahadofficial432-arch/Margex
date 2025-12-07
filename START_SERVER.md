# How to Start the Server

## Quick Start

Open a terminal in the project folder and run:

```bash
npm run dev
```

Wait for the message:
```
✓ Ready in X seconds
○ Local: http://localhost:3006
```

Then open your browser to: **http://localhost:3006**

## If It Doesn't Start

1. **Check if port 3006 is already in use:**
   ```bash
   netstat -ano | findstr :3006
   ```

2. **Kill any existing Node processes:**
   ```bash
   taskkill /F /IM node.exe
   ```

3. **Try again:**
   ```bash
   npm run dev
   ```

## Common Issues

- **Port already in use**: Kill the process using port 3006
- **Dependencies missing**: Run `npm install` first
- **Build errors**: Check the terminal output for error messages

