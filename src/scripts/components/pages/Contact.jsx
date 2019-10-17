import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function Contact() {
  const defaultMessage = 'Type your message here...';
  return (
    <Container>
      <Row>
        <Col lg={5}>
          <Form.Group controlId="emailAddress">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">We&apos;ll never share your email with anyone else.</Form.Text>
          </Form.Group>
          <Form.Group controlId="subject">
            <Form.Label>Subject</Form.Label>
            <Form.Control type="text-muted" placeholder="Subject" />
          </Form.Group>
          <Form.Group controlId="message">
            <Form.Label>Message</Form.Label>
            <Form.Control type="text-muted" as="textarea" placeholder={defaultMessage} />
          </Form.Group>
          <ButtonToolbar>
            <Button variant="primary" className="mx-auto">Send Message</Button>
          </ButtonToolbar>
        </Col>
        <Col lg={7} className="contactButtons">
          <Container>
            <Button variant="primary" size="lg">Call: (832) 788-2572</Button>
            <Button variant="primary" size="lg">E-mail: main@adil-iqbal.com</Button>
            <Button variant="primary" size="lg">Github</Button>
            <Button variant="primary" size="lg">Code Camp</Button>
            <Button variant="primary" size="lg">LinkedIn</Button>
          </Container>
        </Col>
      </Row>
    </Container>
  );
}

export { Contact as default };
