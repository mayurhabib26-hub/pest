import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

export const NotFound: React.FC = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-[#F7F8FC] px-4 py-16">
      <div className="max-w-md w-full bg-white rounded-xl border border-[#E3E7EF] p-8 text-center shadow-xs">
        <span className="font-heading font-extrabold text-5xl sm:text-6xl text-[#ED1834] block mb-2">
          404
        </span>
        <h1 className="font-heading font-bold text-xl sm:text-2xl text-[#151E4D] mb-3">
          Page Not Found
        </h1>
        <p className="text-sm text-[#586174] leading-relaxed mb-6">
          The pest control service page or resource you are looking for may have been moved or is currently unavailable.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 bg-[#ED1834] hover:bg-[#C6102B] text-white text-sm font-semibold px-5 py-2.5 rounded-md transition-colors"
          >
            <Home className="w-4 h-4" />
            <span>Return to Home</span>
          </Link>
          <Link
            to="/services"
            className="inline-flex items-center justify-center gap-2 bg-[#EDF0F7] hover:bg-[#E3E7EF] text-[#151E4D] text-sm font-semibold px-5 py-2.5 rounded-md transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Explore Services</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
