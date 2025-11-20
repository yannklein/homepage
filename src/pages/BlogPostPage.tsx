import { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabaseClient';
import Navigation from '../Navigation';
import './BlogPostPage.css';
import MarkdownIt from 'markdown-it';

const md = new MarkdownIt();

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  published_date: string;
  image_url: string | null;
  external_url: string | null;
  author: string;
  tags: string[];
  read_time: number;
}

function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchPost();
  }, [slug]);

  useEffect(() => {
    if (post) {
      updateMetaTags();
    }
  }, [post]);

  const fetchPost = async () => {
    try {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('slug', slug)
        .maybeSingle();

      if (error) throw error;

      if (!data) {
        navigate('/');
        return;
      }

      setPost(data);
      fetchRelatedPosts(data.tags);
    } catch (error) {
      console.error('Error fetching post:', error);
      navigate('/');
    } finally {
      setLoading(false);
    }
  };

  const fetchRelatedPosts = async (tags: string[]) => {
    try {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .neq('slug', slug)
        .order('published_date', { ascending: false })
        .limit(3);

      if (error) throw error;
      if (data) setRelatedPosts(data);
    } catch (error) {
      console.error('Error fetching related posts:', error);
    }
  };

  const updateMetaTags = () => {
    if (!post) return;

    document.title = `${post.title} | Yann Klein`;

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', post.excerpt);
    }

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', post.title);
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', post.excerpt);
    }

    if (post.image_url) {
      const ogImage = document.querySelector('meta[property="og:image"]');
      if (ogImage) {
        ogImage.setAttribute('content', post.image_url);
      }
    }
  };

  if (loading) {
    return (
      <div className="blog-post-page">
        <Navigation activeSection="blog" />
        <div className="blog-post-loading">
          <div className="loading-spinner"></div>
        </div>
      </div>
    );
  }

  if (!post) {
    return null;
  }

  const formattedDate = new Date(post.published_date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="blog-post-page" itemScope itemType="https://schema.org/BlogPosting">
      <Navigation activeSection="blog" />

      <article className="blog-post-container">
        <div className="blog-post-header">
          <Link to="/#blog" className="back-link">
            <i className="fas fa-arrow-left"></i> Back to Blog
          </Link>

          <div className="blog-post-meta">
            <time dateTime={post.published_date} itemProp="datePublished">
              {formattedDate}
            </time>
            <span className="separator">•</span>
            <span className="read-time">{post.read_time} min read</span>
          </div>

          <h1 className="blog-post-title" itemProp="headline">{post.title}</h1>

          <div className="blog-post-author" itemProp="author" itemScope itemType="https://schema.org/Person">
            <span itemProp="name">{post.author}</span>
          </div>

          {post.image_url && (
            <div className="blog-post-image">
              <img
                src={post.image_url}
                alt={post.title}
                itemProp="image"
                loading="lazy"
              />
            </div>
          )}
        </div>

        <div className="blog-post-content" itemProp="articleBody">
          <div
            dangerouslySetInnerHTML={{ __html: md.render(post.content) }}
          />
        </div>

        {post.external_url && (
          <div className="blog-post-external">
            <a
              href={post.external_url}
              target="_blank"
              rel="noopener noreferrer"
              className="external-link"
            >
              Read full article on Medium <i className="fas fa-external-link-alt"></i>
            </a>
          </div>
        )}

        {post.tags && post.tags.length > 0 && (
          <div className="blog-post-tags">
            {post.tags.map((tag) => (
              <span key={tag} className="tag" itemProp="keywords">
                {tag}
              </span>
            ))}
          </div>
        )}

        <meta itemProp="publisher" content="Yann Klein" />
        <meta itemProp="dateModified" content={post.published_date} />
      </article>

      {relatedPosts.length > 0 && (
        <section className="related-posts">
          <div className="related-posts-container">
            <h2>Related Articles</h2>
            <div className="related-posts-grid">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.id}
                  to={`/blog/${relatedPost.slug}`}
                  className="related-post-card"
                >
                  {relatedPost.image_url && (
                    <div className="related-post-image">
                      <img src={relatedPost.image_url} alt={relatedPost.title} loading="lazy" />
                    </div>
                  )}
                  <div className="related-post-content">
                    <h3>{relatedPost.title}</h3>
                    <p>{relatedPost.excerpt}</p>
                    <time>
                      {new Date(relatedPost.published_date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric'
                      })}
                    </time>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

export default BlogPostPage;
