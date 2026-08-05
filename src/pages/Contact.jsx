import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, ArrowRight } from 'lucide-react';
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

  return (
    <Layout breadcrumb="Contact">
      {/* HERO */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-espresso"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-espresso via-espresso to-brand-blue/30"></div>
        <div className="relative container-luxe py-20">
          <div className="max-w-3xl">
            <span className="font-body text-[0.65rem] tracking-[0.4em] uppercase text-brand-blue-light">Get In Touch</span>
            <h1 className="font-heading text-5xl md:text-7xl text-bone mt-6 leading-[0.95]">
              Let's talk <em className="text-brand-red not-italic">protection.</em>
            </h1>
            <p className="font-body text-lg md:text-xl text-bone/80 leading-relaxed mt-8 max-w-2xl">
              Questions about coverage? Ready for a quote? Need to file a claim? We're here — with real people, real answers, and real solutions.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT GRID */}
      <section className="py-22 md:py-30 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Form */}
          <div>
            <span className="font-body text-[0.65rem] tracking-[0.4em] uppercase text-clay">Request a Quote</span>
            <h2 className="font-heading text-4xl md:text-5xl text-espresso mt-4 mb-8">
              Start your free quote.
            </h2>

            {submitted ? (
              <div className="bg-lume/50 border border-border p-10 text-center">
                <div className="w-14 h-14 bg-brand-red rounded-full flex items-center justify-center mx-auto mb-6">
                  <ArrowRight size={24} className="text-bone" />
                </div>
                <h3 className="font-heading text-2xl text-espresso mb-3">Thank You!</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  We've received your request and will be in touch within one business day. For immediate assistance, call us at <a href="tel:5122923650" className="text-brand-red">(512) 292-3650</a>.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block font-body text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-border py-3 font-body text-espresso focus:border-brand-red focus:outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-body text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-border py-3 font-body text-espresso focus:border-brand-red focus:outline-none transition-colors"
                      placeholder="you@email.com"
                    />
                  </div>
                  <div>
                    <label className="block font-body text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2">Phone *</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={form.phone}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-border py-3 font-body text-espresso focus:border-brand-red focus:outline-none transition-colors"
                      placeholder="(512) 000-0000"
                    />
                  </div>
                </div>
                <div>
                  <label className="block font-body text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2">Insurance Type</label>
                  <select
                    name="insuranceType"
                    value={form.insuranceType}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-border py-3 font-body text-espresso focus:border-brand-red focus:outline-none transition-colors"
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
                  <label className="block font-body text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2">How Can We Help?</label>
                  <textarea
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-border py-3 font-body text-espresso focus:border-brand-red focus:outline-none transition-colors resize-none"
                    placeholder="Tell us a bit about what you're looking for..."
                  />
                </div>
                <button type="submit" className="btn-primary w-full md:w-auto">
                  Send Request
                  <ArrowRight size={16} className="ml-2" />
                </button>
              </form>
            )}
          </div>

          {/* Contact info */}
          <div className="lg:pl-8">
            <span className="font-body text-[0.65rem] tracking-[0.4em] uppercase text-clay">Reach Us Directly</span>
            <h2 className="font-heading text-4xl md:text-5xl text-espresso mt-4 mb-12">
              We're here to help.
            </h2>

            <div className="space-y-8">
              <a href="tel:5122923650" className="flex items-start gap-5 group">
                <div className="w-12 h-12 border border-espresso flex items-center justify-center flex-shrink-0 group-hover:bg-espresso group-hover:text-bone transition-all duration-300">
                  <Phone size={18} />
                </div>
                <div>
                  <h3 className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground mb-1">Call Us</h3>
                  <p className="font-heading text-2xl text-espresso group-hover:text-brand-red transition-colors">(512) 292-3650</p>
                  <p className="font-body text-sm text-muted-foreground mt-1">Speak directly with an agent</p>
                </div>
              </a>

              <div className="flex items-start gap-5">
                <div className="w-12 h-12 border border-espresso flex items-center justify-center flex-shrink-0">
                  <MapPin size={18} />
                </div>
                <div>
                  <h3 className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground mb-1">Service Area</h3>
                  <p className="font-heading text-xl text-espresso">Serving All of Texas</p>
                  <p className="font-body text-sm text-muted-foreground mt-1">Families & businesses statewide</p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-12 h-12 border border-espresso flex items-center justify-center flex-shrink-0">
                  <Clock size={18} />
                </div>
                <div>
                  <h3 className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground mb-1">Office Hours</h3>
                  <p className="font-body text-sm text-espresso">Monday – Friday: 9:00 AM – 6:00 PM</p>
                  <p className="font-body text-sm text-muted-foreground mt-1">Claims support available 24/7</p>
                </div>
              </div>
            </div>

            {/* Quick links */}
            <div className="mt-12 pt-12 border-t border-border">
              <h3 className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground mb-6">Quick Links</h3>
              <div className="flex flex-col gap-4">
                <a
                  href="https://www.lifeinsurancesimply.com/diversifiedinsurance"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-body text-sm text-espresso hover:text-brand-red transition-colors"
                >
                  <ArrowRight size={16} />
                  Get an Instant Quote
                </a>
                <a
                  href="https://dimitexas.epaypolicy.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-body text-sm text-espresso hover:text-brand-red transition-colors"
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