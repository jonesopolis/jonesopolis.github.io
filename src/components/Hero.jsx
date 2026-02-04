import Link from 'next/link';
import Robot from './Robot';

export default function Hero({ hero, settings }) {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-badge">
          <span className="hero-badge-dot"></span>
          {settings?.heroBadgeText || 'Currently exploring AI'}
        </div>
        <h1>{hero?.title}<span className="hero-cursor"></span></h1>
        <p>{hero?.subtitle}</p>
      </div>
      <Link href="/bit" className="hero-decoration" style={{ opacity: 0.3, color: 'inherit' }}>
        <Robot emotion="waving" size={140} />
      </Link>
    </section>
  );
}
