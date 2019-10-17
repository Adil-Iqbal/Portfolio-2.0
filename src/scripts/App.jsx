/* eslint-disable max-len */

import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Home from './components/pages/Home';
import Portfolio from './components/pages/Portfolio';
import Blog from './components/pages/Blog';
import Contact from './components/pages/Contact';
import NotFound from './components/pages/NotFound';
import Header from './components/Header';
import Article from './components/Article';
import Loading from './components/Loading';
import Footer from './components/Footer';

const fetch = require('node-fetch');

class App extends Component {
  constructor() {
    super();
    this.state = {
      articleData: null,
      projectData: null,
    };
  }

  async componentDidMount() {
    const response = await fetch('./static/data.json');
    const data = await response.json();
    this.setState({
      articleData: data.articles,
      projectData: data.projects,
    });
  }

  render() {
    const { articleData, projectData } = this.state;
    if (projectData && articleData) {
      return (
        <Container fluid>
          <Router>
            <Header />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/portfolio" render={() => <Portfolio projectData={projectData} />} />
              <Route path="/blog" render={() => <Blog articleData={articleData} />} />
              <Route path="/contact" component={Contact} />
              {
                articleData.map((articleProps) => {
                  const { uuid } = articleProps;
                  return <Route key={uuid} path={`/${uuid}`} render={() => <Article key={uuid} uuid={uuid} />} />;
                })
              }
              <Route component={NotFound} />
            </Switch>
            <Footer />
          </Router>
        </Container>
      );
    }
    return (
      <Container fluid>
        <Header disable />
        <Container>
          <Loading message="Fetching JSON data..." />
        </Container>
        <Footer />
      </Container>
    );
  }
}

export { App as default };
