import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import { PropTypes } from 'prop-types';
import { LinkContainer } from 'react-router-bootstrap';
import Container from 'react-bootstrap/Container';
import MathMarkdown from './MathMarkdown';
import CodeBlock from './CodeBlock';

function Article(props) {
  const { markdownSrc } = props;
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

Article.propTypes = {
  markdownSrc: PropTypes.string.isRequired,
};

export { Article as default };
