import React from 'react';
import { Link } from 'react-router-dom';

export default function Logo({ variant = 'dark', className = '' }) {
  const textColor = variant === 'light' ? '#F9F7F2' : '#2D2926';
  const subColor = variant === 'light' ? '#8A9ED6' : '#2C389E';
  const isLight = variant === 'light';

  return (
    <Link to="/" className={`inline-block leading-none ${className}`} aria-label="Diversified Insurance — Home">
      <img
        src="https://media.base44.com/images/public/6a738b6cc9947068aaaec25d/3f3a9f1aa_image.png"
        alt="Diversified Insurance — Home • Auto • Commercial • Life • Health"
        className={`h-20 md:h-24 w-auto object-contain ${isLight ? '' : 'rounded-lg'}`}
        style={isLight ? { filter: 'brightness(0) invert(1)' } : undefined}
      />
    </Link>
  );
}