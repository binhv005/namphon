import React from 'react';
import { ArrowRight, Sparkles, Compass } from 'lucide-react';
import { homestayData } from '../data/homestayData';

export const ExperienceSplit = ({ onExplore }) => {
  return (
    <section
      id="experience"
      style={{
        backgroundColor: 'var(--color-bg-base)',
        position: 'relative',
        overflow: 'hidden',
        paddingTop: 'clamp(70px, 9vw, 100px)',
        paddingBottom: 0
      }}
    >
      <div className="container">
        {/* Tier 1: Left Vertical Image with Offset Backdrop & Right Editorial Headline */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '0.85fr 1.15fr',
            gap: 'clamp(36px, 6vw, 80px)',
            alignItems: 'center',
            marginBottom: 'clamp(60px, 8vw, 100px)'
          }}
          className="editorial-tier-1"
        >
          {/* Left: Vertical Image with offset decor card */}
          <div className="reveal reveal-left" style={{ position: 'relative', width: '100%', maxWidth: '420px', margin: '0 auto' }}>
            {/* Offset decorative backdrop */}
            <div
              style={{
                position: 'absolute',
                top: '-18px',
                left: '-18px',
                width: '75%',
                height: '75%',
                backgroundColor: '#dfd5c6',
                borderRadius: 'var(--radius-sm)',
                zIndex: 0
              }}
            />

            {/* Main Portrait Photo */}
            <div
              style={{
                position: 'relative',
                zIndex: 1,
                borderRadius: 'var(--radius-sm)',
                overflow: 'hidden',
                aspectRatio: '3/4',
                boxShadow: '0 16px 40px rgba(29, 37, 33, 0.12)',
                backgroundColor: '#e6ded4'
              }}
            >
              <img
                src="/images/p1/825280027_122136034682737482_3016309913368186797_n.jpg"
                alt="Không gian ngập tràn ánh sáng tại NamPhon Homestay"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block'
                }}
              />
            </div>
          </div>

          {/* Right: Main Headline & Editorial Content */}
          <div className="reveal reveal-right delay-150">
            <span
              className="eyebrow"
              style={{
                color: 'var(--color-text-muted)',
                marginBottom: '14px',
                letterSpacing: '0.14em'
              }}
            >
              Trải nghiệm nghỉ dưỡng
            </span>

            <h2
              className="font-serif"
              style={{
                fontSize: 'clamp(2.2rem, 4vw, 3.4rem)',
                fontWeight: 600,
                color: 'var(--color-text-main)',
                marginBottom: '20px',
                lineHeight: 1.18,
                letterSpacing: '-0.02em',
                textWrap: 'balance'
              }}
            >
              Những ngày ngập tràn ánh sáng và thi vị&nbsp;xứ&nbsp;Huế.
            </h2>

            <p
              style={{
                fontSize: '1rem',
                color: 'var(--color-text-muted)',
                lineHeight: 1.75,
                marginBottom: '32px',
                maxWidth: '560px',
                textWrap: 'pretty'
              }}
            >
              Tại NamPhon, chúng tôi nâng niu từng khoảnh khắc nghỉ dưỡng của du khách. Từ ánh nắng sớm rọi qua khung cửa, chỗ ngả lưng êm ái tái tạo năng lượng, cho đến không gian yên ả giữa lòng Cố Đô.
            </p>

            {/* Rounded Pill Buttons */}
            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
              <button
                onClick={onExplore}
                className="btn-boutique btn-teal"
                style={{ padding: '12px 28px', fontSize: '0.88rem' }}
              >
                <span>Đặt phòng ngay</span>
                <ArrowRight size={15} />
              </button>

              <a
                href="#guide"
                className="btn-boutique btn-dark-outline"
                style={{ padding: '12px 26px', fontSize: '0.88rem' }}
              >
                <span>Xem cẩm nang</span>
              </a>
            </div>
          </div>
        </div>

        {/* Tier 2: Left Poetic Text & Metrics + Right Wide Landscape Photo */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '0.85fr 1.15fr',
            gap: 'clamp(36px, 6vw, 80px)',
            alignItems: 'center'
          }}
          className="editorial-tier-2"
        >
          {/* Left: Poetic Text & Key Metrics */}
          <div className="reveal reveal-left">
            <h3
              className="font-serif"
              style={{
                fontSize: 'clamp(1.5rem, 2.6vw, 2.1rem)',
                fontWeight: 600,
                color: 'var(--color-text-main)',
                fontStyle: 'italic',
                lineHeight: 1.35,
                marginBottom: '20px',
                textWrap: 'balance'
              }}
            >
              "Một góc nghỉ chân nhẹ nhàng, chuẩn bị cho những chuyến foodtour miệt mài."
            </h3>

            <p
              style={{
                fontSize: '0.92rem',
                color: 'var(--color-text-muted)',
                lineHeight: 1.65,
                marginBottom: '28px',
                maxWidth: '480px'
              }}
            >
              Không gian nghỉ dưỡng hòa quyện giữa nét mộc mạc của kiến trúc Huế và sự tiện nghi chuẩn boutique, mang đến sự thư thái tuyệt đối.
            </p>

            {/* Metrics Chips */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '28px' }}>
              <div
                style={{
                  backgroundColor: '#ffffff',
                  padding: '8px 16px',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  color: 'var(--color-teal-primary)',
                  boxShadow: 'var(--shadow-sm)',
                  border: '1px solid rgba(23, 61, 48, 0.12)'
                }}
              >
                100% Yên tĩnh & riêng tư
              </div>

              <div
                style={{
                  backgroundColor: '#ffffff',
                  padding: '8px 16px',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  color: 'var(--color-teal-primary)',
                  boxShadow: 'var(--shadow-sm)',
                  border: '1px solid rgba(23, 61, 48, 0.12)'
                }}
              >
                03 Giá trị cốt lõi
              </div>

              <div
                style={{
                  backgroundColor: '#ffffff',
                  padding: '8px 16px',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  color: 'var(--color-teal-primary)',
                  boxShadow: 'var(--shadow-sm)',
                  border: '1px solid rgba(23, 61, 48, 0.12)'
                }}
              >
                2.8 km Cầu Trường Tiền
              </div>
            </div>

            <a
              href="#rooms"
              className="btn-boutique btn-dark-outline"
              style={{ padding: '11px 24px', fontSize: '0.85rem' }}
            >
              <span>Khám phá các hạng phòng</span>
            </a>
          </div>

          {/* Right: Wide Landscape Photo */}
          <div className="reveal reveal-right delay-150">
            <div
              style={{
                borderRadius: 'var(--radius-md)',
                overflow: 'hidden',
                aspectRatio: '16/10',
                boxShadow: '0 20px 48px rgba(29, 37, 33, 0.14)',
                backgroundColor: '#e6ded4'
              }}
            >
              <img
                src="/images/e88a07fc-4796-408f-a05f-f8c83d08fef6.png"
                alt="Khung cảnh hoàng hôn êm ả tại NamPhon Homestay"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block'
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .editorial-tier-1,
          .editorial-tier-2 {
            grid-template-columns: 1fr !important;
            gap: 36px !important;
          }
          .editorial-tier-2 > div:first-child {
            order: 2;
          }
          .editorial-tier-2 > div:last-child {
            order: 1;
          }
        }
      `}</style>
    </section>
  );
};

export default ExperienceSplit;
