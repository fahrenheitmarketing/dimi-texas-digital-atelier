import React, { useState } from 'react';
import { base44 } from '@/api/base44Client';
import { CheckCircle2, Loader2, Send } from 'lucide-react';

export default function TeamContactForm({ memberName }) {
  const [values, setValues] = useState({ name: '', email: '', phone: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [serverError, setServerError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const set = (k, v) => setValues((p) => ({ ...p, [k]: v }));

  const validate = () => {
    const errs = {};
    if (!values.name.trim()) errs.name = 'Required';
    if (!values.email.trim()) errs.email = 'Required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) errs.email = 'Invalid email';
    if (!values.message.trim()) errs.message = 'Required';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setServerError('');
    if (!validate()) return;
    setSubmitting(true);
    try {
      const res = await base44.functions.invoke('submitContact', {
        name: values.name.trim(),
        email: values.email.trim(),
        phone: values.phone.trim(),
        insuranceType: `Team contact — ${memberName}`,
        message: values.message.trim(),
      });
      if (res?.data?.ok) {
        setSubmitted(true);
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
      <div className="flex items-center gap-3 bg-brand-blue/5 border border-brand-blue/20 rounded-lg p-4 text-sm">
        <CheckCircle2 size={20} className="text-brand-blue flex-shrink-0" />
        <p className="text-foreground">
          Thanks, {values.name.split(' ')[0]}! Your message to {memberName} has been sent.
        </p>
      </div>
    );
  }

  const base = 'w-full px-3 py-2 rounded-lg border-2 text-sm focus:outline-none transition-colors placeholder:text-muted-foreground';
  const ok = `${base} border-border focus:border-brand-blue`;
  const bad = `${base} border-brand-red focus:border-brand-red`;

  return (
    <form onSubmit={handleSubmit} className="mt-4 space-y-3">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div>
          <input
            type="text"
            placeholder="Your name"
            value={values.name}
            onChange={(e) => set('name', e.target.value)}
            className={errors.name ? bad : ok}
          />
          {errors.name && <p className="text-xs text-brand-red mt-1">{errors.name}</p>}
        </div>
        <div>
          <input
            type="text"
            placeholder="Phone (optional)"
            value={values.phone}
            onChange={(e) => set('phone', e.target.value)}
            className={ok}
          />
        </div>
      </div>
      <div>
        <input
          type="email"
          placeholder="Your email"
          value={values.email}
          onChange={(e) => set('email', e.target.value)}
          className={errors.email ? bad : ok}
        />
        {errors.email && <p className="text-xs text-brand-red mt-1">{errors.email}</p>}
      </div>
      <div>
        <textarea
          placeholder={`Message for ${memberName}…`}
          rows={3}
          value={values.message}
          onChange={(e) => set('message', e.target.value)}
          className={`${errors.message ? bad : ok} resize-none`}
        />
        {errors.message && <p className="text-xs text-brand-red mt-1">{errors.message}</p>}
      </div>
      {serverError && <p className="text-xs text-brand-red font-semibold">{serverError}</p>}
      <button
        type="submit"
        disabled={submitting}
        className="inline-flex items-center justify-center gap-2 w-full px-4 py-2.5 bg-brand-blue text-white text-sm font-semibold rounded-lg hover:bg-brand-blue/90 transition-colors disabled:opacity-60"
      >
        {submitting ? (
          <>
            <Loader2 size={15} className="animate-spin" />
            Sending…
          </>
        ) : (
          <>
            <Send size={15} />
            Send to {memberName.split(' ')[0]}
          </>
        )}
      </button>
    </form>
  );
}