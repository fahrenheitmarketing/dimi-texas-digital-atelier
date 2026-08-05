import React from 'react';
import { Image } from '@/components/ui/image';
import { Check, ArrowRight } from 'lucide-react';
import Layout from '@/components/Layout';
import FaqAccordion from '@/components/FaqAccordion';
import CtaBanner from '@/components/CtaBanner';

export default function ServicePageTemplate({
  breadcrumb,
  heroEyebrow,
  heroTitle,
  heroTitleAccent,
  heroSubtitle,
  heroImage,
  introTitle,
  introBody,
  coverageAreas,
  deepDive,
  faqs,
  faqTitle,
  ctaTitle,
  ctaSubtitle,
  ctaImage,
}) {
  return (
    <Layout breadcrumb={breadcrumb}>
      {/* HERO */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image src={heroImage} alt={heroTitle} fittingType="fill" className="w-full h-full" />
          <div className="absolute inset-0 bg-gradient-to-r from-espresso/90 via-espresso/70 to-espresso/30"></div>
        </div>
        <div className="relative container-luxe py-20">
          <div className="max-w-3xl">
            <span className="font-body text-[0.65rem] tracking-[0.4em] uppercase text-brand-blue-light">{heroEyebrow}</span>
            <h1 className="font-heading text-5xl md:text-7xl text-bone mt-6 leading-[0.95]">
              {heroTitle} <em className="text-brand-red not-italic">{heroTitleAccent}</em>
            </h1>
            <p className="font-body text-lg md:text-xl text-bone/80 leading-relaxed mt-8 max-w-2xl">
              {heroSubtitle}
            </p>
            <div className="flex flex-col sm:flex-row items-start gap-4 mt-10">
              <a
                href="https://www.lifeinsurancesimply.com/diversifiedinsurance"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-bone text-espresso px-8 py-4 font-body text-xs font-medium tracking-[0.2em] uppercase hover:bg-brand-red hover:text-bone transition-all duration-300 min-h-[48px]"
              >
                Get a Quote
                <ArrowRight size={16} />
              </a>
              <a href="tel:5122923650" className="inline-flex items-center gap-2 text-bone border border-bone/40 px-8 py-4 font-body text-xs font-medium tracking-[0.2em] uppercase hover:bg-bone/10 transition-all duration-300 min-h-[48px]">
                Call (512) 292-3650
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-22 md:py-30 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <span className="font-body text-[0.65rem] tracking-[0.4em] uppercase text-clay">The Overview</span>
          <h2 className="font-heading text-4xl md:text-5xl text-espresso mt-4 mb-8">{introTitle}</h2>
          {introBody.map((para, i) => (
            <p key={i} className="font-body text-lg text-muted-foreground leading-relaxed mb-6">{para}</p>
          ))}
        </div>
      </section>

      {/* COVERAGE AREAS */}
      <section className="py-22 md:py-30 px-6 md:px-12 bg-lume/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="font-body text-[0.65rem] tracking-[0.4em] uppercase text-clay">What We Cover</span>
            <h2 className="font-heading text-4xl md:text-5xl text-espresso mt-4">Coverage that adapts to you.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coverageAreas.map((area, i) => (
              <div key={i} className="bg-bone p-8 border border-border hover:border-clay transition-all duration-300">
                <div className="w-10 h-10 bg-espresso flex items-center justify-center mb-5">
                  <Check size={18} className="text-bone" />
                </div>
                <h3 className="font-heading text-xl text-espresso mb-3">{area.title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DEEP DIVE */}
      {deepDive && (
        <section className="py-22 md:py-30 px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <span className="font-body text-[0.65rem] tracking-[0.4em] uppercase text-clay">The Details</span>
              <h2 className="font-heading text-4xl md:text-5xl text-espresso mt-4">{deepDive.title}</h2>
              <div className="w-12 h-px bg-brand-red mx-auto mt-8"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {deepDive.columns.map((col, i) => (
                <div key={i}>
                  <span className="font-heading text-4xl text-brand-blue-light/40">0{i + 1}</span>
                  <h3 className="font-heading text-2xl text-espresso mt-4 mb-4">{col.title}</h3>
                  <p className="font-body text-base text-muted-foreground leading-relaxed">{col.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <FaqAccordion faqs={faqs} title={faqTitle} />

      {/* CTA */}
      <CtaBanner title={ctaTitle} subtitle={ctaSubtitle} image={ctaImage} />
    </Layout>
  );
}