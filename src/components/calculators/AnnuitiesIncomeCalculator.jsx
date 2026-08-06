import React, { useState } from 'react';
import { Calculator, ExternalLink } from 'lucide-react';

const num = (v) => parseFloat(String(v).replace(/[^0-9.]/g, '')) || 0;
const fmt = (n) => '$' + Math.round(n).toLocaleString('en-US');

export default function AnnuitiesIncomeCalculator() {
  const [premium, setPremium] = useState('');
  const [rate, setRate] = useState('5');

  const annual = num(premium) * num(rate) / 100;
  const monthly = annual / 12;

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-border overflow-hidden">
      <div className="bg-brand-navy px-6 md:px-10 py-7">
        <div className="flex items-center gap-3">
          <Calculator size={26} className="text-white" />
          <div>
            <h2 className="text-xl md:text-2xl text-white">Lifetime Income Calculator</h2>
            <p className="text-white/70 text-sm mt-1">
              See how much income your savings can purchase through an annuity.
            </p>
          </div>
        </div>
      </div>

      <div className="px-6 md:px-10 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-semibold text-brand-navy mb-2">Premium / savings to allocate</label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
              <input
                type="text"
                inputMode="decimal"
                value={premium}
                onChange={(e) => setPremium(e.target.value)}
                placeholder="250000"
                className="w-full pl-7 pr-4 py-3 rounded-lg border-2 border-border focus:border-brand-blue focus:outline-none text-foreground placeholder:text-muted-foreground bg-white"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-semibold text-brand-navy mb-2">Assumed payout rate</label>
            <select
              value={rate}
              onChange={(e) => setRate(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border-2 border-border focus:border-brand-blue focus:outline-none text-foreground bg-white"
            >
              {['3', '4', '5', '6', '7'].map((r) => (
                <option key={r} value={r}>{r}%</option>
              ))}
            </select>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-4">
          <div className="rounded-xl bg-brand-blue/5 border border-brand-blue/20 p-6 text-center">
            <p className="text-sm font-semibold text-brand-blue tracking-wide uppercase">Annual Income</p>
            <p className="text-3xl font-extrabold text-brand-navy mt-2">{fmt(annual)}</p>
          </div>
          <div className="rounded-xl bg-brand-blue/5 border border-brand-blue/20 p-6 text-center">
            <p className="text-sm font-semibold text-brand-blue tracking-wide uppercase">Monthly Income</p>
            <p className="text-3xl font-extrabold text-brand-navy mt-2">{fmt(monthly)}</p>
          </div>
        </div>
        <p className="text-xs text-muted-foreground mt-4">
          Estimate only. Actual annuity payouts vary by carrier, age, product, and term.
        </p>

        <div className="mt-6 border-t border-border pt-6">
          <a
            href="https://www.appcelerate.life/dimi-alp"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-blue"
          >
            Explore today's MYGA rates
            <ExternalLink size={15} />
          </a>
        </div>
      </div>
    </div>
  );
}