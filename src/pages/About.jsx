import React from 'react';
import { Shield, Heart, Award, Users, ArrowRight, Check } from 'lucide-react';
import { Image } from '@/components/ui/image';
import Layout from '@/components/Layout';
import FaqAccordion from '@/components/FaqAccordion';
import CtaBanner from '@/components/CtaBanner';

const ABOUT_IMG = 'https://media.base44.com/images/public/6a738b6cc9947068aaaec25d/6191d0c34_generated_951d992b.png';
const QUOTE_IMG = 'https://media.base44.com/images/public/6a738b6cc9947068aaaec25d/bfbfa0459_generated_dbfac6bf.png';

const faqs = [
  {
    question: 'What does it mean that Diversified Insurance is an "independent" agency?',
    answer: 'An independent insurance agency is not employed by any single insurance company. Instead, we partner with multiple top-rated carriers, which means we can shop the market on your behalf to find the best combination of coverage and price. If your needs change, if rates increase, or if you simply want to explore options, we can move you to a different carrier without you having to find a new agent. You get choice, advocacy, and continuity — all in one relationship.',
  },
  {
    question: 'How long has Diversified Insurance been serving Texas?',
    answer: 'Diversified Insurance (DIMI Texas) has been serving Texas families and businesses since 2012. Over more than a decade, we\'ve built relationships with top-rated carriers, navigated countless claims alongside our clients, and earned a reputation for honest, personalized service. Our longevity is a reflection of the trust our clients place in us — and we work every day to earn it anew.',
  },
  {
    question: 'What geographic area does Diversified Insurance serve?',
    answer: 'We are a Texas-licensed agency serving clients across the entire state. Whether you\'re in Austin, Dallas, Houston, San Antonio, Fort Worth, or a smaller community, we understand the specific risks and insurance landscape of your region. From coastal wind exposure to North Texas tornadoes to the unique needs of Texas businesses, our local knowledge informs every policy we write.',
  },
  {
    question: 'How are you compensated, and does it cost me more to use an agent?',
    answer: 'Independent agents are compensated through commissions paid by the insurance carriers — not by you. This means you get professional advice, market shopping, and claims advocacy at no additional cost compared to buying directly from a carrier. In fact, because we can compare multiple carriers, we often save our clients money. You get more service, more options, and frequently a lower premium — all at no extra cost.',
  },
  {
    question: 'What happens if I need to file a claim?',
    answer: 'When you need to file a claim, you call us at (512) 292-3650. We connect you with your carrier\'s claims department — many of which offer 24/7 reporting — and then we stay involved. We check in on the progress, help you understand the process, and advocate for you if there are delays or disputes. You\'re never just a policy number to us. When life happens, we\'re in your corner.',
  },
  {
    question: 'Will my rates go up if I file a claim?',
    answer: 'Rate increases after a claim depend on the type of claim, your carrier, your claims history, and how the claim was resolved. Not all claims cause rate increases — for example, comprehensive claims (like glass damage) often don\'t affect premiums the way at-fault accidents do. We monitor your policies and, if rates do increase, we can shop the market for a better option. That\'s the independent agency advantage — we\'re never stuck with one carrier\'s pricing.',
  },
  {
    question: 'Can Diversified Insurance help with all my insurance needs?',
    answer: 'Yes. We offer the full spectrum of personal and commercial coverage: auto, homeowners, life, commercial/business, occupational, and more. Because we handle all your policies, we can identify bundling opportunities, eliminate coverage gaps, and ensure your protection works as a cohesive whole. One call, one agent, one relationship — for everything you need to insure.',
  },
  {
    question: 'How do I get started with Diversified Insurance?',
    answer: 'Getting started is simple. Click "Get a Quote" anywhere on our site, or call us at (512) 292-3650. We\'ll have a conversation about what you need to protect, shop multiple carriers for the best options, and present your choices clearly — with no pressure and no obligation. If you choose to work with us, you\'ll have a dedicated agent for the life of your policies. It\'s that easy.',
  },
];

export default function About() {
  return (
    <Layout breadcrumb="About Us">
      {/* HERO */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image src={ABOUT_IMG} alt="A trusted insurance partnership" fittingType="fill" className="w-full h-full" />
          <div className="absolute inset-0 bg-gradient-to-r from-espresso/90 to-espresso/40"></div>
        </div>
        <div className="relative container-luxe py-20">
          <div className="max-w-3xl">
            <span className="font-body text-[0.65rem] tracking-[0.4em] uppercase text-brand-blue-light">Our Story</span>
            <h1 className="font-heading text-5xl md:text-7xl text-bone mt-6 leading-[0.95]">
              More than policies.<br/><em className="text-brand-red not-italic">A partnership.</em>
            </h1>
            <p className="font-body text-lg md:text-xl text-bone/80 leading-relaxed mt-8 max-w-2xl">
              For over a decade, we've been the independent voice Texas families and businesses trust — not because we sell insurance, but because we protect people.
            </p>
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section className="py-22 md:py-30 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <span className="font-body text-[0.65rem] tracking-[0.4em] uppercase text-clay">Our Mission</span>
          <h2 className="font-heading text-4xl md:text-5xl text-espresso mt-4 mb-8">
            Protection should feel personal.
          </h2>
          <p className="font-body text-lg text-muted-foreground leading-relaxed mb-6">
            Diversified Insurance was founded on a simple conviction: insurance shouldn't feel transactional. It should feel like having someone in your corner — someone who knows your name, understands your risks, and has the carrier relationships to actually do something about them.
          </p>
          <p className="font-body text-lg text-muted-foreground leading-relaxed mb-6">
            We live in a world where you can buy insurance from a website in five minutes. But when the storm hits, when the accident happens, when the claim gets complicated — a website can't advocate for you. A call center doesn't know your family. An algorithm doesn't understand that your business is your life's work.
          </p>
          <p className="font-body text-lg text-muted-foreground leading-relaxed">
            That's why we exist. We're not a tech company selling insurance. We're insurance professionals who use technology to serve you better. The difference matters — especially when it matters most.
          </p>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-22 md:py-30 px-6 md:px-12 bg-espresso text-bone relative overflow-hidden">
        <div className="absolute -right-20 top-0 serif-initial text-[30rem] text-bone/[0.02]">D</div>
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="font-body text-[0.65rem] tracking-[0.4em] uppercase text-brand-blue-light">What We Believe</span>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-bone mt-4">Our values, uncompromised.</h2>
            <div className="w-12 h-px bg-brand-red mx-auto mt-8"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {[
              { icon: Shield, title: 'Advocacy First', body: 'We work for you, not the insurance company. Every recommendation, every claim, every conversation is guided by your best interest.' },
              { icon: Heart, title: 'Relationships', body: 'We know your name, your family, your business. Insurance is personal to us because it\'s personal to you.' },
              { icon: Award, title: 'Excellence', body: 'We hold ourselves to the highest standard — in the carriers we represent, the coverage we recommend, and the service we deliver.' },
              { icon: Users, title: 'Community', body: 'We\'re Texans serving Texans. Our community is your community, and we\'re invested in protecting both.' },
            ].map((v) => (
              <div key={v.title}>
                <v.icon className="text-brand-blue-light mb-6" size={32} />
                <h3 className="font-heading text-2xl text-bone mb-4">{v.title}</h3>
                <p className="font-body text-sm text-bone/60 leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY INDEPENDENT */}
      <section className="py-22 md:py-30 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <span className="font-body text-[0.65rem] tracking-[0.4em] uppercase text-clay">The Independent Difference</span>
            <h2 className="font-heading text-4xl md:text-5xl text-espresso mt-4 mb-8">
              Why independent means better.
            </h2>
            <p className="font-body text-lg text-muted-foreground leading-relaxed mb-6">
              A "captive" agent works for one insurance company and can only sell that company's products. An independent agent works for you — with access to dozens of top-rated carriers and the freedom to recommend whichever one offers the best coverage and value for your specific situation.
            </p>
            <p className="font-body text-base text-muted-foreground leading-relaxed mb-8">
              That freedom is your advantage. We compare, we negotiate, and we advocate. If your rates climb without justification, we can move you. If a claim gets complicated, we fight for you. You're never locked in, never limited, never alone.
            </p>
            <div className="space-y-3">
              {[
                'Access to multiple top-rated insurance carriers',
                'Objective recommendations based on your needs, not quotas',
                'Annual policy reviews to ensure your coverage keeps pace with your life',
                'Claims advocacy — we\'re with you every step of the way',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <Check size={18} className="text-brand-red mt-1 flex-shrink-0" />
                  <span className="font-body text-sm text-espresso">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image src={ABOUT_IMG} alt="Diversified Insurance partnership" fittingType="fill" className="w-full h-full" />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FaqAccordion faqs={faqs} title="About Diversified Insurance" />

      {/* CTA */}
      <CtaBanner
        title="Let\'s start a conversation."
        subtitle="Whether you\'re shopping for your first policy or reevaluating coverage you\'ve had for years, we\'d love to help. No pressure, no jargon — just honest guidance from people who care."
        image={QUOTE_IMG}
      />
    </Layout>
  );
}