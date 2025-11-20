import { supabase } from '../lib/supabaseClient';

const blogPosts = [
  {
    title: 'How to use only one Heroku Postgres Mini plan for all your Rails apps',
    slug: 'heroku-postgres-mini-plan-multiple-rails-apps',
    excerpt: 'Learn how to save on Heroku database costs by using a single Postgres Mini plan to host multiple Rails application databases through schema separation.',
    content: `Use one Heroku Postgres Mini plan for multiple Rails apps by building a single backend app hosting several databases. In summary:

## Create a Shared Backend App

Create a new Rails app ("backend") that will host all databases. Use a Heroku Postgres Mini plan on this backend and create multiple database extensions for each service you need.

## Attach the Backend DB to Other Apps

For each Rails app that needs a database, attach the backend database using \`heroku addons:attach\`. Configure the \`DATABASE_URL\` environment variable to point at the appropriate schema.

## Create Models and Seeds

In the backend app, define all models and migrations. When seeding, prefix tables with each app name to avoid conflicts.

## Update Existing Projects

If you already have Rails projects, migrate their database structure and data into the backend's new schemas. Update their configs to point to the shared database.

## Benefits

This approach saves on Heroku DB costs while allowing multiple apps to share a single Postgres instance.`,
    published_date: '2023-02-15',
    image_url: 'https://miro.medium.com/v2/resize:fit:1200/0*MMQpRd0-c7rs8fJG',
    external_url: 'https://medium.com/@yann.and.the.machines/how-to-use-only-one-heroku-postgres-mini-plan-for-all-your-rails-apps-f3fdfb458fc5',
    author: 'Yann Klein',
    tags: ['Rails', 'Heroku', 'PostgreSQL', 'Tutorial', 'DevOps'],
    read_time: 7
  },
  {
    title: 'Tutorial: How to build a selfie feature on your Rails app with Cloudinary',
    slug: 'build-selfie-feature-rails-cloudinary',
    excerpt: 'Step-by-step guide to implementing a webcam selfie capture feature in your Rails application using Cloudinary for image storage.',
    content: `This tutorial explains how to implement a selfie-taking feature using Cloudinary and Rails:

## Setup

Add the \`cloudinary\` gem and configure Cloudinary credentials. Set up ActiveStorage.

## Model

Add a \`photo\` attachment to your model.

## View

Build a webcam-enabled UI using WebRTC.

## JavaScript

Capture a frame, convert to Blob, upload via AJAX.

## Controller

Upload to Cloudinary, store the returned URL.

## Result

A fully working selfie capture feature.`,
    published_date: '2021-08-11',
    image_url: 'https://miro.medium.com/v2/resize:fit:1200/0*f92uFtZXtzoxipgZ',
    external_url: 'https://medium.com/@yann.and.the.machines/tutorial-how-to-build-a-selfie-feature-on-your-rails-app-with-cloudinary-97407b72a203',
    author: 'Yann Klein',
    tags: ['Rails', 'Cloudinary', 'WebRTC', 'Tutorial', 'JavaScript'],
    read_time: 8
  },
  {
    title: 'Tutorial: build a drag-n-drop kanban board on Rails with SortableJS',
    slug: 'drag-drop-kanban-board-rails-sortablejs',
    excerpt: 'Create a Trello-like drag-and-drop kanban board in Ruby on Rails using the powerful SortableJS library for intuitive task management.',
    content: `Learn to create a Trello-like kanban board in Rails using SortableJS:

## Models

Kanban, KanbanColumn, Card

## View

Board layout showing columns and cards

## SortableJS

Add drag-and-drop behavior

## Persistence

Save new order to backend via AJAX

## Enhancements

Realtime updates and auto-save`,
    published_date: '2020-09-10',
    image_url: 'https://miro.medium.com/v2/resize:fit:1200/0*3QIzIBf2mRbA3Jdo',
    external_url: 'https://medium.com/le-wagon-tokyo/tutorial-build-a-drag-n-drop-kanban-board-on-rails-with-sortablejs-c6affa5642cf',
    author: 'Yann Klein',
    tags: ['Rails', 'JavaScript', 'SortableJS', 'Tutorial', 'UI/UX'],
    read_time: 10
  },
  {
    title: 'How to build a video record feature on your Rails app with Cloudinary',
    slug: 'video-record-feature-rails-cloudinary',
    excerpt: 'Implement video recording capabilities in your Rails application using the MediaRecorder API and Cloudinary for seamless video storage.',
    content: `Guide to implementing video recording in a Rails app:

## Setup Cloudinary + ActiveStorage

Configure your Rails app with Cloudinary integration and ActiveStorage for media management.

## Use MediaRecorder API to Capture Video

Leverage the browser's MediaRecorder API to capture video directly from the user's webcam.

## Upload Chunks to Rails Backend

Stream video chunks to your Rails backend as they're recorded.

## Store the Cloudinary Video URL

Save the final Cloudinary URL in your database for easy retrieval.

## Display the Recorded Video to Users

Show the recorded video back to users with proper playback controls.`,
    published_date: '2020-08-27',
    image_url: 'https://miro.medium.com/v2/resize:fit:1200/0*IzAw9g6SgMMx2zCu',
    external_url: 'https://medium.com/le-wagon-tokyo/how-to-build-a-video-record-feature-on-your-rails-app-with-cloudinary-b31e592a8e76',
    author: 'Yann Klein',
    tags: ['Rails', 'Cloudinary', 'Video', 'Tutorial', 'MediaRecorder'],
    read_time: 9
  },
  {
    title: 'The day trusting people brought me to Space',
    slug: 'trusting-people-brought-me-to-space',
    excerpt: 'A personal story about launching a weather balloon with a 360-degree camera to near-space during a solar eclipse, powered by trust and collaboration.',
    content: `A personal story about sending a weather balloon with a 360-degree camera to near-space.

## The Fascination

You became fascinated with space and launched project "Space2TryOne."

## The Journey

Living in Japan, you met people who helped build the balloon.

## The Launch

The balloon was launched during a US solar eclipse.

## The Result

It captured incredible footage from near-space.

## Theme

Trusting strangers leads to extraordinary experiences.`,
    published_date: '2018-05-26',
    image_url: null,
    external_url: 'https://medium.com/@yann.and.the.machines/the-day-trusting-people-brought-me-to-space-6fd7e99c9642',
    author: 'Yann Klein',
    tags: ['Personal', 'Space', 'Adventure', 'Collaboration'],
    read_time: 6
  },
  {
    title: '3 unusual rules that broadened my reading horizons',
    slug: 'three-unusual-reading-rules',
    excerpt: 'Three simple but powerful rules that dramatically increased reading volume and created a virtuous cycle of continuous learning.',
    content: `Three rules that dramatically expanded your reading volume:

## 1. Unlimited Book Budget

Remove financial friction from reading by allowing yourself to buy any book without guilt.

## 2. Immediate Purchase of Any Recommendation

Act immediately on book recommendations to capitalize on peak interest.

## 3. Share Your Rules and Books to Create a Feedback Loop

Create accountability and discover new books by sharing your reading journey.

These habits remove friction and create a reading "virtuous cycle."`,
    published_date: '2018-05-20',
    image_url: null,
    external_url: 'https://medium.com/@yann.and.the.machines/3-unusual-rules-that-broadened-my-reading-horizons-c5ddbbaf998d',
    author: 'Yann Klein',
    tags: ['Personal Development', 'Reading', 'Habits'],
    read_time: 5
  },
  {
    title: 'The day I decided to buy a new AppleWatch strap',
    slug: 'handcrafted-apple-watch-strap',
    excerpt: 'A bilingual narrative about handcrafting a custom leather Apple Watch strap in Tokyo, exploring the value of handmade craftsmanship.',
    content: `A bilingual narrative describing how you handcrafted a custom leather Apple Watch strap in Tokyo:

## Shopping for Materials

Exploring leather shops in Asakusa to find the perfect materials.

## The Craft

Cutting, sewing, punching, and finishing the leather with attention to detail.

## Lessons in Craftsmanship

Learning about making handmade objects worthy of daily use.`,
    published_date: '2015-10-21',
    image_url: null,
    external_url: 'https://medium.com/@yann.and.the.machines/yann-and-the-machines-50540e9ec088',
    author: 'Yann Klein',
    tags: ['Craftsmanship', 'Personal', 'Tokyo', 'DIY'],
    read_time: 4
  },
  {
    title: 'It begins at the CEATEC',
    slug: 'ceatec-tokyo-tech-expo',
    excerpt: 'A bilingual report from the CEATEC technology expo in Tokyo, experiencing cutting-edge robots and human-computer interaction demos.',
    content: `A bilingual report from the CEATEC technology expo in Tokyo:

## Experiencing Honda's Uni-Cub

Testing Honda's personal mobility device.

## Meeting Robots

Pepper, Nao, RoboHon and other cutting-edge robotics.

## Watching the Japan Robot Challenge

Observing competitive robotics in action.

## Exploring HCI Demos and Futuristic Tech

Discovering the future of human-computer interaction.`,
    published_date: '2015-10-18',
    image_url: null,
    external_url: 'https://medium.com/@yann.and.the.machines/it-begins-at-the-ceatec-ceatec%E3%81%A7%E5%A7%8B%E3%81%BE%E3%82%8B-279edff0206e',
    author: 'Yann Klein',
    tags: ['Technology', 'Robotics', 'Tokyo', 'HCI'],
    read_time: 7
  },
  {
    title: 'Getting feedback: what it changed for my product adventure',
    slug: 'getting-feedback-product-adventure',
    excerpt: 'Reflections on how gathering user feedback transformed the Magic Stickr product journey, challenging assumptions and revealing new directions.',
    content: `Reflection on gathering feedback for Magic Stickr:

## Survey Results

Survey revealed your favorite idea was least popular with users.

## Audience Bias

Audience was biased (early adopters), teaching important lessons about market research.

## Benefits of Feedback

Feedback fuels motivation, challenges assumptions, and reveals new ideas.

## Encouragement

Active encouragement to seek feedback early and often.`,
    published_date: '2018-11-20',
    image_url: null,
    external_url: 'https://medium.com/@yann.and.the.machines/getting-feedback-what-it-changed-for-my-product-adventure-9908d52a331c',
    author: 'Yann Klein',
    tags: ['Product Management', 'Feedback', 'Startup'],
    read_time: 6
  },
  {
    title: 'B2B or B2C, that is the question',
    slug: 'b2b-vs-b2c-magic-stickr',
    excerpt: 'Exploring the fundamental differences between B2B and B2C product management, and the strategic choices facing Magic Stickr.',
    content: `I am Yann, a junior Product Manager and Magic Stickr is my "practice" product. Stickrs enhance reality using ThreeJS + ARJS.

Main question: **who is this for — B2B or B2C?**

## 3 Interesting Facts

- B2B & B2C are not as different as commonly claimed
- PM resources are overwhelmingly B2C-oriented
- MVP/Agile are harder in B2B because clients demand everything planned upfront

## 6 Typical Differences

### B2B:
- Must know client's business environment deeply
- Buyer ≠ user; many middle layers
- Direct line with clients (email, phone)
- Multi-feature, customized products
- Few clients, big revenue
- Long sales cycles

### B2C:
- Environment = everyday life
- Buyer = user
- No direct line; rely on analytics
- Simple features, great UX
- People pay little, churn quickly

## Magic Stickr Dilemmas

### B2C:
- Easy empathy with users
- Hard to monetize
- Loss of handcrafted "soul" in mass-market

### B2B:
- Stable revenue, clear targets
- Harder to align with values
- You want "ethical work" (ecology, empowerment, culture, etc.)

## Conclusion

No clear winner. Open question: which path aligns with values, impact, and product soul?`,
    published_date: '2018-11-13',
    image_url: null,
    external_url: 'https://medium.com/@yann.and.the.machines/magic-stickr-customers-b2b-vs-b2c-85907b20f737',
    author: 'Yann Klein',
    tags: ['Product Management', 'B2B', 'B2C', 'Strategy'],
    read_time: 8
  },
  {
    title: 'Meet our team: Yann, lead teacher and creative programmer',
    slug: 'meet-yann-le-wagon-teacher',
    excerpt: 'A Le Wagon profile introducing Yann as the Tokyo bootcamp manager and lead front-end teacher, sharing his journey from childhood programming to technical education.',
    content: `A profile from Le Wagon's blog introducing you as the part-time bootcamp manager and front-end lead teacher in Tokyo.

## Early Beginnings

You built your first website at age 12 (complete with Star Wars animations), sparking a lifelong fascination with tech.

## Education and Career

Holding engineering degrees from France and the US, you've worked in a Kyoto printed-circuit factory and a Vancouver VR start-up before joining Le Wagon.

## Le Wagon Journey

You joined Le Wagon as the driver of the Kyoto coding bootcamp and later moved to Tokyo, where you manage the part-time bootcamp and teach front-end development.

## Teaching Philosophy

Teaching for you is about creative expression; you enjoy sharing knowledge on human-robot interaction and AR/VR, and you emphasize that anyone can learn to code.

## Community Approach

The article notes your humour and community-driven approach—you make classes fun with jokes and help foster a supportive network among students and workshop attendees.`,
    published_date: '2020-08-11',
    image_url: null,
    external_url: 'https://blog.lewagon.com/news/meet-our-team-yann/',
    author: 'Le Wagon',
    tags: ['Profile', 'Le Wagon', 'Teaching', 'Education'],
    read_time: 5
  },
  {
    title: 'Meet Yann, Le Wagon Tokyo\'s Program Manager',
    slug: 'meet-yann-program-manager-tokyo',
    excerpt: 'LinkedIn feature highlighting Yann\'s role as Le Wagon Tokyo\'s program manager, ensuring smooth bootcamp operations and student success.',
    content: `A LinkedIn post from Le Wagon Tokyo presenting you as the campus program manager.

## Role and Responsibilities

The post says you ensure everything runs smoothly—from guiding students through challenging sprints to keeping the coffee machine working.

## Student Perspective

Students appreciate your kindness and patience when explaining tricky concepts, and they enjoy your sense of humour.

## Outside Work

Outside work you're described as a VR/AR enthusiast who also loves cycling around Japan, kickboxing and hosting raclette-cheese parties with friends.`,
    published_date: '2025-01-26',
    image_url: null,
    external_url: 'https://www.linkedin.com/posts/le-wagon-tokyo_meet-yann-le-wagon-tokyos-program-manager-activity-7289446976490811392-EV6t',
    author: 'Le Wagon Tokyo',
    tags: ['Profile', 'Le Wagon', 'Management', 'Tokyo'],
    read_time: 3
  },
  {
    title: 'Build your own ChatBot with AI',
    slug: 'build-chatbot-ai-workshop-barcelona',
    excerpt: 'Free workshop at Barcelona Work Fair teaching attendees to build their own AI chatbot, led by Yann Klein and Le Wagon Spain.',
    content: `An event listing on Barcelona Expat Life promoting a free workshop at the Work in Barcelona job fair.

## Workshop Details

The listing invites participants to join you and Le Wagon Spain for a hands-on workshop where attendees will build their own AI chatbot.

## Learning Objectives

It frames the session as a way to boost tech skills and encourage newcomers to experiment with AI tools.

## Schedule

The workshop is scheduled across several dates, 1 Oct–23 Oct 2025, with each session running from 12:30 to 13:30.

## Instructor

The event description highlights your background as a software engineer and bootcamp manager and positions you as the instructor guiding participants through the chatbot-building process.`,
    published_date: '2025-10-01',
    image_url: null,
    external_url: 'https://barcelonaexpatlife.com/calendar/build-your-own-chatbot-with-ai/',
    author: 'Barcelona Expat Life',
    tags: ['Workshop', 'AI', 'Chatbot', 'Education', 'Barcelona'],
    read_time: 2
  }
];

async function seedBlogPosts() {
  console.log('Starting blog posts seeding...');

  for (const post of blogPosts) {
    const { error } = await supabase
      .from('blog_posts')
      .upsert(post, { onConflict: 'slug' });

    if (error) {
      console.error(`Error inserting post "${post.title}":`, error);
    } else {
      console.log(`✓ Inserted: ${post.title}`);
    }
  }

  console.log('Blog posts seeding complete!');
}

seedBlogPosts();
