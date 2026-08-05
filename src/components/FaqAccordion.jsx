import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FaqAccordion({ faqs, title }) {
  const [open, setOpen] = useState(0);

  return (
    <section className="py-16 md:py-20 px-6 md:px-12 bg-muted/40">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <span className="text-sm font-semibold text-brand-blue tracking-wide uppercase">FAQ</span>
          <h2 className="text-3xl md:text-4xl text-brand-navy mt-3">{title}</h2>
        </div>
        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className={`bg-white rounded-xl border transition-all duration-200 ${
                  isOpen ? 'border-brand-blue/40 shadow-md' : 'border-border shadow-sm'
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="flex items-center justify-between w-full text-left p-5"
                >
                  <span className={`text-base font-bold pr-4 ${isOpen ? 'text-brand-blue' : 'text-brand-navy'}`}>
                    {faq.question}
                  </span>
                  <ChevronDown
                    size={20}
                    className={`flex-shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-brand-blue' : 'text-muted-foreground'
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? 'max-h-[600px]' : 'max-h-0'
                  }`}
                >
                  <p className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}