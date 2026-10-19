import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import CaseStudy from './pages/CaseStudy/CaseStudy';
import ScrollManager from './utils/ScrollManager';

function App() {
  return (
    <Router>
      <ScrollManager />
      <div id="top" className="app">
        <Navbar />
        <main id="main" tabIndex={-1}>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/work/:slug" exact component={CaseStudy} />
            {/* Old routes from the previous portfolio point at the matching section. */}
            <Redirect from="/projects" to="/#work" />
            <Redirect from="/experience" to="/#experience" />
            <Redirect from="/skills" to="/#skills" />
            <Redirect from="/contacts" to="/#contact" />
            <Redirect to="/" />
          </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
