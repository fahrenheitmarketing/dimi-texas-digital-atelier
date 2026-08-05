import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Image } from '@/components/ui/image';

export default function CtaBanner({ title, subtitle, image }) {
  return (
    <section className="relative py-22 md:py-30 px-6 md:px-12 overflow-hidden">
      {image && (
        <div className="absolute inset-0">
          <Image src={image} alt="" fittingType="fill" className="w-full h-full" />
          <div className="absolute inset-0 bg-espresso/80"></div>
        </div>
      )}
      <div className={`relative max-w-4xl mx-auto text-center ${!image ? 'bg-espresso py-22 md:py-30' : ''}`}>
        <span className="font-body text-[0.65rem] tracking-[0.4em] uppercase text-brand-blue-light">Ready When You Are</span>
        <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-bone mt-4 mb-6">
          {title}
        </h2>
        <p className="font-body text-lg text-bone/70 leading-relaxed mb-10 max-w-2xl mx-auto">
          {subtitle}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://www.lifeinsurancesimply.com/diversifiedinsurance"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-bone text-espresso px-8 py-4 font-body text-xs font-medium tracking-[0.2em] uppercase hover:bg-brand-red hover:text-bone transition-all duration-300 min-h-[48px]"
          >
            Get Your Quote
            <ArrowRight size={16} />
          </a>
          <a href="tel:5122923650" className="inline-flex items-center gap-2 text-bone border border-bone/30 px-8 py-4 font-body text-xs font-medium tracking-[0.2em] uppercase hover:bg-bone/10 transition-all duration-300 min-h-[48px]">
            Call (512) 292-3650
          </a>
        </div>
      </div>
    </section>
  );
}