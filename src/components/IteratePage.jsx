import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getPosts } from '../contentful';
import SEO from './SEO';
import Footer from './Footer';

function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toISOString().split('T')[0].replace(/-/g, '.');
}

// Layout 1: Hook only (minimal)
function Layout1({ posts }) {
  return (
    <div className="iterate-layout">
      <h3 className="iterate-layout-title">1. hook only</h3>
      <div className="iterate-posts layout-1">
        {posts.map((post) => (
          <Link key={post.slug} to={`/${post.slug}`} className="iterate-post-1">
            <span className="hook">{post.hook || 'what can we learn?'}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

// Layout 2: Hook + Title
function Layout2({ posts }) {
  return (
    <div className="iterate-layout">
      <h3 className="iterate-layout-title">2. hook + title</h3>
      <div className="iterate-posts layout-2">
        {posts.map((post) => (
          <Link key={post.slug} to={`/${post.slug}`} className="iterate-post-2">
            <span className="hook">{post.hook || 'what can we learn?'}</span>
            <span className="title">{post.title}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

// Layout 3: Date + Hook
function Layout3({ posts }) {
  return (
    <div className="iterate-layout">
      <h3 className="iterate-layout-title">3. date + hook</h3>
      <div className="iterate-posts layout-3">
        {posts.map((post) => (
          <Link key={post.slug} to={`/${post.slug}`} className="iterate-post-3">
            <span className="date">{formatDate(post.publishDate)}</span>
            <span className="hook">{post.hook || 'what can we learn?'}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

// Layout 4: Hook above title (stacked)
function Layout4({ posts }) {
  return (
    <div className="iterate-layout">
      <h3 className="iterate-layout-title">4. hook above title</h3>
      <div className="iterate-posts layout-4">
        {posts.map((post) => (
          <Link key={post.slug} to={`/${post.slug}`} className="iterate-post-4">
            <span className="hook">{post.hook || 'what can we learn?'}</span>
            <span className="title">{post.title}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

// Layout 5: Cards with hook
function Layout5({ posts }) {
  return (
    <div className="iterate-layout">
      <h3 className="iterate-layout-title">5. cards with hook</h3>
      <div className="iterate-posts layout-5">
        {posts.map((post) => (
          <Link key={post.slug} to={`/${post.slug}`} className="iterate-post-5">
            <span className="hook">{post.hook || 'what can we learn?'}</span>
            <span className="title">{post.title}</span>
            <span className="date">{formatDate(post.publishDate)}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

// Layout 6: Hook as pull quote
function Layout6({ posts }) {
  return (
    <div className="iterate-layout">
      <h3 className="iterate-layout-title">6. hook as pull quote</h3>
      <div className="iterate-posts layout-6">
        {posts.map((post) => (
          <Link key={post.slug} to={`/${post.slug}`} className="iterate-post-6">
            <span className="hook">"{post.hook || 'what can we learn?'}"</span>
            <span className="meta">
              <span className="title">{post.title}</span>
              <span className="date">{formatDate(post.publishDate)}</span>
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}

// Layout 7: Hook with arrow
function Layout7({ posts }) {
  return (
    <div className="iterate-layout">
      <h3 className="iterate-layout-title">7. hook with arrow</h3>
      <div className="iterate-posts layout-7">
        {posts.map((post) => (
          <Link key={post.slug} to={`/${post.slug}`} className="iterate-post-7">
            <span className="hook">{post.hook || 'what can we learn?'}</span>
            <span className="arrow">→</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

// Layout 8: Grid with hook overlay
function Layout8({ posts }) {
  return (
    <div className="iterate-layout">
      <h3 className="iterate-layout-title">8. two column hooks</h3>
      <div className="iterate-posts layout-8">
        {posts.map((post) => (
          <Link key={post.slug} to={`/${post.slug}`} className="iterate-post-8">
            <span className="hook">{post.hook || 'what can we learn?'}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

// Layout 9: Timeline with hook - vertical timeline with month breaks
function Layout9({ posts }) {
  let lastMonth = null;

  return (
    <div className="iterate-layout">
      <h3 className="iterate-layout-title">9. timeline with hook</h3>
      <div className="iterate-posts layout-9">
        {posts.map((post, index) => {
          const date = new Date(post.publishDate);
          const monthYear = `${date.toLocaleString('default', { month: 'long' })} ${date.getFullYear()}`.toLowerCase();
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
              <Link to={`/${post.slug}`} className={`iterate-post-9${isLast ? ' last' : ''}`}>
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
      </div>
    </div>
  );
}

export default function IteratePage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPosts()
      .then((data) => setPosts(data))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <>
        <SEO title="Layout Iterations | Please Recompile" />
        <main className="iterate-page">
          <div className="container">
            <p style={{ padding: '60px 0', textAlign: 'center' }}>loading...</p>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <SEO
        title="Layout Iterations | Please Recompile"
        description="Exploring different ways to display blog posts with hook questions"
      />
      <main className="iterate-page">
        <div className="container">
          <div className="iterate-header">
            <h1>post listing iterations</h1>
            <p>exploring the hook question field across 9 different layouts</p>
          </div>

          <Layout1 posts={posts} />
          <Layout2 posts={posts} />
          <Layout3 posts={posts} />
          <Layout4 posts={posts} />
          <Layout5 posts={posts} />
          <Layout6 posts={posts} />
          <Layout7 posts={posts} />
          <Layout8 posts={posts} />
          <Layout9 posts={posts} />
        </div>
      </main>
      <Footer />
    </>
  );
}
