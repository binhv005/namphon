import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { homestayData } from '../data/homestayData';

export const RoomsSection = ({ onSelectRoom }) => {
  const rooms = homestayData.rooms;

  return (
    <section id="rooms" style={{ backgroundColor: 'var(--color-bg-base)', paddingTop: 'clamp(50px, 6vw, 70px)', paddingBottom: 'clamp(70px, 8vw, 100px)' }}>
      <div className="container">
        {/* Top Header Split: Left Title & Right Subtext with Scroll Reveal */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            gap: '30px',
            marginBottom: '48px'
          }}
        >
          <div className="reveal reveal-left" style={{ maxWidth: '480px' }}>
            <span className="eyebrow">Loại phòng nghỉ</span>
            <h2
              style={{
                fontSize: 'clamp(2.2rem, 4vw, 3.4rem)',
                fontWeight: 600,
                color: 'var(--color-text-main)',
                letterSpacing: '-0.02em',
                lineHeight: 1.15,
                textWrap: 'balance'
              }}
            >
              Phòng êm ái, đón trọn ánh&nbsp;sáng.
            </h2>
          </div>

          <div className="reveal reveal-right delay-150" style={{ maxWidth: '440px', paddingTop: '10px' }}>
            <p style={{ fontSize: '0.98rem', color: 'var(--color-text-muted)', lineHeight: 1.7, textWrap: 'balance' }}>
              {homestayData.hero.description}
            </p>
          </div>
        </div>

        {/* Room Cards Row with Staggered Scroll Animation */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px',
            marginBottom: '32px'
          }}
        >
          {rooms.map((room, index) => {
            const delayClass = `delay-${(index + 1) * 100}`;
            return (
              <div
                key={room.id}
                onClick={() => onSelectRoom(room.name)}
                style={{
                  cursor: 'pointer'
                }}
                className={`room-card-item reveal reveal-up ${delayClass}`}
              >
                {/* Image Aspect Ratio */}
                <div
                  style={{
                    position: 'relative',
                    aspectRatio: '3/4',
                    borderRadius: 'var(--radius-sm)',
                    overflow: 'hidden',
                    backgroundColor: '#e6ded4',
                    marginBottom: '16px'
                  }}
                >
                  <img
                    src={room.images[0]}
                    alt={room.name}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
                    }}
                  />
                </div>

                {/* Room Meta Content */}
                <div>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 600, color: 'var(--color-text-main)', marginBottom: '4px' }}>
                    {room.name}
                  </h3>
                  <p style={{ fontSize: '0.84rem', color: 'var(--color-text-muted)', lineHeight: 1.45 }}>
                    {room.category} • {room.guests} • {room.amenities.slice(0, 2).join(', ')}
                  </p>

                  {/* Separate line for Booking action aligned to the right */}
                  <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '10px' }}>
                    <div
                      style={{
                        color: 'var(--color-teal-primary)',
                        fontSize: '0.85rem',
                        fontWeight: 600,
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '4px',
                        whiteSpace: 'nowrap',
                        transition: 'all 0.25s ease'
                      }}
                      className="room-book-btn"
                    >
                      <span>Đặt phòng</span>
                      <ArrowUpRight size={15} />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      <style>{`
        .room-card-item:hover img {
          transform: scale(1.04);
        }
        .room-card-item:hover .room-book-btn {
          color: var(--color-teal-dark) !important;
          transform: translate(2px, -2px);
        }
      `}</style>
    </section>
  );
};
