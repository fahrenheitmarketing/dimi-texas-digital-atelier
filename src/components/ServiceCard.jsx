import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Image } from '@/components/ui/image';

export default function ServiceCard({ icon: Icon, title, description, image, path, concerns }) {
  return (
    <Link to={path} className="group block bg-card overflow-hidden border border-border hover:border-clay transition-all duration-500">
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fittingType="fill"
          className="w-full h-full transition-all duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-espresso/0 group-hover:bg-espresso/20 transition-all duration-500"></div>
        {Icon && (
          <div className="absolute top-4 left-4 w-10 h-10 bg-bone/90 backdrop-blur-sm flex items-center justify-center">
            <Icon size={18} className="text-brand-blue" />
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 md:p-8">
        <h3 className="font-heading text-2xl text-espresso mb-3 group-hover:text-brand-red transition-colors duration-300">
          {title}
        </h3>
        <p className="font-body text-sm text-muted-foreground leading-relaxed mb-5">
          {description}
        </p>

        {concerns && (
          <ul className="space-y-1.5 mb-6">
            {concerns.map((c, i) => (
              <li key={i} className="font-body text-xs text-muted-foreground flex items-start gap-2">
                <span className="text-brand-red mt-1.5">•</span>
                {c}
              </li>
            ))}
          </ul>
        )}

        <span className="inline-flex items-center gap-2 font-body text-[0.7rem] tracking-[0.2em] uppercase text-espresso group-hover:text-brand-red transition-colors duration-300">
          Explore Coverage
          <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
        </span>
      </div>
    </Link>
  );
}