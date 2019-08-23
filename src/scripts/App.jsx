/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Portfolio from './components/pages/Portfolio';
import Blog from './components/pages/Blog';
import Contact from './components/pages/Contact';
import NotFound from './components/pages/NotFound';
import Header from './components/Header';
import Article from './components/Article';

function App(props) {
  const { projectData, articleData, articleContent } = props;
  return (
    <React.Fragment>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/portfolio" render={() => <Portfolio projectData={projectData} />} />
          <Route path="/blog" render={() => <Blog articleData={articleData} />} />
          <Route path="/contact" component={Contact} />{
            articleData.map((articleProps, index) => {
              const uuid = articleProps.uuid;
              const content = articleContent[index]
              return <Route key={uuid} to={`/${uuid}`} render={() => <Article key={uuid} markdownSrc={content} />} />;
            })
          }
          <Route component={NotFound} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

App.propTypes = {
  projectData: PropTypes.arrayOf(PropTypes.object).isRequired,
  articleData: PropTypes.arrayOf(PropTypes.object).isRequired,
  articleContent: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export { App as default };
