import React from 'react';
import Layout from '@/components/Layout';
import QuoteWizard from '@/components/quote/QuoteWizard';

export default function Quote() {
  return (
    <Layout breadcrumb="Get a Quote">
      <section className="pt-28 md:pt-32 pb-10 px-6 md:px-12 bg-gradient-to-b from-muted/60 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl text-brand-navy">Request your personalized quote</h1>
          <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
            Answer a few questions about what you'd like to insure and we'll build a
            tailored quote request for our office. No obligation — just a real agent
            reviewing your needs and shopping the market on your behalf.
          </p>
        </div>
      </section>

      <section className="px-4 md:px-12 pb-20">
        <QuoteWizard />
      </section>
    </Layout>
  );
}