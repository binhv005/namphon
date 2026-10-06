import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

export const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 350) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      title="Về đầu trang"
      style={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        zIndex: 980,
        width: '46px',
        height: '46px',
        borderRadius: '50%',
        backgroundColor: 'var(--color-moss-dark)',
        color: 'var(--color-gold-light)',
        border: '1.5px solid var(--color-gold-primary)',
        boxShadow: '0 6px 18px rgba(0, 0, 0, 0.25)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        transition: 'all 0.3s ease'
      }}
      className="back-to-top-btn"
    >
      <ChevronUp size={22} />
      <style>{`
        .back-to-top-btn:hover {
          transform: translateY(-4px);
          background-color: var(--color-moss-primary);
          box-shadow: 0 10px 24px rgba(197, 160, 89, 0.4);
        }
        @media (max-width: 768px) {
          .back-to-top-btn {
            bottom: 80px !important;
            right: 80px !important;
          }
        }
      `}</style>
    </button>
  );
};
