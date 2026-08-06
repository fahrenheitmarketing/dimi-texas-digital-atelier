import React from 'react';
import { Link } from 'react-router-dom';

export default function Logo({ variant = 'dark', className = '' }) {
  const textColor = variant === 'light' ? '#F9F7F2' : '#2D2926';
  const subColor = variant === 'light' ? '#8A9ED6' : '#2C389E';
  const isLight = variant === 'light';

  return (
    <Link to="/" className={`inline-block leading-none ${className}`} aria-label="Diversified Insurance — Home">
      <img
        src="https://media.base44.com/images/public/6a738b6cc9947068aaaec25d/50d0ee177_diversified_insurance_logo.svg"
        alt="Diversified Insurance — Home • Auto • Commercial • Life • Occupational"
        className={`h-20 md:h-24 w-auto object-contain ${isLight ? '' : 'rounded-lg'}`}
        style={isLight ? { filter: 'brightness(0) invert(1)' } : undefined}
      />
    </Link>
  );
}