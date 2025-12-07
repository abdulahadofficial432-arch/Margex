# Port Configuration

## Development Server Port

The application is configured to run on **port 3006** instead of the default port 3000.

## Running the Application

```bash
# Development server (runs on port 3006)
npm run dev

# Production server (runs on port 3006)
npm start
```

## Access URLs

- **Development**: http://localhost:3006
- **Login Page**: http://localhost:3006/login
- **Signup Page**: http://localhost:3006/signup
- **Dashboard**: http://localhost:3006/dashboard

## Supabase Configuration

When configuring Supabase redirect URLs, use:
- **Site URL**: `http://localhost:3006`
- **Redirect URLs**: `http://localhost:3006/**`

## Changing the Port

If you need to change the port, update `package.json`:

```json
{
  "scripts": {
    "dev": "next dev -p YOUR_PORT",
    "start": "next start -p YOUR_PORT"
  }
}
```

Then update all references to `localhost:3006` in:
- Documentation files
- Supabase redirect URLs
- Any hardcoded URLs in the codebase

