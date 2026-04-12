import { ImageResponse } from 'next/og';

// Route segment config
export const runtime = 'edge';

// Image metadata
export const alt = 'Nuvie Thesis — A founder-facing product and growth study';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

// Image generation
export default async function Image() {
  return new ImageResponse(
    (
      // Image HTML/CSS
      <div
        style={{
          background: '#F5ECD7',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '80px',
          border: '1px solid rgba(44, 24, 16, 0.1)',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              fontSize: 84,
              fontWeight: 800,
              color: '#2C1810',
              letterSpacing: '-0.05em',
              marginBottom: '20px',
              fontFamily: 'serif',
              display: 'flex',
            }}
          >
            NUVIE <span style={{ color: '#7CB18A', fontStyle: 'italic', marginLeft: '12px', fontWeight: 300 }}>THESIS</span>
          </div>
          <div
            style={{
              fontSize: 32,
              color: 'rgba(44, 24, 16, 0.4)',
              textAlign: 'center',
              maxWidth: '800px',
              lineHeight: 1.4,
              fontWeight: 400,
              textTransform: 'uppercase',
              letterSpacing: '0.2em',
            }}
          >
            A founder-facing study in product, occasions, and repeat
          </div>
        </div>
        
        {/* Atmospheric decoration */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'radial-gradient(circle at 50% 50%, rgba(124, 177, 138, 0.05) 0%, transparent 70%)',
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  );
}
