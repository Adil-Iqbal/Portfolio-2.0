import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';

function Project(props) {
  const {
    title, image, features, about, launchURL, codeURL,
  } = props;
  const imagePath = `../../static/${image}`;
  return (
    <Card border="secondary" style={{ width: '20rem' }} className="my-3">
      <Card.Img variant="top" src={imagePath} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <ul>
          {features.map(item => <li>{item}</li>)}
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

Project.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  features: PropTypes.arrayOf(PropTypes.string).isRequired,
  about: PropTypes.string.isRequired,
  launchURL: PropTypes.string.isRequired,
  codeURL: PropTypes.string.isRequired,
};

export { Project as default };
