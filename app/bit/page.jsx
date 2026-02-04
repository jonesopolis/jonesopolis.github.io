import { getSiteSettings, getFooter } from '../../lib/contentful';
import Robot from '../../src/components/Robot';
import Footer from '../../src/components/Footer';

export async function generateMetadata() {
  const settings = await getSiteSettings();
  return {
    title: settings?.bitPageTitle || 'Meet Bit',
    description: settings?.bitPageDescription || 'Bit is the friendly robot mascot of Learning AI.',
  };
}

export default async function BitPage() {
  const [settings, footer] = await Promise.all([
    getSiteSettings(),
    getFooter(),
  ]);

  const emotions = [
    'neutral',
    'happy',
    'sad',
    'mad',
    'surprised',
    'confused',
    'thinking',
    'love',
    'excited',
    'shrug',
    'waving',
    'dancing',
    'sleeping',
    'talking',
    'walking-front',
    'walking-side'
  ];

  return (
    <>
      <main className="bit-page">
        <div className="container" style={{ paddingTop: '40px', paddingBottom: '80px' }}>
          <div style={{ marginBottom: '32px', textAlign: 'center' }}>
            <div style={{ marginBottom: '16px' }}>
              <Robot emotion="waving" size={120} />
            </div>
            <h1 style={{ marginBottom: '8px' }}>{settings?.bitPageTitle || 'Meet Bit'}</h1>
            <p style={{ color: 'var(--text-secondary)', maxWidth: '500px', margin: '0 auto' }}>
              {settings?.bitPageDescription || 'Bit is the friendly robot mascot of Learning AI. With 16 emotions and poses, Bit helps express the journey of learning. Hover over any robot to see it animate.'}
            </p>
          </div>

          <h2 style={{ marginTop: '48px', marginBottom: '24px' }}>Emotions & Poses</h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
            gap: '16px'
          }}>
            {emotions.map((emotion) => (
              <div key={emotion} className="robot-card">
                <div className="robot-card-preview">
                  <Robot emotion={emotion} size={64} />
                </div>
                <p className="robot-card-name">{emotion.replace('-', ' ')}</p>
              </div>
            ))}
          </div>

          <h2 style={{ marginTop: '48px', marginBottom: '24px' }}>Size Scaling</h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '24px' }}>
            Bit scales perfectly at any size while maintaining crisp lines.
          </p>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '32px',
            alignItems: 'flex-end',
            padding: '32px',
            background: 'var(--bg-secondary)',
            borderRadius: '12px'
          }}>
            {[24, 32, 48, 64, 96, 128].map((size) => (
              <div key={size} style={{ textAlign: 'center' }}>
                <Robot emotion="happy" size={size} />
                <p style={{ fontSize: '11px', marginTop: '8px', color: 'var(--text-secondary)' }}>{size}px</p>
              </div>
            ))}
          </div>

          <h2 style={{ marginTop: '48px', marginBottom: '24px' }}>Theme Compatibility</h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '24px' }}>
            Bit uses <code style={{ background: 'var(--bg-tertiary)', padding: '2px 6px', borderRadius: '4px' }}>currentColor</code> to inherit text color, automatically adapting to light/dark mode.
          </p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '24px'
          }}>
            <div style={{
              textAlign: 'center',
              padding: '32px',
              background: '#ffffff',
              borderRadius: '12px',
              color: '#1a1a1a'
            }}>
              <Robot emotion="waving" size={80} />
              <p style={{ marginTop: '12px', fontWeight: '600' }}>Light Mode</p>
            </div>
            <div style={{
              textAlign: 'center',
              padding: '32px',
              background: '#1a1a1a',
              borderRadius: '12px',
              color: '#f0f0f2'
            }}>
              <Robot emotion="waving" size={80} />
              <p style={{ marginTop: '12px', fontWeight: '600' }}>Dark Mode</p>
            </div>
            <div style={{
              textAlign: 'center',
              padding: '32px',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              borderRadius: '12px',
              color: '#ffffff'
            }}>
              <Robot emotion="waving" size={80} />
              <p style={{ marginTop: '12px', fontWeight: '600' }}>Custom Color</p>
            </div>
          </div>

          <h2 style={{ marginTop: '48px', marginBottom: '24px' }}>Animation Details</h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '24px' }}>
            Each emotion has a unique hover animation that conveys its feeling.
          </p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '16px'
          }}>
            {[
              { emotion: 'happy', desc: 'Gentle bounce with antenna wobble' },
              { emotion: 'sad', desc: 'Slow droop and melancholy sway' },
              { emotion: 'mad', desc: 'Rapid shake with tense arms' },
              { emotion: 'surprised', desc: 'Quick jump with wide eyes' },
              { emotion: 'confused', desc: 'Head tilts with pulsing question mark' },
              { emotion: 'thinking', desc: 'Antenna pulses, thought bubbles fade' },
              { emotion: 'love', desc: 'Heartbeat pulse with gentle float' },
              { emotion: 'excited', desc: 'Fast bounce with flashing exclamations' },
              { emotion: 'shrug', desc: 'Arms rise and fall, head tilts' },
              { emotion: 'waving', desc: 'Arm swings with body lean' },
              { emotion: 'dancing', desc: 'Full body groove with arm and leg moves' },
              { emotion: 'sleeping', desc: 'Gentle breathing with floating Zs' },
              { emotion: 'talking', desc: 'Bobbing with speech bubble pulses' },
              { emotion: 'walking-front', desc: 'Walking toward you with arm swing' },
              { emotion: 'walking-side', desc: 'Side-view stride with momentum' },
              { emotion: 'neutral', desc: 'Subtle idle bob with antenna sway' },
            ].map(({ emotion, desc }) => (
              <div key={emotion} style={{
                display: 'flex',
                gap: '16px',
                alignItems: 'center',
                padding: '16px',
                background: 'var(--bg-secondary)',
                borderRadius: '8px'
              }}>
                <Robot emotion={emotion} size={48} />
                <div>
                  <p style={{ fontWeight: '600', textTransform: 'capitalize', marginBottom: '4px' }}>{emotion.replace('-', ' ')}</p>
                  <p style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer footer={footer} />
    </>
  );
}
