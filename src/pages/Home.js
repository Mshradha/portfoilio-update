import React from 'react';

import Seo from '../components/Seo/Seo';
import Hero from '../components/Hero/Hero';
import Work from '../components/Work/Work';
import About from '../components/About/About';
import Experience from '../components/Experience/Experience';
import Skills from '../components/Skills/Skills';
import Contact from '../components/Contact/Contact';
import { site } from '../data/site';

function Home() {
  return (
    <>
      <Seo
        title={`${site.name} — Software Engineer, Frontend & Full Stack`}
        description="Shradha Mishra is a full stack software engineer with a frontend focus, building web applications, Contentstack marketplace integrations for DAM and video platforms, and developer tooling with React, TypeScript and Node.js."
      />
      <Hero />
      <Work />
      <About />
      <Experience />
      <Skills />
      <Contact />
    </>
  );
}

export default Home;
