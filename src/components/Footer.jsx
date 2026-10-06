import React from 'react';
import { Send, Phone, ChevronRight, ExternalLink } from 'lucide-react';
import { homestayData } from '../data/homestayData';

export const Footer = () => {
  const scrollTo = (e, id) => {
    e.preventDefault();
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer
      id="contact"
      style={{
        position: 'relative',
        backgroundColor: '#0c2219',
        backgroundImage: `linear-gradient(to bottom, rgba(12, 34, 25, 0.95) 0%, rgba(8, 22, 16, 0.98) 100%), url('/images/7a9b6ec41f22629694a054c85640523d.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: '#ffffff',
        paddingTop: '50px',
        paddingBottom: '24px',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        overflow: 'hidden'
      }}
    >
      <div className="container">
        {/* 3-Column Main Grid Matching Reference Sample */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.25fr 1fr 1.35fr',
            gap: '40px',
            alignItems: 'start',
            marginBottom: '36px'
          }}
          className="footer-sample-grid"
        >
          {/* Column 1: Brand Logo, Quote & Circular Social Action Buttons */}
          <div className="reveal reveal-up delay-100">
            {/* Brand Header */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '18px' }}>
              <img
                src={homestayData.business.logo}
                alt={homestayData.business.name}
                style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '50%',
                  border: '1.5px solid rgba(255, 255, 255, 0.25)',
                  objectFit: 'cover'
                }}
              />
              <div>
                <h3
                  style={{
                    fontSize: '1.15rem',
                    fontWeight: 700,
                    letterSpacing: '0.04em',
                    color: '#ffffff',
                    lineHeight: 1.2,
                    textTransform: 'uppercase',
                    fontFamily: 'serif'
                  }}
                >
                  NAMPHON HOMESTAY
                </h3>
                <div
                  style={{
                    fontSize: '0.72rem',
                    color: 'var(--color-sand-primary)',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    fontWeight: 600,
                    marginTop: '2px'
                  }}
                >
                  HUẾ BOUTIQUE HOMESTAY
                </div>
              </div>
            </div>

            {/* Italic Quotation Text */}
            <p
              style={{
                fontSize: '0.86rem',
                fontStyle: 'italic',
                color: 'rgba(255, 255, 255, 0.72)',
                lineHeight: 1.65,
                marginBottom: '20px',
                maxWidth: '340px'
              }}
            >
              "NamPhon Homestay luôn vươn mình mang đến không gian nghỉ dưỡng ấm cúng, êm ả và ngập tràn ánh sáng. Đa dạng phòng nghỉ tiện nghi, tiếp sức cho hành trình khám phá Cố Đô."
            </p>

            {/* Circular Social Action Buttons */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              {/* Facebook Button */}
              <a
                href={homestayData.business.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.3s ease',
                  border: '1px solid rgba(255, 255, 255, 0.15)'
                }}
                className="footer-circle-btn"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>

              {/* Send / Messenger Button */}
              <a
                href={homestayData.business.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Nhắn tin"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.3s ease',
                  border: '1px solid rgba(255, 255, 255, 0.15)'
                }}
                className="footer-circle-btn"
              >
                <Send size={15} />
              </a>

              {/* Phone Call Button */}
              <a
                href={`tel:${homestayData.business.phone}`}
                aria-label={`Gọi điện ${homestayData.business.phone}`}
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.3s ease',
                  border: '1px solid rgba(255, 255, 255, 0.15)'
                }}
                className="footer-circle-btn"
              >
                <Phone size={15} />
              </a>
            </div>
          </div>

          {/* Column 2: Khám Phá with Orange Chevron Links */}
          <div className="reveal reveal-up delay-200">
            <div>
              <h4
                style={{
                  fontSize: '1.15rem',
                  fontWeight: 600,
                  color: '#ffffff',
                  fontFamily: 'serif',
                  marginBottom: '6px'
                }}
              >
                Khám Phá
              </h4>
              <div
                style={{
                  width: '42px',
                  height: '2px',
                  backgroundColor: '#e07a5f',
                  marginBottom: '18px'
                }}
              />
            </div>

            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', padding: 0 }}>
              <li>
                <a
                  href="#experience"
                  onClick={(e) => scrollTo(e, '#experience')}
                  style={{
                    color: 'rgba(255, 255, 255, 0.8)',
                    fontSize: '0.88rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    transition: 'color 0.2s ease'
                  }}
                  className="footer-link-hover"
                >
                  <ChevronRight size={14} color="#e07a5f" />
                  <span>Giới thiệu homestay</span>
                </a>
              </li>

              <li>
                <a
                  href="#rooms"
                  onClick={(e) => scrollTo(e, '#rooms')}
                  style={{
                    color: 'rgba(255, 255, 255, 0.8)',
                    fontSize: '0.88rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    transition: 'color 0.2s ease'
                  }}
                  className="footer-link-hover"
                >
                  <ChevronRight size={14} color="#e07a5f" />
                  <span>Danh sách phòng</span>
                </a>
              </li>

              <li>
                <a
                  href="#rooms"
                  onClick={(e) => scrollTo(e, '#rooms')}
                  style={{
                    color: 'rgba(255, 255, 255, 0.8)',
                    fontSize: '0.88rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    transition: 'color 0.2s ease'
                  }}
                  className="footer-link-hover"
                >
                  <ChevronRight size={14} color="#e07a5f" />
                  <span>Bảng giá & Gói nghỉ</span>
                </a>
              </li>

              <li>
                <a
                  href="#features"
                  onClick={(e) => scrollTo(e, '#features')}
                  style={{
                    color: 'rgba(255, 255, 255, 0.8)',
                    fontSize: '0.88rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    transition: 'color 0.2s ease'
                  }}
                  className="footer-link-hover"
                >
                  <ChevronRight size={14} color="#e07a5f" />
                  <span>Tiện nghi & Dịch vụ</span>
                </a>
              </li>

              <li>
                <a
                  href="#booking"
                  onClick={(e) => scrollTo(e, '#booking')}
                  style={{
                    color: 'rgba(255, 255, 255, 0.8)',
                    fontSize: '0.88rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    transition: 'color 0.2s ease'
                  }}
                  className="footer-link-hover"
                >
                  <ChevronRight size={14} color="#e07a5f" />
                  <span>Đặt lịch nhận tư vấn</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Bản Đồ Vị Trí with Embedded Interactive Maps */}
          <div className="reveal reveal-up delay-300">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
              <h4
                style={{
                  fontSize: '1.15rem',
                  fontWeight: 600,
                  color: '#ffffff',
                  fontFamily: 'serif'
                }}
              >
                Bản Đồ Vị Trí
              </h4>

              <a
                href={homestayData.business.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: 'rgba(255, 255, 255, 0.8)',
                  fontSize: '0.82rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px',
                  fontWeight: 500
                }}
                className="footer-link-hover"
              >
                <span>Mở Maps</span>
                <ExternalLink size={13} />
              </a>
            </div>

            <div
              style={{
                width: '42px',
                height: '2px',
                backgroundColor: '#e07a5f',
                marginBottom: '16px'
              }}
            />

            {/* Map Frame Card with Floating Badge */}
            <div
              style={{
                position: 'relative',
                borderRadius: '12px',
                overflow: 'hidden',
                border: '1px solid rgba(255, 255, 255, 0.18)',
                height: '190px',
                backgroundColor: '#e8ece9',
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.25)'
              }}
            >
              <iframe
                src={homestayData.business.googleMapsEmbedUrl}
                title="Bản đồ vị trí NamPhon Homestay Huế"
                width="100%"
                height="100%"
                style={{
                  border: 0,
                  width: '100%',
                  height: '100%',
                  display: 'block'
                }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              {/* Floating "Mở trong Maps" button in top-left */}
              <a
                href={homestayData.business.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  position: 'absolute',
                  top: '12px',
                  left: '12px',
                  backgroundColor: 'rgba(255, 255, 255, 0.95)',
                  color: '#1a73e8',
                  padding: '5px 10px',
                  borderRadius: '6px',
                  fontSize: '0.74rem',
                  fontWeight: 600,
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
                  textDecoration: 'none'
                }}
              >
                <span>Mở trong Maps</span>
                <ExternalLink size={12} />
              </a>
            </div>
          </div>
        </div>

        {/* Sub-footer Bottom Bar */}
        <div
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            paddingTop: '18px',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '12px',
            fontSize: '0.8rem',
            color: 'rgba(255, 255, 255, 0.55)'
          }}
        >
          <div>
            © {new Date().getFullYear()} <strong>NamPhon Homestay</strong>. Tất cả các quyền được bảo lưu.
          </div>
          <div>
            Boutique — Cozy — Peaceful — Light • Huế, Việt Nam
          </div>
        </div>
      </div>

      <style>{`
        .footer-circle-btn:hover {
          background-color: var(--color-teal-primary) !important;
          transform: translateY(-2px);
        }
        .footer-link-hover:hover {
          color: #ffffff !important;
          transform: translateX(3px);
        }
        @media (max-width: 900px) {
          .footer-sample-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 600px) {
          .footer-sample-grid {
            grid-template-columns: 1fr !important;
            gap: 30px !important;
          }
        }
      `}</style>
    </footer>
  );
};
