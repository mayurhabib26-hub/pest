import { ServiceItem } from '../types';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'cockroach-control',
    slug: 'cockroach-control',
    name: 'Cockroach Control',
    shortDescription: 'Targeted gel baiting and crack-and-crevice treatments for German and American cockroaches.',
    fullOverview: 'Cockroach infestations often concentrate in warm, humid zones such as kitchen cabinetry, pipe ducts, appliance undersides, and drainage lines. Our service utilizes methodical crack-and-crevice gel application along with targeted residual sprays in non-food contact zones to break the breeding cycle.',
    iconName: 'ShieldAlert',
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80', // modern clean kitchen inspection zone
    targetPests: ['German Cockroaches', 'American Cockroaches', 'Brown-banded Cockroaches'],
    commonSigns: [
      'Small black specks resembling ground pepper along cabinet hinges and shelves.',
      'Unpleasant musty or oily odour in enclosed kitchen spaces.',
      'Sighting of nocturnal insects near sinks, drains, or microwave units.',
      'Egg capsules (oothecae) behind kitchen appliances or skirting boards.'
    ],
    processSteps: [
      {
        title: 'Inspection & Harbourage Mapping',
        description: 'Comprehensive check of dark voids, sink pipe joints, electrical casing, and food preparation areas.'
      },
      {
        title: 'Precision Gel Baiting',
        description: 'Odorless, non-staining food-grade gel placed in hidden crevices where roaches feed and nest.'
      },
      {
        title: 'Perimeter Barrier Treatment',
        description: 'Targeted boundary spray along baseboards, entry thresholds, and drainage outlets.'
      },
      {
        title: 'Preventive Sanitation Guidance',
        description: 'Clear recommendations on moisture control, crumb management, and sealing entry gaps.'
      }
    ],
    suitableProperties: ['Apartments & Flats', 'Independent Villas', 'Cloud Kitchens & Restaurants', 'Corporate Pantries'],
    prepAndAftercare: {
      preparation: [
        'Clear items out of cabinets directly below kitchen sinks.',
        'Wipe food preparation counters and store open foodstuffs in airtight containers.',
        'Keep floors dry and clean prior to technician arrival.'
      ],
      aftercare: [
        'Do not wipe off or mop away the small gel dots placed in hinge corners.',
        'Allow 2 to 3 weeks for the full gel ingestion cycle to impact the colony.',
        'Maintain daily grease-free kitchen sanitation.'
      ]
    },
    faqs: [
      {
        question: 'Do I need to vacate the house during cockroach gel treatment?',
        answer: 'In most residential gel-bait treatments, vacating is not required because odorless gel is applied directly into hidden crevices. However, if supplementary spray treatments are used in drainage areas, our team will advise a brief ventilation period.'
      },
      {
        question: 'How long before I notice results?',
        answer: 'Cockroach activity usually decreases noticeably within 3 to 7 days as the bait spreads through the nesting points. Complete suppression depends on initial infestation severity.'
      }
    ]
  },
  {
    id: 'termite-control',
    slug: 'termite-control',
    name: 'Termite Control',
    shortDescription: 'Comprehensive subterranean termite inspection, drilling & chemical barrier protection for woodwork.',
    fullOverview: 'Subterranean termites can quietly compromise structural timber, door frames, modular wardrobes, and false ceilings. Our treatment establishes a protective termiticide barrier along structural boundaries and drills discreet inspection channels into affected timber joints.',
    iconName: 'Home',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80', // modern wood flooring & clean interior
    targetPests: ['Subterranean Termites (White Ants)', 'Drywood Termites'],
    commonSigns: [
      'Mud tubes along internal masonry walls, skirting boards, or behind switchboards.',
      'Hollow-sounding wooden door frames, baseboards, or wardrobe backings.',
      'Discarded translucent wings on windowsills or tiled flooring during monsoon seasons.',
      'Fine wood-colored powder or blistering in veneer surfaces.'
    ],
    processSteps: [
      {
        title: 'Acoustic & Moisture Survey',
        description: 'Identifying structural hollows, damp walls, and active mud shelter tubes across the property.'
      },
      {
        title: 'Drilling & Chemical Injection',
        description: 'Micro-hole drilling along door jambs, skirting edges, and wall-floor junctions for termiticide infusion.'
      },
      {
        title: 'Hole Sealing & Touch-Up',
        description: 'Neat color-matched sealing of drilled ports with waterproof compound to preserve surface finish.'
      },
      {
        title: 'Perimeter Boundary Fortification',
        description: 'Treating structural entry points and plumbing sleeves against subterranean infiltration.'
      }
    ],
    suitableProperties: ['Independent Houses & Bungalows', 'Luxury Villas', 'Duplex Apartments', 'Commercial Showrooms & Offices'],
    prepAndAftercare: {
      preparation: [
        'Provide clear 1-foot access along wooden wardrobes, door frames, and fixed furniture.',
        'Cover delicate electronics and fabric upholstery near drilling sites.',
        'Ensure uninterrupted electrical power for drilling equipment.'
      ],
      aftercare: [
        'Allow treated wooden surfaces to dry thoroughly before placing paper documents back.',
        'Address any ongoing plumbing or damp wall leaks to deny termites vital moisture.',
        'Schedule a routine check with our team if any unexplained mud tube re-appears.'
      ]
    },
    faqs: [
      {
        question: 'Does the drilling damage our tiles or wooden finish?',
        answer: 'Our technicians use precision small-diameter masonry and wood drill bits at discreet junction angles, and every hole is carefully sealed with matching filler upon completion.'
      },
      {
        question: 'Do you offer pre-construction termite treatment?',
        answer: 'Yes, we provide soil barrier treatments for foundation trenches and plinth beams for under-construction residential and commercial projects across Hyderabad.'
      }
    ]
  },
  {
    id: 'bed-bug-treatment',
    slug: 'bed-bug-treatment',
    name: 'Bed Bug Treatment',
    shortDescription: 'Deep steam heat & residual contact application targeting mattresses, seams, and headboards.',
    fullOverview: 'Bed bugs are resilient nocturnal parasites that harbour in mattress seams, box springs, headboard crevices, and bedside electrical sockets. We deliver a multi-stage residual contact protocol designed to flush out bugs from hideouts and neutralize eggs.',
    iconName: 'Bed',
    image: 'https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=1200&q=80', // clean neat bedroom suite
    targetPests: ['Cimex lectularius (Common Bed Bug)'],
    commonSigns: [
      'Small, itchy red welts typically appearing in clusters or lines after sleep.',
      'Rust-colored or dark reddish spots on bed linens, mattress piping, or pillows.',
      'Shed bug skins and tiny pearl-white egg casings lodged in mattress tufts.',
      'Distinctive sweet musty scent in heavily infested bedrooms.'
    ],
    processSteps: [
      {
        title: 'Mattress & Frame Strip Inspection',
        description: 'Careful examination of seams, headboard mountings, bed slats, and baseboard crevices.'
      },
      {
        title: 'Targeted Contact Treatment',
        description: 'Application of approved residual formulations into harborages and structural cracks.'
      },
      {
        title: 'Baseboard & Crevice Flushing',
        description: 'Systematic treatment behind wall hangings, electrical outlets, and skirting lines.'
      },
      {
        title: 'Follow-Up Evaluation',
        description: 'Secondary assessment scheduled to break the egg incubation cycle.'
      }
    ],
    suitableProperties: ['Residential Homes & Apartments', 'Student Hostels & PGs', 'Hotels & Guest Houses', 'Serviced Apartments'],
    prepAndAftercare: {
      preparation: [
        'Strip all bed linen, pillow covers, and curtains; wash in hot water and dry thoroughly.',
        'Empty under-bed storage drawers and clear bedside tables.',
        'De-clutter the floor area to give technicians 360-degree access around the bed.'
      ],
      aftercare: [
        'Keep the treated bedroom closed and ventilated for 3 to 4 hours post-treatment.',
        'Allow mattresses and frame edges to dry completely before replacing freshly washed linens.',
        'Avoid vacuuming the treated perimeter baseboards for 7 to 10 days.'
      ]
    },
    faqs: [
      {
        question: 'Is one single treatment enough for bed bugs?',
        answer: 'Because bed bug eggs can be protected inside deep microscopic cracks, a planned two-stage service is usually recommended so any newly hatched nymphs are addressed.'
      },
      {
        question: 'Do we need to throw away our mattress?',
        answer: 'In the vast majority of cases, discarding mattresses is not necessary when treated promptly and thoroughly with professional methods.'
      }
    ]
  },
  {
    id: 'rodent-control',
    slug: 'rodent-control',
    name: 'Rodent Control',
    shortDescription: 'Tamper-resistant bait stations, snap traps, and proofing advice for rats and mice.',
    fullOverview: 'Rats and mice pose health hazards, contaminate food stocks, and cause severe property damage by gnawing electrical cables and false ceilings. Our integrated rodent management pairs strategic exclusion and tamper-proof bait placement with ongoing perimeter monitoring.',
    iconName: 'Box',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80', // clean organized warehouse/utility facility
    targetPests: ['Roof Rats (Rattus rattus)', 'Norway Rats', 'House Mice'],
    commonSigns: [
      'Dark, spindle-shaped droppings in pantries, ceiling voids, or along walls.',
      'Gnaw marks on PVC pipes, wiring conduit, cardboard cartons, or wooden doors.',
      'Scratching or scurrying noises in false ceilings and cavity walls after dusk.',
      'Grease rub marks along baseboards where rodents consistently travel.'
    ],
    processSteps: [
      {
        title: 'Entry Point & Runway Audit',
        description: 'Locating external pipeline penetrations, drain gaps, roof intersections, and rodent pathways.'
      },
      {
        title: 'Tamper-Resistant Station Setup',
        description: 'Deploying locked, heavy-duty bait stations and glue boards in secure, child- and pet-safe areas.'
      },
      {
        title: 'Mechanical Proofing Consultation',
        description: 'Marking critical gaps greater than 6mm for wire mesh, metal flashing, or cement sealing.'
      },
      {
        title: 'Carcass Retrieval & Station Check',
        description: 'Scheduled re-visit to check consumption levels, replenish stations, and manage disposal.'
      }
    ],
    suitableProperties: ['Warehouses & Distribution Centers', 'Commercial Office Buildings', 'Supermarkets & Grocery Stores', 'Independent Residences & Farmhouses'],
    prepAndAftercare: {
      preparation: [
        'Secure all open dry pantry food in hard plastic or glass containers.',
        'Cover and seal indoor garbage bins with tight-fitting lids.',
        'Trim back tree branches or overgrown creepers touching rooflines or balcony railings.'
      ],
      aftercare: [
        'Do not touch or reposition locked bait boxes placed by technicians.',
        'Report any unusual odors or trapped rodents promptly to our helpline for immediate retrieval.'
      ]
    },
    faqs: [
      {
        question: 'Are the bait stations safe around family pets?',
        answer: 'Yes, we utilize locked, tamper-resistant bait stations placed in concealed access runs that cannot be accessed by curious dogs, cats, or children.'
      },
      {
        question: 'Can you seal entry holes for us?',
        answer: 'We provide specific proofing guidelines and can assist with minor mesh sealing on drainage and vent pipes during our inspection visit.'
      }
    ]
  },
  {
    id: 'mosquito-control',
    slug: 'mosquito-control',
    name: 'Mosquito Control',
    shortDescription: 'Thermal fogging, cold ULV misting, and larvicidal treatment for stagnant water sources.',
    fullOverview: 'Mosquitoes in Hyderabad are prime vectors for dengue, malaria, and chikungunya, flourishing in shaded gardens, basement car parks, sump edges, and rainwater collection areas. We provide dual-action larvicide and outdoor cold/thermal misting to suppress populations.',
    iconName: 'Wind',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80', // clean residential landscaped villa
    targetPests: ['Aedes aegypti (Dengue mosquito)', 'Anopheles species', 'Culex species'],
    commonSigns: [
      'High biting activity during dawn and dusk hours on balconies or outdoor seating.',
      'Wriggling mosquito larvae visible in plant drip saucers, open sumps, or rainwater puddles.',
      'Dense swarms resting on foliage, under staircases, or in shaded basement parking.'
    ],
    processSteps: [
      {
        title: 'Breeding Site Identification',
        description: 'Surveying sumps, AC drain trays, terrace gutters, flower pots, and perimeter water accumulations.'
      },
      {
        title: 'Larvicidal Treatment',
        description: 'Applying eco-responsible biological larvicides directly to standing water to stop pupation.'
      },
      {
        title: 'ULV Cold Misting / Fogging',
        description: 'Fine aerosol dispersion targeting adult mosquitoes resting in outdoor shrubs and shaded corners.'
      },
      {
        title: 'Long-Term Source Reduction Advice',
        description: 'Advising building management on drainage flow corrections and mesh covers.'
      }
    ],
    suitableProperties: ['Gated Communities & Societies', 'Corporate Campuses & IT Parks', 'Schools & Educational Institutions', 'Private Villas & Farmhouses'],
    prepAndAftercare: {
      preparation: [
        'Close external doors and windows before outdoor thermal fogging starts.',
        'Cover outdoor fish ponds, bird baths, and pet water bowls.',
        'Keep children and pets indoors during the misting process.'
      ],
      aftercare: [
        'Allow smoke or aerosol mist to disperse (typically 30–45 minutes) before re-entering outdoor areas.',
        'Regularly empty trays under potted plants and change water in coolers.'
      ]
    },
    faqs: [
      {
        question: 'Does fogging harm garden plants or flowers?',
        answer: 'Our outdoor treatments use formulations calibrated for insect control that do not harm mature foliage or flowering shrubs when applied by trained operators.'
      },
      {
        question: 'How frequently should societies conduct mosquito treatment?',
        answer: 'During peak monsoon and post-monsoon months in Hyderabad, weekly or bi-weekly outdoor misting alongside constant larviciding yields the most dependable protection.'
      }
    ]
  },
  {
    id: 'ant-control',
    slug: 'ant-control',
    name: 'Ant Control',
    shortDescription: 'Colony-eliminating bait matrices and perimeter perimeter barriers for indoor & outdoor ant trails.',
    fullOverview: 'Ants infiltrate kitchens, dining tables, electrical switch boxes, and garden borders in search of sugary residues, fats, or moisture. Simple household sprays only kill foraging workers; our method targets the queen and the subterranean colony.',
    iconName: 'Footprints',
    image: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1200&q=80', // bright clean minimalist kitchen
    targetPests: ['Black Carpenter Ants', 'Sugar Ants / Ghost Ants', 'Pharaoh Ants', 'Red Fire Ants'],
    commonSigns: [
      'Dense trail of ants moving across kitchen counters, tiles, or wall joints.',
      'Small piles of fine sawdust or frass near wooden door frames (carpenter ants).',
      'Ants congregating inside electric switch plates or water dispenser spouts.',
      'Sandy mounds on paving joints and lawn edges.'
    ],
    processSteps: [
      {
        title: 'Trail Tracking & Species Identification',
        description: 'Determining foraging behavior and tracing lines back to nesting voids.'
      },
      {
        title: 'Granular & Liquid Bait Placement',
        description: 'Offering slow-acting bait carried by workers deep into the nest to neutralize the queen.'
      },
      {
        title: 'Perimeter Barrier Application',
        description: 'Creating a protective boundary barrier along external thresholds and window sills.'
      },
      {
        title: 'Moisture Source Consultation',
        description: 'Identifying persistent condensation or wall dampness that attracts ant nests.'
      }
    ],
    suitableProperties: ['Residential Apartments', 'Independent Houses', 'Cafes & Bakeries', 'Hospitals & Clinics'],
    prepAndAftercare: {
      preparation: [
        'Avoid spraying over-the-counter aerosol sprays on active trails right before our visit.',
        'Ensure open sweets, fruits, and pet food are temporarily covered.',
        'Clear access along infected wall skirting and kitchen counters.'
      ],
      aftercare: [
        'Do not disturb active ants feeding on the newly placed professional bait dots.',
        'Wipe non-treated counter spaces with plain warm water rather than strong disinfectant.'
      ]
    },
    faqs: [
      {
        question: 'Why did the ants not disappear immediately after baiting?',
        answer: 'Colony baits are intentionally formulated not to kill instantly. Workers must live long enough to transport the active ingredient back to the nest to feed the queen and developing larvae.'
      },
      {
        question: 'Are carpenter ants the same as termites?',
        answer: 'No. Termites consume cellulose and digest wood, whereas carpenter ants hollow out damp wood merely to excavate nesting galleries. Both require specialized, distinct treatment approaches.'
      }
    ]
  },
  {
    id: 'general-pest-control',
    slug: 'general-pest-control',
    name: 'General Pest Control',
    shortDescription: 'Routine preventive multi-pest maintenance covering crawling insects, silverfish, spiders & lizards.',
    fullOverview: 'An all-round baseline maintenance plan ideal for periodic home wellness and commercial audits. Covers common crawling pests including spiders, silverfish, crickets, centipedes, and nuisance lizards through odorless perimeter applications.',
    iconName: 'ShieldCheck',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=80', // clean living room inspection & maintenance
    targetPests: ['Silverfish', 'Spiders', 'House Crickets', 'Lizards (Repellent)', 'Occasional Invaders'],
    commonSigns: [
      'Silver-grey wingless insects darting inside book shelves, wardrobes, or cardboard boxes.',
      'Cobwebs gathering in high ceiling corners and light fixtures.',
      'Lizard droppings along window tracks and curtain pelmets.',
      'Occasional crawling bugs emerging from bathroom floor drains at night.'
    ],
    processSteps: [
      {
        title: 'Whole-Property Hygiene Audit',
        description: 'Checking all rooms, balconies, utility areas, and duct shafts for entry vulnerabilities.'
      },
      {
        title: 'Odorless Residual Spraying',
        description: 'Precision perimeter treatment along floor skirting, corners, and window frames.'
      },
      {
        title: 'Drain & Duct Flushing',
        description: 'Non-corrosive flushing of bathroom and utility floor traps to discourage insect upward movement.'
      },
      {
        title: 'Seasonal Maintenance Advice',
        description: 'Guidance on periodic upkeep intervals tailored to your property environment.'
      }
    ],
    suitableProperties: ['Residential 1/2/3/4 BHK Homes', 'Individual Villas', 'Co-Working Spaces', 'Boutique Offices'],
    prepAndAftercare: {
      preparation: [
        'Move light furniture slightly away from wall edges if possible.',
        'Store open food and drinking water vessels in closed storage.',
        'Cover aquariums and switch off air pumps during application.'
      ],
      aftercare: [
        'Allow treated surfaces to air dry naturally for 60 to 90 minutes.',
        'When mopping subsequently, avoid wiping directly against the floor skirting for 48 hours.'
      ]
    },
    faqs: [
      {
        question: 'How often is general pest control recommended?',
        answer: 'For most Hyderabad residences, a quarterly (every 3 months) or bi-annual treatment provides consistent, year-round pest suppression.'
      },
      {
        question: 'Does the spray leave stains or unpleasant smells?',
        answer: 'We prioritize modern, government-approved water-based formulations that are odorless and do not stain walls, tiles, or wooden trim.'
      }
    ]
  },
  {
    id: 'commercial-pest-management',
    slug: 'commercial-pest-management',
    name: 'Commercial Pest Management',
    shortDescription: 'Audit-ready pest management, audit documentation, and scheduled maintenance for businesses.',
    fullOverview: 'Hyderabad is home to major IT corridors, pharmaceutical hubs, hospitality brands, and educational institutions. We design site-specific Integrated Pest Management (IPM) contracts compliant with health authorities, ISO, and HACCP standards.',
    iconName: 'Building2',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80', // corporate modern commercial facility
    targetPests: ['Commercial Roaches', 'Rodents', 'Stored Product Pests', 'Flies', 'Mosquitoes'],
    commonSigns: [
      'Failed internal or third-party sanitation audits.',
      'Customer complaints regarding sightings in dining, retail, or reception areas.',
      'Damaged packaging or packaging contamination in storerooms.',
      'Fly swarms near loading bays and waste handling stations.'
    ],
    processSteps: [
      {
        title: 'Facility Risk Assessment',
        description: 'Detailed hazard analysis mapping high-risk production, storage, dining, and waste zones.'
      },
      {
        title: 'IPM Protocol Design',
        description: 'Custom blend of mechanical exclusion, electronic fly units, bait stations, and scheduled treatments.'
      },
      {
        title: 'Audit Documentation & Logbooks',
        description: 'Maintaining clear service records, SDS safety data sheets, and chemical usage logs.'
      },
      {
        title: 'Quarterly Trend Analysis',
        description: 'Reviewing trap catches and incidence trends with the client facility director.'
      }
    ],
    suitableProperties: ['IT Parks & Corporate Offices', 'Hotels, Cafes & Fine Dining', 'Pharmaceutical & Biotech Facilities', 'Hospitals & Diagnostics Centers', 'Warehouses & Logistics Hubs'],
    prepAndAftercare: {
      preparation: [
        'Designate a facility coordinator for gate pass access and zone walkthrough.',
        'Coordinate after-hours or weekend service schedules to avoid disrupting business operations.'
      ],
      aftercare: [
        'Review the digital service summary provided after each treatment round.',
        'Address mechanical pest-proofing items flagged in the technician audit report.'
      ]
    },
    faqs: [
      {
        question: 'Can treatments be conducted during night shifts or weekends?',
        answer: 'Yes, commercial contracts are routinely scheduled outside regular operating hours to ensure zero disruption to staff, diners, or operations.'
      },
      {
        question: 'Do you provide compliant documentation for sanitation audits?',
        answer: 'Yes, we supply complete service logs, pesticide registration details, and technician visit sign-offs suitable for health and quality audits.'
      }
    ]
  }
];
