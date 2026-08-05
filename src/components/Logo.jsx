import React from 'react';
import { Link } from 'react-router-dom';

export default function Logo({ variant = 'dark', className = '' }) {
  const textColor = variant === 'light' ? '#F9F7F2' : '#2D2926';
  const subColor = variant === 'light' ? '#8A9ED6' : '#2C389E';

  return (
    <Link to="/" className={`inline-flex flex-col items-center leading-none ${className}`} aria-label="Diversified Insurance — Home">
      {/* Hexagonal pinwheel mark */}
      <svg width="44" height="44" viewBox="0 0 100 100" className="mb-2" aria-hidden="true">
        <g transform="translate(50,50)">
          {[0, 60, 120, 180, 240, 300].map((angle, i) => (
            <path
              key={i}
              d="M 0,-38 A 38,38 0 0,1 32.91,-19 L 17.32,-10 A 20,20 0 0,0 0,-20 Z"
              fill={i % 2 === 0 ? '#2C389E' : '#8A9ED6'}
              transform={`rotate(${angle})`}
            />
          ))}
          <circle r="6" fill="#E31D27" />
        </g>
      </svg>
      <span
        className="font-heading text-xl md:text-2xl font-bold tracking-[0.08em] uppercase"
        style={{ color: '#E31D27', letterSpacing: '0.12em' }}
      >
        Diversified
      </span>
      <span
        className="font-body text-[0.6rem] md:text-[0.65rem] tracking-[0.35em] uppercase mt-1"
        style={{ color: subColor }}
      >
        Insurance
      </span>
      <span
        className="font-body text-[0.5rem] md:text-[0.55rem] tracking-[0.18em] uppercase mt-1.5 text-center"
        style={{ color: subColor }}
      >
        Home • Auto • Commercial • Life • Health
      </span>
    </Link>
  );
}