-- Create blog_posts table
CREATE TABLE IF NOT EXISTS blog_posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text UNIQUE NOT NULL,
  excerpt text NOT NULL,
  content text NOT NULL,
  published_date date NOT NULL,
  image_url text,
  external_url text,
  author text NOT NULL DEFAULT 'Yann Klein',
  tags text[] DEFAULT '{}',
  read_time integer NOT NULL DEFAULT 5,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Anyone can read blog posts" ON blog_posts;
DROP POLICY IF EXISTS "Only authenticated users can insert blog posts" ON blog_posts;
DROP POLICY IF EXISTS "Only authenticated users can update blog posts" ON blog_posts;
DROP POLICY IF EXISTS "Only authenticated users can delete blog posts" ON blog_posts;

-- Create policies
CREATE POLICY "Anyone can read blog posts"
  ON blog_posts
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Only authenticated users can insert blog posts"
  ON blog_posts
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Only authenticated users can update blog posts"
  ON blog_posts
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Only authenticated users can delete blog posts"
  ON blog_posts
  FOR DELETE
  TO authenticated
  USING (true);

-- Create indexes
CREATE INDEX IF NOT EXISTS idx_blog_posts_slug ON blog_posts(slug);
CREATE INDEX IF NOT EXISTS idx_blog_posts_published_date ON blog_posts(published_date DESC);
CREATE INDEX IF NOT EXISTS idx_blog_posts_tags ON blog_posts USING gin(tags);

-- Insert blog posts
INSERT INTO blog_posts (title, slug, excerpt, content, published_date, image_url, external_url, author, tags, read_time) VALUES
('How to use only one Heroku Postgres Mini plan for all your Rails apps', 'heroku-postgres-mini-plan-multiple-rails-apps', 'Learn how to save on Heroku database costs by using a single Postgres Mini plan to host multiple Rails application databases through schema separation.', 'Use one Heroku Postgres Mini plan for multiple Rails apps by building a single backend app hosting several databases. In summary:

## Create a Shared Backend App
Create a new Rails app ("backend") that will host all databases. Use a Heroku Postgres Mini plan on this backend and create multiple database extensions for each service you need.

## Attach the Backend DB to Other Apps
For each Rails app that needs a database, attach the backend database using `heroku addons:attach`. Configure the `DATABASE_URL` environment variable to point at the appropriate schema.

## Create Models and Seeds
In the backend app, define all models and migrations. When seeding, prefix tables with each app name to avoid conflicts.

## Update Existing Projects
If you already have Rails projects, migrate their database structure and data into the backend''s new schemas. Update their configs to point to the shared database.

## Benefits
This approach saves on Heroku DB costs while allowing multiple apps to share a single Postgres instance.', '2023-02-15', 'https://miro.medium.com/v2/resize:fit:1200/0*MMQpRd0-c7rs8fJG', 'https://medium.com/@yann.and.the.machines/how-to-use-only-one-heroku-postgres-mini-plan-for-all-your-rails-apps-f3fdfb458fc5', 'Yann Klein', ARRAY['Rails', 'Heroku', 'PostgreSQL', 'Tutorial', 'DevOps'], 7),

('Tutorial: How to build a selfie feature on your Rails app with Cloudinary', 'build-selfie-feature-rails-cloudinary', 'Step-by-step guide to implementing a webcam selfie capture feature in your Rails application using Cloudinary for image storage.', 'This tutorial explains how to implement a selfie-taking feature using Cloudinary and Rails:

## Setup
Add the `cloudinary` gem and configure Cloudinary credentials. Set up ActiveStorage.

## Model
Add a `photo` attachment to your model.

## View
Build a webcam-enabled UI using WebRTC.

## JS
Capture a frame, convert to Blob, upload via AJAX.

## Controller
Upload to Cloudinary, store the returned URL.

## Result
A fully working selfie capture feature.', '2021-08-11', 'https://miro.medium.com/v2/resize:fit:1200/0*f92uFtZXtzoxipgZ', 'https://medium.com/@yann.and.the.machines/tutorial-how-to-build-a-selfie-feature-on-your-rails-app-with-cloudinary-97407b72a203', 'Yann Klein', ARRAY['Rails', 'Cloudinary', 'WebRTC', 'Tutorial', 'JavaScript'], 8),

('Tutorial: build a drag-n-drop kanban board on Rails with SortableJS', 'drag-drop-kanban-board-rails-sortablejs', 'Create a Trello-like drag-and-drop kanban board in Ruby on Rails using the powerful SortableJS library for intuitive task management.', 'Learn to create a Trello-like kanban board in Rails using SortableJS:

## Models
Kanban, KanbanColumn, Card

## View
Board layout showing columns and cards

## SortableJS
Add drag-and-drop behavior

## Persistence
Save new order to backend via AJAX

## Enhancements
Realtime updates and auto-save', '2020-09-10', 'https://miro.medium.com/v2/resize:fit:1200/0*3QIzIBf2mRbA3Jdo', 'https://medium.com/le-wagon-tokyo/tutorial-build-a-drag-n-drop-kanban-board-on-rails-with-sortablejs-c6affa5642cf', 'Yann Klein', ARRAY['Rails', 'JavaScript', 'SortableJS', 'Tutorial', 'UI/UX'], 10),

('How to build a video record feature on your Rails app with Cloudinary', 'video-record-feature-rails-cloudinary', 'Implement video recording capabilities in your Rails application using the MediaRecorder API and Cloudinary for seamless video storage.', 'Guide to implementing video recording in a Rails app:

## Setup Cloudinary + ActiveStorage
Configure your Rails app with Cloudinary integration and ActiveStorage for media management.

## Use MediaRecorder API to Capture Video
Leverage the browser''s MediaRecorder API to capture video directly from the user''s webcam.

## Upload Chunks to Rails Backend
Stream video chunks to your Rails backend as they''re recorded.

## Store the Cloudinary Video URL
Save the final Cloudinary URL in your database for easy retrieval.

## Display the Recorded Video to Users
Show the recorded video back to users with proper playback controls.', '2020-08-27', 'https://miro.medium.com/v2/resize:fit:1200/0*IzAw9g6SgMMx2zCu', 'https://medium.com/le-wagon-tokyo/how-to-build-a-video-record-feature-on-your-rails-app-with-cloudinary-b31e592a8e76', 'Yann Klein', ARRAY['Rails', 'Cloudinary', 'Video', 'Tutorial', 'MediaRecorder'], 9),

('The day trusting people brought me to Space', 'trusting-people-brought-me-to-space', 'A personal story about launching a weather balloon with a 360-degree camera to near-space during a solar eclipse, powered by trust and collaboration.', 'A personal story about sending a weather balloon with a 360-degree camera to near-space.

## The Fascination
You became fascinated with space and launched project "Space2TryOne."

## The Journey
Living in Japan, you met people who helped build the balloon.

## The Launch
The balloon was launched during a US solar eclipse.

## The Result
It captured incredible footage from near-space.

## Theme
Trusting strangers leads to extraordinary experiences.', '2018-05-26', NULL, 'https://medium.com/@yann.and.the.machines/the-day-trusting-people-brought-me-to-space-6fd7e99c9642', 'Yann Klein', ARRAY['Personal', 'Space', 'Adventure', 'Collaboration'], 6),

('3 unusual rules that broadened my reading horizons', 'three-unusual-reading-rules', 'Three simple but powerful rules that dramatically increased reading volume and created a virtuous cycle of continuous learning.', 'Three rules that dramatically expanded your reading volume:

## 1. Unlimited Book Budget
Remove financial friction from reading by allowing yourself to buy any book without guilt.

## 2. Immediate Purchase of Any Recommendation
Act immediately on book recommendations to capitalize on peak interest.

## 3. Share Your Rules and Books to Create a Feedback Loop
Create accountability and discover new books by sharing your reading journey.

These habits remove friction and create a reading "virtuous cycle."', '2018-05-20', NULL, 'https://medium.com/@yann.and.the.machines/3-unusual-rules-that-broadened-my-reading-horizons-c5ddbbaf998d', 'Yann Klein', ARRAY['Personal Development', 'Reading', 'Habits'], 5),

('The day I decided to buy a new AppleWatch strap', 'handcrafted-apple-watch-strap', 'A bilingual narrative about handcrafting a custom leather Apple Watch strap in Tokyo, exploring the value of handmade craftsmanship.', 'A bilingual narrative describing how you handcrafted a custom leather Apple Watch strap in Tokyo:

## Shopping for Materials
Exploring leather shops in Asakusa to find the perfect materials.

## The Craft
Cutting, sewing, punching, and finishing the leather with attention to detail.

## Lessons in Craftsmanship
Learning about making handmade objects worthy of daily use.', '2015-10-21', NULL, 'https://medium.com/@yann.and.the.machines/yann-and-the-machines-50540e9ec088', 'Yann Klein', ARRAY['Craftsmanship', 'Personal', 'Tokyo', 'DIY'], 4),

('It begins at the CEATEC', 'ceatec-tokyo-tech-expo', 'A bilingual report from the CEATEC technology expo in Tokyo, experiencing cutting-edge robots and human-computer interaction demos.', 'A bilingual report from the CEATEC technology expo in Tokyo:

## Experiencing Honda''s Uni-Cub
Testing Honda''s personal mobility device.

## Meeting Robots
Pepper, Nao, RoboHon and other cutting-edge robotics.

## Watching the Japan Robot Challenge
Observing competitive robotics in action.

## Exploring HCI Demos and Futuristic Tech
Discovering the future of human-computer interaction.', '2015-10-18', NULL, 'https://medium.com/@yann.and.the.machines/it-begins-at-the-ceatec-ceatec%E3%81%A7%E5%A7%8B%E3%81%BE%E3%82%8B-279edff0206e', 'Yann Klein', ARRAY['Technology', 'Robotics', 'Tokyo', 'HCI'], 7),

('Getting feedback: what it changed for my product adventure', 'getting-feedback-product-adventure', 'Reflections on how gathering user feedback transformed the Magic Stickr product journey, challenging assumptions and revealing new directions.', 'Reflection on gathering feedback for Magic Stickr:

## Survey Results
Survey revealed your favorite idea was least popular with users.

## Audience Bias
Audience was biased (early adopters), teaching important lessons about market research.

## Benefits of Feedback
Feedback fuels motivation, challenges assumptions, and reveals new ideas.

## Encouragement
Active encouragement to seek feedback early and often.', '2018-11-20', NULL, 'https://medium.com/@yann.and.the.machines/getting-feedback-what-it-changed-for-my-product-adventure-9908d52a331c', 'Yann Klein', ARRAY['Product Management', 'Feedback', 'Startup'], 6),

('B2B or B2C, that is the question', 'b2b-vs-b2c-magic-stickr', 'Exploring the fundamental differences between B2B and B2C product management, and the strategic choices facing Magic Stickr.', 'Exploring B2B vs B2C for Magic Stickr:

## 3 Interesting Facts
- B2B & B2C are not as different as commonly claimed
- PM resources are overwhelmingly B2C-oriented
- MVP/Agile are harder in B2B because clients demand everything planned upfront

## 6 Typical Differences

**B2B:**
- Must know client''s business environment deeply
- Buyer ≠ user; many middle layers
- Direct line with clients
- Multi-feature, customized products
- Few clients, big revenue
- Long sales cycles

**B2C:**
- Environment = everyday life
- Buyer = user
- No direct line; rely on analytics
- Simple features, great UX
- Many users, small payments

## Conclusion
No clear winner. Open question: which path aligns with values, impact, and product soul?', '2018-11-13', NULL, 'https://medium.com/@yann.and.the.machines/magic-stickr-customers-b2b-vs-b2c-85907b20f737', 'Yann Klein', ARRAY['Product Management', 'B2B', 'B2C', 'Strategy'], 8),

('Meet our team: Yann, lead teacher and creative programmer', 'meet-yann-le-wagon-teacher', 'A Le Wagon profile introducing Yann as the Tokyo bootcamp manager and lead front-end teacher, sharing his journey from childhood programming to technical education.', 'A profile from Le Wagon''s blog:

## Early Beginnings
You built your first website at age 12 (complete with Star Wars animations), sparking a lifelong fascination with tech.

## Education and Career
Holding engineering degrees from France and the US, you''ve worked in a Kyoto printed-circuit factory and a Vancouver VR start-up before joining Le Wagon.

## Le Wagon Journey
You joined Le Wagon as the driver of the Kyoto coding bootcamp and later moved to Tokyo.

## Teaching Philosophy
Teaching for you is about creative expression; you emphasize that anyone can learn to code.

## Community Approach
You make classes fun with jokes and help foster a supportive network.', '2020-08-11', NULL, 'https://blog.lewagon.com/news/meet-our-team-yann/', 'Le Wagon', ARRAY['Profile', 'Le Wagon', 'Teaching', 'Education'], 5),

('Meet Yann, Le Wagon Tokyo''s Program Manager', 'meet-yann-program-manager-tokyo', 'LinkedIn feature highlighting Yann''s role as Le Wagon Tokyo''s program manager, ensuring smooth bootcamp operations and student success.', 'A LinkedIn post from Le Wagon Tokyo:

## Role and Responsibilities
You ensure everything runs smoothly—from guiding students through challenging sprints to keeping the coffee machine working.

## Student Perspective
Students appreciate your kindness and patience when explaining tricky concepts, and they enjoy your sense of humour.

## Outside Work
You''re a VR/AR enthusiast who also loves cycling around Japan, kickboxing and hosting raclette-cheese parties.', '2025-01-26', NULL, 'https://www.linkedin.com/posts/le-wagon-tokyo_meet-yann-le-wagon-tokyos-program-manager-activity-7289446976490811392-EV6t', 'Le Wagon Tokyo', ARRAY['Profile', 'Le Wagon', 'Management', 'Tokyo'], 3),

('Build your own ChatBot with AI', 'build-chatbot-ai-workshop-barcelona', 'Free workshop at Barcelona Work Fair teaching attendees to build their own AI chatbot, led by Yann Klein and Le Wagon Spain.', 'Workshop details:

## Workshop Details
Free hands-on workshop where attendees will build their own AI chatbot.

## Learning Objectives
Boost tech skills and experiment with AI tools.

## Schedule
Multiple sessions from 12:30 to 13:30.

## Instructor
Led by Yann Klein, software engineer and bootcamp manager.', '2025-10-01', NULL, 'https://barcelonaexpatlife.com/calendar/build-your-own-chatbot-with-ai/', 'Barcelona Expat Life', ARRAY['Workshop', 'AI', 'Chatbot', 'Education', 'Barcelona'], 2)

ON CONFLICT (slug) DO UPDATE SET
  title = EXCLUDED.title,
  excerpt = EXCLUDED.excerpt,
  content = EXCLUDED.content,
  published_date = EXCLUDED.published_date,
  image_url = EXCLUDED.image_url,
  external_url = EXCLUDED.external_url,
  author = EXCLUDED.author,
  tags = EXCLUDED.tags,
  read_time = EXCLUDED.read_time,
  updated_at = now();
