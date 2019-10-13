import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function Skills() {
  const skillIcons = [
    ['react', 'react router'],
    ['redux', 'nodejs'],
    ['sass', 'bootstrap 4'],
    ['html 5', 'css 3'],
    ['photoshop', 'python 5'],
  ];
  return (
    skillIcons.map((pair) => {
      const firstPath = `../../../static/assets/${pair[0]}.svg`.replace(/ /g, '-');
      const secondPath = `../../../static/assets/${pair[1]}.svg`.replace(/ /g, '-');
      return (
        <Row className="ai-skill-component-wrapper">
          <Col className="ai-skill-icon-wrapper">
            <img
              src={firstPath}
              alt={pair[0]}
              className="ai-skill-icon"
            />
          </Col>
          <Col className="ai-skill-icon-wrapper">
            <img
              src={secondPath}
              alt={pair[1]}
              className="ai-skill-icon"
            />
          </Col>
        </Row>
      );
    })
  );
}

export { Skills as default };
