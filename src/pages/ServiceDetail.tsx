import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import {
  ChevronRight,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  Clock,
  ArrowRight,
  MessageCircle,
  Phone,
  HelpCircle,
  Home,
  Building,
} from 'lucide-react';
import { SERVICES_DATA } from '../data/services';
import { GALLERY_ITEMS } from '../data/gallery';
import { BUSINESS_CONFIG } from '../data/business';
import { Accordion } from '../components/ui/Accordion';

export const ServiceDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  const service = SERVICES_DATA.find((s) => s.slug === slug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  // Related gallery images
  const relatedGallery = GALLERY_ITEMS.filter((item) => {
    if (service.id.includes('termite')) return item.category === 'Termite Services';
    if (service.id.includes('commercial')) return item.category === 'Commercial';
    return true;
  }).slice(0, 3);

  const whatsappHref = BUSINESS_CONFIG.isConfigured.whatsapp
    ? `https://wa.me/${BUSINESS_CONFIG.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
        `Hi ${BUSINESS_CONFIG.name}, I want to enquire about ${service.name} in Hyderabad.`
      )}`
    : null;

  return (
    <div className="bg-[#F7F8FC] py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center gap-2 text-xs text-[#586174]">
            <li>
              <Link to="/" className="hover:text-[#151E4D]">Home</Link>
            </li>
            <li><ChevronRight className="w-3 h-3 text-[#586174]/60" /></li>
            <li>
              <Link to="/services" className="hover:text-[#151E4D]">Services</Link>
            </li>
            <li><ChevronRight className="w-3 h-3 text-[#586174]/60" /></li>
            <li className="font-semibold text-[#151E4D] truncate">{service.name}</li>
          </ol>
        </nav>

        {/* Layout: Main content + Sticky desktop enquiry sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Main Content Column */}
          <div className="lg:col-span-8 flex flex-col gap-10">
            {/* Header Block */}
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#ED1834] bg-[#FFF0F2] px-3 py-1 rounded-sm border border-[#ED1834]/20 mb-3">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Service Guide</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-heading font-extrabold text-[#151E4D] mb-4">
                {service.name} in Hyderabad
              </h1>
              <p className="text-base sm:text-lg text-[#586174] leading-relaxed">
                {service.shortDescription}
              </p>
            </div>

            {/* Hero Image */}
            <div className="rounded-xl overflow-hidden border border-[#E3E7EF] bg-white shadow-2xs aspect-16/9">
              <img
                src={service.image}
                alt={`${service.name} professional treatment in Hyderabad`}
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>

            {/* Overview */}
            <div className="bg-white p-6 sm:p-8 rounded-xl border border-[#E3E7EF] shadow-2xs">
              <h2 className="text-xl font-heading font-bold text-[#151E4D] mb-3">
                Service Overview
              </h2>
              <p className="text-sm sm:text-base text-[#586174] leading-relaxed mb-6">
                {service.fullOverview}
              </p>

              {/* Target pests list (clean unboxed text with typographic separator, zero-pill discipline) */}
              <div className="pt-4 border-t border-[#E3E7EF]">
                <span className="text-xs font-bold uppercase tracking-wider text-[#151E4D] block mb-2">
                  Target Pest Species:
                </span>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-[#586174] flex-wrap">
                  {service.targetPests.map((pest, idx) => (
                    <React.Fragment key={pest}>
                      {idx > 0 && <span aria-hidden="true" className="text-[#E3E7EF]">·</span>}
                      <span className="font-medium text-[#151E4D]">{pest}</span>
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>

            {/* Common Signs */}
            <div className="bg-white p-6 sm:p-8 rounded-xl border border-[#E3E7EF] shadow-2xs">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#ED1834] mb-2">
                <AlertTriangle className="w-4 h-4" />
                <span>Infestation Indicators</span>
              </div>
              <h2 className="text-xl font-heading font-bold text-[#151E4D] mb-4">
                Common Signs Customers Notice
              </h2>
              <ul className="space-y-3 text-sm text-[#586174]">
                {service.commonSigns.map((sign, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-[#FFF0F2] text-[#ED1834] flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                      {idx + 1}
                    </span>
                    <span className="leading-relaxed">{sign}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* What the Service Involves (Process Steps) */}
            <div className="bg-white p-6 sm:p-8 rounded-xl border border-[#E3E7EF] shadow-2xs">
              <h2 className="text-xl font-heading font-bold text-[#151E4D] mb-6">
                What the Service Involves
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {service.processSteps.map((step, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-lg bg-[#F7F8FC] border border-[#E3E7EF] flex flex-col justify-between"
                  >
                    <div>
                      <span className="text-xs font-bold text-[#ED1834] uppercase tracking-wider block mb-1">
                        Step 0{idx + 1}
                      </span>
                      <h3 className="font-heading font-bold text-base text-[#151E4D] mb-2">
                        {step.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#586174] leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Suitable Properties */}
            <div className="bg-white p-6 sm:p-8 rounded-xl border border-[#E3E7EF] shadow-2xs">
              <h2 className="text-xl font-heading font-bold text-[#151E4D] mb-4">
                Suitable Property Types
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-[#586174]">
                {service.suitableProperties.map((prop, idx) => (
                  <div key={idx} className="flex items-center gap-2 p-2.5 rounded-md bg-[#F7F8FC] border border-[#E3E7EF]">
                    <CheckCircle2 className="w-4 h-4 text-[#ED1834] shrink-0" />
                    <span className="font-medium text-[#151E4D]">{prop}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Preparation and Aftercare */}
            <div className="bg-white p-6 sm:p-8 rounded-xl border border-[#E3E7EF] shadow-2xs">
              <h2 className="text-xl font-heading font-bold text-[#151E4D] mb-6">
                Preparation &amp; Aftercare Guidelines
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-heading font-bold text-base text-[#151E4D] mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#151E4D]" />
                    Before Technician Arrival
                  </h3>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-[#586174]">
                    {service.prepAndAftercare.preparation.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-[#151E4D] font-bold">·</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="font-heading font-bold text-base text-[#151E4D] mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#ED1834]" />
                    Aftercare &amp; Maintenance
                  </h3>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-[#586174]">
                    {service.prepAndAftercare.aftercare.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-[#ED1834] font-bold">·</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Service Specific FAQs */}
            {service.faqs.length > 0 && (
              <div className="bg-white p-6 sm:p-8 rounded-xl border border-[#E3E7EF] shadow-2xs">
                <h2 className="text-xl font-heading font-bold text-[#151E4D] mb-4">
                  Service FAQs
                </h2>
                <Accordion
                  items={service.faqs.map((faq, idx) => ({
                    id: `service-faq-${idx}`,
                    title: faq.question,
                    content: faq.answer,
                  }))}
                  defaultOpenId="service-faq-0"
                />
              </div>
            )}

            {/* Related Gallery Images */}
            {relatedGallery.length > 0 && (
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-heading font-bold text-[#151E4D]">
                    Related Work &amp; Inspection Samples
                  </h2>
                  <Link to="/gallery" className="text-xs text-[#ED1834] font-semibold hover:underline">
                    All Gallery →
                  </Link>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {relatedGallery.map((img) => (
                    <div key={img.id} className="bg-white rounded-lg border border-[#E3E7EF] overflow-hidden">
                      <div className="aspect-16/10 overflow-hidden bg-[#EDF0F7]">
                        <img src={img.image} alt={img.title} className="w-full h-full object-cover" />
                      </div>
                      <div className="p-2.5 text-xs font-semibold text-[#151E4D] truncate">
                        {img.title}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sticky Desktop Enquiry Panel */}
          <div className="lg:col-span-4 lg:sticky lg:top-24 space-y-6">
            <div className="bg-white p-6 rounded-xl border border-[#E3E7EF] shadow-sm">
              <span className="text-xs font-bold uppercase tracking-wider text-[#ED1834] block mb-2">
                Hyderabad Service Desk
              </span>
              <h3 className="font-heading font-bold text-xl text-[#151E4D] mb-3">
                Request a Quote for {service.name}
              </h3>
              <p className="text-xs text-[#586174] leading-relaxed mb-6">
                Tell us your property size and locality in Hyderabad. We will provide transparent pricing and discuss treatment timing.
              </p>

              <div className="space-y-3">
                <Link
                  to={`/contact?service=${encodeURIComponent(service.name)}&type=quote`}
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#ED1834] hover:bg-[#C6102B] text-white font-semibold py-3 px-4 rounded-md text-sm shadow-xs transition-colors"
                >
                  <span>Request a Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                {whatsappHref ? (
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold py-3 px-4 rounded-md text-sm shadow-xs transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>WhatsApp Consultation</span>
                  </a>
                ) : (
                  <Link
                    to="/contact"
                    className="w-full inline-flex items-center justify-center gap-2 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 font-semibold py-3 px-4 rounded-md text-sm transition-colors"
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-600" />
                    <span>WhatsApp Consultation</span>
                  </Link>
                )}

                {BUSINESS_CONFIG.isConfigured.phone ? (
                  <a
                    href={`tel:${BUSINESS_CONFIG.phone}`}
                    className="w-full inline-flex items-center justify-center gap-2 bg-white hover:bg-[#EDF0F7] text-[#151E4D] border border-[#E3E7EF] font-semibold py-3 px-4 rounded-md text-sm transition-colors"
                  >
                    <Phone className="w-4 h-4 text-[#ED1834]" />
                    <span>Call Helpline: {BUSINESS_CONFIG.phone}</span>
                  </a>
                ) : (
                  <Link
                    to="/contact"
                    className="w-full inline-flex items-center justify-center gap-2 bg-white hover:bg-[#EDF0F7] text-[#151E4D] border border-[#E3E7EF] font-semibold py-3 px-4 rounded-md text-sm transition-colors"
                  >
                    <Phone className="w-4 h-4 text-[#ED1834]" />
                    <span>View Contact Channels</span>
                  </Link>
                )}
              </div>

              <div className="mt-6 pt-4 border-t border-[#E3E7EF] space-y-2 text-xs text-[#586174]">
                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-[#ED1834]" />
                  <span>Hours: 8:00 AM – 8:00 PM (Daily)</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Residential &amp; Commercial Contracts</span>
                </div>
              </div>
            </div>

            {/* Quick Link to other services */}
            <div className="bg-[#EDF0F7] p-5 rounded-xl border border-[#E3E7EF]">
              <h4 className="font-heading font-bold text-sm text-[#151E4D] mb-3">
                Other Confirmed Services
              </h4>
              <ul className="space-y-2 text-xs text-[#586174]">
                {SERVICES_DATA.filter((s) => s.id !== service.id).slice(0, 5).map((s) => (
                  <li key={s.id}>
                    <Link
                      to={`/services/${s.slug}`}
                      className="hover:text-[#ED1834] hover:underline flex items-center justify-between"
                    >
                      <span>{s.name}</span>
                      <ArrowRight className="w-3 h-3 text-[#586174]" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
