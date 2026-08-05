import React from 'react';
import { Link } from 'react-router-dom';
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
      <section className="relative min-h-[60vh] flex items-center overflow-hidden pt-24">
        <div className="absolute inset-0">
          <Image src={heroImage} alt={heroTitle} fittingType="fill" className="w-full h-full" />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/95 via-brand-navy/75 to-brand-navy/40"></div>
        </div>
        <div className="relative container-luxe py-20">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-brand-blue/20 text-brand-blue-light rounded-full text-xs font-semibold mb-6">
              {heroEyebrow}
            </span>
            <h1 className="text-4xl md:text-6xl text-white leading-tight">
              {heroTitle} <span className="text-brand-red">{heroTitleAccent}</span>
            </h1>
            <p className="text-lg text-white/80 leading-relaxed mt-6 max-w-2xl">
              {heroSubtitle}
            </p>
            <div className="flex flex-col sm:flex-row items-start gap-3 mt-8">
              <Link to="/quote" className="btn-primary">
                Get a Quote
                <ArrowRight size={16} />
              </Link>
              <a
                href="tel:5122923650"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-white/40 text-white font-body text-sm font-semibold rounded-lg hover:bg-white/10 transition-all min-h-[48px]"
              >
                Call (512) 292-3650
              </a>
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coverageAreas.map((area, i) => (
              <div key={i} className="bg-white rounded-xl p-7 border border-border shadow-sm hover:shadow-md transition-all duration-300">
                <div className="w-10 h-10 rounded-lg bg-brand-blue flex items-center justify-center mb-5">
                  <Check size={18} className="text-white" />
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

      {/* FAQ */}
      <FaqAccordion faqs={faqs} title={faqTitle} />

      {/* CTA */}
      <CtaBanner title={ctaTitle} subtitle={ctaSubtitle} image={ctaImage} />
    </Layout>
  );
}