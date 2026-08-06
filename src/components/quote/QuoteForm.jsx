import React, { useState } from 'react';
import { base44 } from '@/api/base44Client';
import { ArrowLeft, CheckCircle2, Loader2, Send } from 'lucide-react';
import QuoteField from './QuoteField';
import { CONTACT_FIELDS } from '@/data/quoteForms';

export default function QuoteForm({ service, onBack }) {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [serverError, setServerError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const set = (name, v) => setValues((prev) => ({ ...prev, [name]: v }));

  const requiredFields = [
    ...service.sections.flatMap((s) =>
      s.fields.filter((f) => f.required).map((f) => f.name)
    ),
    ...CONTACT_FIELDS.filter((f) => f.required).map((f) => f.name),
  ];

  const validate = () => {
    const errs = {};
    requiredFields.forEach((name) => {
      const v = values[name];
      if (!v || (Array.isArray(v) && v.length === 0)) errs[name] = 'Required';
    });
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setServerError('');
    if (!validate()) {
      const el = document.getElementById('quote-form-top');
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      return;
    }
    setSubmitting(true);
    try {
      const answers = service.sections.flatMap((s) =>
        s.fields.map((f) => ({ label: f.label, value: values[f.name] || '' }))
      );
      const contact = {};
      CONTACT_FIELDS.forEach((f) => {
        contact[f.name] = values[f.name] || '';
      });
      const res = await base44.functions.invoke('submitQuote', {
        serviceKey: service.key,
        serviceName: service.label,
        contact,
        answers,
        notes: values.notes || '',
      });
      if (res?.data?.ok) {
        setSubmitted(true);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        setServerError(res?.data?.error || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      setServerError(err.message || 'Unable to submit. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-2xl shadow-lg border border-border p-8 md:p-12 text-center max-w-2xl mx-auto">
        <div className="w-16 h-16 rounded-full bg-brand-blue/10 flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 size={36} className="text-brand-blue" />
        </div>
        <h2 className="text-2xl md:text-3xl text-brand-navy mb-3">Request received</h2>
        <p className="text-muted-foreground leading-relaxed mb-8 max-w-md mx-auto">
          Thank you, {values.firstName}. Your {service.label} quote request has been
          sent to our office. A licensed agent will review your details and reach out
          within one business day with your personalized options.
        </p>
        <button onClick={onBack} className="btn-blue">
          <ArrowLeft size={16} />
          Start a new quote
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-border overflow-hidden">
      <div id="quote-form-top" className="bg-brand-navy px-6 md:px-10 py-8">
        <div className="flex items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl md:text-3xl text-white">{service.label} Quote Request</h2>
            <p className="text-white/70 text-sm mt-2 max-w-xl">{service.blurb}</p>
          </div>
          <button
            onClick={onBack}
            className="hidden md:inline-flex items-center gap-2 text-sm font-semibold text-white/80 hover:text-white transition-colors flex-shrink-0"
          >
            <ArrowLeft size={16} />
            Change service
          </button>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="px-6 md:px-10 py-8 md:py-10 space-y-10">
        {service.sections.map((section) => (
          <div key={section.title}>
            <h3 className="text-xs font-bold tracking-wide uppercase text-brand-blue mb-5">
              {section.title}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {section.fields.map((f) => (
                <div
                  key={f.name}
                  className={f.width === 'full' ? 'md:col-span-2' : ''}
                >
                  <QuoteField
                    field={f}
                    value={values[f.name]}
                    onChange={(v) => set(f.name, v)}
                    error={errors[f.name]}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}

        <div>
          <h3 className="text-xs font-bold tracking-wide uppercase text-brand-blue mb-5">
            Your Contact Information
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {CONTACT_FIELDS.map((f) => (
              <div key={f.name} className={f.width === 'full' ? 'md:col-span-2' : ''}>
                <QuoteField
                  field={f}
                  value={values[f.name]}
                  onChange={(v) => set(f.name, v)}
                  error={errors[f.name]}
                />
              </div>
            ))}
          </div>
        </div>

        <div>
          <QuoteField
            field={{
              name: 'notes',
              label: 'Anything else we should know?',
              type: 'textarea',
              placeholder: 'Additional details, questions, or specific coverage needs…',
            }}
            value={values.notes}
            onChange={(v) => set('notes', v)}
          />
        </div>

        {serverError && (
          <div className="rounded-lg border-2 border-brand-red/30 bg-brand-red/5 px-4 py-3 text-sm text-brand-red font-semibold">
            {serverError}
          </div>
        )}

        <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
          <button
            type="submit"
            disabled={submitting}
            className="btn-primary w-full sm:w-auto disabled:opacity-60"
          >
            {submitting ? (
              <>
                <Loader2 size={16} className="animate-spin" />
                Sending…
              </>
            ) : (
              <>
                <Send size={16} />
                Submit quote request
              </>
            )}
          </button>
          <p className="text-xs text-muted-foreground">
            No obligation. We'll respond within one business day.
          </p>
        </div>
      </form>
    </div>
  );
}