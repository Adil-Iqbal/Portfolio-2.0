import PropTypes from 'prop-types';
import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';


function ProjectCard(props) {
  const {
    uuid, title, features, about, launchURL, codeURL, featuredBadge, newBadge,
  } = props;
  const imagePath = `../../static/projects/card-image/${uuid}.jpg`;
  return (
    <Card border="secondary" style={{ width: '20rem' }} className="my-3">
      <Card.Img border="secondary" variant="top" src={imagePath} />
      <Card.Body>
        <Card.Title>
          {title}
          {' '}
          {featuredBadge && (<Badge variant="primary">Featured</Badge>)}
          {' '}
          {newBadge && (<Badge variant="success">New</Badge>)}
        </Card.Title>
        <ul>
          {features.map((item) => <li key={item}>{item}</li>)}
        </ul>
        <Card.Text>{about}</Card.Text>
        <ButtonToolbar>
          <Button variant="primary" className="mx-auto" onClick={() => window.open(launchURL, '_blank')}>Launch</Button>
          <Button variant="link" className="mx-auto" onClick={() => window.open(codeURL, '_blank')}>Github</Button>
        </ButtonToolbar>
      </Card.Body>
    </Card>
  );
}

ProjectCard.propTypes = {
  uuid: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  features: PropTypes.arrayOf(PropTypes.string).isRequired,
  about: PropTypes.string.isRequired,
  launchURL: PropTypes.string.isRequired,
  codeURL: PropTypes.string.isRequired,
  newBadge: PropTypes.bool.isRequired,
  featuredBadge: PropTypes.bool.isRequired,
};

export { ProjectCard as default };
