import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import { ServiceItem } from '../../types';

interface ServiceCardProps {
  service: ServiceItem;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <article className="group bg-white rounded-lg border border-[#E3E7EF] overflow-hidden shadow-2xs hover:shadow-md hover:border-[#151E4D]/30 transition-all duration-200 flex flex-col justify-between">
      <div>
        {/* Image Container with 1.03 scale hover effect */}
        <div className="relative aspect-16/10 overflow-hidden bg-[#EDF0F7]">
          <img
            src={service.image}
            alt={`${service.name} in Hyderabad`}
            loading="lazy"
            width={600}
            height={375}
            className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-300"
          />
          <div className="absolute top-3 left-3 bg-[#151E4D]/85 backdrop-blur-xs text-white text-[11px] font-semibold px-2.5 py-1 rounded flex items-center gap-1.5 shadow-xs">
            <ShieldCheck className="w-3.5 h-3.5 text-[#ED1834]" />
            <span>Targeted Treatment</span>
          </div>
        </div>

        {/* Content */}
        <div className="p-5 sm:p-6 flex flex-col gap-2.5">
          <h3 className="font-heading font-bold text-lg sm:text-xl text-[#151E4D] group-hover:text-[#ED1834] transition-colors leading-snug">
            {service.name}
          </h3>

          <p className="text-sm text-[#586174] leading-relaxed line-clamp-3">
            {service.shortDescription}
          </p>

          {/* Target pests list (clean unboxed text with typographic separator, zero-pill discipline) */}
          <div className="pt-2 text-xs text-[#586174] flex items-center gap-1.5 flex-wrap">
            <span className="font-semibold text-[#151E4D]">Targets:</span>
            {service.targetPests.map((pest, idx) => (
              <React.Fragment key={pest}>
                {idx > 0 && <span aria-hidden="true">·</span>}
                <span>{pest}</span>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      {/* Action Row */}
      <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-2 border-t border-[#E3E7EF]/60 flex items-center justify-between gap-3">
        <Link
          to={`/services/${service.slug}`}
          className="text-xs sm:text-sm font-semibold text-[#151E4D] group-hover:text-[#ED1834] inline-flex items-center gap-1.5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ED1834] rounded-sm py-1"
        >
          <span>View Details</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" />
        </Link>

        <Link
          to={`/contact?service=${encodeURIComponent(service.name)}&type=quote`}
          className="text-xs sm:text-sm font-semibold text-[#ED1834] hover:text-[#C6102B] bg-[#FFF0F2] hover:bg-[#FFE3E7] px-3.5 py-1.5 rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ED1834]"
        >
          Enquire
        </Link>
      </div>
    </article>
  );
};
