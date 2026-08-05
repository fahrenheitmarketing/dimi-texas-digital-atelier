import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Shield } from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="bg-espresso text-bone pt-22 pb-10 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Logo variant="light" />
            <p className="font-body text-sm text-bone/60 leading-relaxed mt-6 max-w-xs">
              An independent insurance agency serving Texas families and businesses with tailored protection since 2012.
            </p>
          </div>

          {/* Coverage */}
          <div>
            <h4 className="font-body text-[0.65rem] tracking-[0.3em] uppercase text-brand-blue-light mb-6">Coverage</h4>
            <ul className="space-y-3">
              <li><Link to="/auto-insurance" className="font-body text-sm text-bone/70 hover:text-brand-red transition-colors">Auto Insurance</Link></li>
              <li><Link to="/home-insurance" className="font-body text-sm text-bone/70 hover:text-brand-red transition-colors">Homeowners Insurance</Link></li>
              <li><Link to="/life-insurance" className="font-body text-sm text-bone/70 hover:text-brand-red transition-colors">Life Insurance</Link></li>
              <li><Link to="/commercial-insurance" className="font-body text-sm text-bone/70 hover:text-brand-red transition-colors">Commercial Insurance</Link></li>
              <li><Link to="/occupational-insurance" className="font-body text-sm text-bone/70 hover:text-brand-red transition-colors">Occupational Insurance</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-body text-[0.65rem] tracking-[0.3em] uppercase text-brand-blue-light mb-6">Company</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="font-body text-sm text-bone/70 hover:text-brand-red transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="font-body text-sm text-bone/70 hover:text-brand-red transition-colors">Contact</Link></li>
              <li><a href="https://www.lifeinsurancesimply.com/diversifiedinsurance" target="_blank" rel="noopener noreferrer" className="font-body text-sm text-bone/70 hover:text-brand-red transition-colors">Get a Quote</a></li>
              <li><a href="https://dimitexas.epaypolicy.com/" target="_blank" rel="noopener noreferrer" className="font-body text-sm text-bone/70 hover:text-brand-red transition-colors">Make a Payment</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-body text-[0.65rem] tracking-[0.3em] uppercase text-brand-blue-light mb-6">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a href="tel:5122923650" className="flex items-start gap-3 text-bone/70 hover:text-brand-red transition-colors">
                  <Phone size={16} className="mt-0.5 flex-shrink-0" />
                  <span className="font-body text-sm">(512) 292-3650</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-bone/70">
                <MapPin size={16} className="mt-0.5 flex-shrink-0" />
                <span className="font-body text-sm">Serving Texas Families & Businesses Statewide</span>
              </li>
              <li className="flex items-start gap-3 text-bone/70">
                <Shield size={16} className="mt-0.5 flex-shrink-0" />
                <span className="font-body text-sm">Licensed Independent Insurance Agency</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-bone/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-bone/40 tracking-wide">
            © {new Date().getFullYear()} Diversified Insurance (DIMI Texas). All Rights Reserved.
          </p>
          <p className="font-body text-xs text-bone/40 tracking-wide">
            Home • Auto • Commercial • Life • Health
          </p>
        </div>
      </div>
    </footer>
  );
}