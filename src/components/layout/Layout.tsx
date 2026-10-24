import React, { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Calendar, MessageSquareQuote } from 'lucide-react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { MobileContactBar } from './MobileContactBar';
import { ConsultationModal } from './ConsultationModal';

export const Layout: React.FC = () => {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const location = useLocation();

  // Scroll to top upon route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F8FC] text-[#17213C] selection:bg-[#ED1834] selection:text-white relative">
      {/* Top Navbar */}
      <Navbar onOpenConsultation={() => setIsConsultationOpen(true)} />

      {/* Main Content Area with bottom padding on mobile for MobileContactBar */}
      <main className="grow pb-16 md:pb-0">
        <Outlet />
      </main>

      {/* Sticky Desktop Consultation Booking Button */}
      <aside aria-label="Quick consultation launcher" className="hidden md:block fixed bottom-6 right-6 z-30">
        <button
          type="button"
          onClick={() => setIsConsultationOpen(true)}
          className="inline-flex items-center gap-2.5 bg-[#151E4D] hover:bg-[#101737] text-white px-4.5 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 border-2 border-white/20 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ED1834] focus-visible:ring-offset-2 group"
          aria-label="Book inspection or consultation"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-[#ED1834] animate-pulse" aria-hidden="true" />
          <Calendar className="w-4 h-4 text-white group-hover:text-[#FFF0F2]" />
          <span className="text-sm font-semibold tracking-tight">Book Consultation</span>
        </button>
      </aside>

      {/* Mobile Fixed Bottom Contact Bar */}
      <MobileContactBar onOpenConsultation={() => setIsConsultationOpen(true)} />

      {/* Consultation / Booking Modal */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
      />

      {/* Footer */}
      <Footer />
    </div>
  );
};
