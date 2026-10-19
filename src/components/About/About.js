import React from 'react';

import Reveal from '../Reveal/Reveal';
import portrait from '../../assets/images/shradha-portrait.webp';
import { principles, recognition } from '../../data/about';
import './About.css';

function About() {
  return (
    <section id="about" className="section about" aria-labelledby="about-title" tabIndex={-1}>
      <div className="container about__grid">
        <Reveal className="about__intro">
          <p className="eyebrow">About</p>
          <h2 id="about-title" className="section-title about__title">
            From power systems to <em>product interfaces.</em>
          </h2>

          <div className="about__person">
            <figure className="about__portrait">
              <img src={portrait} width="560" height="700" loading="lazy" decoding="async" alt="Portrait of Shradha Mishra" />
            </figure>
            <div className="about__text">
              <p>
                I’m Shradha, a software engineer based in Pune. I work across the stack, but I’m happiest on the
                frontend: shaping component architecture, connecting interfaces to APIs, and getting the details right
                for how a screen behaves while data loads, fails or arrives.
              </p>
              <p>
                I came to software from electrical engineering, with a B.E. and an M.Tech in Power Systems, through
                Masai School’s full-stack program. Since 2022 I’ve built product features at Buyofuel and Marketplace
                integrations at Contentstack.
              </p>
              <p>Away from the keyboard you’ll find me reading, travelling, or making something by hand.</p>
            </div>
          </div>
        </Reveal>

        <div className="about__side">
          <ol className="principles" role="list">
            {principles.map((principle, index) => (
              <Reveal as="li" index={index} className="principle" key={principle.id}>
                <span className="principle__num" aria-hidden="true">
                  0{index + 1}
                </span>
                <div>
                  <h3 className="principle__title">{principle.title}</h3>
                  <p className="principle__body">{principle.body}</p>
                </div>
              </Reveal>
            ))}
          </ol>

          <Reveal className="recognition">
            <h3 className="recognition__title">Recognition &amp; leadership</h3>
            <ul className="recognition__list" role="list">
              {recognition.map((item) => (
                <li key={item.id}>
                  <span className="recognition__name">{item.title}</span>
                  <span className="recognition__detail">{item.detail}</span>
                  <span className="recognition__date">{item.date}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default About;
