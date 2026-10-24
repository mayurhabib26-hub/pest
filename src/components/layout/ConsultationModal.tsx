import React from 'react';
import { X, Calendar, Phone, MessageCircle, ArrowRight, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BUSINESS_CONFIG } from '../../data/business';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="consultation-modal-title"
    >
      <div
        className="fixed inset-0"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="relative bg-white rounded-lg shadow-2xl max-w-lg w-full p-6 sm:p-8 z-10 border border-[#E3E7EF] overflow-hidden">
        {/* Header */}
        <div className="flex items-start justify-between gap-4 pb-4 border-b border-[#E3E7EF]">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-[#ED1834] uppercase tracking-wider mb-1">
              <Calendar className="w-3.5 h-3.5" />
              <span>Inspection & Consultation</span>
            </div>
            <h2 id="consultation-modal-title" className="text-xl sm:text-2xl font-heading font-bold text-[#151E4D]">
              Book a Pest Inspection
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close dialog"
            className="p-1.5 text-[#586174] hover:text-[#17213C] rounded-md hover:bg-[#EDF0F7] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ED1834]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="py-5 flex flex-col gap-4 text-[#17213C]">
          <p className="text-sm text-[#586174] leading-relaxed">
            Discuss your property requirements with our Hyderabad pest control team. We will evaluate the infestation extent, recommend the right treatment, and share transparent pricing.
          </p>

          <div className="bg-[#EDF0F7] p-4 rounded-md flex flex-col gap-2.5 border border-[#E3E7EF]">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#151E4D]">
              <ShieldCheck className="w-4 h-4 text-[#ED1834]" />
              <span>Direct Booking Support</span>
            </div>
            <div className="text-xs text-[#586174] leading-relaxed">
              Service dates and quotes are confirmed directly with our Hyderabad operations desk to guarantee technician availability in your locality.
            </div>
          </div>

          <div className="flex flex-col gap-3 pt-2">
            <Link
              to="/contact?type=quote"
              onClick={onClose}
              className="w-full inline-flex items-center justify-center gap-2 bg-[#ED1834] hover:bg-[#C6102B] text-white font-semibold py-3 px-4 rounded-md text-sm shadow-xs transition-colors"
            >
              <span>Fill Detailed Quotation Form</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            {BUSINESS_CONFIG.isConfigured.whatsapp ? (
              <a
                href={`https://wa.me/${BUSINESS_CONFIG.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
                  `Hi ${BUSINESS_CONFIG.name}, I want to book a pest inspection for my property in Hyderabad.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={onClose}
                className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold py-3 px-4 rounded-md text-sm shadow-xs transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat Directly on WhatsApp</span>
              </a>
            ) : (
              <Link
                to="/contact"
                onClick={onClose}
                className="w-full inline-flex items-center justify-center gap-2 border border-[#E3E7EF] hover:bg-[#EDF0F7] text-[#151E4D] font-semibold py-3 px-4 rounded-md text-sm transition-colors"
              >
                <Phone className="w-4 h-4 text-[#ED1834]" />
                <span>View Contact & WhatsApp Channels</span>
              </Link>
            )}
          </div>
        </div>

        <div className="pt-3 border-t border-[#E3E7EF] text-center text-xs text-[#586174]">
          Operating 7 days a week · 8:00 AM – 8:00 PM
        </div>
      </div>
    </div>
  );
};
