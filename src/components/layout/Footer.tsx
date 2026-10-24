import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MessageCircle, Mail, MapPin, Clock } from 'lucide-react';
import { BUSINESS_CONFIG, LOGO_PATH } from '../../data/business';
import { SERVICES_DATA } from '../../data/services';
import { SERVICE_AREAS } from '../../data/serviceAreas';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#101737] text-white pt-16 pb-24 md:pb-12 border-t border-[#151E4D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          {/* Brand info */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <Link to="/" className="flex items-center gap-3.5 group">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-white p-0.5 border border-white/20 shrink-0">
                <img
                  src={LOGO_PATH}
                  alt={`${BUSINESS_CONFIG.name} Logo`}
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="font-heading font-extrabold text-xl tracking-tight text-white block">
                  {BUSINESS_CONFIG.name}
                </span>
                <span className="text-xs text-white/70 tracking-wide uppercase">
                  Pest Control Services · Hyderabad
                </span>
              </div>
            </Link>
            <p className="text-sm text-white/75 leading-relaxed max-w-sm mt-1">
              Professional residential and commercial pest management across Hyderabad and Secunderabad. Modern methods, odorless formulations, and targeted inspections.
            </p>

            {/* Business Contact Details */}
            <div className="flex flex-col gap-2.5 mt-2 text-sm text-white/80">
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#ED1834] shrink-0 mt-0.5" />
                {BUSINESS_CONFIG.isConfigured.phone ? (
                  <a href={`tel:${BUSINESS_CONFIG.phone}`} className="hover:text-white transition-colors">
                    {BUSINESS_CONFIG.phone}
                  </a>
                ) : (
                  <span className="text-white/60">Helpline: Available on enquiry</span>
                )}
              </div>

              <div className="flex items-start gap-2.5">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                {BUSINESS_CONFIG.isConfigured.whatsapp ? (
                  <a
                    href={`https://wa.me/${BUSINESS_CONFIG.whatsapp.replace(/[^0-9]/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    WhatsApp: {BUSINESS_CONFIG.whatsapp}
                  </a>
                ) : (
                  <Link to="/contact" className="hover:text-white transition-colors underline decoration-white/30">
                    WhatsApp Enquiry Desk
                  </Link>
                )}
              </div>

              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-[#ED1834] shrink-0 mt-0.5" />
                {BUSINESS_CONFIG.isConfigured.email ? (
                  <a href={`mailto:${BUSINESS_CONFIG.email}`} className="hover:text-white transition-colors">
                    {BUSINESS_CONFIG.email}
                  </a>
                ) : (
                  <span className="text-white/60">Direct Email: Available on request</span>
                )}
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-white/50 shrink-0 mt-0.5" />
                <span className="text-white/70">{BUSINESS_CONFIG.workingHours}</span>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-white/50 shrink-0 mt-0.5" />
                <span className="text-white/70">Hyderabad & Secunderabad, Telangana</span>
              </div>
            </div>
          </div>

          {/* Quick Page Links */}
          <div className="flex flex-col gap-3">
            <h3 className="font-heading font-semibold text-sm uppercase tracking-wider text-white">
              Navigation
            </h3>
            <ul className="flex flex-col gap-2 text-sm text-white/75">
              <li>
                <Link to="/" className="hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors">All Services</Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-white transition-colors">Work Gallery</Link>
              </li>
              <li>
                <Link to="/service-areas" className="hover:text-white transition-colors">Coverage Areas</Link>
              </li>
              <li>
                <Link to="/pricing" className="hover:text-white transition-colors">Pricing & Quotes</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">About the Business</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Services Links */}
          <div className="flex flex-col gap-3">
            <h3 className="font-heading font-semibold text-sm uppercase tracking-wider text-white">
              Pest Services
            </h3>
            <ul className="flex flex-col gap-2 text-sm text-white/75">
              {SERVICES_DATA.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <Link
                    to={`/services/${service.slug}`}
                    className="hover:text-white transition-colors truncate block"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/services" className="text-[#ED1834] font-medium hover:underline text-xs mt-1 block">
                  View all 8 services →
                </Link>
              </li>
            </ul>
          </div>

          {/* Service Areas */}
          <div className="flex flex-col gap-3">
            <h3 className="font-heading font-semibold text-sm uppercase tracking-wider text-white">
              Key Localities
            </h3>
            <ul className="flex flex-col gap-2 text-sm text-white/75">
              {SERVICE_AREAS.slice(0, 6).map((area) => (
                <li key={area.id}>
                  <Link
                    to={`/service-areas?q=${encodeURIComponent(area.name)}`}
                    className="hover:text-white transition-colors"
                  >
                    {area.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/service-areas" className="text-[#ED1834] font-medium hover:underline text-xs mt-1 block">
                  Check all Hyderabad areas →
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <div>
            © {currentYear} {BUSINESS_CONFIG.name}. Pest Control Services in Hyderabad, Telangana. All rights reserved.
          </div>
          <div className="text-white/50 text-[11px]">
            Residential & Commercial Integrated Pest Management
          </div>
        </div>
      </div>
    </footer>
  );
};
