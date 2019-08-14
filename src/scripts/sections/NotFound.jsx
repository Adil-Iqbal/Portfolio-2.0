import React from 'react';
import Container from 'react-bootstrap/Container';

function NotFound() {
  return (
    <Container className="d-flex justify-content-center align-items-center">
      <h1 className="adil-not-found">404: Page Not Found</h1>
    </Container>
  );
}

export { NotFound as default };
