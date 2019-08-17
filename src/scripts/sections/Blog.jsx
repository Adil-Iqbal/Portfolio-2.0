
import PropTypes from 'prop-types';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Article from '../components/Article';

function Blog(props) {
  const { articleData } = props;
  return (
    <Container>
      {articleData.map((article) => {
        const {
          image, title, about, uuid, author, publishDate, tags, readURL, featuredBadge, newBadge,
        } = article;
        return (
          <Article
            image={image}
            title={title}
            about={about}
            key={uuid}
            uuid={uuid}
            author={author}
            publishDate={publishDate}
            tags={tags}
            readURL={readURL}
            featuredBadge={featuredBadge}
            newBadge={newBadge}
          />
        );
      })}
    </Container>
  );
}

Blog.propTypes = {
  articleData: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export { Blog as default };
