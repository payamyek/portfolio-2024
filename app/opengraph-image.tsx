import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    <div
      style={{
        background: '#1d232a',
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        padding: '80px',
        fontFamily: 'monospace',
      }}
    >
      {/* Teal accent line */}
      <div
        style={{
          width: 64,
          height: 4,
          background: '#2dd4bf',
          marginBottom: 40,
          borderRadius: 2,
        }}
      />
      <div
        style={{
          color: 'white',
          fontSize: 80,
          fontWeight: 700,
          lineHeight: 1.05,
        }}
      >
        Payam
      </div>
      <div
        style={{
          color: 'white',
          fontSize: 80,
          fontWeight: 700,
          lineHeight: 1.05,
          marginBottom: 36,
        }}
      >
        Yektamaram
      </div>
      <div style={{ color: '#94a3b8', fontSize: 28, letterSpacing: 1 }}>
        Software Engineer · Chess Engine Builder · Sailor
      </div>
    </div>,
    { ...size },
  );
}
