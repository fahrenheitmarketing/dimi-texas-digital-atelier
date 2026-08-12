import React from 'react';
import { ExternalLink } from 'lucide-react';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import LifeNeedsCalculator from '@/components/calculators/LifeNeedsCalculator';

const LIFE_IMG = 'https://media.base44.com/images/public/6a738b6cc9947068aaaec25d/467d1078c_generated_c436bfd7.png';
const QUOTE_IMG = 'https://media.base44.com/images/public/6a738b6cc9947068aaaec25d/bfbfa0459_generated_dbfac6bf.png';
const CTA_IMG = 'https://media.base44.com/images/public/6a738b6cc9947068aaaec25d/c7f0efc62_generated_image.png';

const faqs = [
  {
    question: 'How much life insurance do I need?',
    answer: 'A common rule of thumb is 10–15 times your annual income, but the right amount depends on your specific situation: your income replacement needs, outstanding debts (mortgage, car loans, student loans), future education costs for children, and final expenses. We help you calculate a coverage amount that ensures your family can maintain their standard of living if your income disappears — not an arbitrary number, but a thoughtful figure based on your real life.',
  },
  {
    question: 'What is the difference between term and whole life insurance?',
    answer: 'Term life provides coverage for a specific period — 10, 20, or 30 years — and pays a death benefit if you pass away during that term. It\'s straightforward and affordable, making it ideal for covering specific obligations like a mortgage or raising children. Whole life is permanent — it never expires as long as premiums are paid — and builds cash value over time that you can borrow against. It\'s more expensive but offers lifelong protection and a savings component. Many families use a combination of both.',
  },
  {
    question: 'When should I buy life insurance?',
    answer: 'The best time to buy life insurance is when you\'re young and healthy — premiums are significantly lower, and you lock in that rate for the term of the policy. Major life events — marriage, buying a home, having a child, starting a business — are also key moments to evaluate or increase your coverage. Waiting until health issues arise can make coverage far more expensive or, in some cases, unavailable. If you have people who depend on your income, the time is now.',
  },
  {
    question: 'Does life insurance require a medical exam?',
    answer: 'Traditional term and whole life policies often require a medical exam — typically a simple blood draw and vitals check at no cost to you. However, many carriers now offer simplified-issue (no exam, health questionnaire only) and guaranteed-issue (no exam, no questions) policies. These are faster to obtain but may have lower coverage limits and higher premiums. We\'ll help you determine which path is right for your health profile and coverage needs.',
  },
  {
    question: 'What happens if I outlive my term life policy?',
    answer: 'If you outlive your term policy, the coverage simply ends — there\'s no payout. However, many term policies include a conversion option that allows you to convert to permanent (whole or universal) life insurance without taking a new medical exam, regardless of your current health. Some policies also offer renewal. As your term approaches expiration, we proactively review your options so you\'re never left without coverage when you still need it.',
  },
  {
    question: 'Can I get life insurance if I have health conditions?',
    answer: 'Yes, in most cases. While certain serious conditions may limit your options or increase premiums, there are carriers that specialize in impaired-risk underwriting and guaranteed-issue policies that accept applicants regardless of health. As an independent agency, we can approach multiple carriers to find one that views your health situation favorably. Don\'t assume you\'re uninsurable — let us explore the market for you.',
  },
  {
    question: 'Is the death benefit taxable?',
    answer: 'In most cases, life insurance death benefits are paid to beneficiaries income-tax-free, which is one of the most powerful advantages of life insurance. However, if the policy is owned by an estate or the payout pushes the estate above exemption limits, estate taxes may apply. For high-net-worth individuals, we can structure ownership (such as an irrevocable life insurance trust) to minimize tax exposure. We\'ll connect you with the right structure for your situation.',
  },
  {
    question: 'What is cash value, and how does it work?',
    answer: 'Cash value is a savings component built into permanent life insurance policies (whole life and universal life). A portion of your premium goes toward this account, which grows tax-deferred over time. You can borrow against it, use it to pay premiums, or, in some cases, withdraw from it. Loans and withdrawals reduce the death benefit if not repaid. Cash value growth is slower in the early years, so permanent insurance is a long-term commitment — we\'ll help you decide if it fits your financial strategy.',
  },
  {
    question: 'Should I buy life insurance through my employer or on my own?',
    answer: 'Employer-provided life insurance is a valuable benefit, but it has limitations: coverage is typically 1–2 times your salary (often insufficient), it\'s tied to your employment (you lose it if you change jobs), and you can\'t customize it. We recommend treating employer coverage as supplemental and owning a personal policy that you control — one that stays with you regardless of where you work. We can coordinate both for maximum protection.',
  },
  {
    question: 'How quickly can I get life insurance coverage?',
    answer: 'Simplified-issue and guaranteed-issue policies can be approved in days — sometimes instantly. Traditional policies with a medical exam typically take 4–8 weeks from application to approval, depending on how quickly exam results and medical records are obtained. We streamline the process by guiding you through the application, scheduling the exam at your convenience, and following up with the carrier to keep things moving. Start now — every day without coverage is a risk.',
  },
];

export default function LifeInsurance() {
  return (
    <ServicePageTemplate
      breadcrumb="Life Insurance"
      heroEyebrow="Life Coverage • Texas"
      heroTitle="Their future,"
      heroTitleAccent="secured."
      heroSubtitle="Life insurance isn't about you — it's about the people who count on you. We help you choose coverage that ensures your family's dreams survive the unexpected, no matter what tomorrow brings."
      heroImage={LIFE_IMG}
      introTitle="The most selfless purchase you'll ever make."
      introBody={[
        'Life insurance is the one policy you buy for someone else. It\'s the mortgage that gets paid, the college tuition that gets covered, the daily living expenses that continue — all without your income. If anyone depends on you financially, life insurance isn\'t optional. It\'s essential.',
        'At Diversified Insurance, we cut through the confusion. Term, whole, universal — we explain each option in plain language, calculate exactly how much coverage you need, and shop multiple top-rated carriers to find the best rate. No pressure, no jargon. Just clear guidance and a policy that genuinely protects the people you love.',
      ]}
      coverageAreas={[
        { title: 'Term Life Insurance', description: 'Affordable, straightforward coverage for a set period — ideal for replacing income during your working years or covering a mortgage.' },
        { title: 'Whole Life Insurance', description: 'Permanent protection that never expires, with guaranteed cash value growth and level premiums for life.' },
        { title: 'Universal Life Insurance', description: 'Permanent coverage with flexible premiums and death benefits, plus cash value tied to market performance.' },
        { title: 'Income Replacement', description: 'Coverage calculated to replace your salary for the years your family would have depended on it.' },
        { title: 'Mortgage Protection', description: 'Coverage designed to pay off your home if you pass away, so your family never faces losing it.' },
        { title: 'Final Expense Coverage', description: 'Smaller policies designed to cover funeral costs, medical bills, and other end-of-life expenses — no burden on family.' },
        { title: 'Children\'s Life Insurance', description: 'Affordable permanent coverage for your children that locks in low rates and protects their future insurability.' },
        { title: 'Key Person Insurance', description: 'Protects your business if a key employee or owner passes away — essential for business continuity.' },
        { title: 'Policy Conversion', description: 'Convert your term policy to permanent coverage without a medical exam, regardless of health changes.' },
      ]}
      deepDive={{
        title: 'Choosing the right life insurance strategy.',
        columns: [
          { title: 'The Right Type', body: 'Term, whole, or universal — each serves a different purpose. We analyze your goals, budget, and timeline to recommend the structure that fits, not the one that pays the highest commission.' },
          { title: 'The Right Amount', body: 'Too little coverage leaves your family exposed; too much wastes money. We calculate based on your actual income, debts, and dependents — a figure that\'s right for your life, not a guess.' },
          { title: 'The Right Carrier', body: 'Life insurance rates and underwriting vary significantly between carriers. As an independent agency, we shop the market and place your policy with the carrier that offers the best combination of price and financial strength.' },
        ],
      }}
      faqs={faqs}
      faqTitle="Life Insurance Questions, Answered"
      ctaTitle="Protect the people who depend on you."
      ctaSubtitle="The best time to buy life insurance was yesterday. The second-best time is today. Let us find the right coverage at the right price — before you need it."
      ctaImage={CTA_IMG}
      serviceKey="life"
      heroExtraActions={
        <a
          href="https://www.appcelerate.life/dimi-lp"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-brand-navy text-white font-body text-sm font-semibold rounded-lg hover:bg-brand-navy/90 transition-all min-h-[48px]"
        >
          Get an instant life quote
          <ExternalLink size={16} />
        </a>
      }
      calculator={<LifeNeedsCalculator />}
    />
  );
}