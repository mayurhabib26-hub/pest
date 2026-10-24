import { PricingPlan } from '../types';

export interface PricingConfig {
  pricesSupplied: boolean; // Set to true once verified pricing matrix is confirmed by the business
  currency: string;
  quotationFactors: { title: string; description: string }[];
  plans: PricingPlan[];
}

export const PRICING_CONFIG: PricingConfig = {
  // Configurable toggle: false by default since actual prices need to be verified by business owner
  pricesSupplied: false,
  currency: '₹',
  quotationFactors: [
    {
      title: 'Target Pest & Infestation Level',
      description: 'Minor occasional sightings require light perimeter placement, whereas deep-seated colonies (such as German cockroaches or subterranean termites) require multi-stage treatments.'
    },
    {
      title: 'Property Size & Layout',
      description: 'Total built-up square footage, room count (1BHK, 2BHK, 3BHK, Villa), ceiling heights, and outdoor garden areas dictate the quantity of materials and technician time.'
    },
    {
      title: 'Property Purpose',
      description: 'Residential homes have different safety criteria and access needs compared to commercial food businesses, corporate pantries, or manufacturing warehouses with audit requirements.'
    },
    {
      title: 'Treatment Method & Scope',
      description: 'Odorless gel baiting, thermal fogging, high-pressure wood micro-drilling, and tamper-proof rodent stations each require specialized equipment and safety protocols.'
    },
    {
      title: 'Frequency & Visit Cadence',
      description: 'Single one-time treatments for urgent relief versus scheduled quarterly or annual maintenance contracts (AMC) with periodic monitoring.'
    }
  ],
  // Sample verified plan templates (unlocked when pricesSupplied is true)
  plans: [
    {
      id: 'plan-cockroach-std',
      serviceName: 'Cockroach Gel Treatment',
      scope: 'Standard 2BHK / 3BHK Apartment',
      startingPriceINR: 1199,
      priceNote: 'Subject to on-site inspection for severe infestation',
      includes: [
        'Complete kitchen cabinets & appliance undersides',
        'Odorless food-grade gel baiting',
        'Bathroom drainage crack treatment',
        'Preventive tips from certified technician'
      ],
      visitCount: 'Single intensive visit + follow-up guidance',
      exclusions: ['External perimeter fogging', 'Woodwork termite drilling'],
      taxInfo: 'GST as applicable'
    },
    {
      id: 'plan-general-pest',
      serviceName: 'General Pest Control (Home Defense)',
      scope: 'Up to 3BHK Residence',
      startingPriceINR: 1499,
      priceNote: 'Starting price for standard residential layouts',
      includes: [
        'Crawling insect perimeter spray',
        'Silverfish & spider web treatment',
        'Bathroom & utility floor trap flushing',
        'Safe, odorless water-based formulations'
      ],
      visitCount: 'Single visit with seasonal support',
      exclusions: ['Termite structural micro-drilling', 'Bed bug mattress steaming'],
      taxInfo: 'GST as applicable'
    },
    {
      id: 'plan-termite-barrier',
      serviceName: 'Termite Protection Contract',
      scope: 'Apartment or Villa Woodwork',
      startingPriceINR: 3499,
      priceNote: 'Priced per running foot or total wooden fixture area',
      includes: [
        'Acoustic hollow wood and moisture survey',
        'Precision drilling at wooden skirting & door jambs',
        'Termiticide chemical barrier infusion',
        'Discreet color-matched hole sealing'
      ],
      visitCount: 'Initial drilling service + scheduled warranty inspection',
      exclusions: ['Civil carpentry replacement'],
      taxInfo: 'GST as applicable'
    },
    {
      id: 'plan-commercial-ipm',
      serviceName: 'Commercial Integrated Pest Management',
      scope: 'Cafes, Offices, IT Pantries & Clinics',
      startingPriceINR: 2499,
      priceNote: 'Customized based on square footage & audit criteria',
      includes: [
        'Hazard analysis & harbourage mapping',
        'Rodent tamper-evident bait stations',
        'Cockroach & drain fly control',
        'Audit-ready digital logbooks & chemical safety datasheets'
      ],
      visitCount: 'Monthly or bi-monthly scheduled service',
      exclusions: ['Structural building repairs'],
      taxInfo: 'GST as applicable'
    }
  ]
};
