import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

function Contact() {
  return (
    <Container>
      <Col>
        <Row>
          <p>First Column</p>
        </Row>
      </Col>
      <Col>
        <Row>
          <p>Second Column</p>
        </Row>
      </Col>
    </Container>
  );
}

export { Contact as default };
