import React, { useState, useEffect } from 'react';
import { MessageCircle, Mail, AlertCircle, CheckCircle2 } from 'lucide-react';
import { ContactFormData } from '../../types';
import { SERVICES_DATA } from '../../data/services';
import { BUSINESS_CONFIG } from '../../data/business';
import { openWhatsAppEnquiry } from '../../utils/whatsapp';
import { openEmailEnquiry } from '../../utils/email';

interface ContactFormProps {
  initialService?: string;
  initialEnquiryType?: 'Quotation' | 'General Enquiry';
  className?: string;
}

export const ContactForm: React.FC<ContactFormProps> = ({
  initialService = '',
  initialEnquiryType = 'Quotation',
  className = '',
}) => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    phone: '',
    email: '',
    serviceRequired: initialService || SERVICES_DATA[0].name,
    propertyType: 'Apartment',
    areaOrPincode: '',
    enquiryType: initialEnquiryType,
    message: '',
    consent: false,
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [attemptedSubmit, setAttemptedSubmit] = useState(false);
  const [handoffNotice, setHandoffNotice] = useState<string | null>(null);

  // Sync prop changes
  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, serviceRequired: initialService }));
    }
  }, [initialService]);

  useEffect(() => {
    if (initialEnquiryType) {
      setFormData((prev) => ({ ...prev, enquiryType: initialEnquiryType }));
    }
  }, [initialEnquiryType]);

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof ContactFormData, string>> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required.';
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Please enter at least 2 characters.';
    }

    const phoneRegex = /^[6-9]\d{9}$/;
    const cleanPhone = formData.phone.replace(/[\s\-+]/g, '').slice(-10);
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required for quote communication.';
    } else if (!phoneRegex.test(cleanPhone)) {
      newErrors.phone = 'Please provide a valid 10-digit Indian mobile number.';
    }

    if (formData.email.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email.trim())) {
        newErrors.email = 'Please enter a valid email address.';
      }
    }

    if (!formData.areaOrPincode.trim()) {
      newErrors.areaOrPincode = 'Hyderabad locality or PIN code is required to check coverage.';
    }

    if (!formData.consent) {
      newErrors.consent = 'Please confirm consent to be contacted regarding this pest enquiry.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setAttemptedSubmit(true);
    if (validate()) {
      setHandoffNotice('WhatsApp window opened with your filled enquiry details.');
      openWhatsAppEnquiry(formData);
    }
  };

  const handleEmailSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    setAttemptedSubmit(true);
    if (validate()) {
      setHandoffNotice('Your default email client opened with your filled enquiry draft.');
      openEmailEnquiry(formData);
    }
  };

  return (
    <div className={`bg-white rounded-lg border border-[#E3E7EF] p-6 sm:p-8 shadow-xs ${className}`}>
      {/* Notice badge if business channels are placeholders */}
      {!BUSINESS_CONFIG.isConfigured.whatsapp && (
        <div className="mb-6 p-3.5 bg-[#FFF0F2] border border-[#ED1834]/20 rounded-md text-xs text-[#151E4D] flex items-start gap-2.5">
          <AlertCircle className="w-4 h-4 text-[#ED1834] shrink-0 mt-0.5" />
          <div className="leading-relaxed">
            <span className="font-semibold text-[#ED1834]">Notice: </span>
            The business contact information is currently in draft configuration. Submitting will format your enquiry ready for direct transmission.
          </div>
        </div>
      )}

      {handoffNotice && (
        <div className="mb-6 p-4 bg-[#EDF0F7] border border-[#151E4D]/20 rounded-md text-xs text-[#151E4D] flex items-start gap-2.5 animate-in fade-in">
          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
          <div>
            <span className="font-semibold">{handoffNotice}</span>
            <p className="mt-1 text-[#586174]">
              Please review and click send within WhatsApp or your email client to deliver your enquiry directly to the team.
            </p>
          </div>
        </div>
      )}

      <form onSubmit={handleWhatsAppSubmit} noValidate className="flex flex-col gap-5">
        {/* Enquiry Type Selector */}
        <fieldset>
          <legend className="text-xs font-semibold text-[#151E4D] uppercase tracking-wider mb-2 block">
            Enquiry Type <span className="text-[#ED1834]">*</span>
          </legend>
          <div className="grid grid-cols-2 gap-3">
            <label
              className={`flex items-center justify-center gap-2 p-2.5 border rounded-md cursor-pointer text-sm font-medium transition-colors ${
                formData.enquiryType === 'Quotation'
                  ? 'border-[#ED1834] bg-[#FFF0F2] text-[#ED1834]'
                  : 'border-[#E3E7EF] text-[#586174] hover:bg-[#F7F8FC]'
              }`}
            >
              <input
                type="radio"
                name="enquiryType"
                value="Quotation"
                checked={formData.enquiryType === 'Quotation'}
                onChange={() => setFormData({ ...formData, enquiryType: 'Quotation' })}
                className="sr-only"
              />
              <span>Request Quotation</span>
            </label>

            <label
              className={`flex items-center justify-center gap-2 p-2.5 border rounded-md cursor-pointer text-sm font-medium transition-colors ${
                formData.enquiryType === 'General Enquiry'
                  ? 'border-[#ED1834] bg-[#FFF0F2] text-[#ED1834]'
                  : 'border-[#E3E7EF] text-[#586174] hover:bg-[#F7F8FC]'
              }`}
            >
              <input
                type="radio"
                name="enquiryType"
                value="General Enquiry"
                checked={formData.enquiryType === 'General Enquiry'}
                onChange={() => setFormData({ ...formData, enquiryType: 'General Enquiry' })}
                className="sr-only"
              />
              <span>General Enquiry</span>
            </label>
          </div>
        </fieldset>

        {/* Row 1: Full Name & Phone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="fullName" className="block text-xs font-semibold text-[#151E4D] uppercase tracking-wider mb-1.5">
              Full Name <span className="text-[#ED1834]">*</span>
            </label>
            <input
              id="fullName"
              type="text"
              required
              autoComplete="name"
              placeholder="e.g. Ramesh Kumar"
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              className={`w-full px-3.5 py-2.5 rounded-md border text-sm text-[#17213C] bg-white transition-colors focus-visible:outline-none focus-visible:ring-2 ${
                errors.fullName
                  ? 'border-[#ED1834] focus-visible:ring-[#ED1834]/30'
                  : 'border-[#E3E7EF] focus-visible:border-[#151E4D] focus-visible:ring-[#151E4D]/20'
              }`}
              aria-invalid={!!errors.fullName}
              aria-describedby={errors.fullName ? 'fullName-error' : undefined}
            />
            {errors.fullName && (
              <p id="fullName-error" className="mt-1 text-xs text-[#ED1834] flex items-center gap-1">
                <AlertCircle className="w-3 h-3" /> {errors.fullName}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="phone" className="block text-xs font-semibold text-[#151E4D] uppercase tracking-wider mb-1.5">
              Phone Number <span className="text-[#ED1834]">*</span>
            </label>
            <input
              id="phone"
              type="tel"
              required
              inputMode="tel"
              autoComplete="tel"
              placeholder="e.g. 9876543210"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className={`w-full px-3.5 py-2.5 rounded-md border text-sm text-[#17213C] bg-white transition-colors focus-visible:outline-none focus-visible:ring-2 ${
                errors.phone
                  ? 'border-[#ED1834] focus-visible:ring-[#ED1834]/30'
                  : 'border-[#E3E7EF] focus-visible:border-[#151E4D] focus-visible:ring-[#151E4D]/20'
              }`}
              aria-invalid={!!errors.phone}
              aria-describedby={errors.phone ? 'phone-error' : undefined}
            />
            {errors.phone && (
              <p id="phone-error" className="mt-1 text-xs text-[#ED1834] flex items-center gap-1">
                <AlertCircle className="w-3 h-3" /> {errors.phone}
              </p>
            )}
          </div>
        </div>

        {/* Row 2: Email & Hyderabad Locality */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="email" className="block text-xs font-semibold text-[#151E4D] uppercase tracking-wider mb-1.5">
              Email Address <span className="text-[#586174] font-normal lowercase">(optional)</span>
            </label>
            <input
              id="email"
              type="email"
              inputMode="email"
              autoComplete="email"
              placeholder="e.g. name@example.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className={`w-full px-3.5 py-2.5 rounded-md border text-sm text-[#17213C] bg-white transition-colors focus-visible:outline-none focus-visible:ring-2 ${
                errors.email
                  ? 'border-[#ED1834] focus-visible:ring-[#ED1834]/30'
                  : 'border-[#E3E7EF] focus-visible:border-[#151E4D] focus-visible:ring-[#151E4D]/20'
              }`}
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? 'email-error' : undefined}
            />
            {errors.email && (
              <p id="email-error" className="mt-1 text-xs text-[#ED1834] flex items-center gap-1">
                <AlertCircle className="w-3 h-3" /> {errors.email}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="areaOrPincode" className="block text-xs font-semibold text-[#151E4D] uppercase tracking-wider mb-1.5">
              Hyderabad Locality or PIN <span className="text-[#ED1834]">*</span>
            </label>
            <input
              id="areaOrPincode"
              type="text"
              required
              placeholder="e.g. Madhapur, 500081"
              value={formData.areaOrPincode}
              onChange={(e) => setFormData({ ...formData, areaOrPincode: e.target.value })}
              className={`w-full px-3.5 py-2.5 rounded-md border text-sm text-[#17213C] bg-white transition-colors focus-visible:outline-none focus-visible:ring-2 ${
                errors.areaOrPincode
                  ? 'border-[#ED1834] focus-visible:ring-[#ED1834]/30'
                  : 'border-[#E3E7EF] focus-visible:border-[#151E4D] focus-visible:ring-[#151E4D]/20'
              }`}
              aria-invalid={!!errors.areaOrPincode}
              aria-describedby={errors.areaOrPincode ? 'area-error' : undefined}
            />
            {errors.areaOrPincode && (
              <p id="area-error" className="mt-1 text-xs text-[#ED1834] flex items-center gap-1">
                <AlertCircle className="w-3 h-3" /> {errors.areaOrPincode}
              </p>
            )}
          </div>
        </div>

        {/* Row 3: Service Required & Property Type */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="serviceRequired" className="block text-xs font-semibold text-[#151E4D] uppercase tracking-wider mb-1.5">
              Service Required <span className="text-[#ED1834]">*</span>
            </label>
            <select
              id="serviceRequired"
              value={formData.serviceRequired}
              onChange={(e) => setFormData({ ...formData, serviceRequired: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-md border border-[#E3E7EF] text-sm text-[#17213C] bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:border-[#151E4D] focus-visible:ring-[#151E4D]/20"
            >
              {SERVICES_DATA.map((srv) => (
                <option key={srv.id} value={srv.name}>
                  {srv.name}
                </option>
              ))}
              <option value="General Multi-Pest Consultation">Other / General Consultation</option>
            </select>
          </div>

          <div>
            <label htmlFor="propertyType" className="block text-xs font-semibold text-[#151E4D] uppercase tracking-wider mb-1.5">
              Property Type <span className="text-[#ED1834]">*</span>
            </label>
            <select
              id="propertyType"
              value={formData.propertyType}
              onChange={(e) => setFormData({ ...formData, propertyType: e.target.value as any })}
              className="w-full px-3.5 py-2.5 rounded-md border border-[#E3E7EF] text-sm text-[#17213C] bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:border-[#151E4D] focus-visible:ring-[#151E4D]/20"
            >
              <option value="Apartment">Apartment (1BHK / 2BHK / 3BHK / 4BHK)</option>
              <option value="Independent House / Villa">Independent House / Villa</option>
              <option value="Office / Commercial">Office / IT Workspace</option>
              <option value="Shop / Retail">Shop / Retail Store</option>
              <option value="Warehouse / Industrial">Warehouse / Industrial</option>
              <option value="Other">Other Property Type</option>
            </select>
          </div>
        </div>

        {/* Message / Details */}
        <div>
          <label htmlFor="message" className="block text-xs font-semibold text-[#151E4D] uppercase tracking-wider mb-1.5">
            Pest Problem Details <span className="text-[#586174] font-normal lowercase">(optional)</span>
          </label>
          <textarea
            id="message"
            rows={3}
            placeholder="Tell us about the issue: which rooms are affected, sightings frequency, or preferred inspection time."
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full px-3.5 py-2.5 rounded-md border border-[#E3E7EF] text-sm text-[#17213C] bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:border-[#151E4D] focus-visible:ring-[#151E4D]/20 resize-y"
          />
        </div>

        {/* Consent Checkbox */}
        <div>
          <label className="flex items-start gap-2.5 cursor-pointer text-xs text-[#586174] leading-relaxed">
            <input
              type="checkbox"
              checked={formData.consent}
              onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
              className="mt-0.5 rounded border-[#E3E7EF] text-[#ED1834] focus:ring-[#ED1834]"
            />
            <span>
              I consent to being contacted by {BUSINESS_CONFIG.name} via phone, WhatsApp, or email regarding this pest control enquiry. <span className="text-[#ED1834]">*</span>
            </span>
          </label>
          {errors.consent && (
            <p className="mt-1 text-xs text-[#ED1834] flex items-center gap-1">
              <AlertCircle className="w-3 h-3" /> {errors.consent}
            </p>
          )}
        </div>

        {/* Transparent helper text */}
        <p className="text-xs text-[#586174] bg-[#F7F8FC] p-3 rounded-md border border-[#E3E7EF]">
          This form prepares your enquiry in WhatsApp or your email app. Send it there to contact the team.
        </p>

        {/* Action Buttons: Primary WhatsApp & Secondary Prepare Email */}
        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <button
            type="submit"
            className="flex-1 inline-flex items-center justify-center gap-2 bg-[#ED1834] hover:bg-[#C6102B] text-white font-semibold py-3 px-5 rounded-md text-sm shadow-xs transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ED1834] focus-visible:ring-offset-2 active:translate-y-px"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Continue on WhatsApp</span>
          </button>

          <button
            type="button"
            onClick={handleEmailSubmit}
            className="flex-1 inline-flex items-center justify-center gap-2 bg-white hover:bg-[#EDF0F7] text-[#151E4D] border border-[#E3E7EF] font-semibold py-3 px-5 rounded-md text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#151E4D] focus-visible:ring-offset-2"
          >
            <Mail className="w-4 h-4 text-[#ED1834]" />
            <span>Prepare Email</span>
          </button>
        </div>
      </form>
    </div>
  );
};
