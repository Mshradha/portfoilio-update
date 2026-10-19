import React from 'react';
import { FiArrowUp } from 'react-icons/fi';

import { site } from '../../data/site';
import './Footer.css';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <p className="site-footer__mark" aria-hidden="true">
          SM<span>.</span>
        </p>
        <p className="site-footer__copy">
          © {year} {site.name}. Designed and built with React.
        </p>
        <a className="site-footer__top" href="#top">
          Back to top <FiArrowUp aria-hidden="true" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
