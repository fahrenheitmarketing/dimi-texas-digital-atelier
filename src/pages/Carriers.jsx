import React, { useState } from 'react';
import Layout from '@/components/Layout';
import { Phone, Building2, LifeBuoy, AlertTriangle, Headphones } from 'lucide-react';

const carriers = [
  {
    name: 'Progressive',
    numbers: [
      { label: 'Auto — Policyholder Customer Service', phone: '8008765581', display: '800-876-5581' },
      { label: 'Home — Policyholder Customer Service', phone: '18886714405', display: '1-888-671-4405' },
      { label: 'Roadside Assistance', phone: '18007762778', display: '1-800-776-2778' },
      { label: 'Claims', phone: '18002744499', display: '1-800-274-4499' },
    ],
  },
  {
    name: 'SafeCo (Liberty Mutual)',
    numbers: [
      { label: 'Policyholder Customer Service / Support', phone: '8003323226', display: '800-332-3226' },
      { label: 'Claims', phone: '8003323226', display: '800-332-3226', note: 'Press 2 for claims' },
      { label: 'Roadside Assistance', phone: '18777623101', display: '1-877-762-3101' },
    ],
  },
  {
    name: 'The Hartford',
    numbers: [
      { label: 'Policyholder Customer Service / Support', phone: '18007718557', display: '1-800-771-8557' },
      { label: 'Claims', phone: '18002435860', display: '1-800-243-5860' },
      { label: 'Roadside Assistance', phone: '8003227789', display: '800-322-7789' },
    ],
  },
  {
    name: 'SageSure',
    numbers: [
      { label: 'Claims', phone: '8663117243', display: '866-311-7243' },
      { label: 'Customer Service Help Line', phone: '18773044785', display: '877-304-4785', note: 'Listen through prompts, choose Personal Lines, then Policyholder' },
    ],
  },
  {
    name: 'Allied',
    numbers: [
      { label: 'Policyholder Customer Service', phone: '18442002842', display: '(844) 200-2842' },
      { label: 'Claims', phone: '18442002842', display: '(844) 200-2842', note: 'Option 1' },
    ],
  },
];

function iconFor(label) {
  if (/claim/i.test(label)) return <AlertTriangle size={18} className="text-brand-red" />;
  if (/roadside/i.test(label)) return <LifeBuoy size={18} className="text-brand-blue" />;
  if (/customer service|support|help line/i.test(label)) return <Headphones size={18} className="text-brand-navy" />;
  return <Phone size={18} className="text-brand-blue" />;
}

export default function Carriers() {
  const [query, setQuery] = useState('');
  const filtered = carriers.filter((c) =>
    c.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <Layout breadcrumb="Carrier Directory">
      <section className="pt-16 md:pt-20 pb-12 px-6 md:px-12 bg-lume/40">
        <div className="max-w-3xl">
          <span className="text-sm font-semibold text-brand-blue tracking-wide uppercase">Direct Support Lines</span>
          <h1 className="text-4xl md:text-5xl text-brand-navy mt-3 font-heading">Carrier Phone Directory</h1>
          <p className="text-muted-foreground mt-4 leading-relaxed">
            If you're an existing policyholder and need to reach your carrier directly — to report a claim,
            request roadside assistance, or get policy support — use the numbers below. Tap any number to call.
          </p>
          <div className="mt-6">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search carriers…"
              className="w-full max-w-sm rounded-lg border border-border bg-white px-4 py-3 text-sm focus:outline-none focus:border-brand-blue"
            />
          </div>
        </div>
      </section>

      <section className="pb-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((carrier) => (
            <div key={carrier.name} className="card-soft p-6 flex flex-col">
              <div className="flex items-center gap-3 mb-5">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-brand-blue/10">
                  <Building2 size={20} className="text-brand-blue" />
                </div>
                <h2 className="text-lg font-bold text-brand-navy">{carrier.name}</h2>
              </div>
              <div className="space-y-3 flex-1">
                {carrier.numbers.map((n, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="mt-0.5 flex-shrink-0">{iconFor(n.label)}</span>
                    <div className="min-w-0">
                      <a href={`tel:${n.phone}`} className="font-heading font-bold text-brand-navy hover:text-brand-red transition-colors block">
                        {n.display}
                      </a>
                      <p className="text-xs text-muted-foreground">{n.label}</p>
                      {n.note && (
                        <p className="text-xs text-brand-red/80 mt-0.5 italic">{n.note}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        {filtered.length === 0 && (
          <p className="text-center text-muted-foreground mt-12">No carriers match your search.</p>
        )}
        <p className="text-center text-xs text-muted-foreground mt-10">
          Don't see your carrier? Call us at{' '}
          <a href="tel:5122923650" className="text-brand-blue font-semibold hover:text-brand-red">(512) 292-3650</a>
          {' '}and we'll connect you.
        </p>
      </section>
    </Layout>
  );
}