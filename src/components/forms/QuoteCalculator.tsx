import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, HelpCircle, Building, Home, CheckCircle2 } from 'lucide-react';
import { SERVICES_DATA } from '../../data/services';

interface QuoteCalculatorProps {
  className?: string;
}

export const QuoteCalculator: React.FC<QuoteCalculatorProps> = ({ className = '' }) => {
  const navigate = useNavigate();
  const [propertySector, setPropertySector] = useState<'residential' | 'commercial'>('residential');
  const [selectedService, setSelectedService] = useState(SERVICES_DATA[0].name);
  const [propertyScope, setPropertyScope] = useState('2BHK Apartment (800 - 1200 sq.ft)');
  const [locality, setLocality] = useState('');
  const [infestationSeverity, setInfestationSeverity] = useState('Moderate (Occasional sightings)');
  const [notes, setNotes] = useState('');

  const residentialScopes = [
    '1BHK Apartment (up to 700 sq.ft)',
    '2BHK Apartment (800 - 1200 sq.ft)',
    '3BHK Apartment (1300 - 2000 sq.ft)',
    '4BHK / Penthouse (2000+ sq.ft)',
    'Independent House / Villa (up to 3000 sq.ft)',
    'Large Villa / Gated Society Complex',
  ];

  const commercialScopes = [
    'Small Retail Shop / Boutique (up to 800 sq.ft)',
    'Corporate Office / IT Bay (1000 - 3500 sq.ft)',
    'Large Office Floor (3500 - 10,000 sq.ft)',
    'Restaurant / Commercial Kitchen / Cafe',
    'Warehouse / Logistics Hub (10,000+ sq.ft)',
    'Hospital / School / Hotel Facility',
  ];

  const handleContinue = (e: React.FormEvent) => {
    e.preventDefault();
    const queryParams = new URLSearchParams({
      type: 'quote',
      service: selectedService,
      property: propertySector === 'residential' ? 'Apartment' : 'Office / Commercial',
      area: locality,
      note: `Scope: ${propertyScope} | Severity: ${infestationSeverity}${notes ? ` | Notes: ${notes}` : ''}`,
    });

    navigate(`/contact?${queryParams.toString()}`);
  };

  return (
    <div className={`bg-white rounded-lg border border-[#E3E7EF] p-6 sm:p-8 shadow-xs ${className}`}>
      <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#ED1834] mb-2">
        <span>Quotation Request Assistant</span>
      </div>
      <h3 className="font-heading font-bold text-xl sm:text-2xl text-[#151E4D] mb-2">
        Tell Us About Your Property
      </h3>
      <p className="text-xs sm:text-sm text-[#586174] mb-6 leading-relaxed">
        Because every infestation differs by layout, size, and colony depth, quotations are calculated transparently without hidden surprises.
      </p>

      <form onSubmit={handleContinue} className="flex flex-col gap-5">
        {/* Sector selector */}
        <div>
          <label className="block text-xs font-semibold text-[#151E4D] uppercase tracking-wider mb-2">
            Property Sector
          </label>
          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              onClick={() => {
                setPropertySector('residential');
                setPropertyScope(residentialScopes[1]);
              }}
              className={`flex items-center justify-center gap-2 py-2.5 px-4 rounded-md border text-xs sm:text-sm font-medium transition-colors ${
                propertySector === 'residential'
                  ? 'border-[#151E4D] bg-[#EDF0F7] text-[#151E4D] font-semibold'
                  : 'border-[#E3E7EF] text-[#586174] hover:bg-[#F7F8FC]'
              }`}
            >
              <Home className="w-4 h-4 text-[#ED1834]" />
              <span>Residential Home</span>
            </button>

            <button
              type="button"
              onClick={() => {
                setPropertySector('commercial');
                setPropertyScope(commercialScopes[1]);
              }}
              className={`flex items-center justify-center gap-2 py-2.5 px-4 rounded-md border text-xs sm:text-sm font-medium transition-colors ${
                propertySector === 'commercial'
                  ? 'border-[#151E4D] bg-[#EDF0F7] text-[#151E4D] font-semibold'
                  : 'border-[#E3E7EF] text-[#586174] hover:bg-[#F7F8FC]'
              }`}
            >
              <Building className="w-4 h-4 text-[#ED1834]" />
              <span>Commercial Facility</span>
            </button>
          </div>
        </div>

        {/* Service */}
        <div>
          <label htmlFor="quoteService" className="block text-xs font-semibold text-[#151E4D] uppercase tracking-wider mb-1.5">
            Service Required
          </label>
          <select
            id="quoteService"
            value={selectedService}
            onChange={(e) => setSelectedService(e.target.value)}
            className="w-full px-3.5 py-2.5 rounded-md border border-[#E3E7EF] text-sm text-[#17213C] bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:border-[#151E4D] focus-visible:ring-[#151E4D]/20"
          >
            {SERVICES_DATA.map((srv) => (
              <option key={srv.id} value={srv.name}>
                {srv.name}
              </option>
            ))}
          </select>
        </div>

        {/* Approximate Size / Scope */}
        <div>
          <label htmlFor="propertyScope" className="block text-xs font-semibold text-[#151E4D] uppercase tracking-wider mb-1.5">
            Approximate Property Dimensions / Configuration
          </label>
          <select
            id="propertyScope"
            value={propertyScope}
            onChange={(e) => setPropertyScope(e.target.value)}
            className="w-full px-3.5 py-2.5 rounded-md border border-[#E3E7EF] text-sm text-[#17213C] bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:border-[#151E4D] focus-visible:ring-[#151E4D]/20"
          >
            {(propertySector === 'residential' ? residentialScopes : commercialScopes).map((scope) => (
              <option key={scope} value={scope}>
                {scope}
              </option>
            ))}
          </select>
        </div>

        {/* Severity */}
        <div>
          <label htmlFor="severity" className="block text-xs font-semibold text-[#151E4D] uppercase tracking-wider mb-1.5">
            Observed Severity Level
          </label>
          <select
            id="severity"
            value={infestationSeverity}
            onChange={(e) => setInfestationSeverity(e.target.value)}
            className="w-full px-3.5 py-2.5 rounded-md border border-[#E3E7EF] text-sm text-[#17213C] bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:border-[#151E4D] focus-visible:ring-[#151E4D]/20"
          >
            <option value="Mild (Preventive check or very few bugs)">Mild (Preventive routine check)</option>
            <option value="Moderate (Occasional sightings in specific rooms)">Moderate (Regular sightings in 1-2 rooms)</option>
            <option value="High (Frequent sightings throughout the property)">High (Heavy activity across multiple zones)</option>
            <option value="Under Construction / Move-in">Under-construction / Pre-possession property</option>
          </select>
        </div>

        {/* Locality */}
        <div>
          <label htmlFor="quoteLocality" className="block text-xs font-semibold text-[#151E4D] uppercase tracking-wider mb-1.5">
            Hyderabad Locality / Area
          </label>
          <input
            id="quoteLocality"
            type="text"
            placeholder="e.g. Kondapur, Gachibowli, Begumpet..."
            value={locality}
            onChange={(e) => setLocality(e.target.value)}
            className="w-full px-3.5 py-2.5 rounded-md border border-[#E3E7EF] text-sm text-[#17213C] bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:border-[#151E4D] focus-visible:ring-[#151E4D]/20"
          />
        </div>

        {/* Notes */}
        <div>
          <label htmlFor="quoteNotes" className="block text-xs font-semibold text-[#151E4D] uppercase tracking-wider mb-1.5">
            Specific Observations <span className="text-[#586174] font-normal lowercase">(optional)</span>
          </label>
          <textarea
            id="quoteNotes"
            rows={2}
            placeholder="e.g. Woodwork hollowed in bedroom, kitchen sink roaches, garden mosquitoes..."
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            className="w-full px-3.5 py-2.5 rounded-md border border-[#E3E7EF] text-sm text-[#17213C] bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:border-[#151E4D] focus-visible:ring-[#151E4D]/20 resize-y"
          />
        </div>

        {/* Submit to continue */}
        <button
          type="submit"
          className="w-full inline-flex items-center justify-center gap-2 bg-[#ED1834] hover:bg-[#C6102B] text-white font-semibold py-3 px-5 rounded-md text-sm shadow-xs transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ED1834] focus-visible:ring-offset-2 active:translate-y-px"
        >
          <span>Continue to Enquiry</span>
          <ArrowRight className="w-4 h-4" />
        </button>

        <p className="text-[11px] text-[#586174] text-center">
          Populates your enquiry details into WhatsApp or email for immediate review. No unverified estimates.
        </p>
      </form>
    </div>
  );
};
