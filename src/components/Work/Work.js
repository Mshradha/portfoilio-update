import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiArrowUpRight, FiChevronDown, FiGithub } from 'react-icons/fi';

import Reveal from '../Reveal/Reveal';
import ProjectVisual from '../ProjectVisual/ProjectVisual';
import { caseStudies, earlierBuilds } from '../../data/projects';
import './Work.css';

function ProjectCard({ study, index }) {
  return (
    <Reveal as="article" index={index % 2} className={`work-card work-card--${index + 1}`}>
      <div className="work-card__visual">
        <ProjectVisual type={study.visual} />
      </div>
      <div className="work-card__body">
        <p className="work-card__meta">
          <span>{study.category}</span>
          <span aria-hidden="true">·</span>
          <span>{study.org}</span>
        </p>
        <h3 className="work-card__title">
          <Link to={`/work/${study.slug}`} className="work-card__link">
            {study.title}
          </Link>
        </h3>
        <p className="work-card__summary">{study.summary}</p>
        {study.highlight && <p className="work-card__highlight">{study.highlight}</p>}
        <ul className="tag-list work-card__tags" role="list">
          {study.tags.map((tag) => (
            <li key={tag} className="tag">
              {tag}
            </li>
          ))}
        </ul>
        <span className="work-card__cta" aria-hidden="true">
          Read case study <FiArrowRight />
        </span>
      </div>
    </Reveal>
  );
}

function EarlierBuild({ build }) {
  const [width, height] = build.imageSize;
  return (
    <li className="build">
      <div className="build__thumb">
        <img
          src={build.image}
          width={width}
          height={height}
          loading="lazy"
          decoding="async"
          alt={`Screenshot of the ${build.title}`}
        />
      </div>
      <div className="build__body">
        <h4 className="build__title">{build.title}</h4>
        <p className="build__desc">{build.description}</p>
        <ul className="tag-list" role="list">
          {build.tags.map((tag) => (
            <li key={tag} className="tag">
              {tag}
            </li>
          ))}
        </ul>
      </div>
      <div className="build__links">
        <a className="text-link" href={build.code} target="_blank" rel="noopener noreferrer">
          <FiGithub aria-hidden="true" /> Code<span className="visually-hidden"> for {build.title} (opens in a new tab)</span>
        </a>
        {build.demo && (
          <a className="text-link" href={build.demo} target="_blank" rel="noopener noreferrer">
            Live <FiArrowUpRight aria-hidden="true" />
            <span className="visually-hidden"> demo of {build.title} (opens in a new tab)</span>
          </a>
        )}
      </div>
    </li>
  );
}

const BUILDS_SHOWN = 3;

function Work() {
  const [showAll, setShowAll] = useState(false);
  const visibleBuilds = showAll ? earlierBuilds : earlierBuilds.slice(0, BUILDS_SHOWN);
  const hiddenCount = earlierBuilds.length - BUILDS_SHOWN;

  return (
    <section id="work" className="section work" aria-labelledby="work-title" tabIndex={-1}>
      <div className="container">
        <Reveal className="section-head section-head--split">
          <div>
            <p className="eyebrow">Selected work</p>
            <h2 id="work-title" className="section-title" style={{ marginTop: 'var(--space-4)' }}>
              Products and platforms <em>I’ve helped build.</em>
            </h2>
          </div>
          <p className="section-lede">
            Most of my recent work is integration engineering: connecting a CMS to the tools teams already use for
            assets and video, plus the shared foundations and workflows that make those apps faster to build.
          </p>
        </Reveal>

        <div className="work-grid">
          {caseStudies.map((study, index) => (
            <ProjectCard key={study.slug} study={study} index={index} />
          ))}
        </div>

        <Reveal className="builds">
          <div className="builds__head">
            <h3 className="builds__title">Earlier builds</h3>
            <p className="builds__note">
              Projects from my full-stack training and personal practice. Smaller in scope, kept here for context.
            </p>
          </div>
          <ul className="builds__list" role="list" id="builds-list">
            {visibleBuilds.map((build) => (
              <EarlierBuild key={build.id} build={build} />
            ))}
          </ul>
          {hiddenCount > 0 && (
            <button
              type="button"
              className="builds__more"
              aria-expanded={showAll}
              aria-controls="builds-list"
              onClick={() => setShowAll((value) => !value)}
            >
              {showAll ? 'Show fewer' : `Show ${hiddenCount} more`}
              <FiChevronDown aria-hidden="true" />
            </button>
          )}
        </Reveal>
      </div>
    </section>
  );
}

export default Work;
