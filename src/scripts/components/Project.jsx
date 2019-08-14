/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';

function Project(props) {
  const {
 title, image, about, features 
} = props;
  const imagePath = `../../static/${image}`;
  return (
    <Card border="secondary" style={{ width: '20rem' }}>
      <Card.Img variant="top" src={imagePath} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <ul>
          <li>Twitter API</li>
          <li>JSON Data</li>
          <li>HTML, CSS, Javascript</li>
          <li>Responsive Design</li>
        </ul>
        <Card.Text>{about}</Card.Text>
        <ButtonToolbar>
          <Button variant="primary" className="mx-auto">Launch</Button>
          <Button variant="link" className="mx-auto">Github</Button>
        </ButtonToolbar>
      </Card.Body>
    </Card>
  );
}

Project.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
  features: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export { Project as default };
