import React from 'react';
import ServicePageTemplate from '@/components/ServicePageTemplate';

const COMMERCIAL_IMG = 'https://media.base44.com/images/public/6a738b6cc9947068aaaec25d/b8a444f91_generated_eb127168.png';
const QUOTE_IMG = 'https://media.base44.com/images/public/6a738b6cc9947068aaaec25d/bfbfa0459_generated_dbfac6bf.png';

const faqs = [
  {
    question: 'What is commercial insurance and why does my Texas business need it?',
    answer: 'Commercial insurance protects your business from financial losses due to property damage, liability claims, employee injuries, and other risks. In Texas, certain coverages like workers\' compensation (or its alternative, occupational insurance) are important for protecting employees, while general liability and commercial property coverage shield your assets. Without adequate commercial insurance, a single lawsuit or fire could mean the end of your business. We assess your specific risks and build a protection program that fits.',
  },
  {
    question: 'Is workers\' compensation required in Texas?',
    answer: 'Texas is the only state that does not require private employers to carry workers\' compensation insurance. However, even if it\'s not mandatory, going without it is a significant risk — an injured employee can sue your business directly, and you\'re liable for workplace injuries regardless of fault. Many Texas businesses choose either traditional workers\' comp or occupational accident insurance as a more affordable alternative. We help you evaluate both and choose the option that best protects your business and employees.',
  },
  {
    question: 'What does a Business Owner\'s Policy (BOP) include?',
    answer: 'A Business Owner\'s Policy bundles general liability and commercial property coverage into a single, cost-effective package designed for small to mid-sized businesses. It typically covers third-party bodily injury, property damage, product liability, and damage to your business property from fire, theft, and certain weather events. BOPs are customizable — we can add coverage for business interruption, equipment breakdown, and more. For most small businesses, a BOP offers better value than buying coverages separately.',
  },
  {
    question: 'What is general liability insurance, and what does it cover?',
    answer: 'General liability insurance is the foundation of business protection. It covers third-party claims of bodily injury (a customer slips in your store), property damage (you or your employee damages a client\'s property), and personal/advertising injury (claims of libel, slander, or copyright infringement). It does not cover damage to your own property or injuries to your employees — those require separate coverage. Every business that interacts with customers, clients, or the public should have general liability coverage.',
  },
  {
    question: 'Does commercial insurance cover business interruption?',
    answer: 'Business interruption coverage (often included in a BOP or commercial property policy) replaces lost income when your business can\'t operate due to a covered event — a fire, a burst pipe, or other physical damage. It covers ongoing expenses like rent and payroll while you rebuild. Some policies also cover losses from events that don\'t directly damage your property but prevent access (like a civil authority order). After the events of recent years, this coverage has become essential for many businesses.',
  },
  {
    question: 'What is commercial auto insurance, and who needs it?',
    answer: 'Commercial auto insurance covers vehicles used for business purposes — delivery trucks, service vehicles, company cars, and even personal vehicles used for work. If you or your employees drive for business, personal auto insurance may not cover work-related accidents. Commercial auto policies offer higher liability limits and coverages tailored to business use. We can also help with hired and non-owned auto coverage if employees use their personal vehicles for work.',
  },
  {
    question: 'Do I need professional liability (E&O) insurance?',
    answer: 'Professional liability insurance — also called Errors and Omissions (E&O) — protects businesses that provide professional services or advice. If a client claims your work caused them financial harm (a missed deadline, a design error, negligent advice), E&O covers legal defense costs and settlements. It\'s essential for consultants, real estate agents, accountants, architects, engineers, and technology professionals. General liability does not cover professional mistakes — E&O fills that gap.',
  },
  {
    question: 'How much does commercial insurance cost in Texas?',
    answer: 'Commercial insurance costs vary enormously based on your industry, number of employees, revenue, property value, location, claims history, and the coverage limits you choose. A small consulting firm might pay $500–$1,000/year for general liability, while a construction company with a fleet of vehicles and high-risk operations might pay tens of thousands. Rather than guessing, let us shop multiple carriers and provide accurate quotes based on your specific business profile — at no cost to you.',
  },
  {
    question: 'Can I bundle different types of commercial coverage?',
    answer: 'Yes, and bundling is often the most cost-effective approach. A Business Owner\'s Policy (BOP) bundles general liability and property. Many carriers also offer package options that include commercial auto, workers\' comp, and umbrella coverage. Bundling typically reduces premiums and simplifies management — one renewal date, one point of contact. However, not every business fits a package. We evaluate your needs and compare both bundled and standalone options to find the best value.',
  },
  {
    question: 'How do I know what coverage my specific business needs?',
    answer: 'This is where an independent agent makes all the difference. We conduct a thorough risk assessment — reviewing your operations, assets, employees, contracts, and industry requirements — then build a coverage program tailored to your business. We explain each coverage in plain terms, identify gaps, and shop multiple carriers for the best fit. As your business grows and changes, we review and adjust your coverage annually. Your business is unique; your insurance should be too.',
  },
];

export default function CommercialInsurance() {
  return (
    <ServicePageTemplate
      breadcrumb="Commercial Insurance"
      heroEyebrow="Business Coverage • Texas"
      heroTitle="Your business,"
      heroTitleAccent="shielded."
      heroSubtitle="You've built something worth protecting. We design commercial insurance programs that safeguard your property, your employees, your reputation, and your bottom line — so you can focus on growth, not risk."
      heroImage={COMMERCIAL_IMG}
      introTitle="Protection as ambitious as your business."
      introBody={[
        'Every business faces risks — lawsuits, property damage, employee injuries, cyber threats, and business interruption. The question isn\'t whether you need commercial insurance; it\'s whether your coverage is comprehensive enough to survive a real loss. At Diversified Insurance, we don\'t sell generic policies. We conduct a thorough risk assessment and build a protection program that fits your industry, your operations, and your growth trajectory.',
        'As an independent agency, we represent you — not the insurance company. We shop multiple top-rated commercial carriers, negotiate the best terms, and stay by your side when you need to file a claim. Whether you\'re a sole proprietor or managing a growing workforce, your business deserves an insurance partner who understands Texas commerce and is committed to your long-term protection.',
      ]}
      coverageAreas={[
        { title: 'General Liability', description: 'Protects against third-party claims of bodily injury, property damage, and personal/advertising injury — the foundation of business protection.' },
        { title: 'Commercial Property', description: 'Covers your building, equipment, inventory, and furniture against fire, theft, wind, hail, and other covered perils.' },
        { title: 'Business Owner\'s Policy (BOP)', description: 'A bundled, cost-effective package of general liability and property coverage designed for small to mid-sized businesses.' },
        { title: 'Workers\' Compensation', description: 'Covers medical costs and lost wages for employees injured on the job — essential protection even when not legally required in Texas.' },
        { title: 'Commercial Auto', description: 'Covers vehicles used for business — delivery trucks, service vehicles, company cars — with higher limits than personal auto.' },
        { title: 'Professional Liability (E&O)', description: 'Protects against claims of negligence, errors, or omissions in professional services — essential for consultants, agents, and advisors.' },
        { title: 'Business Interruption', description: 'Replaces lost income and covers ongoing expenses when your business can\'t operate due to a covered loss.' },
        { title: 'Cyber Liability', description: 'Protects against data breaches, cyberattacks, and the costs of notification, recovery, and legal defense.' },
        { title: 'Commercial Umbrella', description: 'Extends your liability coverage beyond the limits of your underlying policies — critical protection for businesses with significant assets.' },
      ]}
      deepDive={{
        title: 'Building a business protection program, not just a policy.',
        columns: [
          { title: 'Risk Assessment First', body: 'We don\'t start with a policy — we start with your business. We identify your specific exposures, contract requirements, and regulatory obligations before recommending coverage.' },
          { title: 'The Right Carrier Mix', body: 'Different carriers excel at different industries. We match your business to the carrier with the best coverage, pricing, and claims handling for your specific operations.' },
          { title: 'Ongoing Partnership', body: 'Your business changes. So should your coverage. We review your policies annually and proactively — adjusting limits, exploring savings, and closing new gaps as you grow.' },
        ],
      }}
      faqs={faqs}
      faqTitle="Commercial Insurance Questions, Answered"
      ctaTitle="Is your business properly protected?"
      ctaSubtitle="Let us assess your risks and shop the market for the right coverage. A stronger protection program may cost less than you think — and it's worth everything when you need it."
      ctaImage={QUOTE_IMG}
    />
  );
}