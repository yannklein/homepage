import { Link } from 'react-router-dom';
import './Blog.css';
import { blogPosts } from '../data/blogPosts';

interface BlogProps {
  togglePortFolioVisibility: () => void;
}

const Blog: React.FC<BlogProps> = ({ togglePortFolioVisibility }) => {
  const posts = [...blogPosts].sort((a, b) =>
    new Date(b.published_date).getTime() - new Date(a.published_date).getTime()
  );

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <section id="blog" className="section blog-section" onClick={togglePortFolioVisibility}>
      <div className="section-container" onClick={event => event.stopPropagation()}>
        <h2 className="section-title">Blog</h2>
        <div className="blog-grid">
          {posts.map((post) => (
              <Link key={post.id} to={`/blog/${post.slug}`} className="blog-card">
                {(post.image_url) && (
                  <div className="blog-image">
                    <img src={post.image_url} alt={post.title} loading="lazy" />
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
      </div>
    </section>
  );
};

export default Blog;
