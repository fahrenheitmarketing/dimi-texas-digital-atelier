import React from 'react';
import ServicePageTemplate from '@/components/ServicePageTemplate';

const AUTO_IMG = 'https://media.base44.com/images/public/6a738b6cc9947068aaaec25d/be6b9a1bd_generated_b48b15e1.png';
const QUOTE_IMG = 'https://media.base44.com/images/public/6a738b6cc9947068aaaec25d/bfbfa0459_generated_dbfac6bf.png';

const faqs = [
  {
    question: 'How much auto insurance do I need in Texas?',
    answer: 'Texas law requires minimum liability coverage of 30/60/25 — that\'s $30,000 per person for bodily injury, $60,000 per accident, and $25,000 for property damage. However, these minimums often aren\'t enough to protect your assets in a serious accident. We recommend evaluating higher limits and considering full coverage (comprehensive and collision) if your vehicle has value. We\'ll walk you through the trade-offs so you choose with full understanding.',
  },
  {
    question: 'What affects my auto insurance premium in Texas?',
    answer: 'Premiums are calculated based on your driving record, age, gender, marital status, vehicle make and model, annual mileage, ZIP code, credit history (in most states including Texas), coverage limits, and deductibles. Texas\'s high-speed highways and severe weather also contribute to higher-than-average rates. As an independent agency, we shop multiple carriers to find the best rate for your specific profile — not a one-size-fits-all quote.',
  },
  {
    question: 'What is the difference between liability, collision, and comprehensive coverage?',
    answer: 'Liability coverage pays for damage and injuries you cause to others — it\'s required by law. Collision covers damage to your own vehicle from an accident, regardless of fault. Comprehensive covers non-collision damage: theft, vandalism, hail, flooding, falling objects, and animal strikes. Full coverage typically means all three. We help you determine the right combination based on your vehicle\'s value and your financial situation.',
  },
  {
    question: 'Can I get auto insurance with a less-than-perfect driving record?',
    answer: 'Absolutely. Whether you have speeding tickets, an at-fault accident, a DUI, or need an SR-22 filing, we have carriers who specialize in higher-risk drivers. Because we\'re independent, we can place coverage with companies that understand your situation rather than being limited to a single carrier\'s underwriting guidelines. Don\'t assume you\'re uninsurable — let us shop the market for you.',
  },
  {
    question: 'Will my auto insurance cover a rental car after an accident?',
    answer: 'Only if you\'ve added rental reimbursement coverage to your policy. Without it, you\'d pay out of pocket for a rental while your vehicle is being repaired. Rental reimbursement is typically inexpensive — often $2–$5 per month — and we recommend it for most drivers. If you\'re renting a car for travel, your personal auto policy may extend coverage, but always confirm the specifics with us before relying on it.',
  },
  {
    question: 'Does my auto insurance cover other drivers?',
    answer: 'Generally, auto insurance follows the vehicle, not the driver. If someone you\'ve given permission to drive your car causes an accident, your policy typically applies. However, there are exceptions — household members usually need to be listed on the policy, and exclusions may apply for unlisted drivers. Always inform us when household composition changes to avoid coverage gaps.',
  },
  {
    question: 'How can I lower my auto insurance premium?',
    answer: 'The most effective strategies are bundling home and auto with the same carrier, maintaining a clean driving record, increasing your deductibles, taking a defensive driving course, and qualifying for usage-based or telematics programs. But the single best move is letting an independent agent shop multiple carriers — rates can vary by hundreds of dollars for identical coverage. We do that comparison for you, at no cost.',
  },
  {
    question: 'What should I do immediately after a car accident?',
    answer: 'First, ensure everyone is safe and call 911 if needed. Exchange names, insurance, and contact information with the other driver(s). Take photos of all vehicles and the scene. Don\'t admit fault — let the adjusters determine that. Then call us at (512) 292-3650 as soon as possible. We\'ll help you file the claim, explain what to expect, and advocate for you throughout the process. That\'s what having an agent means.',
  },
];

export default function AutoInsurance() {
  return (
    <ServicePageTemplate
      breadcrumb="Auto Insurance"
      heroEyebrow="Auto Coverage • Texas"
      heroTitle="Drive with"
      heroTitleAccent="confidence."
      heroSubtitle="From your daily commute to the open Texas highway, we build auto coverage that protects your vehicle, your passengers, and your peace of mind — at a price that makes sense for your budget."
      heroImage={AUTO_IMG}
      introTitle="Auto insurance, tailored to the way you actually drive."
      introBody={[
        'No two drivers are the same — so why would one policy fit all? At Diversified Insurance, we shop multiple top-rated carriers to find auto coverage that reflects your actual driving habits, your vehicle, and your financial picture. Whether you\'re insuring a single sedan or a household of vehicles, we make sure every discount is applied and every gap is closed.',
        'Texas drivers face unique risks: high-speed highways, severe hail, and a growing population mean accidents and weather damage are real possibilities. Your auto policy should be built to handle them. We don\'t just sell you a policy — we review your coverage, explain your options in plain language, and stand by you when you need to file a claim.',
      ]}
      coverageAreas={[
        { title: 'Liability Coverage', description: 'Bodily injury and property damage protection — required by Texas law and the foundation of any auto policy.' },
        { title: 'Collision Coverage', description: 'Pays for damage to your vehicle from an accident, regardless of who is at fault.' },
        { title: 'Comprehensive Coverage', description: 'Protects against theft, vandalism, hail, flooding, fire, and animal strikes — the risks beyond the roadway.' },
        { title: 'Uninsured/Underinsured Motorist', description: 'Protects you when the other driver has no insurance or not enough. Given that nearly 1 in 6 Texas drivers is uninsured, this matters.' },
        { title: 'Medical Payments', description: 'Covers medical expenses for you and your passengers, regardless of fault — an affordable layer of protection.' },
        { title: 'SR-22 Filings', description: 'We handle SR-22 certificates for drivers who need them, quickly and affordably, through carriers that specialize in this coverage.' },
        { title: 'Rental Reimbursement', description: 'Keeps you mobile with a rental car while your vehicle is being repaired after a covered claim.' },
        { title: 'Roadside Assistance', description: 'Towing, lockouts, flat tires, jump-starts, and fuel delivery — peace of mind for wherever the road takes you.' },
        { title: 'Multi-Vehicle Discounts', description: 'Insure all your household vehicles together and save — plus, stacking with a home policy can reduce premiums even further.' },
      ]}
      deepDive={{
        title: 'The anatomy of smart auto coverage.',
        columns: [
          { title: 'The Right Limits', body: 'Minimum coverage leaves you exposed. We analyze your assets and risk tolerance to recommend liability limits that actually protect you — not just satisfy the state.' },
          { title: 'The Right Deductibles', body: 'Higher deductibles lower your premium but increase your out-of-pocket risk. We model the break-even so you choose a deductible that\'s smart, not arbitrary.' },
          { title: 'The Right Carrier', body: 'Pricing varies dramatically between carriers for the same driver. We compare quotes across our carrier network and show you the difference — transparently.' },
        ],
      }}
      faqs={faqs}
      faqTitle="Auto Insurance Questions, Answered"
      ctaTitle="Ready to find your best auto rate?"
      ctaSubtitle="One conversation, multiple carriers. Let us shop the market and show you what better auto coverage looks like — at a price that respects your budget."
      ctaImage={QUOTE_IMG}
    />
  );
}