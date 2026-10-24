import React from 'react';
import { ShieldCheck, Info } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/gallery';
import { GalleryGrid } from '../components/gallery/GalleryGrid';

export const Gallery: React.FC = () => {
  return (
    <div className="bg-[#F7F8FC] py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#ED1834] bg-[#FFF0F2] px-3 py-1 rounded-sm border border-[#ED1834]/20 mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Inspection &amp; Field Work</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-heading font-extrabold text-[#151E4D] mb-4">
            Our Work in Focus
          </h1>
          <p className="text-sm sm:text-base text-[#586174] leading-relaxed">
            Explore service visits, inspection work and treatment environments across Hyderabad and Secunderabad.
          </p>
        </div>

        {/* Illustrative Demonstration Disclaimer Notice */}
        <div className="mb-8 p-4 bg-[#EDF0F7] rounded-lg border border-[#E3E7EF] flex items-start gap-3 text-xs text-[#586174] max-w-3xl mx-auto">
          <Info className="w-4 h-4 text-[#ED1834] shrink-0 mt-0.5" />
          <div className="leading-relaxed">
            <strong>Demonstration Notice: </strong>
            To protect client property privacy and in accordance with business verification standards, photographs shown represent illustrative service techniques, equipment environments, and treatment zones until confirmed company project photographs are supplied.
          </div>
        </div>

        {/* Gallery Grid with filter buttons and lightbox */}
        <GalleryGrid items={GALLERY_ITEMS} />
      </div>
    </div>
  );
};
