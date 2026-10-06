import React, { useRef } from 'react';
import { 
  ChevronLeft, 
  ChevronRight
} from 'lucide-react';
import { homestayData } from '../data/homestayData';

export const TravelGuideSpotlight = () => {
  const sliderRef = useRef(null);
  const categories = homestayData.travelGuide.categories;

  // Map category to high-resolution editorial imagery
  const getCategoryImage = (catId) => {
    switch (catId) {
      case 'food':
        return '/images/amthuc.jpg';
      case 'activities':
        return '/images/choi.jpg';
      case 'checkin':
        return '/images/checkin.jpg';
      case 'culture':
        return '/images/p4/793947365_122133136142737482_7520221387132017454_n.jpg';
      case 'experience':
        return '/images/p2/825340275_122135678042737482_4890250794503948191_n.jpg';
      case 'foodtour':
        return '/images/7a9b6ec41f22629694a054c85640523d.jpg';
      default:
        return '/images/amthuc.jpg';
    }
  };

  // Slider navigation
  const handleScroll = (direction) => {
    if (sliderRef.current) {
      const scrollAmount = direction === 'left' ? -420 : 420;
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="guide"
      style={{
        backgroundColor: 'var(--color-bg-base)',
        paddingTop: 'clamp(64px, 8vw, 100px)',
        paddingBottom: 'clamp(64px, 8vw, 100px)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div className="container">
        {/* Section Editorial Header */}
        <div
          className="reveal reveal-up"
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            flexWrap: 'wrap',
            gap: '24px',
            marginBottom: '36px'
          }}
        >
          <div style={{ maxWidth: '640px' }}>
            <h2
              style={{
                fontSize: 'clamp(1.9rem, 3.2vw, 2.7rem)',
                fontWeight: 700,
                color: '#173d30',
                letterSpacing: '-0.02em',
                lineHeight: 1.2,
                marginBottom: '12px'
              }}
            >
              Cẩm nang ăn chơi "chuẩn người bản&nbsp;địa"
            </h2>

            <p
              style={{
                fontSize: '0.98rem',
                color: '#5e5348',
                lineHeight: 1.65,
                margin: 0
              }}
            >
              {homestayData.travelGuide.description}
            </p>
          </div>

          {/* Slider Controls */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <button
              onClick={() => handleScroll('left')}
              aria-label="Previous Slide"
              style={{
                width: '46px',
                height: '46px',
                borderRadius: '50%',
                backgroundColor: '#ffffff',
                border: '1px solid rgba(23, 61, 48, 0.15)',
                color: '#173d30',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)',
                cursor: 'pointer',
                transition: 'all 0.25s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#173d30';
                e.currentTarget.style.color = '#ffffff';
                e.currentTarget.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#ffffff';
                e.currentTarget.style.color = '#173d30';
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              <ChevronLeft size={22} />
            </button>

            <button
              onClick={() => handleScroll('right')}
              aria-label="Next Slide"
              style={{
                width: '46px',
                height: '46px',
                borderRadius: '50%',
                backgroundColor: '#173d30',
                border: '1px solid #173d30',
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 14px rgba(23, 61, 48, 0.25)',
                cursor: 'pointer',
                transition: 'all 0.25s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#235443';
                e.currentTarget.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#173d30';
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              <ChevronRight size={22} />
            </button>
          </div>
        </div>

        {/* Magazine Editorial Slider Track */}
        <div
          ref={sliderRef}
          className="magazine-slider-track reveal reveal-up delay-150"
          style={{
            display: 'flex',
            gap: '24px',
            overflowX: 'auto',
            scrollSnapType: 'x mandatory',
            paddingBottom: '20px',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none'
          }}
        >
          {categories.map((cat) => {
            const imgUrl = getCategoryImage(cat.id);

            return (
              <div
                key={cat.id}
                className="magazine-card"
                style={{
                  flex: '0 0 clamp(320px, 32vw, 380px)',
                  scrollSnapAlign: 'start',
                  backgroundColor: '#ffffff',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  border: '1px solid rgba(0, 0, 0, 0.07)',
                  boxShadow: '0 8px 30px rgba(0, 0, 0, 0.06)',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.boxShadow = '0 16px 40px rgba(23, 61, 48, 0.12)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 8px 30px rgba(0, 0, 0, 0.06)';
                }}
              >
                {/* Magazine Card Visual Banner */}
                <div
                  style={{
                    position: 'relative',
                    height: '220px',
                    width: '100%',
                    overflow: 'hidden',
                    backgroundColor: '#e6ded4'
                  }}
                >
                  <img
                    src={imgUrl}
                    alt={cat.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.6s ease'
                    }}
                    className="magazine-img"
                  />
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(to top, rgba(15, 39, 31, 0.8) 0%, rgba(15, 39, 31, 0.1) 60%, transparent 100%)'
                    }}
                  />

                  {/* Title on bottom of Image */}
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '16px',
                      left: '18px',
                      right: '18px'
                    }}
                  >
                    <h3
                      style={{
                        color: '#ffffff',
                        fontSize: '1.35rem',
                        fontWeight: 700,
                        margin: 0,
                        lineHeight: 1.25,
                        textShadow: '0 2px 8px rgba(0,0,0,0.4)'
                      }}
                    >
                      {cat.title}
                    </h3>
                  </div>
                </div>

                {/* Magazine Card Content Body */}
                <div
                  style={{
                    padding: '20px 22px 24px 22px',
                    display: 'flex',
                    flexDirection: 'column',
                    flex: 1,
                    justifyContent: 'flex-start'
                  }}
                >
                  <p
                    style={{
                      fontSize: '0.88rem',
                      color: '#6e6154',
                      lineHeight: 1.5,
                      marginBottom: '16px',
                      fontStyle: 'italic'
                    }}
                  >
                    "{cat.subtitle}"
                  </p>

                  {/* Curated Item Highlights (Title only) */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {cat.items.map((item, itemIdx) => (
                      <div
                        key={itemIdx}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px',
                          fontSize: '0.9rem',
                          fontWeight: 600,
                          color: '#1d2521',
                          padding: '3px 0'
                        }}
                      >
                        <span
                          style={{
                            width: '5px',
                            height: '5px',
                            borderRadius: '50%',
                            backgroundColor: '#8b5e3c',
                            flexShrink: 0
                          }}
                        />
                        <span>{item.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .magazine-slider-track::-webkit-scrollbar {
          display: none;
        }
        .magazine-card:hover .magazine-img {
          transform: scale(1.06);
        }
        @media (max-width: 640px) {
          .magazine-card {
            flex: 0 0 85vw !important;
          }
        }
      `}</style>
    </section>
  );
};

export default TravelGuideSpotlight;

