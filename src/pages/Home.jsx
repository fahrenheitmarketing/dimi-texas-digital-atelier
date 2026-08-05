import React from 'react';
import { Link } from 'react-router-dom';
import { Car, Home as HomeIcon, HeartHandshake, Building2, HardHat, ArrowRight, Shield, Handshake, TrendingDown, Star } from 'lucide-react';
import { Image } from '@/components/ui/image';
import Layout from '@/components/Layout';
import ServiceCard from '@/components/ServiceCard';
import FaqAccordion from '@/components/FaqAccordion';
import CtaBanner from '@/components/CtaBanner';

const HERO_IMG = 'https://media.base44.com/images/public/6a738b6cc9947068aaaec25d/cd15e64b2_generated_0dbfa99c.png';
const AUTO_IMG = 'https://media.base44.com/images/public/6a738b6cc9947068aaaec25d/be6b9a1bd_generated_b48b15e1.png';
const HOME_IMG = 'https://media.base44.com/images/public/6a738b6cc9947068aaaec25d/cd15e64b2_generated_0dbfa99c.png';
const LIFE_IMG = 'https://media.base44.com/images/public/6a738b6cc9947068aaaec25d/467d1078c_generated_c436bfd7.png';
const COMMERCIAL_IMG = 'https://media.base44.com/images/public/6a738b6cc9947068aaaec25d/b8a444f91_generated_eb127168.png';
const ABOUT_IMG = 'https://media.base44.com/images/public/6a738b6cc9947068aaaec25d/6191d0c34_generated_951d992b.png';
const QUOTE_IMG = 'https://media.base44.com/images/public/6a738b6cc9947068aaaec25d/bfbfa0459_generated_dbfac6bf.png';

const services = [
  {
    icon: Car,
    title: 'Auto Insurance',
    description: 'Tailored auto coverage from multiple top-rated carriers — because no two drivers, vehicles, or budgets are alike.',
    image: AUTO_IMG,
    path: '/auto-insurance',
    concerns: ['Liability & full coverage', 'SR-22 filings', 'Multi-car discounts', 'Accident forgiveness'],
  },
  {
    icon: HomeIcon,
    title: 'Homeowners Insurance',
    description: 'Protection for your home, your possessions, and your family — customized to the realities of Texas living.',
    image: HOME_IMG,
    path: '/home-insurance',
    concerns: ['Dwelling & contents', 'Wind & hail coverage', 'Liability protection', 'Loss of use'],
  },
  {
    icon: HeartHandshake,
    title: 'Life Insurance',
    description: 'Secure your family\'s financial future with term, whole, and universal life policies built around your goals.',
    image: LIFE_IMG,
    path: '/life-insurance',
    concerns: ['Term life', 'Whole life', 'Universal life', 'Income replacement'],
  },
  {
    icon: Building2,
    title: 'Commercial Insurance',
    description: 'Comprehensive business protection — from general liability to commercial auto — tailored to your operation.',
    image: COMMERCIAL_IMG,
    path: '/commercial-insurance',
    concerns: ['General liability', 'Commercial property', 'Workers\' comp', 'Commercial auto'],
  },
  {
    icon: HardHat,
    title: 'Occupational Insurance',
    description: 'A smart alternative to traditional workers\' comp — often 10–50% less, with broader flexibility for employers.',
    image: COMMERCIAL_IMG,
    path: '/occupational-insurance',
    concerns: ['Lower premiums', 'No state pool', 'Flexible claims', 'Texas-compliant'],
  },
];

const homeFaqs = [
  {
    question: 'What makes Diversified Insurance different from a direct insurance company?',
    answer: 'As an independent insurance agency, we don\'t work for a single carrier — we work for you. That means we shop multiple top-rated insurance companies simultaneously to find the best combination of coverage and price for your specific situation. If your needs change or a better option becomes available, we can move you without you having to start over with a new agent. You get choice, advocacy, and a single point of contact for everything.',
  },
  {
    question: 'How can I get an insurance quote?',
    answer: 'Getting a quote is simple. Click any "Get a Quote" button on our site, or call us directly at (512) 292-3650. We\'ll ask a few questions about what you need to insure, then shop our network of carriers to find your best options. Most quotes can be completed in minutes, and there\'s never any obligation.',
  },
  {
    question: 'Will bundling my home and auto insurance really save me money?',
    answer: 'In most cases, yes — bundling your home and auto policies with the same carrier typically yields a multi-policy discount of 10–25%. But savings depend on your specific profile and location. As an independent agency, we compare both bundled and unbundled options across carriers so you see the true bottom line, not just a discount that might still leave you paying more overall.',
  },
  {
    question: 'What types of insurance does Diversified Insurance offer in Texas?',
    answer: 'We offer the full spectrum of personal and commercial coverage: auto, homeowners, life, commercial/business, and occupational insurance. Because we\'re independent, we can also source specialty lines — motorcycles, RVs, boats, umbrella policies, flood, and more. If it can be insured, we can likely place it.',
  },
  {
    question: 'How do I file a claim, and who helps me through the process?',
    answer: 'You can file a claim by calling our office at (512) 292-3650, or we\'ll connect you directly with your carrier\'s claims department — many of which offer 24/7 reporting. Unlike a call center, we\'re your advocate throughout the process. If a claim hits a snag, we step in on your behalf. That\'s the difference between buying a policy and having an agent.',
  },
  {
    question: 'Does Diversified Insurance serve all of Texas?',
    answer: 'Yes. We are a Texas-licensed independent insurance agency serving families and businesses across the state. Whether you\'re in Austin, Dallas, Houston, San Antonio, or a smaller community, we understand the specific risks Texas homeowners and business owners face — from severe weather to regional market conditions — and we tailor your coverage accordingly.',
  },
  {
    question: 'How much does Texas homeowners insurance cost on average?',
    answer: 'Texas has some of the highest homeowners insurance premiums in the nation due to severe weather exposure — wind, hail, and flooding. Premiums vary widely based on your home\'s value, location, age, roof condition, deductible, and coverage limits. Rather than quoting a single number, we shop multiple carriers to find the best value for your specific home. Contact us for a personalized quote.',
  },
  {
    question: 'Can I make my insurance payments online?',
    answer: 'Absolutely. We offer convenient online payment through our secure portal. Click "Make a Payment" in our footer or navigation, and you\'ll be directed to our payment system. If you have questions about your bill, payment plan options, or need to adjust your payment schedule, just call us and we\'ll walk you through it.',
  },
];

export default function Home() {
  return (
    <Layout>
      {/* === HERO === */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image src={HERO_IMG} alt="A warm Texas family home at golden hour" fittingType="fill" className="w-full h-full" />
          <div className="absolute inset-0 bg-gradient-to-r from-bone via-bone/90 to-bone/30"></div>
        </div>

        {/* Giant serif D background texture */}
        <div className="absolute right-[5%] top-1/2 -translate-y-1/2 serif-initial text-[40rem] text-espresso/[0.03] hidden lg:block">D</div>

        <div className="relative container-luxe pt-32 pb-20">
          <div className="max-w-2xl">
            <span className="font-body text-[0.65rem] tracking-[0.4em] uppercase text-brand-red fade-up">Independent Insurance Agency • Texas</span>
            <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl text-espresso mt-6 leading-[0.95] fade-up" style={{ animationDelay: '0.1s' }}>
              Protection,<br/><em className="text-brand-blue not-italic">Curated.</em>
            </h1>
            <p className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed mt-8 max-w-xl fade-up" style={{ animationDelay: '0.2s' }}>
              We don't just sell policies. As an independent agency, we shop Texas's top-rated carriers to build protection that fits your life — your home, your vehicles, your business, and the people who depend on you.
            </p>
            <div className="flex flex-col sm:flex-row items-start gap-4 mt-10 fade-up" style={{ animationDelay: '0.3s' }}>
              <a
                href="https://www.lifeinsurancesimply.com/diversifiedinsurance"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Get a Free Quote
              </a>
              <a href="tel:5122923650" className="btn-outline">
                (512) 292-3650
              </a>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block">
          <div className="w-px h-16 bg-espresso/30 animate-pulse"></div>
        </div>
      </section>

      {/* === TRUST BAR === */}
      <section className="py-12 px-6 md:px-12 border-y border-border bg-lume/30">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
          <div className="flex items-center gap-3">
            <Shield className="text-brand-blue" size={24} />
            <span className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground">Licensed & Bonded</span>
          </div>
          <div className="hidden md:block w-px h-8 bg-border"></div>
          <div className="flex items-center gap-3">
            <Handshake className="text-brand-blue" size={24} />
            <span className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground">Multiple Top-Rated Carriers</span>
          </div>
          <div className="hidden md:block w-px h-8 bg-border"></div>
          <div className="flex items-center gap-3">
            <TrendingDown className="text-brand-blue" size={24} />
            <span className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground">We Shop, You Save</span>
          </div>
        </div>
      </section>

      {/* === SERVICES GRID === */}
      <section className="py-22 md:py-30 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16 items-end">
            <div className="md:col-span-8">
              <span className="font-body text-[0.65rem] tracking-[0.4em] uppercase text-clay">The Coverage Atelier</span>
              <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-espresso mt-4">
                Every policy, <em className="text-brand-blue not-italic">purpose-built.</em>
              </h2>
            </div>
            <div className="md:col-span-4">
              <p className="font-body text-base text-muted-foreground leading-relaxed">
                From the car in your driveway to the business you've built, we match each risk to the right carrier, the right coverage, and the right price.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((s, i) => (
              <div key={i} className={i === 4 ? 'sm:col-span-2 lg:col-span-1' : ''}>
                <ServiceCard {...s} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === WHY CHOOSE US === */}
      <section className="py-22 md:py-30 px-6 md:px-12 bg-espresso text-bone relative overflow-hidden">
        <div className="absolute -left-20 top-0 serif-initial text-[30rem] text-bone/[0.02]">D</div>
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="font-body text-[0.65rem] tracking-[0.4em] uppercase text-brand-blue-light">Why Diversified</span>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-bone mt-4">
              The independent advantage.
            </h2>
            <div className="w-12 h-px bg-brand-red mx-auto mt-8"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
            {[
              { num: '01', title: 'We Shop the Market', body: 'One conversation, multiple carriers. We compare coverage and pricing from top-rated insurers to find your best fit — not theirs.' },
              { num: '02', title: 'You Have an Advocate', body: 'When life happens, you call us — not an 800 number. We guide you through claims, coverage changes, and life transitions with a human voice.' },
              { num: '03', title: 'Built for Texas', body: 'We understand the risks that matter here: hailstorms, flooding, high-speed highways, and a booming business landscape. Your coverage reflects that.' },
            ].map((item) => (
              <div key={item.num}>
                <span className="font-heading text-5xl text-brand-blue-light/40">{item.num}</span>
                <h3 className="font-heading text-2xl text-bone mt-4 mb-4">{item.title}</h3>
                <p className="font-body text-base text-bone/60 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === ABOUT TEASER === */}
      <section className="py-22 md:py-30 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image src={ABOUT_IMG} alt="A trusted insurance partnership" fittingType="fill" className="w-full h-full" />
          </div>
          <div>
            <span className="font-body text-[0.65rem] tracking-[0.4em] uppercase text-clay">Our Story</span>
            <h2 className="font-heading text-4xl md:text-5xl text-espresso mt-4 mb-8">
              Protection is personal.<br/>That's how we've always treated it.
            </h2>
            <p className="font-body text-lg text-muted-foreground leading-relaxed mb-6">
              Diversified Insurance was founded on a simple conviction: insurance shouldn't feel transactional. It should feel like having someone in your corner — someone who knows your name, understands your risks, and has the carrier relationships to do something about them.
            </p>
            <p className="font-body text-base text-muted-foreground leading-relaxed mb-8">
              As an independent agency, we're not beholden to any single company. That freedom is your advantage. We compare, we negotiate, and we advocate — so the policy you receive is the one that genuinely serves you, not the one that serves a quota.
            </p>
            <Link to="/about" className="inline-flex items-center gap-2 font-body text-[0.7rem] tracking-[0.2em] uppercase text-espresso hover:text-brand-red transition-colors">
              Read Our Story
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* === PROCESS === */}
      <section className="py-22 md:py-30 px-6 md:px-12 bg-lume/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="font-body text-[0.65rem] tracking-[0.4em] uppercase text-clay">How It Works</span>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-espresso mt-4">
              Simple. Thorough. Yours.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4">
            {[
              { step: 'I', title: 'Tell Us Your Story', body: 'Share what matters most — your home, vehicles, family, business. We listen first.' },
              { step: 'II', title: 'We Shop the Market', body: 'Our agents compare multiple top-rated carriers to find the best coverage and value.' },
              { step: 'III', title: 'Choose with Confidence', body: 'We present your options clearly — no jargon, no pressure. You decide.' },
              { step: 'IV', title: 'Protected for Life', body: 'We review your coverage annually and advocate for you at every claim.' },
            ].map((item, i) => (
              <div key={i} className="relative">
                {i < 3 && <div className="hidden md:block absolute top-6 left-[60%] w-full h-px bg-border"></div>}
                <div className="relative w-12 h-12 border border-espresso flex items-center justify-center mb-6 bg-bone">
                  <span className="font-heading text-lg text-espresso">{item.step}</span>
                </div>
                <h3 className="font-heading text-2xl text-espresso mb-3">{item.title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === TESTIMONIALS === */}
      <section className="py-22 md:py-30 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="font-body text-[0.65rem] tracking-[0.4em] uppercase text-clay">Client Voices</span>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-espresso mt-4">
              Trusted by Texas.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { quote: 'They saved us nearly $1,200 a year by bundling our home and auto — and the coverage is actually better than what we had. That\'s the kind of math that matters.', name: 'Marcus & Elena R.', location: 'Austin, TX' },
              { quote: 'When hail destroyed our roof, Diversified handled everything. One call, and the claim was filed. The check came fast. That\'s why we\'ve been with them for eight years.', name: 'Janet K.', location: 'San Antonio, TX' },
              { quote: 'As a small business owner, I needed someone who understood commercial coverage. They built a package that protects my shop, my equipment, and my employees — all in one place.', name: 'David O.', location: 'Houston, TX' },
            ].map((t, i) => (
              <div key={i} className="bg-card p-8 md:p-10 border border-border">
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, j) => <Star key={j} size={16} className="text-brand-red fill-brand-red" />)}
                </div>
                <p className="font-heading text-xl md:text-2xl text-espresso italic leading-relaxed mb-8">"{t.quote}"</p>
                <div>
                  <p className="font-body text-sm font-medium text-espresso">{t.name}</p>
                  <p className="font-body text-xs text-muted-foreground mt-1">{t.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === FAQ === */}
      <FaqAccordion faqs={homeFaqs} title="Questions, Answered" />

      {/* === CTA === */}
      <CtaBanner
        title="Let's build your protection."
        subtitle="One conversation is all it takes. We'll shop the market, compare your options, and find coverage that genuinely fits your life and your budget."
        image={QUOTE_IMG}
      />
    </Layout>
  );
}