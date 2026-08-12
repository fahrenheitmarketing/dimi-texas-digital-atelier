import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Car, Home as HomeIcon, HeartHandshake, Building2, HardHat,
  ArrowRight, Shield, Phone, Star, Check, Clock, DollarSign,
  Headphones, ChevronRight,
} from 'lucide-react';
import { Image } from '@/components/ui/image';
import Layout from '@/components/Layout';
import FaqAccordion from '@/components/FaqAccordion';
import CtaBanner from '@/components/CtaBanner';
import AnimatedStat from '@/components/AnimatedStat';
import CarrierMarquee from '@/components/CarrierMarquee';

const HERO_IMG = 'https://media.base44.com/images/public/6a738b6cc9947068aaaec25d/cd15e64b2_generated_0dbfa99c.png';
const HERO_BG = 'https://media.base44.com/images/public/6a738b6cc9947068aaaec25d/047293005_Gemini_Generated_Image_lx8q3glx8q3glx8q.png';
const AUTO_IMG = 'https://media.base44.com/images/public/6a738b6cc9947068aaaec25d/be6b9a1bd_generated_b48b15e1.png';
const LIFE_IMG = 'https://media.base44.com/images/public/6a738b6cc9947068aaaec25d/467d1078c_generated_c436bfd7.png';
const COMMERCIAL_IMG = 'https://media.base44.com/images/public/6a738b6cc9947068aaaec25d/b8a444f91_generated_eb127168.png';
const ABOUT_IMG = 'https://media.base44.com/images/public/6a738b6cc9947068aaaec25d/6191d0c34_generated_951d992b.png';
const QUOTE_IMG = 'https://media.base44.com/images/public/6a738b6cc9947068aaaec25d/bfbfa0459_generated_dbfac6bf.png';
const HOME_CTA_IMG = 'https://media.base44.com/images/public/6a738b6cc9947068aaaec25d/ed7fe988a_generated_image.png';

const insuranceTypes = [
  { key: 'Auto', icon: Car },
  { key: 'Home', icon: HomeIcon },
  { key: 'Life', icon: HeartHandshake },
  { key: 'Commercial', icon: Building2 },
  { key: 'Occupational', icon: HardHat },
];

const products = [
  { num: 1, title: 'Car Insurance', desc: 'Tailored auto coverage from multiple top-rated carriers — because no two drivers, vehicles, or budgets are alike.', path: '/auto-insurance', image: AUTO_IMG },
  { num: 2, title: 'Homeowners Insurance', desc: 'Protection for your home, your possessions, and your family — customized to the realities of Texas living.', path: '/home-insurance', image: HERO_IMG },
  { num: 3, title: 'Life Insurance', desc: 'Secure your family\'s financial future with term, whole, and universal life policies built around your goals.', path: '/life-insurance', image: LIFE_IMG },
  { num: 4, title: 'Commercial Insurance', desc: 'Comprehensive business protection — from general liability to commercial auto — tailored to your operation.', path: '/commercial-insurance', image: COMMERCIAL_IMG },
  { num: 5, title: 'Occupational Insurance', desc: 'A smart alternative to traditional workers\' comp — often 10–50% less, with broader flexibility for employers.', path: '/occupational-insurance', image: COMMERCIAL_IMG },
  { num: 6, title: 'Long-Term Care Insurance', desc: 'Protect your savings and your independence — coverage for the rising cost of care at home, assisted living, or a skilled facility.', path: '/long-term-care', image: LIFE_IMG },
  { num: 7, title: 'Annuities', desc: 'Turn your savings into guaranteed income you can\'t outlive — with principal protection and today\'s top MYGA rates.', path: '/annuities', image: QUOTE_IMG },
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
];

export default function Home() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState('Auto');
  const [zip, setZip] = useState('');
  const [zipError, setZipError] = useState('');

  const startQuote = () => {
    if (!/^\d{5}$/.test(zip.trim())) {
      setZipError('Please enter a valid 5-digit ZIP code.');
      return;
    }
    setZipError('');
    navigate(`/quote?service=${selected.toLowerCase()}`);
  };

  return (
    <Layout>
      {/* === HERO === */}
      <section className="relative pt-28 pb-16 md:pt-36 md:pb-20 overflow-hidden bg-white">
        <div className="absolute inset-0">
          <Image src={HERO_BG} alt="Austin skyline at night over Lady Bird Lake" fittingType="fill" className="w-full h-full opacity-15" />
          <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-white to-transparent" />
        </div>
        <div className="relative container-luxe">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-brand-blue/10 text-brand-blue rounded-full text-xs font-semibold tracking-wide mb-6">
              <Shield size={14} />
              Independent Insurance Agency • Texas
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-brand-navy leading-tight">
              You could save when you{' '}
              <span className="text-brand-red">bundle your insurance</span>
            </h1>
            <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
              Get a quote from Diversified Insurance and see how much you could save when we shop multiple top-rated carriers and build coverage that fits your life.
            </p>
          </div>

          {/* Insurance Selector Module */}
          <div className="max-w-4xl mx-auto mt-12">
            <div className="bg-white rounded-2xl shadow-xl border border-border p-6 md:p-8">
              <div className="grid grid-cols-5 gap-2 md:gap-3 mb-6">
                {insuranceTypes.map((type) => {
                  const active = selected === type.key;
                  return (
                    <button
                      key={type.key}
                      onClick={() => setSelected(type.key)}
                      className={`relative flex flex-col items-center justify-center gap-2 py-4 px-2 rounded-xl border-2 transition-all duration-200 ${
                        active
                          ? 'border-brand-blue bg-brand-blue/5'
                          : 'border-border hover:border-brand-blue/40 bg-muted/30'
                      }`}
                    >
                      <type.icon
                        size={28}
                        className={active ? 'text-brand-blue' : 'text-muted-foreground'}
                      />
                      <span
                        className={`text-xs font-semibold ${active ? 'text-brand-blue' : 'text-muted-foreground'}`}
                      >
                        {type.key}
                      </span>
                      {active && (
                        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-brand-blue flex items-center justify-center">
                          <Check size={12} className="text-white" />
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="text"
                  inputMode="numeric"
                  maxLength={5}
                  value={zip}
                  onChange={(e) => {
                    setZip(e.target.value.replace(/\D/g, '').slice(0, 5));
                    if (zipError) setZipError('');
                  }}
                  placeholder="ZIP Code"
                  className={`flex-1 px-4 py-3 rounded-lg border-2 focus:outline-none text-foreground placeholder:text-muted-foreground ${
                    zipError ? 'border-brand-red focus:border-brand-red' : 'border-border focus:border-brand-blue'
                  }`}
                />
                <button
                  onClick={startQuote}
                  className="btn-blue whitespace-nowrap"
                >
                  Get my price
                  <ArrowRight size={16} />
                </button>
              </div>
              {zipError && (
                <p className="text-sm text-brand-red font-semibold -mt-1">{zipError}</p>
              )}

              <div className="text-center mt-4">
                <a
                  href="tel:5122923650"
                  className="text-sm text-brand-blue font-semibold hover:underline"
                >
                  Prefer to talk? Call (512) 292-3650
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* === STATS GRID === */}
      <section className="py-16 md:py-20 px-6 md:px-12 bg-muted/40">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-brand-navy">
              Protection you can trust, at a price that works for you.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { stat: '10+', label: 'Years of experience', desc: 'Trusted by Texas families and businesses for over a decade, with the stability to back you up.', icon: Clock },
              { stat: '$1,200+', label: 'Average savings', desc: 'Our clients save an average of $1,200 a year on home and auto when we shop the market.', icon: DollarSign },
              { stat: '24/7', label: 'Claims access', desc: 'File claims anytime through your carrier, with our team advocating for you every step of the way.', icon: Headphones },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-8 shadow-sm border border-border">
                <div className="w-12 h-12 rounded-lg bg-brand-blue/10 flex items-center justify-center mb-5">
                  <item.icon className="text-brand-blue" size={24} />
                </div>
                <AnimatedStat value={item.stat} className="text-4xl font-extrabold text-brand-blue mb-2" />
                <h3 className="text-lg font-bold text-brand-navy mb-3">{item.label}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CarrierMarquee />

      {/* === PRODUCT CARDS === */}
      <section className="py-16 md:py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl text-brand-navy mb-3">We have you covered.</h2>
            <p className="text-muted-foreground text-lg max-w-2xl">
              Learn more about our products and start a quote to find the right coverage for you.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {products.map((p) => (
              <Link
                key={p.num}
                to={p.path}
                className="group flex gap-5 bg-white rounded-xl border border-border p-6 shadow-sm hover:shadow-md hover:border-brand-blue/40 transition-all duration-300"
              >
                <div className="flex-shrink-0">
                  <span className="flex items-center justify-center w-10 h-10 rounded-full bg-brand-blue text-white font-bold text-lg">
                    {p.num}
                  </span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-brand-navy mb-2 group-hover:text-brand-blue transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">{p.desc}</p>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-brand-blue">
                    Learn more
                    <ChevronRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* === FILE A CLAIM === */}
      <section className="py-12 px-6 md:px-12 bg-brand-navy">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl md:text-3xl text-white font-bold">
              Need to file an insurance claim?
            </h3>
            <p className="text-white/70 mt-2">
              Just 5–10 minutes and the basic details gets you started.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
            <a href="tel:5122923650" className="btn-primary">
              <Phone size={16} />
              File a Claim
            </a>
            <Link to="/quote"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-white/40 text-white font-body text-sm font-semibold rounded-lg hover:bg-white/10 transition-all min-h-[48px]">
              Manage your claim
            </Link>
          </div>
        </div>
      </section>

      {/* === WHY CHOOSE US === */}
      <section className="py-16 md:py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-lg">
              <Image src={ABOUT_IMG} alt="Diversified Insurance partnership" fittingType="fill" className="w-full h-full" />
            </div>
            <div>
              <span className="text-sm font-semibold text-brand-blue tracking-wide uppercase">Why Diversified</span>
              <h2 className="text-3xl md:text-4xl text-brand-navy mt-4 mb-6">
                The independent advantage.
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                As an independent agency, we don't work for an insurance company — we work for you. We shop multiple top-rated carriers, compare coverage and pricing, and recommend whichever one offers the best fit for your situation.
              </p>
              <div className="space-y-4">
                {[
                  'Access to multiple top-rated insurance carriers',
                  'Objective recommendations based on your needs, not quotas',
                  'Annual policy reviews to keep your coverage current',
                  'Claims advocacy — we\'re with you every step of the way',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-blue flex items-center justify-center mt-0.5">
                      <Check size={14} className="text-white" />
                    </div>
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
              <Link to="/about" className="btn-outline mt-8">
                Read our story
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* === TESTIMONIALS === */}
      <section className="py-16 md:py-20 px-6 md:px-12 bg-muted/40">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-brand-navy">Trusted by Texas.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { quote: 'They saved us nearly $1,200 a year by bundling our home and auto — and the coverage is actually better than what we had. That\'s the kind of math that matters.', name: 'Marcus & Elena R.', location: 'Austin, TX' },
              { quote: 'When hail destroyed our roof, Diversified handled everything. One call, and the claim was filed. The check came fast. That\'s why we\'ve been with them for eight years.', name: 'Janet K.', location: 'San Antonio, TX' },
              { quote: 'As a small business owner, I needed someone who understood commercial coverage. They built a package that protects my shop, my equipment, and my employees — all in one place.', name: 'David O.', location: 'Houston, TX' },
            ].map((t, i) => (
              <div key={i} className="bg-white rounded-xl p-8 shadow-sm border border-border">
                <div className="flex gap-1 mb-5">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={18} className="text-brand-red fill-brand-red" />
                  ))}
                </div>
                <p className="text-lg text-foreground leading-relaxed mb-6 italic">"{t.quote}"</p>
                <div>
                  <p className="text-sm font-bold text-brand-navy">{t.name}</p>
                  <p className="text-xs text-muted-foreground mt-1">{t.location}</p>
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
        image={HOME_CTA_IMG}
      />
    </Layout>
  );
}