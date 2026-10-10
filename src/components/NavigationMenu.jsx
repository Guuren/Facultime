import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FaGraduationCap } from 'react-icons/fa';

export default function NavigationMenu() {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" className="shadow-sm" aria-label="Main Navigation">
        <Container>
          <Navbar.Brand href="#home" className="fw-bold d-flex align-items-center gap-2">
            <FaGraduationCap className="text-primary fs-3" />
            <span>Facultime</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" aria-label="Toggle navigation menu" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto fw-semibold" role="menubar">
              <Nav.Link href="#home" role="menuitem" aria-current="page">Home</Nav.Link>
              <Nav.Link href="#consultation" role="menuitem">Book Slot</Nav.Link>
              <Nav.Link href="#guidelines" role="menuitem">Guidelines</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}