import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { PropTypes } from 'prop-types';
import Nav from 'react-bootstrap/Nav';
import { LinkContainer } from 'react-router-bootstrap';

function Header(props) {
  const { disable } = props;
  if (disable) {
    return (
      <header>
        <Navbar>
          <Navbar.Brand>
            <img
              src="../static/assets/logo-icon.jpg"
              alt="Adil Iqbal Logo"
              className="d-inline-block align-top mx-3 rounded"
              style={{ 'background-color': '#28e1bd' }}
            />
          Adil Iqbal
          </Navbar.Brand>
        </Navbar>
      </header>
    );
  }

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
          <Nav>
            <LinkContainer to="/" exact activeClassName="ai-active">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/portfolio" activeClassName="ai-active">
              <Nav.Link>Portfolio</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/blog" activeClassName="ai-active">
              <Nav.Link>Blog</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/contact" activeClassName="ai-active">
              <Nav.Link>Contact</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
}

Header.propTypes = {
  disable: PropTypes.bool,
};

Header.defaultProps = {
  disable: false,
};

export { Header as default };
