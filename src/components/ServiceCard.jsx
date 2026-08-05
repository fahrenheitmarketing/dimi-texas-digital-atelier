import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Image } from '@/components/ui/image';

export default function ServiceCard({ icon: Icon, title, description, image, path, concerns }) {
  return (
    <Link to={path} className="group block bg-white overflow-hidden rounded-xl border border-border shadow-sm hover:shadow-lg transition-all duration-300">
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fittingType="fill"
          className="w-full h-full transition-all duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-brand-navy/0 group-hover:bg-brand-navy/15 transition-all duration-300"></div>
        {Icon && (
          <div className="absolute top-4 left-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-lg flex items-center justify-center">
            <Icon size={18} className="text-brand-blue" />
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-brand-navy mb-2 group-hover:text-brand-blue transition-colors duration-300">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          {description}
        </p>

        {concerns && (
          <ul className="space-y-1.5 mb-5">
            {concerns.map((c, i) => (
              <li key={i} className="text-xs text-muted-foreground flex items-start gap-2">
                <span className="text-brand-red mt-1">•</span>
                {c}
              </li>
            ))}
          </ul>
        )}

        <span className="inline-flex items-center gap-2 text-sm font-semibold text-brand-blue group-hover:text-brand-red transition-colors duration-300">
          Explore Coverage
          <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
        </span>
      </div>
    </Link>
  );
}