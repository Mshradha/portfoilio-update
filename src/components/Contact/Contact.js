import React, { useEffect, useState } from 'react';
import { FiArrowUpRight, FiCheck, FiCopy, FiFileText, FiGithub, FiLinkedin } from 'react-icons/fi';

import Reveal from '../Reveal/Reveal';
import { site } from '../../data/site';
import './Contact.css';

function CopyEmailButton() {
  const [copied, setCopied] = useState(false);
  const canCopy = typeof navigator !== 'undefined' && navigator.clipboard && window.isSecureContext;

  useEffect(() => {
    if (!copied) return undefined;
    const timer = window.setTimeout(() => setCopied(false), 2200);
    return () => window.clearTimeout(timer);
  }, [copied]);

  if (!canCopy) return null;

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
    } catch (e) {
      setCopied(false);
    }
  };

  return (
    <button type="button" className="contact__copy" onClick={copy}>
      {copied ? <FiCheck aria-hidden="true" /> : <FiCopy aria-hidden="true" />}
      <span>{copied ? 'Copied' : 'Copy email'}</span>
      <span className="visually-hidden" role="status" aria-live="polite">
        {copied ? 'Email address copied to clipboard' : ''}
      </span>
    </button>
  );
}

function Contact() {
  return (
    <section id="contact" className="contact" aria-labelledby="contact-title" tabIndex={-1}>
      <div className="container">
        <Reveal className="contact__panel">
          <svg className="contact__rings" viewBox="0 0 560 560" fill="none" aria-hidden="true">
            <circle cx="280" cy="280" r="279" stroke="currentColor" />
            <circle cx="280" cy="280" r="200" stroke="currentColor" />
            <circle cx="280" cy="280" r="121" stroke="currentColor" />
          </svg>
          <p className="eyebrow contact__eyebrow">Contact</p>
          <h2 id="contact-title" className="contact__title">
            Have an interesting problem <em>to solve?</em>
          </h2>
          <p className="contact__lede">
            I’m always interested in thoughtful products, challenging engineering problems, and opportunities to build
            useful software.
          </p>

          <div className="contact__email-row">
            <a className="contact__email" href={`mailto:${site.email}`}>
              {site.email}
            </a>
            <CopyEmailButton />
          </div>

          <ul className="contact__links" role="list">
            <li>
              <a href={site.socials.linkedin} target="_blank" rel="noopener noreferrer">
                <FiLinkedin aria-hidden="true" /> LinkedIn <FiArrowUpRight aria-hidden="true" className="contact__ext" />
                <span className="visually-hidden"> (opens in a new tab)</span>
              </a>
            </li>
            <li>
              <a href={site.socials.github} target="_blank" rel="noopener noreferrer">
                <FiGithub aria-hidden="true" /> GitHub <FiArrowUpRight aria-hidden="true" className="contact__ext" />
                <span className="visually-hidden"> (opens in a new tab)</span>
              </a>
            </li>
            <li>
              <a href={site.resume} target="_blank" rel="noopener noreferrer">
                <FiFileText aria-hidden="true" /> Résumé <FiArrowUpRight aria-hidden="true" className="contact__ext" />
                <span className="visually-hidden"> (opens in a new tab)</span>
              </a>
            </li>
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

export default Contact;
