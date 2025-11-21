export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  published_date: string;
  tags: string[];
  image_url?: string | null;
  external_url?: string | null;
  read_time: number;
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'How to use only one Heroku Postgres Mini plan for all your Rails apps',
    slug: 'heroku-postgres-mini-plan-multiple-rails-apps',
    excerpt: 'Learn how to save on Heroku database costs by using a single Postgres Mini plan to host multiple Rails application databases through schema separation.',
    content: `Running multiple Rails apps on Heroku? Your database costs can quickly spiral out of control. But here's a clever trick: you can use just one Postgres Mini plan to power all your applications.

The secret lies in database schema separation. Instead of paying for a separate database for each app, you create a single "backend" Rails application that hosts multiple database schemas—one for each of your apps.

**How it works:** Set up one Rails app as your database host, attach its Postgres instance to your other apps using Heroku's addon attachment feature, and configure each app to use its own schema. Your apps remain independent, but they share the same physical database, slashing your monthly costs.

**The best part?** This approach doesn't just save money—it also simplifies database management. You have one place to run migrations, one backup strategy, and one database to monitor. Perfect for side projects, MVPs, or any scenario where you're juggling multiple small applications.`,
    author: 'Yann Klein',
    published_date: '2023-02-15',
    tags: ['Rails', 'Heroku', 'PostgreSQL', 'Tutorial', 'DevOps'],
    image_url: 'https://miro.medium.com/v2/resize:fit:1200/0*MMQpRd0-c7rs8fJG',
    external_url: 'https://medium.com/@yann.and.the.machines/how-to-use-only-one-heroku-postgres-mini-plan-for-all-your-rails-apps-f3fdfb458fc5',
    read_time: 7
  },
  {
    id: '2',
    title: 'Tutorial: How to build a selfie feature on your Rails app with Cloudinary',
    slug: 'build-selfie-feature-rails-cloudinary',
    excerpt: 'Step-by-step guide to implementing a webcam selfie capture feature in your Rails application using Cloudinary for image storage.',
    content: `Want to add a fun selfie feature to your Rails app? Whether you're building a social platform, a profile system, or just want to let users upload photos without the hassle of file selection, capturing selfies directly from the webcam is a game-changer.

This tutorial walks you through the entire process, from accessing the user's webcam with WebRTC to storing the captured image securely in Cloudinary. You'll learn how to build a smooth UI that lets users see themselves, snap a photo, and upload it—all without leaving your app.

**The magic ingredient:** Combining the browser's native WebRTC API with Cloudinary's powerful image management. Your users get instant feedback with a live camera preview, while you get professional-grade image hosting with automatic optimization and transformations.

**What you'll build:** A complete selfie capture flow that works across devices. Users click, smile, snap—and their photo is instantly saved and ready to use. No complex file uploads, no confusing permissions, just pure user-friendly simplicity.`,
    author: 'Yann Klein',
    published_date: '2021-08-11',
    tags: ['Rails', 'Cloudinary', 'WebRTC', 'Tutorial', 'JavaScript'],
    image_url: 'https://miro.medium.com/v2/resize:fit:1200/0*f92uFtZXtzoxipgZ',
    external_url: 'https://medium.com/@yann.and.the.machines/tutorial-how-to-build-a-selfie-feature-on-your-rails-app-with-cloudinary-97407b72a203',
    read_time: 8
  },
  {
    id: '3',
    title: 'Tutorial: build a drag-n-drop kanban board on Rails with SortableJS',
    slug: 'drag-drop-kanban-board-rails-sortablejs',
    excerpt: 'Create a Trello-like drag-and-drop kanban board in Ruby on Rails using the powerful SortableJS library for intuitive task management.',
    content: `Ever wondered how Trello makes dragging cards feel so natural? You can build that same intuitive experience in your Rails app with surprisingly little code.

This tutorial guides you through creating a fully functional kanban board where users can drag tasks between columns, reorder items, and see their changes saved instantly. No page refreshes, no clunky forms—just smooth, satisfying drag-and-drop.

**The secret weapon:** SortableJS, a lightweight library that handles all the complex drag-and-drop logic. Combined with Rails' backend power, you get a system that feels responsive in the browser while keeping your data perfectly synchronized on the server.

**What makes it special:** You'll implement real AJAX updates that persist changes immediately, handle edge cases like dropping in empty columns, and even set up the foundation for real-time collaboration. By the end, you'll have a project management tool that rivals professional solutions.

Perfect for building project dashboards, workflow managers, or any app where organizing items visually makes sense.`,
    author: 'Yann Klein',
    published_date: '2020-09-10',
    tags: ['Rails', 'JavaScript', 'SortableJS', 'Tutorial', 'UI/UX'],
    image_url: 'https://miro.medium.com/v2/resize:fit:1200/0*3QIzIBf2mRbA3Jdo',
    external_url: 'https://medium.com/le-wagon-tokyo/tutorial-build-a-drag-n-drop-kanban-board-on-rails-with-sortablejs-c6affa5642cf',
    read_time: 10
  },
  {
    id: '4',
    title: 'How to build a video record feature on your Rails app with Cloudinary',
    slug: 'video-record-feature-rails-cloudinary',
    excerpt: 'Implement video recording capabilities in your Rails application using the MediaRecorder API and Cloudinary for seamless video storage.',
    content: `Video testimonials, tutorial submissions, or personal messages—there are countless reasons to let users record videos directly in your app. But handling video uploads can be intimidating. Large files, encoding issues, storage costs... where do you even start?

This guide simplifies everything. You'll learn to capture video straight from the user's webcam using the MediaRecorder API, then stream it seamlessly to Cloudinary for professional-grade hosting and processing.

**Why this approach works:** Instead of forcing users to record separately and upload, they do everything in-browser. Click record, speak their piece, hit stop—done. Your Rails backend handles the heavy lifting, and Cloudinary takes care of video optimization, thumbnails, and streaming delivery.

**The technical flow:** The browser captures video chunks as they're recorded, your JavaScript sends them to Rails, and Cloudinary processes everything into a ready-to-stream format. Users get instant playback, while you get reliable video hosting without managing servers or worrying about bandwidth.

Great for building video review platforms, educational tools, or adding a personal touch to any application.`,
    author: 'Yann Klein',
    published_date: '2020-08-27',
    tags: ['Rails', 'Cloudinary', 'Video', 'Tutorial', 'MediaRecorder'],
    image_url: 'https://miro.medium.com/v2/resize:fit:1200/0*IzAw9g6SgMMx2zCu',
    external_url: 'https://medium.com/le-wagon-tokyo/how-to-build-a-video-record-feature-on-your-rails-app-with-cloudinary-b31e592a8e76',
    read_time: 9
  },
  {
    id: '5',
    title: 'Meet our team: Yann, lead teacher and creative programmer',
    slug: 'meet-yann-le-wagon-teacher',
    excerpt: 'A Le Wagon profile introducing Yann as the Tokyo bootcamp manager and lead front-end teacher, sharing his journey from childhood programming to technical education.',
    content: `From building Star Wars fan sites at age 12 to managing Le Wagon's Tokyo bootcamp, Yann's journey with code has always been about creative expression.

**The path here:** After earning engineering degrees in France and the US, Yann explored diverse tech environments—a printed-circuit factory in Kyoto, a VR startup in Vancouver—before finding his calling in education. Today, he splits his time between managing Le Wagon's part-time bootcamp and teaching front-end development to aspiring developers.

**Teaching philosophy:** "Anyone can learn to code," Yann insists, bringing that belief to life with humor and hands-on guidance. His classes cover everything from human-robot interaction to AR/VR development, always emphasizing that code is just another medium for creativity.

**Community builder:** Students appreciate Yann's patient explanations of complex concepts and his knack for making bootcamp challenging yet fun. Whether he's organizing workshop events or cracking jokes during debugging sessions, he's built a supportive learning environment where everyone feels welcome to experiment and grow.`,
    author: 'Le Wagon',
    published_date: '2020-08-11',
    tags: ['Profile', 'Le Wagon', 'Teaching', 'Education'],
    image_url: 'https://i0.wp.com/blog.lewagon.com/wp-content/uploads/2023/04/8ykftbeojsyaemunvzxihp3t0op3-3.jpeg?w=500&ssl=1',
    external_url: 'https://blog.lewagon.com/news/meet-our-team-yann/',
    read_time: 5
  },
  {
    id: '6',
    title: 'Getting feedback: what it changed for my product adventure',
    slug: 'getting-feedback-product-adventure',
    excerpt: 'Reflections on how gathering user feedback transformed the Magic Stickr product journey, challenging assumptions and revealing new directions.',
    content: `Here's a humbling truth: the feature you're most excited about might be the one your users care least about. That's exactly what happened with Magic Stickr.

**The wake-up call:** After running a survey, I discovered my favorite idea ranked dead last with users. Ouch. But that painful moment became the most valuable lesson in my product journey.

**The twist:** My survey audience turned out to be heavily biased—early adopters who weren't representative of the broader market. This taught me that even "bad" feedback is good feedback when it reveals your blind spots about who you're really building for.

**Why it matters:** Seeking feedback isn't just about validation—it's about challenging your assumptions, discovering directions you never considered, and staying motivated by connecting with real people who care about what you're building.

**The takeaway:** Get feedback early, get it often, and prepare to be surprised. Your users will show you the product you should be building, which might be different from the one you imagined. And that's exactly the point.`,
    author: 'Yann Klein',
    published_date: '2018-11-20',
    tags: ['Product Management', 'Feedback', 'Startup'],
    image_url: 'https://miro.medium.com/v2/resize:fit:1400/format:webp/0*n2sR_gJal-8Ri4RZ',
    external_url: 'https://medium.com/@yann.and.the.machines/getting-feedback-what-it-changed-for-my-product-adventure-9908d52a331c',
    read_time: 6
  },
  {
    id: '7',
    title: 'B2B or B2C, that is the question',
    slug: 'b2b-vs-b2c-magic-stickr',
    excerpt: 'Exploring the fundamental differences between B2B and B2C product management, and the strategic choices facing Magic Stickr.',
    content: `Building Magic Stickr—an AR platform using ThreeJS—forces me to confront every product manager's fundamental question: who am I building this for?

**The surprising truth:** Despite what conventional wisdom says, B2B and B2C aren't as different as you'd think. Both need great UX, both require understanding user needs, and both demand iteration based on feedback.

**But here's where they diverge:** In B2B, you must deeply understand your client's business environment. The buyer isn't the user, sales cycles are long, and clients expect fully-featured solutions upfront. In B2C, the environment is everyday life, you rely on analytics instead of direct conversations, and users expect simplicity over feature lists.

**Magic Stickr's dilemma:** B2C feels natural—easy empathy with users, creative freedom. But monetization is tough, and scaling means losing that handcrafted soul. B2B offers stable revenue and clear targets, but aligning it with personal values around ethics, ecology, and cultural impact becomes challenging.

**The real question:** It's not just B2B vs B2C—it's about which path lets you build something that aligns with your values while still being viable. That's the question I'm still wrestling with.`,
    author: 'Yann Klein',
    published_date: '2018-11-13',
    tags: ['Product Management', 'B2B', 'B2C', 'Strategy'],
    image_url: 'https://miro.medium.com/v2/resize:fit:1400/format:webp/0*3aaDHb9LrQpW88-A',
    external_url: 'https://medium.com/@yann.and.the.machines/magic-stickr-customers-b2b-vs-b2c-85907b20f737',
    read_time: 8
  },
  {
    id: '8',
    title: 'The day trusting people brought me to Space',
    slug: 'trusting-people-brought-me-to-space',
    excerpt: 'A personal story about launching a weather balloon with a 360-degree camera to near-space during a solar eclipse, powered by trust and collaboration.',
    content: `What happens when you become obsessed with sending something to space and decide to just... do it?

**Project Space2TryOne:** Living in Japan with a crazy idea—launch a weather balloon carrying a 360-degree camera to near-space during a solar eclipse in the US. No aerospace background. No team. Just enthusiasm and a willingness to trust strangers.

**The journey:** Through a series of chance encounters and open conversations, people I'd just met offered help, equipment, expertise, and encouragement. Someone helped with electronics, another with materials, others with logistics. Each connection brought the project closer to reality.

**Launch day:** Against all odds, the balloon lifted off during the solar eclipse, climbing to the edge of space. The footage it captured was breathtaking—a 360-degree view of Earth's curvature with the eclipse in progress.

**The lesson:** This wasn't about the technical achievement (though that was amazing). It was about what becomes possible when you trust people. When you share your wild ideas openly, when you accept help from strangers, when you believe in collective enthusiasm—extraordinary things happen.

Sometimes the most important decision is simply to start and trust that the right people will show up along the way.`,
    author: 'Yann Klein',
    published_date: '2018-05-26',
    tags: ['Personal', 'Space', 'Adventure', 'Collaboration'],
    image_url: 'https://miro.medium.com/v2/resize:fit:1400/format:webp/0*6EHljRHaNkQ8mlTm.',
    external_url: 'https://medium.com/@yann.and.the.machines/the-day-trusting-people-brought-me-to-space-6fd7e99c9642',
    read_time: 6
  },
  {
    id: '10',
    title: 'The day I decided to buy a new AppleWatch strap',
    slug: 'handcrafted-apple-watch-strap',
    excerpt: 'A bilingual narrative about handcrafting a custom leather Apple Watch strap in Tokyo, exploring the value of handmade craftsmanship.',
    content: `I needed a new Apple Watch strap. So naturally, I spent a day in Tokyo's leather district learning to make one by hand.

**The journey to Asakusa:** Tokyo's traditional craft district, where leather shops line narrow streets and artisans still work with their hands. Instead of buying a strap online, I decided to understand what goes into making something truly worth wearing every day.

**The craft:** Selecting the right leather, cutting precise patterns, hand-stitching with care, punching holes that align perfectly, finishing edges until they shine. Each step revealed why handmade objects carry weight—they hold the maker's attention, skill, and time.

**What I learned:** There's something profound about making an object you'll use daily. It changes your relationship with the thing itself. You notice the stitching. You appreciate how it ages. You understand its value beyond its function.

**The bigger picture:** In a world of mass-produced everything, taking time to craft something by hand isn't just about the final product. It's about slowing down, understanding materials, and rediscovering the satisfaction of making something that's truly yours.`,
    author: 'Yann Klein',
    published_date: '2015-10-21',
    tags: ['Craftsmanship', 'Personal', 'Tokyo', 'DIY'],
    image_url: 'https://miro.medium.com/v2/resize:fit:4288/format:webp/1*rHN1fX7Uq8oO7OWH2nSO1g.png',
    external_url: 'https://medium.com/@yann.and.the.machines/yann-and-the-machines-50540e9ec088',
    read_time: 4
  },
  {
    id: '11',
    title: 'It begins at the CEATEC',
    slug: 'ceatec-tokyo-tech-expo',
    excerpt: 'A bilingual report from the CEATEC technology expo in Tokyo, experiencing cutting-edge robots and human-computer interaction demos.',
    content: `CEATEC in Tokyo is where Japan's tech future comes to play. For someone fascinated by human-robot interaction, it's basically Disneyland.

**First stop: Honda's Uni-Cub.** A personal mobility device that responds to your body's subtle shifts. Lean forward slightly, it moves forward. Shift your weight, it turns. It feels less like controlling a machine and more like the machine understanding your intentions.

**The robot parade:** Pepper greeting visitors with surprising emotional intelligence. Nao performing choreographed dances. RoboHon—a robot that's also a phone—taking calls and walking around. Each one demonstrates different approaches to making technology feel less mechanical and more alive.

**The Japan Robot Challenge:** Watching teams compete with robots designed for real-world tasks—navigating obstacles, manipulating objects, responding to commands. It's not just about what robots can do, but how naturally they can do it.

**Future interfaces:** Beyond robots, CEATEC showcases how we'll interact with technology tomorrow. Gesture controls, brain-computer interfaces, augmented reality layers on everyday objects. The future isn't just about more powerful computers—it's about computers that understand us better.`,
    author: 'Yann Klein',
    published_date: '2015-10-18',
    tags: ['Technology', 'Robotics', 'Tokyo', 'HCI'],
    image_url: 'https://miro.medium.com/v2/resize:fit:4800/format:webp/1*QXGmYYoSEDTTynRZYJsatg.jpeg',
    external_url: 'https://medium.com/@yann.and.the.machines/it-begins-at-the-ceatec-ceatec%E3%81%A7%E5%A7%8B%E3%81%BE%E3%82%8B-279edff0206e',
    read_time: 7
  },
  {
    id: '12',
    title: 'Meet Yann, Le Wagon Tokyo\'s Program Manager',
    slug: 'meet-yann-program-manager-tokyo',
    excerpt: 'LinkedIn feature highlighting Yann\'s role as Le Wagon Tokyo\'s program manager, ensuring smooth bootcamp operations and student success.',
    content: `Behind every successful bootcamp cohort is someone making sure everything runs smoothly—from debugging tricky concepts to, yes, keeping the coffee machine working.

**The job:** As Le Wagon Tokyo's program manager, Yann orchestrates the complex dance of guiding students through intense coding sprints while maintaining an environment where learning feels supportive rather than overwhelming.

**What students say:** They appreciate his patience when explaining concepts that seem impossible at first, his kindness when they're struggling with imposter syndrome, and his humor that makes even the toughest debugging sessions feel less daunting.

**Beyond the bootcamp:** When not managing programs, Yann dives deep into VR and AR development, cycles through Japan's scenic routes, practices kickboxing, and hosts legendary raclette-cheese parties where bootcamp graduates reconnect over melted cheese and code stories.

**The philosophy:** Running a bootcamp isn't just about curriculum—it's about creating a space where people feel safe to struggle, fail, learn, and ultimately discover they're capable of more than they imagined.`,
    author: 'Le Wagon Tokyo',
    published_date: '2025-01-26',
    tags: ['Profile', 'Le Wagon', 'Management', 'Tokyo'],
    image_url: '/src/assets/image.png',
    external_url: 'https://www.linkedin.com/posts/le-wagon-tokyo_meet-yann-le-wagon-tokyos-program-manager-activity-7289446976490811392-EV6t',
    read_time: 3
  },
  {
    id: '13',
    title: 'Build your own ChatBot with AI',
    slug: 'build-chatbot-ai-workshop-barcelona',
    excerpt: 'Free workshop at Barcelona Work Fair teaching attendees to build their own AI chatbot, led by Yann Klein and Le Wagon Spain.',
    content: `Curious about AI but intimidated by the hype? This hands-on workshop at Barcelona's Work Fair strips away the complexity and gets you building.

**What you'll create:** Your own working chatbot using AI tools. No prior experience required—just bring curiosity and a laptop.

**Why it matters:** Understanding AI isn't about becoming an expert overnight. It's about demystifying the technology, experimenting with tools, and discovering that building with AI is more accessible than tech headlines make it seem.

**The approach:** Instead of overwhelming theory, you'll learn by doing. Guided by someone who's taught hundreds of people to code, you'll see how AI tools actually work and leave with something functional you built yourself.

**Who it's for:** Anyone curious about tech, job seekers wanting to boost their skills, or newcomers to Barcelona's tech scene looking to experiment with AI in a supportive environment.

Free workshop, multiple dates throughout October 2025. Come build something intelligent.`,
    author: 'Barcelona Expat Life',
    published_date: '2025-10-01',
    tags: ['Workshop', 'AI', 'Chatbot', 'Education', 'Barcelona'],
    image_url: '/src/assets/image copy.png',
    external_url: 'https://barcelonaexpatlife.com/calendar/build-your-own-chatbot-with-ai/',
    read_time: 2
  },
];
