import React, { useState } from 'react';
import { ExternalLink, Loader2 } from 'lucide-react';
import Layout from '@/components/Layout';

const QUOTE_URL = 'https://www.lifeinsurancesimply.com/diversifiedinsurance';

export default function Quote() {
  const [loading, setLoading] = useState(true);

  return (
    <Layout breadcrumb="Get a Quote">
      <section className="pt-28 md:pt-32 pb-12 px-6 md:px-12 bg-gradient-to-b from-muted/60 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl text-brand-navy">Get your instant quote</h1>
          <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
            Fill out the form below to compare quotes from multiple top-rated carriers — right here on our site.
          </p>
        </div>
      </section>

      <section className="px-4 md:px-12 pb-16">
        <div className="max-w-5xl mx-auto">
          <div className="relative bg-white rounded-2xl shadow-lg border border-border overflow-hidden">
            {loading && (
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 z-10 bg-white">
                <Loader2 size={32} className="animate-spin text-brand-blue" />
                <p className="text-sm text-muted-foreground">Loading quote tool…</p>
              </div>
            )}
            <iframe
              src={QUOTE_URL}
              title="Diversified Insurance Quote Tool"
              className="w-full"
              style={{ minHeight: '80vh', border: 'none' }}
              onLoad={() => setLoading(false)}
            />
          </div>
          <p className="text-center text-sm text-muted-foreground mt-6 flex items-center justify-center gap-2">
            Trouble loading?
            <a
              href={QUOTE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-brand-blue font-semibold hover:underline"
            >
              Open the quote tool in a new tab
              <ExternalLink size={14} />
            </a>
          </p>
        </div>
      </section>
    </Layout>
  );
}