import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Clock, ArrowRight, ChevronRight } from 'lucide-react';
import Layout from '@/components/Layout';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '', insuranceType: 'Auto' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const inputClass = 'w-full px-4 py-3 rounded-lg border-2 border-border focus:border-brand-blue focus:outline-none text-foreground placeholder:text-muted-foreground transition-colors';
  const labelClass = 'block text-sm font-semibold text-brand-navy mb-2';

  return (
    <Layout>
      {/* HERO */}
      <section className="relative min-h-[68vh] flex flex-col overflow-hidden">
        <div className="absolute inset-0 bg-brand-navy"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-brand-navy via-brand-navy to-brand-blue/40"></div>
        <div className="relative container-luxe w-full pt-28 md:pt-32 z-10">
          <div className="flex items-center gap-2 font-body text-xs tracking-[0.15em] uppercase text-white/60">
            <Link to="/" className="hover:text-brand-red transition-colors">Home</Link>
            <ChevronRight size={12} className="text-white/40" />
            <span className="text-white">Contact</span>
          </div>
        </div>
        <div className="relative container-luxe w-full flex-1 flex items-center pb-16 md:pb-20 z-10">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-brand-blue/20 text-brand-blue-light rounded-full text-xs font-semibold mb-6">
              Get In Touch
            </span>
            <h1 className="text-4xl md:text-6xl text-white leading-tight">
              Let's talk <span className="text-brand-red">protection.</span>
            </h1>
            <p className="text-lg text-white/80 leading-relaxed mt-6 max-w-2xl">
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
            <span className="text-sm font-semibold text-brand-blue tracking-wide uppercase">Request a Quote</span>
            <h2 className="text-3xl md:text-4xl text-brand-navy mt-3 mb-8">
              Start your free quote.
            </h2>

            {submitted ? (
              <div className="bg-muted/40 rounded-xl border border-border p-10 text-center">
                <div className="w-14 h-14 bg-brand-red rounded-full flex items-center justify-center mx-auto mb-6">
                  <ArrowRight size={24} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-brand-navy mb-3">Thank You!</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  We've received your request and will be in touch within one business day. For immediate assistance, call us at <a href="tel:5122923650" className="text-brand-red font-semibold">(512) 292-3650</a>.
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
                    <label className={labelClass}>Phone *</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={form.phone}
                      onChange={handleChange}
                      className={inputClass}
                      placeholder="(512) 000-0000"
                    />
                  </div>
                </div>
                <div>
                  <label className={labelClass}>Insurance Type</label>
                  <select
                    name="insuranceType"
                    value={form.insuranceType}
                    onChange={handleChange}
                    className={inputClass}
                  >
                    <option>Auto Insurance</option>
                    <option>Homeowners Insurance</option>
                    <option>Life Insurance</option>
                    <option>Commercial Insurance</option>
                    <option>Occupational Insurance</option>
                    <option>Other / Multiple</option>
                  </select>
                </div>
                <div>
                  <label className={labelClass}>How Can We Help?</label>
                  <textarea
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    className={`${inputClass} resize-none`}
                    placeholder="Tell us a bit about what you're looking for..."
                  />
                </div>
                <button type="submit" className="btn-primary w-full">
                  Send Request
                  <ArrowRight size={16} />
                </button>
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
                  <p className="text-sm font-bold text-brand-navy">Monday – Friday: 9:00 AM – 6:00 PM</p>
                  <p className="text-sm text-muted-foreground mt-1">Claims support available 24/7</p>
                </div>
              </div>
            </div>

            {/* Quick links */}
            <div className="mt-8 pt-8 border-t border-border">
              <h3 className="text-xs font-bold tracking-wide uppercase text-muted-foreground mb-5">Quick Links</h3>
              <div className="flex flex-col gap-3">
                <a
                  href="https://www.lifeinsurancesimply.com/diversifiedinsurance"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-brand-navy hover:text-brand-red transition-colors"
                >
                  <ArrowRight size={16} />
                  Get an Instant Quote
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