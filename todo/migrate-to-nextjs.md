# Migrate to Next.js

## Why
Social sharing (iMessage, Twitter, etc.) doesn't work properly with client-side SPAs. Crawlers don't execute JavaScript, so they only see the static `index.html` meta tags - not the per-post dynamic meta tags.

## What Needs to Change
1. **File structure** - Move pages to `app/` directory (App Router)
2. **Routing** - Replace react-router with Next.js file-based routing
   - `app/page.jsx` - Home
   - `app/[slug]/page.jsx` - Post detail
   - `app/resume/page.jsx` - Resume
   - `app/contact/page.jsx` - Contact
   - `app/bit/page.jsx` - Bit page
   - `app/drafts/page.jsx` - Draft list
   - `app/drafts/[slug]/page.jsx` - Draft detail
3. **Data fetching** - Move Contentful calls to server components
4. **Meta tags** - Replace SEO component with Next.js `metadata` export

## What Stays the Same
- All components (Header, Footer, PostList, Robot, etc.)
- All CSS (`main.css`)
- Contentful integration logic (minor tweaks for server-side)
- All JSX markup

## Deployment
- **Current**: GitHub Pages (static only)
- **Recommended**: Vercel (free tier, auto-deploys, SSR support)

## Estimated Effort
~2-3 hours

## Benefits
- Per-post meta tags that work for social sharing
- Static generation (faster loads, better SEO)
- Built-in image optimization
- Easier Vercel deployment
