# please-recompile

A blog about learning AI, built with Next.js and powered by Contentful CMS. Deployed on Vercel.

## Project Structure

```
please-recompile/
├── package.json            # Dependencies
├── next.config.js          # Next.js configuration
├── app/
│   ├── layout.jsx          # Root layout (Header, theme, fonts)
│   ├── page.jsx            # Home (Hero + PostList)
│   ├── [slug]/
│   │   └── page.jsx        # Blog post detail
│   ├── resume/
│   │   └── page.jsx        # Resume page
│   ├── contact/
│   │   └── page.jsx        # Contact page
│   ├── bit/
│   │   ├── page.jsx        # Bit mascot showcase
│   │   └── iterate/
│   │       └── page.jsx    # Bit iterate page
│   ├── iterate/
│   │   └── page.jsx        # Iterate page
│   ├── drafts/
│   │   ├── page.jsx        # Draft list
│   │   └── [slug]/
│   │       └── page.jsx    # Draft detail
│   └── not-found.jsx       # 404 page
├── lib/
│   └── contentful.js       # Contentful client & helpers (server-side)
├── src/
│   ├── components/
│   │   ├── Header.jsx      # Navigation + theme toggle (client component)
│   │   ├── Hero.jsx        # Hero section
│   │   ├── PostCard.jsx    # Blog post card with image
│   │   ├── PostList.jsx    # List of posts
│   │   ├── PostDetailClient.jsx  # Post detail (client component)
│   │   ├── Footer.jsx      # Footer
│   │   ├── RelatedPosts.jsx # Related posts section
│   │   ├── ResumeClient.jsx # Resume (client component)
│   │   ├── Contact.jsx     # Contact page
│   │   ├── BitPage.jsx     # Bit mascot showcase page
│   │   ├── Robot.jsx       # Bit robot component (inline SVG)
│   │   └── PostIcons.jsx   # Post icon components
│   └── styles/
│       └── main.css        # All styling (responsive)
├── public/
│   ├── logos/              # Logo assets
│   └── og-image.png        # Default OG image
└── CLAUDE.md
```

## Git

- **Main branch:** `master`
- PRs should target `master`
- **Auto-push for /bit/iterate:** When working on the `/bit/iterate` page, always push changes directly to master after making updates

## Tech Stack

- Next.js 16 (App Router)
- React 18
- Contentful CMS (headless)
- Vercel (deployment)
- Fira Code font

## Development

```bash
npm install
npm run dev
```

Dev server runs at `http://localhost:3000`

## Environment Variables

Create `.env` file:
```
NEXT_PUBLIC_CONTENTFUL_SPACE_ID=your_space_id
NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN=your_delivery_api_token

# For MCP server (Content Management API)
CONTENTFUL_MANAGEMENT_ACCESS_TOKEN=your_management_token
CONTENTFUL_SPACE_ID=your_space_id
```

## Deployment

Deployed on Vercel at `please-recompile.vercel.app`. Push to master triggers automatic deployment.

## Next.js Architecture

### Server vs Client Components

**Server Components (default):**
- All page.jsx files in app/
- Data fetching happens on the server
- No 'use client' directive needed

**Client Components (interactive):**
- `Header.jsx` - Theme toggle, scroll listener, localStorage
- `PostDetailClient.jsx` - Scroll-based sticky title
- `ResumeClient.jsx` - Scroll listener
- Components with 'use client' directive at top

### Data Fetching

Server components fetch data directly:
```jsx
// app/[slug]/page.jsx
export default async function PostPage({ params }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  return <PostDetailClient post={post} />;
}
```

### Metadata & SEO

Dynamic metadata via generateMetadata():
```jsx
export async function generateMetadata({ params }) {
  const post = await getPostBySlug(params.slug);
  return {
    title: post.title,
    description: post.hook,
    openGraph: { images: [post.image] }
  };
}
```

### Static Generation

Pre-render dynamic routes with generateStaticParams():
```jsx
export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post) => ({ slug: post.slug }));
}
```

### ISR (Incremental Static Regeneration)

Pages revalidate every 60 seconds:
```javascript
// lib/contentful.js
const res = await fetch(url, { next: { revalidate: 60 } });
```

## Contentful Content Model

### blogPost
- `title` (Short text, required)
- `slug` (Short text, unique, required)
- `hook` (Short text, max 100) - Short hook for listings and SEO description
- `content` (Rich text)
- `publishDate` (Date)
- `tags` (Array of linked Tag entries)
- `image` (Asset, image) - Header image (raster format for OG/social sharing)
- `imageSvg` (Asset, image) - Header image (SVG format, theme-aware via currentColor)

### tag
- `name` (Short text, required, unique)
- `slug` (Short text, required, unique)

### siteSettings
Global settings including hero, contact page, footer, navigation, and Bit page content.

**Core Settings:**
- `logoText` (Short text, required) - Header logo text
- `heroBadgeText` (Short text) - Badge text in hero section
- `backToPostsText` (Short text) - "Back to posts" link text
- `loadingText` (Short text) - Loading state text
- `relatedPostsTitle` (Short text) - Related posts section title

**Navigation:**
- `navBlogLabel` (Short text) - Blog nav link label
- `navResumeLabel` (Short text) - Resume nav link label
- `navContactLabel` (Short text) - Contact nav link label

**Hero Section:**
- `heroTitle` (Short text) - Main heading on home page
- `heroSubtitle` (Long text) - Description on home page

**Contact Page:**
- `contactPageTitle` (Short text) - Page heading
- `contactPageSubtitle` (Short text) - Page subtitle
- `contactSeoTitle` (Short text, max 60) - SEO title
- `contactIntroText` (Long text) - Introduction paragraph

**Bit Page:**
- `bitPageTitle` (Short text) - Bit mascot page title
- `bitPageDescription` (Long text) - Bit mascot page description

**Footer:**
- `footerCopyright` (Short text) - Copyright text

**Social/Contact:**
- `contactEmail` (Short text) - Contact email address
- `githubUrl` (Short text) - GitHub profile URL
- `linkedinUrl` (Short text) - LinkedIn profile URL

**Error Pages:**
- `notFoundTitle` (Short text) - 404 page title
- `notFoundMessage` (Long text) - 404 page message

### resume
- `fullName` (Short text, required) - Full name displayed in header
- `location` (Short text) - City, State
- `phone` (Short text) - Phone number
- `email` (Short text) - Email address
- `linkedinUrl` (Short text) - LinkedIn profile URL
- `portfolioUrl` (Short text) - Portfolio website URL
- `professionalSummary` (Long text) - Summary paragraph
- `keyAchievements` (Long text) - Newline-separated achievements
- `experience` (Long text) - JSON array of job objects
- `technicalSkills` (Long text) - JSON array of skill category objects
- `education` (Long text) - Education details
- `certifications` (Long text) - Newline-separated certifications
- `pdfUrl` (Short text) - URL to downloadable PDF resume
- `seoTitle` (Short text, max 60) - SEO title
- `seoDescription` (Short text, max 160) - SEO description

## Routes

- `/` - Home (hero + post list)
- `/:slug` - Individual post (dynamic route)
- `/resume` - Resume page
- `/contact` - Contact page
- `/bit` - Bit mascot showcase page
- `/bit/iterate` - Bit iterate page
- `/drafts` - Draft list
- `/drafts/:slug` - Draft detail

## Features

- SSR with proper social sharing (OG tags rendered server-side)
- SEO optimized (meta tags, OG, Twitter cards)
- Responsive design (mobile-first)
- Dark/light mode toggle (icon button)
- Sticky header with navigation
- Animated hero section
- Post cards with featured images
- Smooth animations
- ISR for fast page loads with fresh content

## Conventions

- Keep components minimal
- CSS custom properties for theming
- Dark/light mode via `.dark-mode` class on `<html>`
- Tags are linked entries (not strings)
- Images use Contentful's image API for optimization
- **Lowercase titles via CSS**: UI titles, nav labels, section headings, and page titles display as lowercase via `text-transform: lowercase` in CSS. Keep source text properly cased (better for SEO, accessibility, screen readers). The CSS handles the visual transformation. Affected classes include: `.nav-link`, `.page-title`, `.page-subtitle`, `.resume-name`, `.resume-title`, `.resume-section-title`, `.resume-download-btn`, `.error-title`, `.error-btn`, `.back-link`, `.related-posts h2`, `.hero-badge`, `.bit-page h1/h2`

## Bit - Robot Mascot

Bit is the friendly robot mascot of please-recompile. The Robot component (`src/components/Robot.jsx`) renders Bit as inline SVG with 16 emotions/poses that animate on hover.

### Usage
```jsx
import Robot from './components/Robot';

<Robot emotion="happy" size={64} />
```

### Props
- `emotion` - One of: `neutral`, `happy`, `sad`, `mad`, `surprised`, `confused`, `thinking`, `love`, `excited`, `shrug`, `waving`, `dancing`, `sleeping`, `talking`, `walking-front`, `walking-side`
- `size` - Pixel width (height scales proportionally at 1.25x)
- `className` - Optional additional CSS classes

### Features
- Uses `currentColor` for automatic light/dark mode support
- Hover animations defined in `main.css` (pure CSS, no JavaScript)
- Scales to any size while maintaining crisp lines

## Bit Logo Specifications

The base logo file is at `/public/logos/robot-v110-no-feet.svg`. When creating or modifying Bit, follow these exact specifications:

### Canvas & Proportions
- **ViewBox:** `0 0 64 80` (64 units wide, 80 units tall)
- **Fill:** `currentColor` (inherits text color for theming)
- **Style:** Minimalist line art with consistent stroke weights

### Antenna (Top)
- **Ball:** Hollow circle, radius 3, centered at (32, 3)
  - `fill="none"`, `stroke-width="2"`
- **Stem:** Vertical line from y=6 to y=14, centered at x=32
  - `stroke-width="3"`, `stroke-linecap="round"`

### Head
- **Shape:** Rounded rectangle, 32×26 units
- **Position:** x=16, y=14 (centered horizontally)
- **Corner radius:** rx=8, ry=8
- **Style:** Outline only (`fill="none"`, `stroke-width="3"`)

### Eyes
- **Style:** Flat horizontal lines (not circles or arcs)
- **Left eye:** x1=22 to x2=28, y=27
- **Right eye:** x1=36 to x2=42, y=27
- **Stroke:** `stroke-width="2.5"`, `stroke-linecap="round"`
- **Expression:** Neutral/stoic (not happy or sad)

### Body
- **Shape:** Rounded rectangle, 12×18 units
- **Position:** x=26, y=46 (centered below head with 6-unit gap)
- **Corner radius:** rx=3, ry=3
- **Style:** Outline only (`fill="none"`, `stroke-width="3"`)
- **Buttons:** Two small filled circles (r=1.5) vertically centered
  - Upper button: cx=32, cy=52
  - Lower button: cx=32, cy=58

### Arms
- **Style:** Short diagonal lines angling downward, with ball "hands"
- **Left arm:**
  - Line from (20, 52) to (14, 56)
  - Hand: filled circle at (14, 56), radius 2
- **Right arm:**
  - Line from (44, 52) to (50, 56)
  - Hand: filled circle at (50, 56), radius 2
- **Stroke:** `stroke-width="2.5"`, `stroke-linecap="round"`
- **Angle:** ~45° downward from body

### Legs
- **Style:** Simple vertical lines, NO feet
- **Left leg:** x=27, from y=68 to y=76
- **Right leg:** x=37, from y=68 to y=76
- **Stroke:** `stroke-width="2.5"`, `stroke-linecap="round"`
- **Spacing:** 10 units apart, positioned under body edges

### Key Design Principles
1. **Hollow vs Filled:** Head, body, and antenna ball are outlines; eyes, buttons, and hand balls are filled
2. **No feet:** Legs end as simple rounded lines
3. **Neutral expression:** Flat line eyes give a calm, non-cartoonish look
4. **Disconnected parts:** Small gaps between head/body and body/legs create a floating, modular feel
5. **Consistent strokes:** Primary elements use stroke-width 3, secondary elements use 2.5, details use 2
6. **Theme-friendly:** Uses `currentColor` so it automatically adapts to light/dark mode
