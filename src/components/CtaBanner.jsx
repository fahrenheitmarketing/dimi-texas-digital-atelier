import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone } from 'lucide-react';
import { Image } from '@/components/ui/image';

export default function CtaBanner({ title, subtitle, image }) {
  return (
    <section className="relative py-20 md:py-24 px-6 md:px-12 overflow-hidden">
      {image && (
        <div className="absolute inset-0">
          <Image src={image} alt="" fittingType="fill" className="w-full h-full" />
          <div className="absolute inset-0 bg-brand-navy/85"></div>
        </div>
      )}
      <div className={`relative max-w-4xl mx-auto text-center ${!image ? 'bg-brand-navy py-20 md:py-24 rounded-2xl' : ''}`}>
        <span className="text-sm font-semibold text-brand-blue-light tracking-wide uppercase">Ready When You Are</span>
        <h2 className="text-3xl md:text-5xl text-white mt-4 mb-5">
          {title}
        </h2>
        <p className="text-lg text-white/70 leading-relaxed mb-8 max-w-2xl mx-auto">
          {subtitle}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link to="/quote" className="btn-primary">
            Get Your Quote
            <ArrowRight size={16} />
          </Link>
          <a
            href="tel:5122923650"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-white/40 text-white font-body text-sm font-semibold rounded-lg hover:bg-white/10 transition-all min-h-[48px]"
          >
            <Phone size={16} />
            Call (512) 292-3650
          </a>
        </div>
      </div>
    </section>
  );
}