import { BusinessInfo } from '../types';

export const BUSINESS_CONFIG: BusinessInfo = {
  name: '[BUSINESS NAME]',
  tagline: 'Professional Pest Management for Homes & Businesses across Hyderabad',
  // Configure actual business contact info here before launch
  phone: '+91 98765 43210',
  whatsapp: '+91 98765 43210',
  email: 'contact@businessname.example.com',
  city: 'Hyderabad',
  state: 'Telangana',
  address: 'Plot No. 42, Silicon Valley, Madhapur, Hyderabad, Telangana 500081',
  workingHours: 'Monday – Sunday: 8:00 AM – 8:00 PM',
  isConfigured: {
    phone: false, // Set to true once verified phone is supplied
    whatsapp: false, // Set to true once verified WhatsApp number is supplied
    email: false, // Set to true once verified email is supplied
    address: false, // Set to true once verified address is supplied
  },
};

export const LOGO_PATH = '/images/logo.jpeg';
