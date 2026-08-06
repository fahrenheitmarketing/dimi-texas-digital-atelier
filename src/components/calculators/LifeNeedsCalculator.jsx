import React, { useState } from 'react';
import { Calculator, ExternalLink, ArrowRight } from 'lucide-react';

const num = (v) => parseFloat(String(v).replace(/[^0-9.]/g, '')) || 0;
const fmt = (n) => '$' + Math.round(n).toLocaleString('en-US');

export default function LifeNeedsCalculator() {
  const [income, setIncome] = useState('');
  const [years, setYears] = useState('');
  const [debt, setDebt] = useState('');
  const [college, setCollege] = useState('');
  const [burial, setBurial] = useState('');
  const [savings, setSavings] = useState('');

  const total = Math.max(
    0,
    num(income) * num(years) + num(debt) + num(college) + num(burial) - num(savings)
  );

  const moneyField = (label, val, set, ph) => (
    <div>
      <label className="block text-sm font-semibold text-brand-navy mb-2">{label}</label>
      <div className="relative">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
        <input
          type="text"
          inputMode="decimal"
          value={val}
          onChange={(e) => set(e.target.value)}
          placeholder={ph}
          className="w-full pl-7 pr-4 py-3 rounded-lg border-2 border-border focus:border-brand-blue focus:outline-none text-foreground placeholder:text-muted-foreground bg-white"
        />
      </div>
    </div>
  );

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-border overflow-hidden">
      <div className="bg-brand-navy px-6 md:px-10 py-7">
        <div className="flex items-center gap-3">
          <Calculator size={26} className="text-white" />
          <div>
            <h2 className="text-xl md:text-2xl text-white">Life Insurance Needs Calculator</h2>
            <p className="text-white/70 text-sm mt-1">
              Estimate how much life insurance your family would need to maintain their lifestyle.
            </p>
          </div>
        </div>
      </div>

      <div className="px-6 md:px-10 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {moneyField('Annual income your dependents need', income, setIncome, '50000')}
          <div>
            <label className="block text-sm font-semibold text-brand-navy mb-2">Years of financial support needed</label>
            <input
              type="text"
              inputMode="decimal"
              value={years}
              onChange={(e) => setYears(e.target.value)}
              placeholder="15"
              className="w-full px-4 py-3 rounded-lg border-2 border-border focus:border-brand-blue focus:outline-none text-foreground placeholder:text-muted-foreground bg-white"
            />
          </div>
          {moneyField('Debt to pay off (mortgage, loans)', debt, setDebt, '200000')}
          {moneyField("College tuition you'd like to cover", college, setCollege, '80000')}
          {moneyField('Burial / final expenses', burial, setBurial, '15000')}
          {moneyField('Current savings & investments', savings, setSavings, '50000')}
        </div>

        <div className="mt-8 rounded-xl bg-brand-blue/5 border border-brand-blue/20 p-6 text-center">
          <p className="text-sm font-semibold text-brand-blue tracking-wide uppercase">Estimated Coverage Need</p>
          <p className="text-4xl md:text-5xl font-extrabold text-brand-navy mt-2">{fmt(total)}</p>
          <p className="text-xs text-muted-foreground mt-2">
            A planning estimate. A licensed agent will tailor your actual coverage to your goals.
          </p>
        </div>

        <div className="mt-8 border-t border-border pt-6">
          <p className="text-sm font-semibold text-brand-navy mb-3">Ready for the next step?</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="https://www.appcelerate.life/diversified-hq"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-blue"
            >
              Complete my health questionnaire
              <ExternalLink size={15} />
            </a>
            <a
              href="https://www.appcelerate.life/diversifiedinsuranceapp"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              Begin application process
              <ArrowRight size={15} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}