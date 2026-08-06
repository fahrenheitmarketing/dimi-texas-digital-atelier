import React from 'react';
import ServicePageTemplate from '@/components/ServicePageTemplate';

const LTC_IMG = 'https://media.base44.com/images/public/6a738b6cc9947068aaaec25d/cd15e64b2_generated_0dbfa99c.png';
const QUOTE_IMG = 'https://media.base44.com/images/public/6a738b6cc9947068aaaec25d/bfbfa0459_generated_dbfac6bf.png';
const CTA_IMG = 'https://media.base44.com/images/public/6a738b6cc9947068aaaec25d/9be10ea3c_generated_image.png';

const faqs = [
  {
    question: 'What is long-term care insurance and how does it work?',
    answer: 'Long-term care (LTC) insurance helps pay for the cost of care when you can no longer manage everyday activities on your own — bathing, dressing, eating, transferring, toileting, and continence (the "Activities of Daily Living"). When you can no longer perform two of these six as certified by a physician for at least 90 days, or you suffer a severe cognitive impairment, your policy begins paying benefits. Most policies reimburse you for care received at home, in an assisted living facility, or in a skilled nursing facility.',
  },
  {
    question: "Won't Medicare or my health insurance cover long-term care?",
    answer: 'No. Medicare and most private health insurance cover only short-term, skilled, medically-necessary care — not the ongoing custodial help that makes up the majority of long-term care. Medicare pays for a nursing home stay only under strict conditions and for a maximum of 100 days (the average covered stay is just 22 days). Medicaid does cover long-term care, but only after you\'ve spent down your assets to meet eligibility. LTC insurance is designed to protect your savings and give you choices Medicare and Medicaid don\'t.',
  },
  {
    question: 'When should I buy long-term care insurance?',
    answer: 'The best time to buy is in your 50s to mid-60s, while you\'re still in good health. Premiums are significantly lower when you\'re younger and healthier, and you\'re far more likely to qualify. Waiting until health issues arise can make coverage much more expensive — or unavailable entirely. Buying early also locks in lower lifetime premiums and preserves your insurability as you age.',
  },
  {
    question: 'How is the cost of long-term care insurance determined?',
    answer: 'Premiums are based on your age at application, health status, the daily benefit amount you choose, the benefit period (how long benefits last), inflation protection, and the elimination period (your deductible in days). Women typically pay slightly more because they live longer and are more likely to use care. We shop multiple top-rated carriers to find the most competitive rate for your specific profile and help you balance premium against benefit richness.',
  },
  {
    question: 'What are the four core components of an LTC policy I should understand?',
    answer: 'Every LTC policy is built around four levers: (1) the daily or monthly benefit amount, (2) the benefit period — how many years the policy will pay, (3) the elimination period — the number of days you self-pay before benefits begin, and (4) inflation protection, which grows your benefit over time to keep pace with rising care costs. We walk you through each lever in plain language and model the trade-offs so you design a policy that fits your budget and your expectations of care.',
  },
  {
    question: 'What does long-term care actually cost in Texas?',
    answer: 'Costs vary widely by setting and region, but the reality is significant: a year in a private nursing home room often exceeds $80,000, assisted living averages in the mid-$40,000s, and home health aides run tens of thousands annually — and these costs rise every year. We help you estimate the cost in your specific Texas market using current data, then size your LTC coverage accordingly so a future care need doesn\'t become a financial crisis for you or your family.',
  },
  {
    question: 'I have a family history of needing care — is coverage still available?',
    answer: 'In most cases, yes. Family medical history and chronic conditions like diabetes or high blood pressure increase the likelihood of needing care, which is exactly why coverage matters. Many carriers underwrite for current health rather than family history alone. As an independent agency, we approach multiple carriers to find one that views your situation favorably. Don\'t assume you\'re uninsurable — let us shop the market for you.',
  },
];

export default function LongTermCare() {
  return (
    <ServicePageTemplate
      breadcrumb="Long-Term Care Insurance"
      heroEyebrow="Long-Term Care • Texas"
      heroTitle="Plan today for the"
      heroTitleAccent="care you'll need."
      heroSubtitle="Long-term care insurance protects your savings and your family from the rising cost of care — at home, in assisted living, or in a skilled facility. We design coverage that preserves your choices and your dignity."
      heroImage={LTC_IMG}
      introTitle="Protect your independence and your assets."
      introBody={[
        'Most of us will need some form of long-term care in our lifetime — someone turning 65 today has nearly a 70% chance of needing care services. Yet Medicare and standard health insurance cover almost none of it. Without a plan, the cost falls on you and your family, often depleting a lifetime of savings in just a few years.',
        'At Diversified Insurance, we help you face this reality head-on. We explain how long-term care insurance works, walk you through the four core components of a policy, and shop multiple top-rated carriers to find coverage that fits your health, your budget, and your expectations of care. The goal is simple: preserve your choices, protect your assets, and spare your family from becoming unpaid caregivers.',
      ]}
      coverageAreas={[
        { title: 'In-Home Care', description: 'Pays for aides, nurses, and therapists who help you stay in your own home — where most people prefer to receive care.' },
        { title: 'Assisted Living', description: 'Covers room, board, and personal care in an assisted living facility when living at home is no longer safe or practical.' },
        { title: 'Skilled Nursing', description: 'Reimburses care in a skilled nursing facility for the most intensive, round-the-clock needs.' },
        { title: 'Inflation Protection', description: 'Grows your daily benefit over time so your coverage keeps pace with the rising cost of care.' },
        { title: 'Flexible Benefit Periods', description: 'Choose a 2-, 3-, 5-year, or lifetime benefit period based on your risk tolerance and budget.' },
        { title: 'Elimination Period Options', description: 'Adjust your waiting period before benefits begin — a longer wait lowers your premium.' },
        { title: 'Spousal Discounts', description: 'Couples can often secure meaningful discounts when both spouses apply for coverage together.' },
        { title: 'Tax-Qualified Plans', description: 'Tax-qualified LTC policies may let you deduct premiums and receive benefits tax-free — we help you structure it right.' },
        { title: 'Hybrid / Asset-Based', description: 'Combine life insurance or an annuity with LTC benefits for guaranteed premiums and a death benefit if you never use the care benefit.' },
      ]}
      deepDive={{
        title: 'Designing a long-term care policy that actually fits.',
        columns: [
          { title: 'The Right Benefit', body: 'Size your daily benefit and benefit period to the real cost of care in your Texas market — not a generic national average. We use current regional data to set a benefit that genuinely covers the care you expect.' },
          { title: 'The Right Inflation Guard', body: 'Care costs rise every year. A benefit that looks adequate today can fall short in 15 years. We model inflation protection options so your coverage keeps its purchasing power over time.' },
          { title: 'The Right Carrier', body: 'Underwriting and pricing vary significantly between carriers. As an independent agency, we shop the market and place your policy with the carrier that offers the best value for your health profile.' },
        ],
      }}
      faqs={faqs}
      faqTitle="Long-Term Care Questions, Answered"
      ctaTitle="Have you planned for the cost of care?"
      ctaSubtitle="The best time to plan is while you're still healthy. Let us shop the market and design long-term care coverage that protects your savings and preserves your choices — before you need it."
      ctaImage={CTA_IMG}
      serviceKey="ltc"
    />
  );
}