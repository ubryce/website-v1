import React from 'react';
import '../App.css';
import  {Navbar, Nav, NavDropdown} from 'react-bootstrap';

function Navs() {
  return (
    <nav>
        <Navbar className="custom-nav-bg" collapseOnSelect expand="sm" variant="dark">
        <Navbar.Brand href="#home">bryce.</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
        </Nav>
        <Nav>
        <Nav.Link >work.</Nav.Link>
        <Nav.Link >about.</Nav.Link>
        <Nav.Link >contact.</Nav.Link>
        </Nav>
        </Navbar.Collapse>
      </Navbar>
    </nav>
  );
}

export default Navs;
