'use client';

// Mock post data for demonstration
const mockPost = {
  title: 'building ai agents that actually work',
  publishDate: '2024-01-15',
  tags: [
    { name: 'ai', slug: 'ai' },
    { name: 'agents', slug: 'agents' },
    { name: 'architecture', slug: 'architecture' }
  ]
};

function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toISOString().split('T')[0].replace(/-/g, '.');
}

export default function IterateClient() {
  return (
    <div className="container">
      <h1 style={{ marginBottom: '60px', fontSize: '24px', color: 'var(--text-primary)', textTransform: 'lowercase' }}>
        post header variations
      </h1>

      {/* DOT PREFIX VARIATIONS */}

      {/* VARIATION 1: Dot prefix - basic hover color */}
      <div style={{ marginBottom: '80px' }}>
        <h3 style={{ color: 'var(--accent)', marginBottom: '24px', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '2px' }}>
          1. dot prefix - hover color
        </h3>
        <div className="iterate-header-v1">
          <h2>{mockPost.title}</h2>
          <div className="meta-row">
            <span className="date">{formatDate(mockPost.publishDate)}</span>
            <div className="tags">
              {mockPost.tags.map((tag) => (
                <span key={tag.slug} className="tag">.{tag.name}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* VARIATION 2: Dot prefix - underline slide */}
      <div style={{ marginBottom: '80px' }}>
        <h3 style={{ color: 'var(--accent)', marginBottom: '24px', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '2px' }}>
          2. dot prefix - underline slide
        </h3>
        <div className="iterate-header-v2">
          <h2>{mockPost.title}</h2>
          <div className="meta-row">
            <span className="date">{formatDate(mockPost.publishDate)}</span>
            <div className="tags">
              {mockPost.tags.map((tag) => (
                <span key={tag.slug} className="tag">.{tag.name}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* VARIATION 3: Dot prefix - dot pulses */}
      <div style={{ marginBottom: '80px' }}>
        <h3 style={{ color: 'var(--accent)', marginBottom: '24px', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '2px' }}>
          3. dot prefix - dot pulses on hover
        </h3>
        <div className="iterate-header-v3">
          <h2>{mockPost.title}</h2>
          <div className="meta-row">
            <span className="date">{formatDate(mockPost.publishDate)}</span>
            <div className="tags">
              {mockPost.tags.map((tag) => (
                <span key={tag.slug} className="tag"><span className="dot">.</span>{tag.name}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* VARIATION 4: Dot prefix - brackets reveal */}
      <div style={{ marginBottom: '80px' }}>
        <h3 style={{ color: 'var(--accent)', marginBottom: '24px', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '2px' }}>
          4. dot prefix - brackets reveal
        </h3>
        <div className="iterate-header-v4">
          <h2>{mockPost.title}</h2>
          <div className="meta-row">
            <span className="date">{formatDate(mockPost.publishDate)}</span>
            <div className="tags">
              {mockPost.tags.map((tag) => (
                <span key={tag.slug} className="tag">.{tag.name}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* VARIATION 5: Dot prefix - spread apart */}
      <div style={{ marginBottom: '80px' }}>
        <h3 style={{ color: 'var(--accent)', marginBottom: '24px', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '2px' }}>
          5. dot prefix - letter spacing
        </h3>
        <div className="iterate-header-v5">
          <h2>{mockPost.title}</h2>
          <div className="meta-row">
            <span className="date">{formatDate(mockPost.publishDate)}</span>
            <div className="tags">
              {mockPost.tags.map((tag) => (
                <span key={tag.slug} className="tag">.{tag.name}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* PILL VARIATIONS */}

      {/* VARIATION 6: Subtle ghost pill - just bg tint */}
      <div style={{ marginBottom: '80px' }}>
        <h3 style={{ color: 'var(--accent)', marginBottom: '24px', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '2px' }}>
          6. ghost pill - subtle bg
        </h3>
        <div className="iterate-header-v6">
          <h2>{mockPost.title}</h2>
          <div className="meta-row">
            <span className="date">{formatDate(mockPost.publishDate)}</span>
            <div className="tags">
              {mockPost.tags.map((tag) => (
                <span key={tag.slug} className="tag">{tag.name}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* VARIATION 7: Outline pill with fill on hover */}
      <div style={{ marginBottom: '80px' }}>
        <h3 style={{ color: 'var(--accent)', marginBottom: '24px', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '2px' }}>
          7. outline pill - fill on hover
        </h3>
        <div className="iterate-header-v7">
          <h2>{mockPost.title}</h2>
          <div className="meta-row">
            <span className="date">{formatDate(mockPost.publishDate)}</span>
            <div className="tags">
              {mockPost.tags.map((tag) => (
                <span key={tag.slug} className="tag">{tag.name}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* VARIATION 8: Pill with glow */}
      <div style={{ marginBottom: '80px' }}>
        <h3 style={{ color: 'var(--accent)', marginBottom: '24px', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '2px' }}>
          8. pill - glow on hover
        </h3>
        <div className="iterate-header-v8">
          <h2>{mockPost.title}</h2>
          <div className="meta-row">
            <span className="date">{formatDate(mockPost.publishDate)}</span>
            <div className="tags">
              {mockPost.tags.map((tag) => (
                <span key={tag.slug} className="tag">{tag.name}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* VARIATION 9: Pill with lift */}
      <div style={{ marginBottom: '80px' }}>
        <h3 style={{ color: 'var(--accent)', marginBottom: '24px', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '2px' }}>
          9. pill - lift on hover
        </h3>
        <div className="iterate-header-v9">
          <h2>{mockPost.title}</h2>
          <div className="meta-row">
            <span className="date">{formatDate(mockPost.publishDate)}</span>
            <div className="tags">
              {mockPost.tags.map((tag) => (
                <span key={tag.slug} className="tag">{tag.name}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* VARIATION 10: Pill with scale */}
      <div style={{ marginBottom: '80px' }}>
        <h3 style={{ color: 'var(--accent)', marginBottom: '24px', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '2px' }}>
          10. pill - scale on hover
        </h3>
        <div className="iterate-header-v10">
          <h2>{mockPost.title}</h2>
          <div className="meta-row">
            <span className="date">{formatDate(mockPost.publishDate)}</span>
            <div className="tags">
              {mockPost.tags.map((tag) => (
                <span key={tag.slug} className="tag">{tag.name}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
