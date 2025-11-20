import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Blog.css';
import { supabase, type BlogPost } from '../lib/supabaseClient';

const Blog = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      if (!supabase) {
        setPosts(mockPosts);
        setLoading(false);
        return;
      }

      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .order('published_date', { ascending: false });

      if (error) throw error;
      setPosts(data || []);
    } catch (error) {
      console.error('Error fetching blog posts:', error);
      setPosts(mockPosts);
    } finally {
      setLoading(false);
    }
  };

  const mockPosts: BlogPost[] = [
    {
      id: '1',
      title: 'How to use only one Heroku Postgres Mini plan for all your Rails apps',
      slug: 'heroku-postgres-mini-plan-multiple-rails-apps',
      excerpt: 'Learn how to save on Heroku database costs by using a single Postgres Mini plan to host multiple Rails application databases through schema separation.',
      content: '',
      author: 'Yann Klein',
      published_date: '2023-02-15',
      tags: ['Rails', 'Heroku', 'PostgreSQL'],
      image_url: 'https://miro.medium.com/v2/resize:fit:1200/0*MMQpRd0-c7rs8fJG',
      external_url: 'https://medium.com/@yann.and.the.machines/how-to-use-only-one-heroku-postgres-mini-plan-for-all-your-rails-apps-f3fdfb458fc5',
      read_time: 7,
      created_at: '2023-02-15',
      updated_at: '2023-02-15',
    },
    {
      id: '2',
      title: 'Tutorial: How to build a selfie feature on your Rails app with Cloudinary',
      slug: 'build-selfie-feature-rails-cloudinary',
      excerpt: 'Step-by-step guide to implementing a webcam selfie capture feature in your Rails application using Cloudinary for image storage.',
      content: '',
      author: 'Yann Klein',
      published_date: '2021-08-11',
      tags: ['Rails', 'Cloudinary', 'Tutorial'],
      image_url: 'https://miro.medium.com/v2/resize:fit:1200/0*f92uFtZXtzoxipgZ',
      external_url: 'https://medium.com/@yann.and.the.machines/tutorial-how-to-build-a-selfie-feature-on-your-rails-app-with-cloudinary-97407b72a203',
      read_time: 8,
      created_at: '2021-08-11',
      updated_at: '2021-08-11',
    },
    {
      id: '3',
      title: 'Tutorial: build a drag-n-drop kanban board on Rails with SortableJS',
      slug: 'drag-drop-kanban-board-rails-sortablejs',
      excerpt: 'Create a Trello-like drag-and-drop kanban board in Ruby on Rails using the powerful SortableJS library for intuitive task management.',
      content: '',
      author: 'Yann Klein',
      published_date: '2020-09-10',
      tags: ['Rails', 'JavaScript', 'Tutorial'],
      image_url: 'https://miro.medium.com/v2/resize:fit:1200/0*3QIzIBf2mRbA3Jdo',
      external_url: 'https://medium.com/le-wagon-tokyo/tutorial-build-a-drag-n-drop-kanban-board-on-rails-with-sortablejs-c6affa5642cf',
      read_time: 10,
      created_at: '2020-09-10',
      updated_at: '2020-09-10',
    },
    {
      id: '4',
      title: 'How to build a video record feature on your Rails app with Cloudinary',
      slug: 'video-record-feature-rails-cloudinary',
      excerpt: 'Implement video recording capabilities in your Rails application using the MediaRecorder API and Cloudinary for seamless video storage.',
      content: '',
      author: 'Yann Klein',
      published_date: '2020-08-27',
      tags: ['Rails', 'Cloudinary', 'Video', 'Tutorial'],
      image_url: 'https://miro.medium.com/v2/resize:fit:1200/0*IzAw9g6SgMMx2zCu',
      external_url: 'https://medium.com/le-wagon-tokyo/how-to-build-a-video-record-feature-on-your-rails-app-with-cloudinary-b31e592a8e76',
      read_time: 9,
      created_at: '2020-08-27',
      updated_at: '2020-08-27',
    },
    {
      id: '5',
      title: 'Meet our team: Yann, lead teacher and creative programmer',
      slug: 'meet-yann-le-wagon-teacher',
      excerpt: 'A Le Wagon profile introducing Yann as the Tokyo bootcamp manager and lead front-end teacher, sharing his journey from childhood programming to technical education.',
      content: '',
      author: 'Le Wagon',
      published_date: '2020-08-11',
      tags: ['Profile', 'Le Wagon', 'Teaching', 'Education'],
      image_url: null,
      external_url: 'https://blog.lewagon.com/news/meet-our-team-yann/',
      read_time: 5,
      created_at: '2020-08-11',
      updated_at: '2020-08-11',
    },
    {
      id: '6',
      title: 'Getting feedback: what it changed for my product adventure',
      slug: 'getting-feedback-product-adventure',
      excerpt: 'Reflections on how gathering user feedback transformed the Magic Stickr product journey, challenging assumptions and revealing new directions.',
      content: '',
      author: 'Yann Klein',
      published_date: '2018-11-20',
      tags: ['Product Management', 'Feedback', 'Startup'],
      image_url: null,
      external_url: 'https://medium.com/@yann.and.the.machines/getting-feedback-what-it-changed-for-my-product-adventure-9908d52a331c',
      read_time: 6,
      created_at: '2018-11-20',
      updated_at: '2018-11-20',
    },
    {
      id: '7',
      title: 'B2B or B2C, that is the question',
      slug: 'b2b-vs-b2c-magic-stickr',
      excerpt: 'Exploring the fundamental differences between B2B and B2C product management, and the strategic choices facing Magic Stickr.',
      content: '',
      author: 'Yann Klein',
      published_date: '2018-11-13',
      tags: ['Product Management', 'B2B', 'B2C', 'Strategy'],
      image_url: null,
      external_url: 'https://medium.com/@yann.and.the.machines/magic-stickr-customers-b2b-vs-b2c-85907b20f737',
      read_time: 8,
      created_at: '2018-11-13',
      updated_at: '2018-11-13',
    },
    {
      id: '8',
      title: 'The day trusting people brought me to Space',
      slug: 'trusting-people-brought-me-to-space',
      excerpt: 'A personal story about launching a weather balloon with a 360-degree camera to near-space during a solar eclipse, powered by trust and collaboration.',
      content: '',
      author: 'Yann Klein',
      published_date: '2018-05-26',
      tags: ['Personal', 'Space', 'Adventure', 'Collaboration'],
      image_url: null,
      external_url: 'https://medium.com/@yann.and.the.machines/the-day-trusting-people-brought-me-to-space-6fd7e99c9642',
      read_time: 6,
      created_at: '2018-05-26',
      updated_at: '2018-05-26',
    },
    {
      id: '9',
      title: '3 unusual rules that broadened my reading horizons',
      slug: 'three-unusual-reading-rules',
      excerpt: 'Three simple but powerful rules that dramatically increased reading volume and created a virtuous cycle of continuous learning.',
      content: '',
      author: 'Yann Klein',
      published_date: '2018-05-20',
      tags: ['Personal Development', 'Reading', 'Habits'],
      image_url: null,
      external_url: 'https://medium.com/@yann.and.the.machines/3-unusual-rules-that-broadened-my-reading-horizons-c5ddbbaf998d',
      read_time: 5,
      created_at: '2018-05-20',
      updated_at: '2018-05-20',
    },
    {
      id: '10',
      title: 'The day I decided to buy a new AppleWatch strap',
      slug: 'handcrafted-apple-watch-strap',
      excerpt: 'A bilingual narrative about handcrafting a custom leather Apple Watch strap in Tokyo, exploring the value of handmade craftsmanship.',
      content: '',
      author: 'Yann Klein',
      published_date: '2015-10-21',
      tags: ['Craftsmanship', 'Personal', 'Tokyo', 'DIY'],
      image_url: null,
      external_url: 'https://medium.com/@yann.and.the.machines/yann-and-the-machines-50540e9ec088',
      read_time: 4,
      created_at: '2015-10-21',
      updated_at: '2015-10-21',
    },
    {
      id: '11',
      title: 'It begins at the CEATEC',
      slug: 'ceatec-tokyo-tech-expo',
      excerpt: 'A bilingual report from the CEATEC technology expo in Tokyo, experiencing cutting-edge robots and human-computer interaction demos.',
      content: '',
      author: 'Yann Klein',
      published_date: '2015-10-18',
      tags: ['Technology', 'Robotics', 'Tokyo', 'HCI'],
      image_url: null,
      external_url: 'https://medium.com/@yann.and.the.machines/it-begins-at-the-ceatec-ceatec%E3%81%A7%E5%A7%8B%E3%81%BE%E3%82%8B-279edff0206e',
      read_time: 7,
      created_at: '2015-10-18',
      updated_at: '2015-10-18',
    },
    {
      id: '12',
      title: 'Meet Yann, Le Wagon Tokyo\'s Program Manager',
      slug: 'meet-yann-program-manager-tokyo',
      excerpt: 'LinkedIn feature highlighting Yann\'s role as Le Wagon Tokyo\'s program manager, ensuring smooth bootcamp operations and student success.',
      content: '',
      author: 'Le Wagon Tokyo',
      published_date: '2025-01-26',
      tags: ['Profile', 'Le Wagon', 'Management', 'Tokyo'],
      image_url: null,
      external_url: 'https://www.linkedin.com/posts/le-wagon-tokyo_meet-yann-le-wagon-tokyos-program-manager-activity-7289446976490811392-EV6t',
      read_time: 3,
      created_at: '2025-01-26',
      updated_at: '2025-01-26',
    },
    {
      id: '13',
      title: 'Build your own ChatBot with AI',
      slug: 'build-chatbot-ai-workshop-barcelona',
      excerpt: 'Free workshop at Barcelona Work Fair teaching attendees to build their own AI chatbot, led by Yann Klein and Le Wagon Spain.',
      content: '',
      author: 'Barcelona Expat Life',
      published_date: '2025-10-01',
      tags: ['Workshop', 'AI', 'Chatbot', 'Education', 'Barcelona'],
      image_url: null,
      external_url: 'https://barcelonaexpatlife.com/calendar/build-your-own-chatbot-with-ai/',
      read_time: 2,
      created_at: '2025-10-01',
      updated_at: '2025-10-01',
    },
  ];

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <section id="blog" className="section blog-section">
      <div className="section-container">
        <h2 className="section-title">Blog</h2>
        {loading ? (
          <div className="blog-loading">Loading posts...</div>
        ) : (
          <div className="blog-grid">
            {(posts.length > 0 ? posts : mockPosts).map((post) => (
              <Link key={post.id} to={`/blog/${post.slug}`} className="blog-card">
                {(post.image_url || post.featured_image) && (
                  <div className="blog-image">
                    <img src={post.image_url || post.featured_image} alt={post.title} loading="lazy" />
                  </div>
                )}
                <div className="blog-content">
                  <div className="blog-meta">
                    <span className="blog-date">{formatDate(post.published_date)}</span>
                    {post.read_time && <span className="blog-read-time">{post.read_time} min read</span>}
                  </div>
                  <h3 className="blog-title">{post.title}</h3>
                  <p className="blog-excerpt">{post.excerpt}</p>
                  <div className="blog-tags">
                    {post.tags.map((tag) => (
                      <span key={tag} className="blog-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Blog;
