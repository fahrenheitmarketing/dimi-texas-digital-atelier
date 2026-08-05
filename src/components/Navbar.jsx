import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import Logo from './Logo';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Auto', path: '/auto-insurance' },
  { label: 'Home', path: '/home-insurance' },
  { label: 'Life', path: '/life-insurance' },
  { label: 'Commercial', path: '/commercial-insurance' },
  { label: 'Occupational', path: '/occupational-insurance' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 glass-nav ${
          scrolled ? 'py-3 shadow-[0_1px_0_0_rgba(163,147,130,0.3)]' : 'py-5'
        }`}
      >
        <div className="container-luxe flex items-center justify-between">
          <Logo className="scale-90 md:scale-100" />

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const active = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`link-underline font-body text-[0.7rem] tracking-[0.2em] uppercase transition-colors duration-300 ${
                    active ? 'text-brand-red' : 'text-espresso hover:text-brand-red'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA + phone */}
          <div className="hidden lg:flex items-center gap-6">
            <a href="tel:5122923650" className="flex items-center gap-2 text-espresso hover:text-brand-red transition-colors duration-300">
              <Phone size={16} />
              <span className="font-body text-xs tracking-[0.1em]">(512) 292-3650</span>
            </a>
            <a
              href="https://www.lifeinsurancesimply.com/diversifiedinsurance"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Get a Quote
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 text-espresso"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={26} />
          </button>
        </div>
      </header>

      {/* Mobile full-screen overlay */}
      <div
        className={`fixed inset-0 z-[60] bg-espresso transition-all duration-500 lg:hidden ${
          menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="flex items-center justify-between px-6 py-6">
          <Logo variant="light" className="scale-90" />
          <button
            className="p-2 text-bone"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            <X size={26} />
          </button>
        </div>
        <nav className="flex flex-col items-center justify-center gap-8 mt-16">
          {navLinks.map((link, i) => {
            const active = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`font-heading text-3xl transition-all duration-300 ${
                  active ? 'text-brand-red' : 'text-bone hover:text-brand-blue-light'
                }`}
                style={{
                  animationDelay: `${i * 60}ms`,
                  opacity: menuOpen ? 1 : 0,
                  transform: menuOpen ? 'translateY(0)' : 'translateY(20px)',
                  transition: 'all 0.6s cubic-bezier(0.16,1,0.3,1)',
                  transitionDelay: `${i * 60}ms`,
                }}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
        <div className="flex flex-col items-center gap-6 mt-16 px-6">
          <a href="tel:5122923650" className="flex items-center gap-3 text-bone">
            <Phone size={18} />
            <span className="font-body text-sm tracking-[0.1em]">(512) 292-3650</span>
          </a>
          <a
            href="https://www.lifeinsurancesimply.com/diversifiedinsurance"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary w-full max-w-xs"
          >
            Get a Quote
          </a>
        </div>
      </div>

      {/* Mobile sticky CTA */}
      <a
        href="https://www.lifeinsurancesimply.com/diversifiedinsurance"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 z-40 lg:hidden bg-espresso text-bone px-6 py-4 font-body text-xs font-medium tracking-[0.2em] uppercase shadow-xl"
      >
        Get a Quote
      </a>
    </>
  );
}