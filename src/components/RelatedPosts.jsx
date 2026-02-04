import Link from 'next/link';

function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toISOString().split('T')[0].replace(/-/g, '.');
}

export default function RelatedPosts({ posts, settings }) {
  if (!posts || posts.length === 0) {
    return null;
  }

  return (
    <section className="related-posts">
      <h2>{settings?.relatedPostsTitle || 'Related'}</h2>
      <div className="related-posts-grid">
        {posts.map((post) => (
          <Link key={post.slug} href={`/${post.slug}`} className="related-post-card">
            <span className="date">{formatDate(post.publishDate)}</span>
            <span className="hook">{post.hook}</span>
            <span className="title">{post.title}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
