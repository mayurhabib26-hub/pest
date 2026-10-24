import React, { useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, MapPin, Info } from 'lucide-react';
import { GalleryItem } from '../../types';

interface GalleryLightboxProps {
  items: GalleryItem[];
  currentIndex: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export const GalleryLightbox: React.FC<GalleryLightboxProps> = ({
  items,
  currentIndex,
  onClose,
  onNavigate,
}) => {
  const currentItem = currentIndex !== null ? items[currentIndex] : null;

  const handleNext = useCallback(() => {
    if (currentIndex === null) return;
    onNavigate((currentIndex + 1) % items.length);
  }, [currentIndex, items.length, onNavigate]);

  const handlePrev = useCallback(() => {
    if (currentIndex === null) return;
    onNavigate((currentIndex - 1 + items.length) % items.length);
  }, [currentIndex, items.length, onNavigate]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (currentIndex === null) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, handleNext, handlePrev, onClose]);

  if (!currentItem) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-xs animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-label={`Image details: ${currentItem.title}`}
    >
      {/* Background click to close */}
      <div className="absolute inset-0" onClick={onClose} aria-hidden="true" />

      {/* Close button */}
      <button
        type="button"
        onClick={onClose}
        aria-label="Close lightbox"
        className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Prev button */}
      {items.length > 1 && (
        <button
          type="button"
          onClick={handlePrev}
          aria-label="Previous image"
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
      )}

      {/* Next button */}
      {items.length > 1 && (
        <button
          type="button"
          onClick={handleNext}
          aria-label="Next image"
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      )}

      {/* Modal Card */}
      <div className="relative z-10 max-w-4xl w-full bg-[#101737] rounded-lg overflow-hidden shadow-2xl border border-white/10 flex flex-col max-h-[90vh]">
        <div className="relative bg-black/60 flex items-center justify-center overflow-hidden aspect-16/10">
          <img
            src={currentItem.image}
            alt={currentItem.title}
            className="w-full h-full object-contain"
          />
          {currentItem.isDemonstration && (
            <span className="absolute top-3 left-3 text-[11px] font-medium bg-black/70 text-white/90 px-2.5 py-1 rounded backdrop-blur-xs flex items-center gap-1.5 border border-white/10">
              <Info className="w-3 h-3 text-[#ED1834]" />
              <span>Illustrative Demonstration Image</span>
            </span>
          )}
        </div>

        {/* Captions and details */}
        <div className="p-5 sm:p-6 bg-[#101737] text-white flex flex-col gap-2">
          <div className="flex items-center justify-between gap-4 flex-wrap text-xs text-white/60">
            <div className="flex items-center gap-2">
              <span className="text-[#ED1834] font-semibold uppercase tracking-wider">{currentItem.category}</span>
              {currentItem.locality && (
                <>
                  <span aria-hidden="true">·</span>
                  <span className="flex items-center gap-1 text-white/80">
                    <MapPin className="w-3.5 h-3.5 text-white/60" />
                    {currentItem.locality}
                  </span>
                </>
              )}
            </div>
            <span>
              {currentIndex !== null ? currentIndex + 1 : 1} of {items.length}
            </span>
          </div>

          <h3 className="text-lg sm:text-xl font-heading font-bold text-white">
            {currentItem.title}
          </h3>

          {currentItem.description && (
            <p className="text-sm text-white/75 leading-relaxed">
              {currentItem.description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
