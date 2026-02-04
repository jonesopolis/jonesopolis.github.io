import Link from 'next/link';

function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toISOString().split('T')[0].replace(/-/g, '.');
}

function getMonthYear(dateString) {
  const date = new Date(dateString);
  return `${date.toLocaleString('default', { month: 'long' })} ${date.getFullYear()}`.toLowerCase();
}

export default function PostList({ posts, settings }) {
  let lastMonth = null;

  return (
    <section className="posts timeline-3">
      {posts.map((post, index) => {
        const monthYear = getMonthYear(post.publishDate);
        const showMonthBreak = monthYear !== lastMonth;
        lastMonth = monthYear;
        const isLast = index === posts.length - 1;

        return (
          <div key={post.slug} className="timeline-item">
            {showMonthBreak && (
              <div className="month-break">
                <span className="month-label">{monthYear}</span>
              </div>
            )}
            <Link href={`/${post.slug}`} className={`timeline-post-3${isLast ? ' last' : ''}`}>
              <span className="date">{formatDate(post.publishDate)}</span>
              <span className="line"></span>
              <span className="content">
                <span className="hook">{post.hook || 'what can we learn?'}</span>
                <span className="title">{post.title}</span>
              </span>
            </Link>
          </div>
        );
      })}
    </section>
  );
}
