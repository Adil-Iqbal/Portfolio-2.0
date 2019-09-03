import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap';

function Header() {
  return (
    <header>
      <Container>
        <Navbar>
          <Navbar.Brand>
            <img
              src="../static/adil-logo.svg"
              alt="Adil Iqbal Logo"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
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
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </header>
  );
}

export { Header as default };
