import React, { useEffect, useRef, useState } from 'react';

/**
 * Animates a numeric value counting up from 0 once it scrolls into view.
 * Parses the first run of digits in `value` as the target number and keeps
 * any prefix/suffix text (e.g. "$1,200+", "10+", "24/7") intact around it.
 */
export default function AnimatedStat({ value, duration = 1600, className }) {
  const ref = useRef(null);
  const [display, setDisplay] = useState(null);

  // Find the first group of digits (optionally containing thousands separators).
  const match = value.match(/^[^0-9]*([0-9][0-9,]*)(.*)$/);
  const prefix = match ? value.slice(0, match.index) : '';
  const numericStr = match ? match[1] : '';
  const suffix = match ? match[2] : '';
  const hasComma = numericStr.includes(',');
  const target = numericStr ? parseInt(numericStr.replace(/,/g, ''), 10) : null;

  useEffect(() => {
    if (target === null) return; // no number to animate — render static
    const node = ref.current;
    let raf;
    let started = false;

    const format = (n) =>
      hasComma ? Math.round(n).toLocaleString('en-US') : String(Math.round(n));

    const run = (start) => {
      const step = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        // easeOutCubic
        const eased = 1 - Math.pow(1 - progress, 3);
        setDisplay(format(target * eased));
        if (progress < 1) raf = requestAnimationFrame(step);
      };
      raf = requestAnimationFrame(step);
    };

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started) {
            started = true;
            run(performance.now());
            io.disconnect();
          }
        });
      },
      { threshold: 0.4 }
    );

    if (node) io.observe(node);
    return () => {
      io.disconnect();
      if (raf) cancelAnimationFrame(raf);
    };
  }, [target, duration, hasComma]);

  if (target === null) {
    return <p className={className}>{value}</p>;
  }

  return (
    <p ref={ref} className={className}>
      {prefix}
      {display ?? (hasComma ? '0' : '0')}
      {suffix}
    </p>
  );
}