import React from 'react';

const CARRIERS = [
  'Progressive',
  'SafeCo',
  'Liberty Mutual',
  'The Hartford',
  'SageSure',
  'Allied',
  'Foremost',
  'Farmers',
  'Geico',
  'TWIA',
  'Bristol West',
  'Steadily',
];

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
          {items.map((name, i) => (
            <span
              key={i}
              className="font-display text-2xl md:text-3xl font-semibold text-brand-navy/60 whitespace-nowrap"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}