import React, { useEffect, useRef } from 'react';

let observer = null;

// One shared observer for every revealed element on the page.
const getObserver = () => {
  if (observer || typeof window === 'undefined' || !('IntersectionObserver' in window)) return observer;
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.12 }
  );
  return observer;
};

/**
 * Fades its child block in once, when it scrolls into view.
 * Content stays visible without JS or with reduced motion (see base.css).
 */
function Reveal({ as: Tag = 'div', index = 0, className = '', style, children, ...rest }) {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;
    const io = getObserver();
    if (!io) {
      node.classList.add('is-visible');
      return undefined;
    }
    io.observe(node);
    return () => io.unobserve(node);
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal ${className}`.trim()}
      style={{ ...style, '--reveal-index': index }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

export default Reveal;
