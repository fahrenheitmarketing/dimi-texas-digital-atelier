import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Clock, ArrowRight, ChevronRight, Loader2, CheckCircle2 } from 'lucide-react';
import { Image } from '@/components/ui/image';
import Layout from '@/components/Layout';
import PolicyUploader from '@/components/quote/PolicyUploader';
import { base44 } from '@/api/base44Client';
import useDocumentMeta from '@/hooks/useDocumentMeta';

const CONTACT_IMG = 'https://media.base44.com/images/public/6a738b6cc9947068aaaec25d/fc13724b2_generated_image.png';

export default function Contact() {
  useDocumentMeta({
    title: 'Contact Diversified Insurance | Austin, Texas',
    description: "Talk to a real Texas insurance agent at (512) 292-3650. Questions, quotes or claims — we're here Monday–Friday, 8am–5pm, with 24/7 claims support.",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [serverError, setServerError] = useState('');
  const [attachments, setAttachments] = useState([]);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    insuranceType: 'General question / other',
    message: '',
  });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setServerError('');
    if (!form.name || !form.email || !form.message) {
      setServerError('Please include your name, email, and a message.');
      return;
    }
    setSubmitting(true);
    try {
      const res = await base44.functions.invoke('submitContact', { ...form, attachments });
      if (res?.data?.ok) {
        setSubmitted(true);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        setServerError(res?.data?.error || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      setServerError(err.message || 'Unable to send. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const inputClass =
    'w-full px-4 py-3 rounded-lg border-2 border-border focus:border-brand-blue focus:outline-none text-foreground placeholder:text-muted-foreground transition-colors';
  const labelClass = 'block text-sm font-semibold text-brand-navy mb-2';

  return (
    <Layout>
      {/* HERO */}
      <section className="relative min-h-[78vh] flex flex-col overflow-hidden">
        <div className="absolute inset-0">
          <Image src={CONTACT_IMG} alt="Let's talk protection" fittingType="fill" className="w-full h-full grayscale-[0.8] opacity-50" />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent"></div>
        </div>
        <div className="relative container-luxe w-full pt-28 md:pt-32 z-10">
          <div className="flex items-center gap-2 font-body text-xs tracking-[0.15em] uppercase text-muted-foreground">
            <Link to="/" className="hover:text-brand-red transition-colors">Home</Link>
            <ChevronRight size={12} className="text-clay" />
            <span className="text-espresso">Contact</span>
          </div>
        </div>
        <div className="relative container-luxe w-full flex-1 flex items-center pb-16 md:pb-20 z-10">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-brand-blue/10 text-brand-blue rounded-full text-xs font-semibold mb-6">
              Get In Touch
            </span>
            <h1 className="text-4xl md:text-6xl text-brand-navy leading-tight">
              Let's talk <span className="text-brand-red">protection.</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mt-6 max-w-2xl">
              Questions about coverage? Ready for a quote? Need to file a claim? We're here — with real people, real answers, and real solutions.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT GRID */}
      <section className="py-16 md:py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Form */}
          <div>
            <span className="text-sm font-semibold text-brand-blue tracking-wide uppercase">Send a Message</span>
            <h2 className="text-3xl md:text-4xl text-brand-navy mt-3 mb-4">
              How can we help?
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8 max-w-md">
              Have a general question, ready for a quote, or just want to talk through your options?
              Send us a message and a real person will get back to you within one business day.
            </p>

            {submitted ? (
              <div className="bg-muted/40 rounded-xl border border-border p-10 text-center">
                <div className="w-14 h-14 bg-brand-blue/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 size={28} className="text-brand-blue" />
                </div>
                <h3 className="text-2xl font-bold text-brand-navy mb-3">Message sent!</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Thanks for reaching out. We've received your message and will be in touch within one
                  business day. For immediate assistance, call us at{' '}
                  <a href="tel:5122923650" className="text-brand-red font-semibold">(512) 292-3650</a>.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 bg-white rounded-xl border border-border shadow-sm p-6 md:p-8">
                <div>
                  <label className={labelClass}>Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="Your name"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className={labelClass}>Email *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      className={inputClass}
                      placeholder="you@email.com"
                    />
                  </div>
                  <div>
                    <label className={labelClass}>Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      className={inputClass}
                      placeholder="(512) 000-0000"
                    />
                  </div>
                </div>
                <div>
                  <label className={labelClass}>What's this about?</label>
                  <select
                    name="insuranceType"
                    value={form.insuranceType}
                    onChange={handleChange}
                    className={inputClass}
                  >
                    <option>General question / other</option>
                    <option>Auto Insurance</option>
                    <option>Homeowners Insurance</option>
                    <option>Life Insurance</option>
                    <option>Commercial Insurance</option>
                    <option>Occupational Insurance</option>
                    <option>Long-Term Care</option>
                    <option>Annuities</option>
                    <option>Other / Multiple</option>
                  </select>
                </div>
                <div>
                  <label className={labelClass}>Message *</label>
                  <textarea
                    name="message"
                    rows={4}
                    required
                    value={form.message}
                    onChange={handleChange}
                    className={`${inputClass} resize-none`}
                    placeholder="Tell us what you need…"
                  />
                </div>

                <PolicyUploader value={attachments} onChange={setAttachments} />

                {serverError && (
                  <div className="rounded-lg border-2 border-brand-red/30 bg-brand-red/5 px-4 py-3 text-sm text-brand-red font-semibold">
                    {serverError}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={submitting}
                  className="btn-primary w-full disabled:opacity-60"
                >
                  {submitting ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      Sending…
                    </>
                  ) : (
                    <>
                      Send message
                      <ArrowRight size={16} />
                    </>
                  )}
                </button>
                <p className="text-xs text-muted-foreground text-center">
                  No obligation. We'll respond within one business day.
                </p>
              </form>
            )}
          </div>

          {/* Contact info */}
          <div className="lg:pl-4">
            <span className="text-sm font-semibold text-brand-blue tracking-wide uppercase">Reach Us Directly</span>
            <h2 className="text-3xl md:text-4xl text-brand-navy mt-3 mb-10">
              We're here to help.
            </h2>

            <div className="space-y-5">
              <a href="tel:5122923650" className="flex items-start gap-4 bg-white rounded-xl border border-border shadow-sm p-5 group hover:shadow-md transition-all">
                <div className="w-12 h-12 rounded-lg bg-brand-blue/10 flex items-center justify-center flex-shrink-0">
                  <Phone size={20} className="text-brand-blue" />
                </div>
                <div>
                  <h3 className="text-xs font-bold tracking-wide uppercase text-muted-foreground mb-1">Call Us</h3>
                  <p className="text-xl font-bold text-brand-navy group-hover:text-brand-blue transition-colors">(512) 292-3650</p>
                  <p className="text-sm text-muted-foreground mt-1">Speak directly with an agent</p>
                </div>
              </a>

              <div className="flex items-start gap-4 bg-white rounded-xl border border-border shadow-sm p-5">
                <div className="w-12 h-12 rounded-lg bg-brand-blue/10 flex items-center justify-center flex-shrink-0">
                  <MapPin size={20} className="text-brand-blue" />
                </div>
                <div>
                  <h3 className="text-xs font-bold tracking-wide uppercase text-muted-foreground mb-1">Service Area</h3>
                  <p className="text-lg font-bold text-brand-navy">Serving All of Texas</p>
                  <p className="text-sm text-muted-foreground mt-1">Families & businesses statewide</p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white rounded-xl border border-border shadow-sm p-5">
                <div className="w-12 h-12 rounded-lg bg-brand-blue/10 flex items-center justify-center flex-shrink-0">
                  <Clock size={20} className="text-brand-blue" />
                </div>
                <div>
                  <h3 className="text-xs font-bold tracking-wide uppercase text-muted-foreground mb-1">Office Hours</h3>
                  <p className="text-sm font-bold text-brand-navy">Monday – Friday: 8:00 AM – 5:00 PM</p>
                  <p className="text-sm text-muted-foreground mt-1">Claims support available 24/7</p>
                </div>
              </div>
            </div>

            {/* Quick links */}
            <div className="mt-8 pt-8 border-t border-border">
              <h3 className="text-xs font-bold tracking-wide uppercase text-muted-foreground mb-5">Quick Links</h3>
              <div className="flex flex-col gap-3">
                <a
                  href="https://www.appcelerate.life/dimi-lp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-brand-navy hover:text-brand-red transition-colors"
                >
                  <ArrowRight size={16} />
                  Get an Instant Life Quote
                </a>
                <a
                  href="https://dimitexas.epaypolicy.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-brand-navy hover:text-brand-red transition-colors"
                >
                  <ArrowRight size={16} />
                  Make a Payment Online
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

    </Layout>
  );
}