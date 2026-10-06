import React from 'react';
import { Calendar, Phone } from 'lucide-react';
import { homestayData } from '../data/homestayData';

export const CtaBanner = ({ onOpenBookingModal }) => {
  return (
    <section
      id="booking"
      style={{
        position: 'relative',
        backgroundImage: `linear-gradient(to bottom, var(--color-bg-base) 0%, rgba(247, 244, 238, 0.45) 20%, rgba(238, 228, 215, 0.6) 100%), url('/images/7a9b6ec41f22629694a054c85640523d.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center 45%',
        backgroundRepeat: 'no-repeat',
        padding: '75px 24px',
        textAlign: 'center',
        color: 'var(--color-teal-dark)',
        overflow: 'hidden'
      }}
    >
      <div className="container-narrow reveal reveal-up">
        <h2
          style={{
            fontSize: 'clamp(2.2rem, 4.2vw, 3.6rem)',
            fontWeight: 700,
            color: 'var(--color-teal-dark)',
            marginBottom: '36px',
            letterSpacing: '-0.02em',
            lineHeight: 1.15,
            textWrap: 'balance',
            maxWidth: '750px',
            marginLeft: 'auto',
            marginRight: 'auto',
            textShadow: '0 2px 14px rgba(255, 255, 255, 0.9)'
          }}
        >
          Kỳ nghỉ êm ả giữa lòng Huế&nbsp;mộng&nbsp;mơ.
        </h2>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '14px', flexWrap: 'wrap' }}>
          <button
            onClick={onOpenBookingModal}
            className="btn-boutique btn-teal"
            style={{ padding: '16px 36px', fontSize: '0.92rem', boxShadow: '0 8px 24px rgba(23, 61, 48, 0.25)' }}
          >
            <Calendar size={18} />
            <span>Đặt phòng ngay</span>
          </button>

          <a
            href={`tel:${homestayData.booking.phone}`}
            className="btn-boutique btn-dark-outline"
            style={{ padding: '16px 32px', fontSize: '0.92rem', backgroundColor: 'rgba(255, 255, 255, 0.5)', backdropFilter: 'blur(4px)' }}
          >
            <Phone size={18} />
            <span>Gọi {homestayData.booking.formattedPhone}</span>
          </a>
        </div>
      </div>
    </section>
  );
};
