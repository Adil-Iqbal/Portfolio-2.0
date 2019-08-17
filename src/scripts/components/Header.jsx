import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap';

function Header() {
  return (
    <header>
      <Container>
        <Navbar bg="light">
          <Navbar.Brand>Adil Iqbal</Navbar.Brand>
          <Nav className="mx-auto">
            <LinkContainer to="/">
              <Nav.Link className="mx-3">Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/portfolio">
              <Nav.Link className="mx-3">Portfolio</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/blog">
              <Nav.Link className="mx-3">Blog</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/contact">
              <Nav.Link className="mx-3">Contact</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar>
      </Container>
    </header>
  );
}

export { Header as default };
