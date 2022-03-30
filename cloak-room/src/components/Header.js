import React from 'react'
import {Navbar, Container, Nav, Dropdown} from 'react-bootstrap'
import {Link} from 'react-router-dom'

function Header() {
  return (
    <div>
    <Navbar bg="light" expand="lg" fixed="top">
  <Container>
    <Navbar.Brand href="/aboutus">The Cloakroom</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto">
        <Nav.Link href="/aboutus">About Us</Nav.Link>
        <Nav.Link href="/menu">Order From Our Menu</Nav.Link>
        <Nav.Link href="/contact">Contact and Event Hire</Nav.Link>
        <Nav.Link href="/login">Login</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
</div>
  )
}

export default Header