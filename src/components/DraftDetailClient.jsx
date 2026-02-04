'use client';

import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { getPostIcon } from './PostIcons';

function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toISOString().split('T')[0].replace(/-/g, '.');
}

// Component to fetch and render SVG inline for theme support
function InlineSvg({ url }) {
  const [svgContent, setSvgContent] = useState(null);

  useEffect(() => {
    if (url) {
      fetch(url)
        .then((res) => res.text())
        .then((text) => {
          // Replace any hardcoded colors with currentColor for theme support
          const themed = text
            .replace(/fill="#[0-9a-fA-F]{3,6}"/g, 'fill="currentColor"')
            .replace(/stroke="#[0-9a-fA-F]{3,6}"/g, 'stroke="currentColor"');
          setSvgContent(themed);
        })
        .catch(() => setSvgContent(null));
    }
  }, [url]);

  if (!svgContent) return null;

  return <div dangerouslySetInnerHTML={{ __html: svgContent }} />;
}

export default function DraftDetailClient({ post, settings }) {
  const [showStickyTitle, setShowStickyTitle] = useState(false);
  const titleRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (titleRef.current) {
        const titleRect = titleRef.current.getBoundingClientRect();
        const header = document.querySelector('header');
        const headerBottom = header ? header.getBoundingClientRect().bottom : 50;
        setShowStickyTitle(titleRect.top <= headerBottom);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Sticky compact title bar */}
      <div className={`sticky-title-bar ${showStickyTitle ? 'sticky-title-bar--visible' : ''}`}>
        <div className="sticky-title-content">
          <Link href="/drafts" className="sticky-back-btn" aria-label="Back to unpublished">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12"/>
              <polyline points="12 19 5 12 12 5"/>
            </svg>
          </Link>
          <span className="sticky-draft-badge">unpublished</span>
          <div className="sticky-title-info">
            <span className="sticky-title-text">{post.title}</span>
            <div className="sticky-title-meta">
              <span className="sticky-title-date">{formatDate(post.publishDate)}</span>
              <div className="sticky-title-tags">
                {post.tags?.map((tag) => (
                  <span key={tag.slug} className="tag">{tag.name}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <article className={`post-detail ${showStickyTitle ? 'post-detail--sticky-active' : ''}`}>
          <Link href="/drafts" className="back-link">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12"/>
              <polyline points="12 19 5 12 12 5"/>
            </svg>
            Unpublished
          </Link>

          {post.imageSvg ? (
            <div className="post-detail-icon">
              <InlineSvg url={post.imageSvg} />
            </div>
          ) : (
            (() => {
              const PostIcon = getPostIcon(post.slug);
              return (
                <div className="post-detail-icon">
                  <PostIcon />
                </div>
              );
            })()
          )}

          <header className="post-detail-header">
            <span className="draft-indicator">unpublished</span>
            {post.hook && <p className="draft-hook">{post.hook}</p>}
            <h1 ref={titleRef}>{post.title}</h1>
            <div className="post-meta-row">
              <span className="post-date">{formatDate(post.publishDate)}</span>
              <div className="post-tags">
                {post.tags?.map((tag) => (
                  <span key={tag.slug} className="tag">{tag.name}</span>
                ))}
              </div>
            </div>
          </header>

          <div className="post-content">
            {post.content && documentToReactComponents(post.content)}
          </div>

          {/* No related posts for drafts */}
        </article>
      </div>
    </>
  );
}
