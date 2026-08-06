import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Shield } from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="bg-espresso text-white pt-16 pb-8 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Logo variant="light" className="scale-[0.55] origin-top-left mb-5" />
            <p className="text-sm text-white/60 leading-relaxed max-w-xs">
              An independent insurance agency serving Texas families and businesses with tailored protection since 2012.
            </p>
          </div>

          {/* Coverage */}
          <div>
            <h4 className="text-xs font-bold tracking-wide uppercase text-brand-blue-light mb-5">Coverage</h4>
            <ul className="space-y-3">
              <li><Link to="/auto-insurance" className="text-sm text-white/70 hover:text-brand-red transition-colors">Auto Insurance</Link></li>
              <li><Link to="/home-insurance" className="text-sm text-white/70 hover:text-brand-red transition-colors">Homeowners Insurance</Link></li>
              <li><Link to="/life-insurance" className="text-sm text-white/70 hover:text-brand-red transition-colors">Life Insurance</Link></li>
              <li><Link to="/commercial-insurance" className="text-sm text-white/70 hover:text-brand-red transition-colors">Commercial Insurance</Link></li>
              <li><Link to="/occupational-insurance" className="text-sm text-white/70 hover:text-brand-red transition-colors">Occupational Insurance</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-bold tracking-wide uppercase text-brand-blue-light mb-5">Company</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-sm text-white/70 hover:text-brand-red transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-sm text-white/70 hover:text-brand-red transition-colors">Contact</Link></li>
              <li><Link to="/quote" className="text-sm text-white/70 hover:text-brand-red transition-colors">Get a Quote</Link></li>
              <li><a href="https://dimitexas.epaypolicy.com/" target="_blank" rel="noopener noreferrer" className="text-sm text-white/70 hover:text-brand-red transition-colors">Make a Payment</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-bold tracking-wide uppercase text-brand-blue-light mb-5">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a href="tel:5122923650" className="flex items-start gap-3 text-white/70 hover:text-brand-red transition-colors">
                  <Phone size={16} className="mt-0.5 flex-shrink-0" />
                  <span className="text-sm">(512) 292-3650</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/70">
                <MapPin size={16} className="mt-0.5 flex-shrink-0" />
                <span className="text-sm">Serving Texas Families & Businesses Statewide</span>
              </li>
              <li className="flex items-start gap-3 text-white/70">
                <Shield size={16} className="mt-0.5 flex-shrink-0" />
                <span className="text-sm">Licensed Independent Insurance Agency</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} Diversified Insurance (DIMI Texas). All Rights Reserved.
          </p>
          <p className="text-xs text-white/40">
            Home • Auto • Commercial • Life • Health
          </p>
        </div>
      </div>
    </footer>
  );
}