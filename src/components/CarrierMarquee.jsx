import React, { useState } from 'react';

const CARRIERS = [
  { name: 'Progressive', domain: 'progressive.com' },
  { name: 'SafeCo', domain: 'safeco.com' },
  { name: 'Liberty Mutual', domain: 'libertymutual.com' },
  { name: 'The Hartford', domain: 'thehartford.com' },
  { name: 'SageSure', domain: 'sagesure.com' },
  { name: 'Allied', domain: 'alliedinsurance.com' },
  { name: 'Foremost', domain: 'foremost.com' },
  { name: 'Farmers', domain: 'farmers.com' },
  { name: 'Geico', domain: 'geico.com' },
  { name: 'TWIA', domain: 'twia.org' },
  { name: 'Bristol West', domain: 'bristolwest.com' },
  { name: 'Steadily', domain: 'steadily.com' },
];

function CarrierLogo({ name, domain }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <span className="font-display text-2xl md:text-3xl font-semibold text-brand-navy/60 whitespace-nowrap">
        {name}
      </span>
    );
  }

  return (
    <img
      src={`https://www.google.com/s2/favicons?sz=128&domain=${domain}`}
      alt={`${name} logo`}
      onError={() => setFailed(true)}
      loading="lazy"
      className="h-9 md:h-11 w-9 md:w-11 object-contain opacity-70 hover:opacity-100 transition-opacity whitespace-nowrap"
    />
  );
}

export default function CarrierMarquee() {
  const items = [...CARRIERS, ...CARRIERS];
  return (
    <section className="py-10 border-y border-border bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-6">
        <p className="text-center text-xs font-semibold tracking-[0.2em] uppercase text-muted-foreground">
          We shop the nation's top-rated carriers
        </p>
      </div>
      <div className="relative">
        <div className="flex w-max animate-marquee gap-12 px-6 hover:[animation-play-state:paused]">
          {items.map((c, i) => (
            <CarrierLogo key={i} name={c.name} domain={c.domain} />
          ))}
        </div>
      </div>
    </section>
  );
}