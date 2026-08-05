import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { ChevronRight } from 'lucide-react';

export default function Layout({ children, breadcrumb }) {
  return (
    <div className="min-h-screen bg-bone">
      <Navbar />
      {breadcrumb && (
        <div className="pt-32 md:pt-36 pb-6 px-6 md:px-12 bg-lume/40 border-b border-border">
          <div className="max-w-7xl mx-auto flex items-center gap-2 font-body text-xs tracking-[0.15em] uppercase text-muted-foreground">
            <Link to="/" className="hover:text-brand-red transition-colors">Home</Link>
            <ChevronRight size={12} className="text-clay" />
            <span className="text-espresso">{breadcrumb}</span>
          </div>
        </div>
      )}
      <main>{children}</main>
      <Footer />
    </div>
  );
}