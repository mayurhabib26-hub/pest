import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { Phone, MessageCircle, Mail, Clock, MapPin, ShieldCheck, AlertCircle } from 'lucide-react';
import { BUSINESS_CONFIG } from '../data/business';
import { ContactForm } from '../components/forms/ContactForm';

export const Contact: React.FC = () => {
  const [searchParams] = useSearchParams();
  const preselectedService = searchParams.get('service') || '';
  const preselectedType = searchParams.get('type') === 'quote' ? 'Quotation' : 'General Enquiry';

  const whatsappHref = BUSINESS_CONFIG.isConfigured.whatsapp
    ? `https://wa.me/${BUSINESS_CONFIG.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
        `Hi ${BUSINESS_CONFIG.name}, I would like to enquire about pest control services in Hyderabad.`
      )}`
    : null;

  return (
    <div className="bg-[#F7F8FC] py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#ED1834] bg-[#FFF0F2] px-3 py-1 rounded-sm border border-[#ED1834]/20 mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Hyderabad Pest Support</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-heading font-extrabold text-[#151E4D] mb-4">
            Contact Our Team &amp; Get a Quote
          </h1>
          <p className="text-sm sm:text-base text-[#586174] leading-relaxed">
            Fill out your property details below to prepare your enquiry directly in WhatsApp or email. Our team will review your pest problem and confirm scheduling.
          </p>
        </div>

        {/* Two-column desktop, single-column mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Contact Channels & Business Information */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="bg-white rounded-xl border border-[#E3E7EF] p-6 sm:p-8 shadow-xs">
              <h2 className="font-heading font-bold text-xl text-[#151E4D] mb-4">
                {BUSINESS_CONFIG.name}
              </h2>
              <p className="text-xs sm:text-sm text-[#586174] leading-relaxed mb-6">
                Direct communication channels for residential enquiries, commercial IPM contracts, and urgent pest consultations.
              </p>

              <div className="space-y-5 text-sm">
                {/* Phone */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-full bg-[#FFF0F2] text-[#ED1834] flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-[#151E4D] uppercase tracking-wider block">
                      Phone Call Helpline
                    </span>
                    {BUSINESS_CONFIG.isConfigured.phone ? (
                      <a
                        href={`tel:${BUSINESS_CONFIG.phone}`}
                        className="font-medium text-[#151E4D] hover:text-[#ED1834] transition-colors"
                      >
                        {BUSINESS_CONFIG.phone}
                      </a>
                    ) : (
                      <div className="flex items-center gap-1.5 text-xs text-[#586174] mt-0.5">
                        <span className="italic">Helpline: Available on enquiry submission</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-[#151E4D] uppercase tracking-wider block">
                      WhatsApp Chat Desk
                    </span>
                    {whatsappHref ? (
                      <a
                        href={whatsappHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-emerald-700 hover:text-emerald-800 transition-colors"
                      >
                        {BUSINESS_CONFIG.whatsapp}
                      </a>
                    ) : (
                      <div className="text-xs text-[#586174] mt-0.5">
                        <span>Use the form on the right to launch WhatsApp</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-full bg-[#EDF0F7] text-[#151E4D] flex items-center justify-center shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-[#151E4D] uppercase tracking-wider block">
                      Direct Email
                    </span>
                    {BUSINESS_CONFIG.isConfigured.email ? (
                      <a
                        href={`mailto:${BUSINESS_CONFIG.email}`}
                        className="font-medium text-[#151E4D] hover:text-[#ED1834] transition-colors"
                      >
                        {BUSINESS_CONFIG.email}
                      </a>
                    ) : (
                      <div className="text-xs text-[#586174] mt-0.5">
                        <span>Electronic mail dispatch prepared via form</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-full bg-[#EDF0F7] text-[#151E4D] flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-[#151E4D] uppercase tracking-wider block">
                      Operational Hours
                    </span>
                    <span className="text-xs sm:text-sm text-[#17213C] font-medium">
                      {BUSINESS_CONFIG.workingHours}
                    </span>
                    <span className="text-[11px] text-[#586174] block mt-0.5">
                      Field inspections conducted Monday through Sunday
                    </span>
                  </div>
                </div>

                {/* City & Address */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-full bg-[#FFF0F2] text-[#ED1834] flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-[#151E4D] uppercase tracking-wider block">
                      Coverage Hub
                    </span>
                    <span className="text-xs sm:text-sm text-[#17213C] font-medium">
                      Hyderabad &amp; Secunderabad, Telangana
                    </span>
                    <span className="text-[11px] text-[#586174] block mt-0.5">
                      Dispatched across West, North, Central &amp; East zones
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Response Notice */}
            <div className="bg-[#EDF0F7] rounded-xl border border-[#E3E7EF] p-5 text-xs text-[#586174] leading-relaxed">
              <strong className="text-[#151E4D] block mb-1">Fast Response Guarantee:</strong>
              Enquiries submitted via WhatsApp or email during operating hours (8:00 AM – 8:00 PM) are answered promptly to coordinate pest urgency and schedule slots.
            </div>
          </div>

          {/* Right Column: Contact & Quotation Form */}
          <div className="lg:col-span-7">
            <ContactForm
              initialService={preselectedService}
              initialEnquiryType={preselectedType}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
