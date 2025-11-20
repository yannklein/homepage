import { useState, useEffect } from 'react';
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
        .eq('is_published', true)
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
      title: 'Building Modern Web Applications with React and TypeScript',
      slug: 'react-typescript-guide',
      excerpt: 'Learn how to build scalable web applications using React and TypeScript with best practices and modern patterns.',
      content: '',
      author: 'Yann Klein',
      published_date: '2024-03-15',
      tags: ['React', 'TypeScript', 'Web Development'],
      is_published: true,
      created_at: '2024-03-15',
      updated_at: '2024-03-15',
    },
    {
      id: '2',
      title: 'The Art of Teaching Code: Lessons from Le Wagon',
      slug: 'teaching-code-lessons',
      excerpt: 'Insights and strategies for teaching programming effectively, drawn from years of experience at Le Wagon Tokyo.',
      content: '',
      author: 'Yann Klein',
      published_date: '2024-03-10',
      tags: ['Education', 'Teaching', 'Bootcamp'],
      is_published: true,
      created_at: '2024-03-10',
      updated_at: '2024-03-10',
    },
    {
      id: '3',
      title: 'Mastering Ruby on Rails: A Complete Guide',
      slug: 'mastering-ruby-on-rails',
      excerpt: 'From basics to advanced topics, everything you need to know about building web applications with Ruby on Rails.',
      content: '',
      author: 'Yann Klein',
      published_date: '2024-03-05',
      tags: ['Ruby on Rails', 'Backend', 'Web Development'],
      is_published: true,
      created_at: '2024-03-05',
      updated_at: '2024-03-05',
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
              <article key={post.id} className="blog-card">
                {post.featured_image && (
                  <div className="blog-image">
                    <img src={post.featured_image} alt={post.title} />
                  </div>
                )}
                <div className="blog-content">
                  <div className="blog-meta">
                    <span className="blog-date">{formatDate(post.published_date)}</span>
                    <span className="blog-author">by {post.author}</span>
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
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Blog;
