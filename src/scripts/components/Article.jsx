import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Container from 'react-bootstrap/Container';
import { LinkContainer } from 'react-router-bootstrap';
import { PropTypes } from 'prop-types';
import CodeBlock from './CodeBlock';
import MathMarkdown from './MathMarkdown';
import Loading from './Loading';

const fetch = require('node-fetch');

class Article extends Component {
  constructor(props) {
    super(props);
    const { uuid } = this.props;
    this.state = {
      uuid,
      markdownSrc: null,
    };
  }

  async componentDidMount() {
    const { uuid } = this.state;
    const path = `./static/articles/markdown/${uuid}.md`;
    const blogPostNotFound = `<div class="ai-euler">\n\n#### Blog Post Not Found\n\nMy sincerest apologies; this blog post does not exist.\n\nConsider going back to the [main page](http://www.adil-iqbal.com) and enjoying our other content.\n\n</div>\r\n\r\n##### ${uuid}`;
    const response = await fetch(path);
    let markdownSrc;
    if (response.ok) {
      markdownSrc = await response.text();
    } else {
      markdownSrc = blogPostNotFound;
    }
    this.setState({ markdownSrc });
  }

  render() {
    const { markdownSrc } = this.state;
    if (markdownSrc) {
      return (
        <Container>
          <ButtonToolbar>
            <LinkContainer to="/blog">
              <Button variant="primary" className="ml-auto">Back to Blog</Button>
            </LinkContainer>
          </ButtonToolbar>
          <MathMarkdown
            className="mx-5 w-100"
            source={markdownSrc}
            renderers={{ code: CodeBlock }}
            escapeHtml={false}
            skipHtml={false}
          />
        </Container>
      );
    }
    return (
      <Loading message="Fetching article..." />
    );
  }
}

Article.propTypes = {
  uuid: PropTypes.string.isRequired,
};

export { Article as default };
