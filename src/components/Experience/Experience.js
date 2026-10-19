import React from 'react';

import Reveal from '../Reveal/Reveal';
import { education, experience } from '../../data/experience';
import './Experience.css';

function Role({ role }) {
  return (
    <Reveal as="li" className="role">
      <div className="role__aside">
        <p className="role__dates">
          <time>{role.start}</time> – <time>{role.end}</time>
        </p>
        <p className="role__company">{role.company}</p>
        {role.companyNote && <p className="role__note">{role.companyNote}</p>}
        <p className="role__note">{role.location}</p>
      </div>
      <div className="role__main">
        <h3 className="role__title">
          {role.title}
          <span className="visually-hidden">, {role.company}</span>
        </h3>
        <p className="role__summary">{role.summary}</p>
        <ul className="role__highlights">
          {role.highlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <ul className="tag-list" role="list" aria-label={`Technologies used at ${role.company}`}>
          {role.stack.map((tech) => (
            <li key={tech} className="tag">
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  );
}

function Experience() {
  return (
    <section id="experience" className="section experience" aria-labelledby="experience-title" tabIndex={-1}>
      <div className="container">
        <Reveal className="section-head section-head--split">
          <div>
            <p className="eyebrow">Experience</p>
            <h2 id="experience-title" className="section-title" style={{ marginTop: 'var(--space-4)' }}>
              Where I’ve <em>shipped.</em>
            </h2>
          </div>
          <p className="section-lede">
            Two product companies: integration engineering at Contentstack, and end-to-end product features at
            Buyofuel.
          </p>
        </Reveal>

        <ol className="roles" role="list">
          {experience.map((role) => (
            <Role key={role.id} role={role} />
          ))}
        </ol>

        <Reveal className="education">
          <h3 className="education__title">Education</h3>
          <ul className="education__list" role="list">
            {education.map((item) => (
              <li key={item.id}>
                <span className="education__course">{item.course}</span>
                <span className="education__school">{item.institution}</span>
                <span className="education__period">{item.period}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

export default Experience;
