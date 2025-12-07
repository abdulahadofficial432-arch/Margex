# Margex - Pixel-Perfect Site Reconstruction

This is a pixel-faithful reproduction of margex.com built with Next.js, TypeScript, and Tailwind CSS. Every page, component, color, font, and spacing has been meticulously recreated to match the original site.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Database**: Supabase
- **Charts**: TradingView Widgets
- **Animations**: Framer Motion
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn
- Supabase account (for authentication and database)

### Installation

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables:
Create a `.env.local` file in the root directory:
```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

3. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3006](http://localhost:3006) with your browser.

## Project Structure

```
├── app/                    # Next.js app router pages
│   ├── layout.tsx         # Root layout with Header/Footer
│   ├── page.tsx           # Homepage
│   ├── login/             # Login page
│   ├── signup/            # Signup page
│   ├── markets/           # Markets listing
│   ├── trading/           # Trading platform
│   ├── copy-trading/      # Copy trading page
│   ├── mobile/            # Mobile app page
│   ├── about/             # About page
│   ├── support/           # Support/FAQ page
│   ├── docs/              # Documentation
│   ├── terms/             # Terms of Service
│   ├── privacy/           # Privacy Policy
│   └── risk/              # Risk Disclosure
├── components/            # Reusable React components
│   ├── Header.tsx         # Site header with navigation
│   ├── Footer.tsx         # Site footer
│   ├── Hero.tsx           # Hero section
│   ├── Features.tsx       # Features grid
│   ├── Testimonials.tsx   # Testimonials carousel
│   ├── TradingViewWidget.tsx  # TradingView chart integration
│   ├── Modal.tsx          # Modal component
│   ├── Tabs.tsx           # Tab component
│   ├── Accordion.tsx      # Accordion component
│   ├── Toast.tsx          # Toast notification
│   ├── Card.tsx           # Card component
│   └── SkipLink.tsx       # Accessibility skip link
├── lib/                   # Utilities and configurations
│   └── supabase.ts        # Supabase client
├── styles/                # Global styles
│   └── tokens.css         # Design tokens (colors, typography, spacing)
└── public/                # Static assets (images, fonts, etc.)
```

## Design System

Design tokens are defined in `/styles/tokens.css` and include:

### Colors
- **Background**: `#0A0A0A` (primary), `#141414` (secondary), `#1E1E1E` (tertiary)
- **Accent**: `#00D9FF` (primary), `#00B8D9` (hover)
- **Text**: `#FFFFFF` (primary), `#E0E0E0` (secondary), `#A0A0A0` (muted)
- **Status**: `#00FF88` (success), `#FF4444` (error), `#FFAA00` (warning)

### Typography
- **Font Family**: Inter (primary), system fonts (fallback)
- **Font Sizes**: 12px (xs) to 48px (5xl)
- **Font Weights**: 300 (light) to 700 (bold)

## Components

### Reusable Components

- **Header**: Navigation with dropdowns, mobile menu, CTA buttons
- **Footer**: Multi-column layout with links, social icons, legal info
- **Modal**: Accessible modal with focus trap and ESC key support
- **Tabs**: Tabbed interface component
- **Accordion**: Collapsible content sections
- **Toast**: Notification system with multiple types
- **Card**: Reusable card container

## Pages

### Public Pages
- **Homepage** (`/`) - Hero, features, stats, testimonials
- **Markets** (`/markets`) - Trading pairs listing with search and filters
- **Trading** (`/trading`) - Full trading interface with TradingView charts
- **Copy Trading** (`/copy-trading`) - Leaderboard and copy trading features
- **Mobile** (`/mobile`) - Mobile app information and download links
- **About** (`/about`) - Company information and team
- **Support** (`/support`) - FAQ and help center
- **Documentation** (`/docs`) - API and feature documentation
- **Terms** (`/terms`) - Terms of Service
- **Privacy** (`/privacy`) - Privacy Policy
- **Risk** (`/risk`) - Risk Disclosure

### Authentication Pages
- **Login** (`/login`) - User login with validation
- **Signup** (`/signup`) - User registration with validation

## Customization

### Changing Global Colors

Edit `/styles/tokens.css`:
```css
:root {
  --color-accent: #00D9FF;  /* Change accent color */
  --color-bg: #0A0A0A;      /* Change background */
}
```

### Updating Content

- **Homepage**: Edit `app/page.tsx` and component files in `/components`
- **Navigation**: Edit `components/Header.tsx`
- **Footer**: Edit `components/Footer.tsx`
- **Pages**: Edit respective files in `/app/[page-name]/page.tsx`

## API Integration

### Supabase Authentication

The project is configured to use Supabase for authentication. Update `lib/supabase.ts` with your credentials.

### TradingView Integration

TradingView widgets are integrated via the `TradingViewWidget` component.

## Responsive Design

The site is fully responsive with breakpoints:
- **Mobile**: < 640px
- **Tablet**: 641px - 1024px
- **Desktop**: > 1025px

## Accessibility

The site includes:
- Semantic HTML
- ARIA attributes for complex widgets
- Keyboard navigation support
- Focus management
- Skip links
- Color contrast meeting WCAG AA standards

## SEO

- Meta titles and descriptions for all pages
- Open Graph tags
- Twitter Card tags
- Canonical URLs
- Sitemap (`/sitemap.xml`)
- Robots.txt (`/robots.txt`)

## Build & Deploy

### Build for Production

```bash
npm run build
```

### Deploy to Vercel

1. Push code to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy

## License

Private project - All rights reserved
