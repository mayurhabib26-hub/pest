import React, { useState } from 'react';
import { Eye, MapPin, Info } from 'lucide-react';
import { GalleryItem } from '../../types';
import { GalleryLightbox } from './GalleryLightbox';

interface GalleryGridProps {
  items: GalleryItem[];
  initialCategory?: string;
  showFilters?: boolean;
  limit?: number;
  className?: string;
}

export const GalleryGrid: React.FC<GalleryGridProps> = ({
  items,
  initialCategory = 'All',
  showFilters = true,
  limit,
  className = '',
}) => {
  const [activeCategory, setActiveCategory] = useState<string>(initialCategory);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = ['All', 'Residential', 'Commercial', 'Termite Services', 'General Pest Control'];

  const filteredItems = items.filter((item) => {
    if (activeCategory === 'All') return true;
    return item.category === activeCategory;
  });

  const displayItems = limit ? filteredItems.slice(0, limit) : filteredItems;

  return (
    <div className={className}>
      {/* Category filter buttons */}
      {showFilters && (
        <div className="flex items-center gap-1.5 flex-wrap mb-8 p-1.5 bg-[#EDF0F7] rounded-lg max-w-fit">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1.5 text-xs sm:text-sm font-semibold rounded-md transition-all ${
                activeCategory === cat
                  ? 'bg-white text-[#151E4D] shadow-xs'
                  : 'text-[#586174] hover:text-[#17213C]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      )}

      {/* Grid of gallery items */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayItems.map((item, idx) => (
          <div
            key={item.id}
            onClick={() => setLightboxIndex(idx)}
            className="group cursor-pointer bg-white rounded-lg border border-[#E3E7EF] overflow-hidden shadow-2xs hover:shadow-md hover:border-[#151E4D]/25 transition-all duration-200 flex flex-col"
          >
            {/* Image container with fixed aspect ratio */}
            <div className="relative aspect-16/10 overflow-hidden bg-[#EDF0F7]">
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                width={600}
                height={375}
                className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-[#151E4D]/0 group-hover:bg-[#151E4D]/20 transition-colors duration-200 flex items-center justify-center">
                <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 p-2.5 rounded-full bg-white/90 text-[#151E4D] shadow-sm">
                  <Eye className="w-5 h-5" />
                </span>
              </div>
              {item.isDemonstration && (
                <span className="absolute top-2.5 left-2.5 text-[10px] font-medium bg-black/65 text-white px-2 py-0.5 rounded backdrop-blur-xs flex items-center gap-1">
                  <Info className="w-2.5 h-2.5 text-[#ED1834]" />
                  <span>Demonstration Reference</span>
                </span>
              )}
            </div>

            {/* Info */}
            <div className="p-4 sm:p-5 flex flex-col grow justify-between gap-2">
              <div>
                <div className="flex items-center gap-2 text-xs text-[#586174] mb-1.5">
                  <span className="text-[#ED1834] font-semibold">{item.category}</span>
                  {item.locality && (
                    <>
                      <span aria-hidden="true">·</span>
                      <span className="flex items-center gap-1 truncate">
                        <MapPin className="w-3 h-3 text-[#586174]" />
                        {item.locality}
                      </span>
                    </>
                  )}
                </div>
                <h4 className="font-heading font-bold text-base text-[#151E4D] group-hover:text-[#ED1834] transition-colors line-clamp-2">
                  {item.title}
                </h4>
              </div>

              {item.description && (
                <p className="text-xs text-[#586174] line-clamp-2 leading-relaxed">
                  {item.description}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>

      {displayItems.length === 0 && (
        <div className="text-center py-12 text-sm text-[#586174]">
          No work samples found in this category.
        </div>
      )}

      {/* Lightbox */}
      <GalleryLightbox
        items={displayItems}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={(newIndex) => setLightboxIndex(newIndex)}
      />
    </div>
  );
};
