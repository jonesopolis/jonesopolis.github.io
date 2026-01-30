import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getRelatedPosts } from '../contentful';

function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toISOString().split('T')[0].replace(/-/g, '.');
}

export default function RelatedPosts({ currentSlug, tags }) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (tags && tags.length > 0) {
      getRelatedPosts(currentSlug, tags, 2)
        .then(setPosts)
        .finally(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, [currentSlug, tags]);

  if (loading) {
    return (
      <section className="related-posts">
        <h2>Related Posts</h2>
        <div className="related-posts-grid">
          <div className="related-post-card skeleton">
            <div className="skeleton-line skeleton-title"></div>
            <div className="skeleton-line"></div>
          </div>
          <div className="related-post-card skeleton">
            <div className="skeleton-line skeleton-title"></div>
            <div className="skeleton-line"></div>
          </div>
        </div>
      </section>
    );
  }

  if (posts.length === 0) {
    return null;
  }

  return (
    <section className="related-posts">
      <h2>Related Posts</h2>
      <div className="related-posts-grid">
        {posts.map((post) => (
          <Link key={post.slug} to={`/post/${post.slug}`} className="related-post-card">
            <div className="related-post-content">
              <h3>{post.title}</h3>
              <span className="post-date">{formatDate(post.publishDate)}</span>
              <div className="post-tags">
                {post.tags.slice(0, 2).map((tag) => (
                  <span key={tag.slug} className="tag">{tag.name}</span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
