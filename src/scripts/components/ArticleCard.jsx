import PropTypes from 'prop-types';
import React from 'react';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import { LinkContainer } from 'react-router-bootstrap';

function ArticleCard(props) {
  const {
    uuid, title, about, author, publishDate, tags, featuredBadge, newBadge,
  } = props;
  const imagePath = `../../static/articles/card-image/${uuid}.jpg`;
  return (
    <Card border="secondary" style={{ width: '100%' }} className="my-3">
      <Card.Body className="p-1">
        <Image src={imagePath} alt={title} className="float-left mr-3" />
        <Card.Title>
          {title}
          {' '}
          {featuredBadge && (<Badge variant="primary">Featured</Badge>)}
          {' '}
          {newBadge && (<Badge variant="success">New</Badge>)}
        </Card.Title>
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
          <LinkContainer to={`/${uuid}`}>
            <Button variant="primary" className="mr-3">Read</Button>
          </LinkContainer>
        </ButtonToolbar>
      </Card.Body>
    </Card>
  );
}

ArticleCard.propTypes = {
  uuid: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  publishDate: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  featuredBadge: PropTypes.bool.isRequired,
  newBadge: PropTypes.bool.isRequired,
};

export { ArticleCard as default };
