import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, ArrowRight, Filter } from 'lucide-react';
import { SERVICES_DATA } from '../data/services';
import { ServiceCard } from '../components/services/ServiceCard';
import { BlurFade } from '../components/ui/BlurFade';

export const Services: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'residential' | 'commercial'>('all');

  const filteredServices = SERVICES_DATA.filter((service) => {
    if (filter === 'all') return true;
    if (filter === 'residential') {
      return service.suitableProperties.some((p) =>
        p.toLowerCase().includes('apartment') ||
        p.toLowerCase().includes('villa') ||
        p.toLowerCase().includes('house')
      );
    }
    if (filter === 'commercial') {
      return service.suitableProperties.some((p) =>
        p.toLowerCase().includes('commercial') ||
        p.toLowerCase().includes('office') ||
        p.toLowerCase().includes('warehouse') ||
        p.toLowerCase().includes('kitchen')
      );
    }
    return true;
  });

  return (
    <div className="bg-[#F7F8FC] py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#ED1834] bg-[#FFF0F2] px-3 py-1 rounded-sm border border-[#ED1834]/20 mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Targeted Pest Management</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-heading font-extrabold text-[#151E4D] mb-4">
            Our Pest Control Services
          </h1>
          <p className="text-sm sm:text-base text-[#586174] leading-relaxed">
            Methodical inspection and treatment protocols tailored for Hyderabad residences, gated communities, and commercial facilities.
          </p>
        </div>

        {/* Filter Bar (buttons, zero-pill discipline) */}
        <div className="flex items-center justify-center gap-2 mb-12">
          <div className="flex items-center gap-1 p-1 bg-[#EDF0F7] rounded-lg border border-[#E3E7EF]">
            <button
              type="button"
              onClick={() => setFilter('all')}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-md transition-all ${
                filter === 'all'
                  ? 'bg-white text-[#151E4D] shadow-xs'
                  : 'text-[#586174] hover:text-[#17213C]'
              }`}
            >
              All Services ({SERVICES_DATA.length})
            </button>
            <button
              type="button"
              onClick={() => setFilter('residential')}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-md transition-all ${
                filter === 'residential'
                  ? 'bg-white text-[#151E4D] shadow-xs'
                  : 'text-[#586174] hover:text-[#17213C]'
              }`}
            >
              Residential Care
            </button>
            <button
              type="button"
              onClick={() => setFilter('commercial')}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-md transition-all ${
                filter === 'commercial'
                  ? 'bg-white text-[#151E4D] shadow-xs'
                  : 'text-[#586174] hover:text-[#17213C]'
              }`}
            >
              Commercial &amp; IPM
            </button>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service, idx) => (
            <BlurFade key={service.id} delay={0.04 * idx} yOffset={14}>
              <ServiceCard service={service} />
            </BlurFade>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 bg-white rounded-xl border border-[#E3E7EF] p-8 sm:p-10 shadow-xs flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-xl">
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-[#151E4D] mb-2">
              Unsure which treatment matches your pest problem?
            </h2>
            <p className="text-xs sm:text-sm text-[#586174]">
              Share a photo or description with our Hyderabad team. We identify the pest species and propose the most suitable treatment protocol.
            </p>
          </div>
          <Link
            to="/contact?type=quote"
            className="inline-flex items-center gap-2 bg-[#ED1834] hover:bg-[#C6102B] text-white text-sm font-semibold px-6 py-3 rounded-md shadow-xs shrink-0 transition-colors"
          >
            <span>Consult Our Team</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};
