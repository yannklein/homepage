# Blog Setup Instructions

## Database Setup

Your portfolio now has a multi-page blog structure with 13 articles ready to go!

### Step 1: Create the Database Table

1. Go to your Supabase project: https://supabase.com/dashboard
2. Navigate to the SQL Editor
3. Run the SQL file: `setup-blog-database.sql`

This will:
- Create the `blog_posts` table
- Set up Row Level Security (public read access)
- Insert all 13 blog articles
- Create indexes for performance

### Step 2: Verify the Setup

After running the SQL, check that:
1. The `blog_posts` table exists in your database
2. All 13 blog posts are inserted
3. You can access the posts from your application

## Blog Structure

Your blog now works as follows:

### Homepage (www.yannklein.me)
- Single-page application with all sections
- Blog section displays all 13 articles
- Clicking any article navigates to its dedicated page

### Blog Post Pages (www.yannklein.me/blog/{slug})
- Individual page for each article
- Full content with markdown rendering
- SEO optimized with:
  - Dynamic meta tags
  - BlogPosting structured data (Schema.org)
  - Related posts suggestions
  - Breadcrumb navigation
- Link to external Medium article if available

## All 13 Blog Articles

1. **How to use only one Heroku Postgres Mini plan** (Technical Tutorial)
2. **Build a selfie feature with Cloudinary** (Technical Tutorial)
3. **Build a drag-n-drop kanban board** (Technical Tutorial)
4. **Build a video record feature** (Technical Tutorial)
5. **Meet Yann - Le Wagon Teacher** (Profile)
6. **Getting product feedback** (Product Management)
7. **B2B or B2C decision** (Product Management)
8. **Trusting people brought me to Space** (Personal Story)
9. **3 unusual reading rules** (Personal Development)
10. **Handcrafted Apple Watch strap** (Craftsmanship)
11. **CEATEC Tokyo tech expo** (Technology)
12. **Meet Yann - Program Manager** (Profile)
13. **Build your own ChatBot workshop** (Workshop)

## SEO Benefits

Each blog post is now:
- Individually indexed by search engines
- Discoverable through unique URLs
- Optimized for AI crawlers (GPTBot, Claude, Perplexity)
- Listed in your sitemap.xml

## Testing

To test locally:
1. Make sure your `.env` file has the correct Supabase credentials
2. Run the SQL setup
3. Start the dev server
4. Visit http://localhost:5173/#blog
5. Click on any article to see the full page

## Fallback

If the database is not set up, the application will fall back to displaying mock data (the first 3 articles) so the site continues to work.
