import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MessageCircle, FileText } from 'lucide-react';
import { BUSINESS_CONFIG } from '../../data/business';

interface MobileContactBarProps {
  onOpenConsultation: () => void;
}

export const MobileContactBar: React.FC<MobileContactBarProps> = ({ onOpenConsultation }) => {
  const whatsappUrl = BUSINESS_CONFIG.isConfigured.whatsapp
    ? `https://wa.me/${BUSINESS_CONFIG.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
        `Hi ${BUSINESS_CONFIG.name}, I would like to enquire about pest control services in Hyderabad.`
      )}`
    : null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-[#E3E7EF] shadow-lg md:hidden pb-safe">
      <div className="grid grid-cols-3 h-16 divide-x divide-[#E3E7EF]">
        {/* Call */}
        {BUSINESS_CONFIG.isConfigured.phone ? (
          <a
            href={`tel:${BUSINESS_CONFIG.phone}`}
            className="flex flex-col items-center justify-center gap-1 text-[#151E4D] hover:bg-[#EDF0F7] active:bg-[#EDF0F7] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ED1834]"
          >
            <Phone className="w-4 h-4 text-[#ED1834]" />
            <span className="text-[11px] font-semibold tracking-tight">Call</span>
          </a>
        ) : (
          <button
            type="button"
            onClick={onOpenConsultation}
            className="flex flex-col items-center justify-center gap-1 text-[#151E4D] hover:bg-[#EDF0F7] active:bg-[#EDF0F7] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ED1834]"
          >
            <Phone className="w-4 h-4 text-[#ED1834]" />
            <span className="text-[11px] font-semibold tracking-tight">Call Info</span>
          </button>
        )}

        {/* WhatsApp */}
        {whatsappUrl ? (
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center gap-1 text-[#151E4D] hover:bg-[#EDF0F7] active:bg-[#EDF0F7] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600"
          >
            <MessageCircle className="w-4 h-4 text-emerald-600" />
            <span className="text-[11px] font-semibold tracking-tight">WhatsApp</span>
          </a>
        ) : (
          <button
            type="button"
            onClick={onOpenConsultation}
            className="flex flex-col items-center justify-center gap-1 text-[#151E4D] hover:bg-[#EDF0F7] active:bg-[#EDF0F7] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600"
          >
            <MessageCircle className="w-4 h-4 text-emerald-600" />
            <span className="text-[11px] font-semibold tracking-tight">WhatsApp</span>
          </button>
        )}

        {/* Get a Quote */}
        <Link
          to="/contact?type=quote"
          className="flex flex-col items-center justify-center gap-1 bg-[#ED1834] text-white hover:bg-[#C6102B] active:bg-[#C6102B] transition-colors font-semibold"
        >
          <FileText className="w-4 h-4" />
          <span className="text-[11px] tracking-tight">Get Quote</span>
        </Link>
      </div>
    </div>
  );
};
