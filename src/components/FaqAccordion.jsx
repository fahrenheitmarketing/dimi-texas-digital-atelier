import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export default function FaqAccordion({ faqs, title = 'Frequently Asked Questions' }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-22 md:py-30 px-6 md:px-12 bg-card">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="font-body text-[0.65rem] tracking-[0.4em] uppercase text-clay">Knowledge Center</span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-espresso mt-4">{title}</h2>
          <div className="w-12 h-px bg-brand-red mx-auto mt-8"></div>
        </div>

        <div className="divide-y divide-border">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i} className="py-2">
                <button
                  className="flex items-start justify-between w-full text-left py-5 group"
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                >
                  <span className={`font-heading text-xl md:text-2xl pr-8 transition-colors duration-300 ${isOpen ? 'text-brand-red' : 'text-espresso group-hover:text-brand-red'}`}>
                    {faq.question}
                  </span>
                  <span className="flex-shrink-0 mt-1">
                    {isOpen ? <Minus size={20} className="text-brand-red" /> : <Plus size={20} className="text-clay" />}
                  </span>
                </button>
                <div
                  className="overflow-hidden transition-all duration-500 ease-out"
                  style={{ maxHeight: isOpen ? '600px' : '0', opacity: isOpen ? 1 : 0 }}
                >
                  <p className="font-body text-base text-muted-foreground leading-relaxed pb-6 pr-12">
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