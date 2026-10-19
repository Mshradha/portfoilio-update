import { useEffect, useRef } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

const prefersReducedMotion = () =>
  window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// base.css sets `scroll-behavior: smooth`, which also applies to 'auto' scrolls,
// so it is switched off for the moment of an instant jump.
const withoutSmoothScroll = (scroll) => {
  const root = document.documentElement;
  const previous = root.style.scrollBehavior;
  root.style.scrollBehavior = 'auto';
  scroll();
  root.style.scrollBehavior = previous;
};

/**
 * Scrolls to the section named in the URL hash (and moves focus there for
 * keyboard and screen reader users), or to the top on a new page.
 * Only link clicks within the same page scroll smoothly; arriving from
 * another page, first loads, redirects and back/forward jump straight there.
 */
function ScrollManager() {
  const { pathname, hash, key } = useLocation();
  const { action } = useHistory();
  const previousPath = useRef(pathname);

  useEffect(() => {
    const isClick = action === 'PUSH';
    const samePage = previousPath.current === pathname;
    previousPath.current = pathname;

    if (!hash) {
      if (isClick) withoutSmoothScroll(() => window.scrollTo(0, 0));
      return undefined;
    }

    // Defer one task so a newly rendered page has its sections in the DOM.
    const timer = window.setTimeout(() => {
      const target = document.getElementById(decodeURIComponent(hash.slice(1)));
      if (!target) return;
      if (isClick && samePage && !prefersReducedMotion()) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        withoutSmoothScroll(() => target.scrollIntoView({ block: 'start' }));
      }
      if (isClick && target.hasAttribute('tabindex')) {
        target.focus({ preventScroll: true });
      }
    }, 0);
    return () => window.clearTimeout(timer);
  }, [pathname, hash, key, action]);

  return null;
}

export default ScrollManager;
