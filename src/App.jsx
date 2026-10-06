import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { RoomsSection } from './components/RoomsSection';
import { ExperienceSplit } from './components/ExperienceSplit';
import { FeaturesGrid } from './components/FeaturesGrid';
import { LocationSpotlight } from './components/LocationSpotlight';
import { TravelGuideSpotlight } from './components/TravelGuideSpotlight';
import { CtaBanner } from './components/CtaBanner';
import { Footer } from './components/Footer';
import { FloatingContact } from './components/FloatingContact';
import { BackToTop } from './components/BackToTop';
import { BookingModal } from './components/BookingModal';
import { useScrollReveal } from './hooks/useScrollReveal';
import { CheckCircle2 } from 'lucide-react';

export function App() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [bookingInitialData, setBookingInitialData] = useState({});
  const [toastMessage, setToastMessage] = useState(null);

  // Initialize smooth scroll reveal intersection observer
  useScrollReveal();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const showToast = (message) => {
    setToastMessage(message);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleOpenBooking = (data = {}) => {
    setBookingInitialData(data);
    setBookingModalOpen(true);
  };

  const handleSelectRoom = (roomName) => {
    handleOpenBooking({ roomType: roomName });
    showToast(`Đã chọn: ${roomName}`);
  };

  const handleHeroSearch = (searchData) => {
    handleOpenBooking(searchData);
  };

  return (
    <div style={{ position: 'relative', minHeight: '100vh', backgroundColor: 'var(--color-bg-base)' }}>
      {/* Toast Feedback */}
      {toastMessage && (
        <div className="toast-container">
          <div className="toast">
            <CheckCircle2 size={18} color="var(--color-accent-gold)" />
            <span>{toastMessage}</span>
          </div>
        </div>
      )}

      {/* 1. Header */}
      <Header onOpenBookingModal={() => handleOpenBooking()} />

      <main>
        {/* 2. Hero Section with bottom horizontal booking bar */}
        <Hero onSearchBooking={handleHeroSearch} />

        {/* 3. Experience Split Section ("Những ngày ngập tràn ánh sáng và thi vị xứ Huế") */}
        <ExperienceSplit onExplore={() => handleOpenBooking()} />

        {/* 4. Rooms Section ("Phòng êm ái, đón trọn ánh sáng") */}
        <RoomsSection onSelectRoom={handleSelectRoom} />

        {/* 5. Features Considered ("The good things, considered" - 2x3 grid) */}
        <FeaturesGrid />

        {/* 6. Location Spotlight ("Go where the road narrows") */}
        <LocationSpotlight />

        {/* 8. Travel Guide & Food Spotlight ("Dinner follows the boats in") */}
        <TravelGuideSpotlight />

        {/* 9. Warm Sand CTA Banner ("Let the tide set the pace") */}
        <CtaBanner onOpenBookingModal={() => handleOpenBooking()} />
      </main>

      {/* 12. Deep Green 4-column Footer */}
      <Footer />

      {/* Floating Utilities */}
      <FloatingContact onToast={showToast} />
      <BackToTop />

      {/* Interactive Booking Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        initialData={bookingInitialData}
      />
    </div>
  );
}

export default App;
