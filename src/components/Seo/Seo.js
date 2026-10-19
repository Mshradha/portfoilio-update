import React from 'react';
import { Helmet } from 'react-helmet';

import { site } from '../../data/site';

/**
 * Per-page title, description, canonical and social tags.
 * The matching tags in public/index.html carry data-react-helmet, so Helmet
 * replaces them instead of adding duplicates.
 */
function Seo({ title, description, path = '/' }) {
  const url = `${site.url}${path}`;
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
}

export default Seo;
