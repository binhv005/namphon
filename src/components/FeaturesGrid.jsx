import React from 'react';

export const FeaturesGrid = () => {
  const features = [
    {
      title: 'ÁNH SÁNG TỰ NHIÊN',
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="#443224" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          {/* Sun with natural window rays */}
          <circle cx="24" cy="24" r="8" />
          <path d="M24 6v4" />
          <path d="M24 38v4" />
          <path d="M11.3 11.3l2.8 2.8" />
          <path d="M33.9 33.9l2.8 2.8" />
          <path d="M6 24h4" />
          <path d="M38 24h4" />
          <path d="M11.3 36.7l2.8-2.8" />
          <path d="M33.9 14.1l2.8-2.8" />
        </svg>
      )
    },
    {
      title: 'CHỖ NGHỈ ÊM ÁI',
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="#443224" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          {/* Cozy bed with headboard and pillows */}
          <path d="M8 38v-8m32 8v-8" />
          <path d="M8 26h32v8H8z" />
          <path d="M8 30V14a2 2 0 0 1 2-2h28a2 2 0 0 1 2 2v16" />
          <rect x="13" y="18" width="8" height="5" rx="1.5" />
          <rect x="27" y="18" width="8" height="5" rx="1.5" />
        </svg>
      )
    },
    {
      title: 'CẨM NANG BẢN ĐỊA',
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="#443224" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          {/* Compass illustration */}
          <circle cx="24" cy="24" r="16" />
          <polygon points="24 13 28 24 24 35 20 24" />
          <path d="M24 8v2m0 28v2m-16-16h2m28 0h2" />
        </svg>
      )
    },
    {
      title: 'VỊ TRÍ THUẬN TIỆN',
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="#443224" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          {/* Location pin with sunset / bridge */}
          <path d="M24 8c-6 0-10 4-10 9 0 7 10 17 10 17s10-10 10-17c0-5-4-9-10-9z" />
          <circle cx="24" cy="17" r="3.5" />
          <path d="M8 40h32" />
        </svg>
      )
    },
    {
      title: 'PHONG CÁCH HUẾ',
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="#443224" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          {/* Teapot / Tea cup with subtle steam */}
          <path d="M12 36h20a4 4 0 0 0 4-4V24H8v8a4 4 0 0 0 4 4z" />
          <path d="M17 24v-4a7 7 0 0 1 14 0v4" />
          <path d="M36 26h4a3 3 0 0 1 3 3v2a3 3 0 0 1-3 3h-4" />
          <path d="M20 12c1-2 1-3 0-5m4 5c1-2 1-3 0-5" />
          <path d="M6 40h32" />
        </svg>
      )
    },
    {
      title: 'TƯ VẤN TẬN TÂM',
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="#443224" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          {/* Clapped hands / Heart with support */}
          <path d="M24 12a6 6 0 0 0-6 6c0 5 6 10 6 10s6-5 6-10a6 6 0 0 0-6-6z" />
          <path d="M10 32c4-2 8-2 14-2s10 0 14 2" />
          <path d="M14 36c3-1 6-1 10-1s7 0 10 1" />
          <path d="M8 40h32" />
        </svg>
      )
    }
  ];

  return (
    <section
      id="features"
      style={{
        backgroundColor: '#dfd5c6',
        padding: 'clamp(65px, 8vw, 95px) 20px clamp(70px, 8vw, 100px) 20px',
        color: '#443224',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Decorative Background Image on Right Corner (Subtle / Bottom Layer) */}
      <div
        style={{
          position: 'absolute',
          right: '-20px',
          bottom: 0,
          top: 0,
          width: 'clamp(280px, 38vw, 500px)',
          pointerEvents: 'none',
          zIndex: 0,
          opacity: 0.22,
          maskImage: 'linear-gradient(to left, rgba(0,0,0,1) 20%, transparent 100%), linear-gradient(to bottom, transparent 0%, rgba(0,0,0,1) 15%, rgba(0,0,0,1) 85%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to left, rgba(0,0,0,1) 20%, transparent 100%), linear-gradient(to bottom, transparent 0%, rgba(0,0,0,1) 15%, rgba(0,0,0,1) 85%, transparent 100%)',
          maskComposite: 'intersect',
          WebkitMaskComposite: 'destination-in'
        }}
      >
        <img
          src="/images/c45840b467fc531d5321153ce70bddb6.jpg"
          alt=""
          aria-hidden="true"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center right',
            mixBlendMode: 'multiply'
          }}
        />
      </div>

      <div className="container" style={{ maxWidth: '960px', textAlign: 'center', position: 'relative', zIndex: 1 }}>
        {/* Main Rustic Uppercase Title */}
        <div className="reveal reveal-up" style={{ marginBottom: '45px' }}>
          <h2
            style={{
              fontSize: 'clamp(1.7rem, 3.8vw, 2.6rem)',
              fontWeight: 800,
              color: '#443224',
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
              marginBottom: '10px',
              fontFamily: "'Montserrat', sans-serif"
            }}
          >
            ĐẾN VỚI NAMPHON, BẠN SẼ ĐƯỢC{' '}
            <span style={{ position: 'relative', display: 'inline-block' }}>
              TRẢI NGHIỆM
              {/* Hand-drawn decorative wave underline under keyword */}
              <svg
                viewBox="0 0 160 16"
                fill="none"
                style={{
                  position: 'absolute',
                  left: 0,
                  bottom: '-10px',
                  width: '100%',
                  height: '14px',
                  pointerEvents: 'none'
                }}
              >
                <path
                  d="M2 8 C 30 14, 50 2, 80 8 C 110 14, 130 2, 158 8"
                  stroke="#443224"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h2>

          {/* Italicized subtitle with decorative flourish */}
          <p
            style={{
              fontSize: 'clamp(0.95rem, 1.8vw, 1.15rem)',
              color: '#654f3e',
              fontStyle: 'italic',
              marginTop: '16px',
              fontFamily: 'serif'
            }}
          >
            ❧ Không gian ngập tràn ánh sáng và thi vị xứ Huế mộng mơ ❧
          </p>
        </div>

        {/* 6-Column Single Horizontal Row */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(6, 1fr)',
            gap: 'clamp(14px, 2.5vw, 28px)',
            maxWidth: '1180px',
            margin: '0 auto clamp(40px, 6vw, 55px) auto',
            alignItems: 'start'
          }}
          className="vintage-features-grid"
        >
          {features.map((item, idx) => (
            <div
              key={idx}
              className={`reveal reveal-up delay-${(idx + 1) * 80}`}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                transition: 'transform 0.3s ease'
              }}
            >
              {/* Arched Uppercase Label */}
              <span
                style={{
                  fontSize: 'clamp(0.68rem, 0.95vw, 0.76rem)',
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: '#443224',
                  marginBottom: '12px',
                  lineHeight: 1.3,
                  whiteSpace: 'nowrap'
                }}
              >
                {item.title}
              </span>

              {/* Minimal Line Art Icon */}
              <div
                style={{
                  width: '50px',
                  height: '50px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'transform 0.25s ease'
                }}
                className="vintage-icon-wrapper"
              >
                {item.icon}
              </div>
            </div>
          ))}
        </div>

        {/* Center Pill Button */}
        <div className="reveal reveal-up delay-400">
          <a
            href="#rooms"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#423124',
              color: '#ffffff',
              padding: '13px 32px',
              borderRadius: '9999px',
              fontSize: '0.82rem',
              fontWeight: 700,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              boxShadow: '0 6px 18px rgba(66, 49, 36, 0.25)',
              transition: 'all 0.3s ease'
            }}
            className="vintage-pill-btn"
          >
            XEM CHI TIẾT TIỆN NGHI
          </a>
        </div>
      </div>

      <style>{`
        .vintage-features-grid > div:hover .vintage-icon-wrapper {
          transform: translateY(-4px) scale(1.08);
        }
        .vintage-pill-btn:hover {
          background-color: #2c2017 !important;
          transform: translateY(-2px);
          box-shadow: 0 10px 24px rgba(66, 49, 36, 0.35) !important;
        }
        @media (max-width: 960px) {
          .vintage-features-grid {
            grid-template-columns: repeat(3, 1fr) !important;
            gap: 28px 16px !important;
          }
        }
        @media (max-width: 580px) {
          .vintage-features-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 24px 12px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default FeaturesGrid;
