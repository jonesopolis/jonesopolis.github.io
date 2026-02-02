import SEO from './SEO';
import Footer from './Footer';
import './BitIterate.css';

// Sad robot variations - fountain tears starting outside head with body movement
const sadVariations = [
  {
    id: 'v1',
    name: 'V1: Fountain + Head Bob',
    description: 'Fountain tears with subtle head bobbing up and down',
    svg: (size) => (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -2 64 82" fill="currentColor" width={size} height={size * 1.25} className="sad-v1">
        <g className="head-group">
          <circle className="antenna-ball" cx="32" cy="3" r="3" fill="none" stroke="currentColor" strokeWidth="2"/>
          <line className="antenna-stem" x1="32" y1="6" x2="32" y2="14" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
          <rect className="head" x="16" y="14" width="32" height="26" rx="8" ry="8" fill="none" stroke="currentColor" strokeWidth="3"/>
          <line className="eye-left" x1="22" y1="28" x2="28" y2="25" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
          <line className="eye-right" x1="36" y1="25" x2="42" y2="28" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        </g>
        {/* Fountain tears - starting outside head */}
        <path className="tear-arc-left" d="M14 27 Q6 18 2 28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none"/>
        <circle className="tear-drop-left" cx="2" cy="28" r="2.5" fill="currentColor"/>
        <path className="tear-arc-right" d="M50 27 Q58 18 62 28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none"/>
        <circle className="tear-drop-right" cx="62" cy="28" r="2.5" fill="currentColor"/>
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
    name: 'V2: Fountain + Body Sway',
    description: 'Fountain tears with gentle body swaying side to side',
    svg: (size) => (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -2 64 82" fill="currentColor" width={size} height={size * 1.25} className="sad-v2">
        <g className="body-group">
          <g className="head-group">
            <circle className="antenna-ball" cx="32" cy="3" r="3" fill="none" stroke="currentColor" strokeWidth="2"/>
            <line className="antenna-stem" x1="32" y1="6" x2="32" y2="14" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
            <rect className="head" x="16" y="14" width="32" height="26" rx="8" ry="8" fill="none" stroke="currentColor" strokeWidth="3"/>
            <line className="eye-left" x1="22" y1="28" x2="28" y2="25" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
            <line className="eye-right" x1="36" y1="25" x2="42" y2="28" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
          </g>
          {/* Fountain tears */}
          <path className="tear-arc-left" d="M14 27 Q6 18 2 28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none"/>
          <circle className="tear-drop-left" cx="2" cy="28" r="2.5" fill="currentColor"/>
          <path className="tear-arc-right" d="M50 27 Q58 18 62 28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none"/>
          <circle className="tear-drop-right" cx="62" cy="28" r="2.5" fill="currentColor"/>
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
        </g>
        <line className="leg-left" x1="27" y1="68" x2="27" y2="76" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        <line className="leg-right" x1="37" y1="68" x2="37" y2="76" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: 'v3',
    name: 'V3: Fountain + Eye Squint',
    description: 'Fountain tears with eyes that squint/pulse',
    svg: (size) => (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -2 64 82" fill="currentColor" width={size} height={size * 1.25} className="sad-v3">
        <circle className="antenna-ball" cx="32" cy="3" r="3" fill="none" stroke="currentColor" strokeWidth="2"/>
        <line className="antenna-stem" x1="32" y1="6" x2="32" y2="14" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
        <rect className="head" x="16" y="14" width="32" height="26" rx="8" ry="8" fill="none" stroke="currentColor" strokeWidth="3"/>
        <line className="eye-left" x1="22" y1="28" x2="28" y2="25" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        <line className="eye-right" x1="36" y1="25" x2="42" y2="28" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        {/* Fountain tears */}
        <path className="tear-arc-left" d="M14 27 Q6 18 2 28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none"/>
        <circle className="tear-drop-left" cx="2" cy="28" r="2.5" fill="currentColor"/>
        <path className="tear-arc-right" d="M50 27 Q58 18 62 28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none"/>
        <circle className="tear-drop-right" cx="62" cy="28" r="2.5" fill="currentColor"/>
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
    name: 'V4: Double Fountain + Head Bob',
    description: 'Two tear arcs per side with head bobbing',
    svg: (size) => (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -2 64 82" fill="currentColor" width={size} height={size * 1.25} className="sad-v4">
        <g className="head-group">
          <circle className="antenna-ball" cx="32" cy="3" r="3" fill="none" stroke="currentColor" strokeWidth="2"/>
          <line className="antenna-stem" x1="32" y1="6" x2="32" y2="14" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
          <rect className="head" x="16" y="14" width="32" height="26" rx="8" ry="8" fill="none" stroke="currentColor" strokeWidth="3"/>
          <line className="eye-left" x1="22" y1="28" x2="28" y2="25" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
          <line className="eye-right" x1="36" y1="25" x2="42" y2="28" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        </g>
        {/* Double fountain tears */}
        <path className="tear-arc-left-1" d="M14 25 Q8 16 4 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none"/>
        <circle className="tear-drop-left-1" cx="4" cy="24" r="2" fill="currentColor"/>
        <path className="tear-arc-left-2" d="M14 30 Q6 24 2 32" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none"/>
        <circle className="tear-drop-left-2" cx="2" cy="32" r="2" fill="currentColor"/>
        <path className="tear-arc-right-1" d="M50 25 Q56 16 60 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none"/>
        <circle className="tear-drop-right-1" cx="60" cy="24" r="2" fill="currentColor"/>
        <path className="tear-arc-right-2" d="M50 30 Q58 24 62 32" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none"/>
        <circle className="tear-drop-right-2" cx="62" cy="32" r="2" fill="currentColor"/>
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
    name: 'V5: Fountain + Antenna Droop',
    description: 'Fountain tears with exaggerated drooping antenna',
    svg: (size) => (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -2 64 82" fill="currentColor" width={size} height={size * 1.25} className="sad-v5">
        <g className="antenna-group">
          <circle className="antenna-ball" cx="32" cy="3" r="3" fill="none" stroke="currentColor" strokeWidth="2"/>
          <line className="antenna-stem" x1="32" y1="6" x2="32" y2="14" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
        </g>
        <rect className="head" x="16" y="14" width="32" height="26" rx="8" ry="8" fill="none" stroke="currentColor" strokeWidth="3"/>
        <line className="eye-left" x1="22" y1="28" x2="28" y2="25" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        <line className="eye-right" x1="36" y1="25" x2="42" y2="28" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        {/* Fountain tears */}
        <path className="tear-arc-left" d="M14 27 Q6 18 2 28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none"/>
        <circle className="tear-drop-left" cx="2" cy="28" r="2.5" fill="currentColor"/>
        <path className="tear-arc-right" d="M50 27 Q58 18 62 28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none"/>
        <circle className="tear-drop-right" cx="62" cy="28" r="2.5" fill="currentColor"/>
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
    name: 'V6: Fountain + Full Body Shudder',
    description: 'Fountain tears with whole body shaking/shuddering',
    svg: (size) => (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -2 64 82" fill="currentColor" width={size} height={size * 1.25} className="sad-v6">
        <g className="full-body">
          <circle className="antenna-ball" cx="32" cy="3" r="3" fill="none" stroke="currentColor" strokeWidth="2"/>
          <line className="antenna-stem" x1="32" y1="6" x2="32" y2="14" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
          <rect className="head" x="16" y="14" width="32" height="26" rx="8" ry="8" fill="none" stroke="currentColor" strokeWidth="3"/>
          <line className="eye-left" x1="22" y1="28" x2="28" y2="25" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
          <line className="eye-right" x1="36" y1="25" x2="42" y2="28" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
          {/* Fountain tears */}
          <path className="tear-arc-left" d="M14 27 Q6 18 2 28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none"/>
          <circle className="tear-drop-left" cx="2" cy="28" r="2.5" fill="currentColor"/>
          <path className="tear-arc-right" d="M50 27 Q58 18 62 28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none"/>
          <circle className="tear-drop-right" cx="62" cy="28" r="2.5" fill="currentColor"/>
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
        </g>
      </svg>
    ),
  },
  {
    id: 'v7',
    name: 'V7: Fountain + Alternating Tears',
    description: 'Tears that alternate left-right with head tilt',
    svg: (size) => (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -2 64 82" fill="currentColor" width={size} height={size * 1.25} className="sad-v7">
        <g className="head-tilt-group">
          <circle className="antenna-ball" cx="32" cy="3" r="3" fill="none" stroke="currentColor" strokeWidth="2"/>
          <line className="antenna-stem" x1="32" y1="6" x2="32" y2="14" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
          <rect className="head" x="16" y="14" width="32" height="26" rx="8" ry="8" fill="none" stroke="currentColor" strokeWidth="3"/>
          <line className="eye-left" x1="22" y1="28" x2="28" y2="25" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
          <line className="eye-right" x1="36" y1="25" x2="42" y2="28" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
          {/* Fountain tears */}
          <path className="tear-arc-left" d="M14 27 Q6 18 2 28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none"/>
          <circle className="tear-drop-left" cx="2" cy="28" r="2.5" fill="currentColor"/>
          <path className="tear-arc-right" d="M50 27 Q58 18 62 28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none"/>
          <circle className="tear-drop-right" cx="62" cy="28" r="2.5" fill="currentColor"/>
        </g>
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
    name: 'V8: Fountain + Sobbing Motion',
    description: 'Fountain tears with rhythmic sobbing head motion',
    svg: (size) => (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -2 64 82" fill="currentColor" width={size} height={size * 1.25} className="sad-v8">
        <g className="sobbing-group">
          <circle className="antenna-ball" cx="32" cy="3" r="3" fill="none" stroke="currentColor" strokeWidth="2"/>
          <line className="antenna-stem" x1="32" y1="6" x2="32" y2="14" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
          <rect className="head" x="16" y="14" width="32" height="26" rx="8" ry="8" fill="none" stroke="currentColor" strokeWidth="3"/>
          <line className="eye-left" x1="22" y1="28" x2="28" y2="25" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
          <line className="eye-right" x1="36" y1="25" x2="42" y2="28" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
          {/* Fountain tears */}
          <path className="tear-arc-left" d="M14 27 Q6 18 2 28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none"/>
          <circle className="tear-drop-left" cx="2" cy="28" r="2.5" fill="currentColor"/>
          <path className="tear-arc-right" d="M50 27 Q58 18 62 28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none"/>
          <circle className="tear-drop-right" cx="62" cy="28" r="2.5" fill="currentColor"/>
        </g>
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
              Fountain tears starting outside head with various body movements. Hover to see animations.
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
