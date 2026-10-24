import { ContactFormData } from '../types';
import { BUSINESS_CONFIG } from '../data/business';

export function buildEmailLink(data: ContactFormData): string {
  const subject = `Pest Control ${data.enquiryType} - ${data.serviceRequired || 'Services'} - ${data.fullName}`;
  
  const body = [
    `Hello ${BUSINESS_CONFIG.name} Team,`,
    ``,
    `I would like to request a ${data.enquiryType.toLowerCase()} for my property with the following details:`,
    ``,
    `Name: ${data.fullName}`,
    `Phone: ${data.phone}`,
    data.email ? `Email: ${data.email}` : null,
    `Service Required: ${data.serviceRequired || 'General Consultation'}`,
    `Property Type: ${data.propertyType}`,
    `Hyderabad Locality / Pincode: ${data.areaOrPincode}`,
    data.message ? `Details / Observed Infestation:\n${data.message}` : null,
    ``,
    `Thank you.`
  ].filter((line) => line !== null).join('\n');

  return `mailto:${BUSINESS_CONFIG.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export function openEmailEnquiry(data: ContactFormData): void {
  const mailtoUrl = buildEmailLink(data);
  window.location.href = mailtoUrl;
}
