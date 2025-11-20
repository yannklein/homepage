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
        .order('published_date', { ascending: false })
        .limit(6);

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
