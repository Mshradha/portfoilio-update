import React from 'react';

import Reveal from '../Reveal/Reveal';
import { skillGroups } from '../../data/skills';
import './Skills.css';

function Skills() {
  return (
    <section id="skills" className="section skills" aria-labelledby="skills-title" tabIndex={-1}>
      <div className="container">
        <Reveal className="section-head section-head--split">
          <div>
            <p className="eyebrow">Skills</p>
            <h2 id="skills-title" className="section-title" style={{ marginTop: 'var(--space-4)' }}>
              The toolkit, <em>grouped by use.</em>
            </h2>
          </div>
          <p className="section-lede">
            What I reach for day to day. The case studies and experience above show where each one was used.
          </p>
        </Reveal>

        <div className="skills__grid">
          {skillGroups.map((group, index) => (
            <Reveal key={group.id} index={index % 2} className="skill-group">
              <div className="skill-group__head">
                <h3 className="skill-group__title">{group.title}</h3>
                <p className="skill-group__note">{group.note}</p>
              </div>
              <ul className="skill-group__list" role="list">
                {group.items.map(({ name, icon: Icon }) => (
                  <li key={name} className="skill">
                    {Icon ? <Icon className="skill__icon" aria-hidden="true" /> : <span className="skill__dot" aria-hidden="true" />}
                    {name}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
