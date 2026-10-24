export interface BusinessInfo {
  name: string;
  tagline: string;
  phone: string;
  whatsapp: string;
  email: string;
  city: string;
  state: string;
  address: string;
  workingHours: string;
  isConfigured: {
    phone: boolean;
    whatsapp: boolean;
    email: boolean;
    address: boolean;
  };
}

export interface ServiceItem {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  fullOverview: string;
  iconName: string;
  image: string;
  targetPests: string[];
  commonSigns: string[];
  processSteps: { title: string; description: string }[];
  suitableProperties: string[];
  prepAndAftercare: {
    preparation: string[];
    aftercare: string[];
  };
  faqs: { question: string; answer: string }[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Residential' | 'Commercial' | 'Termite Services' | 'General Pest Control';
  image: string;
  description?: string;
  locality?: string;
  isDemonstration?: boolean;
}

export interface PricingPlan {
  id: string;
  serviceName: string;
  scope: string;
  startingPriceINR?: number;
  priceNote?: string;
  includes: string[];
  visitCount?: string;
  exclusions?: string[];
  taxInfo?: string;
}

export interface ServiceArea {
  id: string;
  name: string;
  zone: 'West Hyderabad' | 'Central Hyderabad' | 'North Hyderabad' | 'East Hyderabad' | 'Secunderabad';
  isConfirmed: boolean;
  landmarks: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

export interface ContactFormData {
  fullName: string;
  phone: string;
  email: string;
  serviceRequired: string;
  propertyType: 'Apartment' | 'Independent House / Villa' | 'Office / Commercial' | 'Shop / Retail' | 'Warehouse / Industrial' | 'Other';
  areaOrPincode: string;
  enquiryType: 'Quotation' | 'General Enquiry';
  message: string;
  consent: boolean;
}
