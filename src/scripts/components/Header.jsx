import React from 'react';
// import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap';

function Header() {
  return (
    <header>
      <Navbar collapseOnSelect expand="lg">
        <Navbar.Brand>
          <img
            src="../static/assets/logo-icon.jpg"
            alt="Adil Iqbal Logo"
            className="d-inline-block align-top mx-3 rounded"
          />
          Adil Iqbal
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <LinkContainer to="/" exact activeClassName="ai-active">
              <Nav.Link className="mx-3">Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/portfolio" activeClassName="ai-active">
              <Nav.Link className="mx-3">Portfolio</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/blog" activeClassName="ai-active">
              <Nav.Link className="mx-3">Blog</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/contact" activeClassName="ai-active">
              <Nav.Link className="mx-3">Contact</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
}

export { Header as default };
