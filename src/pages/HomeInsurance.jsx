import React from 'react';
import ServicePageTemplate from '@/components/ServicePageTemplate';

const HOME_IMG = 'https://media.base44.com/images/public/6a738b6cc9947068aaaec25d/cd15e64b2_generated_0dbfa99c.png';
const QUOTE_IMG = 'https://media.base44.com/images/public/6a738b6cc9947068aaaec25d/bfbfa0459_generated_dbfac6bf.png';
const CTA_IMG = 'https://media.base44.com/images/public/6a738b6cc9947068aaaec25d/8d8a7f63e_generated_image.png';

const faqs = [
  {
    question: 'What does Texas homeowners insurance typically cover?',
    answer: 'A standard homeowners policy covers your dwelling (the physical structure), other structures (fences, detached garages), personal property (your belongings), loss of use (additional living expenses if your home is uninhabitable), and personal liability. In Texas, it\'s critical to understand what\'s included and excluded — particularly around wind and hail damage, which are among the most common claims in the state. We review every policy line-by-line so there are no surprises.',
  },
  {
    question: 'Why is homeowners insurance so expensive in Texas?',
    answer: 'Texas consistently ranks among the most expensive states for homeowners insurance due to severe weather exposure — hurricanes on the coast, tornadoes in the north, and hailstorms statewide. These events drive up claims and, consequently, premiums. While we can\'t control the weather, we can shop multiple carriers to find the most competitive rate for your specific home and location, and help you explore deductible strategies (like a separate wind/hail deductible) that can meaningfully reduce your premium.',
  },
  {
    question: 'Does homeowners insurance cover flooding?',
    answer: 'No. Flooding is excluded from standard homeowners policies nationwide — including in Texas. If your home is in a flood-prone area (and even some homes outside designated flood zones are at risk), you need a separate flood insurance policy, typically through the National Flood Insurance Program (NFIP) or a private carrier. We can help you assess your flood risk and place the right coverage. Don\'t wait until the water is rising.',
  },
  {
    question: 'What is the difference between actual cash value and replacement cost?',
    answer: 'Actual Cash Value (ACV) pays the depreciated value of your damaged property — what it\'s worth today, not what it would cost to replace. Replacement Cost (RC) pays what it actually costs to buy a new equivalent item, without deducting for depreciation. We strongly recommend replacement cost coverage for both your dwelling and personal property. The premium difference is usually modest, but the payout difference after a loss can be enormous.',
  },
  {
    question: 'How much dwelling coverage do I need?',
    answer: 'Your dwelling coverage limit should reflect the cost to rebuild your home from the ground up — not its market value or tax-assessed value. Reconstruction costs include materials, labor, permits, and debris removal, and can differ significantly from what you paid for the home. We use replacement cost estimators to calculate an accurate rebuild figure, ensuring you\'re neither underinsured (risky) nor overinsured (wasteful).',
  },
  {
    question: 'Does my policy cover my belongings when I\'m traveling?',
    answer: 'Yes, in most cases. Homeowners insurance typically covers your personal property anywhere in the world — so if your laptop is stolen from a hotel room or your luggage is lost, your policy may apply. However, there are sub-limits for certain categories (jewelry, firearms, electronics) and a deductible applies. If you have high-value items, we recommend scheduling them separately on a personal articles floater for broader, often deductible-free protection.',
  },
  {
    question: 'What is a wind and hail deductible, and why does it matter?',
    answer: 'In Texas, many policies include a separate deductible for wind and hail damage — often calculated as a percentage of your dwelling coverage (1%, 2%, or higher) rather than a flat dollar amount. On a $400,000 home, a 2% wind/hail deductible means you\'d pay the first $8,000 out of pocket. Understanding this before a storm hits is essential. We can help you evaluate whether a flat or percentage deductible makes more sense for your situation.',
  },
  {
    question: 'Can I save money by bundling my home and auto insurance?',
    answer: 'In most cases, yes — bundling can save 10–25% on both policies. But the real value of an independent agent is that we compare bundled and unbundled quotes across multiple carriers, so you see the actual best option rather than assuming a discount is the best deal. Sometimes the cheapest combined option comes from two different carriers. We do the math so you don\'t have to.',
  },
  {
    question: 'What is personal liability coverage, and how much do I need?',
    answer: 'Personal liability coverage protects you if someone is injured on your property or you cause damage to someone else\'s property — for example, a guest slips on your steps or your dog bites a visitor. Standard policies include $100,000–$300,000 of liability, but we often recommend higher limits or a separate umbrella policy for $1 million or more, especially if you have significant assets, a pool, or a dog. The cost to increase limits is surprisingly low.',
  },
  {
    question: 'How do I file a homeowners claim?',
    answer: 'Call us at (512) 292-3650 as soon as possible after the damage occurs. We\'ll connect you with your carrier\'s claims department and walk you through the process: document the damage with photos, make temporary repairs to prevent further damage (keep receipts), and prepare an inventory of affected items. We stay involved throughout the process, advocating for you if there are delays or disputes. You\'re never on your own with Diversified Insurance.',
  },
];

export default function HomeInsurance() {
  return (
    <ServicePageTemplate
      breadcrumb="Homeowners Insurance"
      heroEyebrow="Home Coverage • Texas"
      heroTitle="Your home,"
      heroTitleAccent="protected."
      heroSubtitle="From hailstorms to house fires, your home is your most significant investment. We build homeowners coverage that stands between your family and the unexpected — without overcharging for what you don't need."
      heroImage={HOME_IMG}
      introTitle="Coverage built for the realities of Texas living."
      introBody={[
        'Texas is a wonderful place to call home — but it\'s also one of the most weather-exposed states in the country. Hail, wind, tornadoes, and flooding are real risks that demand real coverage. At Diversified Insurance, we don\'t just sell you a standard policy and move on. We evaluate your home\'s replacement cost, review your coverage limits line by line, and shop multiple carriers to find the protection that genuinely fits.',
        'As an independent agency, our loyalty is to you — not to any single insurance company. That means if your rates climb without justification, we can move you to a better option. If a claim gets complicated, we advocate on your behalf. Your home deserves more than a call center. It deserves an agent who knows your name, your home, and your coverage inside and out.',
      ]}
      coverageAreas={[
        { title: 'Dwelling Coverage', description: 'Protects the physical structure of your home — walls, roof, foundation — up to the full replacement cost.' },
        { title: 'Other Structures', description: 'Covers detached garages, fences, sheds, and guest houses on your property.' },
        { title: 'Personal Property', description: 'Protects your belongings — furniture, electronics, clothing — whether at home or anywhere in the world.' },
        { title: 'Loss of Use', description: 'Pays for additional living expenses — hotel, meals, storage — if your home is uninhabitable after a covered loss.' },
        { title: 'Personal Liability', description: 'Protects you if someone is injured on your property or you cause damage to others.' },
        { title: 'Medical Payments', description: 'Covers minor medical bills for guests injured on your property, regardless of fault.' },
        { title: 'Wind & Hail Coverage', description: 'Critical for Texas — we help you understand your deductible options and ensure this essential protection is in place.' },
        { title: 'Water Damage Coverage', description: 'Covers sudden and accidental water damage from burst pipes or appliance failures (not flooding — that requires separate coverage).' },
        { title: 'Scheduled Personal Property', description: 'Itemized coverage for high-value items — jewelry, art, collectibles — with broader protection and no deductible.' },
      ]}
      deepDive={{
        title: 'What separates adequate coverage from excellent coverage.',
        columns: [
          { title: 'Replacement Cost, Not Market Value', body: 'Your coverage limit should reflect what it costs to rebuild — not what your home sells for. We run accurate replacement cost estimates so you\'re never underinsured.' },
          { title: 'The Right Deductibles', body: 'A separate wind/hail deductible can lower your premium but increase your out-of-pocket risk after a storm. We model both scenarios so you choose with eyes open.' },
          { title: 'Gap-Free Protection', body: 'Flood, sewer backup, scheduled valuables — these are the areas where standard policies fall short. We identify and close every gap before it becomes a claim denial.' },
        ],
      }}
      faqs={faqs}
      faqTitle="Homeowners Insurance Questions, Answered"
      ctaTitle="Is your home truly protected?"
      ctaSubtitle="Let us review your current coverage and shop the market. You may be surprised what better protection looks like — often for less than you're paying now."
      ctaImage={CTA_IMG}
      serviceKey="home"
    />
  );
}