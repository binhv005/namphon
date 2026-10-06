import React, { useState } from 'react';
import { Phone, MessageCircle, MapPin, Check, Copy } from 'lucide-react';
import { homestayData } from '../data/homestayData';

export const FloatingContact = ({ onToast }) => {
  const [copied, setCopied] = useState(false);

  const handlePhoneClick = (e) => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (!isMobile) {
      e.preventDefault();
      navigator.clipboard.writeText(homestayData.business.phone);
      setCopied(true);
      if (onToast) {
        onToast(`Đã sao chép SĐT: ${homestayData.business.formattedPhone}`);
      }
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <>
      {/* Floating Vertical Contact Buttons (Desktop & Tablet) */}
      <div
        style={{
          position: 'fixed',
          bottom: '90px',
          right: '24px',
          zIndex: 990,
          display: 'flex',
          flexDirection: 'column',
          gap: '12px'
        }}
        className="floating-contact-container"
      >
        {/* Phone Button */}
        <a
          href={`tel:${homestayData.business.phone}`}
          onClick={handlePhoneClick}
          title={`Gọi hoặc sao chép ${homestayData.business.formattedPhone}`}
          style={{
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            backgroundColor: '#e53935',
            color: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 8px 24px rgba(229, 57, 53, 0.4)',
            border: '2px solid #ffffff',
            position: 'relative',
            transition: 'all 0.3s ease'
          }}
          className="floating-btn animate-pulse-glow-red"
        >
          {copied ? <Check size={22} color="#ffffff" /> : <Phone size={22} />}
        </a>

        {/* Facebook Messenger / Page Button */}
        <a
          href={homestayData.business.facebookUrl}
          target="_blank"
          rel="noopener noreferrer"
          title="Nhắn tin Facebook NamPhon"
          style={{
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            backgroundColor: '#1877f2',
            color: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 8px 24px rgba(0, 0, 0, 0.28)',
            border: '2px solid #ffffff',
            transition: 'all 0.3s ease'
          }}
          className="floating-btn"
        >
          <MessageCircle size={22} />
        </a>


      </div>

      {/* Mobile Sticky Bottom Conversion Bar */}
      <div
        style={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 995,
          backgroundColor: 'rgba(18, 36, 27, 0.96)',
          backdropFilter: 'blur(12px)',
          borderTop: '1px solid rgba(197, 160, 89, 0.3)',
          padding: '10px 16px',
          display: 'none',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '12px',
          boxShadow: '0 -4px 20px rgba(0, 0, 0, 0.3)'
        }}
        className="mobile-sticky-bar"
      >
        <a
          href={`tel:${homestayData.business.phone}`}
          className="btn btn-secondary"
          style={{
            flex: 1,
            padding: '12px',
            fontSize: '0.85rem',
            borderRadius: 'var(--radius-md)'
          }}
        >
          <Phone size={16} />
          <span>Gọi tư vấn</span>
        </a>

        <a
          href="#booking"
          onClick={(e) => {
            e.preventDefault();
            const target = document.querySelector('#booking');
            if (target) target.scrollIntoView({ behavior: 'smooth' });
          }}
          className="btn btn-primary"
          style={{
            flex: 1.2,
            padding: '12px',
            fontSize: '0.85rem',
            borderRadius: 'var(--radius-md)'
          }}
        >
          <span>Đặt phòng ngay</span>
        </a>
      </div>

      <style>{`
        .floating-btn:hover {
          transform: scale(1.1) translateY(-2px);
        }
        @media (max-width: 768px) {
          .floating-contact-container {
            bottom: 74px !important;
            right: 16px !important;
          }
          .mobile-sticky-bar {
            display: flex !important;
          }
        }
      `}</style>
    </>
  );
};
