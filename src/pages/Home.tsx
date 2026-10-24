import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ShieldCheck,
  ArrowRight,
  Phone,
  MessageCircle,
  Home as HomeIcon,
  Building,
  CheckCircle2,
  Search,
  MapPin,
  Clock,
  Sparkles,
} from 'lucide-react';
import { motion } from 'motion/react';
import { SERVICES_DATA } from '../data/services';
import { GALLERY_ITEMS } from '../data/gallery';
import { SERVICE_AREAS } from '../data/serviceAreas';
import { FAQS_DATA } from '../data/faqs';
import { BUSINESS_CONFIG } from '../data/business';
import { ServiceCard } from '../components/services/ServiceCard';
import { Accordion } from '../components/ui/Accordion';
import { Marquee } from '../components/ui/Marquee';
import { BrandStatement } from '../components/ui/BrandStatement';
import { BlurFade } from '../components/ui/BlurFade';
import { ShimmerButton } from '../components/ui/ShimmerButton';
import { QuoteCalculator } from '../components/forms/QuoteCalculator';

export const Home: React.FC = () => {
  const [areaSearch, setAreaSearch] = useState('');

  const filteredAreas = SERVICE_AREAS.filter((area) =>
    area.name.toLowerCase().includes(areaSearch.toLowerCase()) ||
    area.landmarks.some((lm) => lm.toLowerCase().includes(areaSearch.toLowerCase()))
  );

  const featuredGallery = GALLERY_ITEMS.slice(0, 5);

  const processSteps = [
    {
      num: '01',
      title: 'Choose a Service',
      description: 'Select the pest issue affecting your property—cockroaches, termites, bed bugs, rodents, or routine prevention.',
    },
    {
      num: '02',
      title: 'Share Property Details',
      description: 'Tell us your Hyderabad locality, BHK configuration or commercial square footage, and current infestation severity.',
    },
    {
      num: '03',
      title: 'Discuss the Quote',
      description: 'Our operations team evaluates your layout and provides a direct, transparent price estimate without hidden charges.',
    },
    {
      num: '04',
      title: 'Arrange the Service',
      description: 'Pick an appointment slot that fits your schedule. Our technicians arrive with certified safety gear and treatments.',
    },
  ];

  const marqueeKeywords = [
    'Cockroach Gel Treatment',
    'Subterranean Termite Protection',
    'Bed Bug Eradication',
    'Rodent Bait Stations',
    'ULV Mosquito Misting',
    'Odorless Formulations',
    'Residential Villas & Apartments',
    'Corporate IT Facilities',
    'Hyderabad & Secunderabad Coverage',
  ];

  return (
    <div className="flex flex-col">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-white border-b border-[#E3E7EF] pt-8 pb-16 lg:pt-16 lg:pb-24">
        {/* Subtle background dot pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column: Copy & Actions */}
            <div className="lg:col-span-7 flex flex-col gap-6 text-left">
              <BlurFade delay={0.05} yOffset={12}>
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#ED1834] bg-[#FFF0F2] px-3 py-1 rounded-sm border border-[#ED1834]/20 w-fit">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>PEST CONTROL SERVICES IN HYDERABAD</span>
                </div>
              </BlurFade>

              <BlurFade delay={0.1} yOffset={16}>
                <h1 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl text-[#151E4D] tracking-tight leading-[1.12]">
                  Pest Control for Your <span className="text-[#151E4D]">Home</span> &amp;{' '}
                  <span className="text-[#ED1834]">Business.</span>
                </h1>
              </BlurFade>

              <BlurFade delay={0.15} yOffset={16}>
                <p className="text-base sm:text-lg text-[#586174] leading-relaxed max-w-2xl">
                  Explore our services, check your area and contact our team to discuss your pest problem. Modern, odorless applications for apartments, villas, and commercial workplaces across Hyderabad.
                </p>
              </BlurFade>

              {/* CTAs */}
              <BlurFade delay={0.2} yOffset={16}>
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <Link to="/contact?type=quote">
                    <ShimmerButton variant="primary" size="lg">
                      <span>Get a Quote</span>
                      <ArrowRight className="w-4 h-4" />
                    </ShimmerButton>
                  </Link>

                  <Link to="/services">
                    <ShimmerButton variant="secondary" size="lg">
                      <span>View Services</span>
                    </ShimmerButton>
                  </Link>

                  {BUSINESS_CONFIG.isConfigured.whatsapp ? (
                    <a
                      href={`https://wa.me/${BUSINESS_CONFIG.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
                        `Hi ${BUSINESS_CONFIG.name}, I would like to enquire about pest control services in Hyderabad.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 hover:text-emerald-800 bg-emerald-50 hover:bg-emerald-100/70 border border-emerald-200/80 px-4 py-3 rounded-md transition-colors"
                    >
                      <MessageCircle className="w-4 h-4 text-emerald-600" />
                      <span>Chat on WhatsApp</span>
                    </a>
                  ) : (
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 hover:text-emerald-800 bg-emerald-50 hover:bg-emerald-100/70 border border-emerald-200/80 px-4 py-3 rounded-md transition-colors"
                    >
                      <MessageCircle className="w-4 h-4 text-emerald-600" />
                      <span>Chat on WhatsApp</span>
                    </Link>
                  )}
                </div>
              </BlurFade>

              {/* Highlights strip */}
              <BlurFade delay={0.25} yOffset={12}>
                <div className="pt-6 border-t border-[#E3E7EF] flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-[#586174]">
                  <div className="flex items-center gap-1.5 font-medium text-[#151E4D]">
                    <CheckCircle2 className="w-4 h-4 text-[#ED1834]" />
                    <span>Odorless Gel Baiting</span>
                  </div>
                  <span aria-hidden="true" className="text-[#E3E7EF]">·</span>
                  <div className="flex items-center gap-1.5 font-medium text-[#151E4D]">
                    <CheckCircle2 className="w-4 h-4 text-[#ED1834]" />
                    <span>Trained Field Operators</span>
                  </div>
                  <span aria-hidden="true" className="text-[#E3E7EF]">·</span>
                  <div className="flex items-center gap-1.5 font-medium text-[#151E4D]">
                    <CheckCircle2 className="w-4 h-4 text-[#ED1834]" />
                    <span>No Advance Payment Required</span>
                  </div>
                </div>
              </BlurFade>
            </div>

            {/* Right Column: High Quality Inspection Photograph */}
            <div className="lg:col-span-5 relative">
              <BlurFade delay={0.2} yOffset={20}>
                {/* Subtle navy background card with red accent line */}
                <div className="relative mx-auto max-w-md lg:max-w-none">
                  {/* Decorative background shapes */}
                  <div className="absolute -inset-3 bg-[#151E4D]/8 rounded-2xl -rotate-1.5 transform pointer-events-none" />
                  <div className="absolute -top-2 -right-2 w-16 h-16 bg-[#ED1834]/10 rounded-full blur-xl pointer-events-none" />

                  {/* Image container */}
                  <div className="relative rounded-xl overflow-hidden shadow-xl border-4 border-white bg-[#EDF0F7]">
                    <img
                      src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=80"
                      alt="Professional technician inspecting clean modern living space in Hyderabad"
                      className="w-full h-auto aspect-4/3 sm:aspect-5/4 object-cover"
                      width={600}
                      height={480}
                      loading="eager"
                    />

                    {/* Overlay badge with location */}
                    <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-3.5 rounded-lg border border-[#E3E7EF] shadow-md flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full bg-[#FFF0F2] flex items-center justify-center text-[#ED1834] shrink-0 font-bold">
                          <MapPin className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-[#151E4D]">City-Wide Coverage</div>
                          <div className="text-[11px] text-[#586174]">HITEC City, Kondapur, Jubilee Hills &amp; more</div>
                        </div>
                      </div>
                      <Link
                        to="/service-areas"
                        className="text-xs font-semibold text-[#ED1834] hover:underline shrink-0"
                      >
                        Check Areas →
                      </Link>
                    </div>
                  </div>
                </div>
              </BlurFade>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SERVICE SHORTCUTS & MARQUEE STRIP */}
      <section className="bg-[#EDF0F7] py-6 border-b border-[#E3E7EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <span className="text-xs font-bold text-[#151E4D] uppercase tracking-wider">
              Quick Service Jumps:
            </span>
            <div className="flex items-center gap-2 flex-wrap">
              {SERVICES_DATA.slice(0, 5).map((srv) => (
                <Link
                  key={srv.id}
                  to={`/services/${srv.slug}`}
                  className="text-xs font-medium bg-white text-[#151E4D] hover:text-[#ED1834] px-2.5 py-1 rounded border border-[#E3E7EF] transition-colors"
                >
                  {srv.name}
                </Link>
              ))}
              <Link
                to="/services"
                className="text-xs font-semibold text-[#ED1834] hover:underline px-2 py-1"
              >
                All Services →
              </Link>
            </div>
          </div>
        </div>

        {/* Marquee ticker with pause control */}
        <Marquee items={marqueeKeywords} speedSeconds={28} />
      </section>

      {/* 3. MAIN SERVICES GRID */}
      <section className="py-16 sm:py-24 bg-white border-b border-[#E3E7EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <div className="text-xs font-bold text-[#ED1834] uppercase tracking-wider mb-2">
                Confirmed Treatment Solutions
              </div>
              <h2 className="text-2xl sm:text-4xl font-heading font-extrabold text-[#151E4D]">
                Specialized Pest Services
              </h2>
            </div>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#151E4D] hover:text-[#ED1834] transition-colors"
            >
              <span>View detailed specifications</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* 3 columns desktop, 2 columns tablet, 1 mobile */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES_DATA.map((service, idx) => (
              <BlurFade key={service.id} delay={0.05 * idx} yOffset={16}>
                <ServiceCard service={service} />
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* 4. RESIDENTIAL AND COMMERCIAL SPLIT PANELS */}
      <section className="py-16 sm:py-24 bg-[#F7F8FC] border-b border-[#E3E7EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold text-[#ED1834] uppercase tracking-wider block mb-2">
              Property-Specific Approach
            </span>
            <h2 className="text-2xl sm:text-4xl font-heading font-extrabold text-[#151E4D]">
              Tailored Care for Residential &amp; Commercial Spaces
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Panel 1: Residential */}
            <div className="bg-white rounded-xl border border-[#E3E7EF] overflow-hidden shadow-xs flex flex-col justify-between group hover:border-[#151E4D]/30 transition-all duration-200">
              <div className="relative aspect-16/9 overflow-hidden bg-[#EDF0F7]">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80"
                  alt="Modern clean apartment interior in Hyderabad"
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 bg-[#151E4D] text-white text-xs font-bold px-3 py-1 rounded">
                  Residential Focus
                </div>
              </div>

              <div className="p-6 sm:p-8 flex flex-col grow justify-between gap-6">
                <div>
                  <h3 className="text-xl sm:text-2xl font-heading font-bold text-[#151E4D] mb-3">
                    Care for Your Home
                  </h3>
                  <p className="text-sm text-[#586174] leading-relaxed mb-4">
                    Protect your family and living environment with low-hazard, odorless solutions. We schedule around your daily routine with precision crack-and-crevice gel applications.
                  </p>

                  <div className="space-y-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#151E4D] block">
                      Suitable Property Types:
                    </span>
                    <div className="grid grid-cols-2 gap-2 text-xs text-[#586174]">
                      <span className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#ED1834]" /> Apartments &amp; Flats
                      </span>
                      <span className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#ED1834]" /> Independent Houses
                      </span>
                      <span className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#ED1834]" /> Luxury Gated Villas
                      </span>
                      <span className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#ED1834]" /> Residential Communities
                      </span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#E3E7EF] flex items-center justify-between">
                  <Link
                    to="/contact?type=quote&property=Apartment"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#ED1834] hover:text-[#C6102B]"
                  >
                    <span>Request Residential Quote</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    to="/services"
                    className="text-xs text-[#586174] hover:text-[#151E4D]"
                  >
                    Explore Home Services →
                  </Link>
                </div>
              </div>
            </div>

            {/* Panel 2: Commercial */}
            <div className="bg-white rounded-xl border border-[#E3E7EF] overflow-hidden shadow-xs flex flex-col justify-between group hover:border-[#151E4D]/30 transition-all duration-200">
              <div className="relative aspect-16/9 overflow-hidden bg-[#EDF0F7]">
                <img
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80"
                  alt="Modern commercial office and IT park in Hyderabad"
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 bg-[#ED1834] text-white text-xs font-bold px-3 py-1 rounded">
                  Commercial Focus
                </div>
              </div>

              <div className="p-6 sm:p-8 flex flex-col grow justify-between gap-6">
                <div>
                  <h3 className="text-xl sm:text-2xl font-heading font-bold text-[#151E4D] mb-3">
                    Support for Your Business
                  </h3>
                  <p className="text-sm text-[#586174] leading-relaxed mb-4">
                    Audit-compliant Integrated Pest Management (IPM) designed to safeguard brand reputation, customer safety, and inventory. After-hours visits ensure zero operational downtime.
                  </p>

                  <div className="space-y-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#151E4D] block">
                      Suitable Property Types:
                    </span>
                    <div className="grid grid-cols-2 gap-2 text-xs text-[#586174]">
                      <span className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#ED1834]" /> Corporate IT Offices
                      </span>
                      <span className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#ED1834]" /> Retail Shops &amp; Malls
                      </span>
                      <span className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#ED1834]" /> Restaurants &amp; Cafes
                      </span>
                      <span className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#ED1834]" /> Warehouses &amp; Logistics
                      </span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#E3E7EF] flex items-center justify-between">
                  <Link
                    to="/contact?type=quote&property=Office%20/%20Commercial"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#151E4D] hover:text-[#ED1834]"
                  >
                    <span>Request Commercial Audit</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    to="/services/commercial-pest-management"
                    className="text-xs text-[#586174] hover:text-[#151E4D]"
                  >
                    IPM Program Details →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BRAND STATEMENT (Text reveal) */}
      <section className="py-14 bg-white border-b border-[#E3E7EF]">
        <BrandStatement />
      </section>

      {/* 5. HOW IT WORKS */}
      <section className="py-16 sm:py-24 bg-[#EDF0F7] border-b border-[#E3E7EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold text-[#ED1834] uppercase tracking-wider block mb-2">
              Transparent Execution
            </span>
            <h2 className="text-2xl sm:text-4xl font-heading font-extrabold text-[#151E4D]">
              How the Service Process Works
            </h2>
            <p className="mt-2 text-sm text-[#586174]">
              Clear expectations from initial enquiry through to inspection and service delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step) => (
              <div
                key={step.num}
                className="bg-white p-6 rounded-lg border border-[#E3E7EF] shadow-2xs flex flex-col justify-between"
              >
                <div>
                  <div className="font-heading font-extrabold text-2xl text-[#ED1834] mb-3">
                    {step.num}
                  </div>
                  <h3 className="font-heading font-bold text-lg text-[#151E4D] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#586174] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center text-xs text-[#586174]">
            Note: Service dates and quotation figures are confirmed directly by the business operations team upon receiving your property details.
          </div>
        </div>
      </section>

      {/* 6. GALLERY PREVIEW */}
      <section className="py-16 sm:py-24 bg-white border-b border-[#E3E7EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-xs font-bold text-[#ED1834] uppercase tracking-wider block mb-2">
                Field Inspections &amp; Work
              </span>
              <h2 className="text-2xl sm:text-4xl font-heading font-extrabold text-[#151E4D]">
                Our Work in Focus
              </h2>
            </div>
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#151E4D] hover:text-[#ED1834] transition-colors"
            >
              <span>View Full Gallery</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Balanced layout: 1 larger featured + smaller supporting */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Featured large image */}
            <div className="lg:col-span-7 group bg-white rounded-lg border border-[#E3E7EF] overflow-hidden shadow-2xs">
              <div className="relative aspect-16/10 overflow-hidden bg-[#EDF0F7]">
                <img
                  src={featuredGallery[0].image}
                  alt={featuredGallery[0].title}
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 bg-black/60 text-white text-[11px] px-2.5 py-1 rounded backdrop-blur-xs">
                  {featuredGallery[0].category} · {featuredGallery[0].locality}
                </div>
              </div>
              <div className="p-5">
                <h4 className="font-heading font-bold text-lg text-[#151E4D] mb-1">
                  {featuredGallery[0].title}
                </h4>
                <p className="text-xs text-[#586174]">{featuredGallery[0].description}</p>
              </div>
            </div>

            {/* Supporting 4 images grid */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              {featuredGallery.slice(1, 5).map((item) => (
                <Link
                  key={item.id}
                  to="/gallery"
                  className="group bg-white rounded-lg border border-[#E3E7EF] overflow-hidden shadow-2xs flex flex-col"
                >
                  <div className="relative aspect-4/3 overflow-hidden bg-[#EDF0F7]">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-3">
                    <span className="text-[10px] text-[#ED1834] font-semibold block">{item.category}</span>
                    <h5 className="text-xs font-heading font-bold text-[#151E4D] group-hover:text-[#ED1834] transition-colors line-clamp-1">
                      {item.title}
                    </h5>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. PRICING & QUOTATION PREVIEW */}
      <section className="py-16 sm:py-24 bg-[#F7F8FC] border-b border-[#E3E7EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-6 flex flex-col gap-6">
              <div>
                <span className="text-xs font-bold text-[#ED1834] uppercase tracking-wider block mb-2">
                  Pricing &amp; Quotations
                </span>
                <h2 className="text-2xl sm:text-4xl font-heading font-extrabold text-[#151E4D]">
                  Clear Options. A Quote for Your Property.
                </h2>
              </div>
              <p className="text-sm sm:text-base text-[#586174] leading-relaxed">
                Rather than generic flat rates that fail to cover severe infestations or overcharge for simple visits, our pricing is determined by exact property factors.
              </p>

              <div className="space-y-3.5">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#FFF0F2] text-[#ED1834] flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                    ✓
                  </div>
                  <div>
                    <strong className="text-sm text-[#151E4D] block">Zero Forced Hidden Fees</strong>
                    <p className="text-xs text-[#586174]">All recommended treatments, formulations, and revisit intervals are explained before work commences.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#FFF0F2] text-[#ED1834] flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                    ✓
                  </div>
                  <div>
                    <strong className="text-sm text-[#151E4D] block">Apartment &amp; Villa Packages</strong>
                    <p className="text-xs text-[#586174]">Options scaled to standard 1BHK, 2BHK, 3BHK, duplexes, and independent bungalows across Hyderabad.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#FFF0F2] text-[#ED1834] flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                    ✓
                  </div>
                  <div>
                    <strong className="text-sm text-[#151E4D] block">Annual Maintenance Contracts (AMC)</strong>
                    <p className="text-xs text-[#586174]">Quarterly and bi-annual pest defense agreements for residences and commercial businesses.</p>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to="/pricing"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#151E4D] hover:text-[#ED1834] underline"
                >
                  <span>Learn how our quotation matrix works</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <QuoteCalculator />
            </div>
          </div>
        </div>
      </section>

      {/* 8. SERVICE AREA PREVIEW */}
      <section className="py-16 sm:py-24 bg-white border-b border-[#E3E7EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <span className="text-xs font-bold text-[#ED1834] uppercase tracking-wider block mb-2">
                Coverage Locations
              </span>
              <h2 className="text-2xl sm:text-4xl font-heading font-extrabold text-[#151E4D]">
                Check Our Service Areas
              </h2>
              <p className="mt-1 text-sm text-[#586174]">
                Technicians dispatched across West, North, Central, East Hyderabad &amp; Secunderabad.
              </p>
            </div>

            {/* Quick search input */}
            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 text-[#586174] absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search your locality..."
                value={areaSearch}
                onChange={(e) => setAreaSearch(e.target.value)}
                className="w-full pl-9 pr-3.5 py-2 text-sm rounded-md border border-[#E3E7EF] bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ED1834]"
              />
            </div>
          </div>

          {/* Area cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredAreas.map((area) => (
              <Link
                key={area.id}
                to={`/service-areas?q=${encodeURIComponent(area.name)}`}
                className="p-4 bg-[#F7F8FC] hover:bg-[#EDF0F7] rounded-lg border border-[#E3E7EF] transition-all group"
              >
                <div className="flex items-center gap-1.5 text-xs text-[#ED1834] font-semibold mb-1">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{area.zone}</span>
                </div>
                <h4 className="font-heading font-bold text-base text-[#151E4D] group-hover:text-[#ED1834] transition-colors">
                  {area.name}
                </h4>
                <div className="text-[11px] text-[#586174] mt-1 truncate">
                  {area.landmarks.slice(0, 2).join(', ')}
                </div>
              </Link>
            ))}
          </div>

          {filteredAreas.length === 0 && (
            <div className="p-8 text-center bg-[#FFF0F2] rounded-lg border border-[#ED1834]/20 my-4">
              <p className="text-sm font-semibold text-[#151E4D] mb-1">
                Your area isn&apos;t listed. Contact us to check availability.
              </p>
              <p className="text-xs text-[#586174] mb-4">
                We frequently extend coverage to neighboring sectors and ORR townships across Hyderabad.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-[#ED1834] text-white text-xs font-semibold px-4 py-2 rounded-md hover:bg-[#C6102B]"
              >
                <span>Enquire About Your Area</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          )}

          <div className="mt-8 text-center">
            <Link
              to="/service-areas"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#151E4D] hover:text-[#ED1834]"
            >
              <span>Explore all service area details and guidelines</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>


      {/* 10. FAQS */}
      <section className="py-16 sm:py-24 bg-white border-b border-[#E3E7EF]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold text-[#ED1834] uppercase tracking-wider block mb-2">
              Common Questions
            </span>
            <h2 className="text-2xl sm:text-4xl font-heading font-extrabold text-[#151E4D]">
              Frequently Asked Questions
            </h2>
            <p className="mt-2 text-sm text-[#586174]">
              Everything you need to know about booking, treatment preparation, and service delivery.
            </p>
          </div>

          <Accordion
            items={FAQS_DATA.slice(0, 6).map((faq, idx) => ({
              id: `faq-${idx}`,
              title: faq.question,
              content: faq.answer,
            }))}
            defaultOpenId="faq-0"
          />

          <div className="mt-8 text-center">
            <Link
              to="/contact"
              className="text-xs sm:text-sm font-semibold text-[#ED1834] hover:underline"
            >
              Have a specific question not listed here? Ask our team on WhatsApp →
            </Link>
          </div>
        </div>
      </section>

      {/* 11. CONTACT CTA BANNER */}
      <section className="py-16 bg-[#151E4D] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-wider text-[#ED1834] bg-white/10 px-3 py-1 rounded inline-block mb-4">
            Hyderabad Pest Assistance
          </span>
          <h2 className="text-2xl sm:text-4xl font-heading font-extrabold mb-4 leading-tight">
            Ready to Protect Your Home or Workplace?
          </h2>
          <p className="text-white/80 text-sm sm:text-base mb-8 max-w-xl mx-auto">
            Get in touch with our operations team today for a transparent assessment, property quote, and convenient scheduling.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link to="/contact?type=quote">
              <ShimmerButton variant="primary" size="lg">
                <span>Request a Quote Now</span>
                <ArrowRight className="w-4 h-4" />
              </ShimmerButton>
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold text-sm sm:text-base px-6 py-3.5 rounded-md transition-colors border border-white/20"
            >
              <span>Contact Team</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
