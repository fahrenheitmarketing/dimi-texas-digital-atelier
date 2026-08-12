import React, { useState } from 'react';
import { Upload, X, FileText, Loader2 } from 'lucide-react';
import { base44 } from '@/api/base44Client';

export default function PolicyUploader({ value = [], onChange }) {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState('');

  const handleFiles = async (fileList) => {
    const files = Array.from(fileList);
    if (!files.length) return;
    setError('');
    setUploading(true);
    try {
      const uploaded = await Promise.all(
        files.map(async (file) => {
          const res = await base44.integrations.Core.UploadFile({ file });
          return { name: file.name, url: res.file_url };
        })
      );
      onChange([...value, ...uploaded]);
    } catch (e) {
      setError('One or more files could not be uploaded. Please try again.');
    } finally {
      setUploading(false);
    }
  };

  const remove = (idx) => onChange(value.filter((_, i) => i !== idx));

  return (
    <div>
      <label className="block text-sm font-semibold text-brand-navy mb-2">
        Attach current policies (optional)
      </label>
      <p className="text-xs text-muted-foreground mb-3">
        Upload copies of your current policies (PDF, JPG, or PNG) so we can review your existing coverage.
      </p>

      <label className="flex items-center justify-center gap-2 w-full px-4 py-6 rounded-lg border-2 border-dashed border-border hover:border-brand-blue/50 cursor-pointer transition-colors bg-muted/20">
        {uploading ? (
          <>
            <Loader2 size={18} className="animate-spin text-brand-blue" />
            <span className="text-sm font-semibold text-muted-foreground">Uploading…</span>
          </>
        ) : (
          <>
            <Upload size={18} className="text-brand-blue" />
            <span className="text-sm font-semibold text-brand-navy">Click to upload policy documents</span>
          </>
        )}
        <input
          type="file"
          multiple
          accept=".pdf,.png,.jpg,.jpeg"
          className="hidden"
          onChange={(e) => handleFiles(e.target.files)}
          disabled={uploading}
        />
      </label>

      {error && <p className="text-xs text-brand-red mt-2">{error}</p>}

      {value.length > 0 && (
        <ul className="mt-3 space-y-2">
          {value.map((f, i) => (
            <li
              key={i}
              className="flex items-center justify-between gap-3 bg-muted/40 rounded-lg px-3 py-2"
            >
              <span className="flex items-center gap-2 text-sm text-brand-navy min-w-0">
                <FileText size={15} className="text-brand-blue flex-shrink-0" />
                <span className="truncate">{f.name}</span>
              </span>
              <button
                type="button"
                onClick={() => remove(i)}
                className="text-muted-foreground hover:text-brand-red transition-colors flex-shrink-0"
                aria-label={`Remove ${f.name}`}
              >
                <X size={16} />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}