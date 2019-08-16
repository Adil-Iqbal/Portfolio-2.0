import PropTypes from 'prop-types';
import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';

function Article(props) {
  const {
    image, title, about, uuid, author, publishDate, tags, readURL,
  } = props;
  return (
    <Card border="secondary" style={{ width: '100%' }} className="my-3">
      <Card.Body className="p-1">
        <Image src={image} className="float-left mr-3" />
        <Card.Title>{title}</Card.Title>
        <Card.Text>{about}</Card.Text>
        <ButtonToolbar className="d-flex justify-content-end">
          <OverlayTrigger
            placement="left"
            overlay={(
              <Popover id={uuid}>
                <Popover.Content>
                  {'Written by '}
                  <b>{author}</b>
                  {' and published on '}
                  <b>{publishDate}</b>
                  {'. (Tags: '}
                  <i>{tags.join(', ')}</i>
                  {')'}
                </Popover.Content>
              </Popover>
            )}
          >
            <span className="d-inline-block">
              <Button variant="link" className="mr-3" disabled>Info</Button>
            </span>
          </OverlayTrigger>
          <Button variant="primary" className="mr-3" onClick={() => window.open(readURL, '_blank')}>Read</Button>
        </ButtonToolbar>
      </Card.Body>
    </Card>
  );
}

Article.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
  uuid: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  publishDate: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  readURL: PropTypes.string.isRequired,
};

export { Article as default };
