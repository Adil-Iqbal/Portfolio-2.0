import PropTypes from 'prop-types';
import React from 'react';
import Container from 'react-bootstrap/Container';
import ArticleCard from '../ArticleCard';

function Blog(props) {
  const { articleData } = props;

  return (
    <Container>
      {articleData.map(articleProps => <ArticleCard key={articleProps.uuid} {...articleProps} />)}
    </Container>
  );
}

Blog.propTypes = {
  articleData: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export { Blog as default };
