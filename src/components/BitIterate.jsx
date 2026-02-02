import SEO from './SEO';
import Footer from './Footer';
import './BitIterate.css';

// Sad robot variations - cartoon tears shooting outward
const sadVariations = [
  {
    id: 'v1',
    name: 'V1: Single tear each side',
    description: 'Classic teardrop shooting outward from each eye',
    svg: (size) => (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -2 64 82" fill="currentColor" width={size} height={size * 1.25} className="sad-v1">
        <circle className="antenna-ball" cx="32" cy="3" r="3" fill="none" stroke="currentColor" strokeWidth="2"/>
        <line className="antenna-stem" x1="32" y1="6" x2="32" y2="14" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
        <rect className="head" x="16" y="14" width="32" height="26" rx="8" ry="8" fill="none" stroke="currentColor" strokeWidth="3"/>
        {/* Eyes - mad style */}
        <line className="eye-left" x1="22" y1="28" x2="28" y2="25" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        <line className="eye-right" x1="36" y1="25" x2="42" y2="28" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        {/* Tears - shooting outward */}
        <path className="tear-left" d="M20 28 L15 30 Q14 28 15 26 Z" fill="currentColor"/>
        <path className="tear-right" d="M44 28 L49 30 Q50 28 49 26 Z" fill="currentColor"/>
        <rect className="body" x="26" y="46" width="12" height="18" rx="3" ry="3" fill="none" stroke="currentColor" strokeWidth="3"/>
        <circle cx="32" cy="52" r="1.5"/>
        <circle cx="32" cy="58" r="1.5"/>
        <g className="arm-left">
          <line x1="20" y1="52" x2="16" y2="62" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
          <circle cx="16" cy="62" r="2"/>
        </g>
        <g className="arm-right">
          <line x1="44" y1="52" x2="48" y2="62" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
          <circle cx="48" cy="62" r="2"/>
        </g>
        <line className="leg-left" x1="27" y1="68" x2="27" y2="76" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        <line className="leg-right" x1="37" y1="68" x2="37" y2="76" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: 'v2',
    name: 'V2: Double tears',
    description: 'Two teardrops per side, cascading outward',
    svg: (size) => (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -2 64 82" fill="currentColor" width={size} height={size * 1.25} className="sad-v2">
        <circle className="antenna-ball" cx="32" cy="3" r="3" fill="none" stroke="currentColor" strokeWidth="2"/>
        <line className="antenna-stem" x1="32" y1="6" x2="32" y2="14" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
        <rect className="head" x="16" y="14" width="32" height="26" rx="8" ry="8" fill="none" stroke="currentColor" strokeWidth="3"/>
        <line className="eye-left" x1="22" y1="28" x2="28" y2="25" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        <line className="eye-right" x1="36" y1="25" x2="42" y2="28" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        {/* Tears - double outward */}
        <path className="tear-left-1" d="M19 26 L14 27 Q13 25.5 14 24 Z" fill="currentColor"/>
        <path className="tear-left-2" d="M18 30 L12 32 Q11 30 12 28 Z" fill="currentColor"/>
        <path className="tear-right-1" d="M45 26 L50 27 Q51 25.5 50 24 Z" fill="currentColor"/>
        <path className="tear-right-2" d="M46 30 L52 32 Q53 30 52 28 Z" fill="currentColor"/>
        <rect className="body" x="26" y="46" width="12" height="18" rx="3" ry="3" fill="none" stroke="currentColor" strokeWidth="3"/>
        <circle cx="32" cy="52" r="1.5"/>
        <circle cx="32" cy="58" r="1.5"/>
        <g className="arm-left">
          <line x1="20" y1="52" x2="16" y2="62" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
          <circle cx="16" cy="62" r="2"/>
        </g>
        <g className="arm-right">
          <line x1="44" y1="52" x2="48" y2="62" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
          <circle cx="48" cy="62" r="2"/>
        </g>
        <line className="leg-left" x1="27" y1="68" x2="27" y2="76" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        <line className="leg-right" x1="37" y1="68" x2="37" y2="76" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: 'v3',
    name: 'V3: Triple tears spray',
    description: 'Three tears fanning out from each eye',
    svg: (size) => (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -2 64 82" fill="currentColor" width={size} height={size * 1.25} className="sad-v3">
        <circle className="antenna-ball" cx="32" cy="3" r="3" fill="none" stroke="currentColor" strokeWidth="2"/>
        <line className="antenna-stem" x1="32" y1="6" x2="32" y2="14" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
        <rect className="head" x="16" y="14" width="32" height="26" rx="8" ry="8" fill="none" stroke="currentColor" strokeWidth="3"/>
        <line className="eye-left" x1="22" y1="28" x2="28" y2="25" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        <line className="eye-right" x1="36" y1="25" x2="42" y2="28" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        {/* Tears - triple spray */}
        <path className="tear-left-1" d="M18 24 L12 22 Q11 23.5 12 25 Z" fill="currentColor"/>
        <path className="tear-left-2" d="M18 27 L10 27 Q9 28.5 10 30 Z" fill="currentColor"/>
        <path className="tear-left-3" d="M18 30 L12 34 Q11 32.5 12 31 Z" fill="currentColor"/>
        <path className="tear-right-1" d="M46 24 L52 22 Q53 23.5 52 25 Z" fill="currentColor"/>
        <path className="tear-right-2" d="M46 27 L54 27 Q55 28.5 54 30 Z" fill="currentColor"/>
        <path className="tear-right-3" d="M46 30 L52 34 Q53 32.5 52 31 Z" fill="currentColor"/>
        <rect className="body" x="26" y="46" width="12" height="18" rx="3" ry="3" fill="none" stroke="currentColor" strokeWidth="3"/>
        <circle cx="32" cy="52" r="1.5"/>
        <circle cx="32" cy="58" r="1.5"/>
        <g className="arm-left">
          <line x1="20" y1="52" x2="16" y2="62" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
          <circle cx="16" cy="62" r="2"/>
        </g>
        <g className="arm-right">
          <line x1="44" y1="52" x2="48" y2="62" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
          <circle cx="48" cy="62" r="2"/>
        </g>
        <line className="leg-left" x1="27" y1="68" x2="27" y2="76" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        <line className="leg-right" x1="37" y1="68" x2="37" y2="76" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: 'v4',
    name: 'V4: Streaming lines',
    description: 'Tear streams shooting horizontally outward',
    svg: (size) => (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -2 64 82" fill="currentColor" width={size} height={size * 1.25} className="sad-v4">
        <circle className="antenna-ball" cx="32" cy="3" r="3" fill="none" stroke="currentColor" strokeWidth="2"/>
        <line className="antenna-stem" x1="32" y1="6" x2="32" y2="14" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
        <rect className="head" x="16" y="14" width="32" height="26" rx="8" ry="8" fill="none" stroke="currentColor" strokeWidth="3"/>
        <line className="eye-left" x1="22" y1="28" x2="28" y2="25" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        <line className="eye-right" x1="36" y1="25" x2="42" y2="28" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        {/* Tears - streaming lines */}
        <line className="tear-stream-left-1" x1="20" y1="26" x2="10" y2="24" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <line className="tear-stream-left-2" x1="20" y1="29" x2="8" y2="29" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <line className="tear-stream-right-1" x1="44" y1="26" x2="54" y2="24" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <line className="tear-stream-right-2" x1="44" y1="29" x2="56" y2="29" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <rect className="body" x="26" y="46" width="12" height="18" rx="3" ry="3" fill="none" stroke="currentColor" strokeWidth="3"/>
        <circle cx="32" cy="52" r="1.5"/>
        <circle cx="32" cy="58" r="1.5"/>
        <g className="arm-left">
          <line x1="20" y1="52" x2="16" y2="62" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
          <circle cx="16" cy="62" r="2"/>
        </g>
        <g className="arm-right">
          <line x1="44" y1="52" x2="48" y2="62" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
          <circle cx="48" cy="62" r="2"/>
        </g>
        <line className="leg-left" x1="27" y1="68" x2="27" y2="76" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        <line className="leg-right" x1="37" y1="68" x2="37" y2="76" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: 'v5',
    name: 'V5: Ellipse tears',
    description: 'Rounded ellipse tears flying outward',
    svg: (size) => (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -2 64 82" fill="currentColor" width={size} height={size * 1.25} className="sad-v5">
        <circle className="antenna-ball" cx="32" cy="3" r="3" fill="none" stroke="currentColor" strokeWidth="2"/>
        <line className="antenna-stem" x1="32" y1="6" x2="32" y2="14" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
        <rect className="head" x="16" y="14" width="32" height="26" rx="8" ry="8" fill="none" stroke="currentColor" strokeWidth="3"/>
        <line className="eye-left" x1="22" y1="28" x2="28" y2="25" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        <line className="eye-right" x1="36" y1="25" x2="42" y2="28" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        {/* Tears - ellipses */}
        <ellipse className="tear-left-1" cx="12" cy="26" rx="3" ry="1.5" fill="currentColor"/>
        <ellipse className="tear-left-2" cx="10" cy="30" rx="2.5" ry="1.2" fill="currentColor"/>
        <ellipse className="tear-right-1" cx="52" cy="26" rx="3" ry="1.5" fill="currentColor"/>
        <ellipse className="tear-right-2" cx="54" cy="30" rx="2.5" ry="1.2" fill="currentColor"/>
        <rect className="body" x="26" y="46" width="12" height="18" rx="3" ry="3" fill="none" stroke="currentColor" strokeWidth="3"/>
        <circle cx="32" cy="52" r="1.5"/>
        <circle cx="32" cy="58" r="1.5"/>
        <g className="arm-left">
          <line x1="20" y1="52" x2="16" y2="62" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
          <circle cx="16" cy="62" r="2"/>
        </g>
        <g className="arm-right">
          <line x1="44" y1="52" x2="48" y2="62" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
          <circle cx="48" cy="62" r="2"/>
        </g>
        <line className="leg-left" x1="27" y1="68" x2="27" y2="76" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        <line className="leg-right" x1="37" y1="68" x2="37" y2="76" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: 'v6',
    name: 'V6: Fountain spray',
    description: 'Arcing tears like a fountain',
    svg: (size) => (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -2 64 82" fill="currentColor" width={size} height={size * 1.25} className="sad-v6">
        <circle className="antenna-ball" cx="32" cy="3" r="3" fill="none" stroke="currentColor" strokeWidth="2"/>
        <line className="antenna-stem" x1="32" y1="6" x2="32" y2="14" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
        <rect className="head" x="16" y="14" width="32" height="26" rx="8" ry="8" fill="none" stroke="currentColor" strokeWidth="3"/>
        <line className="eye-left" x1="22" y1="28" x2="28" y2="25" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        <line className="eye-right" x1="36" y1="25" x2="42" y2="28" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        {/* Tears - fountain arcs */}
        <path className="tear-arc-left" d="M19 27 Q10 20 6 28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none"/>
        <circle className="tear-drop-left" cx="6" cy="28" r="2" fill="currentColor"/>
        <path className="tear-arc-right" d="M45 27 Q54 20 58 28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none"/>
        <circle className="tear-drop-right" cx="58" cy="28" r="2" fill="currentColor"/>
        <rect className="body" x="26" y="46" width="12" height="18" rx="3" ry="3" fill="none" stroke="currentColor" strokeWidth="3"/>
        <circle cx="32" cy="52" r="1.5"/>
        <circle cx="32" cy="58" r="1.5"/>
        <g className="arm-left">
          <line x1="20" y1="52" x2="16" y2="62" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
          <circle cx="16" cy="62" r="2"/>
        </g>
        <g className="arm-right">
          <line x1="44" y1="52" x2="48" y2="62" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
          <circle cx="48" cy="62" r="2"/>
        </g>
        <line className="leg-left" x1="27" y1="68" x2="27" y2="76" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        <line className="leg-right" x1="37" y1="68" x2="37" y2="76" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: 'v7',
    name: 'V7: Gushing streams',
    description: 'Thick streams with drops at the end',
    svg: (size) => (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -2 64 82" fill="currentColor" width={size} height={size * 1.25} className="sad-v7">
        <circle className="antenna-ball" cx="32" cy="3" r="3" fill="none" stroke="currentColor" strokeWidth="2"/>
        <line className="antenna-stem" x1="32" y1="6" x2="32" y2="14" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
        <rect className="head" x="16" y="14" width="32" height="26" rx="8" ry="8" fill="none" stroke="currentColor" strokeWidth="3"/>
        <line className="eye-left" x1="22" y1="28" x2="28" y2="25" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        <line className="eye-right" x1="36" y1="25" x2="42" y2="28" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        {/* Tears - gushing */}
        <path className="tear-gush-left" d="M19 27 Q14 25 8 28 Q6 29 8 30 Q14 33 19 31" fill="currentColor"/>
        <path className="tear-gush-right" d="M45 27 Q50 25 56 28 Q58 29 56 30 Q50 33 45 31" fill="currentColor"/>
        <rect className="body" x="26" y="46" width="12" height="18" rx="3" ry="3" fill="none" stroke="currentColor" strokeWidth="3"/>
        <circle cx="32" cy="52" r="1.5"/>
        <circle cx="32" cy="58" r="1.5"/>
        <g className="arm-left">
          <line x1="20" y1="52" x2="16" y2="62" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
          <circle cx="16" cy="62" r="2"/>
        </g>
        <g className="arm-right">
          <line x1="44" y1="52" x2="48" y2="62" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
          <circle cx="48" cy="62" r="2"/>
        </g>
        <line className="leg-left" x1="27" y1="68" x2="27" y2="76" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        <line className="leg-right" x1="37" y1="68" x2="37" y2="76" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: 'v8',
    name: 'V8: Minimal single drop',
    description: 'Just one small teardrop per side, subtle',
    svg: (size) => (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -2 64 82" fill="currentColor" width={size} height={size * 1.25} className="sad-v8">
        <circle className="antenna-ball" cx="32" cy="3" r="3" fill="none" stroke="currentColor" strokeWidth="2"/>
        <line className="antenna-stem" x1="32" y1="6" x2="32" y2="14" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
        <rect className="head" x="16" y="14" width="32" height="26" rx="8" ry="8" fill="none" stroke="currentColor" strokeWidth="3"/>
        <line className="eye-left" x1="22" y1="28" x2="28" y2="25" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        <line className="eye-right" x1="36" y1="25" x2="42" y2="28" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        {/* Tears - minimal */}
        <circle className="tear-left" cx="13" cy="27" r="2" fill="currentColor"/>
        <circle className="tear-right" cx="51" cy="27" r="2" fill="currentColor"/>
        <rect className="body" x="26" y="46" width="12" height="18" rx="3" ry="3" fill="none" stroke="currentColor" strokeWidth="3"/>
        <circle cx="32" cy="52" r="1.5"/>
        <circle cx="32" cy="58" r="1.5"/>
        <g className="arm-left">
          <line x1="20" y1="52" x2="16" y2="62" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
          <circle cx="16" cy="62" r="2"/>
        </g>
        <g className="arm-right">
          <line x1="44" y1="52" x2="48" y2="62" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
          <circle cx="48" cy="62" r="2"/>
        </g>
        <line className="leg-left" x1="27" y1="68" x2="27" y2="76" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        <line className="leg-right" x1="37" y1="68" x2="37" y2="76" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
      </svg>
    ),
  },
];

export default function BitIterate() {
  return (
    <>
      <SEO
        title="Sad Bit Iteration | Please Recompile"
        description="Iterating on the sad robot design"
      />
      <main className="bit-page">
        <div className="container" style={{ paddingTop: '40px', paddingBottom: '80px' }}>
          <div style={{ marginBottom: '32px', textAlign: 'center' }}>
            <h1 style={{ marginBottom: '8px' }}>Sad Bit Iteration</h1>
            <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
              Cartoon-style tears shooting outward from the eyes. Hover to see animations.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px',
            marginTop: '48px'
          }}>
            {sadVariations.map((variant) => (
              <div key={variant.id} className="iterate-card">
                <div className="iterate-preview">
                  {variant.svg(96)}
                </div>
                <h3 style={{ marginBottom: '8px', fontSize: '14px' }}>{variant.name}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '12px' }}>{variant.description}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
