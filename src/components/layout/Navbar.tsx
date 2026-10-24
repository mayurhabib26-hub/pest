'use client';
import React from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Phone, ArrowRight } from 'lucide-react';
import { Button, buttonVariants } from '../ui/button';
import { cn } from '../../lib/utils';
import { MenuToggleIcon } from '../ui/menu-toggle-icon';
import { useScroll } from '../ui/use-scroll';
import { BUSINESS_CONFIG, LOGO_PATH } from '../../data/business';

interface HeaderProps {
  onOpenConsultation?: () => void;
}

export function Header({ onOpenConsultation }: HeaderProps) {
  const [open, setOpen] = React.useState(false);
  const scrolled = useScroll(10);
  const location = useLocation();

  const links = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Service Areas', href: '/service-areas' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ];

  // Close mobile drawer on route change
  React.useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  React.useEffect(() => {
    if (open) {
      // Disable scroll
      document.body.style.overflow = 'hidden';
    } else {
      // Re-enable scroll
      document.body.style.overflow = '';
    }

    // Cleanup when component unmounts
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 mx-auto w-full max-w-7xl border-b border-transparent md:rounded-lg md:border md:transition-all md:ease-out',
        {
          'bg-white/95 supports-[backdrop-filter]:bg-white/80 border-[#E3E7EF] backdrop-blur-lg md:top-3 md:max-w-6xl md:shadow-md':
            scrolled && !open,
          'bg-white': open,
          'bg-white/90 border-[#E3E7EF]/80 backdrop-blur-xs': !scrolled && !open,
        }
      )}
    >
      <nav
        className={cn(
          'flex h-16 w-full items-center justify-between px-4 sm:px-6 md:h-14 md:transition-all md:ease-out',
          {
            'md:px-4': scrolled,
          }
        )}
        aria-label="Main Navigation"
      >
        {/* Brand Logo & Name */}
        <Link
          to="/"
          className="flex items-center gap-2.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ED1834] rounded-sm py-1"
          aria-label={`${BUSINESS_CONFIG.name} Home`}
        >
          <div className="relative shrink-0 flex items-center justify-center w-9 h-9 rounded-full overflow-hidden border border-[#E3E7EF] bg-white shadow-2xs group-hover:border-[#151E4D]/30 transition-colors">
            <img
              src={LOGO_PATH}
              alt={`${BUSINESS_CONFIG.name} Logo`}
              className="w-full h-full object-contain"
              width={36}
              height={36}
              loading="eager"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-extrabold text-[#151E4D] text-sm sm:text-base leading-tight tracking-tight">
              {BUSINESS_CONFIG.name}
            </span>
            <span className="text-[10px] font-medium text-[#586174] tracking-wider uppercase">
              Hyderabad
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden items-center gap-1 lg:gap-1.5 md:flex">
          {links.map((link) => (
            <NavLink
              key={link.href}
              to={link.href}
              className={({ isActive }) =>
                cn(
                  buttonVariants({ variant: 'ghost', size: 'sm' }),
                  'text-xs lg:text-sm font-medium transition-colors px-2.5 lg:px-3',
                  isActive
                    ? 'text-[#ED1834] font-semibold bg-[#FFF0F2] hover:bg-[#FFF0F2] hover:text-[#ED1834]'
                    : 'text-[#17213C] hover:text-[#151E4D]'
                )
              }
            >
              {link.label}
            </NavLink>
          ))}

          {/* Quick Call Button / Trigger */}
          {BUSINESS_CONFIG.isConfigured.phone ? (
            <a
              href={`tel:${BUSINESS_CONFIG.phone}`}
              className={cn(
                buttonVariants({ variant: 'outline', size: 'sm' }),
                'hidden xl:inline-flex items-center gap-1.5 text-xs text-[#151E4D]'
              )}
            >
              <Phone className="w-3.5 h-3.5 text-[#ED1834]" />
              <span>{BUSINESS_CONFIG.phone}</span>
            </a>
          ) : (
            <Button
              variant="outline"
              size="sm"
              onClick={onOpenConsultation}
              className="hidden xl:inline-flex items-center gap-1.5 text-xs text-[#151E4D]"
            >
              <Phone className="w-3.5 h-3.5 text-[#ED1834]" />
              <span>Inspection Info</span>
            </Button>
          )}

          {/* Get a Quote Action Button */}
          <Link to="/contact?type=quote">
            <Button size="sm" className="bg-[#ED1834] hover:bg-[#C6102B] text-white text-xs font-semibold gap-1.5 shadow-xs">
              <span>Get a Quote</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Button>
          </Link>
        </div>

        {/* Mobile Hamburger / Menu Toggle Button */}
        <Button
          size="icon"
          variant="outline"
          onClick={() => setOpen(!open)}
          className="md:hidden border-[#E3E7EF] text-[#151E4D]"
          aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={open}
        >
          <MenuToggleIcon open={open} className="size-5" duration={300} />
        </Button>
      </nav>

      {/* Mobile Slide-down Overlay */}
      <div
        className={cn(
          'bg-white/98 backdrop-blur-md fixed top-16 right-0 bottom-0 left-0 z-50 flex flex-col overflow-hidden border-y border-[#E3E7EF] md:hidden shadow-xl',
          open ? 'block' : 'hidden'
        )}
      >
        <div
          data-slot={open ? 'open' : 'closed'}
          className={cn(
            'data-[slot=open]:animate-in data-[slot=open]:zoom-in-95 data-[slot=closed]:animate-out data-[slot=closed]:zoom-out-95 ease-out',
            'flex h-full w-full flex-col justify-between gap-y-4 p-5 overflow-y-auto'
          )}
        >
          <div className="grid gap-y-1">
            {links.map((link) => (
              <NavLink
                key={link.label}
                to={link.href}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  cn(
                    buttonVariants({
                      variant: 'ghost',
                      className: 'justify-start text-sm py-2.5 px-3 rounded-md w-full font-medium',
                    }),
                    isActive
                      ? 'bg-[#FFF0F2] text-[#ED1834] font-semibold'
                      : 'text-[#17213C] hover:bg-[#EDF0F7]'
                  )
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          <div className="flex flex-col gap-2.5 pt-4 border-t border-[#E3E7EF]">
            {BUSINESS_CONFIG.isConfigured.phone ? (
              <a
                href={`tel:${BUSINESS_CONFIG.phone}`}
                className={cn(buttonVariants({ variant: 'outline' }), 'w-full gap-2 text-sm text-[#151E4D]')}
              >
                <Phone className="w-4 h-4 text-[#ED1834]" />
                <span>Call {BUSINESS_CONFIG.phone}</span>
              </a>
            ) : (
              <Button
                variant="outline"
                className="w-full gap-2 text-sm text-[#151E4D]"
                onClick={() => {
                  setOpen(false);
                  onOpenConsultation?.();
                }}
              >
                <Phone className="w-4 h-4 text-[#ED1834]" />
                <span>Book Inspection</span>
              </Button>
            )}

            <Link
              to="/contact?type=quote"
              onClick={() => setOpen(false)}
              className="w-full"
            >
              <Button className="w-full bg-[#ED1834] hover:bg-[#C6102B] text-white font-semibold gap-2">
                <span>Get a Quote</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

// Export as Navbar for compatibility with Layout.tsx
export { Header as Navbar };
