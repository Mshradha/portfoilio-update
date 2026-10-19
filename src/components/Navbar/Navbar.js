import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';

import ThemeToggle from '../ThemeToggle/ThemeToggle';
import { navLinks, site } from '../../data/site';
import './Navbar.css';

const useScrolled = (offset = 12) => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > offset);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [offset]);
  return scrolled;
};

// Highlights the nav item for the section currently in view (home page only).
const useActiveSection = (enabled) => {
  const [active, setActive] = useState('');
  useEffect(() => {
    if (!enabled || !('IntersectionObserver' in window)) return undefined;
    // The hero is observed too, so nothing is highlighted while it is in view.
    const sections = ['intro', ...navLinks.map(({ id }) => id)]
      .map((id) => document.getElementById(id))
      .filter(Boolean);
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );
    sections.forEach((section) => io.observe(section));
    return () => io.disconnect();
  }, [enabled]);
  return enabled ? active : '';
};

function Navbar() {
  const { pathname } = useLocation();
  const isHome = pathname === '/';
  const scrolled = useScrolled();
  const active = useActiveSection(isHome);
  const [open, setOpen] = useState(false);
  const toggleRef = useRef(null);
  const panelRef = useRef(null);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    close();
  }, [pathname, close]);

  useEffect(() => {
    if (!open) return undefined;
    document.body.style.overflow = 'hidden';
    const firstLink = panelRef.current && panelRef.current.querySelector('a');
    if (firstLink) firstLink.focus();

    const toggleButton = toggleRef.current;
    const onKey = (event) => {
      if (event.key === 'Escape') {
        setOpen(false);
        if (toggleButton) toggleButton.focus();
      }
    };
    const onResize = () => {
      if (window.innerWidth >= 900) setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    window.addEventListener('resize', onResize);
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', onKey);
      window.removeEventListener('resize', onResize);
    };
  }, [open]);

  return (
    <header className={`site-header${scrolled || open ? ' is-scrolled' : ''}${open ? ' is-open' : ''}`}>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <div className="container site-header__inner">
        <Link to="/" className="wordmark" aria-label={`${site.name}, home`}>
          <span className="wordmark__mark" aria-hidden="true">
            SM<span className="wordmark__dot">.</span>
          </span>
          <span className="wordmark__name">{site.name}</span>
        </Link>

        <nav className="site-nav" aria-label="Primary">
          <ul className="site-nav__list" role="list">
            {navLinks.map(({ id, label }) => (
              <li key={id}>
                <Link
                  to={`/#${id}`}
                  className="site-nav__link"
                  aria-current={active === id ? 'true' : undefined}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="site-header__actions">
          <ThemeToggle />
          {/* Goes to the Contact section rather than mailto:, which does nothing without a mail app. */}
          <Link to="/#contact" className="btn btn--primary site-header__cta">
            Get in touch
          </Link>
          <button
            ref={toggleRef}
            type="button"
            className="menu-toggle"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <FiX aria-hidden="true" /> : <FiMenu aria-hidden="true" />}
          </button>
        </div>
      </div>

      <div id="mobile-menu" ref={panelRef} className={`mobile-menu${open ? ' is-open' : ''}`} hidden={!open}>
        <nav aria-label="Mobile">
          <ul role="list" className="mobile-menu__list">
            {navLinks.map(({ id, label }, index) => (
              <li key={id} style={{ '--i': index }}>
                <Link to={`/#${id}`} className="mobile-menu__link" onClick={close}>
                  <span className="mobile-menu__index" aria-hidden="true">
                    0{index + 1}
                  </span>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="mobile-menu__footer">
          <Link to="/#contact" className="btn btn--primary" onClick={close}>
            Get in touch
          </Link>
          <a className="btn btn--ghost" href={site.resume} target="_blank" rel="noopener noreferrer">
            View Résumé
            <span className="visually-hidden"> (opens in a new tab)</span>
          </a>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
