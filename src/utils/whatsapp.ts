import { ContactFormData } from '../types';
import { BUSINESS_CONFIG } from '../data/business';

export function buildWhatsAppMessage(data: ContactFormData): string {
  const lines = [
    `*Pest Control Enquiry - ${BUSINESS_CONFIG.name}*`,
    `----------------------------------------`,
    `*Enquiry Type:* ${data.enquiryType}`,
    `*Customer Name:* ${data.fullName}`,
    `*Contact Number:* ${data.phone}`,
    data.email ? `*Email:* ${data.email}` : null,
    `*Service Required:* ${data.serviceRequired || 'General Consultation'}`,
    `*Property Type:* ${data.propertyType}`,
    `*Area / Locality in Hyderabad:* ${data.areaOrPincode}`,
    data.message ? `*Additional Notes:* ${data.message}` : null,
    `----------------------------------------`,
    `_Sent via website quote form_`
  ].filter(Boolean);

  return lines.join('\n');
}

export function openWhatsAppEnquiry(data: ContactFormData): { success: boolean; error?: string } {
  const cleanNumber = BUSINESS_CONFIG.whatsapp.replace(/[^0-9]/g, '');
  const message = buildWhatsAppMessage(data);
  const encodedText = encodeURIComponent(message);
  
  const url = `https://wa.me/${cleanNumber}?text=${encodedText}`;
  window.open(url, '_blank', 'noopener,noreferrer');
  return { success: true };
}
