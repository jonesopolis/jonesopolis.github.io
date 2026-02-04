import Link from 'next/link';
import { getDraftPosts, getSiteSettings, getFooter } from '../../lib/contentful';
import Footer from '../../src/components/Footer';

export const metadata = {
  title: 'Unpublished | Please Recompile',
  description: 'Unpublished posts',
};

function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toISOString().split('T')[0].replace(/-/g, '.');
}

function getMonthYear(dateString) {
  const date = new Date(dateString);
  return `${date.toLocaleString('default', { month: 'long' })} ${date.getFullYear()}`.toLowerCase();
}

export default async function DraftsPage() {
  const [posts, settings, footer] = await Promise.all([
    getDraftPosts(),
    getSiteSettings(),
    getFooter(),
  ]);

  let lastMonth = null;

  return (
    <>
      <div className="container">
        <div className="drafts-header">
          <h1>unpublished</h1>
        </div>
        {posts.length === 0 ? (
          <section className="posts">
            <p className="no-drafts">no unpublished posts yet</p>
          </section>
        ) : (
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
                  <Link href={`/drafts/${post.slug}`} className={`timeline-post-3${isLast ? ' last' : ''}`}>
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
        )}
      </div>
      <Footer footer={footer} />
    </>
  );
}
