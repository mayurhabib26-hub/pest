import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, ArrowRight, CheckCircle2, MapPin, Clock, Building, Home, Users } from 'lucide-react';
import { BUSINESS_CONFIG, LOGO_PATH } from '../data/business';

export const About: React.FC = () => {
  return (
    <div className="bg-[#F7F8FC] py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#ED1834] bg-[#FFF0F2] px-3 py-1 rounded-sm border border-[#ED1834]/20 mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Local Hyderabad Specialist</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-heading font-extrabold text-[#151E4D] mb-4">
            About {BUSINESS_CONFIG.name}
          </h1>
          <p className="text-sm sm:text-base text-[#586174] leading-relaxed">
            Delivering methodical, safety-first pest management solutions designed specifically for Hyderabad&apos;s urban topography and building styles.
          </p>
        </div>

        {/* Business Introduction Story */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-7 flex flex-col gap-5 text-sm sm:text-base text-[#586174] leading-relaxed">
            <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-[#151E4D]">
              Our Purpose &amp; Service Approach
            </h2>
            <p>
              {BUSINESS_CONFIG.name} was established to solve pest issues at their structural root rather than masking them with harsh, short-lived aerosol sprays. Modern apartment buildings, corporate IT facilities, and independent residences in Hyderabad face unique pest challenges driven by rapid urbanization, climate shifts, and plumbing density.
            </p>
            <p>
              Our approach is grounded in Integrated Pest Management (IPM): we combine careful harbor survey work, targeted crack-and-crevice gel baiting, odorless barrier protection, and honest client advice on physical exclusion and sanitation.
            </p>
            <p>
              We treat every home and workplace with total respect for occupant health, utilizing government-permitted formulations and non-staining methods that keep families, employees, and pets comfortable.
            </p>

            <div className="pt-2">
              <Link
                to="/contact?type=quote"
                className="inline-flex items-center gap-2 bg-[#ED1834] hover:bg-[#C6102B] text-white text-sm font-semibold px-5 py-2.5 rounded-md transition-colors w-fit shadow-xs"
              >
                <span>Discuss Your Property</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="bg-white rounded-xl border border-[#E3E7EF] p-6 sm:p-8 shadow-xs flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full overflow-hidden bg-white p-1 border-2 border-[#151E4D]/20 mb-4 shadow-sm">
                <img
                  src={LOGO_PATH}
                  alt={`${BUSINESS_CONFIG.name} Logo`}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="font-heading font-extrabold text-xl text-[#151E4D] mb-1">
                {BUSINESS_CONFIG.name}
              </h3>
              <p className="text-xs text-[#586174] mb-4">
                Hyderabad &amp; Secunderabad, Telangana
              </p>
              <div className="w-full border-t border-[#E3E7EF] pt-4 text-xs text-[#586174] space-y-2 text-left">
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#ED1834]" />
                  <span>Coverage: All major Hyderabad corridors</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-[#151E4D]" />
                  <span>Operating Hours: 8:00 AM – 8:00 PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Core Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white p-6 rounded-xl border border-[#E3E7EF] shadow-2xs">
            <div className="w-10 h-10 rounded-lg bg-[#FFF0F2] flex items-center justify-center text-[#ED1834] mb-4">
              <Home className="w-5 h-5" />
            </div>
            <h3 className="font-heading font-bold text-lg text-[#151E4D] mb-2">
              Residential Safety
            </h3>
            <p className="text-xs sm:text-sm text-[#586174] leading-relaxed">
              Odorless, low-toxicity gel baiting and precise edge spraying. We ensure food prep areas and domestic animals remain safe from toxic mist overspray.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-[#E3E7EF] shadow-2xs">
            <div className="w-10 h-10 rounded-lg bg-[#EDF0F7] flex items-center justify-center text-[#151E4D] mb-4">
              <Building className="w-5 h-5" />
            </div>
            <h3 className="font-heading font-bold text-lg text-[#151E4D] mb-2">
              Commercial Compliance
            </h3>
            <p className="text-xs sm:text-sm text-[#586174] leading-relaxed">
              Tailored Integrated Pest Management (IPM) logbooks and scheduled off-hours servicing for cafes, IT parks, pharmaceutical labs, and warehouses.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-[#E3E7EF] shadow-2xs">
            <div className="w-10 h-10 rounded-lg bg-[#FFF0F2] flex items-center justify-center text-[#ED1834] mb-4">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-heading font-bold text-lg text-[#151E4D] mb-2">
              Transparent Operations
            </h3>
            <p className="text-xs sm:text-sm text-[#586174] leading-relaxed">
              No fabricated price tags or automatic online charges. Quotations and service scopes are shared directly with property owners before technician dispatch.
            </p>
          </div>
        </div>

        {/* Verification & Transparency Notice */}
        <div className="bg-[#EDF0F7] rounded-xl border border-[#E3E7EF] p-6 text-xs text-[#586174] leading-relaxed">
          <strong>Transparency Note: </strong>
          In accordance with our anti-fabrication standards, we do not publish unverified awards, invented customer review counts, or unconfirmed founder biographies. All business specifications and verifiable license details will be updated as confirmed by the business administration.
        </div>
      </div>
    </div>
  );
};
