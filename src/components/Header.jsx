import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, CalendarCheck } from 'lucide-react';
import { homestayData } from '../data/homestayData';

export const Header = ({ onOpenBookingModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Phòng nghỉ', href: '#rooms' },
    { label: 'Trải nghiệm', href: '#experience' },
    { label: 'Tiện ích', href: '#features' },
    { label: 'Không gian', href: '#gallery' },
    { label: 'Vị trí', href: '#location' },
    { label: 'Cẩm nang', href: '#guide' },
  ];

  const handleScrollTo = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          zIndex: 1000,
          transition: 'all 0.3s ease',
          backgroundColor: isScrolled ? 'rgba(15, 39, 31, 0.96)' : 'rgba(0, 0, 0, 0.25)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          borderBottom: isScrolled ? '1px solid rgba(255, 255, 255, 0.12)' : '1px solid rgba(255, 255, 255, 0.08)',
          padding: isScrolled ? '12px 0' : '18px 0'
        }}
      >
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* Brand Logo */}
          <a
            href="#hero"
            onClick={(e) => handleScrollTo(e, '#hero')}
            style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#ffffff' }}
          >
            <img
              src={homestayData.business.logo}
              alt={homestayData.business.name}
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                objectFit: 'cover',
                border: '1.5px solid rgba(255, 255, 255, 0.4)'
              }}
            />
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontSize: '1.15rem', fontWeight: 600, letterSpacing: '-0.01em', lineHeight: 1.1 }}>
                NamPhon
              </span>
              <span style={{ fontSize: '0.68rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255, 255, 255, 0.75)' }}>
                Homestay Huế
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav style={{ display: 'none', alignItems: 'center', gap: '28px' }} className="desktop-nav">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                style={{
                  color: 'rgba(255, 255, 255, 0.88)',
                  fontSize: '0.88rem',
                  fontWeight: 500,
                  transition: 'color 0.2s ease'
                }}
                onMouseEnter={(e) => (e.target.style.color = '#ffffff')}
                onMouseLeave={(e) => (e.target.style.color = 'rgba(255, 255, 255, 0.88)')}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Header Action Button */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <button
              onClick={onOpenBookingModal}
              className="btn-boutique btn-white-outline header-cta-btn"
              style={{ padding: '8px 20px', fontSize: '0.82rem' }}
            >
              Đặt phòng
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="mobile-menu-toggle"
              aria-label="Toggle Navigation"
              style={{
                display: 'none',
                color: '#ffffff',
                padding: '6px',
                borderRadius: '6px'
              }}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 999,
            backgroundColor: 'rgba(15, 39, 31, 0.98)',
            backdropFilter: 'blur(20px)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '20px',
            padding: '24px'
          }}
        >
          <div style={{ textAlign: 'center', marginBottom: '12px' }}>
            <img
              src={homestayData.business.logo}
              alt="NamPhon"
              style={{ width: '60px', height: '60px', borderRadius: '50%', margin: '0 auto 8px auto' }}
            />
            <div style={{ color: '#ffffff', fontSize: '1.25rem', fontWeight: 600 }}>NamPhon Homestay - Huế</div>
          </div>

          <nav style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                style={{ color: '#ffffff', fontSize: '1.1rem', fontWeight: 500 }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenBookingModal();
            }}
            className="btn-boutique btn-teal"
            style={{ width: '220px', marginTop: '12px', backgroundColor: '#ffffff', color: 'var(--color-teal-dark)' }}
          >
            <CalendarCheck size={16} />
            <span>Đặt phòng ngay</span>
          </button>
        </div>
      )}

      <style>{`
        @media (min-width: 860px) {
          .desktop-nav { display: flex !important; }
          .mobile-menu-toggle { display: none !important; }
        }
        @media (max-width: 859px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-toggle { display: block !important; }
          .header-cta-btn { display: none !important; }
        }
      `}</style>
    </>
  );
};
