import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
const QUOTE_PATH = '/quote';
import Logo from './Logo';

const insuranceLinks = [
  { label: 'Auto', path: '/auto-insurance' },
  { label: 'Home', path: '/home-insurance' },
  { label: 'Life', path: '/life-insurance' },
  { label: 'Commercial', path: '/commercial-insurance' },
  { label: 'Occupational', path: '/occupational-insurance' },
  { label: 'LTC', path: '/long-term-care' },
  { label: 'Annuities', path: '/annuities' },
];

const otherLinks = [
  { label: 'About', path: '/about' },
  { label: 'Carriers', path: '/carriers' },
  { label: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [shopOpen, setShopOpen] = useState(false);
  const [mobileShopOpen, setMobileShopOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setShopOpen(false);
    setMobileShopOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const shopActive = insuranceLinks.some((l) => location.pathname === l.path);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'glass-nav py-2 shadow-md' : 'bg-transparent py-3'
        }`}
      >
        <div className="container-luxe flex items-center justify-between">
          <Logo className="scale-[0.9] md:scale-[1.125] origin-left" />

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {/* Shop Insurance dropdown */}
            <div
              className="relative"
              ref={dropdownRef}
              onMouseEnter={() => setShopOpen(true)}
              onMouseLeave={() => setShopOpen(false)}
            >
              <button
                onClick={() => setShopOpen((v) => !v)}
                className={`flex items-center gap-1 text-sm font-semibold transition-colors duration-200 ${
                  shopActive ? 'text-brand-red' : 'text-brand-navy hover:text-brand-blue'
                }`}
              >
                Shop Insurance
                <ChevronDown size={15} className={`transition-transform duration-200 ${shopOpen ? 'rotate-180' : ''}`} />
              </button>
              <div
                className={`absolute left-0 top-full pt-3 transition-all duration-200 ${
                  shopOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-1'
                }`}
              >
                <div className="glass-nav rounded-xl shadow-xl border border-border py-2 min-w-[200px]">
                  {insuranceLinks.map((link) => {
                    const active = location.pathname === link.path;
                    return (
                      <Link
                        key={link.path}
                        to={link.path}
                        className={`block px-4 py-2.5 text-sm font-semibold transition-colors ${
                          active ? 'text-brand-red bg-lume/60' : 'text-brand-navy hover:text-brand-blue hover:bg-lume/40'
                        }`}
                      >
                        {link.label}
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Direct links */}
            {otherLinks.map((link) => {
              const active = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`link-underline text-sm font-semibold transition-colors duration-200 ${
                    active ? 'text-brand-red' : 'text-brand-navy hover:text-brand-blue'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA + phone */}
          <div className="hidden lg:flex items-center gap-5">
            <a href="tel:5122923650" className="flex items-center gap-2 text-brand-navy hover:text-brand-blue transition-colors">
              <Phone size={16} />
              <span className="text-sm font-semibold">(512) 292-3650</span>
            </a>
            <Link to={QUOTE_PATH} className="btn-primary">
              Get a Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 text-brand-navy"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={26} />
          </button>
        </div>
      </header>

      {/* Mobile full-screen overlay */}
      <div
        className={`fixed inset-0 z-[60] bg-brand-navy transition-all duration-300 lg:hidden ${
          menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="flex items-center justify-between px-6 py-4">
          <div className="bg-white rounded-lg p-1">
            <Logo className="scale-[0.75] origin-left" />
          </div>
          <button
            className="p-2 text-white"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            <X size={26} />
          </button>
        </div>
        <nav className="flex flex-col gap-5 mt-6 px-6">
          {/* Shop Insurance collapsible */}
          <div>
            <button
              onClick={() => setMobileShopOpen((v) => !v)}
              className={`flex items-center gap-2 text-2xl font-bold transition-colors ${
                shopActive ? 'text-brand-red' : 'text-white hover:text-brand-blue-light'
              }`}
            >
              Shop Insurance
              <ChevronDown size={22} className={`transition-transform duration-200 ${mobileShopOpen ? 'rotate-180' : ''}`} />
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${mobileShopOpen ? 'max-h-[500px] mt-3' : 'max-h-0'}`}
            >
              <div className="flex flex-col gap-3 pl-3 border-l-2 border-white/20">
                {insuranceLinks.map((link) => {
                  const active = location.pathname === link.path;
                  return (
                    <Link
                      key={link.path}
                      to={link.path}
                      className={`text-lg font-semibold transition-colors ${
                        active ? 'text-brand-red' : 'text-white/85 hover:text-brand-blue-light'
                      }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>

          {otherLinks.map((link, i) => {
            const active = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`text-2xl font-bold transition-colors ${
                  active ? 'text-brand-red' : 'text-white hover:text-brand-blue-light'
                }`}
                style={{
                  opacity: menuOpen ? 1 : 0,
                  transform: menuOpen ? 'translateY(0)' : 'translateY(16px)',
                  transition: 'all 0.4s ease',
                  transitionDelay: `${i * 50}ms`,
                }}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
        <div className="flex flex-col gap-4 mt-10 px-6">
          <a href="tel:5122923650" className="flex items-center gap-3 text-white">
            <Phone size={18} />
            <span className="text-base font-semibold">(512) 292-3650</span>
          </a>
          <Link to={QUOTE_PATH} className="btn-primary w-full max-w-xs">
            Get a Quote
          </Link>
        </div>
      </div>

      {/* Mobile sticky CTA */}
      <Link
        to={QUOTE_PATH}
        className="fixed bottom-5 right-5 z-40 lg:hidden btn-primary shadow-xl"
      >
        Get a Quote
      </Link>
    </>
  );
}