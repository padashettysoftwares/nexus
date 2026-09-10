import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';

export const dynamic = "force-static";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const hasTitle = searchParams.has('title');
    const title = hasTitle
      ? searchParams.get('title')?.slice(0, 100)
      : 'Nexus Solutions — Business, Tax & Compliance Consultants in Kalaburagi';

    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'center',
            backgroundColor: '#FDFBF7',
            padding: '80px',
          }}
        >
          {/* Subtle Grid Background (Simulated with simple repeating linear gradient in CSS) */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              opacity: 0.1,
              backgroundImage: 'linear-gradient(to right, #e5e5e5 1px, transparent 1px), linear-gradient(to bottom, #e5e5e5 1px, transparent 1px)',
              backgroundSize: '40px 40px',
            }}
          />
          
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '40px',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '60px',
                height: '60px',
                backgroundColor: '#DC2626',
                borderRadius: '12px',
                color: 'white',
                fontSize: '32px',
                fontWeight: 'bold',
                marginRight: '20px',
              }}
            >
              N
            </div>
            <div
              style={{
                fontSize: '36px',
                fontWeight: '800',
                color: '#1C1917',
                letterSpacing: '-1px',
              }}
            >
              Nexus Solutions
            </div>
          </div>

          <div
            style={{
              fontSize: '72px',
              fontWeight: '900',
              color: '#1C1917',
              lineHeight: 1.1,
              letterSpacing: '-2px',
              maxWidth: '900px',
              marginBottom: '30px',
            }}
          >
            {title}
          </div>

          <div
            style={{
              fontSize: '32px',
              fontWeight: '500',
              color: '#57534E',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <span style={{ color: '#DC2626', marginRight: '12px' }}>✦</span> Business, Tax & Compliance Consultants in Kalaburagi
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e: any) {
    console.log(`${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
