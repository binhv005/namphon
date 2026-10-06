import React, { useState, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

export const Hero = ({ onSearchBooking }) => {
  // Initialize default dates
  const today = new Date();
  const nextDate = new Date();
  nextDate.setDate(today.getDate() + 2);

  const formatDateValue = (d) => {
    const yyyy = d.getFullYear();
    const mm = String(d.getMonth() + 1).padStart(2, '0');
    const dd = String(d.getDate()).padStart(2, '0');
    return `${yyyy}-${mm}-${dd}`;
  };

  const [checkIn, setCheckIn] = useState(formatDateValue(today));
  const [checkOut, setCheckOut] = useState(formatDateValue(nextDate));
  const [guests, setGuests] = useState('2');

  const checkInRef = useRef(null);
  const checkOutRef = useRef(null);
  const guestSelectRef = useRef(null);

  // Helper to extract day and month for prominent display
  const getDayAndMonth = (dateStr) => {
    if (!dateStr) return { day: '01', month: '01' };
    const parts = dateStr.split('-');
    if (parts.length === 3) {
      return { day: parts[2], month: parts[1] };
    }
    const d = new Date(dateStr);
    return {
      day: String(d.getDate()).padStart(2, '0'),
      month: String(d.getMonth() + 1).padStart(2, '0')
    };
  };

  const checkInData = getDayAndMonth(checkIn);
  const checkOutData = getDayAndMonth(checkOut);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSearchBooking) {
      onSearchBooking({ checkIn, checkOut, guests });
    }
  };

  const handleOpenPicker = (inputRef) => {
    if (inputRef.current) {
      if (typeof inputRef.current.showPicker === 'function') {
        inputRef.current.showPicker();
      } else {
        inputRef.current.focus();
      }
    }
  };

  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.25) 50%, rgba(0, 0, 0, 0.55) 100%), url('/images/p1/825280027_122136034682737482_3016309913368186797_n.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center 40%',
        backgroundRepeat: 'no-repeat',
        color: '#ffffff',
        padding: '120px 20px 40px 20px',
        zIndex: 2
      }}
    >
      {/* Spacer for top balance */}
      <div style={{ height: '40px' }} />

      {/* Center Hero Heading & Subtitle */}
      <div
        className="container reveal reveal-up"
        style={{
          textAlign: 'center',
          maxWidth: '960px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          margin: 'auto 0'
        }}
      >
        {/* Golden Cursive Handwriting Title */}
        <h1
          style={{
            fontFamily: "'Dancing Script', 'Charm', cursive",
            fontSize: 'clamp(3.6rem, 8.5vw, 6.4rem)',
            fontWeight: 700,
            lineHeight: 1.15,
            color: '#f6b828',
            marginBottom: '12px',
            textShadow: '0 4px 20px rgba(0, 0, 0, 0.8), 0 2px 6px rgba(0, 0, 0, 0.9)',
            letterSpacing: '0.02em'
          }}
        >
          NamPhon Homestay
        </h1>

        {/* Clean White Subtitle */}
        <p
          style={{
            fontSize: 'clamp(1.05rem, 2.2vw, 1.35rem)',
            color: '#ffffff',
            fontWeight: 500,
            maxWidth: '720px',
            lineHeight: 1.5,
            textShadow: '0 2px 12px rgba(0, 0, 0, 0.85), 0 1px 4px rgba(0, 0, 0, 0.9)'
          }}
        >
          Một góc nghỉ chân nhẹ nhàng giữa lòng Huế mộng mơ
        </p>
      </div>

      {/* Bottom Floating Horizontal Booking Bar */}
      <div
        style={{
          width: '100%',
          maxWidth: '960px',
          margin: '0 auto',
          position: 'relative',
          zIndex: 10
        }}
      >
        <form
          onSubmit={handleSubmit}
          className="hero-reference-booking-bar reveal reveal-up delay-200"
        >
          {/* Col 1: Nhận phòng */}
          <div
            className="search-card-col"
            onClick={() => handleOpenPicker(checkInRef)}
          >
            <div className="search-card-label">NHẬN PHÒNG</div>
            <div className="search-card-val-row">
              <span className="search-card-big-num">{checkInData.day}</span>
              <span className="search-card-sub">/ Tháng {checkInData.month}</span>
              <ChevronDown size={15} className="search-card-chevron" />
            </div>
            <input
              ref={checkInRef}
              type="date"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              className="search-card-native-input"
              aria-label="Ngày nhận phòng"
            />
          </div>

          {/* Col 2: Trả phòng */}
          <div
            className="search-card-col"
            onClick={() => handleOpenPicker(checkOutRef)}
          >
            <div className="search-card-label">TRẢ PHÒNG</div>
            <div className="search-card-val-row">
              <span className="search-card-big-num">{checkOutData.day}</span>
              <span className="search-card-sub">/ Tháng {checkOutData.month}</span>
              <ChevronDown size={15} className="search-card-chevron" />
            </div>
            <input
              ref={checkOutRef}
              type="date"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              className="search-card-native-input"
              aria-label="Ngày trả phòng"
            />
          </div>

          {/* Col 3: Số khách */}
          <div
            className="search-card-col"
            onClick={() => guestSelectRef.current?.focus()}
          >
            <div className="search-card-label">SỐ KHÁCH</div>
            <div className="search-card-val-row">
              <span className="search-card-big-num">{String(guests).padStart(2, '0')}</span>
              <span className="search-card-sub">/ Khách</span>
              <ChevronDown size={15} className="search-card-chevron" />
            </div>
            <select
              ref={guestSelectRef}
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              className="search-card-native-select"
              aria-label="Số lượng khách"
            >
              <option value="1">01 / Khách</option>
              <option value="2">02 / Khách</option>
              <option value="3">03 / Khách</option>
              <option value="4">04 / Khách</option>
              <option value="5">05+ / Khách</option>
            </select>
          </div>

          {/* Col 4: Button Tìm phòng */}
          <button type="submit" className="search-card-submit-btn">
            TÌM PHÒNG
          </button>
        </form>
      </div>

      <style>{`
        .hero-reference-booking-bar {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr 1.15fr;
          background-color: #ffffff;
          border-radius: 4px;
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.28);
          overflow: hidden;
          width: 100%;
        }

        .search-card-col {
          position: relative;
          padding: 14px 20px;
          border-right: 1px solid #eaeaea;
          cursor: pointer;
          display: flex;
          flex-direction: column;
          justifyContent: center;
          transition: background-color 0.2s ease;
          user-select: none;
        }

        .search-card-col:hover {
          background-color: #fbfbfb;
        }

        .search-card-label {
          font-size: 0.72rem;
          font-weight: 700;
          color: #737373;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          margin-bottom: 4px;
        }

        .search-card-val-row {
          display: flex;
          align-items: baseline;
          gap: 6px;
        }

        .search-card-big-num {
          font-size: 1.85rem;
          font-weight: 800;
          color: #1a1a1a;
          line-height: 1;
        }

        .search-card-sub {
          font-size: 0.88rem;
          font-weight: 600;
          color: #4a4a4a;
        }

        .search-card-chevron {
          margin-left: auto;
          color: #888888;
        }

        .search-card-native-input,
        .search-card-native-select {
          position: absolute;
          inset: 0;
          opacity: 0;
          width: 100%;
          height: 100%;
          cursor: pointer;
        }

        .search-card-submit-btn {
          background-color: #a77c43;
          color: #ffffff;
          font-size: 1rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 18px 24px;
          transition: all 0.25s ease;
          width: 100%;
          height: 100%;
        }

        .search-card-submit-btn:hover {
          background-color: #8f6732;
        }

        @media (max-width: 820px) {
          .hero-reference-booking-bar {
            grid-template-columns: 1fr 1fr;
          }
          .search-card-col:nth-child(2) {
            border-right: none;
          }
          .search-card-col:nth-child(1),
          .search-card-col:nth-child(2) {
            border-bottom: 1px solid #eaeaea;
          }
          .search-card-submit-btn {
            padding: 16px;
          }
        }

        @media (max-width: 540px) {
          .hero-reference-booking-bar {
            grid-template-columns: 1fr;
          }
          .search-card-col {
            border-right: none;
            border-bottom: 1px solid #eaeaea;
            padding: 12px 16px;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
