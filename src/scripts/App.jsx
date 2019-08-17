import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './sections/Home';
import Portfolio from './sections/Portfolio';
import Blog from './sections/Blog';
import Contact from './sections/Contact';
import NotFound from './sections/NotFound';
import Header from './components/Header';

function App(props) {
  const { projectData, articleData } = props;
  return (
    <React.Fragment>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/portfolio" render={() => <Portfolio projectData={projectData} />} />
          <Route path="/blog" render={() => <Blog articleData={articleData} />} />
          <Route path="/contact" component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

App.propTypes = {
  projectData: PropTypes.arrayOf(PropTypes.object).isRequired,
  articleData: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export { App as default };
