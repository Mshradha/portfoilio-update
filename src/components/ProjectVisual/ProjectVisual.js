import React from 'react';
import './ProjectVisual.css';

/*
 * Small CSS diagrams that stand in for screenshots of work that can't be
 * shown publicly. Each one describes the project's structure, and is marked
 * as an illustration so it is never mistaken for a real product screen.
 */

const Boilerplate = () => (
  <div className="pv-boiler">
    <div className="pv-boiler__apps">
      {['Brightcove', 'JW Player', 'Vimeo'].map((name) => (
        <span key={name} className="pv-node">
          {name}
        </span>
      ))}
    </div>
    <div className="pv-boiler__layers">
      <span className="pv-layer pv-layer--accent">Shared component architecture</span>
      <span className="pv-layer">REST API integration patterns</span>
      <span className="pv-layer">Multi-configuration</span>
      <span className="pv-layer">Build tooling conventions</span>
    </div>
  </div>
);

const Video = () => (
  <div className="pv-video">
    <div className="pv-video__sources">
      {['Brightcove', 'JW Player', 'Vimeo'].map((name) => (
        <span key={name} className="pv-node pv-node--sm">
          {name}
        </span>
      ))}
    </div>
    <span className="pv-arrow" />
    <div className="pv-video__field">
      <span className="pv-label">Entry field</span>
      <div className="pv-video__player">
        <span className="pv-play" />
      </div>
      <div className="pv-video__strip">
        <span />
        <span />
        <span className="is-selected" />
        <span />
      </div>
    </div>
  </div>
);

const Dam = () => (
  <div className="pv-dam">
    <div className="pv-dam__grid">
      {[0, 1, 2, 3, 4, 5].map((index) => (
        <span key={index} className={`pv-dam__asset${index === 1 ? ' is-selected' : ''}`} />
      ))}
    </div>
    <ul className="pv-dam__locations" role="list">
      <li>Config</li>
      <li>Custom field</li>
      <li className="is-active">Selector</li>
      <li>Rich text</li>
    </ul>
  </div>
);

const AiWorkflow = () => (
  <div className="pv-ai">
    <ol className="pv-ai__steps" role="list">
      {['Jira ticket', 'Investigate', 'Fix', 'Pull request', 'Review'].map((step, index) => (
        <li key={step} className={index === 0 ? 'is-start' : undefined}>
          {step}
        </li>
      ))}
    </ol>
    <div className="pv-ai__loop">
      <span className="pv-label">Iterate</span>
    </div>
    <div className="pv-ai__tests">
      <span className="pv-check" />
      Playwright E2E tests updated
    </div>
  </div>
);

const Product = () => (
  <div className="pv-product">
    <div className="pv-product__tabs">
      <span>Quotes</span>
      <span>Offers</span>
      <span className="is-active">Dispatch</span>
    </div>
    <div className="pv-product__panel">
      <span className="pv-label">Real-time transit status</span>
      <div className="pv-product__track">
        <span className="is-done" />
        <span className="is-done" />
        <span className="is-current" />
        <span />
      </div>
      <div className="pv-product__rows">
        <span />
        <span />
      </div>
    </div>
    <div className="pv-product__platforms">
      <span className="pv-node pv-node--sm">React · web</span>
      <span className="pv-node pv-node--sm">React Native · mobile</span>
      <span className="pv-node pv-node--sm">Node.js API</span>
    </div>
  </div>
);

const visuals = {
  boilerplate: Boilerplate,
  video: Video,
  dam: Dam,
  ai: AiWorkflow,
  product: Product,
};

function ProjectVisual({ type, className = '' }) {
  const Visual = visuals[type];
  if (!Visual) return null;
  return (
    <div className={`pv ${className}`.trim()} aria-hidden="true">
      <span className="pv__badge">Illustration</span>
      <div className="pv__stage">
        <Visual />
      </div>
    </div>
  );
}

export default ProjectVisual;
