import React from 'react';

const inputCls =
  'w-full px-4 py-3 rounded-lg border-2 border-border focus:border-brand-blue focus:outline-none text-foreground placeholder:text-muted-foreground transition-colors bg-white';

const pillActive =
  'border-brand-blue bg-brand-blue text-white';
const pillIdle =
  'border-border text-brand-navy hover:border-brand-blue/50 bg-white';

function Label({ field }) {
  return (
    <label className="block text-sm font-semibold text-brand-navy mb-2">
      {field.label}
      {field.required && <span className="text-brand-red"> *</span>}
    </label>
  );
}

export default function QuoteField({ field, value, onChange, error }) {
  const { type, options, placeholder } = field;

  if (type === 'select') {
    return (
      <div>
        <Label field={field} />
        <select
          className={inputCls}
          value={value || ''}
          onChange={(e) => onChange(e.target.value)}
        >
          <option value="" disabled>
            Select…
          </option>
          {options.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
      </div>
    );
  }

  if (type === 'radio') {
    return (
      <div>
        <Label field={field} />
        <div className="flex flex-wrap gap-2">
          {options.map((o) => {
            const active = value === o;
            return (
              <button
                key={o}
                type="button"
                onClick={() => onChange(o)}
                className={`px-4 py-2 rounded-lg border-2 text-sm font-semibold transition-all ${active ? pillActive : pillIdle}`}
              >
                {o}
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  if (type === 'checkbox-group') {
    const arr = Array.isArray(value) ? value : [];
    return (
      <div>
        <Label field={field} />
        <div className="flex flex-wrap gap-2">
          {options.map((o) => {
            const active = arr.includes(o);
            return (
              <button
                key={o}
                type="button"
                onClick={() =>
                  onChange(active ? arr.filter((x) => x !== o) : [...arr, o])
                }
                className={`px-4 py-2 rounded-lg border-2 text-sm font-semibold transition-all ${active ? pillActive : pillIdle}`}
              >
                {o}
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  if (type === 'textarea') {
    return (
      <div>
        <Label field={field} />
        <textarea
          className={inputCls}
          rows={4}
          value={value || ''}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
        />
      </div>
    );
  }

  return (
    <div>
      <Label field={field} />
      <input
        type={type}
        inputMode={type === 'tel' ? 'tel' : undefined}
        className={inputCls}
        value={value || ''}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
      />
      {error && <p className="text-xs text-brand-red mt-1">{error}</p>}
    </div>
  );
}