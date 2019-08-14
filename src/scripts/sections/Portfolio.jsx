import React from 'react';
import Container from 'react-bootstrap/Container';
import Project from '../components/Project';

function Portfolio() {
  return (
    <Container>
      <p>Hello, sir. How are you today?</p>
      <Project />
    </Container>
  );
}

export { Portfolio as default };
