import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Car, Home as HomeIcon, HeartHandshake, Building2, HardHat, HeartPulse, PiggyBank, ArrowRight } from 'lucide-react';
import QuoteForm from './QuoteForm';
import { QUOTE_SERVICES, getServiceByKey } from '@/data/quoteForms';

const ICONS = {
  auto: Car,
  home: HomeIcon,
  life: HeartHandshake,
  commercial: Building2,
  occupational: HardHat,
  ltc: HeartPulse,
  annuities: PiggyBank,
};

export default function QuoteWizard() {
  const [params, setParams] = useSearchParams();
  const initial = params.get('service');
  const [selectedKey, setSelectedKey] = useState(
    initial && getServiceByKey(initial) ? initial : null
  );

  useEffect(() => {
    if (selectedKey) {
      setParams({ service: selectedKey }, { replace: true });
    } else if (params.get('service')) {
      setParams({}, { replace: true });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedKey]);

  const service = selectedKey ? getServiceByKey(selectedKey) : null;

  const handleBack = () => {
    setSelectedKey(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="max-w-5xl mx-auto">
      {service ? (
        <QuoteForm service={service} onBack={handleBack} />
      ) : (
        <div>
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl text-brand-navy mb-3">
              Which coverage can we quote for you?
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Select an insurance type to begin a quick questionnaire. We'll email
              your details to our office and a licensed agent will follow up with a
              personalized quote.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {QUOTE_SERVICES.map((s) => {
              const Icon = ICONS[s.key];
              return (
                <button
                  key={s.key}
                  onClick={() => {
                    setSelectedKey(s.key);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="group flex items-start gap-4 text-left bg-white rounded-xl border border-border p-6 shadow-sm hover:shadow-md hover:border-brand-blue/40 transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-brand-blue/10 flex items-center justify-center group-hover:bg-brand-blue transition-colors">
                    <Icon size={24} className="text-brand-blue group-hover:text-white transition-colors" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-brand-navy mb-1 group-hover:text-brand-blue transition-colors">
                      {s.label}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{s.blurb}</p>
                    <span className="inline-flex items-center gap-1 text-sm font-semibold text-brand-blue mt-3">
                      Get started
                      <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}