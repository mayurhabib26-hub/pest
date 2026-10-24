# Pest Control Services Website - Hyderabad, Telangana

A modern, responsive, frontend-only local service website built with **React**, **Vite**, **TypeScript**, and **Tailwind CSS v4**.

Designed for a pest control business based in **Hyderabad, Telangana**, incorporating brand colors derived from the official logo:
- **Primary Navy**: `#151E4D`
- **Deep Navy**: `#101737`
- **Brand Red**: `#ED1834`
- **Dark Red**: `#C6102B`
- **Surface Navy**: `#EDF0F7`
- **Surface Red**: `#FFF0F2`

---

## 🚀 Features

- **Floating Responsive Header**: Scroll-adaptive rounded pill navbar with glassmorphism blur and animated mobile menu drawer.
- **Dedicated Routes**:
  - `/` — Homepage with split-layout hero, service quick jumps, marquee, residential vs commercial panels, execution steps, gallery preview, quotation calculator, coverage preview, FAQs, and contact CTA.
  - `/services` & `/services/:slug` — Complete service directory and dedicated detail pages for 8 confirmed treatments (Cockroaches, Termites, Bed Bugs, Rodents, Mosquitoes, Ants, General Pest, Commercial IPM).
  - `/gallery` — Filterable image gallery with accessible modal lightbox and keyboard navigation (`←`, `→`, `Esc`).
  - `/service-areas` — Searchable Hyderabad coverage checker (Gachibowli, Kondapur, Madhapur, HITEC City, Kukatpally, Banjara Hills, Jubilee Hills, Secunderabad, etc.) with unlisted area assistance.
  - `/pricing` — Transparent property quotation calculator and standard starting package matrices.
  - `/about` — Authentic business introduction with zero fabricated statistics or fake certificates.
  - `/contact` — Structured quotation enquiry form with direct pre-formatted handoffs to **WhatsApp** and **Email**.
- **Mobile Contact Bar**: Sticky bottom contact bar for fast mobile access (**Call**, **WhatsApp**, **Get Quote**).
- **Sticky Consultation Launcher**: Desktop button to quickly book consultations or inspections.

---

## 🛠 Tech Stack

- **Framework**: [React 19](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Routing**: [React Router v7](https://reactrouter.com/)
- **Animation**: [Motion](https://motion.dev/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Components**: [shadcn/ui](https://ui.shadcn.com/) patterns, class-variance-authority, clsx, tailwind-merge

---

## 📁 Project Structure

```
├── public/
│   └── images/
│       └── logo.jpeg          # Official company logo
├── src/
│   ├── components/
│   │   ├── forms/             # ContactForm, QuoteCalculator
│   │   ├── gallery/           # GalleryGrid, GalleryLightbox
│   │   ├── layout/            # Navbar, Header, Footer, MobileContactBar, ConsultationModal, Layout
│   │   ├── services/          # ServiceCard
│   │   └── ui/                # Accordion, Button, BlurFade, Marquee, BrandStatement, MenuToggleIcon, etc.
│   ├── data/
│   │   ├── business.ts        # Business contact info, name, address, hours
│   │   ├── services.ts        # 8 confirmed pest treatments with procedures and faqs
│   │   ├── gallery.ts         # Portfolio & inspection images with Hyderabad localities
│   │   ├── pricing.ts         # Pricing matrix and quotation calculation factors
│   │   ├── serviceAreas.ts    # Confirmed Hyderabad zones and landmarks
│   │   └── faqs.ts            # Common client questions & answers
│   ├── lib/
│   │   └── utils.ts           # Class merge helper (cn)
│   ├── pages/                 # Home, Services, ServiceDetail, Gallery, ServiceAreas, Pricing, About, Contact, NotFound
│   ├── types/                 # TypeScript interfaces
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── package.json
└── tsconfig.json
```

---

## ⚙️ Configuration & Customization

Before deploying with real business credentials, configure the following files in `src/data/`:

### 1. Business Profile (`src/data/business.ts`)
Replace `[BUSINESS NAME]`, phone, WhatsApp number, email, and address. Toggle `isConfigured` flags to `true` when actual contact details are verified:
```typescript
export const BUSINESS_CONFIG = {
  name: 'Your Company Name',
  phone: '+91 9XXXXXXXXX',
  whatsapp: '+91 9XXXXXXXXX',
  email: 'contact@yourdomain.com',
  isConfigured: {
    phone: true,
    whatsapp: true,
    email: true,
    address: true,
  },
};
```

### 2. Pricing Matrix (`src/data/pricing.ts`)
Toggle `pricesSupplied` to `true` to display approved package rates, or leave `false` to use the transparent quotation assistant.

---

## 💻 Getting Started

### Prerequisites
- Node.js 18+
- npm or pnpm or yarn

### Installation
```bash
# Clone the repository
git clone <your-github-repo-url>
cd <repo-folder>

# Install dependencies
npm install

# Run local development server
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build
```bash
# Build production bundle
npm run build

# Preview build locally
npm run preview
```

---

## 📄 License
All rights reserved © [BUSINESS NAME] - Pest Control Services in Hyderabad.
