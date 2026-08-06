import React from 'react';
import ServicePageTemplate from '@/components/ServicePageTemplate';

const OCCUPATIONAL_IMG = 'https://media.base44.com/images/public/6a738b6cc9947068aaaec25d/bb564d1a2_generated_image.png';
const QUOTE_IMG = 'https://media.base44.com/images/public/6a738b6cc9947068aaaec25d/bfbfa0459_generated_dbfac6bf.png';
const CTA_IMG = 'https://media.base44.com/images/public/6a738b6cc9947068aaaec25d/36429db6f_generated_image.png';

const faqs = [
  {
    question: 'What is occupational accident insurance?',
    answer: 'Occupational accident insurance (often called "occupational coverage" or "occ-acc") is an alternative to traditional workers\' compensation. It provides benefits for workplace injuries — including medical expenses, disability, and death benefits — but is purchased from a commercial carrier rather than through the state workers\' comp system. In Texas, where workers\' comp is not mandatory for private employers, occupational accident insurance has become a popular and cost-effective way to protect both employees and the business.',
  },
  {
    question: 'How is occupational insurance different from workers\' compensation?',
    answer: 'Traditional workers\' compensation is a state-regulated system with set benefit levels, a state-administered claims process, and coverage that is essentially guaranteed. Occupational accident insurance is a private market alternative: it\'s purchased from a commercial carrier, benefit levels and terms are negotiated, and it offers more flexibility. The key differences: occupational policies can have coverage limits and exclusions (unlike workers\' comp, which is unlimited), but they are typically 10–50% less expensive and offer more control over the program.',
  },
  {
    question: 'How much can I save with occupational insurance vs. workers\' comp?',
    answer: 'Occupational accident insurance typically costs 10–50% less than traditional workers\' compensation, depending on your industry, payroll, claims history, and the coverage limits you choose. For businesses with a good safety record in lower-hazard industries, the savings can be substantial — often thousands of dollars per year. We run a side-by-side comparison of both options so you can see the exact cost difference and coverage trade-offs for your specific business.',
  },
  {
    question: 'Is occupational insurance legal in Texas?',
    answer: 'Yes. Texas is the only state that does not require private employers to carry workers\' compensation insurance. Employers who choose not to subscribe to workers\' comp (known as "non-subscribers") can instead purchase occupational accident insurance to protect their employees and limit their liability. However, non-subscribers must still comply with certain reporting requirements and face specific legal frameworks if an employee is injured. We ensure your program is fully compliant with Texas regulations.',
  },
  {
    question: 'What does occupational accident insurance cover?',
    answer: 'A typical occupational accident policy covers accidental death and dismemberment, medical expenses for workplace injuries, and disability benefits (both temporary and permanent). Policies are customizable — you choose the benefit levels, deductibles, and coverage limits. Many also include employer\'s liability coverage to protect the business if an injured employee sues. We tailor each policy to your industry and risk profile, ensuring your employees are protected and your business is shielded from liability.',
  },
  {
    question: 'Who should consider occupational insurance instead of workers\' comp?',
    answer: 'Occupational accident insurance is most advantageous for Texas businesses with good safety records in low-to-moderate hazard industries — professional services, transportation, staffing, light manufacturing, and similar operations. Companies with significant premium volume can see dramatic savings. However, it\'s not right for every business. High-hazard industries or those with frequent claims may be better served by traditional workers\' comp. We analyze your claims history, industry, and operations to recommend the right path.',
  },
  {
    question: 'What are the risks of being a Texas non-subscriber?',
    answer: 'If you choose not to carry workers\' comp in Texas, you\'re a "non-subscriber." While this can save money, it comes with risks: injured employees can sue your business directly, and non-subscribers lose certain affirmative defenses in those lawsuits. That\'s why occupational accident insurance is so important — it provides the employee benefits and employer liability protection that mitigate these risks. We also recommend pairing it with a strong safety program and employer practices liability coverage for complete protection.',
  },
  {
    question: 'Can I customize my occupational insurance coverage?',
    answer: 'Absolutely. Unlike traditional workers\' comp, which has set benefit levels, occupational accident insurance is highly customizable. You can choose: medical benefit limits (e.g., $1 million), disability benefit amounts and durations, accidental death and dismemberment benefits, deductibles, and whether to include employer\'s liability coverage. We work with you to design a program that balances comprehensive employee protection with meaningful cost savings — tailored precisely to your business and budget.',
  },
  {
    question: 'How are claims handled with occupational insurance?',
    answer: 'Claims are handled through the commercial carrier you select, not through a state workers\' comp board. This can mean faster, more flexible claims processing and direct communication with the adjuster. Many carriers offer 24/7 claims reporting and nurse case management for serious injuries. We stay involved throughout the process, helping your employee navigate the claim and ensuring the process runs smoothly. The claims experience is often more streamlined than the traditional workers\' comp system.',
  },
  {
    question: 'How do I know if occupational insurance is right for my business?',
    answer: 'The best way to decide is a side-by-side comparison. We analyze your current workers\' comp premium, claims history, industry classification, and payroll, then obtain quotes for both traditional workers\' comp and occupational accident coverage. We present the cost difference, coverage differences, and risk implications in clear, plain language — so you can make an informed decision. There\'s no cost or obligation, and the savings analysis alone is often eye-opening for Texas business owners.',
  },
];

export default function OccupationalInsurance() {
  return (
    <ServicePageTemplate
      breadcrumb="Occupational Insurance"
      heroEyebrow="Occupational Coverage • Texas"
      heroTitle="Smart protection,"
      heroTitleAccent="real savings."
      heroSubtitle="Texas is the only state where workers' comp isn't mandatory — and that's your opportunity. Occupational accident insurance delivers comparable employee protection at 10–50% less. We'll show you how."
      heroImage={OCCUPATIONAL_IMG}
      introTitle="The Texas advantage in workplace injury protection."
      introBody={[
        'If you\'re a Texas business owner still paying for traditional workers\' compensation, you may be overpaying. Occupational accident insurance is a private-market alternative that provides comparable — and sometimes superior — employee benefits at a fraction of the cost. For many Texas businesses, the savings are immediate and significant, often 10–50% less than workers\' comp premiums.',
        'But occupational insurance isn\'t right for every business, and the decision requires careful analysis. At Diversified Insurance, we don\'t just sell you a policy. We run a thorough comparison of both options, evaluate your specific risk profile, and recommend the path that genuinely serves your business and your employees. If occupational coverage is the right fit, we design a custom program. If workers\' comp is better, we\'ll tell you that too. Your interests come first — always.',
      ]}
      coverageAreas={[
        { title: 'Accidental Death & Dismemberment', description: 'Lump-sum benefits to the employee or their family in the event of a fatal or catastrophic workplace accident.' },
        { title: 'Medical Expense Coverage', description: 'Pays for medical treatment resulting from a workplace injury — doctor visits, surgery, rehabilitation, and prescriptions.' },
        { title: 'Disability Benefits', description: 'Income replacement for employees unable to work due to a workplace injury — both temporary and permanent disability.' },
        { title: 'Employer\'s Liability', description: 'Protects your business if an injured employee sues — essential for Texas non-subscribers who lose certain legal defenses.' },
        { title: 'Customizable Limits', description: 'Choose benefit levels, deductibles, and coverage caps that match your risk tolerance and budget — flexibility traditional workers\' comp doesn\'t offer.' },
        { title: '24/7 Claims Reporting', description: 'Round-the-clock claims intake ensures injuries are reported and addressed quickly, reducing claim severity and cost.' },
        { title: 'Nurse Case Management', description: 'Professional case management for serious injuries — coordinating care and facilitating return-to-work for better outcomes.' },
        { title: 'Return-to-Work Programs', description: 'Structured programs that help injured employees return to modified duty safely — reducing claim duration and cost.' },
        { title: 'Texas Compliance', description: 'We ensure your occupational program meets all Texas non-subscriber requirements and reporting obligations — fully compliant.' },
      ]}
      deepDive={{
        title: 'Why occupational insurance makes sense for Texas businesses.',
        columns: [
          { title: 'Dramatic Cost Savings', body: 'Occupational accident insurance typically costs 10–50% less than traditional workers\' comp. For businesses with good safety records, the annual savings can be reinvested in growth, safety programs, or employee benefits.' },
          { title: 'Customizable Protection', body: 'Unlike the one-size-fits-all workers\' comp system, occupational policies are tailored to your industry, risk profile, and budget — you choose benefit levels and limits that make sense for your team.' },
          { title: 'Texas-Tailored Expertise', body: 'Texas\'s unique non-subscriber framework requires specific knowledge. We understand the legal landscape, compliance requirements, and best practices — ensuring your program is both protective and compliant.' },
        ],
      }}
      faqs={faqs}
      faqTitle="Occupational Insurance Questions, Answered"
      ctaTitle="Could your business save 10–50% on workplace injury coverage?"
      ctaSubtitle="There's only one way to find out. Let us run a free, no-obligation comparison of your current workers' comp premium versus occupational accident coverage. The numbers may surprise you."
      ctaImage={CTA_IMG}
      serviceKey="occupational"
    />
  );
}