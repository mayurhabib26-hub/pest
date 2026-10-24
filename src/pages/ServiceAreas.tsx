import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { MapPin, Search, CheckCircle2, ArrowRight, ShieldCheck, AlertCircle } from 'lucide-react';
import { SERVICE_AREAS } from '../data/serviceAreas';
import { BUSINESS_CONFIG } from '../data/business';

export const ServiceAreas: React.FC = () => {
  const [searchParams] = useSearchParams();
  const initialQuery = searchParams.get('q') || '';
  const [searchTerm, setSearchTerm] = useState(initialQuery);
  const [selectedZone, setSelectedZone] = useState<string>('All');

  useEffect(() => {
    if (initialQuery) {
      setSearchTerm(initialQuery);
    }
  }, [initialQuery]);

  const zones = ['All', 'West Hyderabad', 'Central Hyderabad', 'North Hyderabad', 'East Hyderabad', 'Secunderabad'];

  const filteredAreas = SERVICE_AREAS.filter((area) => {
    const matchesSearch =
      area.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      area.landmarks.some((lm) => lm.toLowerCase().includes(searchTerm.toLowerCase()));

    const matchesZone = selectedZone === 'All' || area.zone === selectedZone;

    return matchesSearch && matchesZone;
  });

  return (
    <div className="bg-[#F7F8FC] py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#ED1834] bg-[#FFF0F2] px-3 py-1 rounded-sm border border-[#ED1834]/20 mb-3">
            <MapPin className="w-3.5 h-3.5" />
            <span>Coverage Across Hyderabad</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-heading font-extrabold text-[#151E4D] mb-4">
            Check Our Service Areas
          </h1>
          <p className="text-sm sm:text-base text-[#586174] leading-relaxed">
            We provide fast technician dispatch to residential complexes, standalone houses, and commercial districts throughout Hyderabad and Secunderabad.
          </p>
        </div>

        {/* Search & Filter Controls */}
        <div className="max-w-3xl mx-auto mb-10 flex flex-col gap-4">
          <div className="relative">
            <Search className="w-5 h-5 text-[#586174] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search locality or landmark (e.g., Kondapur, Mindspace, KPHB...)"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-lg border border-[#E3E7EF] bg-white text-sm text-[#17213C] shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ED1834]"
            />
            {searchTerm && (
              <button
                type="button"
                onClick={() => setSearchTerm('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-[#586174] hover:text-[#17213C]"
              >
                Clear
              </button>
            )}
          </div>

          {/* Zone filter buttons */}
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="text-xs font-semibold text-[#151E4D] mr-2">Filter Zone:</span>
            {zones.map((zone) => (
              <button
                key={zone}
                type="button"
                onClick={() => setSelectedZone(zone)}
                className={`px-3 py-1 text-xs font-medium rounded-md transition-colors ${
                  selectedZone === zone
                    ? 'bg-[#151E4D] text-white shadow-2xs font-semibold'
                    : 'bg-white text-[#586174] border border-[#E3E7EF] hover:bg-[#EDF0F7]'
                }`}
              >
                {zone}
              </button>
            ))}
          </div>
        </div>

        {/* Results grid */}
        {filteredAreas.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredAreas.map((area) => (
              <div
                key={area.id}
                className="bg-white rounded-lg border border-[#E3E7EF] p-5 shadow-2xs hover:border-[#151E4D]/30 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-[#586174] mb-2">
                    <span className="text-[#ED1834] font-semibold">{area.zone}</span>
                    <span className="inline-flex items-center gap-1 text-emerald-700 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Confirmed Coverage
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-lg text-[#151E4D] mb-2">
                    {area.name}
                  </h3>

                  <div className="text-xs text-[#586174] leading-relaxed">
                    <span className="font-semibold text-[#151E4D]">Key Landmarks &amp; Vicinities:</span>
                    <div className="mt-1 flex flex-wrap gap-1.5">
                      {area.landmarks.map((lm, idx) => (
                        <span
                          key={idx}
                          className="bg-[#F7F8FC] border border-[#E3E7EF] px-2 py-0.5 rounded text-[11px]"
                        >
                          {lm}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-5 pt-4 border-t border-[#E3E7EF] flex items-center justify-between">
                  <Link
                    to={`/contact?area=${encodeURIComponent(area.name)}&type=quote`}
                    className="text-xs font-semibold text-[#ED1834] hover:text-[#C6102B] inline-flex items-center gap-1"
                  >
                    <span>Book for {area.name}</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Empty Search State */
          <div className="max-w-2xl mx-auto bg-white rounded-xl border border-[#ED1834]/30 p-8 text-center shadow-xs">
            <AlertCircle className="w-10 h-10 text-[#ED1834] mx-auto mb-3" />
            <h3 className="text-lg font-heading font-bold text-[#151E4D] mb-2">
              Your area isn’t listed. Contact us to check availability.
            </h3>
            <p className="text-sm text-[#586174] leading-relaxed mb-6">
              Our technicians frequently service neighboring zones and new layouts across Hyderabad. Reach out to verify scheduling for your property.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link
                to="/contact?type=quote"
                className="bg-[#ED1834] hover:bg-[#C6102B] text-white text-sm font-semibold px-5 py-2.5 rounded-md transition-colors"
              >
                Enquire for Unlisted Locality
              </Link>
              <button
                type="button"
                onClick={() => {
                  setSearchTerm('');
                  setSelectedZone('All');
                }}
                className="bg-white hover:bg-[#EDF0F7] text-[#151E4D] border border-[#E3E7EF] text-sm font-semibold px-5 py-2.5 rounded-md transition-colors"
              >
                View All Listed Areas
              </button>
            </div>
          </div>
        )}

        {/* Coverage Policy Note */}
        <div className="mt-16 bg-[#EDF0F7] p-6 rounded-lg border border-[#E3E7EF] text-xs text-[#586174] leading-relaxed">
          <strong>Coverage Verification Policy: </strong>
          Coverage depends on technician route scheduling and seasonal capacity. While we actively serve all areas listed above, PIN code alone does not automatically guarantee instant dispatch. We confirm route availability directly upon receiving your enquiry.
        </div>
      </div>
    </div>
  );
};
