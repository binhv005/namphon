import React from 'react';
import { ArrowUpRight, MapPin, Navigation } from 'lucide-react';
import { homestayData } from '../data/homestayData';

export const LocationSpotlight = () => {
  return (
    <section id="location" style={{ backgroundColor: 'var(--color-bg-base)', paddingTop: 'clamp(60px, 7vw, 90px)', paddingBottom: '10px', borderTop: '1px solid rgba(0, 0, 0, 0.06)' }}>
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '50px',
            alignItems: 'center'
          }}
        >
          {/* Left: Text & CTA with Slide From Left */}
          <div className="reveal reveal-left" style={{ maxWidth: '440px' }}>
            <span className="eyebrow">Vị trí & Khám phá</span>
            <h2
              style={{
                fontSize: 'clamp(2.2rem, 4vw, 3.4rem)',
                fontWeight: 600,
                color: 'var(--color-text-main)',
                letterSpacing: '-0.02em',
                marginBottom: '20px',
                lineHeight: 1.15,
                textWrap: 'balance'
              }}
            >
              Thuận tiện để khám phá&nbsp;Huế.
            </h2>

            <p
              style={{
                fontSize: '0.98rem',
                color: 'var(--color-text-muted)',
                lineHeight: 1.75,
                marginBottom: '28px',
                textWrap: 'pretty'
              }}
            >
              {homestayData.location.description}
            </p>

            <a
              href={homestayData.business.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                color: 'var(--color-teal-primary)',
                fontSize: '0.92rem',
                fontWeight: 600,
                borderBottom: '1.5px solid var(--color-teal-primary)',
                paddingBottom: '2px'
              }}
            >
              <span>Xem vị trí trên Google Maps</span>
              <ArrowUpRight size={16} />
            </a>
          </div>

          {/* Right: Image with Floating Location Distance Card with Slide From Right */}
          <div className="reveal reveal-right delay-150" style={{ position: 'relative' }}>
            <div
              style={{
                borderRadius: 'var(--radius-sm)',
                overflow: 'hidden',
                aspectRatio: '16/10',
                backgroundColor: '#e2dad0'
              }}
            >
              <img
                src="/images/p3/795345132_122134153838737482_7034725548551381216_n.jpg"
                alt="Khám phá Huế từ NamPhon"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
            </div>

            {/* Floating Info Tag at bottom-left */}
            <div
              className="reveal reveal-up delay-300"
              style={{
                position: 'absolute',
                bottom: '20px',
                left: '20px',
                backgroundColor: 'rgba(255, 255, 255, 0.96)',
                backdropFilter: 'blur(10px)',
                padding: '16px 20px',
                borderRadius: 'var(--radius-sm)',
                boxShadow: 'var(--shadow-md)',
                maxWidth: '280px'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-teal-primary)', fontWeight: 700, marginBottom: '6px' }}>
                <MapPin size={14} />
                <span>Khoảng cách di chuyển</span>
              </div>
              <div style={{ fontSize: '0.84rem', color: 'var(--color-text-main)', lineHeight: 1.5, fontWeight: 500 }}>
                • Cầu Trường Tiền (2,8 km)<br />
                • Cố đô & Hoàng thành Huế (3,9 - 4,0 km)<br />
                • Chùa Từ Đàm (3,5 km)
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
