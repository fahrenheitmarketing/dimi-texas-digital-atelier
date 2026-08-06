import React from 'react';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import AnnuitiesIncomeCalculator from '@/components/calculators/AnnuitiesIncomeCalculator';

const ANNUITIES_IMG = 'https://media.base44.com/images/public/6a738b6cc9947068aaaec25d/f4530733d_generated_image.png';
const QUOTE_IMG = 'https://media.base44.com/images/public/6a738b6cc9947068aaaec25d/bfbfa0459_generated_dbfac6bf.png';
const CTA_IMG = 'https://media.base44.com/images/public/6a738b6cc9947068aaaec25d/9b8d9c62e_generated_image.png';

const faqs = [
  {
    question: 'What is an annuity and why would I buy one?',
    answer: 'An annuity is a contract with an insurance company that exchanges a lump sum (or series of payments) for a guaranteed stream of income — either immediately or at a future date. People buy annuities to protect against the risk of outliving their savings, to lock in guaranteed growth, or to create a predictable "personal pension." They are a tool for guaranteed income and principal protection, not market speculation, and they can play an important role in a balanced retirement strategy.',
  },
  {
    question: 'What is a Multi-Year Guaranteed Annuity (MYGA)?',
    answer: 'A MYGA is the simplest annuity: you deposit a lump sum, and the insurance company guarantees a fixed interest rate for a set term — typically 3, 5, 7, or 10 years. Your principal is protected and your growth is predictable, regardless of what the stock market does. At the end of the term, you can renew, withdraw, transfer, or annuitize into income. MYGAs are popular as a low-risk alternative to CDs for the conservative portion of a retirement portfolio.',
  },
  {
    question: "How is a fixed indexed annuity different from a MYGA?",
    answer: 'A MYGA offers a flat, guaranteed rate for the entire term. A fixed indexed annuity credits interest based on the performance of a market index (like the S&P 500), with a floor that protects your principal from market losses and a cap that limits your upside. Indexed annuities offer growth potential tied to the market without market downside, but the credited rate varies year to year. We help you compare both so you choose the right balance of guarantee and growth for your goals.',
  },
  {
    question: 'When can I access my money, and what about taxes?',
    answer: 'Annuities are designed for long-term retirement savings, so withdrawals are generally subject to a surrender charge if taken in the early years of the contract. You can typically withdraw a percentage (often 10%) free of surrender charges each year. Earnings grow tax-deferred — you pay income tax on the growth when you withdraw it, not each year. If funded with pre-tax money (like an IRA rollover), the entire withdrawal is taxable. We coordinate with your tax advisor to make sure an annuity fits your overall plan.',
  },
  {
    question: 'What happens to my annuity if I pass away?',
    answer: 'Most annuities include a death benefit that pays your named beneficiary the remaining account value (or a guaranteed minimum) if you die before annuitizing. With a MYGA, your beneficiary generally receives the full accumulated value. You can also add a death-benefit rider or choose a joint-and-survivor payout so income continues to a spouse. We help you structure the contract so your legacy goals are met whether you live longer than expected or not.',
  },
  {
    question: 'Are annuities safe, and are they right for me?',
    answer: 'Fixed annuities — including MYGAs — guarantee your principal and are backed by the issuing insurance company\'s financial strength, which is why we only work with highly-rated carriers. Annuities are not right for everyone: they shine for people who want guaranteed income, principal protection, or a low-risk place to hold retirement dollars, and who can afford to lock the funds for the contract term. We give you an honest assessment of whether an annuity fits your situation — and if it doesn\'t, we\'ll tell you that too.',
  },
];

export default function Annuities() {
  return (
    <ServicePageTemplate
      breadcrumb="Annuities"
      heroEyebrow="Guaranteed Income • Texas"
      heroTitle="Turn your savings into"
      heroTitleAccent="guaranteed income."
      heroSubtitle="Annuities protect what you've built — with guaranteed growth, principal protection, and income you can't outlive. We help you find the right contract from top-rated carriers."
      heroImage={ANNUITIES_IMG}
      introTitle="Retirement income you can count on."
      introBody={[
        'Outliving your savings is one of the greatest financial risks in retirement. Annuities are uniquely designed to address it — converting a portion of your savings into a guaranteed stream of income that can last for life. Whether you want a Multi-Year Guaranteed Annuity for predictable growth or a lifetime income annuity for a personal pension, the right contract can bring certainty to an uncertain future.',
        'As an independent agency, we shop multiple top-rated insurance carriers to find the annuity that matches your goals — growth, income, or a balance of both. We explain each product in plain language, compare current rates transparently, and make sure you understand the surrender terms, tax treatment, and death benefits before you commit. Your retirement deserves guarantees, not guesswork.',
      ]}
      coverageAreas={[
        { title: 'Multi-Year Guaranteed Annuity (MYGA)', description: 'A lump sum earns a guaranteed fixed interest rate for a set term — principal protection with predictable, CD-like growth.' },
        { title: 'Fixed Indexed Annuity', description: 'Interest credited based on a market index with a floor that protects your principal — growth potential without market downside.' },
        { title: 'Immediate & Lifetime Income', description: 'Convert savings into a guaranteed income stream you can never outlive, with options for single or joint life payouts.' },
        { title: 'Tax-Deferred Growth', description: 'Your earnings grow tax-deferred until withdrawn, letting your money compound faster than in a taxable account.' },
        { title: 'Principal Protection', description: 'Fixed annuities guarantee your principal against market loss — backed by the financial strength of the issuing carrier.' },
        { title: 'Death Benefits', description: 'Name a beneficiary to receive your remaining value, or add riders to pass on a guaranteed minimum to your heirs.' },
        { title: 'Flexible Terms', description: 'Choose guarantee terms from 3 to 10 years to match when you\'ll need income or access to your funds.' },
        { title: 'Spousal & Joint Options', description: 'Structure income to continue for both you and your spouse for as long as either of you lives.' },
        { title: 'Top-Rated Carriers', description: 'We only place annuities with financially strong, highly-rated insurers — so your guarantees are backed by a company built to last.' },
      ]}
      deepDive={{
        title: 'Choosing the annuity that fits your retirement.',
        columns: [
          { title: 'The Right Product', body: 'MYGA, fixed indexed, or income annuity — each serves a different goal. We analyze your timeline, income needs, and risk tolerance to recommend the structure that fits, not the one with the highest commission.' },
          { title: 'The Right Term', body: 'Locking a rate for 3, 5, 7, or 10 years trades flexibility for yield. We model the break-even so you choose a term that aligns with when you\'ll actually need the money.' },
          { title: 'The Right Carrier', body: 'Guaranteed rates and financial strength vary between carriers. As an independent agency, we compare current offers across the market and show you the difference — transparently.' },
        ],
      }}
      faqs={faqs}
      faqTitle="Annuities Questions, Answered"
      ctaTitle="Ready to guarantee your retirement income?"
      ctaSubtitle="Let us shop today's top annuity rates and find a contract that protects your principal and pays you for life. No obligation — just a clear, honest look at your options."
      ctaImage={CTA_IMG}
      serviceKey="annuities"
      calculator={<AnnuitiesIncomeCalculator />}
    />
  );
}