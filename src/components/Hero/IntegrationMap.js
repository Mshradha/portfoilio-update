import React from 'react';

const groups = {
  dam: { label: 'Digital asset management', items: ['Frontify', 'Brandfolder', 'Cloudinary'] },
  video: { label: 'Video platforms', items: ['Brightcove', 'JW Player', 'Vimeo'] },
};

// Extension points of a Contentstack Marketplace app (as in the open-source Brandfolder app).
const locations = ['App config', 'Custom field', 'Asset selector', 'Rich text plugin'];

function PlatformRow({ group, position }) {
  return (
    <div className={`imap__group imap__group--${position}`}>
      <p className="imap__group-label">{group.label}</p>
      <ul className="imap__chips" role="list">
        {group.items.map((item) => (
          <li className="imap__chip" key={item}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

/** Diagram of the platforms Shradha has connected to Contentstack. Not a screenshot. */
function IntegrationMap() {
  return (
    <figure className="imap" aria-labelledby="imap-caption">
      <div className="imap__frame">
        <div className="imap__head" aria-hidden="true">
          <span>Fig. 01</span>
          <span>Integration map</span>
        </div>

        <PlatformRow group={groups.dam} position="top" />
        <div className="imap__bus imap__bus--top" aria-hidden="true" />

        <div className="imap__core">
          <p className="imap__core-kicker">Contentstack Marketplace app</p>
          <ul className="imap__locations" role="list">
            {locations.map((location) => (
              <li key={location}>{location}</li>
            ))}
          </ul>
        </div>

        <div className="imap__bus imap__bus--bottom" aria-hidden="true" />
        <PlatformRow group={groups.video} position="bottom" />
      </div>
      <figcaption id="imap-caption" className="imap__caption">
        DAM and video platforms I’ve connected to Contentstack through Marketplace apps.
      </figcaption>
    </figure>
  );
}

export default IntegrationMap;
