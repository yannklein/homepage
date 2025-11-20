# Frontend-Only Blog Implementation

Your portfolio now has a complete multi-page blog structure, entirely frontend-based with no backend dependencies!

## URL Structure

✅ **Homepage**: `www.yannklein.me/`
- Single-page application with all sections
- Blog section displays all 13 articles
- Click any article to navigate to its page

✅ **Blog Posts**: `www.yannklein.me/blog/{slug}`
- Individual page for each of the 13 articles
- Full markdown content rendering
- Related posts suggestions

## All 13 Blog Articles

The blog posts are stored in `src/data/blogPosts.ts` and include:

1. **Heroku Postgres Mini plan** (2023) - Rails tutorial
2. **Selfie feature with Cloudinary** (2021) - Rails + WebRTC
3. **Drag-n-drop kanban board** (2020) - Rails + SortableJS
4. **Video record feature** (2020) - Rails + MediaRecorder
5. **Le Wagon teacher profile** (2020) - Career story
6. **Getting product feedback** (2018) - Product management
7. **B2B vs B2C decision** (2018) - Strategy analysis
8. **Space balloon adventure** (2018) - Personal story
9. **3 unusual reading rules** (2018) - Personal development
10. **Apple Watch strap craft** (2015) - DIY craftsmanship
11. **CEATEC tech expo** (2015) - Technology report
12. **Program Manager profile** (2025) - LinkedIn feature
13. **AI ChatBot workshop** (2025) - Workshop announcement

## Features

### Blog Post Pages
- Full markdown content with proper formatting
- Featured images (where available)
- Author information and dates
- Reading time estimates
- Tag categorization
- Links to original Medium articles
- Related posts (3 most recent)
- Back navigation to blog section

### SEO Optimization
- Dynamic meta tags per post
- BlogPosting structured data (Schema.org)
- All 13 posts in sitemap.xml
- Optimized for AI crawlers
- Unique URLs for discoverability

### Responsive Design
- 3-column grid on desktop (1100px+)
- 2-column on tablet (768px-1100px)
- 1-column on mobile (< 768px)
- Smooth transitions and hover effects

## Technology Stack

- **React 19** - UI framework
- **React Router** - Client-side routing
- **TypeScript** - Type safety
- **Markdown-it** - Markdown rendering
- **Vite** - Build tool
- **No backend** - Completely static

## Adding New Blog Posts

To add a new blog post, simply add an entry to `src/data/blogPosts.ts`:

\`\`\`typescript
{
  id: '14',
  title: 'Your New Post Title',
  slug: 'your-new-post-slug',
  excerpt: 'A brief description...',
  content: \`Full markdown content here...\`,
  author: 'Yann Klein',
  published_date: '2025-11-20',
  tags: ['Tag1', 'Tag2'],
  image_url: 'https://...' or null,
  external_url: 'https://...' or null,
  read_time: 5
}
\`\`\`

Don't forget to update `public/sitemap.xml` with the new post URL!

## Deployment

The app is ready to deploy to any static hosting service:
- Netlify
- Vercel
- GitHub Pages
- Cloudflare Pages
- AWS S3 + CloudFront

Just run `npm run build` and deploy the `dist` folder.

## Build Info

- Build size: ~1MB (with Three.js for 3D effects)
- All blog data: ~50KB
- No external API calls
- Fast, SEO-friendly, fully static
