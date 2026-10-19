import React from 'react';
import { Link, Redirect, useParams } from 'react-router-dom';
import { FiArrowLeft, FiArrowRight, FiArrowUpRight } from 'react-icons/fi';

import Seo from '../../components/Seo/Seo';
import Reveal from '../../components/Reveal/Reveal';
import ProjectVisual from '../../components/ProjectVisual/ProjectVisual';
import Contact from '../../components/Contact/Contact';
import { caseStudies, getCaseStudy } from '../../data/projects';
import { site } from '../../data/site';
import './CaseStudy.css';

// Section order follows the case-study template; empty sections are skipped.
const buildSections = (study) =>
  [
    study.overview && { id: 'overview', title: 'Overview', body: <p>{study.overview}</p> },
    study.problem && { id: 'problem', title: 'The problem', body: <p>{study.problem}</p> },
    study.role && { id: 'role', title: 'My role', body: <p>{study.role}</p> },
    study.approach && {
      id: 'approach',
      title: 'Technical approach',
      body: (
        <ul className="cs-list">
          {study.approach.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      ),
    },
    study.decisions && {
      id: 'decisions',
      title: 'Architecture & decisions',
      body: (
        <div className="cs-decisions">
          {study.decisions.map((decision) => (
            <div className="cs-decision" key={decision.title}>
              <h3>{decision.title}</h3>
              <p>{decision.body}</p>
            </div>
          ))}
        </div>
      ),
    },
    study.challenges && {
      id: 'challenges',
      title: 'Challenges & solutions',
      body: (
        <dl className="cs-challenges">
          {study.challenges.map((item) => (
            <div key={item.challenge}>
              <dt>{item.challenge}</dt>
              <dd>{item.solution}</dd>
            </div>
          ))}
        </dl>
      ),
    },
    study.outcome && {
      id: 'outcome',
      title: 'Outcome',
      body: (
        <ul className="cs-outcomes">
          {study.outcome.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      ),
    },
  ].filter(Boolean);

function CaseStudy() {
  const { slug } = useParams();
  const study = getCaseStudy(slug);

  if (!study) return <Redirect to="/#work" />;

  const index = caseStudies.indexOf(study);
  const next = caseStudies[(index + 1) % caseStudies.length];
  const sections = buildSections(study);

  return (
    <article className="cs">
      <Seo
        title={`${study.title} — Case study · ${site.name}`}
        description={study.summary}
        path={`/work/${study.slug}`}
      />

      <header className="cs-hero">
        <div className="container">
          <Link to="/#work" className="cs-back">
            <FiArrowLeft aria-hidden="true" /> All work
          </Link>
          <p className="cs-meta">
            <span>Case study</span>
            <span aria-hidden="true">·</span>
            <span>{study.category}</span>
            <span aria-hidden="true">·</span>
            <span>{study.org}</span>
          </p>
          <h1 className="cs-title">{study.title}</h1>
          <p className="cs-lede">{study.summary}</p>

          <div className="cs-facts">
            {study.highlight && (
              <p className="cs-highlight">
                <span className="cs-facts__label">Result</span>
                {study.highlight}
              </p>
            )}
            {study.platforms && (
              <div>
                <span className="cs-facts__label">Platforms</span>
                <ul className="tag-list" role="list">
                  {study.platforms.map((platform) => (
                    <li key={platform} className="tag">
                      {platform}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {study.links && (
              <div>
                <span className="cs-facts__label">Source</span>
                {study.links.map((link) => (
                  <a key={link.href} className="text-link" href={link.href} target="_blank" rel="noopener noreferrer">
                    {link.label} <FiArrowUpRight aria-hidden="true" />
                    <span className="visually-hidden"> (opens in a new tab)</span>
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </header>

      <div className="container">
        <Reveal className="cs-visual">
          <ProjectVisual type={study.visual} />
        </Reveal>

        <div className="cs-layout">
          <aside className="cs-aside">
            <nav aria-label="Case study sections" className="cs-toc">
              <p className="cs-facts__label">On this page</p>
              <ol role="list">
                {sections.map((section) => (
                  <li key={section.id}>
                    <a href={`#${section.id}`}>{section.title}</a>
                  </li>
                ))}
              </ol>
            </nav>
            <div className="cs-stack">
              <p className="cs-facts__label">Stack</p>
              <ul className="tag-list" role="list">
                {study.stack.map((tech) => (
                  <li key={tech} className="tag">
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          <div className="cs-body">
            {sections.map((section, sectionIndex) => (
              <Reveal as="section" key={section.id} id={section.id} className="cs-section" aria-labelledby={`${section.id}-title`}>
                <h2 id={`${section.id}-title`} className="cs-section__title">
                  <span className="cs-section__num" aria-hidden="true">
                    0{sectionIndex + 1}
                  </span>
                  {section.title}
                </h2>
                <div className="cs-section__body">{section.body}</div>
              </Reveal>
            ))}

            <p className="cs-note">
              Details are kept at the level of public product behaviour. No proprietary code, internal URLs or customer
              data are shown.
            </p>
          </div>
        </div>

        <Link to={`/work/${next.slug}`} className="cs-next">
          <span className="cs-facts__label">Next case study</span>
          <span className="cs-next__title">
            {next.title} <FiArrowRight aria-hidden="true" />
          </span>
        </Link>
      </div>

      <Contact />
    </article>
  );
}

export default CaseStudy;
