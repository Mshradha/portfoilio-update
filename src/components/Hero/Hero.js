import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiArrowUpRight } from 'react-icons/fi';

import IntegrationMap from './IntegrationMap';
import { site } from '../../data/site';
import { snapshot } from '../../data/about';
import './Hero.css';

function Hero() {
  return (
    <section id="intro" className="hero" aria-labelledby="hero-title">
      <div className="container">
        <div className="hero__grid">
          <div className="hero__copy">
            <p className="eyebrow hero__eyebrow">
              {site.role} · {site.positioning}
            </p>
            <h1 id="hero-title" className="hero__title">
              I turn complex ideas into software that <span className="hero__accent">feels effortless.</span>
            </h1>
            <p className="hero__lede">
              I build scalable web applications, marketplace integrations, and developer tools, with a focus on
              maintainability, usability, and thoughtful engineering.
            </p>
            <div className="hero__actions">
              <Link to="/#work" className="btn btn--primary">
                Explore My Work
                <FiArrowRight aria-hidden="true" />
              </Link>
              <a className="btn btn--ghost" href={site.resume} target="_blank" rel="noopener noreferrer">
                View Résumé
                <FiArrowUpRight aria-hidden="true" />
                <span className="visually-hidden"> (opens in a new tab)</span>
              </a>
            </div>
            <p className="hero__meta">
              <span>{site.location}</span>
              <span aria-hidden="true">/</span>
              <span>React · TypeScript · Node.js</span>
            </p>
          </div>

          <IntegrationMap />
        </div>

        <dl className="snapshot" aria-label="Professional snapshot">
          {snapshot.map((item) => (
            <div className="snapshot__item" key={item.label}>
              <dt className="snapshot__label">{item.label}</dt>
              <dd className="snapshot__value">{item.value}</dd>
              <dd className="snapshot__detail">{item.detail}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

export default Hero;
