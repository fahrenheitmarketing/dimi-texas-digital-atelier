import React from 'react';
import { Link } from 'react-router-dom';
import { Image } from '@/components/ui/image';
import { ArrowRight, ChevronRight } from 'lucide-react';
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
  serviceKey,
  calculator,
  heroExtraActions,
}) {
  return (
    <Layout>
      {/* HERO */}
      <section className="relative min-h-[78vh] flex flex-col overflow-hidden">
        <div className="absolute inset-0">
          <Image src={heroImage} alt={heroTitle} fittingType="fill" className="w-full h-full grayscale-[0.8] opacity-50" />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent"></div>
        </div>
        <div className="relative container-luxe w-full pt-28 md:pt-32 z-10">
          <div className="flex items-center gap-2 font-body text-xs tracking-[0.15em] uppercase text-muted-foreground">
            <Link to="/" className="hover:text-brand-red transition-colors">Home</Link>
            <ChevronRight size={12} className="text-clay" />
            <span className="text-espresso">{breadcrumb}</span>
          </div>
        </div>
        <div className="relative container-luxe w-full flex-1 flex items-center pb-16 md:pb-20 z-10">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-brand-blue/10 text-brand-blue rounded-full text-xs font-semibold mb-6">
              {heroEyebrow}
            </span>
            <h1 className="text-4xl md:text-6xl text-brand-navy leading-tight">
              {heroTitle} <span className="text-brand-red">{heroTitleAccent}</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mt-6 max-w-2xl">
              {heroSubtitle}
            </p>
            <div className="flex flex-col sm:flex-row items-start gap-3 mt-8">
                  <Link to={`/quote${serviceKey ? `?service=${serviceKey}` : ''}`} className="btn-primary">
                    Get a Quote
                    <ArrowRight size={16} />
                  </Link>
                  <a
                    href="tel:5122923650"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-brand-blue text-brand-blue font-body text-sm font-semibold rounded-lg hover:bg-brand-blue hover:text-white transition-all min-h-[48px]"
                  >
                    Call (512) 292-3650
                  </a>
                  {heroExtraActions}
                </div>
              </div>
            </div>
            </section>

      {/* INTRO */}
      <section className="py-16 md:py-20 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <span className="text-sm font-semibold text-brand-blue tracking-wide uppercase">Overview</span>
          <h2 className="text-3xl md:text-4xl text-brand-navy mt-3 mb-6">{introTitle}</h2>
          {introBody.map((para, i) => (
            <p key={i} className="text-base text-muted-foreground leading-relaxed mb-5">{para}</p>
          ))}
        </div>
      </section>

      {/* COVERAGE AREAS */}
      <section className="py-16 md:py-20 px-6 md:px-12 bg-muted/40">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-brand-blue tracking-wide uppercase">What We Cover</span>
            <h2 className="text-3xl md:text-4xl text-brand-navy mt-3">Coverage that adapts to you.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-xl overflow-hidden border border-border">
            {coverageAreas.map((area, i) => (
              <div key={i} className="group bg-white p-8 hover:bg-lume/40 transition-colors duration-300">
                <div className="flex items-center gap-3 mb-5">
                  <div className="flex-shrink-0 w-9 h-9 rounded-full border border-brand-blue/30 flex items-center justify-center text-brand-blue font-display text-base font-semibold transition-colors duration-300 group-hover:bg-brand-blue group-hover:text-white group-hover:border-brand-blue">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <div className="h-px flex-1 bg-border group-hover:bg-brand-blue/40 transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-bold text-brand-navy mb-2">{area.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DEEP DIVE */}
      {deepDive && (
        <section className="py-16 md:py-20 px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-sm font-semibold text-brand-blue tracking-wide uppercase">The Details</span>
              <h2 className="text-3xl md:text-4xl text-brand-navy mt-3">{deepDive.title}</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {deepDive.columns.map((col, i) => (
                <div key={i} className="bg-white rounded-xl p-8 border border-border shadow-sm">
                  <span className="flex items-center justify-center w-10 h-10 rounded-full bg-brand-blue text-white font-bold mb-5">
                    {i + 1}
                  </span>
                  <h3 className="text-xl font-bold text-brand-navy mb-3">{col.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{col.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* INTERACTIVE CALCULATOR */}
      {calculator && (
        <section className="py-16 md:py-20 px-6 md:px-12 bg-muted/40">
          <div className="max-w-5xl mx-auto">{calculator}</div>
        </section>
      )}

      {/* FAQ */}
      <FaqAccordion faqs={faqs} title={faqTitle} />

      {/* CTA */}
      <CtaBanner title={ctaTitle} subtitle={ctaSubtitle} image={ctaImage} serviceKey={serviceKey} />
    </Layout>
  );
}