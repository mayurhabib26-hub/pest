import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ShieldCheck,
  CheckCircle2,
  XCircle,
  HelpCircle,
  ArrowRight,
  Info,
  Building,
  Home,
} from 'lucide-react';
import { PRICING_CONFIG } from '../data/pricing';
import { SERVICES_DATA } from '../data/services';
import { QuoteCalculator } from '../components/forms/QuoteCalculator';
import { Accordion } from '../components/ui/Accordion';

export const Pricing: React.FC = () => {
  // Allow toggling modes to inspect both configurations easily
  const [activeMode, setActiveMode] = useState<'quote' | 'packages'>(
    PRICING_CONFIG.pricesSupplied ? 'packages' : 'quote'
  );

  return (
    <div className="bg-[#F7F8FC] py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#ED1834] bg-[#FFF0F2] px-3 py-1 rounded-sm border border-[#ED1834]/20 mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Honest &amp; Upfront Pricing</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-heading font-extrabold text-[#151E4D] mb-4">
            Clear Options. A Quote for Your Property.
          </h1>
          <p className="text-sm sm:text-base text-[#586174] leading-relaxed">
            We reject hidden surcharges and fabricated flat rates. Every quote reflects the exact size, layout, and treatment depth required.
          </p>

          {/* Mode Switcher */}
          <div className="mt-6 inline-flex items-center p-1 bg-[#EDF0F7] rounded-lg border border-[#E3E7EF]">
            <button
              type="button"
              onClick={() => setActiveMode('quote')}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-md transition-all ${
                activeMode === 'quote'
                  ? 'bg-white text-[#151E4D] shadow-xs'
                  : 'text-[#586174] hover:text-[#17213C]'
              }`}
            >
              Custom Property Quotation (Recommended)
            </button>
            <button
              type="button"
              onClick={() => setActiveMode('packages')}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-md transition-all ${
                activeMode === 'packages'
                  ? 'bg-white text-[#151E4D] shadow-xs'
                  : 'text-[#586174] hover:text-[#17213C]'
              }`}
            >
              Standard Starting Packages
            </button>
          </div>
        </div>

        {/* MODE B: Prices Not Supplied / Custom Property Quotation */}
        {activeMode === 'quote' && (
          <div className="space-y-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              {/* Quotation Factors Explanation */}
              <div className="lg:col-span-6 flex flex-col gap-6">
                <div>
                  <span className="text-xs font-bold text-[#ED1834] uppercase tracking-wider block mb-2">
                    How We Calculate Quotes
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-heading font-bold text-[#151E4D]">
                    Key Factors That Determine Your Price
                  </h2>
                </div>
                <p className="text-sm text-[#586174] leading-relaxed">
                  Pest management cannot be reliably delivered with a one-size-fits-all sticker price. Here are the five criteria that our Hyderabad operations desk evaluates:
                </p>

                <div className="space-y-4">
                  {PRICING_CONFIG.quotationFactors.map((factor, idx) => (
                    <div
                      key={idx}
                      className="p-4 bg-white rounded-lg border border-[#E3E7EF] shadow-2xs"
                    >
                      <h3 className="font-heading font-bold text-sm text-[#151E4D] mb-1 flex items-center gap-2">
                        <span className="text-[#ED1834] font-extrabold">0{idx + 1}.</span>
                        <span>{factor.title}</span>
                      </h3>
                      <p className="text-xs text-[#586174] leading-relaxed pl-6">
                        {factor.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quotation Assistant Form */}
              <div className="lg:col-span-6">
                <QuoteCalculator />
              </div>
            </div>
          </div>
        )}

        {/* MODE A: Approved Standard Starting Packages */}
        {activeMode === 'packages' && (
          <div className="space-y-12">
            <div className="p-4 bg-[#EDF0F7] rounded-lg border border-[#E3E7EF] flex items-start gap-3 text-xs text-[#586174] max-w-3xl mx-auto">
              <Info className="w-4 h-4 text-[#ED1834] shrink-0 mt-0.5" />
              <div className="leading-relaxed">
                Starting rates below apply to standard residential layouts and baseline infestations. Final on-site quotation is confirmed after technician review.
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {PRICING_CONFIG.plans.map((plan) => (
                <div
                  key={plan.id}
                  className="bg-white rounded-xl border border-[#E3E7EF] p-6 shadow-2xs flex flex-col justify-between hover:border-[#151E4D]/30 transition-all"
                >
                  <div>
                    <span className="text-xs font-bold text-[#ED1834] uppercase tracking-wider block mb-1">
                      {plan.scope}
                    </span>
                    <h3 className="font-heading font-bold text-lg text-[#151E4D] mb-3 leading-snug">
                      {plan.serviceName}
                    </h3>

                    {plan.startingPriceINR && (
                      <div className="mb-4 pb-4 border-b border-[#E3E7EF]">
                        <span className="text-xs text-[#586174] block">Starting from</span>
                        <div className="flex items-baseline gap-1">
                          <span className="text-2xl sm:text-3xl font-heading font-extrabold text-[#151E4D]">
                            {PRICING_CONFIG.currency}{plan.startingPriceINR.toLocaleString('en-IN')}
                          </span>
                          <span className="text-xs text-[#586174]">/ service</span>
                        </div>
                        {plan.priceNote && (
                          <span className="text-[11px] text-[#586174] block mt-1">
                            {plan.priceNote}
                          </span>
                        )}
                      </div>
                    )}

                    {/* Includes */}
                    <div className="space-y-2 mb-4">
                      <span className="text-xs font-semibold text-[#151E4D] block">Includes:</span>
                      <ul className="space-y-1.5 text-xs text-[#586174]">
                        {plan.includes.map((inc, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{inc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Exclusions */}
                    {plan.exclusions && (
                      <div className="space-y-1.5 pt-3 border-t border-[#E3E7EF]/80 mb-4">
                        <span className="text-[11px] font-semibold text-[#586174] block">Exclusions:</span>
                        <ul className="space-y-1 text-[11px] text-[#586174]">
                          {plan.exclusions.map((exc, idx) => (
                            <li key={idx} className="flex items-start gap-1.5">
                              <XCircle className="w-3 h-3 text-[#ED1834]/70 shrink-0 mt-0.5" />
                              <span>{exc}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  <div className="pt-4 border-t border-[#E3E7EF]">
                    <Link
                      to={`/contact?service=${encodeURIComponent(plan.serviceName)}&type=quote`}
                      className="w-full inline-flex items-center justify-center gap-2 bg-[#ED1834] hover:bg-[#C6102B] text-white text-xs sm:text-sm font-semibold py-2.5 px-4 rounded-md shadow-xs transition-colors"
                    >
                      <span>Request This Service</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                    {plan.taxInfo && (
                      <span className="text-[10px] text-[#586174] text-center block mt-2">
                        {plan.taxInfo}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Quotation FAQs */}
        <div className="mt-20 max-w-3xl mx-auto">
          <h2 className="text-xl sm:text-2xl font-heading font-bold text-[#151E4D] text-center mb-8">
            Quotation &amp; Payment Policies
          </h2>
          <Accordion
            items={[
              {
                id: 'p-faq-1',
                title: 'Do you charge for initial site inspections?',
                content:
                  'For most residential apartments and villas in primary Hyderabad coverage zones, phone/WhatsApp estimates based on layout photos are free. Specialized commercial IPM site audits or deep termite drilling surveys may involve a nominal assessment fee that is credited toward the service contract.',
              },
              {
                id: 'p-faq-2',
                title: 'When is payment completed?',
                content:
                  'We do not collect online payments or demand advance card authorizations on the website. Payment is arranged directly with the business upon completion of the service and inspection.',
              },
              {
                id: 'p-faq-3',
                title: 'Are there discounts for Annual Maintenance Contracts (AMC)?',
                content:
                  'Yes. Annual contracts with scheduled quarterly or bi-annual treatment visits offer significant per-visit cost savings compared to one-off emergency treatments.',
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
};
